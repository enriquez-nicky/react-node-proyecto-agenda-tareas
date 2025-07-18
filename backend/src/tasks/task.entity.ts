import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'date' })
  fecha: string;
}
