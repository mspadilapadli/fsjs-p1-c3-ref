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
            FROM "Menus" m 
            INNER JOIN "Categories" c ON m."categoryId" = c.id
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

    static async Q4() {
        try {
            // const query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt"
            // FROM "Menus" m INNER JOIN "Categories" c ON m."categoryId" = c.id
            // WHERE m."createdAt" BETWEEN '2021-06-02' AND '2021-07-09'
            // AND m."stock" = (
            //     SELECT max(m."stock") FROM "Menus" m
            //     INNER JOIN "Categories" c ON m."categoryId" = c."id"
            //     WHERE  m."createdAt" BETWEEN '2021-06-02' AND '2021-07-09'
            //     )`;

            //with limit
            const query = `SELECT m."id", m."name", m."price", m."stock", c."name" AS "category", m."createdAt" 
            FROM "Menus" m INNER JOIN "Categories" c ON m."categoryId" = c.id
            WHERE m."createdAt" >= '2021-06-02'AND m."createdAt" < '2021-07-09'
            ORDER BY m."stock" DESC
            LIMIT 1;`;
            const { rows } = await pool.query(query);
            const getInstanceData = Factory.createMenus(rows);

            return getInstanceData;
        } catch (error) {
            throw error;
        }
    }
    static async Q5() {
        try {
            const query = `SELECT c."name" AS "category", sum(m."stock") AS "totalStock", sum(m."stock" * m."price") AS "totalSales"
            FROM "Menus" m 
            INNER JOIN "Categories" c ON m."categoryId" = c."id"
            GROUP BY c."name"
            HAVING sum(m."stock" * m."price") > 3000000
            ORDER BY "totalSales" DESC`;

            const { rows } = await pool.query(query);
            const getInstanceData = Factory.createCategories(rows);

            return getInstanceData;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
