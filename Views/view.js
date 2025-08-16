class View {
    static showQuery(data) {
        console.table(data);
    }

    static showError(error) {
        console.log(error);
    }
}

module.exports = View;
