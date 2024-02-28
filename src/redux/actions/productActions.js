export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST"
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS"
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE"

export const fetchProductsRequest = () => {
	return {
		type: FETCH_PRODUCT_REQUEST,
	}
}

export const fetchProductsSuccess = (products) => {
	return {
		type: FETCH_PRODUCT_SUCCESS,
		payload: products,
	}
}

export const fetchProductsFailure = (errorMsg) => {
	return {
		type: FETCH_PRODUCT_FAILURE,
		payload: errorMsg,
	}
}

// It will give the error that Actions must be plain objects. Use custom middleware for async actions
// export const fetchProducts = async () => {
//     const response = await fetch("https://fakestoreapi.com/products?limit=3")
//     const data = await response.json()
//     return {
//       type: FETCH_PRODUCT_SUCCESS,
//       payload: data
//     }
// }

export const delayFetchProductRequest = () => (dispatch) => {
	dispatch(fetchProductsRequest());
}


// other convention for writing the action creators
// export const fetchProducts = () => async () => {}

export const fetchProducts = () => {
	return async (dispatch, getState) => {
		// In a Redux Thunk function, the dispatch parameter is a function provided by Redux that allows you to dispatch actions to the Redux store. The getState parameter is a function that allows you to access the current state of the Redux store.
		// console.log(dispatch, getState)
		try {
			setTimeout(() => {
				dispatch(delayFetchProductRequest())
			}, 2000);
			// dispatch(fetchProductsRequest())
			const response = await fetch("https://fakestoreapi.com/products?limit=3")
			const data = await response.json()
			if (data) {
				setTimeout(() => {
					dispatch(fetchProductsSuccess(data))
				}, 5000);
			}
		} catch (error) {
			dispatch(fetchProductsFailure(error.message))
		}
	}
}
