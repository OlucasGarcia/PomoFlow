import styles from './style.module.css';
import PencilIcon from '../../../assets/icons/pencilIcon.svg';

function Task(props) {
    return (
        <div className={styles.task}>
            <input type="checkbox" onChange={props.onChange}/>
            <p>
                Exemplo de Task
            </p>
            <button onClick={props.onClick}>
                <img src={PencilIcon} alt="Editar Task" />
            </button>
        </div>
    )
}

export default Task;