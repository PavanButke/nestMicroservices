import { EntityRepository, Repository } from "typeorm";
import { MyUser } from "../entities/my-user.entity";

@EntityRepository(MyUser)
export class MyUserRepository extends Repository<MyUser>{
    
    getUserByAge(age : number): Promise<MyUser>{
        return  this.findOne({
            where:{
                age: age,
            },
        });
    }
}