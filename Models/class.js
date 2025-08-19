class Menu {
    constructor(id, name, category, stock, price, createdAt) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.stock = stock;
        this.price = price;
        this.createdAt = createdAt;
    }
}
class Category {
    constructor(category, totalStock, totalSales) {
        this.category = category;
        this.totalStock = totalStock;
        this.totalSales = totalSales;
    }
}
class Factory {}

module.exports = Factory;
