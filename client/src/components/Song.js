import React from 'react'
import * as actions from '../store/actions'
import { connect } from 'react-redux'
import history from '../history'

const Song = props => {
	const handleClick = () => {
		props.getGeniusLyrics(props.song.id, props.language)
		props.selectSong(props.song)
		history.push('/lyrics')
	}

	return (
		<li onClick={handleClick} className='collection-item avatar hoverable'>
			<img
				src={props.song.header_image_thumbnail_url}
				alt=''
				className='circle'
			/>
			<span className='title'>{props.song.title_with_featured}</span>
			<p>{props.song.primary_artist.name}</p>
			<div className='secondary-content black-text'>
				<i className='material-icons'>g_translate</i>
			</div>
		</li>
	)
}

const mapStateToProps = ({ language }) => {
	return { language }
}

export default connect(
	mapStateToProps,
	actions
)(Song)
