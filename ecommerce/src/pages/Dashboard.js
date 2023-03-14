import ProductCard from "../components/card/ProductCard";
import "./dashboard.css";
import Header from "../component/Header";
import { base_url } from "../Constants";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetail from "./productdetail/ProductDetail";
import { ToastContainer, Toast, toast } from "react-toastify";

function Dashboard() {
  const [productdata, setProductData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredList, setFilteredList] = new useState(productdata);

  //add if else
  useEffect(() => {
    axios
      .get(base_url + "products")
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
        setFilteredList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(base_url + "products/categories")
      .then((res) => {
        console.log(res);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterSearch = (event) => {
    const query = event.target.value;
    const filteredData = productdata.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredList(filteredData);
    if(filteredList.length()=== 0){
      return(
      <h1>not found</h1>);
    }
  };

  const getCategoryWise = (category) => {
    axios
      .get(base_url + "products/category/" + category)
      .then((res) => {
        console.log(res.data);
        setFilteredList(res.data);
      })
      .catch((err) => {
        toast.error("something went wrong", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          theme: "light",
        });
      });
  };
  return (
    <div>
      <ToastContainer />
      <Header />
      <div ><h3 style={{color:"white"}}>jj</h3></div>
      {/* section */}
    <section class="pt-3">
  <div class="container">
    <div class="row gx-3">
      <main class="col-lg-9">
        <div class="card-banner p-5 bg-primary rounded-5" style={{height: "350px"}}>
          <div style={{maxWidth: "500px"}}>
            <h2 class="text-white">
              Great products with <br />
              best deals
            </h2>
            <p class="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
            <a href="#" class="btn btn-light shadow-0 text-primary"> View more </a>
          </div>
        </div>
      </main>
      <aside class="col-lg-3">
        <div class="card-banner h-100 rounded-5" style={{backgroundColor: "#f87217"}}>
          <div class="card-body text-center pb-5">
            <h5 class="pt-5 text-white">Amazing Gifts</h5>
            <p class="text-white">No matter how far along you are in your sophistication</p>
            <a href="#" class="btn btn-outline-light"> View more </a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>
      <div id="dashboard-home" style={{ marginTop: "0px" }}>
        
        {/* Category  */}

        {/* <div id="category-list" style={{ display: "flex" }}>
          {category.map((item, index) => (
            <div id="category-container">
              <div
                className="category-components "
                onClick={() => getCategoryWise(`${item}`)}
              >
                <h4 id="categories">{item}</h4>
              </div>
            </div>
          ))}
        </div> */}
    <div class="container-fluid mb-5 px-5" >
    <div class="text-center mt-5">
        <h1>Categories</h1>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="box d-flex ">
            {category.map((item, index) => (
                <div class="our-services settings justify-content-around"
                onClick={()=>getCategoryWise(`${item}`)}>
                    <div class="icon" > <img src="https://i.imgur.com/KMbnpFF.png"/> </div>
                    <h4>{item}</h4>
                </div>
                 ))}
            </div>
        </div>   
    </div>
</div>
<div class="topnav">
          <input
            type="text"
            placeholder="Search jewelleries,watches,bags,tops..."
            className="form-control mb-2 w-50 "
            style={{ margin: "0 auto" }}
            onChange={filterSearch}
          />
        </div>

      </div>
      <div id="dashboard-card" style={{ maxWidth: "80%", margin: "0 auto" }}>
        {/* <h2 id="dashboard-heading" style={{textAlign:"right"}}>New Arrivals 2023</h2> */}
        {filteredList.length > 0 ? (filteredList.map((i, idx) => (
          <div className="product-card-container">
            <ProductCard
              id={i.id}
              title={i.title}
              price={i.price}
              description={i.description}
              image={i.image}
              rating={i.rating.rate}
            ></ProductCard>
          </div>
        ))):(<h1 style={{ textAlign: "center", marginTop: "50px" }}>Not Found!</h1>)}
      </div>
    </div>
  );
}
export default Dashboard;
