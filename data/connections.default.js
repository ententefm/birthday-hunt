/* connections.default.js — 4 groups x 4 words. colour ∈ yellow|green|blue|purple
   Tip: make the purple group's hidden word point at a real hiding spot. */
HUNT.register('connections.default', {
  lives: 5,
  groups: [
    { category:"OUR BABIES",        color:"yellow", words:["LazyBum","Naughty","Zoomy","Queen"] },
    { category:"Your Hobbies",  color:"green",  words:["SLEEPING","PAINTING","JIGSAW","RUBIKS"] },
    { category:"Our Most Memorable Trips",  color:"blue",   words:["Koh Chang","Da Nang","Brooklyn","Central Park Zoo"] },
    { category:"Your Most Fav Boi",       color:"purple", words:["CALICO","GENTLEST","FLUFFIEST","LIL BOY"] }
  ]
});
