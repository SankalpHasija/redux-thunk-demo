export const addToCartAction = 'ADD_TO_CART'
export const removeFromCartAction = 'REMOVE_FROM_CART'

export const AddToCart = (product) => {
  return {
    type: addToCartAction,
    payload: product
  }
}

export const RemoveFromCart = (productId) => {
  return {
    type: removeFromCartAction,
    payload: productId
  }
}