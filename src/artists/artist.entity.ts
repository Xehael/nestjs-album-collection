import { Album } from "src/albums/album.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    isBand: boolean;

    @OneToMany(type => Album, album => album.id)
    albums: Album[];
}