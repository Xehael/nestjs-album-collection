import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlbumDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    year: string;

    @IsString()
    cover: string;

  }