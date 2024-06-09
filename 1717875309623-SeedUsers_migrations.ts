import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUsers1717875309623 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log("Начало транзакции");
        await queryRunner.startTransaction();
        try {
            console.log("Начало вставки данных");
            for (let i = 0; i < 1000000; i++) {
                await queryRunner.query(
                    `INSERT INTO "user" ("firstName", "lastName", "age", "gender", "hasIssues") VALUES ($1, $2, $3, $4, $5)`,
                    [
                        `Name${i}`, // Имя
                        `Surname${i}`, // Фамилия
                        Math.floor(Math.random() * 100), // Возраст
                        Math.random() > 0.5 ? 'male' : 'female', // Пол
                        Math.random() > 0.5 // Наличие проблем
                    ]
                );
                if (i % 10000 === 0) {
                    console.log(`Вставлено ${i} пользователей`);
                }
            }
            console.log("Данные вставлены");
            await queryRunner.commitTransaction();
            console.log("Транзакция подтверждена");
        } catch (err) {
            console.log("Начало отката транзакции");
            await queryRunner.rollbackTransaction();
            console.error('Ошибка при выполнении миграции:', err);
            throw err;
        } finally {
            console.log("Ресурсы освобождены");
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "user"`);
    }

}