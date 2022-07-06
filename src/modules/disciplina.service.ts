import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { DisciplinaDTO } from "./universidade.dto"

@Injectable()
export class DisciplinaService {
    constructor(private prisma: PrismaService){}

    async create(data: DisciplinaDTO){
        const disciplinaExists = await this.prisma.disciplina.findFirst({
            where: {
                id: data.id,
            },
        });

        if(disciplinaExists){
            throw new Error("A disciplina já existe")
        }
        const disciplina = await this.prisma.disciplina.create({
            data,
        })
        return disciplina
    }



    async findAll() {
        return this.prisma.disciplina.findMany();
    }

    async update(id: string, data: DisciplinaDTO){
        const disciplinaExists = await this.prisma.disciplina.findUnique({
            where: {
                id,
            }
        });

        if (!disciplinaExists){
            throw new Error("A disciplina não existe")
        }

        return await this.prisma.disciplina.update({
            data,
            where: {
                id,
            } 
        })
    }

    async delete(id: string){
        const disciplinaExists = await this.prisma.disciplina.findUnique({
            where: {
                id,
            }
        });

        if (!disciplinaExists){
            throw new Error("A disciplina não existe")
        }

        return await this.prisma.disciplina.delete({
            where: {
                id,
            } 
        })
    }
}
