import React, { useState } from 'react'
import st from './description.module.css'
import { OverflowDetector } from 'react-overflow'


const Description = (props) => {
    const { description } = props
    const [isTextOverflow, changeOverflow] = useState(true)
    const [isOverflowed, setisOverflowed] = useState(false)
    const handleOverflowChange = (isOverflowed) => setisOverflowed(isOverflowed)
    const addScroll = () => changeOverflow(false)
    const removeScroll = () => changeOverflow(true)

    return (
        <div className={st.description}>
            <div className={isTextOverflow?st.textBlock:st.textBlockOverFlow}>
                <OverflowDetector
                    className={isTextOverflow?st.text:st.textNoHiden}
                    onOverflowChange={handleOverflowChange}
                    style={{ height: "60px" }}>
                    {description}
                </OverflowDetector>
            </div>
            {isOverflowed &&
                <div className={st.btnBox}>
                    {isTextOverflow
                        ? <button className={st.btn} onClick={addScroll}>Show more</button>
                        : <button className={st.btn} onClick={removeScroll}>Less</button>}
                </div>}
        </div>
    )
}

export default Description
