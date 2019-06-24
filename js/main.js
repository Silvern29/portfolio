var app;
function initPixi() {
  app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
  document.body.appendChild(app.view);

  var image = new PIXI.Sprite.from("img/blockchain-4097126_1920_klein.jpg");
  image.width = window.innerWidth;
  image.height = window.innerHeight;
  app.stage.addChild(image);

  displacementSprite = new PIXI.Sprite.from("img/clouds.jpg");
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];

  app.renderer.view.style.transform = 'scale(1.02)';
  displacementSprite.scale.x = 4;
  displacementSprite.scale.y = 4;

  animate();
}

function animate() {
  displacementSprite.x += 8;
  displacementSprite.y += 3;
  requestAnimationFrame(animate);
}

if (document.documentElement.clientWidth > 822) {
  initPixi();
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var cStatus;

if (document.documentElement.clientWidth >= 822) {
  cStatus = 'large';
} else if (document.documentElement.clientWidth < 822) {
  cStatus = 'small';
}

let cReload = () => {
  var myUrl = window.location;
  window.location.replace(myUrl);
}

window.onresize = function() {
  if ((cStatus != 'small' && document.documentElement.clientWidth < 822) || (cStatus != 'large' && document.documentElement.clientWidth >= 822)) {
    cReload();
  }
}
