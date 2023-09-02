import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PurchaseDto} from 'src/app/controller/model/Purchase.model';
import {ProductDto} from 'src/app/controller/model/Product.model';

export class PurchaseItemDto extends BaseDto{

    public price: null | number;

    public quantity: null | number;

    public product: ProductDto ;
    public purchase: PurchaseDto ;
    

    constructor() {
        super();

        this.price = null;
        this.quantity = null;
        this.product = new ProductDto() ;
        this.purchase = new PurchaseDto() ;

        }

}
