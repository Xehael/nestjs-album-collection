import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateAlbumDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    year: string;

    @Optional()
    cover: string;

  }