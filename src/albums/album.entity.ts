import { Artist } from "src/artists/artist.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    year: string;
    @Column()
    cover: string;


//     ManyToOne(() => Artist, artist => artist.albums)
//     artist : Artist;
}