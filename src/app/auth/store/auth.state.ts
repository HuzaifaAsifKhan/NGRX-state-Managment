export class IUserState {
  user: IUser | null = null;
}

export interface IUser {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  kind?: string;
  displayName?: string;
}

export class IAuth {
  email: string = '';
  password: string = '';
}
