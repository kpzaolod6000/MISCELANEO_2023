import React from 'react';
import PropTypes from "prop-types";


const LabelInput = ({className_label="",id_input="",content_label="",type_input="",name_input="",className_input="",placeholder_input="",onChange_callback,value_input}) => {
    return (
        <>
            <label htmlFor={id_input} className={className_label}>{content_label}</label>
            <input 
                id={id_input} 
                type={type_input}
                name={name_input}
                className={className_input}
                placeholder={placeholder_input}
                onChange={onChange_callback}
                value={value_input}
            />
        </>
    );
}

LabelInput.propTypes = {
    className_label: PropTypes.string.isRequired,
    id_input: PropTypes.string.isRequired,
    content_label: PropTypes.string.isRequired,
    type_input: PropTypes.string.isRequired,
    name_input: PropTypes.string.isRequired,
    className_input: PropTypes.string.isRequired,
    placeholder_input: PropTypes.string,
    onChange_callback: PropTypes.func.isRequired,
    value_input: PropTypes.string.isRequired
}
export default LabelInput;
