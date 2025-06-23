import styles from './style.module.css';

import ButtonPomodoro from '../../buttons/buttonPomodoro';
import { useState } from 'react';

function modalCreater({ adicionarTarefa }) {

    const [desc, setDesc] = useState('');

    const handleAdicionar = () => {
        if (!desc.trim()) return;
        adicionarTarefa(desc);
        setDesc('');
        document.getElementById('modal').close();
    }


    return (
        <div id='modal' className={styles.divModal}>
            <p>Nova Tarefa</p>

            <input
                type='text'
                id="tarefaInput"
                required
                maxLength={35}
                placeholder='Descreva sua tarefa'
                value={desc}
                onChange={(e) => {setDesc(e.target.value)}}
            />

            <div className={styles.divBtn}>
                <ButtonPomodoro
                    onClick={() => { document.getElementById('modal').close() }}
                    text="CANCELAR"
                    cor="roxo" />
                <ButtonPomodoro
                    onClick={handleAdicionar}
                    text="ADICIONAR" />
            </div>
        </div>
    )
}

export default modalCreater;