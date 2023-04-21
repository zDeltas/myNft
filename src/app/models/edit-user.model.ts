import { FormModel } from '../utils/formmodel.utils';

export interface EditUserModel {
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export type EditUserModelControls = FormModel<EditUserModel>;
