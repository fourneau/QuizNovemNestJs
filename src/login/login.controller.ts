import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
getLogin(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addLogin(){
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
