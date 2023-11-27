import React from 'react'
import CustomizedTables from '../component/Table'
import { useLoaderData } from "react-router-dom";

const Favorite = () => {
    const list = useLoaderData()
    return (
        <>
        {!list ? <h3 style={{textAlign:"center",fontSize:35}}>Add some desert</h3> : <CustomizedTables data={list} />}
        </>
        
    )
}

export default Favorite


  
  