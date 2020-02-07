import React from 'react'
import st from './title.module.css'

const Title = (props) => {

    const { title } = props
    return (
        <div>
            <p className={st.title}>{title}</p>
        </div>
    )
}

export default Title
