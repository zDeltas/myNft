export class Nft {
  private _id: string | undefined;
  private _imgUrl: string;
  private _value: string;
  private _nom: string;
  private _scarcity: string;

  constructor(imgUrl: string, value: string, nom: string, scarcity: string) {
    this._imgUrl = imgUrl;
    this._value = value;
    this._nom = nom;
    this._scarcity = scarcity;
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(value: string | undefined) {
    this._id = value;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  set imgUrl(value: string) {
    this._imgUrl = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get scarcity(): string {
    return this._scarcity;
  }

  set scarcity(value: string) {
    this._scarcity = value;
  }

  public toPlainObject() {
    return {
      id: this._id,
      imgUrl: this._imgUrl,
      value: this._value,
      nom: this._nom,
      scarcity: this._scarcity,
    };
  }
}
