export const addDataToServer = async (lists) => {
    const response = await fetch("https://todo-list-fef8c-default-rtdb.europe-west1.firebasedatabase.app/list.json", {
        method: "POST",
        body: JSON.stringify(lists),
        headers: {
            'Content-Type': 'aplication/json'
        }
    })
const data = await response.json()
}