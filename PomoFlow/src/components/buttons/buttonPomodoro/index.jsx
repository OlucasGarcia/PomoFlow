import styles from './style.module.css'

function ButtonPomodoro(props) {

    return (
        <div onClick={props.onClick} className={`${styles.btnPomodoro} ${props.cor === 'roxo' ? styles.btnBranco : styles.btnRosa}`} tabIndex="0">
            <p>{props.text}</p>
        </div>
    )
}

export default ButtonPomodoro;