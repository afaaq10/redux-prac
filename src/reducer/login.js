const login = (state = false, action) => {

    switch (action.type) {
        case "LOGIN":
            return !action.state;

        default:
            return state;
    }
}

export default login