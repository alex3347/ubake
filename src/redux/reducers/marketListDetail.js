import {COLLECTED,CHECK_CLICKED} from 'actions/marketListDetail';


const initState = {
    collected:false,
    clicked:false
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case COLLECTED:
            return {
                ...state,
                collected:!state.collected
            };
        case CHECK_CLICKED:
            return {
                ...state,
                clicked:!state.clicked
            };
        default:
            return state;
    }
}