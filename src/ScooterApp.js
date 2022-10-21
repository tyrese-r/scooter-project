const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  #stations
  static #registeredUsers = []
  #scooterSessions
  // ScooterApp code here
  constructor() {
    this.stations = ['Paddington']
  }

  get stations() {
    return this.#stations
  }

  set stations(station) {
    this.#stations = station
  }

  static get registeredUsers() {
    return ScooterApp.#registeredUsers
  }


  get scooterSessions() {
    return this.#scooterSessions
  }

  set scooterSessions(scooterSessions) {
    this.#scooterSessions = scooterSessions
  }

  register(user) {
    // check age
    if (user.age < 18) {
      console.log(user.age)
      console.log('too young to register!')
      return
    }

    // already registered
    const newUser = {
      username: user.username,
      password: user.password,
      age: user.age,
      loggedIn: false

    }

    // Assuming usernames are unique
    const alreadyRegistered = ScooterApp.#registeredUsers.some(i => i.username == newUser.username)
    if (alreadyRegistered) {
      console.log('already registered!')
      return
    }

    ScooterApp.#registeredUsers.push(newUser)
  }

  login(username, password) {

  }

  addScooter(location, scooter) {

  }

  removeScooter(scooterToRemove) {

  }
}

module.exports = ScooterApp
