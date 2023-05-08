import React from 'react';
import { checksBudget } from "../Helper";
import PropTypes from 'prop-types'

const BudgetControl = ({budget,rest}) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={checksBudget(budget,rest)}>
                Restante: $ {rest}
            </div>
        </>
    );
}


BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired
}

export default BudgetControl;
