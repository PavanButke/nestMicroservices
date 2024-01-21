import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from 'create-user.event';


@Injectable()
export class AppService {
  public analytics: any[]=[];

  addUserService(data : CreateUserEvent){
      console.log('data',data)
      this.analytics.push({
          email: data.username,
          timestamp: new Date()
      });
  }

  getHello(): string {
    return 'Hello World!';
  }

  getAnalytics() {
    return this.analytics;
  }
}
