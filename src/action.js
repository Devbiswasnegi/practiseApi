export const api = 'API';
const API_FETCH = 'https://jsonplaceholder.typicode.com/posts';


export const increment = data => {

  return {
    type: "INC",
    payload: data,
  };
};


export const decrement = data => {

  return {
    type: "DEC",
    payload: data,
  };
};

// export const fetching = () => {
//   try {
//     return async dispatch => {
//       const result = await fetch(API_FETCH);
//       const response = await result.json();
//       if (response) {
//         dispatch({
//           type: api,
//           payload: response,
//         });
//       } else {
//         alert('sorry');
//       }
//     };
//   } catch (error) {
//     console.log('error');
//   }
// };

// export function fetchApi() {
//   console.log('chl raha hai');
//   return (dispatch, getState) => {
//     fetch(API_FETCH)
//       .then(res => res.json())
//       .then(response => {
//         console.log('res123', response);
//         dispatch(fetching(response));
//       })
//       .catch(err => console.log('err'));
//   };
// return {type:api}
//  }

export const fetching = response => {
  console.log('res', response);
  return {
    type: "API",
    payload: response,
  };
};

export const fetching1 = () => {
  console.log('res');
  return {
    type: "apiapi",
  };
};



