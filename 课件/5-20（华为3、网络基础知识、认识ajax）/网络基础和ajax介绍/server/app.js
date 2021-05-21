let express = require("express");
let app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = require("./router");
app.use(router);

app.listen(8080, function () {
  console.log("服务启动成功");
});
