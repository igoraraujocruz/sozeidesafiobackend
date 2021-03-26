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

    @Column()
    tags: string;
}

export default Tools;
