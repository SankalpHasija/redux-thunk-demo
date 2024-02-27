import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	const cartItems = useSelector((state) => state.cartItems)

	return (
		<header>
			<nav>
				<h1>
					<NavLink to="/products">Fashion Trends</NavLink>
				</h1>
				<div className="nav-links">
					<ul>
						<li>
							<NavLink to="/products">Products</NavLink>
						</li>
						<li>
							<NavLink to="/cart">Cart ({cartItems.length})</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
