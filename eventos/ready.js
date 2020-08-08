module.exports = (client) => {
  
    client.user.setPresence( 
      {
        status: "online", 
        game: { 
          name: "/help para ayuda |Soy el capitán de la orden de las sobras!!", 
          url: null,
          type: "PLAYING"
        }
      }
    );
   
    
  }