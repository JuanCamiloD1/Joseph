module.exports = (client) => {
  
    client.user.setPresence( 
      {
        status: "online", 
        game: {
          name: "Viendo Jojo's Bizarre Adventure ",
          type: "STREAMING",
          url: "https://www.twitch.tv/juancadb1"
      }
      }
    );
   
    
  }