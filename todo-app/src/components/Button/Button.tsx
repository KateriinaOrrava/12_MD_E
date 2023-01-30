import React from "react";
import styles from "./Button.module.css";

// definejam, ka būs divu veidu pogas:
// zaļā poga - pievieno jaunu uzdevumu;
// N sarkanā(-s) poga(-s) - izdzēš uzdevumu
interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'green' | 'red';
}

export const Button: React.FC<ButtonProps> = ({children, color, onClick, ...props} ) => {
    const className = `${styles.button} ${styles[`button_${color}`]}`
console.log('hello', styles.button)
    // atgriež pogu atkarībā no uzdotās krāsas pieliek tai classsName
    return (<button className={className} onClick={onClick} {...props} id={props.id}>
        {children}
    </button>
    );
}