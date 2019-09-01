const silencerMessage = {
  title: 'Concerned about noise?',
  description: 'Mechanical keyboards are loud by nature. Even if the switch itself is quiet, the sound of the switch hitting the switch casing is still very audible. Fortunately, there are methods to dampen the sound of bottoming out.\r\nNote that this modification will make bottoming out feel mushier, which may not be to your liking.\r\n<b>Compatible with Cherry-type switches only (Cherry MX, Gateron, Outemu, Zealio).</b>'
};

const silencers = [{
  name: '40A-L O-Rings',
  class: 'Oring40AL',
  url: 'https://www.amazon.com/Cherry-Rubber-Ring-Switch-Dampeners/dp/B00AZQ3966',
  distance: 0.2,
  changefeeling: 'Yes',
  price: 15
},
{
  name: '40A-R O-Rings',
  class: 'Oring40AR',
  url: 'https://www.amazon.com/Cherry-Rubber-Ring-Switch-Dampeners/dp/B00AZQ2OF8',
  distance: 0.4,
  changefeeling: 'Yes',
  price: 15
},
{
  name: ['Zealencio Silencing Clips (&times;120)', 'Zealencio Silencing Clips (&times;100)', 'Zealencio Silencing Clips (&times;70)'],
  class: 'zealencio',
  url: 'https://zealpc.net/products/zealencio',
  distance: 0.1,
  changefeeling: 'No',
  price: [70, 60, 45]
}];
