import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('register')
export class RegisterController {
    @Get()
getRegister(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addRegister(){
    console.log('ajouter')
    return 'Ajout Register';
}
@Delete()
deleteRegister(){
    console.log('supprimer')
    return 'Delete Register';
}
@Put()
modifierRegister(){
    console.log('modifier Register')
    return 'Update Register';
}
}
