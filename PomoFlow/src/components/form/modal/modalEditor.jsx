import styles from './style.module.css'

import ButtonPomodoro from '../../buttons/buttonPomodoro';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

function ModalEditor({ tarefa, editarTarefa, removerTarefa }) {

    const [desc, setDesc] = useState('');

    useEffect(() => {
        if (tarefa) {
            setDesc(tarefa.desc);
        }
    }, [tarefa])

    if (!tarefa) return null;

    const handleSalvar = () => {

        if (desc.trim() === tarefa.desc) {
            Swal.fire({
                title: 'Nenhuma alteração feita!',
                text: 'Você precisa alterar a tarefa antes de salvar.',
                icon: 'warning',
                scrollbarPadding: false,
                confirmButtonColor: '#FF147E',
                background: '#1b181d',
                color: '#F0F0F0',
                customClass: {
                    popup: 'Belanosima'
                }
            });
            return;
        }

        editarTarefa(tarefa.id, { desc });
        Swal.fire({
            title: 'Tarefa Atualizada!',
            text: 'Sua tarefa foi editada com sucesso.',
            icon: 'success',
            scrollbarPadding: false,
            confirmButtonColor: '#FF147E',
            background: '#1b181d',
            color: '#F0F0F0',
            customClass: {
                popup: 'Belanosima'
            }
        });
        document.getElementById('modalEdit').close();
    };

    const handleExcluir = () => {
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Você não poderá reverter isso!',
            icon: 'warning',
            scrollbarPadding: false,
            showCancelButton: true,
            confirmButtonColor: '#FF147E',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Cancelar',
            background: '#1b181d',
            color: '#F0F0F0',
            customClass: {
                popup: 'Belanosima'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                removerTarefa(tarefa.id);
                Swal.fire({
                    title: 'Excluído!',
                    text: 'Sua tarefa foi removida.',
                    icon: 'success',
                    scrollbarPadding: false,
                    confirmButtonColor: '#FF147E',
                    background: '#1b181d',
                    color: '#F0F0F0',
                    customClass: {
                        popup: 'Belanosima'
                    }
                });
                document.getElementById('modalEdit').close();
            }
        })
    }

    return (
        <div id='modalEdit' className={styles.divModal}>
            <p>Editar Tarefa</p>

            <input
                type='text'
                id="tarefaInput"
                required
                maxLength={35}
                value={desc}
                placeholder='Descreva sua tarefa'
                onChange={(e) => setDesc(e.target.value)}
            />
            <div className={styles.divBtn}>
                <ButtonPomodoro
                    onClick={() => { document.getElementById('modalEdit').close() }}
                    text="CANCELAR"
                    cor="roxo" />
                <ButtonPomodoro
                    text="SALVAR"
                    onClick={handleSalvar}
                />
                <ButtonPomodoro
                    text="EXCLUIR"
                    cor="roxo"
                    onClick={handleExcluir}
                />
            </div>
        </div>
    )
}

export default ModalEditor;