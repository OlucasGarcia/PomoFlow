import styles from './style.module.css'
import { IoMdAddCircle } from "react-icons/io";

function ButtonAddTask(props) {
    return(
        <div className={styles.btnAddTask} onClick={()=>{document.getElementById('modal').showModal()}}>
            <IoMdAddCircle size={20} color='#F0F0F0'/>
            <p>Adicionar tarefa</p>
        </div>
    )
}

export default ButtonAddTask;