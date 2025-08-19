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
            // console.log(getInstace);

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
}

module.exports = Model;
