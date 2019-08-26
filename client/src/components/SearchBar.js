import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import M from 'materialize-css'

class SearchBar extends React.Component {
	state = { search: '', language: 'af' }

	componentDidMount = () => {
		this.props.flushStore()
		this.props.getLanguages()
		M.AutoInit()
	}

	componentDidUpdate = () => {
		M.AutoInit()
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSelect = e => {
		this.props.selectLanguage(e.target.value)
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.newGeniusSearch(this.state.search)
		this.props.selectLanguage(this.state.language)
	}

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className='white'
				style={{ marginTop: '5%' }}
			>
				<div className='input-field'>
					<i className='material-icons prefix'>search</i>
					<input
						placeholder='Enter Artist and/or Song'
						type='text'
						id='search'
						maxLength='100'
						onChange={this.handleChange}
					/>
				</div>
				<div className='input-field'>
					<i className='material-icons prefix'>flag</i>
					<select onChange={this.handleSelect} id='language'>
						<option disabled>Choose Language</option>
						{this.props.google.languages
							? this.props.google.languages.map(language => {
									return (
										<option key={language.code} value={language.code}>
											{language.name}
										</option>
									)
							  })
							: null}
					</select>
				</div>
				<button
					className={`right btn grey z-depth-0 ${
						!this.state.search ? 'disabled' : ''
					}`}
				>
					Search
				</button>
			</form>
		)
	}
}

const mapStateToProps = ({ spotify, auth, genius, google, search }) => {
	return { spotify, auth, genius, google, search }
}

export default connect(
	mapStateToProps,
	actions
)(SearchBar)
