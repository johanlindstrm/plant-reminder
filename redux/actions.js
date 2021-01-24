export const PLANTS_AVAILABLE = 'PLANTS_AVAILABLE';
export const ADD_PLANT = 'ADD_PLANT';
export const UPDATE_PLANT = 'UPDATE_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';

// Get Plants - INDEX (R)
export const addPlants = (plants) => ({
    type: PLANTS_AVAILABLE,
    data: {plants}
});

// Add Plant - CREATE (C)
export const addQuote = (plant) => ({
    type: ADD_PLANT,
    data: {plant}
});

// Update Plant - UPDATE (U)
export const updatePlant = (plant) => ({
    type: UPDATE_PLANT,
    data: {plant}
});

// Delete Plant - DELETE (D)
export const deletePlant = (id) => ({
    type: DELETE_PLANT,
    data: {id}
});