module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3307,
            name: 'spoiler',
            dialect: 'mysql',
            user: 'root',
            password: 'Segredo1'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
        }
    }




}