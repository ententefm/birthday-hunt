/* ============================================================
   manifest.js  —  EDIT ME (names, clues, keywords, cats, message)
   This is the main file you personalise. Photos are NOT stored here.
   ============================================================ */
HUNT.register('manifest', {
  player: { name: "Birthday Star" },

  // TEST MODE: set true (or add ?test to the URL) to make EVERY photo step accept a
  // gallery/file upload instead of opening the camera — handy for testing on a laptop.
  testMode: false,

  // Cats / Catbook pages. Each takes a selfie from the CAMERA by default.
  // Add  source:"gallery"  to a slot to make it upload from the gallery instead (no camera).
  // accent: pink | blue | green | yellow  (the Catbook label colour)
  cats: [
    { id:"c1", name:"Mimi", personality:"Lazybones",   powerLevel:80, visits:174, color:"Persian Black",  topGoodies:["By the Door","String","Sofa"], accent:"pink",   face:"#FFFFFF" },
    { id:"c2", name:"Jimki",  personality:"Queen",  powerLevel:55, visits:96,  color:"Persian Black",       topGoodies:["Paper Ball","Cat Tree","Bathroom"],        accent:"yellow", face:"#E9A23B" },
    { id:"c3", name:"Kochu",   personality:"Zoomy",    powerLevel:120,visits:210, color:"Persian Black",  topGoodies:["Yellow Ball","Carpet","Goblin Cave"],    accent:"blue",   face:"#3A3A3A" },
    { id:"c4", name:"Theo",  personality:"Naughty", powerLevel:42, visits:64,  color:"Tabby",  topGoodies:["String Toy","Cardboard","FOOOOD"],accent:"green",  face:"#C8853B" },
    // 5th slot: uploaded from the GALLERY (no camera). Rename / re-theme freely.
    { id:"c5", name:"Chico",  personality:"Gentlest", powerLevel:10000000, visits:10000000,  color:"Calico",  topGoodies:["Cat Tunnel","Rider Jacket","Couch"],accent:"lavender",  face:"#E6E6FA" }
  ],

  welcome: {
    title: "Happy Birthday! 🎂",
    body: "A few of the cats have hidden little surprises around the house — but they won't hand them over without a puzzle or two.<br><br>Solve each one, follow the clue to a hiding spot, and snap some selfies along the way. Ready?"
  },

  clues: {
    afterConnections: {
      riddle: "Go to the place which held our <b>BOOKS</b> 📕<br>. You will find your first codeword & something nice. ",
      keyword: "SUNFLOWER"
    },
    afterWordle: {
      riddle: "<b>AMBER</b> it is. 🌿<br>Someting holds an AMBER like thing you own. Find that to get your next codeword",
      keyword: "RING"
    },
    afterQueens: {
      riddle: "All the cats are home. 🐾<br>Your last surprise is waiting beside a heart shaped puzzle. "
    }
  },

  photoTasks: {
    catSelfies: { title:"Selfie patrol 📷", body:"Round up the troublemakers. Take a selfie with each cat you can find — they'll each get a page in your Catbook.", minRequired:1 },
    memory:     { title:"One for the books 💛", body:"Strike a pose right here right now! This one's for the memory." }
  },

  finale: {
    title: "Happy Birthday, my love 🎉",
    message: "You found them all. Every cat, every clue, every little thing hidden for you today. I hope it made you smile. ❤️",
    mainGiftHint: "(your big gift is at the final spot)"
  },

  // which data file is active for each puzzle
  active: { connections:"connections.default", wordle:"wordle.default", queens:"queens.board2" }
});
