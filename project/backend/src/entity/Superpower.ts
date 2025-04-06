import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Hero } from "./Hero";

@Entity()
export class Superpower {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Hero, hero => hero.superpowers)
  hero!: Hero;
}
