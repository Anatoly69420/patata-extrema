import {Customer} from "./crm/domain/model/customer";
import {SalesOrder} from "./sales/domain/model/sales-order";

console.log('Thank you for usifng WebStorm 💙')
let customer = new Customer("Angelito");
let salesOrder = new SalesOrder(customer.id);
salesOrder.addItem("P001",2,100);
salesOrder.addItem("P002",20,50);
customer.lastOrderPrice=salesOrder.calculateTotalPrice();
console.log(`Customer named  ${customer.name} and identified with ID ${customer.id} have just completed an order for a total of ${customer.lastOrderPrice}`)