import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumsModule } from './albums/albums.module';
import { typeormConfig } from './config/typeorm.config';
import { ArtistsModule } from './artists/artists.module';
// import { AuthModule } from './auth/auth.module';


@Module({
  imports: [AlbumsModule, TypeOrmModule.forRoot(typeormConfig), ArtistsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
