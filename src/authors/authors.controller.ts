import { Controller, Get, Delete, Post, Put, Body, Param} from '@nestjs/common';
import { Authors } from './authors.entity';
import { AuthorsService } from './authors.service';

@Controller()
export class AuthorsController {

    constructor(private authorsService: AuthorsService){

    }

    @Get()
    async findAll(){
        return this.authorsService.findAll();
    }

    @Get(":id")
    async find(@Param("id") id:string ){
        return this.authorsService.findById(id);
    }

    @Post()
    async create(@Body() author: Authors){
        return this.authorsService.create(author);
    }

    @Put(":id")
    async update(@Body() author: Authors){
        return this.authorsService.create(author);
    }

    @Delete(":id")
    async delete(@Param("id") id:string){
        return this.authorsService.delete(id)
    }

}
