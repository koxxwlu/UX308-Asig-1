export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Welcome to the Foodie's House.");
          aReturn.push("Would you like to order any food? (y/n)");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.ITEM_NR;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push('Please type the item number you want: (1/2/3)');
            aReturn.push('1. Cheese Burger');
            aReturn.push('2. Sandwich w/ Bacon');
            aReturn.push('3. Salad & Veggies');

            // if (sInput == 1) {
            //   aReturn.push('1. elle day')

            //   aReturn.push(`Your food order is reserved under the phone number ${this.sFrom}`);
            // let d = new Date();
            // d.setMinutes(d.getMinutes() + 120);
            // aReturn.push(`Please pick it up at 123 Dalhousie St., Acton before ${d.toTimeString()}`);
            // }
          } else {
            aReturn.push("Thanks for trying our reservation system, come again!");
            this.isDone = true;
          }
          return aReturn;
        },
        ITEM_NR: (sInput) => {
          let aReturn = [];
          if (sInput == 1) {
            aReturn.push("You've chosen 1. Cheese Burger!")
            aReturn.push("Great! Would you like to make it a set for $3.99? (y/n)")
            this.stateCur = this.OrderState.UP_SELL;
          } else if (sInput == 2) {
            aReturn.push("You've chosen 2. Sandwich w/ Bacon!")
            aReturn.push("Great! Would you like to make it a set for $3.99? (y/n)")
            this.stateCur = this.OrderState.UP_SELL;
          } else if (sInput == 3) {
            aReturn.push("You've chosen 3. Salad & Veggies!")
            aReturn.push("Great! Would you like to make it a set for $3.99? (y/n)")
            this.stateCur = this.OrderState.UP_SELL;
          } else {
            aReturn.push("Sorry, your item isn't recognised. Please enter again.");
            aReturn.push('Please type the item number you want: (1/2/3)');
            aReturn.push('1. Cheese Burger');
            aReturn.push('2. Sandwich w/ Bacon');
            aReturn.push('3. Salad & Veggies');
          }
          return aReturn;
        },
        UP_SELL: (sInput) => {
          let aReturn = [];
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("Great choice! Your total is $14.99.")
            aReturn.push("Would you like to pay-in-full or with installments? (p/i)")
            this.stateCur = this.OrderState.PAYMENT;
          } else {
            aReturn.push("Are you sure? It's only $3.99 :(")
            aReturn.push("Great! Would you like to make it a set for $3.99? (y/n)")
          }
          return aReturn;
        },
        PAYMENT: (sInput) => {
          let aReturn = [];
          if (sInput.toLowerCase().startsWith('p')) {
            aReturn.push("Perfect you're paying in full for your $14.99 meal.")
            aReturn.push("All set, you order will be ready soon, please come again!")
            this.isDone = true;
          } else if (sInput.toLowerCase().startsWith('i')) {
            aReturn.push("Perfect you're paying in installments of 48 months (at 15% interest) for your $14.99 meal.")
            aReturn.push("All set, you order will be ready soon, please come again!")
            this.isDone = true;
          } else {
            aReturn.push("Payment method not recognised. Would you like to pay-in-full or with installments? (p/i)")
          }
          return aReturn;
        }
      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }