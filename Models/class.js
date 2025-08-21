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
    static showMenus(arr) {
        let instance = arr.map(
            ({ id, name, category, stock, price, createdAt }) =>
                new Menu(id, name, category, stock, price, createdAt)
        );
        return instance;
    }

    static showCategory(arr) {
        let instance = arr.map((perMenu) => {
            let { category, totalStock, totalSales } = perMenu;
            return new Category(category, totalStock, totalSales);
        });
        return instance;
    }
}

module.exports = Factory;
