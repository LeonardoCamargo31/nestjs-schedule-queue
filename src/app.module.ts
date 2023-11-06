import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

// decorators
@Module({
  imports: [TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
