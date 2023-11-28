import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CustomizedTables from '../component/Table'

const Archive = () => {
    const list = useLoaderData()
    return (
        <>
        {!list ? <h3 style={{textAlign:"center",fontSize:35}}>Add some desert</h3> : <CustomizedTables data={list}/>}
        </>
    )
}

export default Archive
