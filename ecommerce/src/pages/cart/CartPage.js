import "./cartpage.css";
import { useSelector } from "react-redux";

function CartPage() {
    const state=useSelector(state=>state.carts);
    console.log(state.cartItems);

    return (
        <div>
            <div class="container mt-5 p-3 rounded cart">
                <div class="row no-gutters">
                    <div class="col-md-8">
                      {state.cartItems.length> 0 ? (
                        state.cartItems.map((i,idx)=>(
                        <div class="product-details mr-2">
                            <div class="d-flex flex-row align-items-center">
                                <i class="fa fa-long-arrow-left"></i>
                                {/* <span class="ml-2">Continue Shopping</span> */}
                            </div>
                            <hr />
                            {/* <h6 class="mb-0">Shopping cart</h6> */}
                            <div class="d-flex justify-content-between">
                                {/* <span>You have 4 items in your cart</span> */}
                                {/* <div class="d-flex flex-row align-items-center">
                                    <span class="text-black-50">Sort by:</span>
                                    <div class="price ml-2">
                                        <span class="mr-1">price</span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                </div> */}
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
                                        {/* <span class="spec">
                                            256GB, Navy Blue
                                        </span> */}
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center">
                                    <span class="d-block">2</span>
                                    <span class="d-block ml-5 font-weight-bold">
                                        ${i.price}
                                    </span>
                                    <i class="fa fa-trash-o ml-3 text-black-50"></i>
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
                    <div class="col-md-4">
                        <div class="payment-info">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Card details</span>
                                <img
                                    class="rounded"
                                    src="https://i.imgur.com/WU501C8.jpg"
                                    width="30"
                                    alt="imagehere"
                                />
                            </div>
                            <span class="type d-block mt-3 mb-1">
                                Card type
                            </span>
                            <label class="radio">
                                {' '}
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                    checked
                                />{' '}
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/color/48/000000/mastercard.png"
                                        alt="imagehere"
                                    />
                                </span>{' '}
                            </label>

                            <label class="radio">
                                {' '}
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                />{' '}
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/officel/48/000000/visa.png"
                                        alt="imagehere"
                                    />
                                </span>{' '}
                            </label>

                            <label class="radio">
                                {' '}
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                />{' '}
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                                        alt="imagehere"
                                    />
                                </span>{' '}
                            </label>

                            <label class="radio">
                                {' '}
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                />{' '}
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/officel/48/000000/paypal.png"
                                        alt="imagehere"
                                    />
                                </span>{' '}
                            </label>
                            <div>
                                <label class="credit-card-label">
                                    Name on card
                                </label>
                                <input
                                    type="text"
                                    class="form-control credit-inputs"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label class="credit-card-label">
                                    Card number
                                </label>
                                <input
                                    type="text"
                                    class="form-control credit-inputs"
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="credit-card-label">
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control credit-inputs"
                                        placeholder="12/24"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label class="credit-card-label">CVV</label>
                                    <input
                                        type="text"
                                        class="form-control credit-inputs"
                                        placeholder="342"
                                    />
                                </div>
                            </div>
                            <hr class="line" />
                            <div class="d-flex justify-content-between information">
                                <span>Subtotal</span>
                                <span>$3000.00</span>
                            </div>
                           
                            <button
                                class="btn btn-primary btn-block d-flex justify-content-between mt-3"
                                type="button"
                            >
                                <span>
                                    PayNow 
                                    <i class="fa fa-long-arrow-right ml-1"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;
