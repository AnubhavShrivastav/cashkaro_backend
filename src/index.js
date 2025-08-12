import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./DB/index.js";
import banner from "./routes/BannerRoutes.js";
import category from "./routes/categoryRoutes.js";
import FlashDeal from "./routes/flashDealRoutes.js";

const app = express();
app.use(express.json());

dotenv.config({
  path: "./.env",
});

app.use("/api", banner);
app.use("/api", category);
app.use("/api", FlashDeal);

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `server is running on the port http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection Error", err);
  });
