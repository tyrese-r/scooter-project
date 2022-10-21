const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Test constructor', () => {
  const user = new User('Username', 'foo', 19)
  const station = 'Westminister'
  const scooter = new Scooter(station, user)
  test('scooter should be a typeof Scooter', () => {
    expect(scooter).toBeInstanceOf(Scooter)
  })
  test('scooter should have the correct station', () => {
    expect(scooter.station).toBe(station)
  })
  test('scooter should have correct user', () => {
    expect(scooter.user).toBe(user)
  })
  test('scooter serial should be a random number from 1 to 1000', () => {
    expect(scooter.serial).toBeGreaterThanOrEqual(1)
    expect(scooter.serial).toBeLessThanOrEqual(1000)
  })
  test('scooter charge should be a random number from 1 to 100', () => {
    expect(scooter.charge).toBeGreaterThanOrEqual(1)
    expect(scooter.charge).toBeLessThanOrEqual(100)
  })
  test('scooter broken should be false', () => {
    expect(scooter.isBroken).toBe(false)
  })
  test('scooter docked should be true', () => {
    expect(scooter.docked).toBe(true)
  })
})

//Method tests
describe('Test setter functions', () => {
  // tests here!
  const user = new User('Username', 'foo', 19)
  const station = 'King\'s Cross'
  let scooter = new Scooter(station, user)
  beforeEach(() => {
    // Reset each time a new test is run
    scooter = new Scooter(station, user)
  })


  test('update charge', () => {
    const newCharge = 88
    scooter.charge = newCharge

    expect(scooter.charge).toBe(newCharge)
  })

  test('update broken to true', () => {
    scooter.isBroken = true

    expect(scooter.isBroken).toBe(true)
  })
  test('update docked to false', () => {
    scooter.docked = false

    expect(scooter.docked).toBe(false)
  })
  test('update docked to false then back to true again', () => {
    scooter.docked = false
    expect(scooter.docked).toBe(false)
    scooter.docked = true
    expect(scooter.docked).toBe(true)
  })
})

describe('Test rent()', () => {
  // tests here!
  const user = new User('Username', 'foo', 19)
  const station = 'Paddington'
  let scooter = new Scooter(station, user)
  const spy = jest.spyOn(console, 'log');
  beforeEach(() => {
    // Reset each time a new test is run
    scooter = new Scooter(station, user)
  })
  test('Throw error if broken', () => {
    scooter.isBroken = true
    scooter.charge = 100
    expect(() => scooter.rent()).toThrow('Scooter is broken, please send a repair request')
  })
  test('Throw error if low charge at 1', () => {
    scooter.isBroken = false
    scooter.charge = 1
    expect(() => scooter.rent()).toThrowError('Scooter is low on battery, please charge.')
  })
  test('Throw error if low charge at 20', () => {
    scooter.isBroken = false
    scooter.charge = 20
    expect(() => scooter.rent()).toThrowError('Scooter is low on battery, please charge.')
  })
  test('It should be fine if charge is 21', () => {
    scooter.isBroken = false
    scooter.charge = 21
    scooter.rent()
    expect(scooter.docked).toBe(false)
    expect(spy).toHaveBeenCalledWith('Enjoy the ride!')
  })
  test('If nothing is wrong then it should be undocked and enjoy the ride', () => {
    scooter.isBroken = false
    scooter.charge = 100
    scooter.rent()
    expect(scooter.docked).toBe(false)
    expect(spy).toHaveBeenCalledWith('Enjoy the ride!')
  })
})

describe('Test recharge()', () => {
  const user = new User('Username', 'foo', 19)
  const station = 'Ealing Broadway'
  let scooter = new Scooter(station, user)
  const spy = jest.spyOn(console, 'log');
  beforeEach(() => {
    // Reset each time a new test is run
    scooter = new Scooter(station, user)
  })

  test('Set charge to 100 when low', () => {
    scooter.charge = 9
    scooter.recharge()
    expect(scooter.charge).toBe(100)
  })
  test('Set charge to 100 if already at 100', () => {
    scooter.charge = 100
    scooter.recharge()
    expect(scooter.charge).toBe(100)
  })
  test('Set charge to 100 if charge is a string', () => {
    scooter.charge = 'a string'
    scooter.recharge()
    expect(scooter.charge).toBe(100)
  })
})

describe('Test dock()', () => {
  const user = new User('Username', 'foo', 19)
  const station = ''
  let scooter = new Scooter(station, user)
  beforeEach(() => {
    // Reset each time a new test is run
    scooter = new Scooter(station, user)
    scooter.docked = false
  })

  test('Dock if there is a station provided', () => {
    scooter.dock('Paddington')
    expect(scooter.docked).toBe(true)
    expect(scooter.station).toBe('Paddington')
    expect(scooter.user).toBe('')
  })
  test('Dock at Green Park', () => {
    scooter.dock('Green Park')
    expect(scooter.docked).toBe(true)
    expect(scooter.station).toBe('Green Park')
    expect(scooter.user).toBe('')
  })
  test('Do not dock if there is no station', () => {
    expect(() => scooter.dock('')).toThrowError('Docking station required!')
  })
})

describe('Test requestRepair()', () => {
  const user = new User('Username', 'foo', 19)
  const station = ''
  let scooter = new Scooter(station, user)
  const spy = jest.spyOn(console, 'log');
  beforeEach(() => {
    // Reset each time a new test is run
    scooter = new Scooter(station, user)
    scooter.docked = false
    scooter.isBroken = true
  })

  test('Repair!', () => {
    scooter.requestRepair()
    expect(spy).toBeCalledWith('Repair has been completed')
    expect(scooter.isBroken).toBe(false)
  })
})