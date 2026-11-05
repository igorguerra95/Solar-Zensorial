# Publicação Automática no GitHub Pages

Este projeto está pronto e configurado para compilação estática e publicação contínua no **GitHub Pages** utilizando o **GitHub Actions**.

---

## 🚀 Como sincronizar e publicar em 2 passos

### 1. Enviar o código para o seu repositório no GitHub
Se você ainda não vinculou um repositório remoto:

```bash
git init
git add .
git commit -m "feat: setup project for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<SEU_USUARIO>/<SEU_REPOSITORIO>.git
git push -u origin main
```

---

### 2. Ativar o GitHub Pages com GitHub Actions no repositório
No GitHub, acesse o seu repositório:
1. Vá até a aba **Settings** (Configurações).
2. Na barra lateral esquerda, clique em **Pages**.
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.

Pronto! Assim que você selecionar **GitHub Actions**, a publicação é acionada automaticamente a cada `git push` nas branches `main` ou `master`, além de poder ser disparada manualmente pela aba **Actions**.

---

## ⚙️ Estrutura Técnica Configurada

- **Vite Base Path (`vite.config.ts`)**: Configurado com caminhos relativos (`./`), permitindo que a aplicação funcione em qualquer subdiretório de repositório (`https://usuario.github.io/repositorio/`) ou domínio customizado sem quebrar assets (CSS, JS, fontes ou imagens).
- **GitHub Workflow (`.github/workflows/deploy.yml`)**:
  - Utiliza as actions oficiais: `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3` e `actions/deploy-pages@v4`.
  - Permissões configuradas (`contents: read`, `pages: write`, `id-token: write`).
  - Controle de concorrência (`concurrency`) para evitar conflitos de deploy.
  - Fallback SPA automático gerando `404.html` e arquivo `.nojekyll` para desativar o processamento do Jekyll.
