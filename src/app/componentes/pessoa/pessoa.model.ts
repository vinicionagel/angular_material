import {EnderecoModel} from "../endereco/endereco/endereco.model";

export interface PessoaModel {

    id?: number;
    nome: string;
    email: string;
    sexo: string;
    dataNascimento: string;
    naturalidade: string;
    cpf: string;
    nacionalidade: string;
    endereco: EnderecoModel;
}
