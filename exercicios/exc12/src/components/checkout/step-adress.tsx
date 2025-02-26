import { CkeckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";

type Props = {
    setStep: Dispatch<SetStateAction<CkeckoutSteps>>
}
export const StepAdress = ({ setStep }: Props) => {
    return (
        <div>
            ...
        </div>
    );
}