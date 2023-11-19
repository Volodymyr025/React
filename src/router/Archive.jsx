import React, { useState } from 'react'

const Archive = () => {
    const [desert, setDesert] = useState([])
    return (
        <ul>
            {desert.map((meal,index) => <li key={index}>{meal}</li>)}
        </ul>
    )
}

export default Archive
