const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static async query1() {
        try {
            let data = await Model.Q1();
            View.showQuery(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async query2() {
        try {
            let data = await Model.Q2();
            View.showQuery(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async query3() {
        try {
            let data = await Model.Q3();
            View.showQuery(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async query4() {
        try {
            let data = await Model.Q4();
            View.showQuery(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async query5() {
        try {
            let data = await Model.Q5();
            View.showQuery(data);
        } catch (error) {
            View.showError(error);
        }
    }
}

module.exports = Controller;
