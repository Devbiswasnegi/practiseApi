import {api} from './action';

initialState = {
  data: [],
  high:0,
  
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case api:
      console.log('action.payload', action.payload);
      return {
        ...state,
        data: action.payload,
      };

      case "INC":
        console.log('action.payload', action.payload);
        return {
          ...state,
          high: action.payload+1,
        };

        case "DEC":
          console.log('action.payload', action.payload);
          return {
            ...state,
            high: action.payload-1,
          };

    default:
      return {
        initialState,
      };
  }
};
