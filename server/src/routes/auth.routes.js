const router = require('express-promise-router')();

const userValidation = require('../validations/user.validations');

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
 *             "type": "String",
 *             "description": "Username of a user",
 *              "Min": "7",
 *              "Max": "25"
 * 
 *           },
 *           "password": {
 *             "type": "String",
 *             "description": "Password of a user",
 *              "Min": "6",
 *              "Max": "25"
 *           },
 *           "email": {
 *             "type": "String",
 *             "description": "Email of a user"
 *           }
 *         },
 *        "required": [ "username", "password", "email" ],
 *         "example": {
 *           "username": "Gonzalo",
 *           "password": "123456",
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
router.post('/', userValidation.userSignInIsValid, newUser);

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
 *        "401": { "description": "Unauthorized" },
 *        "422": { "description": "Unprocessable Entity" }
 *      }
 *    }
 *  }
 *}
 */
router.post('/login', userValidation.userLoginIsValid, login);


module.exports = router;