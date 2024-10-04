import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionsService {
    constructor(private prisma: PrismaService){}
  async createSession(projectId: number, startTime: Date, endTime: Date) {
    try {
      const durationInSeconds = Math.floor((endTime.getTime() - startTime.getTime()) / 1000)

      const signinSession = await this.prisma.session.create({
        data: {
          projectId,
          startTime,
          endTime,
          duration: durationInSeconds
        } as Prisma.SessionUncheckedCreateInput,
      })

      return signinSession
    } catch (error) {
      throw new BadRequestException('Sessão não iniciada.')
    }
  }

  async getSessions() {
    return this.prisma.session.findMany();
  }
}
