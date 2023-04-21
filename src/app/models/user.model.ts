export class User {
  private _id: string | undefined;
  private _email: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _isAdmin: boolean;
  private _money: number;

  constructor(email: string, password: string, firstName: string, lastName: string, isAdmin: boolean, money: number) {
    this._email = email;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
    this._isAdmin = isAdmin;
    this._money = money;
  }

  set id(value: string) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }


  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }

  public toPlainObject() {
    return {
      id: this._id,
      email: this._email,
      firstName: this._firstName,
      lastName: this._lastName,
      isAdmin: this._isAdmin,
      money: this._money
    };
  }
}
