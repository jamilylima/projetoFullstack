import { Column, Entity, OneToMany,ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Contato } from "./contatos.entitie";
import { User } from "./user.entities";



@Entity("clientes")
class Cliente {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created: Date

    @Column()
    telefone: string
    
    @OneToMany(() => Contato, contato => contato.cliente)
    contato: Contato[]

    @ManyToOne(() => User)
    user: User
}

export {Cliente}