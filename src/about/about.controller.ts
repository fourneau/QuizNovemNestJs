import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('about')
export class AboutController {
@Get()
getAbout(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addAbout(
    @Body() newAbout
){
    console.log(newAbout)
    console.log('ajouter')
    return 'Ajout About';
}
@Delete()
deleteAbout(){
    console.log('supprimer')
    return 'Delete About';
}
@Put()
modifierAbout(){
    console.log('modifier About')
    return 'Update About';
}
}


