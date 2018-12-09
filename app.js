// const config = require('./config'); //using require
import * as config from './config'; //using ES6
import model from './models';

console.log(config.appName);

const {User, Product} = model;
const user = new User();
const product = new Product();
