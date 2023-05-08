import styled from "@emotion/styled";
import React from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-block-start: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResutlCot = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-block-start: 1rem;
  position: relative;
`;

const TextCot = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const Result = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Message>Elige marca, año y tipo de seguro</Message>
  ) : (
    <ResutlCot>
        <TransitionGroup
            component="span"
            className= "resultado"
        >
            <CSSTransition
                className= "resultado"
                key={cotizacion}
                timeout={{enter: 500,exit: 500}}
            >
                <TextCot>EL total es: <span>${cotizacion}</span></TextCot>
            </CSSTransition>
        </TransitionGroup>
    </ResutlCot>
  );
};

Result.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Result;
