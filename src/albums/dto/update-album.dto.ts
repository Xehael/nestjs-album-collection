import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAlbumDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    year: string;

    @IsString()
    cover: string;

  }