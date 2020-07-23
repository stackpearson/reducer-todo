export const initialToDoState = {
    listItems:[
        {
            task: 'Type out your task & add your 1st item!',
            id: 1,
            complete: false
        }        
    ]
};

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return { 
            ...state,
            listItems: state.listItems.concat(action.payload)
          };

        default:
          return state;
      }
}

