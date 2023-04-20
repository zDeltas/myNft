export class User {
  private _id: string;
  private _email: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string

  constructor(id: string, email: string, password: string, firstName: string, lastName: string) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get id(): string {
    return this._id;
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

  toPlainObject() {
    return {
      _id: this._id,
      _email: this._email,
      _password: this._password,
      _firstName: this._firstName,
      _lastName: this._lastName,
    }
  }
}
