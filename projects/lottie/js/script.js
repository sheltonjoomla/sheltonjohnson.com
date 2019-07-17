var anim;

//  HamBurger  Icon 
var animData = {
  container: document.getElementById('HamBurger'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  name:"click",
  rendererSettings: {
    progressiveLoad: true
    // preserveAspectRatio: 'xMidYMid slice' ?? What is this 
  },
  path: 'js/burger.json'
};


  //  Starting Big Wave  
var animBigWave = {
  container: document.getElementById('BigWave'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  name:"click",
  rendererSettings: {
    progressiveLoad: true
    // preserveAspectRatio: 'xMidYMid slice' ?? What is this 
  },
  path: 'js/bigWave.json'
  // path: 'js/topWave.json'
};

// Top Blue Wave 
var animTopWave = {
  container: document.getElementById('TopBigWave'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name:"click",
  rendererSettings: {
    progressiveLoad: true
    // preserveAspectRatio: 'xMidYMid slice' ?? What is this 
  },
  path: 'js/topWaves.json'
};
  

anim = bodymovin.loadAnimation(animData);
// anim = bodymovin.loadAnimation(animBigWave);
anim = bodymovin.loadAnimation(animTopWave);

//  Play Hamburger  
$("#HamBurger").click(function() {
  $("#HamBurger").toggleClass("PlayWave");
  if ($(this).hasClass("PlayWave") ){
    bodymovin.play();
  } else {
    bodymovin.stop();
  }
});

