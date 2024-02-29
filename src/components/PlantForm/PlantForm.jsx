import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys name, kingdom, clade, order, family, subfamily, genus
    let [newPlant, setPlant] = useState({
        name: '',
        kingdom: '',
        clade: '',
        order: '',
        family: '',
        subfamily: '',
        genus: ''
    });

    const addNewPlant = event => {
        event.preventDefault();
        dispatch({type: 'POST_PLANT', payload: newPlant});
        setPlant({
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: ''
        });
    }
    return (
        <div>
            <h3>This is the form</h3>
            <form onSubmit={addNewPlant}>
                <input type='text' value={newPlant.name} onChange={(event)=>setPlant({...newPlant, name: event.target.value})} placeholder='Name'/>
                <input type='text' value={newPlant.kingdom} onChange={(event)=>setPlant({...newPlant, kingdom: event.target.value})} placeholder='Kingdom'/>
                <input type='text' value={newPlant.clade} onChange={(event)=>setPlant({...newPlant, clade: event.target.value})} placeholder='Clade'/>
                <input type='text' value={newPlant.order} onChange={(event)=>setPlant({...newPlant, order: event.target.value})} placeholder='Order'/>
                <input type='text' value={newPlant.family} onChange={(event)=>setPlant({...newPlant, family: event.target.value})} placeholder='Family'/>
                <input type='text' value={newPlant.subfamily} onChange={(event)=>setPlant({...newPlant, subfamily: event.target.value})} placeholder='Subfamily'/>
                <input type='text' value={newPlant.genus} onChange={(event)=>setPlant({...newPlant, genus: event.target.value})} placeholder='Genus'/>
                <input type='submit' value='Add New Plant' />
            </form>
        </div>
    );
}


export default PlantForm;
