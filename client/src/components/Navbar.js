import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
			<nav>
				<div className='nav-wrapper cyan lighten-3'>
					<NavLink to='/' className='brand-logo center'>
						<i className='material-icons'>cloud</i>Lyrics Translator
					</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
