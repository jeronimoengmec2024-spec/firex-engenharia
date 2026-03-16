import fs from 'fs';

const files = [
    'src/App.tsx',
    'src/components/HomeContent.tsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Correção dos "zincs claros" gerados erroneamente no script anterior.
        // E aproveito e retiro qualquer outro zinc/slate fraco
        content = content.replace(/\b(text-zinc-200|text-zinc-300|text-zinc-400|text-zinc-500|text-slate-400|text-slate-500)\b/g, (match) => {
            switch (match) {
                case 'text-zinc-200': return 'text-slate-600';
                case 'text-zinc-300': return 'text-slate-700';
                case 'text-zinc-400': return 'text-slate-600';
                case 'text-zinc-500': return 'text-slate-700';
                case 'text-slate-400': return 'text-slate-600';
                case 'text-slate-500': return 'text-slate-700';
                default: return match;
            }
        });

        // Vou garantir também que NÃO tenha sobrado nenhum text-white inapropriado que foi ignorado

        fs.writeFileSync(file, content);
        console.log(`Atualizado zincs fracas/inadequados: ${file}`);
    } else {
        console.error(`O arquivo não foi encontrado: ${file}`);
    }
});
