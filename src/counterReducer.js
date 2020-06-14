const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_1':
            return state + 1;
        case 'REMOVE_1':
            return state - 1;
        case 'ADD_10':
            return state + 10;
        case 'REMOVE_10':
            return state - 10;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

export default counterReducer;