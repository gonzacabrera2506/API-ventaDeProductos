const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API-venta de productos',
        description: 'Este proyecto sirve de base para las operaciones diarias en un negocio pequeño',
        version: '1.0.0',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: process.env.SWAGGER_SECURITY_TYPE,
                scheme: process.env.SECURITY_SCHEMA,
                bearerFormat: process.env.BEARER_FORMAT,
            },
        },
    },
    servers: [
        {
            url: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`,
            description: 'API server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./server/src/routes/*.js'],
};

const swaggerSpect = swaggerJsdoc(options);
module.exports = swaggerSpect;
