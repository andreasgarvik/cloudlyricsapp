import React from 'react'
import { connect } from 'react-redux'
import Loader from './Loader'

const LyricsPage = props => {
	return (
		<div className='container'>
			{props.lyrics.lyrics ? (
				<div className='card z-depth-0'>
					<div className='row'>
						<div className='col s12 m6'>
							<div className='card-content'>
								<span className='card-title'>
									{props.song.title_with_featured}
								</span>
								<p style={{ whiteSpace: 'pre-wrap' }}>{props.lyrics.lyrics}</p>
							</div>
						</div>
						<div className='col s12 m6' style={{ marginTop: '3.5%' }}>
							<div className='card-image'>
								<img
									src={props.song.song_art_image_url}
									alt=''
									className='responsive-img'
								/>
								<img
									style={{ marginTop: '10%' }}
									src={props.song.primary_artist.image_url}
									alt=''
									className='responsive-img'
								/>
							</div>
						</div>
					</div>
					<div
						className='card-action grey lighten-4 grey-text'
						style={{ border: 'none' }}
					>
						<div>
							{props.song.full_title}
							<a className='right' href={props.song.url}>
								GENUIS
							</a>
						</div>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</div>
	)
}

const mapStateToProps = ({ lyrics, song }) => {
	return { lyrics, song }
}

export default connect(mapStateToProps)(LyricsPage)
