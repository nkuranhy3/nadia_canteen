import React from 'react';
import { Link} from 'react-router-dom'

const Welcome =() =>(
    <div>
        <div className="container-fluid padding">
            <div className="row welcome text-center" >
                    <div className="col-12">
                        <h1 className="display-4" >The ultimate canteen</h1>
                    </div>
                    <hr />
                </div>

            </div>
            <div className="container-fluid padding">
                <div className="row padding" >
                    <div className="col-md-4" >
                        <div className="card" >
                            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404__340.jpg" alt ="pizza" />
                            <div className="card-body">
                                <h4 className="card-title" >Boateng Janet</h4>
                                <p className="card-text">viation. For example, lorem100 will generate a 100-words dummy textearch is performed against predefined snippet names, not snippet values or CSS properties. This results in more predictable and controllable matches. Remember that you can always create your own snippets or redefine existing ones to fine-tune fuzzy search ex</p>
                                <Link to="" className="btn btn-outline-secondary" >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="card" >
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94bc060b3ea71111a8caeb6e1ace30f0&auto=format&fit=crop&w=500&q=60" alt ="pizza" />
                            <div className="card-body">
                                <h4 className="card-title" >George Gangas Janet</h4>
                                <p className="card-text">c For example, lorem100 will generate a 100-words dummy textearch is performed against predefined snippet names, not snippet values or CSS properties. This results in more predictable and controllable matches. Remember that you can always create your own snippets or redefine existing ones to fine-tune fuzzy search ex</p>
                                <Link to="" className="btn btn-outline-secondary" >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="card" >
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9eb7a97f47b61a9f38ccc09c7f607d01&auto=format&fit=crop&w=500&q=60" alt ="pizza" />
                            <div className="card-body">
                                <h4 className="card-title" >Geofery Janet</h4>
                                <p className="card-text">can specify how many  For example, lorem100 will generate a 100-words dummy textearch is performed against predefined snippet names, not snippet values or CSS properties. This results in more predictable and controllable matches. Remember that you can always create your own snippets or redefine existing ones to fine-tune fuzzy search ex</p>
                                <Link to="" className="btn btn-outline-secondary" >Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid padding" >
                <div className="row padding">
                    <div className="col-lg-6" >
                        <h2 >Believe in us</h2>
                        <p>Each of us regularly spends time helpied by common goals. Above all, we want to honor Jehovah, the God of the Bible and the Creator of all things. We do our best to imitate Jesus Christ and are proud to be called Christians. Each of us regularly spends time helping people learn about the Bible and God’s Kingdom. Because we witness, or talk, about Jehovah God and his Kingdom, we are knowng people learn about the Bible and God’s Kingdom. Because we witness, or talk, about Jehovah God an</p>
                        <p>Hear what young people have to say about the pitfalls of procrastinating and the benefits of using your time wisel</p>
                        <br />
                    </div>
                    <div className="col-lg-6" >
                        <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=707dd400ff0bb8d6b10e42397f7e275a&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
    </div>
)
export default Welcome;