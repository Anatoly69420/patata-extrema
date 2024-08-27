import {v4 as uuidv4} from 'uuid';
export class SalesOrderItem{
    private readonly _orderId: string;
    private readonly _itemId:string;
    private readonly _productId:string;
    private readonly _quantity:number;
    private readonly _unitPrice:number;

    constructor(orderId: string, productId: string, quantity: number, unitPrice: number) {
        this._orderId = orderId;
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
        this._itemId=uuidv4();
    }
    calculateItemPrice=():number=>this._quantity*this._unitPrice;
    get productId():string{
        return this._productId;
    }
    get quantity():number{
        return this._quantity;
    }
    get unitPrice():number{
        return this._unitPrice;
    }
}