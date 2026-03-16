import fs from 'fs';

const file = 'src/App.tsx';
if (!fs.existsSync(file)) {
    console.error('Arquivo não encontrado:', file);
    process.exit(1);
}

let content = fs.readFileSync(file, 'utf8');

// 1. Converter backgrounds escuros para branco ou cinza muito claro
content = content.replace(/bg-brand-dark/g, 'bg-white');
content = content.replace(/bg-brand-graphite/g, 'bg-slate-50');
content = content.replace(/bg-zinc-900\/70/g, 'bg-white/70');
content = content.replace(/bg-black\/80/g, 'bg-slate-900/80');

// 2. Converter textos brancos para escuros (slate-900 para contraste máximo)
// Usamos regex com word boundaries para não quebrar outras classes
content = content.replace(/\btext-white\b/g, 'text-slate-900');

// 3. Converter cinzas claros/médios para cinzas escuros legíveis no fundo branco
content = content.replace(/\btext-zinc-400\b/g, 'text-slate-700');
content = content.replace(/\btext-zinc-500\b/g, 'text-slate-800'); // Mais escuro para labels
content = content.replace(/\btext-zinc-600\b/g, 'text-slate-900');
content = content.replace(/\btext-slate-600\b/g, 'text-slate-800'); // Aumentar contraste
content = content.replace(/\btext-slate-700\b/g, 'text-slate-900');

// 4. Corrigir casos específicos onde text-white era necessário (dentro de botões bg-brand-red por exemplo)
// Adicionaremos manualmente ou via regras específicas se soubermos os padrões
// Botão bg-brand-red -> text-white
content = content.replace(/bg-brand-red([^>]+)text-slate-900/g, 'bg-brand-red$1text-white');
content = content.replace(/bg-brand-orange([^>]+)text-slate-900/g, 'bg-brand-orange$1text-white');

// 5. Ajustar opacidade das imagens de fundo (deixar mais visíveis)
content = content.replace(/opacity-\[0\.03\]/g, 'opacity-[0.14]');
content = content.replace(/opacity-\[0\.05\]/g, 'opacity-[0.18]');
content = content.replace(/opacity-\[0\.08\]/g, 'opacity-[0.22]');
content = content.replace(/opacity-\[0\.10\]/g, 'opacity-[0.25]');
content = content.replace(/opacity-\[0\.12\]/g, 'opacity-[0.28]');
content = content.replace(/opacity-\[0\.15\]/g, 'opacity-[0.30]');

// 6. Aumentar tamanhos de fonte ([10px] -> xs, etc)
content = content.replace(/text-\[10px\]/g, 'text-xs');
content = content.replace(/text-\[11px\]/g, 'text-sm');
content = content.replace(/text-\[8px\]/g, 'text-xs');
content = content.replace(/text-\[7px\]/g, 'text-[10px]');

// 7. Corrigir gradientes industriais escuros para sutis
content = content.replace(/bg-gradient-to-t from-brand-dark/g, 'bg-gradient-to-t from-white');
content = content.replace(/bg-gradient-to-b from-brand-dark/g, 'bg-gradient-to-b from-white');

fs.writeFileSync(file, content);
console.log('App.tsx processado com sucesso para Tema Claro!');
