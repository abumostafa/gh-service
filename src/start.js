const config = require("./config/app");
const app = require("./server");

app.listen(config.server.port, () => console.log(`Server started on port ${config.server.port}`));
