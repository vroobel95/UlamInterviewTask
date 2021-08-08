import Icon from "@iconify/react";
import React from "react";

interface ButtonProps {
    text?: string;
    className: string;
    icon?: object;
}
const Button: React.FC<ButtonProps> = props => {
    return (
        <button className={props.className}>
            {props.icon ?  <Icon icon={props.icon} /> : null}
            {props.text ? <span className="button-label">{props.text}</span> : null}
        </button>
    );
}

export default Button;