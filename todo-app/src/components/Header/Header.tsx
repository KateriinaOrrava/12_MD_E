import React from "react";

import styles from './Header.module.css'

type HeaderProps = {
    todoCount: number;
}
// funkcija saņem no App informāciju par to, cik uzdevumu ir sarakstā [todos.length]
// izveido virsrastu, kas satur mainīgo
export const Header:React.FC<HeaderProps> = ({todoCount}) => {
    return (
    <div className={styles.header_container}>
            <div className={styles.header_container__title}>
                TODO LIST {todoCount} TASK(-S)
            </div>
    </div>
    )
}