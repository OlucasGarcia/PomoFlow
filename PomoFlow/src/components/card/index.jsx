import styles from './style.module.css'

function Card(props) {


    return (
        <div className={styles.card}>
            <div className={styles.imgZoom}>
                <img className={styles.imgCard} src={props.img} alt="" />
                <div className={styles.shadow}></div>
                <p className={styles.title}>{props.title}</p>
            </div>
            <p className={styles.desc}>{props.desc}</p>
        </div>
    )
}

export default Card;