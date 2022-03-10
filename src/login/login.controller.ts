import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Login } from './entities/login.entity';

@Controller('login')
export class LoginController {
    constructor() {
        this.logins = []
    }
    logins: Login[];
    @Get()
getLogin(){
    
    return this.logins;
}
@Post()
addLogin(
    @Body('id') newLogin: Login
){
    if (this.logins.length) {
        newLogin.id = this.logins[this.logins.length - 1].id + 1;
    } else {
        newLogin.id = 1;
    }
    this.logins.push(newLogin);
    return newLogin;
   
}
@Delete()
deleteLogin(){
    console.log('supprimer')
    return 'Delete Login';
}
@Put()
modifierLogin(){
    console.log('modifier Login')
    return 'Update Login';
}
}
