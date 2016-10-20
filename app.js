'use strict';
const CHECK_INTERVAL = 1000 * 60 * 60;
const DEBUG_CHECK_INTERVAL = 1000 * 60;
const API_KEY = '286110592:AAFs94gdes9bE3BsNfJmJYEhnWvxKhW2jDI';
const chat_with_me = 219916695;
const logos_chat =-30241325;
const request = require('request');
/*
const spawn = require('child_process').spawn;
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', (data) => {
    console.log(data.toString('latin1'));
});

bat.stderr.on('data', (data) => {
    console.log(data);
});

bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
});

// OR...
const exec = require('child_process').exec;
exec('my.bat', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});
*/
const logosInstances = [
    'http://dev.log-os.ru/',
    'http://voskhod.log-os.ru/',
    'http://ats.log-os.ru/',
    'https://logos.canavara-group.ru/',
    'http://stocktrading.log-os.ru/',
    'http://pantos.log-os.ru/',
    'http://excont.log-os.ru/',
    'http://big.log-os.ru/',
    'http://bt-logistics.log-os.ru/',
    'http://ess.log-os.ru/',
    'http://mcs.log-os.ru/',
    'http://report.log-os.ru'
];



function logosIsOK(res) {
    return res.statusCode === 200 || res.statusCode === 302;
}

function CheckAvailability() {

    logosInstances.forEach(function (instance) {
        request(instance, function (err, res) {
            if (!logosIsOK(res)){
                var errorLogosText = 'Проблемы с доступом на ' + this.href + '\n' +
                    'Статус ' + res.statusCode + ' ' + res.statusMessage;

                request.post("https://api.telegram.org/bot" + API_KEY + "/sendMessage", {
                    form:{
                        chat_id: logos_chat,
                        text: errorLogosText
                    }
                });
            }
        });
    });
}
CheckAvailability();
setInterval(CheckAvailability, CHECK_INTERVAL);