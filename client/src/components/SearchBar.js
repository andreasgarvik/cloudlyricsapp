import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import LanguageSelector from './LanguageSelector'
import CameraContainer from './CameraContainer'
import M from 'materialize-css'
import Loader from './Loader'

class SearchBar extends React.Component {
	state = { search: '', camera: false, loader: false }

	componentDidMount = () => {
		this.props.flushStore()
		M.AutoInit()
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({ camera: false, loader: true })
		this.props.newGeniusSearch(this.state.search)
	}

	showCamera = () => {
		this.state.camera
			? this.setState({ camera: false })
			: this.setState({ camera: true })
	}

	render() {
		return (
			<>
				<LanguageSelector />
				<form
					onSubmit={this.handleSubmit}
					className='white'
					style={{ marginTop: '2%' }}
				>
					<div className='input-field'>
						<i className='material-icons prefix'>search</i>
						<input
							type='text'
							id='search'
							maxLength='100'
							placeholder='Enter Artist, Song or part of the lyrics'
							onChange={this.handleChange}
						/>
					</div>
					<button
						className={`right btn grey z-depth-0 btn-floating btn-large ${
							!this.state.search ? 'disabled' : ''
						}`}
					>
						<i className='material-icons'>search</i>
					</button>
				</form>
				<button
					className='btn grey z-depth-0 btn-floating btn-large'
					onClick={this.showCamera}
				>
					<i className='material-icons'>camera_alt</i>
				</button>
				{this.state.camera ? (
					<CameraContainer
						pictureTaken={() =>
							this.setState({ camera: false, search: '', loader: true })
						}
					/>
				) : null}
				{this.state.loader &&
				!this.props.search.hits &&
				!this.props.search.error ? (
					<Loader />
				) : null}
			</>
		)
	}
}

const mapStateToProps = ({ genius, search }) => {
	return { genius, search }
}

export default connect(
	mapStateToProps,
	actions
)(SearchBar)
