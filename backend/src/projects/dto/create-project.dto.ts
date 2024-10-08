import { Injectable } from "@nestjs/common";
import { IsString } from "class-validator";

@Injectable()
export class CreateProjectDto {
    @IsString()
    name: string;
}