module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {
            runtime: 'automatic' // Para não precisar mais parar e iniciar o servidor para visualizar as alterações nos arquivos js
        }]
    ],
}