export class Actor {
	constructor(name) {
		this.name = name;
	}

	attemptsTo(Login) {
		return new Login(this);
	}

	attemptsTo(Product) {
		return new Product(this);
	}
}