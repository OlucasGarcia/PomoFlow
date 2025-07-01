# PomoFlow

## 📌 **Objetivos do projeto**
O **Pomoflow** é uma aplicação web baseada na técnica Pomodoro, criada para auxiliar usuários na organização de seus estudos ou tarefas por meio de sessões cronometradas, com feedbacks visuais, sonoros e funcionalidades como criação de tarefas e visualização de progresso. O projeto tem como foco o aprendizado de boas práticas em React, arquitetura de micro front-ends, uso do localStorage e experiência do usuário.

---

## 🔗 **Link do projeto em produção**
Acesse o projeto online:  
[🌐 Pomoflow]()

---

## 📁 **Estrutura de pastas da aplicação**
```
pomoflow/
├── public/
│ └── favicon.svg
│
├── src/
│ ├── assets/ # Ícones, imagens, fontes e sons
│ ├── components/
│ │ ├── buttons/ # Botões reutilizáveis
| | ├── card/ # Card informativo sobre a aplicação
│ │ ├── form/ # Campos de formulário como Task e Modal
│ │ └── layout/ # Estrutura visual da aplicação (pomoflow, saibaMais, taskList, welcome e footer)
│ │
│ ├── data/ # Arquivos de dados estáticos
│ ├── hooks/ # Hooks personalizados (useTarefas e usePomodoro)
│ ├── pages/ # Tela principal (Home)
│ ├── App.jsx # Componente raiz da aplicação
│ ├── main.jsx # Entrada principal React
│ └── index.css # Estilos globais
│
├── .gitignore
├── package.json
└── vite.config.js # Configuração do Vite
```

---

## 🖼️ Screenshots

### 🕐 Pomodoro
<img src="https://github.com/user-attachments/assets/29522b67-6def-4654-863e-c9b4c66eb386" width="400px" />

*A interface principal do cronômetro Pomodoro com alertas sonoros e visuais.*

---

### 🏠 Tela inicial
<img src="https://github.com/user-attachments/assets/46a957dd-473c-4dc0-bd6d-ce1b6ae44a8a" width="400px" />

*Tela inicial do Pomodoro com slogan, logo e botão para iniciar o modo pomodoro.*

---

### ✅ Tela de Tarefas
<img src="https://github.com/user-attachments/assets/1d204092-e16e-43ee-a746-b8ce2a8a3b52" width="400px" />

*Visualização e controle de tarefas com opção de conclusão e edição.*

---

### ✍️ Modal de Criação/Edição
<img src="https://github.com/user-attachments/assets/abadb4a3-92f4-4601-83c9-32411318c8b0" width="400px" />

*Modais com animações suaves e integração com SweetAlert.*

---

## 🧑🏼‍💻 **Tecnologias e bibliotecas usadas**

### 🔹 **React + Vite**
Renderização eficiente com hot reload e estrutura leve.

### 🔹 **SweetAlert2**
Alertas interativos e personalizáveis para feedback do usuário.

### 🔹 **CSS Modules**
Isolamento de estilos por componente, evitando conflitos.

### 🔹 **React Hooks**
Gerenciamento de estado e lógica com `useState`, `useEffect` e hooks customizados.

### 🔹 **LocalStorage**
Persistência de dados local, sem necessidade de backend.

### 🔹 **React Icons**
Ajuda a compor botões e elementos visuais da interface, melhorando a experiência do usuário com elementos gráficos consistentes.

---

## 💡 **Decisões Técnicas e Arquitetura**

- **Hooks personalizados:**  
Toda a lógica de tarefas está no hook `useTarefas`, mantendo o código modular e reutilizável.

- **Feedback com SweetAlert:**  
Alertas de confirmação e sucesso ao adicionar, editar ou excluir tarefas.

- **Reutilização de componentes:**  
Com a criação de componentes reutilizáveis foi possível otimizar o código e evitar repetições.

- **Responsividade via CSS Modules:**  
Layouts adaptáveis com media queries e organização em cascata.

---

## ♟️ **Diferenciais do Projeto**

### 🔸 **Criação e gerenciamento de tarefas com alertas**
Componente de tarefas com edição, conclusão e exclusão visualmente guiada.

### 🔸 **Notificações e vibração**
Alertas sonoros, visuais e vibração ao fim do tempo (quando suportado).

### 🔸 **Interface com tema escuro e claro**
Visual adaptável ao gosto do usuário.

### 🔸 **Dados persistentes com LocalStorage**
Mesmo após fechar o navegador, suas tarefas continuam lá.

### 🔸 **Animações suaves**
Entrada de modais e transições com CSS nativo.

### 🔸 **Design limpo e objetivo**
Layout minimalista com foco na usabilidade e na experiência do usuário.

---

🧑🏼‍💻 *Desenvolvido por Lucas Gabriel Garcia*
