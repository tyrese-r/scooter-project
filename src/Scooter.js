class Scooter {
  #station
  #user
  #serial
  #charge
  #isBroken
  #docked

  // scooter code here
  constructor(station, user) {
    this.#station = station
    this.#user = user

    // To get a number from 1 to 1000
    this.#serial = Math.ceil(Math.random() * 1000)

    // To get a number from 1 to 100
    this.#charge = Math.ceil(Math.random() * 100)

    this.#isBroken = false
    this.#docked = true
    return this
  }

  get station() {
    return this.#station
  }

  get user() {
    return this.#user
  }

  get serial() {
    return this.#serial
  }

  get charge() {
    return this.#charge
  }

  get isBroken() {
    return this.#isBroken
  }

  get docked() {
    return this.#docked
  }

  set charge(charge) {
    this.#charge = charge
  }

  set isBroken(isBroken) {
    this.#isBroken = isBroken
  }

  set docked(docked) {
    this.#docked = docked
  }

  rent() {
    if(this.isBroken) throw new Error('Scooter is broken, please send a repair request.')
    if(this.charge <= 20) throw new Error('Scooter is low on battery, please charge.')
    this.docked  = false
    console.log('Enjoy the ride!')
  }

  recharge() {
    this.charge = 100
    return
  }

  dock(station) {
    if (!station.length) throw new Error ('Docking station required!')
    this.docked = true
    this.#station = station
    this.#user = ''
    return
  }

  requestRepair() {
    this.#isBroken = false
    console.log('Repair has been completed')
  }
}


module.exports = Scooter
