# ⌚ Orient - A Precisão Redefinida

Este projeto é uma **Landing Page de Luxo** conceitual desenvolvida para a marca de relógios **Orient**. Mais do que um exercício técnico, esta página nasceu de uma paixão pessoal pela alta relojoaria e da inspiração gerada por uma fotografia do meu próprio relógio Orient.

## 📖 A História por trás do Código

Como entusiasta de relógios, sempre admirei a engenharia e a harmonia dos movimentos mecânicos. Ao observar o meu Orient, percebi paralelos entre a precisão de um calibre japonês e a sutileza de um código bem escrito. Decidi, então, traduzir o peso do legado clássico e a sofisticação da marca em uma experiência digital imersiva, transformando uma simples foto em uma interface funcional.

---

## 🚀 Tecnologias e Ferramentas

* **HTML5**: Estruturação semântica de alta performance.
* **Tailwind CSS**: Estilização moderna com foco em utilitários e responsividade.
* **GSAP (GreenSock Animation Platform)**: Motor principal para animações fluidas e timelines complexas.
* **ScrollTrigger**: Orquestração de eventos baseados na rolagem do usuário para criar uma narrativa visual.
* **Google Fonts**: Utilização das famílias *Playfair Display* (elegância clássica) e *Inter* (modernidade funcional).

---

## ✨ Destaques da Interface (UI/UX)

### 1. Hero Cinematográfico (Dobra 1)

A página abre com um vídeo em loop de alta qualidade que utiliza um efeito **Parallax de Zoom-out** conforme o usuário rola a página, criando uma sensação de profundidade e foco no produto.

### 2. Glassmorphism & Engenharia (Dobra 2)

A seção "Sinfonia da Engenharia" apresenta cards com efeito de desfoque (*backdrop-blur*) e bordas sutis, destacando os marcos históricos da marca, como sua fundação em 1950 no Japão.

### 3. Galeria Expansível (Dobra 3)

Um sistema de galeria interativo feito com **Flexbox**, onde cada coleção (*Bambino*, *Star Skeleton* e *Mako*) se expande suavemente ao passar o mouse, revelando detalhes específicos de cada linha.

### 4. Legacy Glow Card (Dobra 4)

Uma das interações mais avançadas do projeto: um card que utiliza variáveis CSS dinâmicas para criar um efeito de iluminação (*glow*) e um raio de luz (*shimmer beam*) que segue o movimento do cursor do usuário.

---

## 🛠️ Como Rodar o Projeto

Como este projeto utiliza bibliotecas processadas via CDN, você não precisa instalar dependências externas via terminal.

### 1. Requisitos Prévios

* Um navegador moderno (Chrome, Edge, Safari ou Firefox).
* Conexão com a internet para carregar os scripts e fontes externas.

### 2. Estrutura de Pastas

Para que as mídias carreguem corretamente, organize os arquivos assim:

```text
/seu-projeto
├── index.html
└── assets
    └── raw_files
        ├── videor.mp4
        ├── orient_watch_generated.png
        ├── orient_collection_classic_1773523121145.png
        ├── orient_collection_skeleton_1773523159406.png
        ├── orient_collection_diver_1773523146191.png
        └── orient_legacy_background.png

```

*(Os nomes dos arquivos devem coincidir com os caminhos definidos no código)*

### 3. Execução

* **Opção Direta:** Abra o arquivo `index.html` diretamente em seu navegador.
* **Live Server (Recomendado):** No VS Code, utilize a extensão "Live Server" para evitar bloqueios de segurança do navegador ao carregar vídeos locais.

---

## ⚙️ Detalhes Técnicos de Implementação

* **Animações Reversíveis**: As seções utilizam `toggleActions` para que as animações sejam reproduzidas e revertidas dinamicamente conforme o scroll.
* **Levitação Fluida**: As imagens de produtos possuem uma animação contínua de "respiração" (y-axis floating), mantendo a página visualmente ativa.
* **Performance**: O uso de `will-change` e `transform-gpu` garante que as animações sejam suaves mesmo em dispositivos com menor poder de processamento.

-
