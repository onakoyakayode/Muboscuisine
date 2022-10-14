import React from 'react';
import './Client.css'
import  Carousel  from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";




const Client = () => { 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='client' id='client'>
            <div className='client-title'>
                <h2>What Clients Say</h2>
                <p>Latest News Updates You Dont Miss Out</p>
            </div>
            <div  className='carousel'>
            <Carousel 
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className='carousel-item'>
                    <h4>The Best Food Vendor</h4>
                    <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                    <div className='swiper-img'>
                        <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                    </div>
                    <h5>Lekki Client</h5>
                </div>
                <div className='carousel-item'>
                    <h4>The Best Food Vendor</h4>
                    <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                    <div className='swiper-img'>
                        <img src='https://images.pexels.com/photos/12078589/pexels-photo-12078589.jpeg?auto=compress&cs=tinysrgb&w=600' alt='clt' />
                    </div>
                    <h5>MBC Catering</h5>
                </div>
                <div className='carousel-item'>
                    <h4>The Best Food Vendor</h4>
                    <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                    <div className='swiper-img'>
                        <img src='https://media.istockphoto.com/photos/middleaged-man-in-blue-blazer-copy-space-picture-id1248769015?b=1&k=20&m=1248769015&s=612x612&w=0&h=QxtgVlHIUTLuooDU7vtB-T3jdQqv_dqF0leHAaaEOE0=' alt='clt' />
                    </div>
                    <h5>John Mubo</h5>
                </div>
                <div className='carousel-item'>
                    <h4>The Best Food Vendor</h4>
                    <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                    <div className='swiper-img'>
                        <img src='https://images.pexels.com/photos/13541655/pexels-photo-13541655.jpeg?auto=compress&cs=tinysrgb&w=600' alt='clt' />
                    </div>
                    <h5>Mariam Ikota</h5>
                </div>
        </Carousel>
                {/* <Carousel>
                    
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>
                    <div className='swiper-container'>
                    <h4>The Best Food Vendor</h4>
                        <p>She is the best food Vendor i have ever Patronized. Muboscuisine Food is the best.</p>
                        <div className='swiper-img'>
                            <img src='https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='clt' />
                        </div>
                        <h5>Princess Igo</h5>
                    </div>

                </Carousel> */}

            </div>
        </div>
    )
}

export default Client