import styles from './style.module.css'

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <hr style={{ width: 120 }} />
            <h3>Desenvolvido por:</h3>
            <p className={styles.txtName}>Lucas Garcia</p>
            <div className={styles.btnDiv}>
                <a href="https://github.com/OlucasGarcia" target='_blank'>
                    <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/garcialucasga/" target='_blank'>
                    <FaLinkedin size={22} />
                </a>
            </div>
            <p>©Pomoflow. Todos os direitos reservados</p>
        </div>
    )
}

export default Footer;