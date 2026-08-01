# Blog Bruna Oliveira — Blog pessoal de saúde

Blog pessoal da Bruna Oliveira: um espaço onde ela compartilha seus conhecimentos e estudos sobre saúde, para ajudar leitores a terem uma vida mais saudável. O blog abre com o tema **microbioma e saúde intestinal**, e está em expansão (alimentação, movimento, sono e bem-estar em preparação).

Hospedado em `blog.brunaoliveira.com.br` via GitHub Pages.

## Estrutura

```
├── index.html              # Página inicial (hero, artigos, categorias, sobre, próximos temas)
├── sobre.html              # Página "Sobre mim" (apresentação da autora)
├── css/style.css           # Estilos do blog
├── js/main.js              # Interações (menu mobile, âncoras)
├── posts/                  # Páginas de cada artigo
└── CNAME                   # blog.brunaoliveira.com.br
```

## Publicar um post novo

1. Copie o template de um post existente em `posts/`
2. Atualize: `title`, `description`, data, categoria, conteúdo
3. Adicione o card do post no `index.html`
4. Faça commit e push — o GitHub Pages publica automaticamente

## Categorias (fase atual: saúde intestinal)

1. **Ciência do Microbioma** — disbiose, SIBO, endotoxemia por LPS, eixo intestino-cérebro
2. **Fermentados & Super-Iogurte** — receitas, tutoriais, equipamentos
3. **Dieta Ancestral Sem Grãos** — Wheat Belly, densidade nutricional
4. **Estética & Performance** — pele, massa muscular via microbioma
5. **Estilo de Vida & Protocolos** — guias de implementação e revisões

## Temas em preparação

- 🥗 Alimentação & Receitas Naturais
- 🌿 Medicina Natural & Integrativa
- 🏃‍♀️ Movimento & Treino
- 😴 Sono & Recuperação
- 🧘‍♀️ Bem-estar & Mente

## DNS (Registro.br)

No painel do Registro.br, na zona DNS do domínio `brunaoliveira.com.br`:

```
CNAME  blog  →  dev-zeq.github.io
```

O certificado HTTPS é emitido automaticamente pelo GitHub Pages.
