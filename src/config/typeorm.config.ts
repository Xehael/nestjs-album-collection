import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'postgres',​   
    host: 'localhost',​   
    port: 5432,​   
    username: 'postgres',​   
    password: 'root',​   
    database: 'albumcollection',​   
    autoLoadEntities: true,​   
    synchronize: true,​
   
}