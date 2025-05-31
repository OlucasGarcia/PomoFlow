import styles from './style.module.css'

import Card from '../../card';
import CARDCONTENTS from '../../../dataset/cardContents';
import ButtonPomodoro from '../../buttons/buttonPomodoro';

function SaibaMais() {

    return (
        <div className={styles.saibamais}>
            <div className={styles.txt}>
                <h3>Saiba mais sobre o <span className={`${styles.txtPink} ${styles.pomo}`}>POMOFLOW</span></h3>
                <p><span className={styles.txtPink}>Pomoflow</span> é uma ferramenta simples,
                    estilosa e eficaz para te ajudar a focar nos estudos ou no trabalho usando a técnica <span className={`${styles.txtPink} ${styles.txtLink}`} onClick={() => {document.getElementById('pomodoro').showModal()}}>Pomodoro</span>.
                    Com um visual retrô e moderno ao mesmo tempo, inspirado no universo vaporwave,
                    você pode gerenciar seu tempo com mais estilo e produtividade.</p>
            </div>
            <dialog id='pomodoro'>
                <div className={styles.pomodoro}>
                    <h3>O que é <span className={styles.txtPink}>Pomodoro</span>?</h3>
                    <p>O Método Pomodoro é uma técnica de gestão de tempo focada em melhorar a produtividade e o foco. 
                        Ele consiste em dividir seu trabalho em ciclos de 25 minutos de concentração intensa, chamados "pomodoros", 
                        seguidos por pequenas pausas de 5 minutos para descanso. Após completar quatro ciclos, 
                        é feita uma pausa maior, de 15 a 30 minutos. Durante cada pomodoro, o objetivo é manter o foco absoluto, 
                        adiando qualquer distração. Essa prática ajuda a manter a mente fresca, 
                        reduz a procrastinação e torna o trabalho mais eficiente ao longo do dia.</p>
                        <ButtonPomodoro
                        text="OK" 
                        onClick={() => {document.getElementById("pomodoro").close()}}
                        />
                        
                </div>
            </dialog>
            <div className={styles.divCards}>
                <h3>Benefícios de usar o <span className={`${styles.txtPink} ${styles.pomo}`}>POMOFLOW</span></h3>
                <div className={styles.list}>
                    {
                        CARDCONTENTS.map((content) => (
                            <Card
                                key={content.id}
                                {...content}
                            />
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SaibaMais;