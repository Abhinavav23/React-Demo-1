 const Product = (props) => {
     console.log(props);
    return(
        <section>
            <img src={props.image}/>
            <p>{props.name}</p>
            <p>{props.type}</p>
            <p>Rating: {props.rating}</p>
            <p>Price: {props.price}</p>
            <p>rating and Price Mutiplier: {props.rating*props.price}</p>
            <p>{props.available ? 'In Stock': 'Out of stock'}</p>
            <p>UserName:{props.username} </p>
            {/* <p>Role: {props.user.role}</p> */}
            <p>Address: {props.city}</p>
            <button>Add to carty</button>
        </section>
    )
}

export default Product;

// let props = {
//     name1:"Queen Panel Bed",
//     type:"HouseHold",
//     rating:"4",
//     price:"2500" ,
//     image:"##",
// }

// function Product(name, type,rating,price,image){

// }


// if(props.available){
//     return 'In Stock'
// } else{
//     return 'Out of stock'
// }

// ternary operator
// props.available ? 'In Stock' : 'Out of stock'

// condition ? 'true' : 'false'