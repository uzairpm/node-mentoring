// const config = require('./config'); //using require
// import * as config from './config'; //using ES6
import config from './config';
import { User, Product } from './models';

console.log(config.appName);

const user = new User();
const product = new Product();
