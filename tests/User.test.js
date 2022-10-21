const User = require('../src/User')

// User tests here
describe('User constructor tests', () => {
    const name = 'Tyrese'
    const password = 'p@ssw0rd'
    const age = 19
    const user = new User(name, password, age)

    test('Check correct type', () => {
        expect(user).toBeInstanceOf(User)
    })
    test('Check username to be correct', () => {
        expect(user.username).toBe(name)
    })
    test('Check age to be correct', () => {
        expect(user.age).toBe(age)
    })
    test('Check password to be correct', () => {
        expect(user.password).toBe(password)
    })
    
})

// test username

// test password

// test age
