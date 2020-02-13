Germ = function(game, type, word, font, bounds, speed, onGrab, onDrop, context) {

    var germSprite;

    if      (word.length < 4)  germSprite = "sizeOneGerm";
    else if (word.length < 5)  germSprite = "sizeTwoGerm";
    else if (word.length < 7)  germSprite = "sizeThreeGerm";
    else if (word.length < 9) germSprite = "sizeFourGerm";
    else if (word.length < 10) germSprite = "sizeFiveGerm";
    else if (word.length < 13) germSprite = "sizeSixGerm";
    else if (word.length < 16) germSprite = "sizeSevenGerm";
    else                       germSprite = "sizeEightGerm";

    Phaser.Sprite.call(this, game, 0, 0, germSprite);

    this.setAnimations();

    this.game = game;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.wordType = type;
    this.word = this.game.add.text(0, 0, word, font);
    this.word.anchor.setTo(0.5, 0.5);
    this.word.alpha = 0;

    this.body.skipQuadTree = true;
    this.alpha = 0;
    this.anchor.setTo(0.5, 0.5);

    //Custom Fields
    this.boundsContainer  = bounds;
    this.deltaAngle       = 1.1;
    this.speed            = speed;
    this.angleTimer       = 0;
    this.velocityTimer    = 0;


    //Add some event listeners
    this.inputEnabled = true;
    this.events.onDragStart.add(onGrab, context);
    this.events.onDragStop. add(onDrop, context);
    this.events.onInputOver.add(function() { this.velocityTimer = 0; }, this);

};

Germ.prototype = Object.create(Phaser.Sprite.prototype);

Germ.prototype.constructor = Germ;

Germ.prototype.setAnimations = function() {

        if (this.key == 'sizeOneGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _A',
                                    '02_VIRUS _A',
                                    '03_VIRUS _A',
                                    '04_VIRUS _A',
                                    '05_VIRUS _A',
                                    '06_VIRUS _A'
                                ], 56, true, false);
            if (!this.game.device.touch)
                this.animations.play('rest');
        }
        else if (this.key == 'sizeTwoGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _B',
                                    '02_VIRUS _B',
                                    '03_VIRUS _B',
                                    '04_VIRUS _B',
                                    '05_VIRUS _B',
                                    '06_VIRUS _B',
                                    '07_VIRUS _B',
                                    '08_VIRUS _B',
                                    '09_VIRUS _B',
                                    '10_VIRUS _B',
                                    '11_VIRUS _B',
                                    '12_VIRUS _B',
                                    '13_VIRUS _B',
                                    '14_VIRUS _B',
                                    '15_VIRUS _B',
                                    '16_VIRUS _B',
                                    '17_VIRUS _B',
                                    '18_VIRUS _B',
                                    '19_VIRUS _B',
                                    '20_VIRUS _B',
                                    '21_VIRUS _B',
                                    '22_VIRUS _B',
                                    '23_VIRUS _B',
                                    '24_VIRUS _B',
                                    '25_VIRUS _B',
                                    '26_VIRUS _B'
                                ], 56, true, false);
            if (!this.game.device.touch)        
                this.animations.play('rest');
        }
        else if (this.key == 'sizeThreeGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _C',
                                    '02_VIRUS _C',
                                    '03_VIRUS _C',
                                    '04_VIRUS _C',
                                    '05_VIRUS _C',
                                    '06_VIRUS _C',
                                    '07_VIRUS _C',
                                    '08_VIRUS _C',
                                    '09_VIRUS _C',
                                    '10_VIRUS _C',
                                    '11_VIRUS _C',
                                    '12_VIRUS _C',
                                    '13_VIRUS _C',
                                    '14_VIRUS _C',
                                    '15_VIRUS _C',
                                    '16_VIRUS _C',
                                    '17_VIRUS _C',
                                    '18_VIRUS _C',
                                    '19_VIRUS _C',
                                    '20_VIRUS _C',
                                    '21_VIRUS _C',
                                    '22_VIRUS _C'
                                ], 56, true, false);
            if (!this.game.device.touch)
                this.animations.play('rest');
        }
        else if (this.key == 'sizeFourGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _D',
                                    '02_VIRUS _D',
                                    '03_VIRUS _D',
                                    '04_VIRUS _D',
                                    '05_VIRUS _D',
                                    '06_VIRUS _D',
                                    '07_VIRUS _D',
                                    '08_VIRUS _D',
                                    '09_VIRUS _D',
                                    '10_VIRUS _D',
                                    '11_VIRUS _D',
                                    '12_VIRUS _D',
                                    '13_VIRUS _D',
                                    '14_VIRUS _D',
                                    '15_VIRUS _D',
                                    '16_VIRUS _D',
                                    '17_VIRUS _D'
                                ], 56, true, false);
            if (!this.game.device.touch)
                this.animations.play('rest');
        }
        else if (this.key == 'sizeFiveGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _E',
                                    '02_VIRUS _E',
                                    '03_VIRUS _E',
                                    '04_VIRUS _E',
                                    '05_VIRUS _E',
                                    '06_VIRUS _E',
                                    '07_VIRUS _E',
                                    '08_VIRUS _E',
                                    '09_VIRUS _E',
                                    '10_VIRUS _E',
                                    '11_VIRUS _E',
                                    '12_VIRUS _E',
                                    '13_VIRUS _E',
                                    '14_VIRUS _E',
                                    '15_VIRUS _E',
                                    '16_VIRUS _E'
                                ], 56, true, false);
            if (!this.game.device.touch)
                this.animations.play('rest');
        }
        else if (this.key == 'sizeSixGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _F',
                                    '02_VIRUS _F',
                                    '03_VIRUS _F',
                                    '04_VIRUS _F',
                                    '05_VIRUS _F',
                                    '06_VIRUS _F',
                                    '07_VIRUS _F',
                                    '08_VIRUS _F',
                                    '09_VIRUS _F',
                                    '10_VIRUS _F',
                                    '11_VIRUS _F',
                                    '12_VIRUS _F',
                                    '13_VIRUS _F',
                                    '14_VIRUS _F',
                                    '15_VIRUS _F',
                                    '16_VIRUS _F',
                                    '17_VIRUS _F',
                                    '18_VIRUS _F',
                                    '19_VIRUS _F',
                                    '20_VIRUS _F',
                                    '21_VIRUS _F',
                                    '22_VIRUS _F'
                                ], 56, true, false);
            if (!this.game.device.touch)
                this.animations.play('rest');
        }
        else if (this.key == 'sizeSevenGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _G',
                                    '02_VIRUS _G',
                                    '03_VIRUS _G',
                                    '04_VIRUS _G',
                                    '05_VIRUS _G',
                                    '06_VIRUS _G',
                                    '07_VIRUS _G',
                                    '08_VIRUS _G',
                                    '09_VIRUS _G',
                                    '10_VIRUS _G',
                                    '11_VIRUS _G',
                                    '12_VIRUS _G',
                                    '13_VIRUS _G',
                                    '14_VIRUS _G',
                                    '15_VIRUS _G',
                                    '16_VIRUS _G',
                                    '17_VIRUS _G',
                                    '18_VIRUS _G',
                                    '19_VIRUS _G',
                                    '20_VIRUS _G',
                                    '21_VIRUS _G',
                                    '22_VIRUS _G'
                                ], 56, true, false);
            if (!this.game.device.touch)
                this.animations.play('rest');
        }
        else if (this.key == 'sizeEightGerm') {
            this.animations.add('rest',
                                [ '01_VIRUS _H',
                                    '02_VIRUS _H',
                                    '03_VIRUS _H',
                                    '04_VIRUS _H',
                                    '05_VIRUS _H',
                                    '06_VIRUS _H',
                                    '07_VIRUS _H',
                                    '08_VIRUS _H',
                                    '09_VIRUS _H',
                                    '10_VIRUS _H',
                                    '11_VIRUS _H',
                                    '12_VIRUS _H',
                                    '13_VIRUS _H',
                                    '14_VIRUS _H',
                                    '15_VIRUS _H',
                                    '16_VIRUS _H',
                                    '17_VIRUS _H',
                                    '18_VIRUS _H',
                                    '19_VIRUS _H',
                                    '20_VIRUS _H',
                                    '21_VIRUS _H',
                                    '22_VIRUS _H',
                                    '23_VIRUS _H',
                                    '24_VIRUS _H',
                                    '25_VIRUS _H',
                                    '26_VIRUS _H',
                                    '27_VIRUS _H'
                                ], 56, true, false);
            if (!this.game.device.touch)
                this.animations.play('rest');
        }
        else
        {
            throw new Error('Incorrect germ size given');
        }

};

Germ.prototype.moveRandom = function() {

    this.x = this.game.rnd.integerInRange(this.boundsContainer.x, this.boundsContainer.right  - this.width);
    this.y = this.game.rnd.integerInRange(this.boundsContainer.y, this.boundsContainer.bottom - this.height);   

};

Germ.prototype.enableInput = function() {

    this.input.enableDrag(true, false);

    if (this.game.device.iPad)
    {
        this.input.dragOffset.setTo(0, -50);
    }
    else
    {
        this.input.dragOffset.setTo(0, -30);
    }

};

Germ.prototype.updateWord = function() {

    this.word.x = this.body.center.x;
    this.word.y = this.body.center.y;

};
var Main = {};

Main.devicePixelRatio = window.devicePixelRatio === 2 ? 2 : 1;

