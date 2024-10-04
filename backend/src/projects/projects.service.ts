import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) {}

    async createProject(name: string){
        return this.prisma.project.create({
            data: { name }
        });
    }

    async getProjects(){
        return this.prisma.project.findMany()
    }
}
