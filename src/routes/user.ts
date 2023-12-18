import { Router } from 'express';
import { userController } from '../controllers';
import { userValidations } from '../middleware/validations';
import validateInputs from '../middleware/validations/validationMiddleware';
import { UserRole } from '../models/User';
import auth from '../middleware/auth';
const router: Router = Router();

router.post('/signup', validateInputs(userValidations.signup), userController.signup);
router.post('/login', validateInputs(userValidations.login), userController.login);
router.get('/users', auth([UserRole.ADMIN]), userController.getAllUsers);

export default router;
