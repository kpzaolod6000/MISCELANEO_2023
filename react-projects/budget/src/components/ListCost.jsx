import React from 'react';
import Cost from './Cost';
import PropTypes from 'prop-types'

const ListCost = ({costs}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {
            costs.map(cost => (
                <Cost 
                    key={cost.id}
                    cost={cost}
                />

            ))
        }
    </div>
);

ListCost.propTypes = {
    cost: PropTypes.array.isRequired
}
export default ListCost;
