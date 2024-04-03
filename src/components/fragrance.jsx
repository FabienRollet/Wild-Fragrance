import {useState} from "react"
import PropTypes from "prop-types";

export default function Fragrance({ list }) {
	console.log(list);
	const [favoris, setFavoris] = useState([]);

	const favorisClicked = (item) => {
		setFavoris([...favoris, item])		
	}
	console.log(favoris)
	return (
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
};
