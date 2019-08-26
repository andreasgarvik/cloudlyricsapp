import React from 'react'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

const CameraContainer = props => {
	const handlePhoto = dataUri => {
		props.pictureTaken()
		props.imageSearch(dataUri)
	}

	return (
		<div style={{ marginTop: '2%' }}>
			<Camera
				isSilentMode={true}
				onTakePhoto={dataUri => {
					handlePhoto(dataUri)
				}}
			/>
		</div>
	)
}

export default connect(
	null,
	actions
)(CameraContainer)
