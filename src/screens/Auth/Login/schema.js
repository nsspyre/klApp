import * as Yup from 'yup';

import { schemas } from '@constants';

const loginSchema = Yup.object().shape({
    email: schemas.USERNAME,
    password: schemas.PASSWORD
});

export default loginSchema;
