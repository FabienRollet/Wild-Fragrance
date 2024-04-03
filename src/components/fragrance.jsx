import PropTypes from "prop-types";
export default function Fragrance({ list, count, handleClickDown, handleClickUp, handleClick, isFavourite}) {

	return (
		<main>
			<header>
					<p>🛒 {count}</p>
				</header>
			<section className="articleBackground">
				{list.map((item) => (
					<article key={item.name}>
						<img src={item.img} alt="Photo parfum" height={120} width={120} />
						<h2> {item.name}</h2>
						<p>{item.description}</p>
						<p>{item.price} €</p>
						<footer className="article-footer">
						<button type="button" onClick={(handleClickDown)} className="down"> - </button>
						<button type="button" onClick={(handleClickUp)} className="up"> + </button>
						<button type="button" onClick={(handleClick)} className="heart">Ajouter aux favoris</button>
						</footer>
					</article>
				))}
			</section>
		</main>
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