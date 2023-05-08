import React, {useState} from 'react';
import uuid from 'react-uuid';
import LabelInput from './label-inputs/LabelInput'

import PropTypes from "prop-types";

const Form = ({createCita}) => {

    //state of citas

    const [cita, setcita] = useState({
        mascota:'',
        propietario:'',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //state alert

    const [error,setError] = useState(false);



    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.name);
        setcita({
            ...cita,
            [e.target.name]: e.target.value, 
        });
        // console.log(e.target.value);
    };

    //extract values

    const {mascota,propietario,fecha,hora,sintomas} = cita;

    // send form

    const submitCita = (e) => {
        e.preventDefault();
        /**
         * *validation
         */
        
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
            || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }
        /**
         * *delete error
         */
        setError(false);

        /**
         * *asign Id
         */
        cita['id'] = uuid();
        
        /**
         * *create Cita
         */
        createCita(cita);

        /**
         * *reload form
         */
        setcita({
            mascota:'',
            propietario:'',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    };


    return (
        <>
            <h2> Crear Cita</h2>

            { error ? <p className='alerta-error'>Todos los campos son obligatorios</p>: null}
            <form 
                onSubmit={submitCita}
                className="form-citas"
            >
                <LabelInput
                    className_label="form-label-1"
                    id_input="form-id-1"
                    content_label="Nombre Mascota"
                    type_input="text"
                    name_input="mascota"
                    className_input="u-full-width form-input-1"
                    placeholder_input="Nombre Mascota"
                    onChange_callback = {handleChange}
                    value_input = {mascota}
                />

                <LabelInput
                    className_label="form-label-2"
                    id_input="form-id-2"
                    content_label="Nombre Dueño"
                    type_input="text"
                    name_input="propietario"
                    className_input="u-full-width form-input-2"
                    placeholder_input="Nombre Dueño"
                    onChange_callback = {handleChange}
                    value_input = {propietario}
                />

                <LabelInput
                    className_label="form-label-3"
                    id_input="form-id-3"
                    content_label="Fecha"
                    type_input="date"
                    name_input="fecha"
                    className_input="u-full-width form-input-3"
                    onChange_callback = {handleChange}
                    value_input = {fecha}
                />

                <LabelInput
                    className_label="form-label-4"
                    id_input="form-id-4"
                    content_label="Hora"
                    type_input="time"
                    name_input="hora"
                    className_input="u-full-width form-input-4"
                    onChange_callback = {handleChange}
                    value_input = {hora}
                />

                <label htmlFor="form-id-5" className="form-label-5">Sintomas</label>
                <textarea 
                    name="sintomas" 
                    id="form-id-5" 
                    cols="30" 
                    rows="10"
                    className="u-full-width form-text-1"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>
                
                <button
                    type="submit"
                    className="u-full-width button-primary">
                Agregar Cita    
                </button>
                
                
            </form>
        </>
    );
}

Form.propTypes = {
    createCita: PropTypes.func.isRequired
}

export default Form;
