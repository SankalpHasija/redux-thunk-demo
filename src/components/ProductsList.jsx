import React, { useCallback, useEffect, useState } from "react"
import ProductCard from "./common/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AddToCart } from "../redux/actions/actions"
import {
	fetchProductsFailure,
	fetchProductsRequest,
	fetchProductsSuccess,
} from "../redux/actions/productActions"

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

	const fetchProducts = async (limit = 3) => {
		try {
			dispatch(fetchProductsRequest())
			const response = await fetch(
				`https://fakestoreapi.com/products?limit=${limit}`
			)
			const data = await response.json()
			if (data) {
				dispatch(fetchProductsSuccess(data))
			}
		} catch (error) {
			dispatch(fetchProductsFailure(error.message))
		}
	}

	useEffect(() => {
		fetchProducts(numberOfProducts)
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
