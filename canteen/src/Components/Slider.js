import React from 'react';
import '../App.css';

const Slider = () =>(
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1530632789071-8543f47edb34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14eb239437885b7b56615a0a97a14970&auto=format&fit=crop&w=500&q=60" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="display-2">Pizza</h5>
                        <p>...really great</p>
                        <button type="button" className="btn btn-outline-primary btn-lg" >View More</button>
                        <button type="button" className="btn btn-outline-info btn-lg" >Read More</button>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7d5420c60b6d84454a1f06cb8fd3a2a&auto=format&fit=crop&w=1050&q=80" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="display-2">..Banku</h5>
                        <p>..eally great.</p>
                        <button type="button" className="btn btn-outline-primary btn-lg" >View More</button>
                        <button type="button" className="btn btn-outline-info btn-lg" >Read More</button>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41d4e761f4b677daa6d016f4d9d6b743&auto=format&fit=crop&w=500&q=60" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="display-2">..there is</h5>
                        <p>..eally great.</p>
                        <button type="button" className="btn btn-outline-primary btn-lg" >View More</button>
                        <button type="button" className="btn btn-outline-info btn-lg" >Read More</button>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
)

export default Slider;
