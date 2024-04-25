import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        }
    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }
}

    /*@Post()
    @HttpCode(418)
    create() {
        return 'Soy una tetera';
        }*/
    /*@Get()
    findAll(): string{
        return 'This action returns all cats';
    }
    @Get(':id')
    findOne(@Param('id') id: string): string{
        return `This action returns a #${id} cat`;
    }
    @Post("dto")
    async create(@Body() createCatDto: CreateCatDto) {
        return `This action adds a new cat called ${createCatDto.name}.`;
        //return `This is the age ${createCatDto.age}.`;
    }*/