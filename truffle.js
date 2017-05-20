var DefaultBuilder = require("truffle-default-builder");
module.exports = {
	build: new DefaultBuilder({
    "index.html": "index.html",
    "node/server.js": [
      "node/prepare.js",
      "node/server.js"
    ],
    "node/listen.js": [
      "node/prepare.js",
      "node/listen.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ]
  }),
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
