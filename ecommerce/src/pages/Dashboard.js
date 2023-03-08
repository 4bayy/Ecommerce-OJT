import ProductCard from "../components/card/ProductCard";
import "./dashboard.css";
import Header from "../component/Header";
import electronics from "../images/electronics.png";
import jewelry from "../images/jewelry.png";
import man from "../images/man.png";
import women from "../images/woman.png";
import { base_url } from "../Constants";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [productdata, setProductData] = useState([]);
  const [filteredList, setFilteredList] = new useState(productdata);
  useEffect(() => {
    axios
      .get(base_url + "products")
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
        setFilteredList(res.data)
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
  };

  const getCategoryWise = (category) => {
    axios
      .get(base_url + `products/category/${category}`)
      .then((res) => {
        console.log(res.data);
        setFilteredList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <div id="dashboard-home">
        <div class="topnav">
          <input
            type="text"
            placeholder="Search.."
            className="form-control mb-2 w-50 "
            style={{ margin: "0 auto" }}
            onChange={filterSearch}
          />
        </div>
        <div id="category-list">
          <div id="category-container " style={{ display: "flex" }}>
            <div className="category-components ">
              <img
                src={electronics}
                style={{ width: "30px", marginLeft: "40px" }}
                alt="imagehere"
              ></img>
              <h4
                id="categories"
                onClick={() => getCategoryWise("electronics")}
              >
                Electronics
              </h4>
            </div>
            <div className="category-components ">
              <img
                src={jewelry}
                alt="imagehere"
                style={{ width: "30px", marginLeft: "40px" }}
              ></img>
              <h2 id="categories" onClick={() => getCategoryWise("jewelery")}>
                Jewellery
              </h2>
            </div>
            <div className="category-components">
              <img
                src={man}
                alt="imagehere"
                style={{ width: "30px", marginLeft: "60px" }}
              ></img>
              <h3
                id="categories"
                onClick={() => getCategoryWise("men's clothing")}
              >
                Mens Clothing
              </h3>
            </div>
            <div className="category-components">
              <img
                src={women}
                alt="imagehere"
                style={{ width: "30px", marginLeft: "60px" }}
              ></img>
              <h4
                id="categories"
                onClick={() => getCategoryWise("women's clothing")}
              >
                Women Clothing
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div id="dashboard-card" style={{ maxWidth: "80%", margin: "0 auto" }}>
        {filteredList.map((i, idx) => (
          <div style={{ marginTop: "30px", width: "100%" }}>
            <ProductCard
              id={i.id}
              title={i.title}
              price={i.price}
              description={i.description}
              image={i.image}
              rating={i.rating.rate}
            ></ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
