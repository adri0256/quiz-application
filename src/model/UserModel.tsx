export class UserModel {
    uName: string;       // User name
    uPassword: string;   // User password
    uuid?: string;       // Unique identifier
    dName?: string;      // Display name
    uEmail?: string;     // User email
    uRole?: string;      // User role
    token?: string;      // User token

    constructor(uName: string, uPassword: string) {
        this.uName = uName;
        this.uPassword = uPassword;
        this.uuid = "";
        this.dName = "";
        this.uEmail = "";
        this.uRole = "";
        this.token = "";
    }
}
