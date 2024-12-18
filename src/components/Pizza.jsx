import style from "./Pizza.module.css";

function Pizza({ name, price,photoName,ingredients}) {

    


   
    

    
    return (
    
        
        <div className={style.container}>
            <div>
                <img
                    className={style.imgfood}
                    src={photoName}
                    alt="pizza_img"
                />
            </div>

            <div className={style.contentcontainer}>
            {}
                <p>{name}</p>
                <p>{ingredients}</p>
                <p></p>
                <p className={style.count}>{price}</p>
            </div>
        </div>
    );
}
export default Pizza;

