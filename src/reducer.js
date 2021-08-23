import { bindActionCreators } from "redux";

const INITIAL_STATE={
    loading:false,
    posts:[],
    error:null,
};

const appReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
		case "LOAD_POST_START":
			return {
				...state,
				loading: true,
			};
		case "LOAD_POST_SUCCESS":
			return {
				...state,
				loading: false,
				posts: action.payload
			};
		case "LOAD_POST_FAIL":
			return {
				...state,
				loading: false,
				error: action.payload,
            };
        default:
            return state;
	}
};

export default appReducer;