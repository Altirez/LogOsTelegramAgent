"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
/// <reference path="node_modules/@types/node/index.d.ts" />
const ENV_HOST = process.env.HOST || "dev.log-os.ru";
const filesystem = require('fs');
function mySuperPuperFuunc(fileName) {
    return new Promise((resolve, reject) => {
        filesystem.readFile(fileName, function (err, res) {
            if (err) {
                reject(err);
            }
            else {
                resolve(res.toString());
            }
        });
    });
}
function Lolka() {
    return __awaiter(this, void 0, void 0, function* () {
        let a = yield mySuperPuperFuunc("settings/serversSettings.json");
        let a2 = 1;
    });
}
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
class ConfigurationManager {
    LoadConfiguration() {
    }
    ;
    ReloadConfiguration() {
    }
    ;
}
class Server {
    MakeNewInstance(instance) {
    }
}
class TomcatInstance {
    Restart() {
    }
    ;
    Repair() {
    }
    ;
    Check() {
    }
    ;
    CheckWithoutProxy() {
    }
    ;
    Create() { }
    ;
}
class LogosInstance {
    Restart() {
    }
    ;
    Repair() {
    }
    ;
    Check() {
    }
    ;
    CheckWithoutProxy() {
    }
    ;
    Create() { }
    ;
}
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus[InstanceStatus["OK"] = -1] = "OK";
    InstanceStatus[InstanceStatus["MAINTENANCE"] = 0] = "MAINTENANCE";
    InstanceStatus[InstanceStatus["PROXY_ERROR"] = 1] = "PROXY_ERROR";
    InstanceStatus[InstanceStatus["DOWN"] = 2] = "DOWN";
    InstanceStatus[InstanceStatus["FALL"] = 3] = "FALL";
})(InstanceStatus || (InstanceStatus = {}));
class Status {
}
//# sourceMappingURL=main.js.map