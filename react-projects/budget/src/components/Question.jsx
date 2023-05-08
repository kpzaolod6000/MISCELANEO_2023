import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types'

const Question = ({setBudget, setRest, setShowQuestion}) => {

    /**
     * set state
     */
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    /**
     * handle set budget
     */
    const handleChangeSetBudget = e => {
        // console.log(parseInt(e.target.value));
        setQuantity(parseInt(e.target.value,10));
    }

    /**
     * Submit to define the budget
     */

    const addBudget = (e) => {
        e.preventDefault();
        
        //validate
        if(quantity < 1 || isNaN(quantity)){
            setError(true);
            return;
        }
        setError(false);

        setBudget(quantity);
        setRest(quantity);
        setShowQuestion(false);
        
    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error message="El presupuesto es Incorrecto"/> : null}
            <form onSubmit={addBudget} className="form">
                <input 
                    type="number" 
                    className="text-1 u-full-width" 
                    placeholder='Coloca tu presupuesto'
                    onChange={handleChangeSetBudget}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    );
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRest: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}

export default Question;
