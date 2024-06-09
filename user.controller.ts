import { Controller, Patch, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Patch('/set-issues-false')
    async setIssuesTrue() {
    const result = await this.userService.setIssuesTrueAndCountPreviousTrue();
    return { 
        message: `Изначально проблему имело: ${result.previousTrueCount}. Обновлено ${result.affected} пользователей с проблемами.`,
        ...result 
        };
    }
}