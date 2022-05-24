type CreditCardType = 'visa' | 'marstercard' | 'dinner';

export class CreditCardDto {
    constructor(
        public readonly cardtype: CreditCardType,
        public readonly cardCustomerFullName: string,
        public readonly cardNumber: string,
        public readonly cardCcv: string,
        public readonly transactionAmount: number
    ) { }
}