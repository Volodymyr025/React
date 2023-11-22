import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CustomizedTables from '../component/Table'

const Archive = () => {
    const list = useLoaderData()
    return (
        <CustomizedTables data={list}/>
    )
}

export default Archive
