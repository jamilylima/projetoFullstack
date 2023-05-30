import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Cliente } from "./cliente.entitie";

@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @OneToMany(() => Cliente, cliente => cliente.user)
    cliente: Cliente[]

}

export {User}