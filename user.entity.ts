import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Декоратор, указывающий, что класс является сущностью базы данных
export class User {
  @PrimaryGeneratedColumn() // Декоратор, указывающий, что поле является первичным ключом и автоинкрементируемым
  id: number;

  @Column() // Декоратор, указывающий, что поле является столбцом в таблице
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column({ default: false }) // Указание значения по умолчанию для столбца
  hasIssues: boolean;
}