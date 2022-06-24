import Header from "../Props/Header"
export default function Cart(){
    let YourTotal  = 15000
    return (
       <>
        <Header/>
            <div> Your Total: <span>{YourTotal}</span></div>
            <div> Your Total: <span>2+2</span></div>
            <div> Your Total: <span>{2+2}</span></div>
        </>
    )
}