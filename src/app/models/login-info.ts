import { UserType } from './user-type.enum';

export class LoginInfo {
    constructor(public email: string, public password: string, public type: UserType) {

    }
}
