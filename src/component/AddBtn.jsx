import { Button } from "@mui/material";
import style from "./AddBtn.module.css";
import CreateNewDessert from "../UI/CreateNewDessert";
import { useState } from "react";


const AddBtn = (props) => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className={style.btn}>
      <Button
        onClick={() => {
          setShowCreate(true);
        }}
        variant="contained"
      >
        Add
      </Button>
      {showCreate && (
        <CreateNewDessert
          dataHeandler={props.setFormData}
          showHeandler={setShowCreate}
        />
      )}
    </div>
  );
};

export default AddBtn;
