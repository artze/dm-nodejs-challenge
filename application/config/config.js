/**
 * Define API domain in each environment
 */

let apiDomain;

switch (process.env.NODE_ENV) {
  case 'development':
  apiDomain = 'http://localhost:3000';
  break;

  case 'production':
  apiDomain = 'http://deedmob-hosted-storage:3000';
  break;

  case 'test':
  apiDomain = 'http://localhost:3000';
  break;

  default:
  apiDomain = 'http://localhost:3000';
  break;
}

module.exports = {
  apiDomain
}