# ws-serial
A small application that bridges websockets to the serial port.

## Setup

>The program was written for the serial port `/dev/COM1`. To change it, edit `client.js`.

Compile the serial-to-stdio interface: `cc main.c`

Run the websocket-to-stdio interface: `node client.js`

Serve files from the local folder: `python -m SimpleHTTPServer`

## Usage

Visit the local web server (eg. `http://192.168.5.100:8000`) and interact with the page.

## Explanation

`main.c` lets you read or write to the serial port using stdin and stdout.

`client.js` runs `main.c` and watches its output. It also exposes a websocket interface. Whenever it receives data from stdout, it will push it to the sockets; when it receives data from a socket, it will push it to stdin.
