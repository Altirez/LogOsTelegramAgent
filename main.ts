/// <reference path="node_modules/@types/node/index.d.ts" />
const ENV_HOST: string = process.env.HOST || "dev.log-os.ru";

import filesystem = require('fs');

function mySuperPuperFuunc(fileName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        filesystem.readFile(fileName, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res.toString());
            }
        });
    })
}

async function Lolka() {
    let a: string = await mySuperPuperFuunc("settings/serversSettings.json");
    let a2 = 1;
}

async function Main() {

}

class ConfigurationManager {
    public LoadConfiguration(): void {
    };

    public ReloadConfiguration(): void {
    };
}

class Server {
    MakeNewInstance(instance:AppInstance):void{
    }
}

class TomcatInstance implements WebApp {
    Restart(): void {
    };

    Repair(): void {
    };

    Check(): void {
    };

    CheckWithoutProxy(): void {
    };
    Create(): void{};

}

class LogosInstance implements WebApp {
    Restart(): void {
    };

    Repair(): void {
    };

    Check(): void {
    };

    CheckWithoutProxy(): void {
    };

    Create(): void{};

}

interface AppInstance {
    Restart(): void;
    Repair(): void;
    Check(): void;
    Create(): void;
}

interface WebApp extends AppInstance {
    CheckWithoutProxy(): void;
}

interface RepairStrategy {
    TryRepair(): void;
}

enum InstanceStatus{
    OK = -1, MAINTENANCE = 0, PROXY_ERROR = 1, DOWN = 2, FALL = 3,
}

class Status {
    public Uptime?: number;
    public Status: InstanceStatus;
    public LastCheck?: number;
}
