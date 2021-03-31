import { Entity,  Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tools')
class Tools {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column("simple-array", {array:true})
    tags: string[];
}

export default Tools;
