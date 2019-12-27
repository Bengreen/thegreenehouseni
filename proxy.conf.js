apiUrl = process.env.FLASK_URL || "http://localhost:5000"

const PROXY_CONFIG = [
  {
    context: [
      "/hello",
    ],
    "target": apiUrl,
      "secure": false,
      "logLevel": "debug",
      "changeOrigin": true,
      "pathRewrite": {
        "^/hello": "/hello"
      }
  },
]

module.exports = PROXY_CONFIG;
