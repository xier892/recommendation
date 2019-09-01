const switches = [{
  name: 'Gateron Clear',
  class: 'gateronClear',
  description: 'The Gateron Clear switch is an extremely lightweight and linear keyboard switch. Pressing down on the key will feel as smooth as butter. Gateron Clears are superb for fast-paced gaming, although typing with them may prove difficult.',
  force: 35,
  bumpiness: 0,
  clickiness: 0,
  noise: 5
},
{
  name: 'Matias Quiet Linear',
  class: 'matiasQuietLinear',
  description: 'The Matias Quiet Linear switch is a very lightweight and linear keyboard switch. This switch is sound dampened to suppress both bottom-out and upstroke noise. Although this switch is classified as a linear switch, there is a very slight tactile point prior to bottoming out that can be felt if you gently press down on the key.',
  force: 35,
  bumpiness: 0,
  clickiness: 0,
  noise: 1
},
{
  name: 'Cherry MX Red',
  class: 'cherryMXred',
  description: 'The Cherry MX Red switch is a lightweight and linear keyboard switch. Its low actuation force and lack of distracting tactile feedback makes this switch well-suited for rapid keypresses.',
  force: 45,
  bumpiness: 0,
  clickiness: 0,
  noise: 4
},
{
  name: 'Cherry MX Speed Silver',
  class: 'cherryMXspeedsilver',
  description: 'The Cherry MX Red switch is a lightweight and linear keyboard switch. Its low actuation force and lack of distracting tactile feedback makes this switch well-suited for rapid keypresses.',
  force: 45,
  bumpiness: 0,
  clickiness: 0,
  noise: 4
},
{
  name: 'Cherry MX Silent Red',
  class: 'cherryMXSilentRed',
  description: 'The Cherry MX Silent Red switch is a lightweight and linear switch. It is a modified version of the original Cherry MX Red switch that features sound dampening to suppress both bottom-out and upstroke noise.',
  force: 45,
  bumpiness: 0,
  clickiness: 0,
  noise: 1
},
{
  name: 'Gateron Red',
  class: 'gateronRed',
  description: 'The Cherry MX Silent Red switch is a lightweight and linear switch. It is a modified version of the original Cherry MX Red switch that features sound dampening to suppress both bottom-out and upstroke noise.',
  force: 45,
  bumpiness: 0,
  clickiness: 0,
  noise: 5
},
{
  name: 'Cherry MX Nature White',
  class: 'cherryMXnaturewhite',
  description: 'The Cherry MX Nature White switch is a medium-weight linear switch. It offers a little resistance to help minimize typing errors, but it doesn&#8217;t go overboard so your fingers won&#8217;t feel fatigued.',
  force: 55,
  bumpiness: 0,
  clickiness: 0,
  noise: 4
},
{
  name: 'Gateron Black',
  class: 'gateronBlack',
  description: 'The Gateron Black switch is practically a clone of the Cherry MX Nature White switch. The difference between the two lies in their smoothness. Gateron switches are extremely smooth; however, they experience slightly more wobble compared to their Cherry MX counterparts.',
  force: 55,
  bumpiness: 0,
  clickiness: 0,
  noise: 5
},
{
  name: 'Cherry MX Black',
  class: 'cherryMXblack',
  description: 'The Cherry MX Black switch is a heavy-weight linear switch. It carries the advantages of linear switches such as seamless double-tapping, while having enough resistance for heavy typists.',
  force: 61,
  bumpiness: 0,
  clickiness: 0,
  noise: 4
},
{
  name: 'Cherry MX Silent Black',
  class: 'cherryMXSilentBlack',
  description: 'The Cherry MX Silent Black switch is a heavy-weight linear switch. It is a modified version of the original Cherry MX Black switch that features sound dampening to suppress both bottom-out and upstroke noise.',
  force: 61,
  bumpiness: 0,
  clickiness: 0,
  noise: 1
},
{
  name: 'Cherry MX Linear Grey',
  class: 'cherryMXlineargrey',
  description: 'The Cherry MX Linear Grey is the heaviest linear switch in production. This is the dream switch for masochistic typists and gamers who abide by the mantra that pressing keys really hard will make your attacks come out stronger.',
  force: 80,
  bumpiness: 0,
  clickiness: 0,
  noise: 4
},
{
  name: 'Topre 30g',
  class: 'topre30g',
  description: 'Topre switches are very tactile and smooth. There is an initial resistance at the beginning of the keypress, and once that force is overcome, the switch collapses to the bottom. The satisfaction of typing on a Topre keyboard is comparable to effortlessly popping bubble wrap. The sound this switch makes is a muffled "thock" that is quite relaxing to listen to.\r\nTopre switches come in different weights. The 30g weighted switch is extremely light and provides tactile feedback, although not in the same degree as its heavier variants.',
  force: 30,
  bumpiness: 5,
  clickiness: 0,
  noise: 2
},
{
  name: 'Cherry MX Brown',
  class: 'cherryMXbrown',
  description: 'The Cherry MX Brown switch is a lightweight and slightly tactile keyboard switch. The tactile point is very subtle and may not even be noticed if the key is pressed down with sufficient force.',
  force: 45,
  bumpiness: 2,
  clickiness: 0,
  noise: 4
},
{
  name: 'Purple Zealio 62g',
  class: 'zealiopurple62g',
  description: 'Zealio goes by Korean naming conventions, which lists the force of bottoming out instead of the force of actuation.\r\nThe 62g variant of the Purple Zealio switch is smooth, crisp, and lightweight, and offers a larger crisp and light tactile feedback when compared to Cherry MX Brown&#8217;s barely noticeable bump. The upstroke has a nice rebound, which makes the switch feel snappy.',
  force: 45,
  bumpiness: 5,
  clickiness: 0,
  noise: 5
},
{
  name: 'Outemu Purple',
  class: 'outemuPurple',
  description: 'The Outemu Purple switch is a medium-weight tactile switch. Although it isn&#8217;t as tactile as the more expensive Zealio, these switches are relatively cheap to produce.',
  force: 55,
  bumpiness: 2,
  clickiness: 0,
  noise: 5
},
{
  name: 'Topre 45g',
  class: 'topre45g',
  description: 'Topre switches are very tactile and smooth. There is an initial resistance at the beginning of the keypress, and once that force is overcome, the switch collapses to the bottom. The satisfaction of typing on a Topre keyboard is comparable to effortlessly popping bubble wrap. The sound this switch makes is a muffled "thock" that is quite relaxing to listen to.\r\nTopre switches come in different weights. The 45g weighted switch is fairly light and provides a good amount of tactile feedback.',
  force: 45,
  bumpiness: 8,
  clickiness: 0,
  noise: 3
},
{
  name: 'Purple Zealio 65g',
  class: 'zealiopurple65g',
  description: 'Zealio goes by Korean naming conventions, which lists the force of bottoming out instead of the force of actuation.\r\nThe 65g variant of the Purple Zealio switch has a long, drawn out tactile bump near the middle of the keypress and a cushioned bottom out. The upstroke has a nice rebound, which makes the switch feel snappy. 65g Zealios are well-balanced in terms of weight, tactility, and snappiness.',
  force: 51,
  bumpiness: 6,
  clickiness: 0,
  noise: 5
},
{
  name: 'Purple Zealio 67g',
  class: 'zealiopurple67g',
  description: 'Zealio goes by Korean naming conventions, which lists the force of bottoming out instead of the force of actuation.\r\nThe 67g variant of the Purple Zealio switch has a crisp and responsive tactile bump that happens right after you press the key down. There is more cushion during bottom out than its 65g variant, and the rebound force of the upstroke is also snappier.',
  force: 51,
  bumpiness: 6,
  clickiness: 0,
  noise: 5
},
{
  name: 'Matias Quiet Click',
  class: 'matiasQuietClick',
  description: 'Zealio goes by Korean naming conventions, which lists the force of bottoming out instead of the force of actuation.\r\nThe 67g variant of the Purple Zealio switch has a crisp and responsive tactile bump that happens right after you press the key down. There is more cushion during bottom out than its 65g variant, and the rebound force of the upstroke is also snappier.',
  force: 60,
  bumpiness: 8,
  clickiness: 0,
  noise: 2
},
{
  name: 'Topre 55g',
  class: 'topre55g',
  description: 'Topre switches are very tactile and smooth. There is an initial resistance at the beginning of the keypress, and once that force is overcome, the switch collapses to the bottom. The satisfaction of typing on a Topre keyboard is comparable to effortlessly popping bubble wrap. The sound this switch makes is a muffled "thock" that is quite relaxing to listen to.\r\nTopre switches come in different weights. The 55g weighted switch is medium-heavy and provides excellent tactile feedback.',
  force: 55,
  bumpiness: 8,
  clickiness: 0,
  noise: 3
},
{
  name: 'Cherry MX Clear',
  class: 'cherryMXclear',
  description: 'The Cherry MX Clear switch is a heavy tactile keyboard switch which has a much more pronounced tactile bump than its lightweight Cherry variant, the Cherry MX Brown. Below the tactile point, the resistance increases greatly, forcing you to avoid bottoming out entirely; however, if you do choose to bottom out, it will take a whopping 95g of force to do so.',
  force: 65,
  bumpiness: 6,
  clickiness: 0,
  noise: 4
},
{
  name: 'Purple Zealio 78g',
  class: 'zealiopurple78g',
  description: 'The 78g variant of the Purple Zealio switch is a bit lighter than Cherry MX Clear (approximately 80% of its weight), but with the same crisp and snappy tactile bump customary of the other Zealio variants.',
  force: 61,
  bumpiness: 5,
  clickiness: 0,
  noise: 5
},
{
  name: 'Cherry MX Tactile Grey',
  class: 'cherryMXtactilegrey',
  description: 'It must be difficult living a normal life on such a frail planet. Cherry knows that feeling, so they made a switch just for you. Now you don&#8217;t have to worry about crushing the entire keyboard under the weight of your iron fingers.\r\nCherry MX Tactile Grey is a very heavy and tactile switch&mdash;basically the Cherry MX Clear, but heavier.',
  force: 80,
  bumpiness: 5,
  clickiness: 0,
  noise: 4
},
{
  name: 'Kailh PG1350 Blue',
  class: 'kailhPG1350blue',
  description: 'The Kailh PG1350 Blue is a lightweight and low-profile clicky switch, a good choice for those who are used to chiclet or laptop keyboards. Both the tactile feedback and noise of the Kailh PG1350 Blue are sharp and crisp.\r\nThe mechanism behind this switch results in clicking during both the downstroke and the upstroke, contrary to standard clicky switches, which only click during the downstroke.',
  force: 45,
  bumpiness: 0,
  clickiness: 5,
  noise: 7
},
{
  name: 'Kailh Box White',
  class: 'kailhBoxWhite',
  description: 'The Kailh Box White is a lightweight clicky switch. The key travel is actually quite smooth, much like a linear switch, up until the point of the click.\r\nThe mechanism behind this switch results in clicking during both the downstroke and the upstroke, contrary to standard clicky switches, which only click during the downstroke.',
  force: 45,
  bumpiness: 0,
  clickiness: 8,
  noise: 8
},
{
  name: 'Cherry MX Blue',
  class: 'cherryMXblue',
  description: 'The Cherry MX Blue switch is a light/medium-weight and clicky keyboard switch. This switch is responsible for the mechanical keyboard&#8217;s notoriety as an obnoxious noisemaker, as the clicking sound it generates has quite a jarring and tinny tone.',
  force: 50,
  bumpiness: 0,
  clickiness: 5,
  noise: 8
},
{
  name: 'Matias Click',
  class: 'matiasClick',
  description: 'Matias Click is a medium-weight clicky keyboard switch. It is much more tactile than the Cherry MX Blue. Because its mechanism employs a metal click plate rather than the Cherry&#8217;s plastic one, the Matias Click produces a more defined and sharper tone that doesn&#8217;t sound like the entire keyboard is about to snap in half within the next twenty keystrokes.',
  force: 60,
  bumpiness: 0,
  clickiness: 10,
  noise: 8
},
{
  name: 'Buckling Spring',
  class: 'bucklingSpring',
  description: 'The buckling spring mechanism produces overwhelming tactile feedback and noise akin to a typewriter. Most of the resistance is only encountered when activating the contact mechanism, so finger fatigue actually isn&#8217;t an issue when typing on buckling springs. In short, buckling springs will give you the most enjoyable typing experience you&#8217;ll ever have.\r\nThere is a membrane (Model M) and capacitive (Model F) version, the latter of which is more expensive but superior in terms of reliability and tactility.\r\nBuckling springs are ill-suited for gaming, however, as they are not optimized for rapid keypresses. Furthermore, the Model M keyboards only have 2-key rollover, which will block certain combinations of inputs from executing.',
  force: 70,
  bumpiness: 1,
  clickiness: 9,
  noise: 10
},
{
  name: 'Cherry MX Green',
  class: 'cherryMXgreen',
  description: 'The Cherry MX Green switch is a very heavy clicky switch&mdash;think of the Cherry MX Blue, but with a lot more resistance.\r\nIt is important to note that these are NOT the same as "Razer Green" switches. Razer&#8217;s keyboards utilize a Chinese clone of Cherry MX Blue switches.',
  force: 80,
  bumpiness: 0,
  clickiness: 6,
  noise: 8
}];
