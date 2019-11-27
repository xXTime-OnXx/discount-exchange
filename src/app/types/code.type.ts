import {User} from './user.type';
import {Company} from './company.type';
import {Category} from './category.enum';

export interface Code {
    uid: string;
    code: string;
    createdAt: Date;
    company: Company;
    user: User;
    category: Category;
}
