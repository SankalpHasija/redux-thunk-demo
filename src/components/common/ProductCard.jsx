const ProductCard = ({ product, addToCart, removeFromCart, isAddBtn }) => {

	const handleButtonClick = () => {
		if (isAddBtn) {
			addToCart(product)
		} else {
			removeFromCart(product.id)
		}
	}

	return (
		<div className="product-item">
			<img
				className="product-image"
				src={product.image}
				alt={product.title}
			/>
			<h3>{product.title}</h3>
			<p className="product-desc">{product.description}</p>
			<p>₹{product.price}</p>
			<button
				className={isAddBtn ? "add-btn":"remove-btn"}
				onClick={handleButtonClick}
			>
				{isAddBtn ? "Add to Cart" : "Remove"}
			</button>
		</div>
	)
}

export default ProductCard
