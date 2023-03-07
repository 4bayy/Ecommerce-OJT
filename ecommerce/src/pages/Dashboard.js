import ProductCard from '../components/card/ProductCard';
import './dashboard.css';
import Header from '../component/Header'
function Dashboard() {
    return (
        <div>
            <Header/>
            <div id="dashboard-home">
                <div class="topnav">  
                <input type="text" placeholder="Search.." className='form-control mb-2 w-50 '
                style={{margin:"0 auto"}}/>  
                </div>
                <div id="category-list">
                    <div id="category-container">
                        <h3 id="categories">Electronics</h3>
                        <h3 id="categories">Jewellery</h3>
                        <h3 id="categories">Mens Clothing</h3>
                        <h3 id="categories">Women Clothing</h3>
                    </div>cd 
                </div>
            </div>
            <div id="dashboard-card" style={{maxWidth:"80%",margin:"0 auto"}}>
                <div style={{marginTop:"30px"}}>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
