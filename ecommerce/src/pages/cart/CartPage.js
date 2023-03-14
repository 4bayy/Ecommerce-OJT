import "./cartpage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/cartSlice";

function CartPage() {
    const state=useSelector(state=>state.carts);
    console.log(state.cartItems);
    const dispatch=useDispatch();
    return (
        <div>
            <div class="container mt-5 p-3 rounded cart">
                <div class="row no-gutters">
                    <div class="col-md-8">
                <h2 class="mb-0 font-weight-bold ">Shopping cart</h2>
                      {state.cartItems.length> 0 ? (
                        state.cartItems.map((i,idx)=>(
                        <div class="product-details mr-2">
                            <div class="d-flex flex-row align-items-center">
                                <i class="fa fa-long-arrow-left"></i>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                <div class="d-flex flex-row">
                                    <img
                                        class="rounded"
                                        src={i.image}
                                        width="40"
                                        alt="imagehere"
                                    />
                                    <div class="ml-2">
                                        <span class="font-weight-bold d-block">
                                            {i.title}
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center">
                                    <span class="d-block">2</span>
                                    <span class="d-block ml-5 font-weight-bold">
                                        ${i.price}
                                    </span>
                                    <i class="fa fa-trash-o ml-3 text-black-50"></i>
                                    <button className="btn btn-danger py-1 px-2 rounded mb-3"
                                    onClick={()=>dispatch(removeCart(idx))}>Remove</button>
                                </div>
                            </div>
                        </div>
                               ))
                      ): (
                        <h1
                            style={{
                                textAlign: 'center',
                                marginTop: '20px'
                            }}
                        >
                            Do Some Shopping..😊
                        </h1>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;
