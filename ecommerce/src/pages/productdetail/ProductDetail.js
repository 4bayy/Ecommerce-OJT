import images2 from "./../../images/images2.jpg";

function ProductDetail() {
    return (
        <div>
            <div className="productdetail-home">
                <div className="d-flex "  style={{margin:"0 auto",backgroundColor:"yellowgreen",
                    width:"70vw",
                    padding:"50px",
                    marginTop:"10px",
                    borderRadius:"10px"
            }}>
                <div>
                    <img src={images2} alt="image" style={{height:"400px"}}/> 
                </div>
                <div>
                    <h3>title</h3>
                    <h3>detail</h3>
                    <h3>Description</h3>
                    <h3>price</h3>
                </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;
