/* connections.default.js — 4 groups x 4 words. colour ∈ yellow|green|blue|purple
   Tip: make the purple group's hidden word point at a real hiding spot. */
HUNT.register('connections.default', {
  lives: 5,
  groups: [
    { category:"OUR CATS",        color:"yellow", words:["LazyBum","Naughty","Zoomy","Queen"] },
    { category:"GAMES YOU PLAY",  color:"green",  words:["GENSHIN","CROSSPLAY","JIGSAW","RUBIKS"] },
    { category:"Our Most Memorable Trips",  color:"blue",   words:["Koh Chang","Hanoi","Brooklyn","Central Park Zoo"] },
    { category:"Your Most Fav Boi",       color:"purple", words:["CALICO","GENTLEST","FLUFFIEST","LIL BOY"] }
  ]
});
