import styles from './Home.module.css'

import Welcome from '../../components/layout/welcome';
import Pomoflow from '../../components/layout/pomoflow';
import TasksList from '../../components/layout/tasksList';
import SaibaMais from '../../components/layout/saibaMais';
import Footer from '../../components/layout/footer';

import { useRef, useState } from 'react';


function Home() {

    const pomoflowRef = useRef(null)
    const [showPomoflow, setShowPomoflow] = useState(false)
    const [animatePomoflow, setAnimatePomoflow] = useState(false);
    const [contentGrow, setContentGrow] = useState(false);

    const fnScroll = () => {
        if (!showPomoflow) {
            setShowPomoflow(true);
            setContentGrow(true);

            setTimeout(() => {
                setAnimatePomoflow(true);
                setTimeout(() => {

                    pomoflowRef.current?.scrollIntoView({ behavior: 'smooth' });
                })

            })
        } else {
            pomoflowRef.current?.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <main className={styles.mainDiv}>

            <div className={`${styles.content} ${contentGrow ? styles.contentFull : ''}`}>

                <div className={styles.welcome}>
                    <Welcome onClick={fnScroll} />
                </div>

                {showPomoflow && (
                    <section className={`${styles.pomoflow} ${animatePomoflow ? styles.animate : ''}`} ref={pomoflowRef}>
                        <Pomoflow />
                        <TasksList />
                        <SaibaMais />
                        <Footer />
                    </section>
                )}
            </div>
        </main>
    )
}

export default Home;