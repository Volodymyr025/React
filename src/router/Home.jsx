import React, { useState } from "react";
import CustomizedTables from "../component/Table";
import AddBtn from "../component/AddBtn";

const Home = () => {
  const [formData, setFormData] = useState([]);
  return (
    <>
      {formData && formData.length > 0 && (
        <CustomizedTables data={formData} setData={setFormData} />
      )}
      <AddBtn setFormData={(data) => setFormData((prev) => [...prev, data])} />
    </>
  );
};

export default Home;
