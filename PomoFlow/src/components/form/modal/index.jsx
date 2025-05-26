import styles from './style.module.css';

import ButtonPomodoro from '../../buttons/buttonPomodoro';

function Modal(props) {
    return (
        <div id='modal' className={styles.divModal}>
            <p>Nova Tarefa</p>
            <input id="tarefaInput" required maxLength={35} placeholder='Descreva sua tarefa'/>
            <div className={styles.divBtn}>
                <ButtonPomodoro
                    onClick={()=>{document.getElementById('modal').close()}}
                    text="CANCELAR"
                    cor="roxo" />
                <ButtonPomodoro
                    text="ADICIONAR" />
            </div>
        </div>
    )
}

export default Modal;