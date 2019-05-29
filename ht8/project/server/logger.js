const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
    fs.readFile('server/db/stats.json', 'utf8', (err, data) => {
        if(err) {
            console.log('Cant read this file');
        } else {
            const stat = JSON.parse(data);
            stat.push ({
                time: moment().format('DD MM YYYY, h:mm:ss a'),
                prod_name: name,
                action: action,
            });
            fs.writeFile('server/db/stats.json', JSON.stringify(stat, null, 4), (err)=> {
                if(err) {
                    console.log('Cant write file');
                }
            })
        }
    })
};
module.exports = logger;