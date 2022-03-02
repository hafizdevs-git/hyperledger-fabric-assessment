class Account {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        return 'Deposited amount : ' + amount + '. Balance : ' + this.balance;
      }

    
    withdraw(amount){
        this.balance = this.balance - amount;
        return 'withdrawed amount : ' + amount + '. Balance : ' + this.balance;
    }
    str(){
      return 'Name : ' +this.name + '. Balance : RM' + this.balance;

    }
  }

  var createNewAccount1 =  new Account("Hafiz", 15000);
  console.log(createNewAccount1); 

  console.log(createNewAccount1.str());

  var depositHafizAccount = createNewAccount1.deposit(3000);
  console.log(depositHafizAccount);

  var withdrawHafizaccount = createNewAccount1.withdraw(8000);
  console.log(withdrawHafizaccount);

  console.log(createNewAccount1.str());
        