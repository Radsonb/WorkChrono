import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from "./auth.service";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: { userId: number }) {
        return this.authService.validateUser(payload.userId);
    }
}