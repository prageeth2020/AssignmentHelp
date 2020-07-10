import React, {Component} from 'react';

class Videos extends Component {
    render() {
        return (
            <div className="">
                <h2 className="text-center">V I D E O S</h2>
                <div className="container my-4">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={require('./slide1.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                    ago</small></p>
                            </div>
                            <div className="form-row p-3">
                                <a className="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3">
                                    <ul className="navbar-nav ml-auto nav-flex-icons">
                                        <li className="nav-item avatar">

                                            <button type="button" className="btn btn-danger px-3" onClick={this.AddToCart} ><i
                                                className="fas fa-cart-plus text-white mx-2" aria-hidden="true" ></i>Add To Cart</button>


                                        </li>
                                    </ul>
                                </a>
                            </div>

                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require('./slide1.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                    ago</small></p>
                            </div>
                            <div className="form-row p-3">
                                <a className="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3">
                                    <ul className="navbar-nav ml-auto nav-flex-icons">
                                        <li className="nav-item avatar">
                                            <a className="nav-link p-0 " href="#">
                                                <button type="button" className="btn btn-danger px-3"><i
                                                    className="fas fa-cart-plus text-white mx-2" aria-hidden="true"></i>Add To Cart</button>

                                            </a>
                                        </li>
                                    </ul>


                                </a>

                            </div>


                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require('./slide1.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                    ago</small></p>
                            </div>
                            <div className="form-row p-3">
                                <a className="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3">
                                    <ul className="navbar-nav ml-auto nav-flex-icons">
                                        <li className="nav-item avatar">
                                            <a className="nav-link p-0 " href="#">
                                                <button type="button" className="btn btn-danger px-3"><i
                                                    className="fas fa-cart-plus text-white mx-2" aria-hidden="true"></i>Add To Cart</button>

                                            </a>
                                        </li>
                                    </ul>


                                </a>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;