import React from 'react';
import data from './data';

function App() {
    return ( 
        <div className="grid-conatainer">
            <header className="row">
                <div className="logo1">
                    <img src="img/logo1.png" alt="ePanda" />

                </div>
                <div className="logo">
                    <a className="brand" href="/">ePanda</a>
                    <p>Incredible Lazy!</p>
                </div>


                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <header>
                <div className="poster1">
                    <h1>Winter Shirts</h1>
                </div>
            </header>
            <main>
                <div className="row center">
                    {
                        data.products.map(product =>(
                            <div key={product._id}className="card">
                            <a href={`/product/${product._id}`}>
                                <img className="medium" 
                                src={product.Image}
                                alt={product.name}/>
                            </a>
                            <div className="card-body">
                            <a href={`/product/${product._id}`}>
                                    <h2>{product.name}</h2>
                                </a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i> </span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <div className="price"><h3>${product.price}</h3></div>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </main>
            <footer className="row center">A rights reserved</footer>
        </div>
    );
}

export default App;