export class Actor {
  constructor(name) {
    this.name = name;
  }

  attemptTo(Login) {
    return new Login(this);
  }

  attemptToAdd(Product) {
    return new Product(this);
  }

  attemptToRemove(Product) {
    return new Product(this);
  }
}