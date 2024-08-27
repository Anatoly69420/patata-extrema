import {SalesOrderItem} from "./sales-order-item";
import {v4 as uuidv4} from 'uuid';
export class SalesOrder{
    private readonly _customerId:string;
    private readonly _id:string;
    private _items: SalesOrderItem[];
    constructor(customerId:string) {
        this._id=uuidv4();
        this._customerId=customerId;
        this._items=[];
    }
    get id(){
        return this._id;
    }
    get customerId(){
        return this._customerId;
    }
    addItem(productId:string,quantity:number,unitPrice:number){
        return this._items.push(new SalesOrderItem(this.id,productId,quantity,unitPrice));
    }
    calculateTotalPrice=():number=>this._items.reduce((total,item)=>total+item.calculateItemPrice(),0);

}