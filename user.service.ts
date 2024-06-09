import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> { // Метод для получения всех пользователей из базы данных.
    return this.userRepository.find(); 
  }

  async setIssuesTrueAndCountPreviousTrue(): Promise<{ previousTrueCount: number, affected: number }> {
    const previousTrueCount = await this.userRepository.count({ where: { hasIssues: true } });  // Подсчитываем количество пользователей с hasIssues = true до изменения

    const { affected } = await this.userRepository.createQueryBuilder() // Устанавливаем hasIssues = true для всех пользователей, у которых hasIssues = false
        .update(User)
        .set({ hasIssues: false })
        .where("hasIssues = :hasIssues", { hasIssues: true })
        .execute();

    return { previousTrueCount, affected };
}
}