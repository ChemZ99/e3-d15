import {
  ADD_HOMECARD_DATA_HIPHOP,
  ADD_HOMECARD_DATA_POP,
  ADD_HOMECARD_DATA_ROCK,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  RESET_HOMECARD_DATA,
  RESET_INPUT,
  SAVE_INPUT,
  SAVE_QUERY_DATA,
} from "../actions";

const initialState = {
  input: "",
  favourite: {
    list: [],
  },
  queryData: {
    content: [],
  },
  homeCardData: {
    rock: [],
    pop: [],
    hiphop: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter(fav => fav !== action.payload),
        },
      };
    case SAVE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case RESET_INPUT:
      return {
        ...state,
        input: "",
      };
    case SAVE_QUERY_DATA:
      return {
        ...state,
        queryData: {
          content: [...state.queryData.content, action.payload],
        },
      };
    case ADD_HOMECARD_DATA_ROCK:
      return {
        ...state,
        homeCardData: {
          rock: [...state.homeCardData.rock, action.payload],
        },
      };
    case ADD_HOMECARD_DATA_POP:
      return {
        ...state,
        homeCardData: {
          pop: [...state.homeCardData.pop, action.payload],
        },
      };
    case ADD_HOMECARD_DATA_HIPHOP:
      return {
        ...state,
        homeCardData: {
          hiphop: [...state.homeCardData.hiphop, action.payload],
        },
      };
    case RESET_HOMECARD_DATA:
      return {
        ...state,
        homeCardData: {
          rock: [],
          pop: [],
          hiphop: [],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
