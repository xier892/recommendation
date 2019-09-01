const questions = [{
  name: 'What is your ideal typing style?',
  abbr: 'Weight',
  responses: [{
    name: 'Featherweight',
    class: 'forceUltraLight',
    description: 'typing that barely exerts any force at all'
  },
  {
    name: 'Lightweight',
    class: 'forceLight',
    description: 'pressing on keys with fairly light and agile taps, using only a moderate amount of force'
  },
  {
    name: 'Middleweight',
    class: 'forceMed',
    description: 'consistently using enough force to bottom out the key, but not exactly pounding on it'
  },
  {
    name: 'Heavyweight',
    class: 'forceHeavy',
    description: 'firmly pushing down on keys with considerable force'
  },
  {
    name: 'Extreme heavyweight',
    class: 'forceUltra',
    description: 'I want my keyboard to double as a punching bag'
  }]
},
{
  name: 'Is noise an issue?',
  abbr: 'Silenced',
  responses: [{
    name: 'Yes',
    class: 'noiseQuiet',
    description: 'I want my keyboard to be as quiet as possible'
  },
  {
    name: 'No',
    class: 'noiseLoud',
    description: 'I don&#8217;t care how loud my keyboard gets'
  }]
},
{
  name: 'How would you like your keypresses to feel?',
  abbr: 'Tactility',
  responses: [{
    name: 'Linear',
    class: 'tactilityLinear',
    description: 'no physical feedback, smooth all the way down&mdash;ideal for gaming'
  },
  {
    name: 'Tactile',
    class: 'tactilityBumpy',
    description: 'bumpy feedback that lets you know when the key has been pressed'
  },
  {
    name: 'Clicky',
    class: 'tactilityClicky',
    description: 'sharp feedback, typically accompanied by an audible "click" noise'
  }]
},
{
  name: 'What is your preferred form factor?',
  abbr: 'Form factor',
  responses: [{
    name: 'Fullsize',
    class: 'size100',
    description: 'includes numpad, arrow keys, and all function keys'
  },
  {
    name: 'Tenkeyless',
    class: 'size80',
    description: 'includes everything except the numpad, giving your mouse more room'
  },
  {
    name: '60%',
    class: 'size60',
    description: 'ultra space-saving layout that discards both the numpad and function keys'
  }]
},
{
  name: 'Do you need macro functionality?',
  abbr: 'Macro functionality',
  responses: [{
    name: 'Yes',
    class: 'macrosYes',
    description: 'I want to be able to define macros'
  },
  {
    name: 'No',
    class: 'macrosNo',
    description: 'I don&#8217;t need macros'
  }]
},
{
  name: 'Do you want LED backlighting?',
  abbr: 'LED backlighting',
  responses: [{
    name: 'Yes',
    class: 'backlightingYes',
    description: 'I want my keyboard to glow'
  },
  {
    name: 'No',
    class: 'backlightingNo',
    description: 'I don&#8217;t care about backlighting'
  }]
},
{
  name: 'Would you be interested in different color options?',
  abbr: 'Show color options',
  responses: [{
    name: 'Yes',
    class: 'colorYes',
    description: 'show me keyboards with multiple color options'
  },
  {
    name: 'No',
    class: 'colorNo',
    description: 'since when were there colors other than black?'
  }]
}];
