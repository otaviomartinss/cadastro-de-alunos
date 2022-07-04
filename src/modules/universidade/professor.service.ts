import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ProfessorDTO } from "./universidade.dto"

@Injectable()
export class ProfessorService {
    constructor(private prisma: PrismaService){}

    async create(data: ProfessorDTO){
        const professorExists = await this.prisma.professor.findFirst({
            where: {
                id: data.id,
            },
        });

        if(professorExists){
            throw new Error("O professor já existe")
        }
        const professor = await this.prisma.professor.create({
            data,
        })
        return professor
    }



    async findAll() {
        return this.prisma.professor.findMany();
    }

    async update(id: string, data: ProfessorDTO){
        const professorExists = await this.prisma.professor.findUnique({
            where: {
                id,
            }
        });

        if (!professorExists){
            throw new Error("O professor não existe")
        }

        return await this.prisma.professor.update({
            data,
            where: {
                id,
            } 
        })
    }

    async delete(id: string){
        const professorExists = await this.prisma.professor.findUnique({
            where: {
                id,
            }
        });

        if (!professorExists){
            throw new Error("O professor não existe")
        }

        return await this.prisma.professor.delete({
            where: {
                id,
            } 
        })
    }
}
