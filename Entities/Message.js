import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  message;

  @Column()
  postedAt;
//   WIP - users & authentication
//   @Column()
//   author;
}

module.exports = Message;