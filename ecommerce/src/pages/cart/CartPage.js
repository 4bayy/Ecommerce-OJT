import "./cartpage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/CartSlice";
import { Button } from "react-bootstrap";
import {MdRemoveShoppingCart } from 'react-icons/md';
import Header from "../../component/Header";
import { useNavigate } from "react-router-dom";
import bag from '../../images/bag.avif';
function CartPage() {
  const state = useSelector((state) => state.carts);
  let totalPrice = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  state.cartItems.forEach((item) => {
    totalPrice += item.price;
  });
  return (
   
    <div className="checkout-container">
       <Header/>
       {state.cartItems.length > 0 ? (
      <section class="cart shopping page-wrapper">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="product-list">
                <form class="cart-form">
                  <table
                    class="table shop_table shop_table_responsive cart"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th class="product-thumbnail"></th>
                        <th class="product-name">Product</th>
                        <th class="product-name">Price</th>
                        <th class="product-remove"></th>
                      </tr>
                    </thead>

                    <tbody>
                     
                       {state.cartItems.map((i, idx) => (
                          <tr class="cart_item">
                            <td
                              class="product-thumbnail"
                              data-title="Thumbnail"
                            >
                              <a href="/product-single">
                                <img
                                  src={i.image}
                                  class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                  alt=""
                                />
                              </a>
                            </td>

                            <td class="product-name" data-title="Product">
                              {i.title}
                            </td>

                            <td class="product-name" data-title="Price">
                              <span class="amount">
                                <span class="currencySymbol">
                                  <pre wp-pre-tag-3=""></pre>
                                </span>
                                ${i.price}
                              </span>
                            </td>

                            <td class="product-remove" data-title="Remove">
                              <a 
                                onClick={() => dispatch(removeCart(idx))}
                                class="remove"
                                aria-label="Remove this item"
                                data-product_id="30"
                                data-product_sku=""
                              >
                             <MdRemoveShoppingCart/>
                              </a>
                            </td>
                          </tr>
                        ))
                       }
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-lg-4">
              <div class="cart-info card p-4 mt-4">
                <h4 class="mb-4">Cart totals</h4>
                <ul class="list-unstyled mb-4">
                  <li class="d-flex justify-content-between pb-2 mb-3">
                    <h5>Subtotal</h5>
                    <span>{totalPrice}</span>
                  </li>
                  <li class="d-flex justify-content-between pb-2 mb-3">
                    <h5>Shipping</h5>
                    <span>Free</span>
                  </li>
                  <li class="d-flex justify-content-between pb-2">
                    <h5>Total</h5>
                    <span>${totalPrice}</span>
                  </li>
                </ul>
                <a href="#" class="btn btn-main btn-small">
                  Place order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
       ) : (
        <div style={{
          textAlign: "center",
          marginTop: "80px",
        }}>
        <h3 style={{fontFamily:"sans-serif"}}
          
        >
          Hey,It feels so light
          
        </h3>
        <h5 style={{color:"grey"}}>There is nothing in your bag.Lets add something!</h5>
        <img style={{width:"100px"}} src={bag} alt=""></img><br></br>
  <div class="btn" style={{width:"280px",height:"50px",borderColor:"#5C5CFF",marginTop:"30px",color:"#5C5CFF"}} onClick = {()=>navigate(`/WishList`)}>Add items from wishlist</div>

        </div>
      )}
    </div>
  );
}
export default CartPage;
