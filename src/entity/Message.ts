import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    message: string

    @Column()
    postedAt: Date

    @ManyToOne(() => User, (user) => user.messages)
    author: User
}