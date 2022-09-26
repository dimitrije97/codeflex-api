import { Expose } from 'class-transformer';

export class LoginRequest {
    @Expose()
    email!: string;

    @Expose()
    password!: string;
}
