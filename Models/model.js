const Factory = require("./class");
const pool = require("../config");
class Model {
    static async Q1() {
        try {
            const query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" 
FROM "Menus" m 
INNER JOIN "Categories" c ON m."categoryId" = c.id
WHERE c."name" = 'Coffee'
  AND m."createdAt" >= '2021-05-01'
  AND m."createdAt" < '2021-07-01'
ORDER BY m."createdAt" ASC `;

            const { rows } = await pool.query(query);
            const getInstanceData = Factory.createMenus(rows);
            return getInstanceData;
        } catch (error) {
            throw error;
        }
    }

    static async Q2() {
        try {
            const query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" 
FROM "Menus" m INNER JOIN "Categories" c ON m."categoryId" = c.id
WHERE  m."stock" = (
		SELECT max(m."stock") FROM "Menus" m 
)`;

            const { rows } = await pool.query(query);
            const getInstanceData = Factory.createMenus(rows);

            return getInstanceData;
        } catch (error) {
            throw error;
        }
    }

    static async Q3() {
        try {
            const query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" 
            FROM "Menus" m 
            INNER JOIN "Categories" c ON m."categoryId" = c.id
            WHERE m."name" ILIKE  '%tea%'`;

            const { rows } = await pool.query(query);
            const getInstanceData = Factory.createMenus(rows);

            return getInstanceData;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
