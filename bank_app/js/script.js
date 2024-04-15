class BankAccount{
    constructor(accountNumber,ownerName,balance  ){
        this.accountNumber = accountNumber
        this.ownerName = ownerName
        this.balance  = balance


    } 
    deposit(amount){ 
        console.log('deposit on the accouunt '+this.accountNumber+ ' $'+amount);
    this.balance += amount;
}
    withdraw(amount){
        if (amount>this.balance){
            console.log('error amount is greater than balance');
        }
        else{
            console.log('withdraw $'+amount);
             this.balance-=amount;

        }
    }
    getBalance(){
        console.log("balance "+this.balance)
        return this.balance

    }
    displayAccountInfo(){
        console.log('Account Number:'+this.accountNumber+'\n'+


        'Owner Name:'+this.accountNumber+'\n'+
        
        
       'Balance: '+this.balance+'\n')
    }


}
const person1= new BankAccount('1001',"jhon", 500)
person1.displayAccountInfo()
person1.deposit(200)
person1.withdraw(500)
person1.getBalance
const person2= new BankAccount('1002',"Mark ", 200);
person2.displayAccountInfo();
person2.deposit(200);
person2.withdraw(500);
person2.getBalance;