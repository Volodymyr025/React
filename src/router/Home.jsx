import React from "react";
import CustomizedTables from "../component/Table";
import AddBtn from "../component/AddBtn";
import { useLoaderData } from "react-router-dom";



const Home = () => {
  const list = useLoaderData()

  
  return (
    <>
      {!list ? <h3 style={{textAlign:"center",fontSize:35}}>Add some desert</h3> : <CustomizedTables data={list} />}
      <AddBtn />
    </>
  );
};

export default Home;

