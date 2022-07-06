export type AlunoDTO = {
    matricula: string;
    nome: string;
    nascimento: string;
    cursoId: string;
}

export type ProfessorDTO = {
    id: string;
    nome: string;
}

export type DisciplinaDTO = {
    id: string;
    nome: string;
}

export type CursoDTO = {
    id: string;
    nome: string;
}

export type NotaDTO = {
    id?: string;
    nota: number;
    descricao: string;
    aluno: string;
    disciplina: string;
}

