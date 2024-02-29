import {debounce, put, takeEvery, takeLatest, throttle} from "@redux-saga/core/effects"

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'

export const fetchProductsRequest = (limit) => {
  return{
    type: FETCH_PRODUCT_REQUEST,
		payload: limit
  }
}

export const fetchProductsSuccess = (products) => {
  return{
    type: FETCH_PRODUCT_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = (errorMsg) => {
  return{
    type: FETCH_PRODUCT_FAILURE,
    payload: errorMsg
  }
}

function* fetchProducts(e){
	try {
		// console.log(e);
		const response = yield fetch(
			`https://fakestoreapi.com/products?limit=${e.payload}`
		)
		const data = yield response.json()
		if (data) {
			yield put(fetchProductsSuccess(data))
		}
	} catch (error) {
		yield put(fetchProductsFailure(error.message))
	}
}

export default function* rootSaga(){
	// yield takeEvery('FETCH_PRODUCT_REQUEST', fetchProducts);
	// yield throttle('2000','FETCH_PRODUCT_REQUEST', fetchProducts);
	// yield debounce('200','FETCH_PRODUCT_REQUEST', fetchProducts);
	yield takeLatest('FETCH_PRODUCT_REQUEST', fetchProducts);
}






// const handleClick = (e) => {
// 	console.log(e)
// }

// btn.addEventListener('click',handleClick)