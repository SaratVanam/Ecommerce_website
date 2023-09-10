import { useSelector,useDispatch } from "react-redux"
import { remove } from "../Store/cartSlice";

export default function Cart(){

    let items = useSelector((state)=>state.cart)
    let dispatch=useDispatch();
    let handleRemove=(itemId)=>{
        dispatch(remove(itemId))
    }
    console.log(items)
    return(
        <div className="cartWrapper">
            {
                items.map((item)=>(
                    <div key={item.id} className="cartCard">
                       <img alt='Please correct' src={item.image}></img>
                       <h5>{item.title}</h5>
                       <h5>Price : ${item.price}</h5>
                       <button onClick={()=>handleRemove(item.id)} className='remove-btn'>Remove Item</button>
                    </div>
                ))
            }
        </div>
    )
}