import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';
import { userSchema, getUser, updateSchema, removeUser } from './user.schemas';

import userController from './controllers/user.controller';

const router = express.Router();

const STATUS = {
    success: 'OK',
    failure: 'NO',
}

router.use(express.json());

router.get('/all', userController.getAllUsers);

router.get(
    '/:id',     
    expressYupMiddleware({
        schemaValidator: getUser, 
        expectedStatusCode: StatusCodes.NOT_FOUND
    }),
    userController.getUser);

router.post(
    '/', 
    expressYupMiddleware({
        schemaValidator: userSchema, 
        expectedStatusCode: StatusCodes.NOT_FOUND
    }), 
    userController.addUser
);

router.put(
    '/:id', 
    expressYupMiddleware({
        schemaValidator: updateSchema, 
        expectedStatusCode: StatusCodes.NOT_FOUND
    }), 
    userController.updateUser
    )

router.delete(
    '/:id', 
    expressYupMiddleware({
        schemaValidator: removeUser, 
        expectedStatusCode: StatusCodes.NOT_FOUND
    }),
    userController.removeUser);

export default router;
