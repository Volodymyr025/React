import { useState } from "react";
import style from "./CreateNewDessert.module.css";
import { Button } from "@mui/material";
import { validator } from "./Validator";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreateNewDessert = ({ title }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const [nameState, setNameState] = useState(true);
  const [caloriesState, setCaloriesState] = useState(true);
  const [fatState, setFatState] = useState(true);
  const [carbsState, setCarbsState] = useState(true);
  const [proteinState, setProteinState] = useState(true);


  return (
    <div className={style.beckground}>
      <Form method="post" className={style.main}>
        <h1>{title}</h1>
        <label>Name item</label>
        <input
          onChange={({ target }) => {
            setFormData((prev) => ({ ...prev, [target.name]: target.value }));
          }}
          onBlur={({ target }) =>
            validator(formData, target.name, setNameState)
          }
          className={`${style.input} ${!nameState ? style.invalid : ""}`}
          type="text"
          name="name"
        />
        {<span>{!nameState && "Name must have 1-16 attribute"}</span>}
        <label>Calories</label>
        <input
          onChange={({ target }) =>
            setFormData((prev) => ({ ...prev, [target.name]: target.value }))
          }
          onBlur={({ target }) =>
            validator(formData, target.name, setCaloriesState)
          }
          className={`${style.input} ${!caloriesState ? style.invalid : ""}`}
          type="number"
          name="calories"
        />
        {<span>{!caloriesState && "Calories must have 1-16 attribute"}</span>}
        <label>Fat</label>
        <input
          onChange={({ target }) =>
            setFormData((prev) => ({ ...prev, [target.name]: target.value }))
          }
          onBlur={({ target }) => validator(formData, target.name, setFatState)}
          className={`${style.input} ${!fatState ? style.invalid : ""}`}
          type="number"
          name="fat"
        />
        {<span>{!fatState && "Fat must have 1-16 attribute"}</span>}
        <label>Carbs</label>
        <input
          onChange={({ target }) =>
            setFormData((prev) => ({ ...prev, [target.name]: target.value }))
          }
          onBlur={({ target }) =>
            validator(formData, target.name, setCarbsState)
          }
          className={`${style.input} ${!carbsState ? style.invalid : ""}`}
          type="number"
          name="carbs"
        />
        {<span>{!carbsState && "Carbs must have 1-16 attribute"}</span>}
        <label>Protein</label>
        <input
          onChange={({ target }) =>
            setFormData((prev) => ({ ...prev, [target.name]: target.value }))
          }
          onBlur={({ target }) =>
            validator(formData, target.name, setProteinState)
          }
          className={`${style.input} ${!proteinState ? style.invalid : ""}`}
          type="number"
          name="protein"
        />
        {<span>{!proteinState && "Protein must have 1-16 attribute"}</span>}

        <div className={style.btn}>
          <Button
           type="submit"
            variant="contained"
            color="success"
            disabled={
              !formData.name ||
              !formData.calories ||
              !formData.carbs ||
              !formData.fat ||
              !formData.protein
            }
          >
            Save
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outlined"
            color="error"
          >
            Close
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateNewDessert;


