import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Импорт сущности User
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Тип базы данных
      host: 'localhost', // Хост, на котором запущен сервер базы данных
      port: 5432,        // Порт, на котором запущен сервер базы данных
      username: 'postgres', // Имя пользователя для подключения к базе данных
      password: 'postgres', // Пароль для подключения к базе данных
      database: 'task-2',   // Название базы данных
      entities: [User],     // Список сущностей, которые будут использоваться
      synchronize: true,    // Автоматическое создание и обновление таблиц в БД
    }),
    UserModule  // Регистрация модуля пользователя
  ],
})
export class AppModule {}