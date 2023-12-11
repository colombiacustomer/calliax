module.exports = {
    apps: [
        {
            name: 'Calliax.com',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.js'
        }
    ]
}