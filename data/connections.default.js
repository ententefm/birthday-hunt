/* connections.default.js — 4 groups x 4 words. colour ∈ yellow|green|blue|purple
   Tip: make the purple group's hidden word point at a real hiding spot. */
HUNT.register('connections.default', {
  lives: 5,
  groups: [
    { category:"OUR CATS",        color:"yellow", words:["Snowball","Pumpkin","Shadow","Biscuit"] },
    { category:"GAMES YOU PLAY",  color:"green",  words:["WORDLE","STRANDS","MINI","TANGO"] },
    { category:"IN THE BEDROOM",  color:"blue",   words:["PILLOW","LAMP","DRAWER","MIRROR"] },
    { category:"___ + BOX",       color:"purple", words:["LITTER","JUKE","SAND","MAIL"] }
  ]
});
