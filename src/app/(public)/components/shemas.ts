import { z } from "zod";

export const LoginSchema = z.object({
    usuario: z.string({ required_error: "Usuario es requerido." }),
    password: z.string({ required_error: "Contraseña es requerida." }),
})


export type TsSchemaFormLogin = z.infer<typeof LoginSchema>;
