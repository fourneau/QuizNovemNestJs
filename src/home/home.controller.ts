import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('home')
export class HomeController {
    @Get()
getHome(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addHome(){
    console.log('ajouter')
    return 'Ajout Home';
}
@Delete()
deleteHome(){
    console.log('supprimer')
    return 'Delete Home';
}
@Put()
modifierHome(){
    console.log('modifier Home')
    return 'Update Home';
}
}
