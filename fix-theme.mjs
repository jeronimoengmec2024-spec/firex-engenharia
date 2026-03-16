import fs from 'fs';

const file = 'src/App.tsx';
if (!fs.existsSync(file)) { console.error('Não encontrado:', file); process.exit(1); }

let content = fs.readFileSync(file, 'utf8');

// 1. Backgrounds escuros → branco ou cinza claro
content = content.replace(/bg-brand-dark/g, 'bg-white');
content = content.replace(/bg-brand-graphite/g, 'bg-slate-50');

// 2. Textos brancos → escuros
content = content.replace(/\btext-white\b/g, 'text-slate-900');

// 3. Textos cinza claro (zinc) → escuros legíveis
content = content.replace(/\btext-zinc-400\b/g, 'text-slate-700');
content = content.replace(/\btext-zinc-300\b/g, 'text-slate-600');
content = content.replace(/\btext-zinc-200\b/g, 'text-slate-700');
content = content.replace(/\btext-zinc-500\b/g, 'text-slate-600');
content = content.replace(/\btext-slate-400\b/g, 'text-slate-600');
content = content.replace(/\btext-slate-500\b/g, 'text-slate-700');

// 4. Labels/brand gold → brand-gold (já está bem, só alterar os zinc que eram gold)
content = content.replace(/\btext-brand-gold\b/g, 'text-brand-gold');  // mantém

// 5. font-light → font-normal (mais peso para legibilidade)
content = content.replace(/\bfont-light\b/g, 'font-normal');

// 6. Aumentar tamanhos de fonte → um nível acima
content = content.replace(/\btext-\[10px\]\b/g, 'text-xs');
content = content.replace(/\btext-\[11px\]\b/g, 'text-sm');
content = content.replace(/\btext-\[9px\]\b/g, 'text-xs');
content = content.replace(/\btext-\[8px\]\b/g, 'text-xs');
content = content.replace(/\btext-xs\b/g, 'text-sm');
content = content.replace(/\btext-sm\b/g, 'text-base');

// 7. Bordas escuras → claras
content = content.replace(/\bborder-white\/\[0\.08\]\b/g, 'border-slate-200');
content = content.replace(/\bborder-white\/5\b/g, 'border-slate-200');
content = content.replace(/\bborder-white\/\[0\.05\]\b/g, 'border-slate-200');

// 8. glass-surface: já adaptado no CSS
// 9. Overlay escura de fundo: manter mais visível agora
content = content.replace(/opacity-\[0\.03\]/g, 'opacity-[0.12]');
content = content.replace(/opacity-\[0\.05\]/g, 'opacity-[0.15]');
content = content.replace(/opacity-\[0\.08\]/g, 'opacity-[0.18]');
content = content.replace(/opacity-\[0\.12\]/g, 'opacity-[0.20]');

fs.writeFileSync(file, content);
console.log('App.tsx atualizado com novo tema claro!');
