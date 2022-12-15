import { Request, Response } from "express";
import * as yup from "yup";

interface IGuests {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    fiscalCode: string;
}

const guestValidation: yup.SchemaOf<IGuests> = yup.object().shape({
    firstName: yup.string().required("Nome é obrigatório"),
    lastName: yup.string().required("Sobrenome é obrigatório"),
    fiscalCode: yup.string().required("CPF é óbrigatório"),
    phoneNumber: yup.string().required("Telefone é obrigatório"),
    address: yup.string().required("Endereço é obrigatório"),
});

export const create = async (req: Request<{}, {}, IGuests>, res: Response) => {
    try {
        await guestValidation.validate(req.body);
    } catch (error) {
        const validationError = error as yup.ValidationError;
        return res.json({ errors: { message: validationError.message } });
    }
};
