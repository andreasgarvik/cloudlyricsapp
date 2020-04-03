import React from 'react'

const Footer = () => {
	return (
		<footer className='page-footer blue lighten-1'>
			<div className='container'>
				<div className='row'>
					<div className='col s6'>Lyrics by GENIUS</div>
					<div className='col s6 right-align'>Translation by Google</div>
				</div>
			</div>
			<div className='footer-copyright'>
				<div className='container'>
					Created by Andreas Garvik
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/andreasgarvik'
					>
						Github
					</a>
				</div>
			</div>
		</footer>
	)
}
export default Footer
