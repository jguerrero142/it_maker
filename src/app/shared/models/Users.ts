export class Users{

    /**
 * Clase con la dinamica de se alterada en su propiedades
 * 
 */
    static usersJson(obj: any){
        return new Users(
            obj['id'],
            obj['email'],
            obj['first_name'],
            obj['last_name'],
            obj['avatar'],
        );
    }

    constructor(
        public id: number ,
        public email?: string | null| undefined,
        public first_name?: string | null| undefined,
        public last_name?: string | null| undefined,
        public avatar?: string | null| undefined,
    ){}

}