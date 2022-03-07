import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('signin')
export class SigninController {
    @Get()
getSignin(){
    console.log('récupérer')
    return 'Liste';
}
@Post()
addSignin(){
    console.log('ajouter')
    return 'Ajout Signin';
}
@Delete()
deleteSignin(){
    console.log('supprimer')
    return 'Delete Signin';
}
@Put()
modifierSignin(){
    console.log('modifier Signin')
    return 'Update Signin';
}
}
