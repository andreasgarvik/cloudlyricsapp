import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import M from 'materialize-css'

class LanguageSelector extends React.Component {
	state = { language: 'af' }

	componentDidMount = () => {
		this.props.getLanguages()
	}

	componentDidUpdate = () => {
		M.AutoInit()
		this.props.selectLanguage(this.state.language)
	}

	handleSelect = e => {
		this.props.selectLanguage(e.target.value)
		this.setState({ language: e.target.value })
	}

	render() {
		return (
			<div className='input-field' style={{ marginTop: '2%' }}>
				<i className='material-icons prefix'>flag</i>
				<select onChange={this.handleSelect} id='language'>
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
		)
	}
}

const mapStateToProps = ({ google, language }) => {
	return { google, language }
}

export default connect(
	mapStateToProps,
	actions
)(LanguageSelector)
