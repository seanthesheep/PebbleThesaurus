var UI = require("ui");
var ajax = require("ajax");
var voice = require("ui/voice");
var vibe = require("ui/vibe");



var main = new UI.Card({
  title: "Thesaurus",
  scrollable: true,
  fullscreen: true,
  font: "Gothic 14",
  text: "Gothic 14",
});


voice.dictate('start', false, function(e) {
  if (e.err) {
    console.log('Error: ' + e.err);
    return;
   
  }
main.subtitle(e.transcription);
  
  
var word = e.transcription;



  
 
  
  ajax({ url: 'http://words.bighugelabs.com/api/2/905d0be099de0b4421447983d4a98fbb/'+word+'/json', type: 'json' },

       
      
       function(data) {
    
      var result = JSON.stringify(data);
      console.log('Received data.');
      vibe.vibrate('short');
      main.body(result);
    },
       
    function(error) {
      console.log('Error receiving thesaurus');  
      main.body("Could not receive thesaurus data");
    }
  );
}); 
             
main.show();
