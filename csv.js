/**
 * @class CSV this generates a csv file both on the client side and server side.
 * @author Olawoore Emmanuel Collins
 */

class CSV {
    /**
     * 
     * @param {String} name name of csv file to be generated.
     * @param {String} csv names of columns for the csv file.
     */
    constructor(name, csv) {
        this.name = name;
        this.csv = csv;
        this.data = [];
    }

    /**
     * Adds data to the csv file to be generated.
     * @param {Object} content data content (arrays only) for the generated csv file.
     */
    addData(content) {
        this.data.push(content);
    }

    getFile() {
        var csv = this.csv;
        this.data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
        });
        return new Blob([csv], { type: "text/csv" })
    }

    /**
     * Generates the csv file.
     */
    generateFile() {
        var csv = this.csv;
        this.data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
        });

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = this.name;
        hiddenElement.click();
    }
}
export default CSV;