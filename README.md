# Blog Bruna Oliveira — Saúde & Microbioma

Blog de nicho lusófono sobre saúde intestinal, microbioma e protocolos de fermentação caseira (Dr. William Davis / Super Gut), hospedado em `blog.brunaoliveira.com.br` via GitHub Pages.

## Estrutura

```
├── index.html              # Página inicial (lista de posts + categorias)
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

## Categorias

1. **Ciência do Microbioma** — disbiose, SIBO, endotoxemia por LPS, eixo intestino-cérebro
2. **Fermentados & Super-Iogurte** — receitas, tutoriais, equipamentos
3. **Dieta Ancestral Sem Grãos** — Wheat Belly, densidade nutricional
4. **Estética & Performance** — pele, massa muscular via microbioma
5. **Estilo de Vida & Protocolos** — guias de implementação e revisões

## DNS (Registro.br)

No painel do Registro.br, na zona DNS do domínio `brunaoliveira.com.br`, adicionar:

```
CNAME  blog  →  dev-zeq.github.io
```

O certificado HTTPS é emitido automaticamente pelo GitHub Pages.
