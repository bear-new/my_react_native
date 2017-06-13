import { NAVIGATE_HOME, NAVIGATE_MARKET } from '../constants/ActionTypes'

import HomeHeader from '../pages/HomeHeader.js'
import MarketHeader from '../pages/MarketHeader.js'
import HomePage from '../pages/HomePage.js'
import MarketPage from '../pages/MarketPage.js'

const initialState = [
	{
		header: <HomeHeader />,
		page: <Home />
	}
]

export default function navigates(state = initialState, action) {
	switch (action.type) {
		case NAVIGATE_HOME:
			return [
				{
					header: <HomeHeader />,
					page: <HomePage />
				},
				...state
			]

		case NAVIGATE_MARKET:
			return [
				{
					header: <MarketHeader />,
					page: <MarketPage />
				},
				...state
			]

		default:
      		return state;
	}
}