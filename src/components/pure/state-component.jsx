import React from 'react';
import PropTypes from 'prop-types';


const StateComponent = ({state}) => {
    return (
        <div>
            <p > Conectado: { state ? 'Disponible' : 'No Disponible'} </p>
        </div>
    );
};


StateComponent.propTypes = {
    state: PropTypes.bool,
};


export default StateComponent;
