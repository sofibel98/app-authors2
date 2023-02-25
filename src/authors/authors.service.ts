import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Authors } from './authors.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {

    
    constructor(
        @InjectRepository(Authors) private readonly authorRepository: Repository<Authors>
    ){

    }

    async findAll():Promise<Authors[]>{
        return this.authorRepository.find();
    }

    async findById(id):Promise<Authors>{
        return this.authorRepository.findOne(
            {
                where: {id},
            });
    }

    async create(data):Promise<Authors>{
        return this.authorRepository.save(data);    
    }

    async delete(id):Promise<void>{
        this.authorRepository.delete(id);    
    }

    async update(id,data: Authors):Promise<Authors>{
        var aut = data;
        return this.authorRepository.save(aut);
    }

}
