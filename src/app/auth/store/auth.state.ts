export class User {
    user: IUser | null = null;
}

export interface IUser {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered: boolean
    kind?: string
    displayName?: string
}


export class IAuthLogin {
    email: string = '';
    password: string = '';
}