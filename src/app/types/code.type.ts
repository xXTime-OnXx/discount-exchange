import {User} from './user.type';
import {Company} from './company.type';

export interface Code {
    uid: string;
    code: string;
    company: Company;
    user: User;
}
