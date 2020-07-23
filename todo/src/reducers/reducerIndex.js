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

    case 'TOGGLE_COMPLETE':
        // return state.map(item => {
        //     if (item.id === action.payload) {
        //       return {
        //         ...item,
        //         complete: true
        //       }
        //     }
        //     return item
        //   });

        return {
            listItems: state.listItems.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        complete: !item.complete
                    }
                }
                return item
            })
        };

 

        default:
          return state;
      }
};



