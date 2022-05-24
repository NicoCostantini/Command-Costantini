import { ICommand } from "../command.interface";
import { CreditCardDto } from "./dto/credit-card.dto";

export class PayUCommand implements ICommand {
    public readonly providerName: string = 'PayU';

    constructor(public readonly creditCardDef: CreditCardDto) {}

    handle(): void {
        console.log(`${this.providerName} ha sido activado ..`);

    }
}