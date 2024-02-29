import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const plantList = useSelector(store => store.plantList);

    useEffect(() => {
        // dispatch an action to request the plantList from the API
        dispatch({type: 'FETCH_PLANTS'});
    }, []); 

    const deletePlant = id => {
        dispatch({type: 'DELETE_PLANT', payload: id});
    }

    return (
        <div>
            <h3>This is the plant list</h3>
            {plantList.map(plant => <li key={plant.id}>Name: {plant.name} <button onClick={()=>deletePlant(plant.id)}>Delete</button></li>)}
        </div>
    );
}

export default PlantList;
