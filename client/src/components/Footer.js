import React from 'react'

const Footer = () => {
	return (
		<footer className='page-footer cyan lighten-3'>
			<div className='container'>
				<div className='row right'>
					Translation done by Google Translation API
				</div>
				<div className='row'>Lyrics provided by GENIUS</div>
			</div>
			<div className='footer-copyright'>
				<div className='container'>
					© 2019 Created by Andreas Garvik
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
