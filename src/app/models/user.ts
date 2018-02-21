export class User {
  isUserLoggedIn: boolean;
  username: string;
  password: string;
  name: string;
  userRole: string;

  constructor() {
  }

  setUserDetail(username, password, name, userRole, loggedIn) {
    this.isUserLoggedIn = loggedIn;
    this.username = username;
    this.name = name;
    this.password = password;
    this.userRole = userRole;
  }
}
