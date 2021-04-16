import { IsNotEmpty } from "class-validator";

export class createArtistDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    isBand: boolean;
}