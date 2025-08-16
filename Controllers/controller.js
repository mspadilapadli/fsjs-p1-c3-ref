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
}

module.exports = Controller;
