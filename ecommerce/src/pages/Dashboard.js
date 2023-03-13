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
      <div id="dashboard-home" style={{ marginTop: "60px" }}>
        <div class="topnav">
          <input
            type="text"
            placeholder="Search jewelleries,watches,bags,tops..."
            className="form-control mb-2 w-50 "
            style={{ margin: "0 auto" }}
            onChange={filterSearch}
          />
        </div>

        <div id="category-list" style={{ display: "flex" }}>
          {category.map((item, index) => (
            <div id="category-container ">
              <div
                className="category-components "
                onClick={() => getCategoryWise(`${item}`)}
              >
                <h4 id="categories">{item}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="dashboard-card" style={{ maxWidth: "80%", margin: "0 auto" }}>
        {/* <h2 id="dashboard-heading" style={{textAlign:"center",margin:"50px"}}>New Arrivals 2023</h2> */}
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
