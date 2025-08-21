const Factory = require("./class");
const pool = require("../config");
class Model {
    static async Q1() {
        try {
            let query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" FROM "Menus" m INNER JOIN "Categories" c ON m."categoryId" = c.id
WHERE c."name" = 'Coffee'
AND date_part('month',m."createdAt") >=5 AND date_part('month',m."createdAt") <= 6`;

            let data = await pool.query(query);
            let getData = data.rows;
            let getInstace = Factory.showMenus(getData);

            return getInstace;
        } catch (error) {
            throw error;
        }
    }
    static async Q2() {
        try {
            let query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" FROM "Menus" m INNER JOIN "Categories" c ON m."categoryId" = c.id
WHERE  m."stock" = (
		SELECT max(m."stock") FROM "Menus" m 
		INNER JOIN "Categories" c ON m."categoryId" = c."id"
)`;
            let data = await pool.query(query);
            let getData = data.rows;
            let getInstace = Factory.showMenus(getData);
            return getInstace;
        } catch (error) {
            throw error;
        }
    }

    static async Q3() {
        try {
            let query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" FROM "Menus" m INNER JOIN "Categories" c ON m."categoryId" = c.id
WHERE m."name" ILIKE  '%tea%'`;
            let data = await pool.query(query);
            let getData = data.rows;
            let getInstace = Factory.showMenus(getData);
            return getInstace;
        } catch (error) {
            throw error;
        }
    }

    static async Q4() {
        try {
            let query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" FROM "Menus" m INNER JOIN "Categories" c ON m."categoryId" = c.id
WHERE m."createdAt" BETWEEN '2021-06-02' AND '2021-07-09'
AND m."stock" = (
		SELECT max(m."stock") FROM "Menus" m 
		INNER JOIN "Categories" c ON m."categoryId" = c."id"
		WHERE  m."createdAt" BETWEEN '2021-06-02' AND '2021-07-09'
)`;
            let data = await pool.query(query);
            let getData = data.rows;
            let getInstace = Factory.showMenus(getData);
            return getInstace;
        } catch (error) {
            throw error;
        }
    }
    static async Q5() {
        try {
            let query = `SELECT c."name" AS "category", 
		sum(m."stock") AS "totalStock",
		sum(m."stock" * m."price") AS "totalSales"
FROM "Menus" m 
INNER JOIN "Categories" c ON m."categoryId" = c."id"
GROUP BY c."name"
HAVING  sum(m."stock" * m."price") > 3000000
ORDER BY "totalSales" DESC;
`;
            let data = await pool.query(query);
            let getData = data.rows;
            let getInstace = Factory.showCategory(getData);
            return getInstace;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
