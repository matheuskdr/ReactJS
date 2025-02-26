"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { StepUser } from "@/components/checkout/step-user";
import { StepAdress } from "@/components/checkout/step-adress";
import { StepFinish } from "@/components/checkout/step-finish";
import { CkeckoutSteps } from "@/types/checkout-steps";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export const CheckoutDialog = ({ open, onOpenChange}: Props) => {
    const [step, setStep] = useState<CkeckoutSteps>('user');

    let progressPct = 0;
    switch (step) {
        case 'user':
            progressPct = 30;
            break;
        case 'adress':
            progressPct = 60;
            break;
        case 'finish':
            progressPct = 100;
            break;
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados pessoais'}
                        {step === 'adress' && 'Endereço de entrega'}
                        {step === 'finish' && 'Envio para o whatsapp'}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct}/>

                <div className="flex flex-col gap-3">
                    {step == 'user' && <StepUser setStep={setStep} />}
                    {step == 'user' && <StepAdress setStep={setStep} />}
                    {step == 'user' && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    );
}