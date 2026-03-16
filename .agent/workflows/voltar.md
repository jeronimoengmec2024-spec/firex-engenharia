---
description: Reverter para o tema original escuro do site FireX
---
// turbo-all

1. Restaurar App.tsx e HomeContent.tsx para o commit original:

```
git checkout de5ee5e -- src/App.tsx src/index.css src/components/HomeContent.tsx
```

1. Verificar que o build continua funcionando:

```
npm run build
```
