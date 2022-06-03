import Slider from "../../components/Slider"
// Import Swiper React components
import { SwiperSlide } from 'swiper/react'






function Home() {

    const imgSlides = [
        {title: 'Slide 1', description: 'Esta é a descrição do Slide 1', link: '#',imgL: 'home-sl-1-L'},
        {title: 'Slide 2', description: 'Esta é a descrição do Slide 2', link: '#',imgL: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    ]

    // settings Slider - Swiper
    const settings = {
        spaceBetween:50,
        slidesPerView:1,
        navigation:true,
        pagination: {
            clickable: true,
        },
    }
    return (
        <div>
            <Slider settings={settings}>
                {imgSlides.map((imgs) => {
                    const {title, description, link,imgL} = imgs
                    
                    return(
                        <SwiperSlide className={`flex-col  
                                                bg-primary-light 
                                                bg-cover 
                                                bg-center
                                                bg-homesl1-light                                                
                                                `}
                                                // style={{background: `url(${imgL})`}}
                                                >
                        
                            <h1>{title}</h1>
                            <span>{description}</span>
                            <span>link: {link}</span>
                            <span>Url: {imgL}</span>
                            
                        </SwiperSlide>
                        
                    )
                    
                })};
        
            </Slider>

            <div className=" dark:text-silver-theme">
                <p className="text-center">Este projeto tem como intuito expor os conhecimentos que eu obtive estudando sobre ReactJS. O objetivo geral é colocar em prática o desenvolvimento de componentes e integrações, e por este motivo, optei por um layout clean e minimalista.</p>
            </div>
        
        </div>
    )
}

export default Home;