import { FormModel } from '../utils/formmodel.utils';

export interface LoginModel {
  email: string;
  password: string;
}

export type LoginModelControls = FormModel<LoginModel>;
