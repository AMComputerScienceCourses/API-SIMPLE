import userService from '../services/user.service';
import { StatusCodes } from 'http-status-codes';

const STATUS = {
    success: 'OK',
    failure: 'NO',
}

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();

    if (users.length){
        return res.status(StatusCodes.OK).send(users);
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `Users are not found`,
    });
}

const getUser = (req, res) => {
    //the id should be casting to the URL parameter in decimal
    const id = parseInt(req.params.id, 10); // 10 is a radix
    const user = userService.getUser(id);

    if (user){
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user,
    });
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${id} is not found`,
    });
}

const addUser =     async (req, res)=>{
    const { body: user } = req;

    const addedUser = await userService.addUser(user);

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser,
    });
    
}

const updateUser = (req, res)=>{
    const { body: user } = req;

    // the id should be casting to the URL parameter in decimal
    const id = parseInt(req.params.id, 10);

    const updatedUser = userService.updateUser(id, user);

    if (updatedUser){
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: updatedUser,
        });
    }
    else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} is not found`,
        });
    }
    
}

const removeUser = (req, res)=> {
    const  { params } = req;
    const id = parseInt(params.id, 10);
    const user = userService.getUser(id);
    
    if (user) {
        userService.removeUser(id);

        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User ${id} has been deleted`
        });
    }else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} has not found`
        });
    }

    return res.status(StatusCodes.OK).send(response);
}

export default {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    removeUser
}