import { FormModel } from '../utils/formmodel.utils';

export interface EditNftModel {
  name: string;
  value: string;
  imgUrl: string;
  rarity: string;
}

export type EditNftModelControls = FormModel<EditNftModel>;
