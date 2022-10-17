export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    viewersOnly :string,
    manageAdmin : string,
    temporary_password : string,
    token?: string;
  }