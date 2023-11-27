import { Button } from "@mui/material";
import style from "./AddBtn.module.css";
import { useNavigate } from "react-router-dom";


const AddBtn = (props) => {
  const navigate = useNavigate()

  return (
    <div className={style.btn}>
      <Button
        onClick={()=>navigate('/form')}
        variant="contained"
      >
        Add
      </Button>
    </div>
  );
};

export default AddBtn;
