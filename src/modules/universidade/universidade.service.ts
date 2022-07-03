import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AlunoDTO, ProfessorDTO, DisciplinaDTO, CursoDTO, NotaDTO } from "./universidade.dto"

@Injectable()
export class UniversidadeService {
    constructor(private prisma: PrismaService){}

    async create(data: AlunoDTO){
        const alunoExists = await this.prisma.aluno.findFirst({
            where: {
                matricula: data.matricula,
            },
        });

        if(alunoExists){
            throw new Error("O aluno já existe")
        }
        const aluno = await this.prisma.aluno.create({
            data,
        })
        return aluno
    }



    async findAll() {
        return this.prisma.aluno.findMany();
    }

    async update(matricula: string, data: AlunoDTO){
        const alunoExists = await this.prisma.aluno.findUnique({
            where: {
                matricula,
            }
        });

        if (!alunoExists){
            throw new Error("Aluno não existe")
        }

        return await this.prisma.aluno.update({
            data,
            where: {
                matricula,
            } 
        })
    }

    // async delete(id: string){
    //     const bookExists = await this.prisma.book.findUnique({
    //         where: {
    //             id,
    //         }
    //     });

    //     if (!bookExists){
    //         throw new Error("Book does not exists")
    //     }

    //     return await this.prisma.book.delete({
    //         where: {
    //             id,
    //         } 
    //     })
    // }



}
