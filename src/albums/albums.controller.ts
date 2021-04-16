import { Body, Delete, Patch, ValidationPipe } from '@nestjs/common';
import { Controller, UsePipes, Get, Post, Param, ParseIntPipe} from '@nestjs/common';
import { Album } from './album.entity';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';

@Controller('albums')
export class AlbumsController {

    constructor(private albumsService: AlbumsService) {}

    @Get('getAllAlbums')
    getAllAlbums():Promise<Album[]>{
        console.log("GET ALL ALBUMS");
        return this.albumsService.getAllAlbums();
    }

    @Get('/:id')
    async getAlbumById(@Param('id', ParseIntPipe) id: number): Promise<Album> {
    return this.albumsService.getAlbumById(id);
    }

    @Post('addAlbum')
    @UsePipes(ValidationPipe)
    addAlbum(@Body() createAlbumDto : CreateAlbumDto ){
      console.log("ADD TASK")
     if(createAlbumDto)
     {
      return this.albumsService.addAlbum(createAlbumDto);
     }
    }

    // @Patch('/updateAlbums')
    // @UsePipes(ValidationPipe)
    // updateStatusById(@Body() updateTaskStatusDto : UpdateStatusDto): Promise<Task>{
    //     console.log("UPDATE TASK STATUS")
    //     return this.tasksService.updateStatusById(updateTaskStatusDto);
    // }

    @Delete('/:id')
    deleteAlbumById(@Param('id') id: number) : Promise<void> {
        console.log("DELETE TASK");
        return this.albumsService.deleteAlbumById(id);
    }



}
