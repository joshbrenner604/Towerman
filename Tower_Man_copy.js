window.addEventListener("load",function()	{
 var Q = window.Q = Quintus({ development: true,
  		imagePath: "http://www.corsproxy.com/html5gametutorial.com/tower_man/images/",
  		audioPath: "http://www.corsproxy.com/html5gametutorial.com/tower_man/assets/",
  		dataPath: "http://www.corsproxy.com/html5gametutorial.com/tower_man/data/"
  		}).include("Sprites, Scenes, Input, 2D")
          .setup({ width: 640, height: 480 });
});

  // 3. Add in the default keyboard controls
  //    along with joypad controls for touch
  Q.input.keyboardControls();
  Q.input.joypadControls();

  // 4. Add in a basic sprite to get started
  Q.Sprite.extend("Player", {
    init: function(p) {

      this._super(p,{
        sheet:"player"
      });

      this.add("2d");
    }
  });

  // 5. Put together a minimal level
  Q.scene("level1",function(stage) {
    var player = stage.insert(new Q.Player({ x: 48, y: 48 }));
  });

  // 6. Load and start the level
  Q.load("sprites.png, sprites.json, level.json", function() {
    Q.compileSheets("sprites.png","sprites.json");
    Q.stageScene("level1");
  });

});