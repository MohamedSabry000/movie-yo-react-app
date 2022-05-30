import React, { Component } from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
class CarouselComponent extends Component {

    render() {

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 1 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        const { slides } = this.props;
        return (
            <>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                minimumTouchDrag={0}
                keyBoardControl={true}
                customTransition="all .8"
                transitionDuration={1000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {slides ?
                    slides.map((movie, index) => {
                        const post_image = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
                        return (
                            // <Link href="/movies/[id]" as={`/movies/${movie.id}`} key={movie.id} >
                                <div key={movie.id} className="carousel-custom-item">
                                    <img className="carousel-img" src={post_image} alt={movie.original_title} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{movie.original_title}</h5>
                                    </div>
                                </div>
                            // </Link>
                        )
                    })
                    :
                    <>

                        <div>
                            <img
                            className="d-block w-100"
                            src="http://placehold.it/900x350"
                            alt="First slide"
                            />
                        </div>
                        <div><img
                            className="d-block w-100"
                            src="http://placehold.it/900x350"
                            alt="First slide"
                            /></div>
                        <div><img
                            className="d-block w-100"
                            src="http://placehold.it/900x350"
                            alt="First slide"
                            /></div>
                        <div><img
                            className="d-block w-100"
                            src="http://placehold.it/900x350"
                            alt="First slide"
                            /></div>
                    </>
                }
                <style jsx>{`
                .react-multiple-carousel__arrow{
                    height: 97%;
                    border-radius: 0;
                }
                .react-multiple-carousel__arrow--left{
                    left: 5px;
                }
                .react-multiple-carousel__arrow--right{
                    right: 5px;
                }
            `}
            </style>
            </Carousel>
            
            </>
        );
    }
}

export default CarouselComponent;