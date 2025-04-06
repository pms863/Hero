import express from "express";
import cors from "cors";
import heroRoutes from "./routes/hero.routes";
import { AppDataSource } from "./data-source";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/heroes", heroRoutes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
