// import { Body, Controller, Post } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { CreateUserDto } from './dto/create-user.dto';

// @Controller('auth')
// export class AuthController {

//     constructor(private userService : AuthService) { }


//     @Post('/signin')
//     async signin(@Body()
//     createUserDto: CreateUserDto){
//         //call service to connect
//         const user = await this.userService.signin(CreateUserDto);
//         const payload: JwtPayload = {
//             id: user.id,
//             mail: createUserDto.mail,
//         };
//         const accessToken = await this.jwtService.sign(payload);
//         return {accessToken}
//     }
// }
