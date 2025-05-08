const fs = require("fs");
const os = require("os");

const eventEmitter = require("events")

class Logger extends eventEmitter{
    log(message){
        this.emit("message", {message})
    }
}

const logger = new Logger();
const logfile = "./event logger/eventlog.txt";

const logToFile = (event) => {
    const logMessage = `${Date().toString()} - ${event.message} \n`;
    fs.appendFileSync(logfile, logMessage);
}

logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`);
}, 3000);

logger.log("Application started")
logger.log("Application event occuured")