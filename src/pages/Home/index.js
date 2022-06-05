import Slider from "../../components/Slider"
// Import Swiper React components
import { SwiperSlide } from 'swiper/react'
// Import hook that verify the theme state
import { useTheme } from "../../hooks/useTheme";
// import the translate 
import {i18n} from "../../translate/i18n"


function Home() {    

    // Verify Theme Status
    const { theme } = useTheme()

    // Slide Translate
    

    const imgSlides = [
        { title: 'p_home.sl1_title', highlight: 'p_home.sl1_highlight', description: 'p_home.sl1_description', link: 'p_home.sl1_link', button:'p_home.sl1_button', imgL: 'img/homeslide/sl1L.webp', imgD:'img/homeslide/sl1D.webp' },
        { title: 'p_home.sl2_title', highlight: 'p_home.sl2_highlight', description: 'p_home.sl2_description', link: 'p_home.sl2_link', button:'p_home.sl2_button', imgL: 'img/homeslide/sl2L.webp', imgD:'img/homeslide/sl2D.webp' },
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
            <Slider settings={ settings }>
                {imgSlides.map((imgs) => {
                    const { title, highlight, imgL, imgD } = imgs
                    
                    return(
                        <SwiperSlide 
                                className=" flex flex-col justify-center items-center"
                                style={{ 
                                    background: `url(${ theme !== "dark" ? imgL : imgD })`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundOrigin: "content-box"
                                }} 
                                >
                        
                            <h1 className="text-6xl text-theme-primary-light dark:text-theme-primary-dark font-black">{i18n.t(title)}</h1>
                            <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-high-primary-light to-high-secondary-light dark:from-high-primary-dark dark:to-high-secondary-dark">{i18n.t(highlight)}</h1>                            
                        </SwiperSlide>
                        
                    )
                    
                })};
        
            </Slider>

            <div className="text-theme-gray-light dark:text-theme-gray-dark">
                <p className="text-center">{i18n.t('p_home.introduction')}</p>
            </div>
        
        </div>
    )
}

export default Home;