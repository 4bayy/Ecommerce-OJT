import React from 'react';
function ProductCard() {
    return (
        <div>
            <div className="card" style={{width:"30%"}}>
                <img className="card-img-top" src="..." alt="Card image cap"  style={{height:"100px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-warning">
                       View
                    </a>
                    <a href="#" className="btn btn-primary ms-3">
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
