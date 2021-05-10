// import { EntityRepository, Repository } from "typeorm";
// import { User } from "./user.entity";
// import { CreateUserDto } from "./dto/create-user.dto";

// @EntityRepository(User)
// export class UserRepository extends Repository<User>{

//     async createArtist(createUserDto : CreateUserDto): Promise<User> {
//         const {mail, password} =  createUserDto;

//         const user = new User();
//         user.mail = mail;
//         user.password = password;
//         await user.save();

//         return user;

//     }
// }