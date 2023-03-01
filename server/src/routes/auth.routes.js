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
 *           "username": "Isaias",
 *           "password": "1234",
 *           "email": "username@email.com",
 *       
 *         }
 *      }
 *    }
 *  }
 *}
 */

/**
 * @swagger
 *{
 *  "/users": {
 *    "post": {
 *      "summary": "Create a User",
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/models/User"
 *                }
 *            }
 *         }
 *      },
 *      "tags": [ "User" ],
 *      "security":[bearerAuth: []],
 *      "responses": {
 *        "201": { "description": "Created" },
 *        "500": { "description": "Internal server error" }
 *      }
 *    }
 *  }
 *}
 */
router.post('/', newUser);

//login
router.post('/login', login);


module.exports = router;