Main.pos = function (value) {
    return value * Main.devicePixelRatio;
};

if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 0){
    Main.devicePixelRatio = 1;
}

console.log("window.devicePixelRatio: " + window.devicePixelRatio);

Main.Boot = function (game) 
{
    this.game = game;
};

Main.Boot.prototype =
{
    errorTime: 0,

    preload: function () {

        var type = Main.devicePixelRatio != 1 ? '_HD' : '_SD';

        this.game.load.crossOrigin = 'anonymous';

        this.game.load.image('vialEmpty', '//cdn.studiesweekly.com/online/gamesLibrary/assets/misspilled/img/loading/vile_empty' + type + '.png');
        this.game.load.image('vialFull',  '//cdn.studiesweekly.com/online/gamesLibrary/assets/misspilled/img/loading/vile_full'  + type + '.png');

        this.game.load.bitmapFont('GROBOLDpro', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/grobold.png', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/grobold.fnt');

    },

    create: function () {

        console.log("Boot state");

        if (localStorage.vocabLab === null)
        {
            console.log('Local storage null detected');
            localStorage.vocabLab = true;
        }

        if (localStorage.vocabLab == 'false')
            this.game.sound.mute = false;
        else
            this.game.sound.mute = true;

        //Remove for multitouch support
        this.game.input.maxPointers = 1;

        this.game.stage.backgroundColor = '#555555';
        this.game.stage.disableVisibilityChange = true;


        if (this.game.device.touch)
        // if (this.game.device.iPad || this.game.device.iPhone || this.game.device.iPhone4 || this.game.device.android)
        {
            // Main.devicePixelRatio = 1;
            console.log("Mobile detected");
        }

        if (Main.devicePixelRatio != 1)
        {
            console.log("High device-pixel ratio detected.");
            console.log("DPR: " + Main.devicePixelRatio);
            console.log(this.game.scale);
            this.game.scale.width = 960;
            this.game.scale.height = 570;
            this.game.scale.setSize();
        }

        this.errorTime = this.game.time.time + 4000;

        this.game.state.start('load');

    },

    update: function() {

        if (this.errorTime < this.game.time.time) {
            this.errorTime = this.game.time.time + 1000000000;
            this.displayErrorMessage();

        }

    },

    displayErrorMessage: function() {

        var text = this.game.add.text(this.game.width / 2, this.game.height / 2, 'Error- try reloading the page.', { font: '18px Arial' });
        text.anchor.setTo(0.5, 0.5);

    }

};

/*
To Support: IE, Chrome, FF, iPad
Other: Opera, Safari, Mobile Chrome, Android

Research:

Dictionaries and conjugations in Postgres
 http://www.postgresql.org/docs/9.1/static/textsearch-dictionaries.html - 12.6.5

Ask Ed about a demo for the administrators


TODO:

Add dynamic graphic switching
List of vocab words for this game
Implement real pausing of the count down, rather than hiding the pause button...


Waiting on Art Department:
    Win/Pause/Main/Load menus
    Feedback icons need to be ordered correctly
    SD wavepool frames need to be cropped


To Refactor:
    All text to allow for easy swapping for multi-lingual compatability
    Take another look at the hover behavior completely
    Target object

Optimizations:
    Reduce bitmap text pngs to minimum characters needed
    Compress audio files
    Compress images
    Crop feedback icons
    Separate animated from static
    Minify JS file


For testers to watch:
    Sound behavior
    Drag/Drop glitches/unexpected behavior
    Rejection animation glitches (pausing, trying to drag, etc)
    Glitching at low FPS
    Load times
    Word Spellings

For hang man:
    How will it be indicated to the kids how many words they have to solve?
    Indicate how many words have been solved and how many remain.
    If the award is performance based, what if the kid gets gold on the first word?  How will we expect them to finish the rest of the words?

*/


Main.Game = function(game) {

    this.game = game;

};

