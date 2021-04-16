import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateArtistDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    isBand: boolean;

  }