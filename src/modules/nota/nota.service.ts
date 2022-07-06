import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { NotaDTO } from "../universidade.dto"

@Injectable()
export class NotaService {
    constructor(private prisma: PrismaService){}

    async create(data: NotaDTO){
        const notaExists = await this.prisma.nota.findFirst({
            where: {
                id: data.id,
            },
        });

        if(notaExists){
            throw new Error("O professor já existe")
        }
        const nota = await this.prisma.nota.create({
            data,
        })
        return nota
    }

    async findAll() {
        return this.prisma.nota.findMany();
    }

    async update(id: string, data: NotaDTO){
        const notaExists = await this.prisma.nota.findUnique({
            where: {
                id,
            }
        });

        if (!notaExists){
            throw new Error("A nota não existe")
        }

        return await this.prisma.nota.update({
            data,
            where: {
                id,
            } 
        })
    }

    async delete(id: string){
        const notaExists = await this.prisma.nota.findUnique({
            where: {
                id,
            }
        });

        if (!notaExists){
            throw new Error("A nota não existe")
        }

        return await this.prisma.aluno.delete({
            where: {
                id,
            } 
        })
    }
}
