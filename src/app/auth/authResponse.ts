export interface AuthResponse {


    idToken: string;
    email: string;
    localId: string;
    expiresIn: string;
    refreshToken: string;
    registered?: boolean;

}
