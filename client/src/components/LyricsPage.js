import React from 'react'
import { connect } from 'react-redux'

const LyricsPage = props => {
	const renderLoader = () => {
		return (
			<div className='preloader-wrapper big active'>
				<div className='spinner-layer spinner-blue'>
					<div className='circle-clipper left'>
						<div className='circle' />
					</div>
					<div className='gap-patch'>
						<div className='circle' />
					</div>
					<div className='circle-clipper right'>
						<div className='circle' />
					</div>
				</div>

				<div className='spinner-layer spinner-red'>
					<div className='circle-clipper left'>
						<div className='circle' />
					</div>
					<div className='gap-patch'>
						<div className='circle' />
					</div>
					<div className='circle-clipper right'>
						<div className='circle' />
					</div>
				</div>

				<div className='spinner-layer spinner-yellow'>
					<div className='circle-clipper left'>
						<div className='circle' />
					</div>
					<div className='gap-patch'>
						<div className='circle' />
					</div>
					<div className='circle-clipper right'>
						<div className='circle' />
					</div>
				</div>

				<div className='spinner-layer spinner-green'>
					<div className='circle-clipper left'>
						<div className='circle' />
					</div>
					<div className='gap-patch'>
						<div className='circle' />
					</div>
					<div className='circle-clipper right'>
						<div className='circle' />
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='container' style={{ marginTop: '2%' }}>
			<div className='card z-depth-0'>
				<div className='row'>
					<div className='col s12 m6'>
						<div className='card-content'>
							{props.lyrics.lyrics ? (
								<>
									<span className='card-title'>
										{props.song.title_with_featured}
									</span>
									<p style={{ whiteSpace: 'pre-wrap' }}>
										{props.lyrics.lyrics}
									</p>
								</>
							) : (
								renderLoader()
							)}
						</div>
					</div>
					<div className='col s12 m6'>
						<div className='card-image'>
							<img
								src={props.song.header_image_url}
								alt=''
								className='circle responsive-img'
							/>
						</div>
					</div>
				</div>
				{props.lyrics.lyrics ? (
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
				) : null}
			</div>
		</div>
	)
}

const mapStateToProps = ({ lyrics, song }) => {
	return { lyrics, song }
}

export default connect(mapStateToProps)(LyricsPage)
