import React from 'react'
import { connect } from 'react-redux'
import Song from './Song'

const ResultList = props => {
	return (
		<>
			{!props.songs.error ? (
				props.songs.hits ? (
					<ul className='collection' style={{ border: 'none' }}>
						{props.songs.hits.map(hit => {
							return <Song key={hit.result.id} song={hit.result} />
						})}
					</ul>
				) : null
			) : (
				<div
					class='card-panel red'
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						right: '0',
						bottom: '0',
						margin: 'auto',
						height: '70px',
						width: '400px',
						textAlign: 'center',
						zIndex: '-1'
					}}
				>
					<span class='white-text'>{props.songs.error}</span>
				</div>
			)}
		</>
	)
}

const mapStateToProps = state => {
	return { songs: state.search }
}

export default connect(mapStateToProps)(ResultList)
