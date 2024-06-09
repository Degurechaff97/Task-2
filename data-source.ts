import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "task-2",
    entities: [User],
    synchronize: false,
    logging: true,
    migrations: ["*_migrations*.ts"]
});

AppDataSource.initialize();