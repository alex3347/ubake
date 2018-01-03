import {COLLECTED} from 'actions/marketListDetail';


const initState = {
    collected:false
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case COLLECTED:
            return {
                ...state,
                collected:!state.collected
            };

        default:
            return state;
    }
}