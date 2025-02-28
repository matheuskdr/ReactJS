'use client'

import { receberDados } from "@/actions/receber-dados";
import { useActionState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
    msg: ''
}

export const Form = () => {
    const [state, formAction] = useActionState(receberDados, initialState);
    const { pending } = useFormStatus();

    return (
        <form action={formAction}>
            <input disabled={pending} type="text" name="name" placeholder="Digite seu nome" />
            <input disabled={pending} type="number" name="age" placeholder="Digite sua idade" />
            <input disabled={pending} type="submit" value='Enviar' />
            <p>MSG: {state.msg}</p>
        </form>
    );
}