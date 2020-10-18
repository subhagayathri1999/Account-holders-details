import { LightningElement,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/Accountmamager.getAccount'
export default class Accountmanagerlists extends LightningElement {

    @wire(getAllAccounts)
    accounts;
    get responseReceived(){
        if (this.accounts){
            return true;
        }
        return false;
    }
}