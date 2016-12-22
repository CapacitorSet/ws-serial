const cp = require('child_process'),
    child = cp.spawn('./a.out', ['/dev/COM1']);
const WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({port: 8080});

child.stdout.on("data", d => {
	const char = d.toString("utf8");
	sockets.forEach(socket => {
		try {
			socket.send(char);
		} catch (e) {

		}
	});
});

let sockets = [];

wss.on('connection', function connection(ws) {
	sockets.push(ws);
	ws.on('message', function incoming(message) {
		console.log('Input: %s', message);
		child.stdin.write(message);
	});
});