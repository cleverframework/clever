import config from './config';

// controllers
import ctrl from './controllers/ctrl';

let app = window.app = {};

// config
config(app);

// ctrls
ctrl(app);

$(document).ready(() => {
  console.log(`${app.config.name} started`);
});
