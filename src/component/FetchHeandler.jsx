

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

