const welcomeReducer = (state = "Welcome to React-Redux", action) => {
    switch (action.type) {
        case "UPDATE_WELCOME_STRING": {
            return action.payload;
        }
        default: 
            return state
    }
}

export default welcomeReducer;