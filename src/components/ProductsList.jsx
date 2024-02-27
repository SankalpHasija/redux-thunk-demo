import React, { useCallback, useEffect, useState } from "react"
import ProductCard from "./common/ProductCard"
import { useDispatch } from "react-redux"
import { AddToCart } from "../redux/actions/actions"

const ProductsList = () => {
	const [products, setProducts] = useState([])
	const dispatch = useDispatch()

	const fetchProducts = async () => {
		try {
			const response = await fetch("https://fakestoreapi.com/products?limit=3")
			const data = await response.json()
			if (data) {
				setProducts(data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	const handleAddToCart = useCallback((product) => {
		dispatch(AddToCart(product))
	},[]);

	return (
		<div className="products-container">
			{products.length > 0 ? products.map((product) => {
				return (
					<ProductCard
						key={product.id}
						product={product}
						addToCart={handleAddToCart}
            isAddBtn={true}
					/>
				)
			})
		:'Loading products...'
		}
		</div>
	)
}

export default ProductsList
