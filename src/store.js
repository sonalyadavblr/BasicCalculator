import { createStore } from 'redux';

let intialState = {
    output: 0,
    input : ""
}

function stateReducer(state = intialState, action)
{
    if (action.type === 'SET_INPUT')
    {
        let newState = { ...state };
        newState.input = action.input;
        return newState;
    } else if (action.type === 'SET_OUTPUT')
    {
        let newState = { ...state };
        newState.output = action.output;
        return newState;
    }
    return state;
}
const store = createStore(stateReducer);

export default store;
