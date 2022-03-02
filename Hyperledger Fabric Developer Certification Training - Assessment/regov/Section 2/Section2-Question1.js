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

  function execute(name, method,amount){
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
        default:
          console.log('Error. Please recheck!');
      }
    }

  }

  var localDB = [];
  localDB.push(new Account('Hafiz', 100));

  execute('Uwais', 'str');
  execute('Hafiz', 'str');
  execute('Hafiz', 'withdraw', 300);
  execute('Hafiz', 'deposit', 400);
  execute('Hafiz', 'withdraw', 300);
  execute('Hafiz', 'str');

        
