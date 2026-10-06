# Kauan Andrade — Backend Portfolio

Portfólio estático com HTML, CSS e JavaScript, sem dependências ou etapa de build.

## Publicar no GitHub Pages

1. Extraia este ZIP.
2. Coloque o conteúdo da pasta `kauan-backend-github` na raiz do repositório. O `index.html` deve ficar na raiz, junto às pastas `css/` e `js/`.
3. Faça commit e push para a branch usada na publicação.
4. No GitHub, abra **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione a branch de publicação (por exemplo, `main`) e a pasta **/(root)**. Clique em **Save**.

Os links canonical e Open Graph estão configurados para `https://kdandrade.github.io/`. Se usar outro repositório ou domínio, altere ambos no `index.html` para a URL real.

## Testar localmente

Na pasta do projeto, execute:

```sh
python -m http.server 8080
```

Abra http://localhost:8080. Você também pode usar o Live Server do VS Code. Abrir o HTML diretamente pelo explorador de arquivos não carrega corretamente os módulos JavaScript.

## Editar

- `index.html`: título, metadados, navegação, hero e rodapé.
- `css/styles.css`: tokens de design, estilos e responsividade.
- `js/data/projects.js`: projetos e links de contato.
- `js/sections/`: conteúdo de cada seção.
- `js/main.js`: renderização e menu mobile.

LinkedIn e e-mail já estão configurados em `js/data/projects.js`. Adicione novos projetos ao array `projects`, utilizando apenas informações confirmadas.

Nenhum formulário ou backend é necessário para o portfólio. As informações de projetos são estáticas; não existe integração com estatísticas do GitHub.

## Idiomas

O seletor na navegação alterna entre `en-US` (inglês americano) e `pt-BR` (português brasileiro). A primeira visita utiliza o idioma do navegador; outros idiomas usam inglês. A escolha é persistida em `localStorage`, quando disponível.

- `js/i18n.js`: inicialização e função `setLanguage(locale)`.
- `js/data/translations.js`: traduções em português das strings originais em inglês.

Para novas frases, adicione uma entrada ao dicionário `ptBR`, mantendo o texto inglês exatamente igual ao utilizado no componente. Nomes de tecnologias, comandos e repositórios permanecem como termos técnicos. A tradução acontece no navegador; o HTML original entregue a mecanismos de busca continua em inglês.

## Modo claro e escuro

O seletor de tema permanece acessível junto ao idioma. Na primeira visita, acompanha a preferência de cores do sistema. Uma escolha manual fica salva separadamente do idioma e tem prioridade. Se o armazenamento estiver bloqueado, o seletor continua funcionando durante a visita.

- `js/theme-init.js`: aplica o tema antes do carregamento dos estilos para evitar flashes.
- `js/theme.js`: `setTheme('light')`, `setTheme('dark')` e persistência da escolha.
- `css/styles.css`: tokens dos temas e contraste dos elementos.

## Formatação

HTML, CSS e JavaScript seguem indentação de dois espaços. A configuração `.prettierrc.json` mantém aspas simples em JavaScript, ponto e vírgula e largura preferencial de 100 caracteres. Para preservar esse padrão, use a extensão Prettier no editor.
