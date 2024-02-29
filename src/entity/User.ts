import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Message } from "./Message"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: String

    @Column()
    password: String

    @Column()
    createdAt: Date

    @OneToMany(() => Message, (message) => message.author)
    messages: Message[]
}