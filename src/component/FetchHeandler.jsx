import { redirect } from "react-router-dom";

export const addItem = async ({ request, params }) => {
  const data = await request.formData();
console.log(request)
  const itemData = {
    name: data.get("name"),
    calories: data.get("calories"),
    fat: data.get("fat"),
    carbs: data.get("carbs"),
    protein: data.get("protein"),
  };

  const response = await fetch(
    "https://todo-list-fef8c-default-rtdb.europe-west1.firebasedatabase.app/list.json",
    {
      method: "POST",
      body: JSON.stringify(itemData),
      headers: {
        "Content-Type": "aplication/json",
      },
    }
  );
  return redirect("/");
};

export const loader = async (section) => {
  const response = await fetch(
    "https://todo-list-fef8c-default-rtdb.europe-west1.firebasedatabase.app/" +
      section +
      ".json"
  );
  if (!response.ok) {
    //some Error
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const remove = async (id, section, method) => {
  const response = await fetch(
    "https://todo-list-fef8c-default-rtdb.europe-west1.firebasedatabase.app" +
      section +
      "/" +
      id +
      ".json",
    {
      method: method,
    }
  );
};

export const actionPostHeandler = async (row, section) => {
  const response = await fetch(
    "https://todo-list-fef8c-default-rtdb.europe-west1.firebasedatabase.app" +
      section +
      ".json",
    {
      method: "POST",
      body: JSON.stringify(row),
      headers: {
        "Content-Type": "aplication/json",
      },
    }
  );
};

export const editItem = async (request,section) => {
  const data = await request.formData();

  const itemData = {
    name: data.get("name"),
    calories: data.get("calories"),
    fat: data.get("fat"),
    carbs: data.get("carbs"),
    protein: data.get("protein"),
  };

  const response = await fetch(
    "https://todo-list-fef8c-default-rtdb.europe-west1.firebasedatabase.app" +
      section +
      ".json",
    {
      method: "PUT",
      body: JSON.stringify(itemData),
      headers: {
        Accept: "aplication/json",
        "Content-Type": "aplication/json",
      },
    }
  );
};
