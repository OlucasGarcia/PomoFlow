import { useState, useEffect } from 'react';
import Favicon from '../../public/favicon.svg';
import PomoflowNotification from '../assets/PomoflowNotification.mp3';
import Swal from 'sweetalert2';

function usePomodoro() {
    const [tempoRestante, setTempoRestante] = useState(1500); //1500 segundos -> 25min
    const [modoAtual, setModoAtual] = useState('pomodoro'); //'pausaCurta' ou 'pausaLonga' também são estados
    const [timerAtivo, setTimerAtivo] = useState(false);


    useEffect(() => {
        let intervalo = null;

        if (timerAtivo && tempoRestante > 0) {
            intervalo = setInterval(() => {
                setTempoRestante(prev => prev - 1);
            }, 1000);
        } else {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo);
    }, [timerAtivo, tempoRestante]);



    useEffect(() => {
        if (tempoRestante === 0 && timerAtivo) {
            setTimerAtivo(false);

            const mostrarAlertaVisual = () => {
                Swal.fire({
                            title: '⏰ Tempo Finalizado!',
                            text: 'É hora de dar uma pausa ou iniciar uma nova sessão 🤩',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            background: '#1b181d',
                            color: '#F0F0F0',
                            confirmButtonColor: '#FF147E',
                            customClass: {
                                popup: 'Belanosima'
                            }
                        });
            }

            if (Notification.permission === 'granted') {
                new Notification('Pomoflow', {
                    body: 'Tempo finalizado! É hora de dar uma pausa ou de começar uma nova sessão 🤩',
                    icon: Favicon
                });
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission !== 'granted') {
                        mostrarAlertaVisual();
                    }
                });
            } else {
                mostrarAlertaVisual();
            }

            const notification = new Audio(PomoflowNotification);
            notification.play();

            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200]);
            }
            definirTempoPorModo(modoAtual);
        }
    }, [tempoRestante, timerAtivo]);



    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    const iniciar = () => setTimerAtivo(true);
    const pausar = () => setTimerAtivo(false);
    const reiniciar = () => {
        setTimerAtivo(false);
        definirTempoPorModo(modoAtual);
    }

    const definirTempoPorModo = (modo) => {
        setModoAtual(modo);
        setTimerAtivo(false);

        switch (modo) {
            case 'pomodoro':
                setTempoRestante(1500);
                break;
            case 'pausaCurta':
                setTempoRestante(300);
                break;
            case 'pausaLonga':
                setTempoRestante(900);
                break;
            default:
                setTempoRestante(1500);
        }
    };

    const tempoFormatado = () => {
        const min = Math.floor(tempoRestante / 60);
        const sec = tempoRestante % 60;
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }

    const progresso = () => {
        let total;
        switch (modoAtual) {
            case 'pomodoro':
                total = 1500;
                break;
            case 'pausaCurta':
                total = 300;
                break;
            case 'pausaLonga':
                total = 900;
                break;
            default:
                total = 1500;
        }
        return ((total - tempoRestante) / total) * 100;
    }

    return {
        tempoRestante,
        tempoFormatado,
        iniciar,
        pausar,
        reiniciar,
        definirTempoPorModo,
        modoAtual,
        timerAtivo,
        progresso,
    }
}

export default usePomodoro;