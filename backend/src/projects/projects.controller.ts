import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('projects')
@UseGuards(AuthGuard('jwt'))
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService){}

    @Post()
    create(@Body() { name }: CreateProjectDto){
        return this.projectService.createProject(name)
    }

    @Get()
    index() {
        return this.projectService.getProjects()
    }
}
