import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RemoveFromCart } from "../redux/actions/actions"
import ProductCard from "./common/ProductCard"

const Cart = () => {
	const cartItems = useSelector((state) => state.cartItems)
	const dispatch = useDispatch()
	// console.log(cartItems);

	const handleRemoveFromCart = useCallback((productId) => {
		dispatch(RemoveFromCart(productId))
	}, []);

	return (
		<>
			{cartItems.length > 0 ? 
				<div className="products-container">
					{cartItems.map((product,index) => {
						return (
							<ProductCard
								key={index}
								product={product}
								removeFromCart={handleRemoveFromCart}
								isAddBtn={false}
							/>
						)
					})}
				</div>
			 : 
				"No Items in cart"
			}
		</>
	)
}

export default Cart
