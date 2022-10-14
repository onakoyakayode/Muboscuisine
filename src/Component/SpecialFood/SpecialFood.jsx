import React from 'react'
import './SpecialFood.css'
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/navigation"
import "swiper/css/scrollbar"



const SpecialFood = () => {
    return (
        <div className='special-food' id='special-food'>
            <div>
                <h1>Specials Combo</h1>
                <p>Some Trendy and Popular Courses Offered</p>
            </div>
            <Swiper
           // install Swiper modules
                //  breakpoints={{
                // // when window width is <= 1024px

                //     640: {
                //         width: 640,
                //         slidesPerView: 1,
                //     },
                //     768: {
                //         width:768,
                //         slidesPerView: 5,
                //     },
                //     // when window width is <= 768px
                //     1200: {
                //         width: 1200,
                //         slidesPerView: 5,
                //     }
                // }}
                modules={[ Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                pagination={{clickable: true}}
                spaceBetween={40}
                slidesPerView={5}
                navigation
                scrollbar={{draggable: true}}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                   }}
                loop={true}
                className='swiper-container'
                >
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Burger & Chips</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Fried Rice & Chicken</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Fries & Grills</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Chicken & Chips</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/7170952/pexels-photo-7170952.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Sharwarma</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>2,400</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/8356148/pexels-photo-8356148.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Coconut Rice</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/8874017/pexels-photo-8874017.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Cake</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/8356148/pexels-photo-8356148.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Chinese Rice</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='food-special'>
                    <div className='food-image'>
                        <img className='food-image-img' src='https://images.pexels.com/photos/12567335/pexels-photo-12567335.jpeg?auto=compress&cs=tinysrgb&w=600' alt='food'/>
                    </div>
                    <span className='food-name'>Burger</span>
                    <div className='food-price'>
                        <h5><span className='food-tag'>₦</span>240</h5>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    ) 
}

export default SpecialFood