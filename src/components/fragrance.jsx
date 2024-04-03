import {useState} from "react"
import PropTypes from "prop-types";
<<<<<<< HEAD
=======
export default function Fragrance({ list, count, handleClickDown, handleClickUp, isFavourite, handleClick}) {
>>>>>>> 128dc7473ad9c4b15bc9e70b51e923911f3f26e8


	return (
<<<<<<< HEAD
		<article className="articleBackground">
			{list.map((item) => (
				<section key={item.name}>
					<img src={item.img} alt="Photo parfum" height={120} width={120} />
					<h2> {item.name}</h2>
					<p>{item.description}</p>
					<p>{item.price} €</p>
					<button type="button">Ajouter au panier</button>
				</section>
			))}
		</article>
=======
		<>
			<section>
				<p>🛒 {count}</p>
			</section>
			<section className="articleBackground">
				{list.map((item) => (
					<article key={item.name}>
						<img src={item.img} alt="Photo parfum" height={120} width={120} />
						<h2> {item.name}</h2>
						<p>{item.description}</p>
						<p>{item.price} €</p>
						<button type="button" onClick={(handleClickDown)}> - </button>
						<button type="button" onClick={(handleClickUp)}> + </button>
						<button onClick={handleClick}>{isFavourite ? "❤️" : "🖤"}</button>
					</article>
				))}
			</section>
		</>
>>>>>>> 128dc7473ad9c4b15bc9e70b51e923911f3f26e8
	);
}
Fragrance.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}