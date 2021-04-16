import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { AlbumRepository } from './album.repository';
import { CreateAlbumDto } from './dto/create-album.dto';
import { v1 as uuid } from 'uuid';


@Injectable()
export class AlbumsService {

    constructor(
        @InjectRepository(AlbumRepository)
        private albumRepository: AlbumRepository,
    ) {}

    async getAllAlbums(): Promise<Album[]> {
        const albums = await this.albumRepository.find();
        if(!albums){
            throw new NotFoundException("Task not found")
        }
        return albums;
    }

    async getAlbumById(id: number): Promise<Album> {
        const found = await this.albumRepository.findOne(id);
        if (!found) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
      }


    async addAlbum(createAlbum: CreateAlbumDto): Promise<Album>{
        const album = {
            id: uuid(),
            title: createAlbum.title,
            year: createAlbum.year,
            cover: createAlbum.cover
          };
          const insert = await this.albumRepository.createAlbum(album);
          if(!insert){
              throw new Error("Album not inserted");
          }
         return insert;
    } 

    // async updateStatusById(updateStatusDto : UpdateStatusDto): Promise<Task>{
    //     const update : Task = await this.getTaskById(updateStatusDto.id)

    //     update.status = updateStatusDto.status;
    //     await update.save()
    //     return update;
    // }

    async deleteAlbumById(id: number): Promise<void> {
        const taskdeleted = await this.albumRepository.delete(id);
        if(taskdeleted.affected === 0){
            throw new NotFoundException(`Album ${id} not found`)
        }
    }


}
