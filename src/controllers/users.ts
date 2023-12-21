import express from 'express'

import { deleteUserById, getUserById, getUsers } from '../db/users'

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(400)
    }
}

export const deleteUser = async(req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deletedUser = await deleteUserById(id)

        return res.json(deletedUser);
    } catch (error) {
        console.log(error);
        res.sendStatus(400)
    }
}

export const updateUser = async(req: express.Request, res: express.Response) => {
    try {
        const { username } = req.body;
        const { id } = req.params;

        if (!username) {
            res.sendStatus(400)
        }
        
        const user = await getUserById(id)

        user.username = username;
        await user.save();
        res.sendStatus(400).json(user).end;
    } catch (error) {
        console.log(error);
        res.sendStatus(400)
    }
}