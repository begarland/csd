var fs = require("fs");

function main(arguments) {
    const options = new Map;
    try {
        options.set("company_name", "Facebook");
        options.set("round", "a");
        console.log(FundingRaised.where(options).length)
    } catch(e){
        console.error(e.message);
        console.error("error")
    }
}

const company_name = "company_name"
const city = "city"
const state = "state"
const round = "round"
const permalink = "permalink"
const number_employees = "number_employees"
const category = "category"
const funded_date = "funded_date"
const raised_amount = "raised_amount"
const raised_currency= "raised_currency"


class FundingRaised {
    constructor() {

    }


    where(options){
        let csvData = []
        let stream = fs.createReadStream("./startup_funding.csv");

        stream.on("data", function(data) {
            csvData.push(data);

            // pushes each row of csv onto array;

        })

        csvData.shift();

        getKeyData(options, company_name, 1, csvData)
        getKeyData(options, city, 4, csvData)
        getKeyData(options, state, 5, csvData)
        getKeyData(options, round, 9, csvData)


        const output = [];

        for (let i = 0; i < csvData.length; i++) {
            
            output.push(getMappedValues(csvData))
        }

        return output;
    }

    findBy(options){
        const csvData = [];
        let stream = fs.createReadStream("./startup_funding.csv");

        stream.on("data", function(data) {
            csvData.push(data);

            // pushes each row of csv onto array;

        })



        for (let i = 0; i < csvData.length; i++) {

        }
        
        

        
    }
}

function getKeyData (options, key, index, csvData) {
    if (Object.keys(options).includes(key)) {
        let results = [];

        for (let i = 0; i < csvData.length; i++) {
            if (csvData[i][index] == options[key]) {
                results.push(csvData)
            }
        }
    }

    csvData = results;

}

function getMappedValues (csvData) {
    const mapped = new Map;

    mapped.set(permalink, csvData[i][0])
    mapped.set(company_name, csvData[i][1])
    mapped.set(number_employees, csvData[i][2])
    mapped.set(category, csvData[i][3])
    mapped.set(city, csvData[i][4])
    mapped.set(state, csvData[i][5])
    mapped.set(funded_date, csvData[i][6])
    mapped.set(raised_amount, csvData[i][7])
    mapped.set(raised_currency, csvData[i][8])
    mapped.set(round, csvData[i][9])

    return mapped
}