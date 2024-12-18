import Pizza from "./pizza";
import style from "./Menu.module.css";


function Menu() {
    const pizzaData = [
        {
            id: 1,
            name: "Focaccia",
            ingredients: "Bread with italian olive oil and rosemary",
            price: 6,
            photoName: "pizza/focaccia.jpg",
            soldOut: false,
        },
        {
            id: 2,
            name: "Pizza Margherita",
            ingredients: "Tomato and mozarella",
            price: 10,
            photoName: "pizza/margherita.jpg",
            soldOut: false,
        },
        {
            id: 3,
            name: "Pizza Spinaci",
            ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
            price: 12,
            photoName: "pizza/spinaci.jpg",
            soldOut: false,
        },
        {
            id: 4,
            name: "Pizza Funghi",
            ingredients: "Tomato, mozarella, mushrooms, and onion",
            price: 12,
            photoName: "pizza/funghi.jpg",
            soldOut: false,
        },
        {
            id: 5,
            name: "Pizza Salamino",
            ingredients: "Tomato, mozarella, and pepperoni",
            price: 15,
            photoName: "pizza/salamino.jpg",
            soldOut: true,
        },
        {
            id: 6,
            name: "Pizza Prosciutto",
            ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
            price: 18,
            photoName: "pizza/prosciutto.jpg",
            soldOut: false,
        },
    ]
    
    return (
        <div className={style.menuContainer}>
            <h2 >OUR MENU</h2>
            <p  >
                
               
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                dolor sunt eius et quod eos sint recusandae, modi cum ea nemo
                odit veritatis maxime consequuntur expedita corporis sequi
                <div className={style.cardContainer}>
               
      
      {pizzaData.map((item) => (
        <Pizza key={item.id} name={item.name} price={item.price} photoName={item.photoName} ingredients={item.ingredients}/>
      ))}
    
               
                
            
             

                </div>
                
            </p>
        </div>
    );
}
export default Menu;
