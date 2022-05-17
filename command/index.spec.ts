import { PaymentMethodHandler } from "./src/payment-method.handler";
import { PaypalCommand } from "./src/payment-commands/paypal.command";
import { CreditCardDto } from "./src/payment-commands/dto/credit-card.dto";

describe("Payment Method Handler", () => {
    it("success case", () => {
        const paymentMethodHandler = new PaymentMethodHandler();

        const creditCard = new CreditCardDto(
            "visa",
            "Eduardo Rodríguez Patiño",
            "xxx-xxx-xxx-xxx",
            "xxx",
            300.00
        );

        paymentMethodHandler.process(new PaypalCommand(creditCard));
    });
}); 