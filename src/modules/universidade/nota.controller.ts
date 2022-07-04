import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotaService } from './nota.service';
import { NotaDTO } from "./universidade.dto"

@Controller('nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}
  
  @Post()
  async create(@Body() data: NotaDTO) {
    return this.notaService.create(data);
  }

  @Get()
  async findAll(){
    return this.notaService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: NotaDTO){
    return this.notaService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id: string){
    return this.notaService.delete(id)
  }
}
