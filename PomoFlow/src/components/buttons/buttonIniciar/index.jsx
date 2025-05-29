import styles from './style.module.css'

function ButtonIniciar(props) {
    return (
        <button className={styles.btnIniciar} onClick={props.onClick}>
            <p>INICIAR</p>
        </button>
    )
}

export default ButtonIniciar;