import styles from './style.module.css'

import PomoFlowLogo from '../../../assets/PomoFlowLogo.svg';
import ButtonIniciar from '../../buttons/buttonIniciar'

function Welcome(props) {

    const texto = "Fluxo e foco, tudo no seu ritmo!"
    const letras = texto.split("");

    return (
            <>
                <h2>
                    {
                        letras.map((letra, index) => (
                            <span key={index} className={styles.letra}>{letra}</span>
                        ))
                    }
                </h2>
                <img src={PomoFlowLogo} alt="PomoFlow" />
                <ButtonIniciar 
                onClick={props.onClick}
                />
            </>
    )
}

export default Welcome;