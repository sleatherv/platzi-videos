import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import user_icon from '../assets/static/user-icon.png';
import { object } from 'prop-types';

const Header = (props) => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ? <img src={gravatar(user.email)} alt={user.email} />
                        : <img src={user_icon} alt="" />
                    }

                    <p>Perfil</p>
                </div>
                <ul>
                    <li><Link to="/register">Cuenta</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                </ul>
            </div>
        </header>
    );
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header)