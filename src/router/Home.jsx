import React, { useEffect } from "react";
import CustomizedTables from "../component/Table";
import AddBtn from "../component/AddBtn";
import { useLoaderData } from "react-router-dom";


const Home = () => {
  const list = useLoaderData()
  
  return (
    <>
      <CustomizedTables data={list} />
      <AddBtn />
    </>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch('https://todo-list-fef8c-default-rtdb.europe-west1.firebasedatabase.app/list.json')
  if (!response.ok) {
    //some Error
  } else {
    const resData = await response.json()
    return resData
    
  }
}
