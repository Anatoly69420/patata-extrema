import {v4 as uuidv4} from 'uuid';
export class Customer{
    private readonly _id:string;
    private readonly _name:string;
    private _lastOrderPrice:number;

    constructor(name: string) {
        this._id=uuidv4();
        this._name = name;
        this._lastOrderPrice=0;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get lastOrderPrice(){
        return this._lastOrderPrice;
    }
    set lastOrderPrice(newLastOrderPrice:number){
        this._lastOrderPrice=newLastOrderPrice;
    }

}