import fs from 'fs';

const files = [
    'src/App.tsx',
    'src/components/HomeContent.tsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Aumentando opacidade das imagens de fundo para ficarem mais visíveis
        // sem ofuscar o texto.
        content = content.replace(/opacity-\[0\.03\]/g, 'opacity-[0.08]');
        content = content.replace(/opacity-\[0\.05\]/g, 'opacity-[0.12]');
        content = content.replace(/opacity-\[0\.12\]/g, 'opacity-[0.18]');

        fs.writeFileSync(file, content);
        console.log(`Opacidades atualizadas em: ${file}`);
    } else {
        console.error(`O arquivo não foi encontrado: ${file}`);
    }
});
