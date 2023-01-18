import mysql from 'mysql'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 't0215749c',
    database: 'blog'
})

export default db