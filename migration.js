const pool = require("./config");

const qCreateTableCategories = `CREATE TABLE IF NOT EXISTS "Categories" (
   "id" SERIAL PRIMARY KEY,
   "name" varchar NOT null
);`;
const qCreateTableMenus = `CREATE TABLE IF NOT EXISTS "Menus"(
	"id" serial PRIMARY KEY,
	"name" varchar NOT NULL,
	"categoryId" integer NOT NULL REFERENCES "Categories"("id"),
	"stock" integer NOT NULL,
	"price" integer NOT NULL,
	"createdAt" date NOT NULL	
)`;

const qDropTables = `DROP TABLE IF EXISTS "Menus","Categories" `;

const migration = async () => {
    try {
        const dropTable = await pool.query(qDropTables);
        if (dropTable) console.log(`All table dropped`);

        const categoriesTable = await pool.query(qCreateTableCategories);
        if (categoriesTable) console.log(`Categories table created`);

        const menusTable = await pool.query(qCreateTableMenus);
        if (menusTable) console.log(`Menus table created`);
    } catch (error) {
        console.log(error);
    }
};

migration();
