export class User{
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  roles?: Roles[];
}

class Roles{
  id?: string;
  name?: string;
}
