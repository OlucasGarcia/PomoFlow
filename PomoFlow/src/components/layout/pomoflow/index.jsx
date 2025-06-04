import styles from './style.module.css'

import ButtonPomodoro from '../../buttons/buttonPomodoro'

import usePomodoro from '../../../hooks/usePomodoro';

function Pomoflow() {

    const {
        tempoFormatado,
        iniciar,
        pausar,
        reiniciar,
        definirTempoPorModo,
        modoAtual,
        progresso,
    } = usePomodoro();

    return (
        <div className={styles.pomoflow}>
            <div className={styles.btnDiv}>
                <ButtonPomodoro
                    text='PAUSA CURTA'
                    cor={modoAtual === 'pausaCurta' ? '' : 'roxo'}
                    onClick={() => definirTempoPorModo('pausaCurta')}
                />
                <ButtonPomodoro
                    text='POMODORO'
                    cor={modoAtual === 'pomodoro' ? '' : 'roxo'}
                    onClick={() => definirTempoPorModo('pomodoro')}
                />
                <ButtonPomodoro
                    text='PAUSA LONGA'
                    cor={modoAtual === 'pausaLonga' ? '' : 'roxo'}
                    onClick={() => definirTempoPorModo('pausaLonga')}
                />
            </div>
            <div className={styles.timer}>
                <p>{tempoFormatado()}</p>
                <progress value={progresso()} max={100}></progress>
            </div>
            <div className={styles.btnDiv}>
                <ButtonPomodoro
                    text='PAUSAR'
                    cor='roxo'
                    onClick={pausar}
                />
                <ButtonPomodoro
                    text='INICIAR'
                    onClick={iniciar}
                />
                <ButtonPomodoro
                    text='REINICIAR'
                    cor='roxo'
                    onClick={reiniciar}
                />
            </div>
        </div>
    )
}

export default Pomoflow;