import { TIP} from 'actions/login';


const initState = {
    tip:false
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case TIP:
            return {
                ...state,
                tip:true
            };
        default:
            return state;
    }
}