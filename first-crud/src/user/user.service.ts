import { Inject, Injectable } from "@nestjs/common";
import { User } from "../book/data/user.dto";
import {v4 as uuidv4} from 'uuid';
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserEvent } from "./create-user.event";

@Injectable()
export class UserService{
    constructor(
      @Inject("COMMUNICATION") private readonly commClient: ClientProxy ,
      @Inject("ANALYTICS") private readonly analyticsClient: ClientProxy
    ){
      
    }

    public users: User[]=[];

    addUserService(user : User):string{
        user.id = uuidv4();
        this.users.push(user);
        this.commClient.emit('user_created',new CreateUserEvent(user.username));
        this.analyticsClient.emit('user_created',new CreateUserEvent(user.username));
        return "User added successfuly."
    }

    getAnalytics()
    {
      return this.analyticsClient.send({cmd: 'get_analytics'}, {});
    }
    
    updateUserService(user : User):string{
      let idx= this.users.findIndex(myUser=>{
            return myUser.id == user.id;
      })
      this.users[idx]=user;
      return "User has been updated successfuly."
    }

    deleteUserService(userId : string):string{
        this.users = this.users.filter((bk)=>
           {  bk.id !== userId; 
            
        })
        return "User has been deleted successfuly."
      }

      findUserbyIdService(userId : string):User{
        const foundUser = this.users.find((bk) => bk.id === userId);
        return foundUser;
      }

      findAllUsers(): User[]{
        this.commClient.emit('user_created',this.users);
        return this.users;
      } 

      findUserbyNameService(username : string):User{
        const foundUser = this.users.find((bk) => bk.username === username);
        return foundUser;
      }

}