import React, { PureComponent } from 'react';
import './Header.css';
import Button from '../Button';
import { AuthConsumer } from '../../contexts/Auth';

class Header extends PureComponent {
    render() {
        return (
            <AuthConsumer>
                {({isAuthorized, email, logout}) => 
                    isAuthorized ? (
                        <div className='header__content'>
                            <div className='header-menu'>
                                <p className='header-menu__email header-email t-header-email'>
                                    {email}
                                </p>
                                <Button onClick={logout} className='header-menu__button t-logout'>
                                    Выйти
                                </Button>
                            </div>
                        </div>
                    ) : null
                }
            </AuthConsumer>
        );
    }
}

export default Header;
