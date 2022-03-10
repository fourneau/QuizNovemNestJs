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
    @Body('id') id: string,
    @Body('username') name: string,
    @Body('password') password:string,
){
    console.log(id, name, password)
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
