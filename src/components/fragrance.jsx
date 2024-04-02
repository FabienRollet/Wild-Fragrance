import PropTypes from "prop-types";
export default function Fragrance({list}){
    console.log(list);
    return(
      
<article>
{list.map(item=>
    <section key={item.name}>
        <img  src={item.img} alt="" height={120} width={120}/>
        <h2> {item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price} €</p>
    </section>
    
)}
</article>
)}
Fragrance.propTypes = {
    list: PropTypes.arrayOf({
        item: PropTypes.shape({
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}
