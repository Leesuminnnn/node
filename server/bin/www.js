"ues strict";

const app = require("../server");
const logger = require("../src/config/logger")
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});