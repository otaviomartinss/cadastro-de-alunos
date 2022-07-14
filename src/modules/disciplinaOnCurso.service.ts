import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { DisciplinaOnCursoDTO } from "./universidade.dto"

@Injectable()
export class DisciplinaOnCursoService {
    constructor(private prisma: PrismaService){}

    async create(data: DisciplinaOnCursoDTO){
        const disciplinaOnCurso = await this.prisma.disciplinasOnCursos.create({
            data
        })
        return disciplinaOnCurso
    }

    async findAll() {
        return this.prisma.disciplina.findMany();
    }
    
    async findMany(cursoId: string) {
        return this.prisma.disciplinasOnCursos.findMany({
            where: {
                cursoId
            }
        })
    }

    // async update(id: string, data: DisciplinaDTO){
    //     const disciplinaExists = await this.prisma.disciplina.findUnique({
    //         where: {
    //             id,
    //         }
    //     });

    //     if (!disciplinaExists){
    //         throw new Error("A disciplina não existe")
    //     }

    //     return await this.prisma.disciplina.update({
    //         data,
    //         where: {
    //             id,
    //         } 
    //     })
    // }

    // async delete(id: string){
    //     const disciplinaExists = await this.prisma.disciplina.findUnique({
    //         where: {
    //             id,
    //         }
    //     });

    //     if (!disciplinaExists){
    //         throw new Error("A disciplina não existe")
    //     }

    //     return await this.prisma.disciplina.delete({
    //         where: {
    //             id,
    //         } 
    //     })
    // }
}
