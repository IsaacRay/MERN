"use strict";

import { Router } from "express";
import User from "../controllers/user-controller"

const router = Router();

router.get('/user/', User.create);

export default router;