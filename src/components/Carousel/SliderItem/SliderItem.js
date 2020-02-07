import React from 'react'
import Title from './Title/Title'
import Description from './Description/Description'
import st from './sliderItem.module.css'



function SliderItem(props) {
    const { title, description, imgSrc } = props
    return (
        <div className={st.sliderItem}>
            <div className={st.title}>
                <Title title={title} />
            </div>
            <div className={st.description}>
                <Description description={description} />
            </div>
            <img className={st.image} src={imgSrc} alt='img' />

        </div>
    )
}

export default SliderItem
