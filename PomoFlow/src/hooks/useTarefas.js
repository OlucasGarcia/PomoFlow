import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid'
import Swal from 'sweetalert2';

function useTarefas() {

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
        setTarefas(tarefasSalvas);
    }, []);


    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);


    const adicionarTarefa = (desc) => {
        const novaTarefa = {
            id: uuid(),
            desc,
            concluida: false
        };
        setTarefas(prev => [...prev, novaTarefa]);

            Swal.fire({
                title: '✅ Tarefa Adicionada!',
                icon: 'success',
                confirmButtonText: 'OK',
                background: '#1b181d',
                color: '#F0F0F0',
                confirmButtonColor: '#FF147E',
                customClass: {
                    popup: 'Belanosima'
                }
            })
    };


    const editarTarefa = (id, novosDados) => {
        setTarefas(prev =>
            prev.map(tarefa =>
                tarefa.id === id ? { ...tarefa, ...novosDados } : tarefa
            )
        );
    };


    const removerTarefa = (id) => {
        setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
    };


    const alternarConclusao = (id) => {
        setTarefas(prev =>
            prev.map(tarefa =>
                tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    }

    return {
        tarefas,
        adicionarTarefa,
        editarTarefa,
        removerTarefa,
        alternarConclusao
    };
}

export default useTarefas;