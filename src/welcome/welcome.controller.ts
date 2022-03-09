import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('welcome')
export class WelcomeController {
    @Get()
getWelcome(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addWelcome(
    @Body() newWelcome
){
    console.log(newWelcome)
    console.log('ajouter')
    return 'Ajout Welcome';
}
@Delete()
deleteWelcome(){
    console.log('supprimer')
    return 'Delete Welcome';
}
@Put()
modifierWelcome(){
    console.log('modifier Welcome')
    return 'Update Welcome';
}
}
