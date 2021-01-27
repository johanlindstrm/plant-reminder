import { combineReducers } from 'redux'

import { PLANTS_AVAILABLE, ADD_PLANT, UPDATE_PLANT, DELETE_PLANT } from './actions'

let dataState = { plants: [] };

const dataReducer = (state = dataState, action) => {

    switch(action.type) {
        case ADD_PLANT:
            let { plant } = action.data

            let clone = JSON.parse(JSON.stringify(state.plants));

            clone.unshift(plant)

            return {...state, plants: clone};
        
        case PLANTS_AVAILABLE:
            let { plants } = action.data

            return {...state, plants}

        case UPDATE_PLANT: {
            let { plant } = action.data

            //clone the current state
            let clone = JSON.parse(JSON.stringify(state.plants));

            //check if plant already exist
            const index = clone.findIndex((obj) => obj.id === plant.id);
            
            //if the quote is in the array, replace the plant
            if (index !== -1) clone[index] = plant;
            
            return {...state, plants: clone};
        }

        case DELETE_PLANT:{
            let { id } = action.data;

            //clone the current state
            let clone = JSON.parse(JSON.stringify(state.plants));

            //check if quote already exist
            const index = clone.findIndex((obj) => obj.id === id);

            //if the quote is in the array, remove the quote
            if (index !== -1) clone.splice(index, 1);

            return {...state, plants: clone};
        }

        default:
            return state;

    }

};

const rootReducer = combineReducers({dataReducer});

export default rootReducer;