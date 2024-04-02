export default function Fragrance(list){
    console.log(list);
    return(
      
<>
{list.map(item=>{
    <section key={item.name}>
        <img src={item.img} alt=""/>
        <h2> {item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price} €</p>
    </section>
    }
)}
</>
)}
