export default function Pizza({pizzaObj}) {
    let className = "pizza";
    if (pizzaObj.soldOut) {
       className = "pizza sold-out";
    }
    return (
        <li className={className}>
            <img src={pizzaObj.photoName}></img>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>${pizzaObj.price}.00</span>
                {pizzaObj.soldOut}
            </div>
        </li>
    )

}



