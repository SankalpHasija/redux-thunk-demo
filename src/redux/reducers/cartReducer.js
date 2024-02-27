import { addToCartAction, removeFromCartAction } from "../actions/actions"

const cartReducer = (state = [], action) => {
	switch (action.type) {
		case addToCartAction:
			return [...state, action.payload]
		case removeFromCartAction:
			const filteredProducts = state.filter(
				(product) => product.id !== action.payload
			)
			return filteredProducts
		default:
			return state
	}
}

export default cartReducer
