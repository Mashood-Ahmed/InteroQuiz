import { CHANGE_CATEGORY, CHANGE_AMOUNT, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE } from "./actionsTypes";

const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    number_of_questions: 50,
    score: -1,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CATEGORY:
            return{
                ...state,
                question_category: action.payload,
            };
        case CHANGE_DIFFICULTY:
            return{
                ...state,
                question_difficulty: action.payload,
            };
        case CHANGE_TYPE:
            return{
                ...state,
                question_type: action.payload,
            };
        case CHANGE_AMOUNT:
            return{
                ...state,
                number_of_questions: action.payload,
            };
        case CHANGE_SCORE:
            return{
                ...state,
                score: action.payload,
            };
        default:
            return state;
    };
};

export default reducer;