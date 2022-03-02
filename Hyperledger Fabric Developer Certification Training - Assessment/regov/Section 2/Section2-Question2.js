class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
      this.balance = this.balance + amount;
      console.log('Successfully deposited RM' + amount + '. ' + this.name + ' new account balance : ' + this.balance);
    }

  
  withdraw(amount){
    if(this.balance > amount){
      this.balance = this.balance - amount;
      console.log('Successfully withdrawed RM' + amount + '. ' + this.name + ' new account balance : ' + this.balance);
    }
    else{
      console.log(this.name + ' account balance RM'+ this.balance + ' not sufficient to withdraw RM' + amount+ '!')
    }
      
  }
  str(){
    console.log('Account name : ' +this.name + '. Account balance : RM' + this.balance);

  }
}

  class DevAccount extends Account {
    constructor(name, balance) {
        super(name, balance);
      }
    getBalance() {
      console.log(this.name + ' account balance : RM' + this.balance);
    }
    setBalance(amount){
        this.balance = amount;
        console.log(this.name +' new account balance : RM' + this.balance);
    }
    transferOtherAccount (amount, nameToTransfer){
      var account = localDB.find(e => e.name === nameToTransfer);
      if(account === undefined){
        console.log('There is no account named '+ nameToTransfer + '!');
      }
      else{
        if(this.balance > amount){
          account.balance = account.balance + amount;
          this.balance = this.balance - amount;
          console.log('Successfully transfer RM' + amount + ' to '+ nameToTransfer + '. '+  this.name + ' new account balance : ' + this.balance);
        }
        else{
          console.log(this.name + ' account balance RM'+ this.balance + ' not sufficient! to transfer RM' + amount + ' to ' + nameToTransfer);
        }
      }
    }
  }

  function execute(name, method,amount, nameToTransfer){
    var account = localDB.find(e => e.name === name);
    if(account === undefined){
      console.log('There is no account named '+ name + '!');
    }
    else{
      switch(method) {
        case 'deposit':
          account.deposit(amount);
          break;
        case 'withdraw':
          account.withdraw(amount);
          break;
        case 'str':
          account.str();
          break;
        case 'getBalance':
          account.getBalance();
          break;
        case 'setBalance':
          account.setBalance(amount);
          break;
        case 'transferOtherAccount':
          account.transferOtherAccount(amount, nameToTransfer);
          break;
        default:
          console.log('Error. Please recheck!');
      }
    }

  }

  var localDB = [];
  localDB.push(new DevAccount('Hafiz', 100));
  localDB.push(new DevAccount('Uwais', 700));

  execute('Hafiz', 'getBalance');
  execute('Uwais', 'getBalance');
  execute('Hafiz', 'transferOtherAccount', 300, 'Uwais');
  execute('Hafiz', 'deposit', 250);
  execute('Hafiz', 'transferOtherAccount', 300, 'Uwais');
  execute('Hafiz', 'getBalance');
  execute('Uwais', 'getBalance');
  execute('Hafiz', 'setBalance', 1000);

  //end
