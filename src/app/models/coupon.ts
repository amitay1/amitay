import { CategoryType } from './category-type.enum';
import { Company } from './company';

export class Coupon {
    constructor(
        public id: number,
        public title: string,
        public startDate: Date,
        public description:string,
        public endDate: Date,
        public amount: number,
        public category: CategoryType,        
        public price: number,
        public image: string,
        public company: Company
    ) {}


}
