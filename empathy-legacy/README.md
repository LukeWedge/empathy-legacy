# Legado da Empatia (Empathy Legacy)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📌 Status do Projeto

**Em Desenvolvimento**

Este projeto está sendo desenvolvido como Trabalho de Conclusão de Curso (TCC) para o curso de Desenvolvimento de Sistemas da Etec da Zona Leste.

---

## 📖 Descrição

O **Legado da Empatia** é uma aplicação web interativa desenvolvida para explorar e promover princípios de cuidado comunitário e justiça social. O projeto extrai sabedorias atemporais da Torá Escrita e dos Evangelhos de Yeshua, apresentando-as de uma forma espiritual e universal, sem viés religioso. O objetivo é conscientizar os usuários sobre como ações baseadas em empatia e cuidado com os vulneráveis (pobres, viúvas, órfãos e seus equivalentes modernos) são fundamentais para a construção de uma sociedade mais próspera e saudável para todos.

## 🎯 Justificativa

Em um mundo cada vez mais individualista e polarizado, a desconexão social e a apatia se tornam problemas centrais. Este projeto nasce da necessidade de resgatar e aplicar princípios éticos que historicamente fortaleceram comunidades. A proposta é usar a tecnologia não como uma ferramenta de distração, mas como uma ponte para a reflexão e ação, demonstrando que a "sabedoria antiga" oferece soluções práticas para os "desafios modernos".

---

## ✨ Features (Funcionalidades)

* **Exploração de Princípios:** Navegação interativa por conceitos universais como Justiça (`Tzedek`), Compaixão (`Hesed`/`Ágape`) e Dignidade Humana.
* **Impacto na Prática:** Visualização de dados e estudos de caso que correlacionam a redução da desigualdade com a melhoria de indicadores sociais (segurança, saúde, economia).
* **Mapa da Ação:** Um mapa interativo, utilizando a API do Google Maps, para localizar ONGs e projetos sociais na Zona Leste de São Paulo, incentivando o voluntariado e a doação.
* **Diário de Reflexão:** Uma ferramenta para que o usuário possa registrar suas reflexões e insights de forma privada (utilizando o `localStorage` do navegador).

---

## 🖼️ Telas do Projeto

*<p align="center">🚧 Em breve: Imagens e protótipos do projeto. 🚧</p>*
---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **Frontend:**
  * HTML5
  * CSS3 (com metodologia BEM)
  * JavaScript (ES6+)
  * [React.js ou Vue.js - adicione se for usar algum framework]
* **Backend & API:**
  * [Node.js com Express - adicione se for criar um backend]
  * Google Maps API
* **Ferramentas de Desenvolvimento:**
  * Git & GitHub
  * VS Code
  * [Vite - se for usar um build tool]

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

**Pré-requisitos:**

* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* [Git](https://git-scm.com/)

```bash
# 1. Clone o repositório
git clone https://github.com/LukeWedge/empathy-legacy.git

# 2. Acesse a pasta do projeto
cd empathy-legacy

# 3. Instale as dependências (se houver)
npm install

# 4. Configure as variáveis de ambiente
# Renomeie o arquivo .env.example para .env
cp .env.example .env

# Abra o arquivo .env e adicione sua chave da API do Google Maps:
# GOOGLE_MAPS_API_KEY=SUA_CHAVE_AQUI

# 5. Rode a aplicação
# (Este comando pode variar. Se for um site estático, você pode apenas abrir o index.html)
npm run dev
```

Após executar os comandos, abra seu navegador e acesse `http://localhost:5173` (ou a porta que for indicada no seu terminal).

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

**Lucas Oliveira Cunha**

* **Email:** <luke.wedge@tuta.io>
* **LinkedIn:** <https://www.linkedin.com/in/lukewedge/>
* **GitHub:** <https://github.com/LukeWedge>
