import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppGateway } from './app.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //ConfigModule.forRoot()
  ],
  //controllers: [AppController],
  providers: [AppGateway],
})
export class AppModule {}
