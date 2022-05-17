import { ICommand } from "./command.interface";

export class PaymentMethodHandler {
    process(command: ICommand): void {
        console.log('Se ha iniciado el controlador de métodos de pago.');
        command.handle();
    }

    forceToProcess(commands: ICommand[]): void {
        for(const cmd of commands) {
            try {
                if(cmd.providerName === 'Paypal') {
                    throw new Error(`${cmd.providerName} rechazó la tarjeta de crédito del usuario por fraude`);
                }

                cmd.handle();
                break;                
            } catch (error) {
                console.warn(`\tERR: ${error.message}`);
            }
        }
    }
}