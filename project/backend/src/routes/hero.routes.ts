import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Hero } from "../entity/Hero";

const router = Router();
const heroRepo = AppDataSource.getRepository(Hero);

// Get all heroes
router.get("/", async (_req, res) => {
  const heroes = await heroRepo.find({ relations: ["superpowers"] });
  res.json(heroes);
});

// Create a new hero
router.post("/", async (req, res) => {
  const hero = heroRepo.create(req.body);
  const result = await heroRepo.save(hero);
  res.json(result);
});

// Get hero by ID
router.get("/:id", async (req, res) => {
  const hero = await heroRepo.findOne({
    where: { id: Number(req.params.id) },
    relations: ["superpowers"]
  });
  res.json(hero);
});

export default router;
