export type AlunoDTO = {
    matricula: string;
    nome: string;
    nascimento: string;
    cursoId: string;
}

export type ProfessorDTO = {
    id: string;
    nome: string;
    disciplina: string;
}

export type DisciplinaDTO = {
    id: string;
    nome: string;
    curso: string;
}

export type CursoDTO = {
    id: string;
    nome: string;
}

export type NotaDTO = {
    id?: string;
    nota: Float32Array;
    descricao: string;
    disciplina: string;
}

