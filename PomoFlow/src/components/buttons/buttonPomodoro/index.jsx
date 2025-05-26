import { useState } from 'react';
import styles from './style.module.css'

function ButtonPomodoro(props) {

    //const [style, setStyle] = useState()

    return (
        <div onClick={props.onClick} className={`${styles.btnPomodoro} ${props.cor === 'roxo' ? styles.btnBranco : styles.btnRosa}`}>
            <p>{props.text}</p>
        </div>
    )
}

export default ButtonPomodoro;