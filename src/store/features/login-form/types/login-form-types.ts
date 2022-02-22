export interface State {
  isAuth: boolean;
}

export interface ICredentials {
  email: string;
  password: string;
}

export type IGoogleToken = string | undefined;