const ScooterApp = require("./ScooterApp");
const User = require("./User");

const s = new ScooterApp('')
const u = new User('Foo', 'bar', 199)

s.register(u)
s.register(u)