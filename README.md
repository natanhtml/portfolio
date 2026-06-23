# Portfólio — Natan Lopes

Site pessoal one-page de **Natan Lopes**, desenvolvedor full-stack e analista de sistemas de Brasília.

![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)

## Sobre

Portfólio estático de página única com design editorial inspirado no estilo Azuki — paleta creme e carmim, tipografia de pôster e animações sutis ao rolar a página. Construído com Vite e TypeScript puro, sem frameworks, gerando saída totalmente estática e leve. O conteúdo é trilíngue, com troca de idioma entre Português, Inglês e Japonês.

## Tecnologias

- **Vite** — bundler e servidor de desenvolvimento
- **TypeScript** — tipagem em todo o código
- **HTML & CSS** — vanilla, sem frameworks

## Funcionalidades

- **i18n trilíngue** — PT / EN / 日本語 com seletor de idioma persistido no `localStorage`
- **Animações de scroll** — revelação progressiva dos elementos ao rolar
- **Design responsivo** — adapta-se a diferentes tamanhos de tela
- **Site estático leve** — sem dependências de runtime, carregamento rápido

## Como rodar localmente

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção (gera dist/)
npm run build

# pré-visualizar o build
npm run preview
```

## Estrutura do projeto

```
portifolio/
├── index.html          # entrada do Vite
├── public/
│   └── assets/
│       └── natan.jpg   # retrato
├── src/
│   ├── main.ts         # boot da aplicação
│   ├── i18n.ts         # dicionários tipados (PT lido do DOM)
│   ├── reveal.ts       # animação de scroll
│   └── style.css       # CSS de design
├── package.json
└── tsconfig.json
```

## Deploy

Site totalmente estático. O `npm run build` gera a saída em `dist/`, que pode ser publicada em **Vercel**, **Netlify** ou **GitHub Pages** sem configuração adicional de servidor.

## Contato

- **E-mail:** natan0710@gmail.com
- **GitHub:** https://github.com/natanhtml
- **LinkedIn:** https://www.linkedin.com/in/natan-html/
