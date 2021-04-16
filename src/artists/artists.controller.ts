import { Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Artist } from './artist.entity';
import { ArtistsService } from './artists.service';
import { createArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artists')
export class ArtistsController {

    constructor(private artistsService : ArtistsService) { }

    @Get('getAllArtists')
    getAllArtists():Promise<Artist[]> {
        console.log("GET ALL ARTISTS");
        return this.artistsService.getAllArtists();
    }

    @Get('/:name')
    async getArtistByName(@Param() name: string): Promise<Artist> {
        return this.artistsService.getArtistByName(name);
    }

    @Post('addArtist')
    @UsePipes(ValidationPipe)
    addArtist(@Body() createArtistDto : createArtistDto ){
    console.log("ADD TASK")
     if(createArtistDto)
     {
      return this.artistsService.addArtist(createArtistDto);
     }
    }


    @Patch('/updateArtist')
    @UsePipes(ValidationPipe)
    updateArtistByName(@Body() updateArtistDto : UpdateArtistDto): Promise<Artist>{
        console.log("UPDATE TASK STATUS")
        return this.artistsService.updateArtistByName(updateArtistDto);
    }

    @Delete('/:id')
    deleteArtistById(@Param('id') id: number) : Promise<void> {
        console.log("DELETE TASK");
        return this.artistsService.deleteArtistById(id);
    }



}
