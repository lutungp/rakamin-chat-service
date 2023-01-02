"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        password: process.env.DATABASE_PASSWORD,
        user: process.env.DATABASE_USER,
        name: process.env.DATABASE_NAME,
    },
});
//# sourceMappingURL=configuration.js.map