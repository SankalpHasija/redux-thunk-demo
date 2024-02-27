import React, { useCallback, useEffect, useState } from "react"
import ProductCard from "./common/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AddToCart } from "../redux/actions/actions"
import {fetchProducts, fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess} from "../redux/actions/productActions"

const ProductsList = () => {
	// const [products, setProducts] = useState([])
	const {loading, products , error} = useSelector((state)=>state.productsData);
	const dispatch = useDispatch()

	// const fetchProducts = async () => {
	// 	try {
	// 		dispatch(fetchProductsRequest())
	// 		const response = await fetch("https://fakestoreapi.com/products?limit=3")
	// 		const data = await response.json()
	// 		if (data) {
	// 			dispatch(fetchProductsSuccess(data))
	// 		}
	// 	} catch (error) {
	// 		dispatch(fetchProductsFailure(error.message))
	// 	}
	// }

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	const handleAddToCart = useCallback((product) => {
		dispatch(AddToCart(product))
	},[]);

	return (
		<div className="products-container">
			{
				loading ? (
					<h2>Loading products...</h2>
				) : error != '' ? (
					<h2>{error}</h2>
				) : (
					products.length > 0 && products.map((product) => {
						return (
							<ProductCard
								key={product.id}
								product={product}
								addToCart={handleAddToCart}
								isAddBtn={true}
							/>
						)
					})
				)
			}
		</div>
	)
}

export default ProductsList
