# Guia Técnico de SEO Avançado - PPCI & AVCB Montes Claros

Este documento detalha as configurações técnicas necessárias para dominar os resultados de busca orgânica, focando em infraestrutura, semântica e experiência do usuário.

---

## 1. Estrutura de URLs e Organização de Páginas
Para máxima relevância, utilize uma estrutura hierárquica e "limpa":

*   **Home:** `https://ppcimontesclaros.com.br/` (Foco em "PPCI Montes Claros")
*   **Serviços (Silo Structure):**
    *   `.../servicos/projeto-ppci-montes-claros`
    *   `.../servicos/renovacao-avcb-montes-claros`
    *   `.../servicos/laudo-art-incendio`
*   **Segmentos (Landing Pages de Nicho):**
    *   `.../ppci-para-industrias`
    *   `.../ppci-para-clinicas-e-hospitais`
    *   `.../avcb-para-condominios`

---

## 2. Otimização de Meta Tags (Intenção de Busca)

### Home Page
*   **Title:** PPCI Montes Claros | AVCB e Regularização Bombeiros MG
*   **Description:** Engenharia especializada em PPCI e AVCB em Montes Claros. Aprovação rápida no Corpo de Bombeiros, renovação de licenças e consultoria técnica.

### Página de Serviço (Ex: Renovação AVCB)
*   **Title:** Renovação de AVCB em Montes Claros | Regularize sua Empresa
*   **Description:** Precisa renovar seu AVCB em Montes Claros? Realizamos vistorias técnicas, adequações e emissão de laudos para aprovação imediata no CBMMG.

---

## 3. Schema Markup Avançado (JSON-LD)
Além do `LocalBusiness`, implemente o `Service` schema para cada serviço principal:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Projeto de PPCI",
  "provider": {
    "@type": "LocalBusiness",
    "name": "PPCI Montes Claros Engenharia"
  },
  "areaServed": {
    "@type": "City",
    "name": "Montes Claros"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Engenharia de Incêndio",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aprovação de AVCB"
        }
      }
    ]
  }
}
```

---

## 4. Estratégia de Links Internos (Link Juice)
*   **Contextual Linking:** No blog, sempre que citar "segurança jurídica", linkar para a página de "AVCB".
*   **Breadcrumbs:** Implementar trilhas de navegação para ajudar o Google a entender a hierarquia.
*   **Footer Links:** Manter links para os 4 serviços principais em todas as páginas.

---

## 5. Performance e UX (Core Web Vitals)
*   **LCP (Largest Contentful Paint):** Otimizar imagens da Hero Section (WebP, Lazy Loading desativado para a primeira imagem).
*   **FID (First Input Delay):** Minimizar scripts de terceiros pesados.
*   **CLS (Cumulative Layout Shift):** Reservar espaço para imagens e ícones para evitar pulos no carregamento.
*   **Mobile-First:** Garantir que os botões de CTA (WhatsApp) estejam sempre acessíveis no polegar (Bottom Sticky Bar em mobile).

---

## 6. Featured Snippets (Posição Zero)
*   Use H2 em formato de pergunta.
*   Responda a pergunta em um parágrafo de 40-50 palavras logo abaixo do H2.
*   Use listas `<ul>` ou `<ol>` para processos de "Como fazer".
