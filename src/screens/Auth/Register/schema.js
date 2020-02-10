import * as Yup from 'yup';

import { schemas } from '@constants';

const registerSchema = Yup.object().shape({
    username: schemas.USERNAME,
    email: schemas.EMAIL,
    password: schemas.PASSWORD
});

export default registerSchema;