Main.Game.prototype = {

    //Control Variables
    isRejecting:  false,
    isPaused:     false,
    dropAreaFPS: 7,
    wavePoolFPS: 10,

    //Positioning Variables
    _controlsHeight: Main.pos(70),
    _goodTargetX: Main.pos(830),
    _badTargetX: 0,
    _wavePoolX: Main.pos(130),
    _wavePoolBoundsPadding: Main.pos(30),

    //Font styles
    _countTextStyle: { size: (Main.pos(38)), font: 'GROBOLDpro' },
    _germTextStyle:  { font: (Main.pos(18)) + 'px Arial' },
    _countdownStyle: { size: (Main.pos(52)), font: 'PURPLEGROBOLDpro' },

    //Germ movement variables
    _speed: Main.pos(60),
    _germsFPS: 56,
    _maxDeltaAngle: 1.1,
    _minDeltaAngle: 0.5,
    _minMovementUpdateTimer: 1000,
    _maxMovementUpdateTimer: 2500,
    _reduceToVelocity: Main.pos(15),
    _reduceVelocityEasing: Phaser.Easing.Sinusoidal.InOut,
    _reduceDurationEasing: Phaser.Easing.Quadratic.InOut,

    _sizeOneMax:    4,
    _sizeTwoMax:    5,
    _sizeThreeMax:  7,
    _sizeFourMax:  8,
    _sizeFiveMax:  13,
    _sizeSixMax:   16,
    _sizeSevenMax: 22,

    //Sounds
    backgroundMusic: Phaser.Sound,
    acceptSound:     Phaser.Sound,
    rejectSound:     Phaser.Sound,
    bubbleSound:     Phaser.Sound,
    grabSound:       Phaser.Sound,
    dropSound:       Phaser.Sound,
    countdownSound:  Phaser.Sound,
    fallSound:       Phaser.Sound,
    goSound:         Phaser.Sound,
    badOpen:         Phaser.Sound,
    badClose:        Phaser.Sound,
    goodOpen:        Phaser.Sound,
    goodClose:       Phaser.Sound,

    //Tween controls
    _acceptRejectAnimDuration:2000,
    _escapeSpeed:             1100,
    _countDownTime:           1100,
    _grabTweenSpeed:           100,
    _moveToCenterSpeed:       1500,
    _toNormalSpeed:            700,
    _moveOffSpeed:            3000,
    _moveQuickSpeed:           900,
    _highlightedWordHangTime: 3500,
    _centerX:                  Main.pos(480),
    _centerY:                  Main.pos(320),
    _countDownMoveEasing:   Phaser.Easing.Quadratic.Out,
    _countDownFadeEasing:   Phaser.Easing.Exponential.In,
    _grabTweenEasing:       Phaser.Easing.Linear.In,
    _toNormalEasing:        Phaser.Easing.Exponential.Out,
    _highlightEasing:       Phaser.Easing.Quadratic.Out,
    _moveToCenterEasing:    Phaser.Easing.Quadratic.Out,
    _moveOffEasing:         Phaser.Easing.Back.InOut,
    _moveInEasing:          Phaser.Easing.Back.InOut,

    //Game Elements
    badTarget:    Phaser.Sprite,
    goodTarget:   Phaser.Sprite,
    goodFeedback: Phaser.Sprite,
    badFeedback:  Phaser.Sprite,
    wavePool:     Phaser.Sprite,
    germGroup:    Phaser.Group,

    //Controls
    gameHeader:   Phaser.BitmapText,
    muteText:     Phaser.Text,
    pauseButton:  Phaser.Button,
    winButton:    Phaser.Button,

    //Pause Menu
    pauseMenuGroup: Phaser.Group,
    pauseText:      Phaser.BitmapText,
    buttonText:     Phaser.BitmapText,
    resumeButton:   Phaser.Button,
    toMenuButton:   Phaser.Button,
    muteButton:     Phaser.Button,
    restartButton:  Phaser.Button,
    tutorialButton: Phaser.Button,

    //Timer
    stopWatch: Phaser.Plugin,
    timer:     Phaser.BitmapText,

    //Data variables for keeping track of performance for achievements
    _correctPlacements: 0,
    _incorrectPlacements: 0,

    preload: function() {

        console.log("Game state");
        console.log("Game DPR: " + Main.devicePixelRatio);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.input.isGrabbingGerm = false;
        this.game.stage.backgroundColor = '#FFFFFF';

        //The order in which elements are created is important, as some elements must exist for others to be created.

        // Object creation happens here rather than in the "create" function
        // so that the countdown happens smoothly.

        this.createSounds();

        this.createWavePool();

        this.createTargets();

        this.createGerms();

        this.createControls();

        this.createFeedbacks();

        this.createPauseMenu();

    },

    create: function() {

        // Disable animations for touch devices -- improves performance
        if (this.game.device.touch) {
            this.game.world.forEach(function(item) {
                if (typeof item.animations !== 'undefined') {
                    item.animations.stop();
                }
            });
        }

        // this.game.add.button(200, 200, 'testButton', this.win, this, 'out', 'over', 'down');

        this.isPaused = false;
        this.countdownToBegin();

    },

    createTargets: function() {

        //Create Targets                   (type,   sprite,      openSound,     closeSound,    xPos,              xOffset of germ bounds)
        this.badTarget  = this.createTarget(false, 'badTarget', this.badOpen,  this.badClose,  this._badTargetX,  Main.pos(18));
        this.goodTarget = this.createTarget(true, 'goodTarget', this.goodOpen, this.goodClose, this._goodTargetX, Main.pos(16));

        this.badTarget.isHovering = false;
        this.goodTarget.isHovering = false;

    },

    createFeedbacks: function() {

        var type;

        type = Main.devicePixelRatio === 1 ? '' : 'HD_';

        this.goodFeedback = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'goodFeedback');
        this.badFeedback  = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'badFeedback');

        this.goodFeedback.animations.add('play',
                                         [
                                             type + 'correct_01',
                                             type + 'correct_02',
                                             type + 'correct_03',
                                             type + 'correct_04',
                                             type + 'correct_05',
                                             type + 'correct_06',
                                             type + 'correct_07',
                                             type + 'correct_08',
                                             type + 'correct_09',
                                             type + 'correct_10',
                                             type + 'correct_11',
                                             type + 'correct_12',
                                             type + 'correct_13',
                                             type + 'correct_14',
                                             type + 'correct_15',
                                             type + 'correct_16',
                                             type + 'correct_17',
                                             type + 'correct_18',
                                             type + 'correct_19',
                                             type + 'correct_20',
                                             type + 'correct_21'

                                         ], 20, true, false);

        this.badFeedback.animations.add('play',
                                         [
                                             type + 'incorrest_01',
                                             type + 'incorrest_02',
                                             type + 'incorrest_03',
                                             type + 'incorrest_04',
                                             type + 'incorrest_05',
                                             type + 'incorrest_06',
                                             type + 'incorrest_07',
                                             type + 'incorrest_08',
                                             type + 'incorrest_09',
                                             type + 'incorrest_10',
                                             type + 'incorrest_11',
                                             type + 'incorrest_12',
                                             type + 'incorrest_13',
                                             type + 'incorrest_14',
                                             type + 'incorrest_15',
                                             type + 'incorrest_16',
                                             type + 'incorrest_17',
                                             type + 'incorrest_18',
                                             type + 'incorrest_19',
                                             type + 'incorrest_20',
                                             type + 'incorrest_21'
                                         ], 20, true, false);

        this.goodFeedback.anchor.setTo(0.5, 0.5);
        this.badFeedback .anchor.setTo(0.5, 0.5);

        this.goodFeedback.scale.setTo(0, 0);
        this.badFeedback .scale.setTo(0, 0);

    },

    createWavePool: function() {

        this.wavePool = {};
        console.log(Main.devicePixelRatio);
        this.wavePool.background = this.game.add.sprite(this._wavePoolX, this._controlsHeight + (Main.pos(50)), 'wavePoolBackground');
        this.wavePool.waves = this.game.add.sprite(this._wavePoolX, this._controlsHeight, 'wavePool');

        //Prevents the sprite from being updated by the physics system
        this.wavePool.background.body = null;
        this.wavePool.waves.body = null;

        this.wavePool.germBounds = new Phaser.Rectangle(this.wavePool.waves.x, this.wavePool.waves.y + this._wavePoolBoundsPadding, this.wavePool.waves.width, this.wavePool.background.height);

        this.wavePool.waves.animations.add('rest',
                                           [
                                               "wave01",
                                               "wave02",
                                               "wave03",
                                               "wave04",
                                               "wave05",
                                               "wave06",
                                               "wave07",
                                               "wave08",
                                               "wave09",
                                               "wave10",
                                               "wave11",
                                               "wave12",
                                               "wave13",
                                               "wave14",
                                               "wave15",
                                               "wave16",
                                               "wave17",
                                               "wave18",
                                               "wave19",
                                               "wave20",
                                               "wave21",
                                               "wave22",
                                               "wave23",
                                               "wave24"
                                           ], this.wavePoolFPS, true, false);
            if (!this.game.device.touch)
                this.wavePool.waves.animations.play('rest');

    },

    createControls: function() {

        this.controlbar = this.game.add.sprite(0, 0, 'controlBar');

        this.pauseButton = this.game.add.button(Main.pos(30), Main.pos(10), 'pauseButton', this.pauseButtonPressed, this, 'over', 'rest', 'down', 'rest');
        this.pauseButton.scale.setTo(0, 0);

        this.muteButton = this.game.add.button(Main.pos(190), Main.pos(10), 'muteButton', this.muteButtonPressed, this, 'hover', 'rest', 'active', 'rest');

        if (this.game.sound.mute)
            this.muteButton.loadTexture('mutedButton', 'rest');
        
        //The text for the stopWatch plugin
        this.timer = this.game.add.bitmapText(Main.pos(744), Main.pos(12), this._countTextStyle.font, '00:00:00', this._countTextStyle.size);

        this.stopWatch = this.game.plugins.add(new Phaser.Plugin.StopWatch(this.game, this.game.plugins, this.timer));

    },

    createGerms: function() {

        var newGerm, i;

        this.germGroup = this.game.add.group();

        for (i = 0; i < this.game.wordData.words.length; i++) {

            newGerm = new Germ(this.game, true, this.game.wordData.words[i], this._germTextStyle, this.wavePool.germBounds, this._speed, this.onGrab, this.onDrop, this);//this.createGerm(true, this.game.wordData.words[i]);
            this.germGroup.add(newGerm);
            this.germGroup.add(newGerm.word);

        }

        for (i = 0; i < this.game.wordData.wrong_words.length; i++) {

            newGerm = new Germ(this.game, false, this.game.wordData.wrong_words[i], this._germTextStyle, this.wavePool.germBounds, this._speed, this.onGrab, this.onDrop, this);
            this.germGroup.add(newGerm);
            this.germGroup.add(newGerm.word);

        }

        //Initialize germ movements
        //Randomly place germs in the field
        //Initialize all tweens
        this.germGroup.forEach(function (germ) {

            if (germ instanceof Phaser.Sprite) {
                //We can't use the default Phaser.Sprite.angle field because that affects the sprites body rotation.
                this.game.physics.arcade.velocityFromAngle(germ.customAngle = this.game.rnd.angle(), this._speed, germ.body.velocity);
                germ.moveRandom();
                this.setGermTweens(germ);
            }

        }, this);

    },

    createPauseMenu: function () {

        this.pauseMenuGroup = this.game.add.group();

        this.pauseBackground = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + (Main.pos(30)), 'pauseBackground');
        this.pauseBackground.anchor.setTo(0.5, 0.5);
        this.pauseBackground.scale.setTo(0, 0);

        this.resumeButton = this.game.add.button(Main.pos(402), Main.pos(320), 'resumeButton', this.resumeButtonPressed,  this, 'hover', 'rest', 'active', 'rest');
        this.resumeButton.scale.setTo(0, 0);

        this.restartButton = this.game.add.button(Main.pos(485), Main.pos(390), 'restartButton', this.restartButtonPressed, this, 'hover', 'rest', 'active', 'rest');
        this.restartButton.scale.setTo(0, 0);

        this.toMenuButton = this.game.add.button(Main.pos(320),  Main.pos(390), 'menuButton', this.menuButtonPressed,  this, 'hover', 'rest', 'active', 'rest');
        this.toMenuButton.scale.setTo(0, 0);

        this.pauseMenuGroup.add(this.pauseBackground);
        this.pauseMenuGroup.add(this.restartButton);
        this.pauseMenuGroup.add(this.toMenuButton);
        this.pauseMenuGroup.add(this.resumeButton);

    },

    createSounds: function() {

        //Set the background music's volume to 10% of the rest of the sounds
        this.backgroundMusic = this.game.add.audio('background', 0.1, true);

        this.grabSound       = this.game.add.audio('squish');
        this.dropSound       = this.game.add.audio('pop01');
        this.bubbleSound     = this.game.add.audio('bubbleUp');
        this.fallSound       = this.game.add.audio('slideDown');
        this.goSound         = this.game.add.audio('multiTone');
        this.rejectSound     = this.game.add.audio('incorrect');
        this.acceptSound     = this.game.add.audio('correct');
        this.countdownSound  = this.game.add.audio('singleTone');
        this.badOpen         = this.game.add.audio('badOpen');
        this.badClose        = this.game.add.audio('badClose');
        this.goodOpen        = this.game.add.audio('goodOpen');
        this.goodClose       = this.game.add.audio('goodClose');
        this.winSound        = this.game.add.audio('win');

    },

    createTarget: function(type, sprite, openSound, closeSound, xPos, xOffset) {

        var self = this;

        var target = this.game.add.sprite(xPos, this._controlsHeight, sprite);
 
        this.game.physics.enable(target, Phaser.Physics.ARCADE);

        target.wordType = type;
        target.germBounds = new Phaser.Rectangle(target.x  + xOffset, target.y  + Main.pos(374), Main.pos(95), Main.pos(95));
        target.body.immovable = true;

        target.openSound = openSound;
        target.closeSound = closeSound;

        target.correctTimeout = 0;
        target.incorrectTimeout = 0;

        if (type === true) {
            target.animations.add('rest',
                                  [ '01_correct_container',
                                      '02_correct_container',
                                      '03_correct_container',
                                      '04_correct_container',
                                      '05_correct_container',
                                      '06_correct_container',
                                      '07_correct_container',
                                      '08_correct_container',
                                      '09_correct_container'  ], this.dropAreaFPS, true, false);
            target.animations.add('hover',
                                  [ '10_correct_container',
                                      '11_correct_container',
                                      '12_correct_container',
                                      '13_correct_container',
                                      '14_correct_container',
                                      '15_correct_container',
                                      '16_correct_container',
                                      '17_correct_container',
                                      '18_correct_container'  ], this.dropAreaFPS, true, false);
            target.animations.add('correct',
                                  [ '19_correct_container',
                                      '20_correct_container',
                                      '21_correct_container',
                                      '22_correct_container',
                                      '23_correct_container',
                                      '24_correct_container',
                                      '25_correct_container',
                                      '26_correct_container',
                                      '27_correct_container'  ], this.dropAreaFPS, true, false);
            target.animations.add('incorrect',
                                  [ '28_correct_container',
                                      '29_correct_container',
                                      '30_correct_container',
                                      '31_correct_container',
                                      '32_correct_container',
                                      '33_correct_container',
                                      '34_correct_container',
                                      '35_correct_container',
                                      '36_correct_container'  ], this.dropAreaFPS, true, false);
            if (!this.game.device.touch)
                target.animations.play('rest');
        }
        else if (type === false) {
            target.animations.add('rest',
                                  [ '01_incorrect_container',
                                      '02_incorrect_container',
                                      '03_incorrect_container',
                                      '04_incorrect_container',
                                      '05_incorrect_container',
                                      '06_incorrect_container',
                                      '07_incorrect_container',
                                      '08_incorrect_container',
                                      '09_incorrect_container'  ], this.dropAreaFPS, true, false);
            target.animations.add('hover',
                                  [ '10_incorrect_container',
                                      '11_incorrect_container',
                                      '12_incorrect_container',
                                      '13_incorrect_container',
                                      '14_incorrect_container',
                                      '15_incorrect_container',
                                      '16_incorrect_container',
                                      '17_incorrect_container',
                                      '18_incorrect_container',
                                      '19_incorrect_container'  ], this.dropAreaFPS, true, false);
            target.animations.add('correct',
                                  [ '20_incorrect_container',
                                      '21_incorrect_container',
                                      '22_incorrect_container',
                                      '23_incorrect_container',
                                      '24_incorrect_container',
                                      '25_incorrect_container',
                                      '26_incorrect_container',
                                      '27_incorrect_container',
                                      '28_incorrect_container',
                                      '29_incorrect_container'  ], this.dropAreaFPS, true, false);
            target.animations.add('incorrect',
                                  [ '30_incorrect_container',
                                      '31_incorrect_container',
                                      '32_incorrect_container',
                                      '33_incorrect_container',
                                      '34_incorrect_container',
                                      '35_incorrect_container',
                                      '36_incorrect_container',
                                      '37_incorrect_container',
                                      '38_incorrect_container'  ], this.dropAreaFPS, true, false);
            if (!this.game.device.touch)
                target.animations.play('rest');
        }
        else
        {
            throw new Error('Unrecognized target type');
        }

        //Used for hover behavior
        target.animations.getAnimation('hover').hasPlayed = false;
        
        target.handleGerm = function(germ) {

            if (germ.wordType == this.wordType)
            {
                clearTimeout(this.correctTimeout);
                clearTimeout(this.incorrectTimeout);

                self.badFeedback.animations.stop('play');
                self.badFeedback.scale.setTo(0, 0);
                self.goodFeedback.animations.stop('play');
                self.goodFeedback.scale.setTo(0, 0);

                self.acceptSound.play();
                self.goodOpen.stop();
                self.badOpen.stop();

                if (!this.game.device.touch) {
                    this.animations.play('correct');
                    self.goodFeedback.animations.play('play');
                }
                self.goodFeedback.scale.setTo(0.5, 0.5);

                this.correctTimeout = setTimeout(function() {

                    if (!self.game.device.touch) {
                        target.animations.getAnimation('correct').stop();
                        target.animations.play('rest');
                    }

                }, self._acceptRejectAnimDuration);

                setTimeout(function() {
                    if (!self.game.device.touch)
                        self.goodFeedback.animations.stop('play');
                    self.goodFeedback.scale.setTo(0, 0);

                }, self._acceptRejectAnimDuration);

                this.acceptGerm(germ);
            }
            else 
            {
                clearTimeout(this.correctTimeout);
                clearTimeout(this.incorrectTimeout);

                if (!this.game.device.touch)
                    self.badFeedback.animations.stop('play');
                self.badFeedback.scale.setTo(0, 0);
                if (!this.game.device.touch)
                    self.goodFeedback.animations.stop('play');
                self.goodFeedback.scale.setTo(0, 0);

                self.rejectSound.play();
                self.goodOpen.stop();
                self.badOpen.stop();
                if (!this.game.device.touch)
                    this.animations.play('incorrect');
                if (!this.game.device.touch)
                    self.badFeedback.animations.play('play');
                self.badFeedback.scale.setTo(0.5, 0.5);

                this.incorrectTimeout = setTimeout(function() {
                    if (!self.game.device.touch) {
                        target.animations.getAnimation('incorrect').stop();
                        target.animations.play('rest');
                    }

                }, self._acceptRejectAnimDuration);

                setTimeout(function() {
                    if (!self.game.device.touch)
                        self.badFeedback.animations.stop('play');
                    self.badFeedback.scale.setTo(0, 0);

                }, self._acceptRejectAnimDuration);

                this.rejectGerm(germ, self.germGroup.getFirstDead());
            }

            if (target.animations.getAnimation('hover').isPlaying)
                target.animations.getAnimation('hover').stop();

            if (target.animations.getAnimation('rest').isPlaying)
                target.animations.getAnimation('rest').stop();

        };

        target.acceptGerm = function(germ) {

            germ.alive = false;
            germ.boundsContainer = this.germBounds;
            germ.scale.setTo(0.25, 0.25);
            germ.body.moves = true;
            germ.input.disableDrag();
            self.testWin();


            germ.word.scale.setTo(0.4, 0.4);
            germ.word.alpha = 0;

        };

        target.rejectGerm = function(rejectedGerm, releasedGerm) {

            self.isRejecting = true;

            self.germGroup.forEach(function(germ) {

                if (germ instanceof Phaser.Sprite)
                    germ.input.disableDrag();

            });
            
            rejectedGerm.anchor.x = 0.5;
            rejectedGerm.anchor.y = 0.5;

            rejectedGerm.tweens.moveToCenter.start();
            rejectedGerm.tweens.highlight.start().onComplete.addOnce(function() {

                self.germGroup.forEach(function(germ) {

                    if (germ instanceof Phaser.Sprite)
                    {
                        if (germ.boundsContainer === self.wavePool.germBounds && germ !== rejectedGerm)
                        {
                            germ.body.moves = false;
                            germ.tweens.moveOffStage.start();//.onStart.add(function() { self.fallSound.play() });
                        }
                    }

                });

                if (releasedGerm !== null)
                {
                    releasedGerm.revive();
                    releasedGerm.body.moves = false;
                    releasedGerm.tweens.escape.delay(2000).start();
                    releasedGerm.tweens.toNormalSize.delay(2000).start();
                    releasedGerm.boundsContainer = self.wavePool.germBounds;
                    self.testWin();
                }

                rejectedGerm.tweens.moveOffStageQuick.delay(self._highlightedWordHangTime).start().onStart.addOnce(function() {
                    if (releasedGerm !== null)
                        releasedGerm.tweens.moveOffStageQuick.start();
                    self.fallSound.play();
                });
                rejectedGerm.tweens.toNormalSize.delay(self._highlightedWordHangTime).start().onComplete.addOnce(function() {
                
                    self.bubbleSound.play();
                    rejectedGerm.anchor.x = 0;
                    rejectedGerm.anchor.y = 0;

                    self.germGroup.forEach(function(germ) {

                        if (germ instanceof Phaser.Sprite)
                        {
                            if (germ.boundsContainer === self.wavePool.germBounds)
                            {
                                germ.tweens.moveInStage.start().onComplete.addOnce(function () {

                                    germ.enableInput();

                                    self.isRejecting = false;

                                    self.germGroup.forEach(function(germ) {
                                        if (germ instanceof Phaser.Sprite)
                                            germ.body.moves = true;
                                    });

                                }); // end onComplete
                            } // end if
                        }

                    }); // end foreach

                }); // end onComplete

            }); // end on Compelte

        }; // end function

        target.hover = function() {

            if (this.animations.getAnimation('rest').isPlaying)
                this.animations.getAnimation('rest').stop();

            if (!this.animations.getAnimation('hover').isPlaying && !this.animations.getAnimation('hover').hasPlayed) 
            {
                this.animations.play('hover');
                this.animations.getAnimation('hover').hasPlayed = true;
                this.openSound.play();
            }

        };

        target.stopHover = function() {

            if (this.animations.getAnimation('hover').isPlaying) 
                this.animations.getAnimation('hover').stop();

            if (!this.animations.getAnimation('rest').isPlaying) 
            {
                this.closeSound.play();
                if (!this.game.device.touch)
                    this.animations.play('rest');
            }

            this.animations.getAnimation('hover').hasPlayed = false;

        };

        return target;

    },

    countdownToBegin: function() {

        var that, one, two, three, go, createElement;

        that = this;

        createElement = function(text) {

            var obj;

            obj = that.game.add.bitmapText(that.game.world.centerX, that.game.world.centerY, that._countdownStyle.font, text, that._countdownStyle.size);
            // obj.anchor.setTo(0.5, 0.5);
            obj.alpha = 0;
            obj.tween = that.game.add.tween(obj).to({ y: (that.game.world.centerY) - (Main.pos(100)) }, that._countDownTime, that._countDownEasing);
            obj.tween.onStart.add(function() {
                obj.alpha = 1;
                that.game.add.tween(obj).to({ alpha: 0 }, that._countDownTime, Phaser.Easing.Exponential.In, true);
                that.countdownSound.play();
            });

            return obj;

        };

        go    = createElement('Go!');
        one   = createElement('1');
        two   = createElement('2');
        three = createElement('3');

        three.tween.onComplete.add(function () { two.tween.start(); });
        two  .tween.onComplete.add(function () { one.tween.start(); });
        one  .tween.onComplete.add(function () { go .tween.start(); });
        go   .tween.onStart   .add(function () {
            go.alpha = 1;
            that.goSound.play();
            that.game.add.tween(go).to({ alpha: 0 }, that._countDownTime, Phaser.Easing.Exponential.In, true);
            that.pauseButton.scale.setTo(1, 1);
            that.startGame();
        });

        three.tween.delay(1000).start();

    },

    startGame: function() {

        this.stopWatch.start();

        this.germGroup.forEach(function(germ) {

            if(germ instanceof Phaser.Sprite)
            {
                germ.tweens.fadeIn.start();
                germ.enableInput();
                germ.body.moves = true;
            }

        });

        var self = this;

        setTimeout(function() {
            self.backgroundMusic.play();
        }, 1000);

    },

    setGermTweens: function(germ) {

        var that = this;

        germ.tweens = {};

        //For germ movements
        germ.tweens.reduceDelay       = this.game.add.tween(germ.animations.getAnimation('rest')).to({ delay: 1000 / (that._germsFPS / 4) }, 0, this._reduceDurationEasing);
        germ.tweens.reduceSpeed       = this.game.add.tween(germ).to({ speed: this._reduceToVelocity }, 0, this._reduceVelocityEasing);

        germ.tweens.fadeIn            = this.game.add.tween(germ)      .to({alpha: 1},                     that._countDownTime,  that._countDownMoveEasing);
        germ.tweens.grab              = this.game.add.tween(germ.scale).to({x: 1.5, y: 1.5},               that._grabTweenSpeed, that._grabTweenEasing);
        germ.tweens.drop              = this.game.add.tween(germ.scale).to({x: 1.0, y: 1.0},               that._grabTweenSpeed, that._grabTweenEasing);
        germ.tweens.toNormalSize      = this.game.add.tween(germ.scale).to({x: 1.0, y: 1.0},               that._toNormalSpeed,  that._toNormalEasing);
        germ.tweens.highlight         = this.game.add.tween(germ.scale).to({x: 2,   y: 2},                 that._highlightSpeed, that._highlightEasing);
        germ.tweens.moveInStage       = this.game.add.tween(germ)      .to({
                                                                              x: this.game.rnd.integerInRange(germ.boundsContainer.x + (germ.width / 2) + 50, germ.boundsContainer.right - (germ.width / 2) - 50), // TODO
                                                                              y: this.game.rnd.integerInRange(germ.boundsContainer.y + (germ.height / 2) + 50, germ.boundsContainer.bottom - (germ.height / 2) - 50) // TODO
                                                                           },                          that._moveQuickSpeed, that._moveInEasing);

        germ.tweens.moveToCenter      = this.game.add.tween(germ).to({x: that._centerX, y: that._centerY},         that._tweenSpeed,     that._moveToCenterEasing);
        germ.tweens.moveOffStage      = this.game.add.tween(germ).to({y: '+' + (Main.pos(500))}, that._moveOffSpeed,   that._moveOffEasing);
        germ.tweens.moveOffStageQuick = this.game.add.tween(germ).to({y: '+' + (Main.pos(500))}, that._moveQuickSpeed, that._moveOffEasing);

        germ.tweens.escape            = this.game.add.tween(germ).to({x: germ.wordType === true ? ((that.goodTarget.x - (germ.width / 2)) - (Main.pos(30))) : (that.badTarget.width + (germ.width / 2) + (Main.pos(30))), y: (Main.pos(430)) },that._escapeSpeed,    that._moveInEasing);

        //This tweens the word along with the rest of the germ
        germ.tweens.escape.onStart.add(function() { that.game.add.tween(germ.word).to({ alpha: 1 }, that._escapeSpeed,   that._grabTweenEasing, true); });
        germ.tweens.fadeIn.onStart.add(function() { that.game.add.tween(germ.word).to({ alpha: 1 }, that._countDownTime, that._grabTweenEasing, true); });

        germ.tweens.grab        .onStart.add(function() { if (germ.boundsContainer === that.wavePool.germBounds) that.game.add.tween(germ.word.scale).to({x: 1.5, y: 1.5 }, that._grabTweenSpeed,  that._grabTweenEasing,   true); });
        germ.tweens.drop        .onStart.add(function() { if (germ.boundsContainer === that.wavePool.germBounds) that.game.add.tween(germ.word.scale).to({x:   1, y:   1 }, that._grabTweenSpeed,  that._grabTweenEasing,   true); });
        germ.tweens.toNormalSize.onStart.add(function() { if (germ.boundsContainer === that.wavePool.germBounds) that.game.add.tween(germ.word.scale).to({x:   1, y:   1 }, that._toNormalSpeed,   that._toNormalEasing,    true); });
        germ.tweens.highlight   .onStart.add(function() { if (germ.boundsContainer === that.wavePool.germBounds) that.game.add.tween(germ.word.scale).to({x:   2, y:   2 }, that._highlightSpeed,  that._highlightEasing,   true); });

    },

    update: function() {

        if (this.isPaused === false) {

            this.germGroup.forEach(function (germ) {

                if (germ instanceof Phaser.Sprite) {
                    germ.updateWord();

                    if (germ.body.moves) {
                        this.updateGermMovement(germ);
                        this.updateGermCollision(germ);
                    }

                }

            }, this);

            if (this.game.input.isGrabbingGerm)
                this.checkForHover();

        }
        

    },

    updateGermCollision: function(germ) {

        //Custom collision checking.  This is more optimized than Phaser's collision checking and does exactly what I need.

        if (germ.body.y < germ.boundsContainer.y) 
        {
            germ.customAngle *= -1;
            germ.body.y = germ.boundsContainer.y;
            this.updateGermMovement(germ);
        } 
        else if (germ.body.bottom > germ.boundsContainer.bottom)
        {
            germ.customAngle *= -1;
            germ.body.y = germ.boundsContainer.bottom - germ.height;
            this.updateGermMovement(germ);
        }

        if (germ.body.x < germ.boundsContainer.x) 
        {
            germ.customAngle = 180 - germ.customAngle;
            germ.body.x = germ.boundsContainer.x;
            this.updateGermMovement(germ);
        } 
        else if (germ.body.right > germ.boundsContainer.right) 
        {
            germ.customAngle = 180 - germ.customAngle;
            germ.body.x = germ.boundsContainer.right - germ.width;
            this.updateGermMovement(germ);
        }

    },

    updateGermMovement: function(germ) {

        //Calculate the new velocity after the change to the germ's direction
        this.game.physics.arcade.velocityFromAngle((germ.customAngle += germ.deltaAngle) % 360, germ.speed, germ.body.velocity);

        if (this.game.time.now > germ.angleTimer) 
        {
            germ.deltaAngle = this.game.rnd.realInRange(this._minDeltaAngle, this._maxDeltaAngle) * this.game.math.randomSign();
            germ.angleTimer = this.game.time.now + this.game.rnd.integerInRange(this._minMovementUpdateTimer, this._maxMovementUpdateTimer);
        }

        if (this.game.time.now > germ.velocityTimer) 
        {
            germ.speed = this._speed;
            germ.animations.getAnimation('rest').delay = 1000 / this._germsFPS;
            var newTime = this.game.rnd.integerInRange(this._minMovementUpdateTimer, this._maxMovementUpdateTimer);
            germ.velocityTimer = this.game.time.now + newTime;
            germ.tweens.reduceDelay._duration = newTime;
            germ.tweens.reduceSpeed._duration = newTime;
            germ.tweens.reduceSpeed.start();
            germ.tweens.reduceDelay.start();
        }

    },

    checkForHover: function() {

        if (this.game.input.activePointer.x < this.badTarget.body.right) {
            this.badTarget.isHovering = true;
            this.badTarget.hover();
        }

        else if (this.game.input.activePointer.x > this.goodTarget.x) {
            this.goodTarget.isHovering = true;
            this.goodTarget.hover();
        }

        else
        {
            if (this.goodTarget.isHovering) {
                this.goodTarget.isHovering = false;
                this.goodTarget.stopHover();
            }
            if (this.badTarget.isHovering) {
                this.badTarget.isHovering = false;
                this.badTarget.stopHover();
            }
        }

    },

    testWin: function() {

        if (this.germGroup.iterate('boundsContainer', this.wavePool.germBounds, Phaser.Group.RETURN_TOTAL) < 1)
            this.win();
            
    },

    win: function() {

        var self = this;

        this.stopWatch.stop();

        this.game.winTime = this.stopWatch.currentTime;
        this.game.winTimeText = this.stopWatch.getFormattedTime();

        if (!this.game.device.touch) {
            this.goodTarget  .play('correct');
            this.badTarget   .play('correct');
            this.goodFeedback.play('play');
        }

        this.winSound.play();
        this.acceptSound.stop();

        // this.game.add.tween(this.timer.anchor).to({x: 0.5, y: 0.5}, 1000, Phaser.Easing.Linear.In, true);
        this.game.add.tween(this.timer).to({x: this.game.world.centerX - Main.pos(160), y: this.game.world.centerY - Main.pos(20)}, 1000, Phaser.Easing.Linear.In, true);
        this.game.add.tween(this.timer.scale).to({x: 2, y: 2}, 1000, Phaser.Easing.Linear.In, true);

        setTimeout(function() {
            self.game.state.start('win');
        }, 1);

    },

    onGrab: function(germ) {

        this.game.input.isGrabbingGerm = true;

        germ.tweens.grab.start();
        this.grabSound.play();
        germ.body.moves = false;

        germ.bringToTop();
        this.germGroup.bringToTop(germ.word);

    },

    onDrop: function(germ) {

        this.game.input.isGrabbingGerm = false;

        if (this.game.input.activePointer.x < this.badTarget.body.right) 
            this.badTarget.handleGerm(germ);

        else if (this.game.input.activePointer.x > this.goodTarget.x) 
            this.goodTarget.handleGerm(germ);

        else 
        {
            germ.tweens.drop.start();
            germ.body.moves = true;
            this.dropSound.play();
        }

    },

    pauseButtonPressed: function() {

        this.game.tweens.pauseAll();

        this.isPaused = true;

        this.pauseButton.inputEnabled = false;
        this.pauseButton.alpha = 0.5;
        this.resumeButton.frameName = 'rest';


        this.pauseTime = this.game.time.now;

        this.germGroup.forEach(function(germ) {

            if(germ instanceof Phaser.Sprite)
            {
                germ.body.moves = false;
                germ.word.alpha = 0;
                germ.alpha = 0;
                germ.input.disableDrag();
            }

        }, this);

        this.stopWatch.stop();

        this.togglePauseMenu(1);

    },

    resumeButtonPressed: function() {

        this.game.tweens.resumeAll();

        this.isPaused = false;

        this.pauseButton.inputEnabled = true;
        this.pauseButton.alpha = 1;
        this.pauseButton.frameName = 'rest';

        this.pauseEllapsedTime = this.game.time.now - this.pauseTime;

        this.germGroup.forEach(function (germ) {

            if (germ instanceof Phaser.Sprite)
            {
                germ.alpha = 1;

                if (!this.isRejecting)
                {
                    if (germ.boundsContainer === this.wavePool.germBounds)
                        germ.enableInput();
                    germ.body.moves = true;
                    germ.angleTimer += this.pauseEllapsedTime;
                    germ.velocityTimer += this.pauseEllapsedTime;
                }

                if (germ.boundsContainer === this.wavePool.germBounds)
                {
                    germ.word.alpha = 1;
                }
            }

        }, this);

        this.stopWatch.start();

        this.togglePauseMenu(0);

    },

    menuButtonPressed: function() {

        this.backgroundMusic.stop();
        this.game.state.start('menu');

    },

    muteButtonPressed: function () {

        this.game.sound.mute = !this.game.sound.mute;
        localStorage.vocabLab = this.game.sound.mute;
        if (this.game.sound.mute)
        {
            this.muteButton.loadTexture('mutedButton');
        }
        else
        {
            this.muteButton.loadTexture('muteButton');
        }

    },

    restartButtonPressed: function() {

        this.backgroundMusic.stop();
        this.game.state.start('game');

    },

    togglePauseMenu: function(scale) {

        this.resumeButton    .scale.setTo(scale, scale);
        this.pauseBackground .scale.setTo(scale, scale);
        this.toMenuButton    .scale.setTo(scale, scale);
        this.restartButton   .scale.setTo(scale, scale);

    }
};
Main.Load = function(game) {

    this.game = game;
    this.ready = false;

};

