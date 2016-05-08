var fs = require('fs');
function copy(src, target) {
    fs.readFile(src, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        fs.writeFile(target, data, function (err) {
            console.log("copy success!", err);
        });
    });
}

function move(src, target) {
    fs.readFile(src, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        fs.writeFile(target, data, function (err) {
            fs.unlink(src, function () {
                console.log("move success!", err);
            });
        });
    });
}

copy('webpack.jpg','webpack2.jpg');