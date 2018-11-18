import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import './button.css';


export class Button extends Component {
    static propTypes = {
        type: string,
        className: string,
        onClick: func,
        value: string,
        disabled: bool,
        handleButtonRef: func
    };

    static defaultProps = {
        type : 'button',
        className: 'Button',
        onClick: () => {},
        handleButtonRef: () => {}
    };

    render () {
        const {
            type,
            className,
            onClick,
            value,
            disabled,
            handleButtonRef
        } = this.props;

        return (
            <button
                type={type}
                className={className}
                onClick={onClick}
                disabled={disabled}
                ref={handleButtonRef}
            >
                {value}
            </button>
        );
    }
}