import ProductCard from '../components/card/ProductCard';
import './dashboard.css';
import Header from '../component/Header';
import electronics from '../images/electronics.png';
import jewelry from '../images/jewelry.png';
import man from '../images/man.png';
import women from '../images/woman.png';
import { base_url } from '../Constants';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [productdata, setProductData] = useState([]);
    // C4reate a copy of the list. 
    const updatedList=[...productdata];
    const [filteredList, setFilteredList] = new useState(productdata);
    // const [query, setQuery] = useState('');
    // console.log('filtered list' + filteredList);
    useEffect(() => {
        axios
            .get(base_url + 'products')
            .then((res) => {
                console.log(res.data);
                setProductData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // const filterSearch = (event) => {
    //     setQuery(event.target.value);
    //     console.log("Query"+query);
    //     updatedList=updatedList.filter((item)=>{
    //         return item.toLowerCase().indexOf(query.toLowerCase()) !==-1;
    //     });
    //     //Render with updated values.
    //     setFilteredList(updatedList);
    // };
    return (
        <div>
            <Header />
            <div id="dashboard-home">
                <div class="topnav">
                    <input
                        type="text"
                        placeholder="Search.."
                        className="form-control mb-2 w-50 "
                        style={{ margin: '0 auto' }}
                        // onChange={filterSearch}
                    />
                </div>
                <div id="category-list">
                    <div id="category-container " style={{ display: 'flex' }}>
                        <div className="category-components ">
                            <img
                                src={electronics}
                                style={{ width: '30px', marginLeft: '40px' }}
                                alt="imagehere"
                            ></img>
                            <h3 id="categories">Electronics</h3>
                        </div>
                        <div className="category-components ">
                            <img
                                src={jewelry}
                                alt="imagehere"
                                style={{ width: '30px', marginLeft: '40px' }}
                            ></img>
                            <h3 id="categories">Jewellery</h3>
                        </div>
                        <div className="category-components">
                            <img
                                src={man}
                                alt="imagehere"
                                style={{ width: '30px', marginLeft: '60px' }}
                            ></img>
                            <h3 id="categories">Mens Clothing</h3>
                        </div>
                        <div className="category-components">
                            <img
                                src={women}
                                alt="imagehere"
                                style={{ width: '30px', marginLeft: '60px' }}
                            ></img>
                            <h3 id="categories">Women Clothing</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="dashboard-card"
                style={{ maxWidth:"80%",margin: '0 auto'}}
            >
                {productdata.map((i, idx) => (
                    <div style={{ marginTop: '30px' , width:"100%"}}>
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
