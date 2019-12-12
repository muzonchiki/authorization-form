import React, { PureComponent } from 'react';
import './Button.css';


class Button extends PureComponent {
    render() {
        const {children, className, ...rest} = this.props;
        return (
            <button {...rest} className={`${className} button`}>
                {children}
            </button>
        );
    }
}

export default Button;