import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
getLogin(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addLogin(
    @Body() newLogin
){
    console.log(newLogin)
    console.log('ajouter')
    return 'Ajout Login';
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
