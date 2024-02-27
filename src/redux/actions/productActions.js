export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'

export const fetchProductsRequest = () => {
  return{
    type: FETCH_PRODUCT_REQUEST
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