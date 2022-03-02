class Account {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
      }

    
    withdraw(amount){
        this.balance = this.balance - amount;
        return this.balance;
    }
  }

  class DevAccount extends Account {
    constructor(name, balance) {
        super(name, balance);
      }
    getBalance() {
      return 'Balance : RM' + this.balance;
    }
    setBalance(amount){
        this.balance = amount;
        return this.name +' new account balance : RM' + this.balance;
    }
    transferOtherAccount (amount, acc){
        if(this.balance > amount){
          acc.deposit(amount);
          this.balance = this.balance - amount;
        }
        else{
            return this.name + ' account balance RM'+ this.balance + ' not sufficient to transfer RM' + amount + '!';
        }
    }
  }

  var account1 =  new DevAccount("Hafiz", 15000);
  var account2 =  new DevAccount("Uwais", 1000);

  console.log('Hafiz balance Account : RM' + account1.balance);
  console.log('Uwais balance Account : RM' + account2.balance);

  account1.deposit(3000);
  console.log('Hafiz deposit RM3000. ');
  console.log('Hafiz balance account : RM' + account1.balance);

  console.log('Uwais try to send RM5000 to Hafiz. ');
  console.log(account2.transferOtherAccount(5000, account1));

  account1.transferOtherAccount(5000, account2);
  console.log('Hafiz transfer RM5000 to Uwais. ');
  console.log('Uwais balance account : RM' + account2.getBalance());

  console.log('Uwais get RM9000 to his account after there is miscalculation on the bank side. ');
  console.log(account2.setBalance(9000));

  console.log('Hafiz final balance account : ' + account1.getBalance());
  console.log('Uwais final balance account : ' + account2.getBalance());


