import { Router } from 'express'
import { UsuarioController } from '../controlador/usuarioController.js';

export const usuarioRouter = Router();

usuarioRouter.get('/',UsuarioController.getAll)


