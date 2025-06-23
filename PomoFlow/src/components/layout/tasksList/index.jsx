import styles from './style.module.css';

import ButtonAddTask from '../../buttons/buttonAddTask';
import Task from '../../form/task';
import ModalCreater from '../../form/modal/modalCreater';
import ModalEditor from '../../form/modal/modalEditor';

import useTarefas from '../../../hooks/useTarefas';
import { useState } from 'react';

function TasksList() {

    const {
        tarefas,
        adicionarTarefa,
        editarTarefa,
        removerTarefa,
        alternarConclusao
    } = useTarefas();

    const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

    return (
        <div className={styles.tasksDiv}>
            <p>TAREFAS</p>

            <ButtonAddTask
            />

            {
                tarefas.map(tarefa => (
                    <Task
                        key={tarefa.id}
                        desc={tarefa.desc}
                        concluida={tarefa.concluida}
                        onChange={() => { alternarConclusao(tarefa.id) }}
                        onClick={() => {
                            setTarefaSelecionada(tarefa);
                            document.getElementById('modalEdit').show();
                        }}
                    />
                ))
            }

            <dialog id='modal'>
                <ModalCreater
                    adicionarTarefa={adicionarTarefa}
                />
            </dialog>

            <dialog id='modalEdit'>
                <ModalEditor
                    tarefa={tarefaSelecionada}
                    editarTarefa={editarTarefa}
                    removerTarefa={removerTarefa}
                />
            </dialog>
        </div>
    )
}

export default TasksList;