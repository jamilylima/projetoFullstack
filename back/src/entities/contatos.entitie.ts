import {
    Column, Entity, ManyToOne,
    PrimaryGeneratedColumn, CreateDateColumn
} from "typeorm";
import { Cliente } from "./cliente.entitie";


@Entity("contatos")
class Contato {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    telefone: string

    @CreateDateColumn()
    created: Date

    @ManyToOne(() => Cliente)
    cliente: Cliente
}


export {Contato}