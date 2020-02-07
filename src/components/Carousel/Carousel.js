import React from 'react'
import SimpleSlider from '../common/SimpleSlider'
import st from './Carousel.module.css'

const Carousel = (props) => {
    return (
        <div className={st.carousel}>
            <div className={st.block}>
                <SimpleSlider {...props}/>
            </div>

        </div>
    )
}
export default Carousel
