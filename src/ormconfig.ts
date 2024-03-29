import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type :'postgres',
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrationsTableName: 'migration',
    synchronize: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli : {
        migrationsDir: 'src/migrations',
    },
};

export default config;