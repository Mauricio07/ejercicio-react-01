import React from 'react'
import PropTypes from 'prop-types'
import { User } from '../../models/user.model';
import StateComponent from '../pure/state-component';

const CardComponent = ({ user }) => {
    return (
        <div>
            <h3 > Nombre: {user.name} </h3>
            <h3 > Apellido: {user.lastName} </h3>
            <p > Correo: {user.email} </p>
            <StateComponent state={ user.state } ></StateComponent>
        </div>
    );
}

CardComponent.propTypes = {
    user: PropTypes.instanceOf(User)
}

export default CardComponent
