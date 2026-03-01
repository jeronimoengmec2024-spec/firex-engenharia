import React from 'react';
import { Helmet } from 'react-helmet-async';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EngineeringBusiness", "ProfessionalService"],
    "name": "FIREX Engenharia de Combate a Incêndio",
    "legalName": "Pedro Júnior Engenharia Mecânica",
    "image": "https://firexengenharia.com.br/logo.png",
    "@id": "https://firexengenharia.com.br/#business",
    "url": "https://firexengenharia.com.br",
    "telephone": "+5538984056240",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Corinto Crisóstomo Freire, Morada do Parque",
      "addressLocality": "Montes Claros",
      "addressRegion": "MG",
      "postalCode": "39400-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.7166667,
      "longitude": -43.8888888
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "founder": {
      "@type": "Person",
      "name": "Eng. Pedro Júnior",
      "jobTitle": "Engenheiro Mecânico (Responsável Técnico CREA-MG)",
      "knowsAbout": ["Prevenção contra Incêndio", "AVCB", "CLCB", "Engenharia Mecânica", "Normas CBMMG", "PPCI"],
      "url": "https://firexengenharia.com.br/#sobre"
    },
    "areaServed": [
      { "@type": "City", "name": "Montes Claros" },
      { "@type": "City", "name": "Janaúba" },
      { "@type": "City", "name": "Pirapora" },
      { "@type": "City", "name": "Bocaiúva" },
      { "@type": "City", "name": "Januária" }
    ],
    "description": "Especialista em AVCB, Renovação de AVCB, Alvará do Corpo de Bombeiros e Projetos Técnicos em Montes Claros e Norte de Minas.",
    "sameAs": [
      "https://www.instagram.com/firexengenharia/",
      "https://www.linkedin.com/company/firex-engenharia"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O AVCB é obrigatório para todas as empresas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o AVCB é obrigatório para todas as edificações de uso coletivo acima de 200m² ou com riscos específicos. Para edificações menores, pode ser exigido o Projeto Técnico Simplificado (PTS)."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a validade do AVCB em Minas Gerais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A validade varia de 1 a 5 anos, dependendo do risco da ocupação e da altura da edificação, conforme o Decreto Estadual 47.998/2020."
        }
      },
      {
        "@type": "Question",
        "name": "Como evitar multas do Corpo de Bombeiros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A conformidade preventiva é a única via segura. Manter o AVCB atualizado e os sistemas de segurança em perfeito estado de funcionamento garante segurança jurídica e operacional total."
        }
      },
      {
        "@type": "Question",
        "name": "Quem pode assinar o projeto de incêndio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apenas engenheiros ou arquitetos com registro ativo no conselho de classe (CREA/CAU) e atribuição técnica específica podem emitir a ART/RRT de projeto e execução."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
