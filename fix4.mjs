import fs from 'fs';

const files = [
    'src/App.tsx',
    'src/components/HomeContent.tsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Aumentar todas as opacidades das imagens de fundo (mais agressivo desta vez)
        content = content.replace(/opacity-\[0\.08\]/g, 'opacity-[0.18]');
        content = content.replace(/opacity-\[0\.18\]/g, 'opacity-[0.25]');

        fs.writeFileSync(file, content);
        console.log(`Opacidades aumentadas ainda mais em: ${file}`);
    } else {
        console.error(`Arquivo não encontrado: ${file}`);
    }
});
