class User {
  // User code here
  #username
  #password
  #age
  constructor(username, password, age) {
    this.#username = username
    this.#age = age // age in years
    this.#password = password

  }

  get username() {
    return this.#username
  }

  get age() {
    return this.#age
  }
  set age(age) {
    this.#age = age
  }

  get password() {
    return this.#password
  }
}

module.exports = User
