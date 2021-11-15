const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/product", ProductController.addNewProduct);
    app.get("/api/product", ProductController.getAllProducts);
    app.get("/api/product/:_id", ProductController.getOneProduct);
    app.put("/api/product/:_id", ProductController.updateProduct);
    app.delete("/api/product/:_id", ProductController.deleteProduct);
};