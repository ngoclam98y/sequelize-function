import Express from "express";
import db from "./models/index";
import messageRouter from "./src/messages/message.router";
import orderRouter from "./src/order/order.router";
import productRouter from "./src/products/product.router";
// import * as routes from "./src/router/index";
import userRouter from "./src/users/user.router";

const app = Express();
// { force: true }
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use("/api", userRouter);
app.use("/api", productRouter);

app.use("/api", orderRouter);

app.use("/api", messageRouter);

app.listen(1234, () => {
  console.log("what");
});
