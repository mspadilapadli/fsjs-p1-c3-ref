const pool = require("./connection");

let categories = require("./data/categories.json")
    .map((category) => {
        return `('${category.name}')`;
    })
    .join(",\n");

let menus = require("./data/menus.json")
    .map((menu) => {
        let { name, category, stock, price, createdAt } = menu;
        return `('${name}',${category}, ${stock}, ${price},'${createdAt}' )`;
    })
    .join(`,\n`);

let queryAddCategories = `INSERT INTO "Categories"("name") 
VALUES ${categories}`;
let queryAddMenus = `INSERT INTO "Menus" ("name","categoryId","stock","price","createdAt")
VALUES ${menus}`;
console.log(queryAddMenus);

async function seeding() {
    try {
        let seedingCatergories = await pool.query(queryAddCategories);
        if (seedingCatergories) console.log("add data category success");

        let seedingMenus = await pool.query(queryAddMenus);
        if (seedingMenus) console.log(`add data menus success`);
    } catch (error) {
        console.log(error);
    }
}

seeding();
