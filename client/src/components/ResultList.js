import React from 'react'
import { connect } from 'react-redux'
import Song from './Song'

const ResultList = props => {
	return (
		<>
			{props.songs.hits ? (
				<ul className='collection' style={{ border: 'none' }}>
					{props.songs.hits.map(hit => {
						return <Song key={hit.result.id} song={hit.result} />
					})}
				</ul>
			) : null}
		</>
	)
}

const mapStateToProps = state => {
	return { songs: state.search }
}

export default connect(mapStateToProps)(ResultList)
