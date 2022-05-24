import { CreditCardDto } from "../src/payment-commands/dto/credit-card.dto";
import { MercadoPagoCommand } from "../src/payment-commands/mercadopago.command";
import { PaypalCommand } from "../src/payment-commands/paypal.command";
import { PayUCommand } from "../src/payment-commands/payu.command";
import { PaymentMethodHandler } from "../src/payment-method.handler";

test('Cuando_SeCreaCreditCardDto_Deberia_CrearseConTypeFullNameNumberCcvYAmount', () => {
    const creditcard = new CreditCardDto("visa", "nicolas", "2546", "334", 500);
    expect(creditcard.cardtype).toBe("visa");
    expect(creditcard.cardCustomerFullName).toBe("nicolas");
    expect(creditcard.cardNumber).toBe("2546");
    expect(creditcard.cardCcv).toBe("334");
    expect(creditcard.transactionAmount).toBe(500);
});

test('Cuando_SeCreaMercadoPagoCommand_Deberia_CrearseConCreditCardDef', () => {
    const creditcard = new CreditCardDto("visa", "nicolas", "2546", "334", 500);
    const mercpago= new MercadoPagoCommand(creditcard);
    expect(mercpago.creditCardDef).toBe(creditcard);
    expect(mercpago.providerName).toEqual("MercadoPago");
});

test('Cuando_SeCreaPaypalCommand_Deberia_CrearseConCreditCardDef', () => {
    const creditcard = new CreditCardDto("visa", "nicolas", "2546", "334", 500);
    const paypal= new PaypalCommand(creditcard);
    expect(paypal.creditCardDef).toBe(creditcard);
    expect(paypal.providerName).toEqual("Paypal");
});

test('Cuando_SeCreaPayUCommand_Deberia_CrearseConCreditCardDef', () => {
    const creditcard = new CreditCardDto("visa", "nicolas", "2546", "334", 500);
    const payu= new PayUCommand(creditcard);
    expect(payu.creditCardDef).toBe(creditcard);
    expect(payu.providerName).toEqual("PayU");
});

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