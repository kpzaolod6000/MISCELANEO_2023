import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { useState } from 'react';
import { getDiffYear, calculateMarca, getPlan } from '../Helper'


const Camp = styled.div`
    display: flex;
    margin-block-end: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin-block: 0;
    margin-inline: 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease;
  border: none;
  margin-block-start: 2rem;

  &:hover { //sass
    background-color: #26c5da;
    cursor: pointer;
  }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding:1rem;
    width: 100%;
    text-align: center;
    margin-block-end: 2rem;
`

const Form = ({setSummary, setLoader}) => {

    const [datas, setDatas] = useState({ 
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);


    //extract valu of state

    const {marca, year, plan} = datas;
    
    //read form data and set in state
    
    const getInfo = e => {
        setDatas({
            ...datas,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmitCotizar = e => {
        e.preventDefault();
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // get difference of year
        const diffYear = getDiffYear(year);

        //basic of 2000
        let result = 2000;
        
        // each year there is substract in 3%
        result -= ((diffYear*3)*result)/100;

        //each marca
        //Americano 15%
        //Asiatico 5%
        //Europeo 30%
        result = calculateMarca(marca) * result;

        //getPlan increment mount
        //basic  20%
        //complete 50%

        const incPlan = getPlan(plan);
        result = parseFloat(incPlan * result).toFixed(2);
        
        setLoader(true);

        setTimeout(() => {
            setLoader(false);
            setSummary({
                cotizacion: Number(result),
                datas: datas
            }) 
        }, 3000);
    }

    return (
        <form onSubmit={handleSubmitCotizar}>
            {error ? <Error>Todos los cambios son obligatorios</Error> : null}
            <Camp>
                <Label htmlFor="">Marca</Label>
                <Select 
                    name="marca"
                    value={marca}
                    onChange={getInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Camp>
            <Camp>
                <Label htmlFor="">Año</Label>
                <Select 
                    name="year"
                    value={year}
                    onChange={getInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Camp>
            
            <Camp>
                <Label htmlFor="">Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico" 
                    checked={plan === "basico"}
                    onChange={getInfo}
                />Basico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={getInfo}
                />Completo
            </Camp>

            <Button type='submit'>Cotizar</Button>
        </form>
    );
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoader: PropTypes.func.isRequired
}

export default Form;