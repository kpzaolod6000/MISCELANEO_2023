import React from 'react';
import styled from '@emotion/styled';
import { firstCapitalLetter } from '../Helper';
import PropTypes from 'prop-types';

const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-block-start: 1rem;
`

const Summary = ({datas}) => {
    const {marca, year, plan} = datas;
    
    if (marca === '' || year === '' || plan === '')
        return null;

    return (
        <>
            <ContainerSummary>
                <h2>Resumen de cotizacion</h2>
                <ul>
                    <li>Marca: {firstCapitalLetter(marca)}</li>
                    <li>Plan: {firstCapitalLetter(plan)}</li>
                    <li>Año del auto: {firstCapitalLetter(year)}</li>
                </ul>
            </ContainerSummary>
        </>
    );
}

Summary.propTypes = {
    datas: PropTypes.object.isRequired
}


export default Summary;
