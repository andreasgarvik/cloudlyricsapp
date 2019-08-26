import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
			<nav>
				<div className='nav-wrapper blue lighten-1'>
					<NavLink to='/' className='brand-logo center'>
						<i className='material-icons'>cloud</i>Lyrics
					</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
