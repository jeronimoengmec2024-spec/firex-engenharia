const fs = require('fs');
const path = require('path');

const files = [
    path.join(__dirname, 'src/App.tsx'),
    path.join(__dirname, 'src/components/HomeContent.tsx')
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Aumento de tamanhos de fontes pequenas em 1 step do Tailwind
        content = content.replace(/\b(text-\[10px\]|text-\[11px\]|text-xs|text-sm)\b/g, (match) => {
            switch (match) {
                case 'text-[10px]': return 'text-xs';
                case 'text-[11px]': return 'text-sm';
                case 'text-xs': return 'text-sm';
                case 'text-sm': return 'text-base';
                default: return match;
            }
        });

        // Ajuste de cores para alto contraste
        content = content.replace(/\b(text-slate-500|text-slate-600|text-zinc-500|text-zinc-400)\b/g, (match) => {
            switch (match) {
                case 'text-slate-500': return 'text-slate-700';
                case 'text-slate-600': return 'text-slate-800';
                case 'text-zinc-500': return 'text-zinc-300';
                case 'text-zinc-400': return 'text-zinc-200';
                default: return match;
            }
        });

        // Removendo font-light que diminui peso da fonte em fontes menores ou de descrições
        // para melhorar a percepção de contraste.
        // Vamos substituir font-light por nada (ou font-normal se a classe for necessária)
        content = content.replace(/\sfont-light/g, ' font-normal');

        fs.writeFileSync(file, content);
        console.log(`Atualizado: ${file}`);
    } else {
        console.error(`O arquivo não foi encontrado: ${file}`);
    }
});
console.log("Remoção de fontes pequenas e tons fracos de cinza finalizada.");
