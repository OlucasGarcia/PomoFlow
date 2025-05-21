
import styles from './Home.module.css'

import PomoFlowLogo from '../../assets/PomoFlowLogo.svg'
import ButtonIniciar from '../../components/buttons/buttonIniciar';


function Home() {

    const texto = "Fluxo e foco, tudo no seu ritmo!"
    const letras = texto.split("");

    return (
        <section className={styles.mainDiv}>
            <div className={styles.lux}></div>
            <div className={styles.content}>
                <h2>
                    {
                    letras.map((letra, index) => (
                        <span key={index} className={styles.letra}>{letra}</span>
                    ))
                }
                </h2>
                <img src={PomoFlowLogo} alt="PomoFlow" />
                <ButtonIniciar />
            </div>
            <div className={`${styles.lux} ${styles.luxBottom}`}></div>
        </section>
    )
}

export default Home;