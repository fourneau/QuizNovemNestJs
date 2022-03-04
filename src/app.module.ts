import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './-components/-components.module';
import { ContentModule } from './-content/-content.module';
import { HelpersModule } from './-helpers/-helpers.module';
import { ModelsModule } from './-models/-models.module';
import { ServicesModule } from './-services/-services.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SigninModule } from './signin/signin.module';
import { WelcomeModule } from './welcome/welcome.module';

@Module({
  imports: [ComponentsModule, ContentModule, HelpersModule, ModelsModule, ServicesModule, AboutModule, HomeModule, LoginModule, RegisterModule, SigninModule, WelcomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
