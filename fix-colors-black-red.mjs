import fs from 'fs';

const files = ['src/App.tsx', 'src/components/HomeContent.tsx'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Mudar brand-gold para brand-red ou slate-900 conforme o caso
        // Para ícones e labels, vamos usar vermelho ou preto
        content = content.replace(/text-brand-gold/g, 'text-brand-red');
        content = content.replace(/bg-brand-gold/g, 'bg-brand-red');
        content = content.replace(/border-brand-gold/g, 'border-brand-red');

        // Mudar brand-orange para brand-red ou brand-ember
        content = content.replace(/text-brand-orange/g, 'text-brand-red');
        content = content.replace(/bg-brand-orange/g, 'bg-brand-ember');
        content = content.replace(/border-brand-orange/g, 'border-brand-red');

        // Caso específico do Marquee/Tags que usavam cores misturadas
        // Vamos alternar entre preto e vermelho manualmente ou via regex se houver padrão
        // Mas por agora, unificar no preto/vermelho já ajuda.

        fs.writeFileSync(file, content);
        console.log(`${file} processado para Preto e Vermelho!`);
    }
});
