import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { BookGuard } from './book/data/book.guard';

function globalMiddleWareOne(req: Request , res: Response , next: NextFunction)
{
    console.log("This global middleware 1.");
    next()
}


function globalMiddleWareTwo(req: Request , res: Response , next: NextFunction)
{
    console.log("This global middleware 2.");
    next()
}
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(globalMiddleWareOne);
  // app.use(globalMiddleWareTwo);

    console.log(process.env.port);
    console.log(process.env.logging);
   //app.useGlobalGuards(new BookGuard());
  await app.listen(80);


  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
