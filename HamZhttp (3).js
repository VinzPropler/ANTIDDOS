
var readline = require('readline'); 
const fs = require('fs');
var http = require("http");
var https = require('https');
var server = https.createServer({ key, cert }, app);
const port = 443;
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
var rl = readline.createInterface({ 
input: process.stdin, 
output: process.stdout 
});

console.log ("")
console.log ("                  <<<<< Coded By VinzGanssaja >>>>>")
console.log("┌─────────────────────────────────────────────┐")
console.log("│              Protect By VinzGans:)          │")
console.log("├─────────────────────────────────────────────┤")
console.log("│                 Added New Feature:          │")
console.log("│          [+] Custom Http :)                 │")
console.log("│          [+] Anti Reader :)                 │")
console.log("│          [+] Limiter & Rate Limiter :)      │")
console.log("├─────────────────────────────────────────────┤")
console.log("│              Credit : VinzGanssaja              │")
console.log("└─────────────────────────────────────────────┘") 
console.log ("")

rl.question("Password : ", function(password) {
   if (password == "@vinzgans123") 
    {
        console.clear()
var prompt = require('prompt-sync')();
const ipvps = prompt("VPS IP : ");
const udpport = prompt("UDP Port (Default 17091) : ");
let data = `server|${ipvps}\nport|${udpport}\ntype|1\n#maint|Server is under maintenance. We will be back online shortly. Thank you for your patience!\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001\n`;

const pack = `
server|${ipvps}
port|${udpport}
type|1
#maint|Server is under maintenance. We will be back online shortly. Thank you for your patience!
beta_server|127.0.0.1
beta_port|17091

beta_type|1
meta|defined
RTENDMARKERBS1001|unknown
`;

  server.listen(443, () => {
  });

        const client = http.createServer(function (req, res) {
            let ipAddress = req.connection.remoteAddress;
            ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
            if (req.url == "/growtopia/server_data.php") {
                if (req.url = "TRACE") {
                    res.write(`server|` + ip + `\nport|17091\ntype|1\n#maint|PROTECTED BY VinzGans\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                    res.end();
                    console.log(`[!] Access Ip: ${ipAddress}\n[!] Req Method: ${req.method}\n[!] Access Logs: ${req.url}\n==========================`);
                }
            }

            else {
                res.writeHead(httpcode, "VinzGans Http Protected");
                res.write(`<script>alert('VinzGans Http Protected');</script><pre>Protect By VinzGans HTTP Your IP ${ipAddress}`);
                res.end();
                res.destroy();
            }
        })
        client.listen(443)
        console.log("                    << <<<VinzGans HTTP>>>>>")
        console.log("                          New Anti DDos") 
        console.log("                        Credit By : VinzGans")
        console.log("                     Anti DDoS Lead BY VinzGans")
        console.log('                       \u001B[36mIP Addres: ' + ip)
        console.log('                       \u001B[35mHTTP Code: ' + httpcode)
    }
        else
    {
        console.log("Wrong password")
        process.exit(0); //kode exit
    }
    rl.close();
});