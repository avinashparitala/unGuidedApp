var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },

 
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  
    app.receivedEvent('deviceready');
  },

  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};


function Func1()
{
  document.getElementById('audio123').play();
}
function Func1Delay()
{
  setTimeout("Func1()",5000);
}