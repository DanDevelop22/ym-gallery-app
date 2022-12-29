import PropTypes from 'prop-types';

const User = {
    name: PropTypes.string,
    email: PropTypes.string,
    img: PropTypes.string,
    token: PropTypes.string,
}

export const loginModel = {
    email: PropTypes.string,
    password: PropTypes.string
}

export const registerModel = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
}

export default User