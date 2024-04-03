import PropTypes from "prop-types";
import { FaStar, FaViacoin } from "react-icons/fa6"
export default function Fragrance({ list, count, setCount, handleClickDown, handleClickUp,favorisClicked }) {

	return (
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
						<button type="button" onClick={()=>favorisClicked(item)}/>Favoris<FaStar/>
						<button onClick={()=>favorisClicked(item)}>Favoris<FaStar /></button>
					</article>
				))}
			</section>
		</>
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