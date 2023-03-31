import { useSelector } from "react-redux";
import Header from "../component/Header";
import ProductCard from "../components/card/ProductCard";
import { addCart, removeWishlist } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import {CiCircleRemove} from 'react-icons/ci';
import { icons } from "react-icons/lib";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import wishlist from "../../src/images/wishlist.jpg"
function WishList() {
  const state = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    return(
        <div>
<Header/>
{state.wishList.length > 0 ?(<div style={{display:"flex" ,flexWrap:"wrap" }}>{state.wishList.map((i,index)=>(
  <div>
  
   <ProductCard
   item={i}
   id={i.id}
   title={i.title}
   price={i.price}
   description={i.description}
   image={i.image}
   rating={i.rating.rate}
></ProductCard>

</div>
))}</div>)
:(<div style={{textAlign: "center",
marginTop: "80px",}}>
  <h2 style={{fontFamily:"sans-serif"}}>Your wishlist is Empty </h2>
  <h5 style={{color:"grey"}}>Add items that you like to your wishlist. <br></br>Review them anytime and easily move them to the bag.</h5>
  <img style={{width:"100px"}} src={wishlist} alt=""></img><br></br>

  <div class="btn" style={{width:"280px",height:"50px",borderColor:"#7EC8E3",marginTop:"30px",color:"#7EC8E3"}} onClick = {()=>navigate(`/`)}>Continue shopping</div>
  </div>)}
        </div>
    )
}
export default WishList;