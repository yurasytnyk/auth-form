import { RegistrationValues } from '../../../pages/registration-page/type/registration-page-types';

export interface Props {
  initialValues: RegistrationValues;
  data: IRegistrationData[];
  footerData: IRegistrationFormFooterData;
}

export interface IRegistrationData {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

export interface IRegistrationFormFooterData {
  text: string;
  linkText: string;
  url: string;
}