Main.Load.prototype = {

    fullVial:  Phaser.Sprite,
    emptyVial: Phaser.Sprite,
    loadText: Phaser.BitmapText,
    misspilled_assets: '//cdn.studiesweekly.com/online/gamesLibrary/assets/misspilled/',

    preload: function() {

        console.log("Preload state");

        this.game.stage.backgroundColor = '#000000';

        this.game.load.bitmapFont('PURPLEGROBOLDpro', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/PurpleGrobold.png', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/PurpleGrobold.fnt');

        this.loadText = this.game.add.bitmapText(this.game.world.centerX - Main.pos(115), this.game.world.centerY - (Main.pos(75)), 'GROBOLDpro', 'Loading...', Main.pos(55));
        // this.loadText.anchor.setTo(0.5, 0.5);

        this.fullVial  = this.game.add.sprite(this.game.world.centerX - Main.pos(120), this.game.world.centerY, 'vialFull');
        this.emptyVial = this.game.add.sprite(this.game.world.centerX - Main.pos(120), this.game.world.centerY, 'vialEmpty');

        this.game.load.setPreloadSprite(this.fullVial);


        // ***********
        // LOAD IMAGES
        // ***********

        var type = Main.devicePixelRatio != 1 ? '_HD' : '_SD';

        console.log("Loading " + type + " Graphics");

        // Controls
        this.game.load.image('controlBar', this.misspilled_assets + 'img/control_area' + type + '.png');
        this.game.load.atlasXML('pauseButton', this.misspilled_assets + 'img/buttons/pause_button' + type + '.png', this.misspilled_assets + 'img/buttons/pause_button' + type + '.xml');
        this.game.load.atlasXML('muteButton',  this.misspilled_assets + 'img/buttons/mute_button'  + type + '.png', this.misspilled_assets + 'img/buttons/mute_button'  + type + '.xml');
        this.game.load.atlasXML('mutedButton', this.misspilled_assets + 'img/buttons/muted_button' + type + '.png', this.misspilled_assets + 'img/buttons/muted_button' + type + '.xml');

        // Background
        this.game.load.image('wavePoolBackground', this.misspilled_assets + 'img/wave_background' + type + '.png');
        this.game.load.atlasXML('wavePool', this.misspilled_assets + 'img/wave_pool' + type + '.png', this.misspilled_assets + 'img/wave_pool' + type + '.xml');

        // Germs
        this.game.load.atlasXML('sizeOneGerm',   this.misspilled_assets + 'img/germs/size_one'   + type + '.png', this.misspilled_assets + 'img/germs/size_one'   + type + '.xml');
        this.game.load.atlasXML('sizeTwoGerm',   this.misspilled_assets + 'img/germs/size_two'   + type + '.png', this.misspilled_assets + 'img/germs/size_two'   + type + '.xml');
        this.game.load.atlasXML('sizeThreeGerm', this.misspilled_assets + 'img/germs/size_three' + type + '.png', this.misspilled_assets + 'img/germs/size_three' + type + '.xml');
        this.game.load.atlasXML('sizeFourGerm',  this.misspilled_assets + 'img/germs/size_four'  + type + '.png', this.misspilled_assets + 'img/germs/size_four'  + type + '.xml');
        this.game.load.atlasXML('sizeFiveGerm',  this.misspilled_assets + 'img/germs/size_five'  + type + '.png', this.misspilled_assets + 'img/germs/size_five'  + type + '.xml');
        this.game.load.atlasXML('sizeSixGerm',   this.misspilled_assets + 'img/germs/size_six'   + type + '.png', this.misspilled_assets + 'img/germs/size_six'   + type + '.xml');
        this.game.load.atlasXML('sizeSevenGerm', this.misspilled_assets + 'img/germs/size_seven' + type + '.png', this.misspilled_assets + 'img/germs/size_seven' + type + '.xml');
        this.game.load.atlasXML('sizeEightGerm', this.misspilled_assets + 'img/germs/size_eight' + type + '.png', this.misspilled_assets + 'img/germs/size_eight' + type + '.xml');

        // Targets
        this.game.load.atlasXML('goodTarget',   this.misspilled_assets + 'img/drop_targets/Good'        + type + '.png', this.misspilled_assets + 'img/drop_targets/Good'        + type + '.xml');
        this.game.load.atlasXML('badTarget',    this.misspilled_assets + 'img/drop_targets/Bad'         + type + '.png', this.misspilled_assets + 'img/drop_targets/Bad'         + type + '.xml');
        this.game.load.atlasXML('goodFeedback', this.misspilled_assets + 'img/feedback_icons/correct'   + type + '.png', this.misspilled_assets + 'img/feedback_icons/correct'   + type + '.xml');
        this.game.load.atlasXML('badFeedback',  this.misspilled_assets + 'img/feedback_icons/incorrect' + type + '.png', this.misspilled_assets + 'img/feedback_icons/incorrect' + type + '.xml');

        // Feedback icons
        this.game.load.atlasXML('goodFeedback', this.misspilled_assets + 'img/feedback_icons/correct'   + type + '.png', this.misspilled_assets + 'img/feedback_icons/correct'   + type + '.xml');
        this.game.load.atlasXML('badFeedback',  this.misspilled_assets + 'img/feedback_icons/incorrect' + type + '.png', this.misspilled_assets + 'img/feedback_icons/incorrect' + type + '.xml');

        // Pause screen
        this.game.load.image('pauseBackground',  this.misspilled_assets + 'img/pause_screen/pause_screen_splash_title' + type + '.png');
        this.game.load.atlasXML('resumeButton',  this.misspilled_assets + 'img/pause_screen/resume_button'  + type + '.png', this.misspilled_assets + 'img/pause_screen/resume_button'  + type + '.xml');
        this.game.load.atlasXML('restartButton', this.misspilled_assets + 'img/pause_screen/restart_button' + type + '.png', this.misspilled_assets + 'img/pause_screen/restart_button' + type + '.xml');
        this.game.load.atlasXML('menuButton',    this.misspilled_assets + 'img/pause_screen/menu_button'    + type + '.png', this.misspilled_assets + 'img/pause_screen/menu_button'    + type + '.xml');

        // Win screen
        this.game.load.image('winFrameBox',    this.misspilled_assets + 'img/win_screen/frame_box' + type + '.png');
        this.game.load.image('coinAward',      this.misspilled_assets + 'img/win_screen/coin' + type + '.png');
        this.game.load.image('coinIcon',       this.misspilled_assets + 'img/win_screen/coin_small' + type + '.png');
        this.game.load.image('coinAwardSpace', this.misspilled_assets + 'img/win_screen/coin_award_space' + type + '.png');
        this.game.load.bitmapFont('award_numbers', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/award_times.png', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/award_times.fnt');
        this.game.load.bitmapFont('blackWhiteGroboldProNumbers', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/white_black_numbers2.png', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/white_black_numbers2.fnt');
        this.game.load.bitmapFont('highscore_numbers', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/highscore_numbers.png', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/highscore_numbers.fnt');
        this.game.load.bitmapFont('highscore_label', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/highscore_label.png', '//cdn.studiesweekly.com/online/gamesLibrary/assets/groboldPro/highscore_label.fnt');

        // Main Menu
        this.game.load.image('mainMenuBackground', this.misspilled_assets + 'img/menu_screen/title_screen_background' + type + '.png');
        this.game.load.atlasXML('menuPlayButton',  this.misspilled_assets + 'img/menu_screen/play_button' + type + '.png', this.misspilled_assets + 'img/menu_screen/play_button' + type + '.xml');
        this.game.load.atlasXML('menuMuteButton',  this.misspilled_assets + 'img/menu_screen/mute_button' + type + '.png', this.misspilled_assets + 'img/menu_screen/mute_button' + type + '.xml');
        this.game.load.atlasXML('menuMutedButton',  this.misspilled_assets + 'img/menu_screen/muted_button' + type + '.png', this.misspilled_assets + 'img/menu_screen/muted_button' + type + '.xml');
        this.game.load.atlasXML('menuQuitButton',  this.misspilled_assets + 'img/menu_screen/quit_button' + type + '.png', this.misspilled_assets + 'img/menu_screen/quit_button' + type + '.xml');

        // ***********
        // LOAD SOUNDS
        // ***********


        var ext = this.game.device.firefox ? '.ogg' : '.mp3';
        console.log("Loading " + ext + " files.");

        this.game.load.audio('singleTone', [this.misspilled_assets + 'audio/sfx/count_down_number' + ext]);
        this.game.load.audio('multiTone',  [this.misspilled_assets + 'audio/sfx/count_down_go' + ext]);
        this.game.load.audio('squish',     [this.misspilled_assets + 'audio/sfx/squish' + ext]);
        this.game.load.audio('bubbleUp',   [this.misspilled_assets + 'audio/sfx/bubble_up' + ext]);
        this.game.load.audio('pop01',      [this.misspilled_assets + 'audio/sfx/pop01' + ext]);
        this.game.load.audio('slideDown',  [this.misspilled_assets + 'audio/sfx/slide_down' + ext]);
        this.game.load.audio('incorrect',  [this.misspilled_assets + 'audio/sfx/negative_alert3' + ext]);
        this.game.load.audio('correct',    [this.misspilled_assets + 'audio/sfx/positive_alert3' + ext]);
        this.game.load.audio('goodOpen',   [this.misspilled_assets + 'audio/sfx/bottle_open2' + ext]);
        this.game.load.audio('goodClose',  [this.misspilled_assets + 'audio/sfx/bottle_close' + ext]);
        this.game.load.audio('badOpen',    [this.misspilled_assets + 'audio/sfx/container_open' + ext]);
        this.game.load.audio('badClose',   [this.misspilled_assets + 'audio/sfx/container_close' + ext]);
        this.game.load.audio('win',        [this.misspilled_assets + 'audio/sfx/award' + ext]);
        this.game.load.audio('background', [this.misspilled_assets + 'audio/background/pinball' + ext]);

        this.game.wordData = $.parseJSON($.ajax({

            type: 'GET',
            url: '/online/games/getWordSet/' + unit_id,
            async: false

        }).responseText);

    },

    create: function () {

        console.log("Decoding audio");

    },

    update: function () {
        // Nasty ugly if statement
        if (this.ready === false &&
            this.cache.isSoundDecoded('singleTone') &&
            this.cache.isSoundDecoded('multiTone') &&
            this.cache.isSoundDecoded('squish') &&
            this.cache.isSoundDecoded('pop01') &&
            this.cache.isSoundDecoded('slideDown') &&
            this.cache.isSoundDecoded('correct') &&
            this.cache.isSoundDecoded('incorrect') &&
            this.cache.isSoundDecoded('goodOpen') &&
            this.cache.isSoundDecoded('goodClose') &&
            this.cache.isSoundDecoded('badOpen') &&
            this.cache.isSoundDecoded('badClose') &&
            this.cache.isSoundDecoded('bubbleUp') &&
            this.cache.isSoundDecoded('background'))
        {
            this.ready = true;
            this.game.state.start('menu');
        }

    }

};

Main.Menu = function(game) {

    this.game = game;

};

Main.Menu.prototype = {

    backgroundImage: Phaser.Sprite,

    playButton: Phaser.Button,
    muteButton: Phaser.Button,
    quitButton: Phaser.Button,

    create: function() {
        this.backgroundImage = this.game.add.image(0, 0, 'mainMenuBackground');

        this.playButton = this.game.add.button(this.game.world.centerX, Main.pos(492), 'menuPlayButton', this.playButtonPressed, this, 2, 0, 1, 0);
        this.muteButton = this.game.add.button(this.game.world.centerX + Main.pos(250), Main.pos(492), 'menuMuteButton', this.muteButtonPressed, this, 2, 0, 1, 0);
        this.quitButton = this.game.add.button(this.game.world.centerX - Main.pos(250), Main.pos(492), 'menuQuitButton', this.quitButtonPressed, this, 2, 0, 1, 0);

        this.playButton.anchor.setTo(0.5, 0.5);
        this.muteButton.anchor.setTo(0.5, 0.5);
        this.quitButton.anchor.setTo(0.5, 0.5);

        if (this.game.removeQuitButton)
            this.quitButton.destroy();
    },

    playButtonPressed: function() {

        this.game.state.start('game');

    },

    muteButtonPressed: function() {

        this.game.sound.mute = !this.game.sound.mute;
        localStorage.vocabLab = this.game.sound.mute;
        if (this.game.sound.mute)
        {
            this.muteButton.loadTexture('menuMutedButton');
        }
        else
        {
            this.muteButton.loadTexture('menuMuteButton');
        }
         
    },

    quitButtonPressed: function() {

        if (typeof backToUnit === 'function')
            backToUnit();
        else
            window.history.back();

    },

};
Main.Win = function(game) {

    this.game = game;

};

Main.Win.prototype =  {

    restartButton: Phaser.Button,
    menuButton:    Phaser.Button,

    awardIcon1: Phaser.Image,
    awardIcon2: Phaser.Image,
    awardIcon3: Phaser.Image,
    awardSpace1: Phaser.Image,
    awardSpace2: Phaser.Image,
    awardSpace3: Phaser.Image,
    award1: Phaser.Image,
    award2: Phaser.Image,
    award3: Phaser.Image,

    backgroundImage: Phaser.Image,

    highscoreLabelFont: Phaser.BitmapFont,
    highscoreValueFont: Phaser.BitmapFont,
    currentScoreFont:   Phaser.BitmapFont,
    awardPrizeFont:     Phaser.BitmapFont,
    awardValueFont:     Phaser.BitmapFont,

    _award1pos: Phaser.Point,
    _award2pos: Phaser.Point,
    _award3pos: Phaser.Point,

    _awardIcon1pos: Phaser.Point,
    _awardIcon2pos: Phaser.Point,
    _awardIcon3pos: Phaser.Point,

    _awardTime1pos: Phaser.Point,
    _awardTime2pos: Phaser.Point,
    _awardTime3pos: Phaser.Point,

    _awardValue1pos: Phaser.Point,
    _awardValue2pos: Phaser.Point,
    _awardValue3pos: Phaser.Point,

    _awardIconXOffset: Main.pos(45),
    _awardIconYOffset: Main.pos(90),

    _awardTimeXOffset: Main.pos(52),
    _awardTimeYOffset: Main.pos(55),

    _awardValueXOffset: Main.pos(75),
    _awardValueYOffset: Main.pos(92),

    create: function() {

        console.log("Win state");

        this.game.stage.backgroundColor = '#000000';
        this.backgroundImage = this.game.add.image(0, 0, 'winFrameBox');
        this.awardSpace1 = this.game.add.image(0, 0, 'coinAwardSpace');
        this.awardSpace2 = this.game.add.image(0, 0, 'coinAwardSpace');
        this.awardSpace3 = this.game.add.image(0, 0, 'coinAwardSpace');
        this.awardTime1 = this.game.add.bitmapText(0, 0, 'award_numbers', '5000000:00', Main.pos(25));
        this.awardTime2 = this.game.add.bitmapText(0, 0, 'award_numbers', '3000000:00', Main.pos(25));
        this.awardTime3 = this.game.add.bitmapText(0, 0, 'award_numbers', '2000000:00', Main.pos(25));
        this.awardIcon1 = this.game.add.image(0, 0, 'coinIcon');
        this.awardIcon2 = this.game.add.image(0, 0, 'coinIcon');
        this.awardIcon3 = this.game.add.image(0, 0, 'coinIcon');
        this.awardValue1 = this.game.add.bitmapText(0, 0, 'blackWhiteGroboldProNumbers', 'x1000000000000', Main.pos(18));
        this.awardValue2 = this.game.add.bitmapText(0, 0, 'blackWhiteGroboldProNumbers', 'x2000000000000', Main.pos(18));
        this.awardValue3 = this.game.add.bitmapText(0, 0, 'blackWhiteGroboldProNumbers', 'x4000000000000', Main.pos(18));
        this.award1 = this.game.add.image(0, 0, 'coinAward');
        this.award2 = this.game.add.image(0, 0, 'coinAward');
        this.award3 = this.game.add.image(0, 0, 'coinAward');
        this.menuButton    = this.game.add.button(0, 0, 'menuButton', this.menuButtonPressed, this, 'hover', 'rest', 'active');
        this.restartButton = this.game.add.button(0, 0, 'restartButton', this.restartButtonPressed, this, 'hover', 'rest', 'active');
        this.gameTime       = this.game.add.bitmapText(0, 0, 'GROBOLDpro', this.game.winTimeText, Main.pos(76));
        this.highscoreTime  = this.game.add.bitmapText(0, 0, 'highscore_numbers', 'Error', Main.pos(25));
        this.highscoreLabel = this.game.add.bitmapText(0, 0, 'highscore_label', 'HIGHSCORE', Main.pos(22));


        this.backgroundImage.x = (this.game.world.width  - this.backgroundImage.width)  / 2;
        this.backgroundImage.y = (this.game.world.height - this.backgroundImage.height) / 2;

        this._award1pos = new Phaser.Point(this.backgroundImage.x + (this.backgroundImage.width / 4) - (this.awardSpace1.width / 2) - Main.pos(30), 
                                    this.backgroundImage.y + (this.backgroundImage.height / 4) - (this.awardSpace1.height / 2));
        this._award2pos = new Phaser.Point(this.backgroundImage.x + (this.backgroundImage.width / 2) - (this.awardSpace1.width / 2), 
                                    this.backgroundImage.y + (this.backgroundImage.height / 4) - (this.awardSpace1.height / 2));
        this._award3pos = new Phaser.Point(this.backgroundImage.x + (3 * this.backgroundImage.width / 4) - (this.awardSpace1.width / 2) + Main.pos(30), 
                                    this.backgroundImage.y + (this.backgroundImage.height / 4) - (this.awardSpace1.height / 2));

        // Set the icon positions
        this._awardIcon1pos = new Phaser.Point(this._award1pos.x + this._awardIconXOffset, this._award1pos.y + this._awardIconYOffset);
        this._awardIcon2pos = new Phaser.Point(this._award2pos.x + this._awardIconXOffset, this._award2pos.y + this._awardIconYOffset);
        this._awardIcon3pos = new Phaser.Point(this._award3pos.x + this._awardIconXOffset, this._award3pos.y + this._awardIconYOffset);

        // Set the required time positions
        this._awardTime1pos = new Phaser.Point(this._award1pos.x + this._awardTimeXOffset, this._award1pos.y + this._awardTimeYOffset);
        this._awardTime2pos = new Phaser.Point(this._award2pos.x + this._awardTimeXOffset, this._award2pos.y + this._awardTimeYOffset);
        this._awardTime3pos = new Phaser.Point(this._award3pos.x + this._awardTimeXOffset, this._award3pos.y + this._awardTimeYOffset);  

        // Set the award value positions
        this._awardValue1pos = new Phaser.Point(this._award1pos.x + this._awardValueXOffset, this._award1pos.y + this._awardValueYOffset);
        this._awardValue2pos = new Phaser.Point(this._award2pos.x + this._awardValueXOffset, this._award2pos.y + this._awardValueYOffset);
        this._awardValue3pos = new Phaser.Point(this._award3pos.x + this._awardValueXOffset, this._award3pos.y + this._awardValueYOffset);

        // Place the award placeholders
        this.awardSpace1.x = this._award1pos.x;
        this.awardSpace1.y = this._award1pos.y;

        this.awardSpace2.x = this._award2pos.x;
        this.awardSpace2.y = this._award2pos.y;

        this.awardSpace3.x = this._award3pos.x;
        this.awardSpace3.y = this._award3pos.y;

        // Place the required times
        this.awardTime1.x = this._awardTime1pos.x;
        this.awardTime1.y = this._awardTime1pos.y;

        this.awardTime2.x = this._awardTime2pos.x;
        this.awardTime2.y = this._awardTime2pos.y;

        this.awardTime3.x = this._awardTime3pos.x;
        this.awardTime3.y = this._awardTime3pos.y;

        // Place the award icons
        this.awardIcon1.x = this._awardIcon1pos.x;
        this.awardIcon1.y = this._awardIcon1pos.y;

        this.awardIcon2.x = this._awardIcon2pos.x;
        this.awardIcon2.y = this._awardIcon2pos.y;

        this.awardIcon3.x = this._awardIcon3pos.x;
        this.awardIcon3.y = this._awardIcon3pos.y;

        // Place the award values
        this.awardValue1.x = this._awardValue1pos.x;
        this.awardValue1.y = this._awardValue1pos.y;

        this.awardValue2.x = this._awardValue2pos.x;
        this.awardValue2.y = this._awardValue2pos.y;

        this.awardValue3.x = this._awardValue3pos.x;
        this.awardValue3.y = this._awardValue3pos.y;

        // Place the awards
        this.award1.x = this._award1pos.x;
        this.award1.y = this._award1pos.y;

        this.award2.x = this._award2pos.x;
        this.award2.y = this._award2pos.y;

        this.award3.x = this._award3pos.x;
        this.award3.y = this._award3pos.y;

        // Awards are hidden by default and will display if earned
        this.award1.alpha = 0;
        this.award2.alpha = 0;
        this.award3.alpha = 0;

        this.menuButton.x = (this.game.world.width / 2) - this.menuButton.width - Main.pos(40);
        this.menuButton.y = (this.backgroundImage.y + this.backgroundImage.height - (this.menuButton.height * 2));

        this.restartButton.x = (this.game.world.width / 2) + Main.pos(40);
        this.restartButton.y = (this.backgroundImage.y + this.backgroundImage.height - (this.restartButton.height * 2));

        this.gameTime.x = this.game.world.centerX - Main.pos(160);
        this.gameTime.y = this.game.world.centerY - Main.pos(20);

        this.highscoreTime.x = this.game.world.centerX + Main.pos(30);
        this.highscoreTime.y = this.game.world.centerY + Main.pos(70);

        this.highscoreLabel.x = this.game.world.centerX - Main.pos(130);
        this.highscoreLabel.y = this.game.world.centerY + Main.pos(76);

        this.postScore();
        this.setScoreData();

    },

    setScoreData: function() {

        if (typeof getScoreStats === 'function') 
        {
            var data = getScoreStats('misspilled');

            // Convert the number to time
            var milliseconds = Math.floor(data.highscore)         % 1000;
            var seconds      = Math.floor(data.highscore / 1000)  % 60;
            var minutes      = Math.floor(data.highscore / 60000) % 60;

            // Pad the number with a 0 if it's less than 10, pad the milliseconds with a second 0 if need be
            minutes      = parseInt(minutes)      < 10  ? "0" + minutes      : minutes;
            seconds      = parseInt(seconds)      < 10  ? "0" + seconds      : seconds;
            milliseconds = parseInt(milliseconds) < 100 ? "0" + milliseconds : milliseconds;
            milliseconds = parseInt(milliseconds) < 10  ? "0" + milliseconds : milliseconds;

            this.highscoreTime.text = minutes + ":" + seconds + ":" + milliseconds;

        }
        else 
        {
            console.log("Could not get score - getScoreStats not a function.");
        }

    },

    postScore: function() {

        if (typeof postScore === 'function') 
        {
            var data = postScore(this.game.winTime, 'misspilled');

            var pointsEarned = 0;

            if (data.award1.just_earned) 
            {
                this.game.add.tween(this.award1).to({alpha: 1}, 1000, null, true, 2000);
                pointsEarned += 10000000000000;
            }
            else if (data.award1.already_earned)
            {
                this.award1.alpha = 1;
            }
            if (data.award2.just_earned) 
            {
                this.game.add.tween(this.award2).to({alpha: 1}, 1000, null, true, 3000);
                pointsEarned += 20000000000000;
            }
            else if (data.award2.already_earned)
            {
                this.award2.alpha = 1;
            }
            if (data.award3.just_earned) 
            {
                this.game.add.tween(this.award3).to({alpha: 1}, 1000, null, true, 4000);
                pointsEarned += 400000000000000;
            }
            else if (data.award3.already_earned)
            {
                this.award3.alpha = 1;
            }

            RevPointController.addVisualPoints(pointsEarned);

        }
        else 
        {
            console.log("Could not post score - postScore not a function.");
        }

    },

    restartButtonPressed: function() {

        this.game.state.start('game');

    },

    menuButtonPressed: function() {

        this.game.state.start('menu');

    }

};
