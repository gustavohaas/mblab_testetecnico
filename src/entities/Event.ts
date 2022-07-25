import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn, OneToOne, } from "typeorm";

@Entity('event')
export class Event {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({ unique: true })
    name: string;

    @Column()
    location_name: string;

    @Column()
    date: Date;

    @Column({nullable: true})
    description: string;

    @Column()
    time: string;

    @Column()
    organization: string;

    @Column()
    tickets: number;
}