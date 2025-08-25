// const data = require("../data/menus.json");
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

class Factory {
    static createMenus(arr) {
        return arr.map(
            ({ id, name, category, stock, price, createdAt }) =>
                new Menu(id, name, category, stock, price, createdAt)
        );
    }

    static createCategory(arr) {
        return arr.map(
            ({ category, totalStock, totalSales }) =>
                new Category(category, totalStock, totalSales)
        );
    }
}

module.exports = Factory;
