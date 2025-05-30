import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("order one");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to the Foodie's House.");
    });
    it("test yes", function() {
        const oOrder = new Order("order two");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Please type the item number you want: (1/2/3)");//first line of chat output regardless of later lines
    });
    it("test no", function() {
        const oOrder = new Order("order three");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks for trying our reservation system, come again!");
    });
  });