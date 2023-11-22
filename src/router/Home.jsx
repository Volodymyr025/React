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

