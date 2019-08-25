import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './/ScrollToTop'
import Navbar from './components/Navbar'
import history from './history'
import HomeScreen from './components/Homescreen'
import LyricsPage from './components/LyricsPage'
import Footer from './components/Footer'

const App = () => {
	return (
		<Router history={history}>
			<ScrollToTop>
				<div className='App Site'>
					<Navbar />
					<div className='Site-content'>
						<div className='main'>
							<Switch>
								<Route exact path='/' component={HomeScreen} />
								<Route path='/lyrics' component={LyricsPage} />
							</Switch>
						</div>
					</div>
					<Footer />
				</div>
			</ScrollToTop>
		</Router>
	)
}

export default App
