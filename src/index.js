import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./DB/index.js";
import banner from "./routes/BannerRoutes.js";
import category from "./routes/categoryRoutes.js";
import FlashDeal from "./routes/flashDealRoutes.js";
import brand from "./routes/brandsRoutes.js";
import products from "./routes/productRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config({
  path: "./.env",
});

app.use("/api", banner);
app.use("/api", category);
app.use("/api", FlashDeal);
app.use("/api", brand);
app.use("/api", products);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


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
