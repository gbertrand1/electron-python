function start_ping() {

    var { PythonShell } = require('electron').remote.require('python-shell');
    let pyshell = new PythonShell("./engine/ping.py")

    pyshell.on('message', function (message) {
        console.log(message);
    });

    pyshell.end(function (err) {
        if (err) {
            throw err;
        };

        console.log('finished');
    });
};