import { FormModel } from '../utils/formmodel.utils';

export interface RegisterModel {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type RegisterModelControls = FormModel<RegisterModel>;
