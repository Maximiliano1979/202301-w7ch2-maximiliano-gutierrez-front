export interface UserState extends User {
  isLogged: boolean;
}

export interface User {
  name: string;
  token: string;
  id: string;
}
