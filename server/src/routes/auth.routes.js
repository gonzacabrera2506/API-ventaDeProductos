const router = require('express-promise-router')();

const {
    newUser,
    login

} = require('../controllers/auth.controller');

/**
 *@swagger
 *{
 *   "components": {
 *     "schemas": {
 *       "User": {
 *         "type": "object",
 *         "properties": {
 *           "username": {
 *             "type": "string",
 *             "description": "Username of a user"
 *           },
 *           "password": {
 *             "type": "string",
 *             "description": "password of a user"
 *           },
 *           "email": {
 *             "type": "string",
 *             "description": "Email of a user"
 *           }
 *         },
 *        "required": [ "username", "password", "email" ],
 *         "example": {
 *           "username": "Gonzalo",
 *           "password": "1234",
 *           "email": "username@email.com",       
 *         }
 *      }
 *    }
 *  }
 *}
 */

/**
 * @swagger
 *{
 *  "/users/": {
 *    "post": {
 *      "summary": "Create a User",
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/User"
 *                }
 *            }
 *         }
 *      },
 *      "tags": [ "User" ],
 *      "responses": {
 *        "201": { "description": "Created" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 *  }
 *}
 */
router.post('/', newUser);

/**
 * @swagger
 *{
 *  "/users/login": {
 *    "post": {
 *      "summary": "User Login",
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/User"
 *                }
 *            }
 *         }
 *      },
 *      "tags": [ "User" ],
 *      "security":[bearerAuth: []],
 *      "responses": {
 *        "200": { "description": "OK" },
 *        "400": { "description": "Not found" },
 *        "401": { "description": "Unauthorized" }
 *      }
 *    }
 *  }
 *}
 */
router.post('/login', login);


module.exports = router;