import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('register')
export class RegisterController {
    @Get()
getRegister(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addRegister(
    @Body() newRegister
){
    console.log(newRegister)
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
