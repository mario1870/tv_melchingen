// helmetMiddleware
import helmet from "helmet";

const helmetXSSMiddleware = helmet.xssFilter();

export default helmetXSSMiddleware;
