# 📌 PROGRESSO — Blog Bruna Oliveira

> Última atualização: 01/08/2026
> Este arquivo fica versionado no repositório — é o ponto de retomada da conversa.

---

## 🎯 O que é o projeto

Blog pessoal da **Bruna Oliveira** em `https://blog.brunaoliveira.com.br` — espaço onde ela compartilha seus conhecimentos e estudos sobre saúde, com foco em **medicina natural/integrativa**, alimentação saudável, receitas naturais e saúde intestinal (o primeiro assunto). Mais temas chegando: alimentação, movimento, sono, bem-estar.

## ✅ STATUS ATUAL — Tudo publicado e verificado

| Item | Status |
|---|---|
| Repositório `dev-zeq/blog-bruna` (público) | ✅ Criado |
| GitHub Pages + CNAME `blog.brunaoliveira.com.br` | ✅ Ativo |
| DNS no Registro.br (CNAME blog → dev-zeq.github.io) | ✅ Feito pelo usuário |
| Certificado HTTPS | ✅ Aprovado (emissão automática) |
| Responsividade (desktop/tablet/mobile) | ✅ Auditada com chromium — OK |
| Layout centralizado (última linha do grid) | ✅ Corrigido e publicado |

## 📝 ARTIGOS

**Publicados (2):**
1. `posts/sibo-o-que-e-sintomas.html` — **SIBO: o que é, sintomas e como identificar** (1 ago 2026)
2. `posts/como-fazer-super-iogurte-l-reuteri.html` — **Super-Iogurte de L. reuteri: receita completa** (2 ago 2026) — baseado na receita oficial do Dr. Davis, adaptada ao Brasil

**Em breve (8, páginas placeholder criadas):**
- `posts/endotoxemia-lps-permeabilidade-intestinal.html` — Endotoxemia por LPS
- `posts/guia-identificar-sibo-quando-procurar-medico.html` — Guia SIBO
- `posts/iogurte-sibo-l-reuteri-l-gasseri-b-coagulans.html` — Iogurte SIBO (3 cepas)
- `posts/probiotico-farmacia-vs-iogurte-36-horas.html` — Probiótico farmácia vs. caseiro
- `posts/dieta-sem-trigo-beneficios-ou-modismo.html` — Dieta sem trigo
- `posts/colageno-magnesio-acido-hialuronico-nutrientes-ancestrais.html` — Nutrientes ancestrais
- `posts/eixo-intestino-cerebro-microbioma-ansiedade.html` — Eixo intestino-cérebro
- `posts/l-reuteri-pele-massa-muscular-oxitocina.html` — L. reuteri, pele e massa muscular

**Próximos na fila (sugestão do usuário aprovada):** artigo do **iogurte SIBO** ou **probiótico de farmácia vs. 36h** (o artigo do iogurte já deixa gancho para ambos).

## 🖥️ ESTRUTURA DO REPO

```
blog-bruna/
├── index.html              # Home (hero, 10 artigos, categorias, sobre, próximos temas)
├── sobre.html              # Página "Sobre mim" (história real da Bruna)
├── css/style.css           # Design verde-teal (tema saúde)
├── js/main.js              # Menu mobile + ano dinâmico
├── posts/*.html            # 10 artigos (2 completos + 8 placeholders)
├── CNAME                   # blog.brunaoliveira.com.br
└── README.md               # Instruções de publicação
```

## ✏️ COMO PUBLICAR UM POST NOVO (fluxo)

1. Usuário envia o conteúdo (texto, tópicos ou arquivo como `Downloads/md.md`)
2. Escrever o artigo HTML completo em `posts/<slug>.html` (template: post SIBO ou iogurte)
3. Atualizar o card no `index.html` (tirar "Em breve", colocar data e resumo)
4. Ajustar link "Próximo" do post anterior
5. Testar local (`python3 -m http.server`) e checar links
6. Commit + push → GitHub Pages publica sozinho (1–2 min)

## 📚 FONTES DO CONTEÚDO

- `Downloads/md.md` — pesquisa de mercado + plano editorial (10 artigos, categorias, monetização, 17 referências)
- Site oficial Dr. Davis: `drdavisinfinitehealth.com` (receitas L. reuteri)
- Site da Bruna: `brunaoliveira.com.br` (história: atleta, 4 anos, 5 pódios, SC21K 2025, HOAD)

## 🔲 PENDÊNCIAS / IDEIAS FUTURAS

- [ ] **Newsletter de verdade** (hoje é placeholder — integrar Buttondown/MailerLite grátis)
- [ ] **Foto da Bruna** no "Sobre mim" (usuário precisa enviar imagem)
- [ ] **Redes sociais** dela no rodapé e no Sobre
- [ ] Escrever os 8 artigos restantes
- [ ] Novos temas (receitas naturais, medicina natural/integrativa) — cards já na home
- [ ] Monetização futura (afiliados de equipamentos de fermentação, e-books — plano no md.md)

## 🔧 ACESSOS/INFRA (para retomada)

- GitHub: conta `dev-zeq`, CLI `gh` autenticado
- Repo: `dev-zeq/blog-bruna` (clone local em `/home/zeqmiranda/blog-bruna`)
- Domínio: Registro.br (zona DNS com CNAME `blog` → `dev-zeq.github.io`)
- Hospedagem: GitHub Pages (branch `main`, raiz)
- Design tokens: cores em `css/style.css` (`--verde-*`, `--areia`, `--laranja`)

---

## 🚀 PARA RETOMAR A CONVERSA

1. Abrir o Codewhale no mesmo workspace (`/home/zeqmiranda`) — o histórico do chat costuma ficar na sessão anterior
2. Se for uma conversa nova, dizer apenas: **"Continua o blog da Bruna — ler PROGRESSO.md em blog-bruna/"**
3. Ou apontar direto: **"Quero escrever o próximo artigo do blog"** e indicar qual

O arquivo de progresso + os arquivos do repo + o README são suficientes para retomar sem perder nada.
