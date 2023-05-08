import React, {useState} from 'react';
import Error from './Error';
import uuid from 'react-uuid'
import PropTypes from 'prop-types'

const Form = ({setCost,setCreateCost}) => {
    
    /**
     * set state
     */
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    /**
     * set user's cost 
     */

    const addCost = e => {
        e.preventDefault();
        //validate
        if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
            setError(true);
            return;
        }

        // set cost
        const cost = {
            name,
            quantity,
            id: uuid()
        }

        // send cost to component
        setCost(cost);
        setCreateCost(true);

        //update error
        setError(false);

        // reload form
        setName('');
        setQuantity(0);
    }

    return (
        <form 
            onSubmit={addCost}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error message="Ambos campos son obligatorios o presupuesto es incorrecto"/>: null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={quantity}
                    onChange={e=> setQuantity(parseInt(e.target.value,10))}
                />
            </div>

            <input 
                type="submit" 
                className='button-primary u-full-width'
                value="Agregar Gasto"
            />
        </form>
    );
}

Form.propTypes = {
    setCost: PropTypes.func.isRequired,
    setCreateCost: PropTypes.func.isRequired
}

export default Form;
