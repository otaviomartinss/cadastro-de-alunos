import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CursoDTO } from "./universidade.dto"

@Injectable()
export class CursoService {
    constructor(private prisma: PrismaService){}

    async create(data: CursoDTO){
        const cursoExists = await this.prisma.curso.findFirst({
            where: {
                id: data.id,
            },
        });

        if(cursoExists){
            throw new Error("O curso já existe")
        }
        const curso = await this.prisma.curso.create({
            data,
        })
        return curso
    }



    async findAll() {
        return this.prisma.curso.findMany();
    }

    async update(id: string, data: CursoDTO){
        const cursoExists = await this.prisma.curso.findUnique({
            where: {
                id,
            }
        });

        if (!cursoExists){
            throw new Error("O curso não existe")
        }

        return await this.prisma.curso.update({
            data,
            where: {
                id,
            } 
        })
    }

    async delete(id: string){
        const cursoExists = await this.prisma.curso.findUnique({
            where: {
                id,
            }
        });

        if (!cursoExists){
            throw new Error("O curso não existe")
        }

        return await this.prisma.curso.delete({
            where: {
                id,
            } 
        })
    }
}
