"ues strict";

const app = require("../server");
const port = 3002;

app.listen(port, () => {
    console.log(`서버 가동중.. ${port}`);
});