import styles from './style.module.css';
import PencilIcon from '../../../assets/icons/pencilIcon.svg';

function Task(props) {
    return (
        <div className={styles.task}>
            <input
                type="checkbox"
                onChange={props.onChange}
                checked={props.concluida}
                onKeyDown={props.onKeyDown}
            />
            <p className={props.concluida ? styles.done : ''}>
                {props.desc}
            </p>
            <button
                onClick={props.onClick}>
                <img className={styles.editIcon} src={PencilIcon} alt="Editar Task" />
            </button>
        </div>
    )
}

export default Task;