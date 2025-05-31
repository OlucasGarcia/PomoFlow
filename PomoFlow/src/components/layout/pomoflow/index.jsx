import styles from './style.module.css'

import ButtonPomodoro from '../../buttons/buttonPomodoro'

function Pomoflow() {
    return (
        <div className={styles.pomoflow}>
            <div className={styles.btnDiv}>
                <ButtonPomodoro 
                text='PAUSA CURTA'
                cor='roxo'
                />
                <ButtonPomodoro 
                text='POMODORO'
                />
                <ButtonPomodoro 
                text='PAUSA LONGA'
                cor='roxo'
                />
            </div>
            <div className={styles.timer}>
                <p>25:00</p>
                <progress value={75} max={100}></progress>
            </div>
            <div className={styles.btnDiv}>
                <ButtonPomodoro 
                text='PAUSAR'
                cor='roxo'
                />
                <ButtonPomodoro 
                text='INICIAR'
                />
                <ButtonPomodoro 
                text='REINICIAR'
                cor='roxo'
                />
            </div>
        </div>
    )
}

export default Pomoflow;