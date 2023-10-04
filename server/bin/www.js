"ues strict";

const app = require("../server");
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`서버 가동중.. ${PORT}`);
});