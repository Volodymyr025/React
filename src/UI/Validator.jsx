

export const validator = (data,nameInput,setState,) => {
    data[nameInput].length === 0 || data[nameInput].length > 16 ? setState(false) : setState(true)
}

