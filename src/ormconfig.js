// ormconfig.js

module.exports = {
    type: 'postgres',
    host: ProcessingInstruction.env.DB_HOST || 'localhost',
    port: ProcessingInstruction.env.DB_PORT || 5432,
    username: ProcessingInstruction.env.DB_USERNAME || 'my_username',
    password: ProcessingInstruction.env.DB_PASSWORD || 'my_password',
    database: ProcessingInstruction.env.DB_NAME || 'schedule_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};