import { Users } from "./Users";

/**
 * Interface para el mapeo de la solicitud de la Api
 * 
 */
export interface Request{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[]
}
/**
 * Interface para el mapeo del usuario
 * 
 */
      interface User {
         id: number,
         email: string,
         first_name: string,
         last_name: string,
         avatar: string,
 }

