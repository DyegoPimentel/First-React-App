// Import Swiper React components
import { Swiper } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'



export default function Slider({ settings, children }){
    return (
     <Swiper modules={[Navigation, Pagination, A11y]} {...settings} className='h-[90vh]'>
         {children}
     </Swiper>
    )
}