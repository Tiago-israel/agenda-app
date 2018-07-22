import { UsuarioClaims } from "./usuario-claims.model";

export class Usuario {
    public login?: string;
    public senha?: string;
    public perfil?:string;
    public claims?: Array<UsuarioClaims>;
}