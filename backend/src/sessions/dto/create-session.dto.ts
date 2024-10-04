import { Injectable } from "@nestjs/common";
import { IsDate, IsNumber } from "class-validator";

@Injectable()
export class CreateSessionDto {
    @IsNumber()
    projectId: number;

    @IsDate()
    startTime: Date;

    @IsDate()
    endTime: Date;
}