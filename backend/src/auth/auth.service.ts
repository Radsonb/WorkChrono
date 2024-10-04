import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ){}

    async register(username: string, password: string) {
        const  hashedPassword = await bcrypt.hash(password, 10);
        return this.prisma.user.create({
            data: { username, password: hashedPassword }
        })
    }

    async login(username: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { username } });
        if(!user) throw new UnauthorizedException('Credenciais inválidas.');

        const passwordMatches = await bcrypt.compare(password, user.password);
        if(!passwordMatches) throw new UnauthorizedException('Credenciais inválidas')

        const payload = { userId: user.id, userName: user.username }
        const token = this.jwtService.sign(payload);

        return { token };
    }

    async validateUser(userId: number) {
        return this.prisma.user.findUnique({ where: { id: userId } })
    }
}
