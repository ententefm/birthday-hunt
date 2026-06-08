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
    { id:"c1", name:"Snowball", personality:"Mellow",   powerLevel:80, visits:174, color:"Solid White",  topGoodies:["Orange Cube","Giant Cushion","Snow Dome"], accent:"pink",   face:"#FFFFFF" },
    { id:"c2", name:"Pumpkin",  personality:"Cautious",  powerLevel:55, visits:96,  color:"Calico",       topGoodies:["Tunnel","Zanzibar Pole","Kotatsu"],        accent:"yellow", face:"#E9A23B" },
    { id:"c3", name:"Shadow",   personality:"Frisky",    powerLevel:120,visits:210, color:"Solid Black",  topGoodies:["Twirly Stand","Cardboard Café","Ball"],    accent:"blue",   face:"#3A3A3A" },
    { id:"c4", name:"Biscuit",  personality:"Lazybones", powerLevel:42, visits:64,  color:"Brown Tabby",  topGoodies:["Bagel Bed","Lacquered Bowl","Earthenware"],accent:"green",  face:"#C8853B" },
    // 5th slot: uploaded from the GALLERY (no camera). Rename / re-theme freely.
    { id:"c5", name:"A favourite throwback", source:"gallery", color:"From your gallery", accent:"purple", face:"#C9A0C9" }
  ],

  welcome: {
    title: "Happy Birthday! 🎂",
    body: "A few of the cats have hidden little surprises around the house — but they won't hand them over without a puzzle or two.<br><br>Solve each one, follow the clue to a hiding spot, and snap some selfies along the way. Ready?"
  },

  clues: {
    afterConnections: {
      riddle: "The hidden word was <b>BOX</b> 🎁<br>Find the pretty box on the shelf — the one that has never held cat litter.",
      keyword: "WHISKERS"
    },
    afterWordle: {
      riddle: "<b>PORCH</b> it is. 🌿<br>Something's tucked beside the plant out there, waiting in the morning light.",
      keyword: "SUNSHINE"
    },
    afterQueens: {
      riddle: "All the cats are home. 🐾<br>Your last surprise is waiting where the day begins — go check by the coffee."
    }
  },

  photoTasks: {
    catSelfies: { title:"Selfie patrol 📷", body:"Round up the troublemakers. Take a selfie with each cat you can find — they'll each get a page in your Catbook.", minRequired:1 },
    memory:     { title:"One for the books 💛", body:"Strike a pose right here — recreate that photo of us from way back. This one's for the memory." }
  },

  finale: {
    title: "Happy Birthday, my love 🎉",
    message: "You found them all. Every cat, every clue, every little thing hidden for you today. I hope it made you smile. ❤️",
    mainGiftHint: "(your big gift is at the final spot)"
  },

  // which data file is active for each puzzle
  active: { connections:"connections.default", wordle:"wordle.default", queens:"queens.board1" }
});
