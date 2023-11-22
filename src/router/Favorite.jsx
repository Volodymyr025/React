import React, { useState } from 'react'
import CustomizedTables from '../component/Table'
import { useLoaderData } from "react-router-dom";

const Favorite = () => {
    const list = useLoaderData()
    return (
        <CustomizedTables data={list}/>
    )
}

export default Favorite


  
  