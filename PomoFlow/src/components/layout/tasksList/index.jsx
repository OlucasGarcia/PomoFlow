import styles from './style.module.css'

import ButtonAddTask from '../../buttons/buttonAddTask'
import Task from '../../form/task'
import Modal from '../../form/modal'

function TasksList(props) {
    return (
        <div className={styles.tasksDiv}>
            <p>TAREFAS</p>
            <ButtonAddTask 
            onClick={() => {Modal.showModal()}}
            />
            <Task />

            <dialog id='modal'>
                <Modal />
            </dialog>
        </div>
    )
}

export default TasksList;