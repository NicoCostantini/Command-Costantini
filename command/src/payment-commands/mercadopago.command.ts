import { ICommand } from "../command.interface";
import { CreditCardDto } from "./dto/credit-card.dto";

export class MercadoPagoCommand implements ICommand {
    public readonly providerName: string = 'MercadoPago';

    constructor(private readonly creditCardDef: CreditCardDto) {}

    handle(): void {
        console.log(`${this.providerName} ha sido activado ..`);
        // your code goes here ..
    }
}