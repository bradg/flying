var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bebop: { adaptor: 'bebop' }
  },

  devices: {
    drone: { driver: 'bebop' }
  },

  work: function(my) {
    my.drone.takeOff();
    my.drone.left(0.5);
    after((7).seconds(), my.drone.land);
  }
}).start();
