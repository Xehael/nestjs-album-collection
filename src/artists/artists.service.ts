import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { v1 as uuid } from 'uuid';
import { ArtistRepository } from './artist.repository';
import { createArtistDto } from './dto/create-artist.dto';
import { stringify } from 'node:querystring';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistsService {

    constructor(
        @InjectRepository(ArtistRepository)
        private artistRepository: ArtistRepository,
    ){}

    async getAllArtists(): Promise<Artist[]> {
        const artists = await this.artistRepository.find();
        if(!artists){
            throw new NotFoundException("Artist not found")
        }
        return artists;
    }

    async getArtistByName(name: string): Promise<Artist> {
        const found = await this.artistRepository.findOne(name);
        if (!found){
            throw new NotFoundException(`Artist with name "${name}" not found`)
        }
        return found;
    }

    async addArtist(createArtist: createArtistDto): Promise<Artist>{
        const artist = {
            id: uuid(),
            name: createArtist.name,
            isBand: createArtist.isBand
        };

        const insert = await this.artistRepository.createArtist(artist);
        if(!insert){
            throw new Error("Artist not inserted");
        }
        return insert;
    }


    async updateArtistByName(updateArtistDto : UpdateArtistDto): Promise<Artist>{
        const update : Artist = await this.getArtistByName(updateArtistDto.name)

        update.name = updateArtistDto.name;
        update.isBand = updateArtistDto.isBand;
        await update.save()
        return update;
    }


    async deleteArtistById(id: number): Promise<void> {
        const taskdeleted = await this.artistRepository.delete(id);
        if(taskdeleted.affected === 0){
            throw new NotFoundException(`Artist ${id} not found`)
        }
    }
}
