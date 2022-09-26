import { NextFunction, Request, Response, Router } from 'express';
import { celebrate } from 'celebrate';

import { authSchemas } from './AuthSchemas';
import { LoginRequest } from '../dto/request';
import { authService } from '../service';
import { LoginResponse } from '../dto/response';

const router = Router();

router.post(
  '/login',
  [celebrate(authSchemas.loginSchema)],
  (req: Request<{}, any, LoginRequest>, res: Response, next: NextFunction) => {
    const { body } = req;
    authService
      .login(body as LoginRequest)
      .then((loginResponse: LoginResponse) => res.send(loginResponse))
      .catch(next);
  },
);

export default router;
