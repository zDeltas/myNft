export class Nft {
  private _id: string | undefined;
  private _imgUrl: string;
  private _value: string;
  private _name: string;
  private _rarity: string;
  private _owner: string;

  constructor(name: string, value: string, rarity: string, imgUrl: string, owner: string) {
    this._imgUrl = imgUrl;
    this._value = value;
    this._name = name;
    this._rarity = rarity;
    this._owner = owner;
  }

  set id(value: string) {
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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get rarity(): string {
    return this._rarity;
  }

  set rarity(value: string) {
    this._rarity = value;
  }
  set owner(value: string) {
    this._owner = value;
  }

  get owner(): string {
    return this._owner;
  }

  public toPlainObject() {
    return {
      imgUrl: this._imgUrl,
      value: this._value,
      name: this._name,
      rarity: this._rarity,
      owner: this._owner,
    };
  }
}
