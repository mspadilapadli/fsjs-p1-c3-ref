const pool = require("./config");

const categories = require("./data/categories.json")
    .map(({ name }) => `('${name}')`)
    .join(`,\n`);

const menus = require("./data/menus.json")
    .map(
        ({ name, category, stock, price, createdAt }) =>
            `('${name}', '${category}', '${stock}', '${price}', '${createdAt}')`
    )
    .join(`,\n`);

const inputQCategory = `INSERT INTO "Categories"("name") 
VALUES ${categories}`;

const inputQMenus = `INSERT INTO "Menus" ("name","categoryId","stock","price","createdAt") VALUES ${menus} `;

const seeding = async () => {
    try {
        const seedCategories = await pool.query(inputQCategory);
        if (seedCategories) console.log("insert data category successfully");

        const seedMenus = await pool.query(inputQMenus);
        if (seedMenus) console.log("insert data menus successfully");
    } catch (error) {
        console.log(error);
    }
};

seeding();
