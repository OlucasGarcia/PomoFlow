import styles from './style.module.css'
import { IoMdAddCircle } from "react-icons/io";

function ButtonAddTask() {
    
    const openModal = () => {document.getElementById('modal').showModal()}

    return(
        <div className={styles.btnAddTask} onClick={openModal} onKeyDown={(e) => e.key === 'Enter' && openModal()} tabIndex="0">
            <IoMdAddCircle size={20} color='#F0F0F0'/>
            <p>Adicionar tarefa</p>
        </div>
    )
}

export default ButtonAddTask;