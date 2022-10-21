const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('Test constructor', () => {
    test('stations should be an not array', () => {
        const scooterApp  = new ScooterApp()
        expect(scooterApp.stations.length).toBeGreaterThan(0)
    })
})

describe('Test register()', () => {
    let scooterApp = new ScooterApp()
    const user = new User('Tyrese', 'qwerty', 18)
    const spy = jest.spyOn(console, 'log');
    beforeEach(() => {
        scooterApp = new ScooterApp()
    })

    test('Log to console saying they are too young', () => {
        const scooterApp = new ScooterApp()
        const user = new User('Tyrese', 'qwerty', 3)
        scooterApp.register(user)
        expect(spy).toHaveBeenCalledWith('too young to register!')
    })
    
    
    test('Check if already registered', () => {
        const scooterApp = new ScooterApp()

        scooterApp.register(new User('foo', 'bar', 189))
        scooterApp.register(new User('foo', 'bar', 189))

        expect(spy).toHaveBeenCalledWith('already registered!')
        
    })
})

describe('describe', () => {
    const spy = jest.spyOn(console, 'log');
    test('Register user successfully', () => {
        const scooterApp2 = new ScooterApp()
        scooterApp2.register(new User('Tyrese2', 'qwe2rty', 301))
        expect(ScooterApp.registeredUsers).toEqual(expect.arrayContaining([expect.objectContaining({
            username: expect.any(String),
            password: expect.any(String),
            age: expect.any(Number),
            loggedIn: expect.any(Boolean)

        })]))
        expect(spy).toHaveBeenCalledWith('user has been registered')
    })
})
// register user

// log in

// add scooter

// remove scooter
