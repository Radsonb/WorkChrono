import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('sessions')
@UseGuards(AuthGuard('jwt'))
export class SessionsController {
    constructor(private readonly sessionsService: SessionsService) {}

    @Post()
    create(@Body() { projectId, startTime, endTime }: CreateSessionDto) {
        return this.sessionsService.createSession(projectId, startTime, endTime)
    }

    @Get()
    index(){
        return this.sessionsService.getSessions();
    }
}
