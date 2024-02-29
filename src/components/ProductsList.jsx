import React, { useCallback, useEffect, useState } from "react"
import ProductCard from "./common/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AddToCart } from "../redux/actions/actions"
import {
	fetchProductsRequest,
} from "../redux/actions/productActions"
import store from "../redux/store/store"

const ProductsList = () => {
	// const [products, setProducts] = useState([])
	const [numberOfProducts, setNumberOfProducts] = useState(1)
	const { loading, products, error } = useSelector(
		(state) => state.productsData
	)
	const dispatch = useDispatch()

	const handleIncrement = () => {
		setNumberOfProducts((prev) => prev + 1)
	}

	const handleDecrement = () => {
		setNumberOfProducts((prev) => {
			if (prev > 1) {
				return prev - 1
			} else {
				return prev
			}
		})
	}

	// const fetchProducts = async (limit = 3) => {
		
	// }

	useEffect(() => {
		dispatch(fetchProductsRequest(numberOfProducts))
		// store.dispatch(fetchProductsRequest(numberOfProducts))
	}, [numberOfProducts])

	const handleAddToCart = useCallback((product) => {
		dispatch(AddToCart(product))
	}, [])

	return (
		<>
			<div className="number-input">
				<p>Change Number of products</p>
				<div>
					<button onClick={handleDecrement} disabled={numberOfProducts == 1 }>-</button>
					{numberOfProducts}
					<button onClick={handleIncrement}>+</button>
				</div>
			</div>
			<div className="products-container">
				{loading ? (
					<h2>Loading products...</h2>
				) : error != "" ? (
					<h2>{error}</h2>
				) : (
					products.length > 0 &&
					products.map((product) => {
						return (
							<ProductCard
								key={product.id}
								product={product}
								addToCart={handleAddToCart}
								isAddBtn={true}
							/>
						)
					})
				)}
			</div>
		</>
	)
}

export default ProductsList
