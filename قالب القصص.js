(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"قالب القصص_atlas_1", frames: [[0,0,1915,1285]]},
		{name:"قالب القصص_atlas_2", frames: [[0,0,1643,1129]]},
		{name:"قالب القصص_atlas_3", frames: [[0,0,1190,1254],[0,1256,1976,682]]},
		{name:"قالب القصص_atlas_4", frames: [[0,1366,1958,636],[0,684,1917,680],[0,0,1932,682]]},
		{name:"قالب القصص_atlas_5", frames: [[0,632,1003,1216],[0,0,1957,630]]},
		{name:"قالب القصص_atlas_6", frames: [[0,638,1861,603],[0,1243,1796,593],[0,0,1813,636]]},
		{name:"قالب القصص_atlas_7", frames: [[0,1122,1920,523],[0,581,1905,539],[0,0,1826,579]]},
		{name:"قالب القصص_atlas_8", frames: [[0,0,1906,521],[0,1056,1904,483],[0,523,1850,531]]},
		{name:"قالب القصص_atlas_9", frames: [[955,0,971,755],[0,811,1012,735],[0,0,953,809],[1014,757,964,707]]},
		{name:"قالب القصص_atlas_10", frames: [[1014,596,1032,583],[0,0,1012,612],[1014,0,1017,594],[0,1181,1028,583]]},
		{name:"قالب القصص_atlas_11", frames: [[0,1174,977,555],[0,613,1035,559],[1037,613,998,569],[979,1184,979,547],[1030,0,976,611],[0,0,1028,583]]},
		{name:"قالب القصص_atlas_12", frames: [[1376,379,647,549],[687,797,571,547],[0,1346,988,297],[990,1438,588,494],[0,797,685,541],[1260,930,611,506],[0,1645,988,238],[0,0,989,476],[991,0,991,377],[0,478,1374,317]]},
		{name:"قالب القصص_atlas_13", frames: [[2026,0,22,13],[1504,354,37,30],[1992,966,27,75],[0,548,678,9],[367,1478,67,54],[666,934,147,143],[1548,1366,480,67],[935,467,42,77],[51,440,49,10],[0,440,49,13],[1504,386,49,20],[1984,574,56,66],[160,1397,119,130],[770,1397,72,78],[844,1418,72,78],[1871,1266,80,79],[1953,1266,80,79],[918,1418,72,78],[992,1418,72,78],[1066,1418,72,78],[281,1397,80,79],[1140,1418,72,78],[363,1397,80,79],[445,1397,80,79],[1287,1418,79,67],[1368,1418,79,67],[527,1397,80,79],[609,1397,80,79],[1449,1418,79,67],[1530,1435,79,67],[691,1397,77,82],[1611,1435,79,67],[1214,1418,71,77],[770,1477,71,55],[0,1015,222,222],[1838,966,152,157],[1984,642,57,58],[1838,1125,84,55],[1924,1125,84,55],[1692,1435,84,55],[1778,1435,84,55],[1864,1435,84,55],[1950,1435,84,55],[281,1478,84,55],[756,1203,57,58],[2018,702,28,34],[1634,920,84,35],[0,731,813,201],[0,1397,158,109],[448,1015,188,110],[1789,1266,80,80],[815,757,915,161],[0,1239,124,28],[0,574,1072,155],[448,1127,188,99],[980,354,522,50],[224,1015,222,222],[448,1228,306,31],[980,408,1041,164],[1575,0,449,406],[1634,966,202,201],[0,0,517,438],[0,1285,852,110],[815,920,402,363],[1219,920,413,263],[980,0,593,352],[854,1366,692,50],[638,1079,144,122],[519,0,459,465],[1074,574,908,181],[1984,702,32,32],[0,934,664,79],[0,467,933,79],[854,1285,933,79],[1219,1185,821,79],[1732,757,297,207]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1448 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1447 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1450 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1451 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1446 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1444 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1445 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1331 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1329 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1327 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1325 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1333 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1334 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1323 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1324 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1315 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1316 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1319 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1321 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1320 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1314 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1322 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1312 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1311 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1307 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1309 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1318 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1313 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1306 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1308 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1300 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1305 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1299 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1303 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1292 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1298 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1452 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1054 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1053 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1052 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1051 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1049 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1050 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1056 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1023 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1022 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_987 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1286 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_986 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_985 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Asset51001 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CP2 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_975 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.cro0 = function() {
	this.initialize(ss["قالب القصص_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CP1 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_984 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.crotit = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.cro2 = function() {
	this.initialize(ss["قالب القصص_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cro4 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cro3 = function() {
	this.initialize(ss["قالب القصص_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boook = function() {
	this.initialize(img.boook);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3333,2083);


(lib.dnd0 = function() {
	this.initialize(img.dnd0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2114,1254);


(lib.DDD = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_978 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_970 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.dnd2 = function() {
	this.initialize(img.dnd2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2114,1254);


(lib.dnd10 = function() {
	this.initialize(img.dnd10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2112,1257);


(lib.dnd4 = function() {
	this.initialize(img.dnd4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2119,1254);


(lib.dnd5 = function() {
	this.initialize(img.dnd5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2112,1254);


(lib.dnd6 = function() {
	this.initialize(img.dnd6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1265);


(lib.FFFFFIN = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dnd8 = function() {
	this.initialize(img.dnd8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2113,1254);


(lib.dnd9 = function() {
	this.initialize(img.dnd9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2112,1254);


(lib.HistoiresCPpngcopy = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.HHH = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.HistoiresCP = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.image = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.mm = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.lescartes = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.nnn = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.RTF = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.nammm = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.SOTETRE = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.scène2 = function() {
	this.initialize(ss["قالب القصص_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.souligne1 = function() {
	this.initialize(ss["قالب القصص_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.souligne10 = function() {
	this.initialize(ss["قالب القصص_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.souligne0 = function() {
	this.initialize(ss["قالب القصص_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.souligne2 = function() {
	this.initialize(ss["قالب القصص_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.souligne3 = function() {
	this.initialize(ss["قالب القصص_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.souligne11 = function() {
	this.initialize(ss["قالب القصص_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.image4 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.souligne6 = function() {
	this.initialize(ss["قالب القصص_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.souligne4 = function() {
	this.initialize(ss["قالب القصص_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.souligne8 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.souligne9 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.souligne7 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.test11 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.test9 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.test10 = function() {
	this.initialize(ss["قالب القصص_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tetg2 = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tetg1 = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tex114 = function() {
	this.initialize(ss["قالب القصص_atlas_11"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.text0 = function() {
	this.initialize(ss["قالب القصص_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tetg3 = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.text003 = function() {
	this.initialize(ss["قالب القصص_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text0001 = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3387,927);


(lib.text1pngcopy = function() {
	this.initialize(img.text1pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3387,927);


(lib.text12 = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.text14 = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.text11 = function() {
	this.initialize(ss["قالب القصص_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.text1r3 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text15 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.text6 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text8 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3812,1620);


(lib.TextInputcopy = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.text9 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.titr1 = function() {
	this.initialize(img.titr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3732,323);


(lib.titre1pngcopy = function() {
	this.initialize(img.titre1pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3732,323);


(lib.titre3 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.titre4 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.titre5 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.titre8 = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.txt05 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.whitrglossyrectanglebuttonmd = function() {
	this.initialize(ss["قالب القصص_atlas_13"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.souligne5 = function() {
	this.initialize(ss["قالب القصص_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dnd7 = function() {
	this.initialize(img.dnd7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2112,1254);


(lib.cro1 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text001 = function() {
	this.initialize(ss["قالب القصص_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tito_optimized = function() {
	this.initialize(ss["قالب القصص_atlas_12"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dnd11 = function() {
	this.initialize(img.dnd11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2112,1254);


(lib.cro5 = function() {
	this.initialize(ss["قالب القصص_atlas_11"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dnd1 = function() {
	this.initialize(img.dnd1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2112,1254);


(lib.dnd3 = function() {
	this.initialize(img.dnd3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2112,1263);


(lib.CachedBmp_969 = function() {
	this.initialize(ss["قالب القصص_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1065 = function() {
	this.initialize(img.CachedBmp_1065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3016,1517);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text8bitmap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.test9();
	this.instance.setTransform(0,0,0.5238,0.4069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text8bitmap, new cjs.Rectangle(0,0,508.6,307.3), null);


(lib.Symbol160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1452();
	this.instance.setTransform(0,0,0.3266,0.3266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,19);


(lib.Symbol159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1451();
	this.instance.setTransform(-1.45,-1.45,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,226,3);


(lib.Symbol158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1450();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,25);


(lib.Symbol156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFtB+IAAj7MAjVAAAIAAD7gEgpBAB+IAAgDIUXAAIAAADg");
	this.shape.setTransform(262.625,12.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol156, new cjs.Rectangle(0,0,525.3,25.2), null);


(lib.Symbol155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAB+IAAgDIYQAAIAAj4MA5zAAAIAAD7g");
	this.shape.setTransform(262.625,12.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol155, new cjs.Rectangle(0,0,525.3,25.2), null);


(lib.Symbol154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAB+IAAgDIYQAAIAAgNIu7AAIAAi5IO7AAIAAgyMA5zAAAIAAD7g");
	this.shape.setTransform(262.625,12.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol154, new cjs.Rectangle(0,0,525.3,25.2), null);


(lib.Symbol153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAB+IAAj7MBSDAAAIAAD7g");
	this.shape.setTransform(262.625,12.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol153, new cjs.Rectangle(0,0,525.3,25.2), null);


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAD0IAAj6MBSDAAAIAAD6gA5JgpIAAjLMA1DAAAIAADLg");
	this.shape.setTransform(262.625,24.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol152, new cjs.Rectangle(0,0,525.3,48.9), null);


(lib.Symbol151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAEKIAAoTMBSDAAAIAAITg");
	this.shape.setTransform(262.625,26.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol151, new cjs.Rectangle(0,0,525.3,53.2), null);


(lib.Symbol150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAWUIAAoTMBSDAAAIAAITgEggcgTaIAAi5MA4lAAAIAAC5Qt0BBuIAAQuKAAufhBg");
	this.shape.setTransform(262.625,142.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol150, new cjs.Rectangle(0,0,525.3,285.6), null);


(lib.Symbol149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AWjIAAoUMBSDAAAIAAIUgEgpEgSOIAAkUMBSEAAAIAAEUg");
	this.shape.setTransform(262.85,144.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol149, new cjs.Rectangle(0,0,525.7,288.6), null);


(lib.Symbol148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AYwIAAoUMBSDAAAIAAIUgEgpEgQBIAAoVIdvAAIAAgZMA0VAAAIAAIug");
	this.shape.setTransform(262.85,158.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol148, new cjs.Rectangle(0,0,525.7,316.7), null);


(lib.Symbol147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AaoIAAoUMBSDAAAIAAIUgEgpEgOJIAAoVIdvAAIAAkJMA0VAAAIAAMeg");
	this.shape.setTransform(262.85,170.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol147, new cjs.Rectangle(0,0,525.7,340.8), null);


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AaoIAAoUMBSDAAAIAAIUgEgpEgOJIAAoVIYuAAIAAkJMA5WAAAIAAMeg");
	this.shape.setTransform(262.85,170.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol146, new cjs.Rectangle(0,0,525.7,340.8), null);


(lib.Symbol145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AaoIAAoUMBSDAAAIAAIUgEgpEgOJIAAoVIYuAAIAAgMIpKAAIAAj9MBCgAAAIAAMeg");
	this.shape.setTransform(262.85,170.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol145, new cjs.Rectangle(0,0,525.7,340.8), null);


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AaoIAAoUMBSDAAAIAAIUgEgpEgOJIAAseMBSEAAAIAAMeg");
	this.shape.setTransform(262.85,170.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol144, new cjs.Rectangle(0,0,525.7,340.8), null);


(lib.Symbol143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AcmIAAoUMBSDAAAIAAIUgEgpEgMLIAAsdIK5AAIAAj9MArSAAAIAAD9Ib5AAIAAMdQlSCq0hAAUgUgAAAgjxgCqg");
	this.shape.setTransform(262.85,183);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol143, new cjs.Rectangle(0,0,525.7,366), null);


(lib.Symbol142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/AckIAAoTMBSDAAAIAAITgEgpEgMMIAAwXMBSEAAAIAAQXg");
	this.shape.setTransform(262.85,182.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol142, new cjs.Rectangle(0,0,525.7,365.6), null);


(lib.Symbol141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego/Ae+IAAoTMBSDAAAIAAITgEgpEgJyIAAwXMBSEAAAIAAQXgA5J7EIAAj5MAvCAAAIAAD5g");
	this.shape.setTransform(262.85,198.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol141, new cjs.Rectangle(0,0,525.7,396.5), null);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAK5IAA1xMBSDAAAIAAVxg");
	this.shape.setTransform(262.625,69.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol140, new cjs.Rectangle(0,0,525.3,139.5), null);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.titre8();
	this.instance.setTransform(72,0,0.3265,0.3815);

	this.instance_1 = new lib.text8();
	this.instance_1.setTransform(0,39,0.5052,0.4881);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol139, new cjs.Rectangle(0,0,481.5,433.9), null);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.scène2();
	this.instance.setTransform(0,0,0.5636,0.3552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol138, new cjs.Rectangle(0,0,565.3,431.9), null);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqBSIAAgJIAHAAIADgDQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAABgBIAAgJIAAgqQAAgLgDgEQgCgEgIAAQgFAAgGACQgFACgFAGIAAAzIABAIIABAFIAEADIAGAAIAAAJIg4AAIAAgJIAGAAIAEgDIABgFIABgIIAAgvIgBgMQgCgDgDAAIgFABIgFAAIgDgIIAqgMIAJAAIAAATIAJgHIAJgHIAJgEQAFgBAGAAQAJgBAGAEQAFADADAGQADAFABAHIABANIAAAsIABAIIACAFIAEADIAGAAIAAAJgAhdBSIAAgJIAIAAIADgDIACgFIABgIIAAgvQAAgKgCgCQgBgDgEAAIgFABIgEAAIgEgIIArgMIAJAAIAABRIAAAIIADAFIAEADIAGAAIAAAJgAhHgtIgGgEIgEgGIgCgIQABgEABgDIAEgGIAGgEIAHgBIAHACQAEABADACIADAGIACAHQAAAEgCADIgDAHIgHADQgCACgFAAIgHgBg");
	this.shape.setTransform(0,-5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhlBcIAAi3IDLAAIAAC3g");
	this.shape_1.setTransform(-0.1,-4.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol137, new cjs.Rectangle(-10.3,-14,20.4,18.5), null);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47A434").s().p("AgGA3IgJgCIgHgDIgEgBIgCABIgBACIgBACIAAACIgJAAIAAgsIAJAAQABAHACAGIAHAKQAEAFAFADQAFADAGAAQAHAAADgEQADgDAAgFQAAgGgEgEIgJgHIgNgHIgMgIQgGgDgEgGQgDgHgBgJQABgHACgGQADgGAEgEQAGgEAFgCQAHgCAGAAIAIABIAIABIAGACIAGAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIACgDIAHAAIAAAoIgIAAIgFgLQgDgGgEgEQgEgEgFgCQgFgCgEAAQgGAAgEADQgDADAAAEQAAAGAEAEQAEAEAHADIANAHIANAIQAHAEAEAGQAEAGAAAJQAAAIgDAGQgDAGgEAEQgGAFgHACQgHACgHAAIgJgBg");
	this.shape.setTransform(0,-3.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("Ag4BcIAAi3IBxAAIAAC3g");
	this.shape_1.setTransform(-0.425,-2.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol136, new cjs.Rectangle(-6.1,-11.4,11.399999999999999,18.5), null);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AB6A4IAAgVIgHAHIgJAHIgKAFQgGACgGAAQgJAAgGgDQgFgEgDgFQgDgFgBgHIgBgQIAAgqIgBgIIgDgFQgBgCgDAAIgIgBIAAgJIAwAAIAABBQAAAMADAFQADAFAHAAQAFAAAGgEQAFgEAFgGIAAgwIgBgIIgBgFQgDgCgDAAIgHgBIAAgJIAwAAIAABIIABAMQACADADAAIAFAAIAFgBIADAIIgrANgAiRA0QgJgEgGgIQgGgHgDgKQgDgLgBgMQAAgMAGgKQADgKAIgIQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAGADAIQADAJAAAMIhBAAQAAAIACAGQACAHAFAGQAFAGAFAEQAHADAIAAQAIAAAGgEQAGgFAFgLIAGADIgEAPQgEAIgFAGQgGAFgIAEQgHAEgKAAQgMAAgIgEgAiIgpQgDABgCAEQgCADgCAFIgBAKIAiAAIAAgIIgDgIQgCgEgEgDQgDgCgGAAQgDAAgDACgAACA1IgFgDIgDgFIgCgGIgHAGIgIAFIgIADIgJABQgMAAgGgHQgHgHAAgNQAAgIAHgHQAFgHAJgFQAJgFAKgEIARgHIAAgEIgBgKIgCgIIgEgFQgDgCgEAAQgGAAgDAEQgCADAAAKIAAAFIgDAFIgFAEQgDACgEAAQgGAAgEgEQgEgEAAgHQAAgGAEgFQAEgGAGgDQAHgEAIgCIANgBQAMAAAIACQAJABAFAFQAFAEADAHQACAHAAAJIAAAeIAAAJIAAAIIACAEQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIACgBIAEgCIAEgDIACgCIAAALIgFAFIgHAGIgKAEQgGACgGAAIgGgBgAgUABIgIAGQgDAEAAAEIgBAHQgBAFADAEQADADAEAAQAEAAAEgCIAHgHIAAgeIgMAGg");
	this.shape.setTransform(0,-3.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AimA9IAAh5IFNAAIAAB5g");
	this.shape_1.setTransform(-0.1,-3.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol135, new cjs.Rectangle(-17.3,-9.7,34.7,12.2), null);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBSIgFgDIgEgGIgBgFIgIAFIgHAGIgIADIgKABQgLAAgHgHQgFgHAAgNQAAgJAFgGQAHgIAIgFQAIgGAKgEIASgGIAAgFIAAgIIgDgIIgFgFQgCgCgEAAQgGAAgDAEQgCADAAAJIgBAFIgCAFIgFAEQgDABgEAAQgGAAgEgDQgEgEAAgHQAAgGAEgFQAEgFAHgEQAGgDAHgCIAPgCQAMAAAIADQAJABAFAEQAFAFACAGQACAHAAAJIAAAfIAAAJIABAIIABAEQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAEgBIADgBIADgDIADgCIAAALIgFAEIgIAHIgJAEQgFACgFAAIgIgBgAgrAeIgHAGQgDAEgCADIgBAIQABAFACAEQACADAFAAQAEAAADgDIAIgGIAAgfIgMAHgAAfBRIAAgJIAHgBIADgCIACgFIAAgJIAAgvQAAgIgBgDQgBgDgEAAIgFABIgEABIgEgJIArgNIAJAAIAABSIABAIIACAFIAEACIAFABIAAAJgAA0guIgGgEIgEgGIgCgIQABgEABgDIAEgGIAGgEIAHgBIAIABQADABADADIAEAGIABAHQAAAEgBAEIgEAGIgGADQgEACgEAAIgHgBg");
	this.shape.setTransform(0,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhlBcIAAi3IDLAAIAAC3g");
	this.shape_1.setTransform(-1.2,-5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol134, new cjs.Rectangle(-11.4,-14.8,20.4,18.6), null);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqBSIAAgJIAHAAIADgCQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBIAAgJIAAgpQAAgMgDgEQgCgEgIgBQgFAAgGAEQgFABgFAHIAAAyIABAIIABAFIAEADIAGAAIAAAJIg4AAIAAgJIAGAAIAEgDIABgFIABgIIAAgwIgBgLQgCgDgDAAIgFAAIgFABIgDgIIAqgNIAJAAIAAATIAJgGIAJgGIAJgFQAFgBAGgBQAJABAGADQAFAEADAFQADAFABAHIABANIAAAsIABAIIACAFIAEADIAGAAIAAAJgAhdBSIAAgJIAIAAIADgDIACgFIABgJIAAgvQAAgJgCgCQgBgDgEAAIgFAAIgEABIgEgIIArgNIAJAAIAABSIAAAIIADAFIAEADIAGAAIAAAJgAhHgtIgGgEIgEgGIgCgIQABgEABgDIAEgGIAGgEIAHgBIAHABQAEACADACIADAGIACAHQAAAEgCAEIgDAFIgHAFQgCABgFAAIgHgBg");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhlBRIAAiiIDLAAIAACig");
	this.shape_1.setTransform(0.3,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol133, new cjs.Rectangle(-9.9,-13.2,20.4,17.4), null);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6BPQgKgEgIgIQgGgIgEgJQgEgKAAgLQAAgLAEgKQAEgJAGgIQAHgIAKgFQAJgEAMAAQAMAAALAEQAJAEAGAHQAHAHAEAJQAEAKAAALQAAAMgDAKQgFAKgGAIQgFAIgKAFQgKAFgMAAQgMAAgKgFgAgvgNQgDABgCAFQgCAEgBAFQgBAHgBALQABAKACAKQACAJADAIQAEAHAFAEQAFAEAEAAQAHAAADgIQAEgJAAgUIgCgSQgCgKgCgHQgDgGgFgEQgFgFgGAAQgCAAgDACgAAhBQIAAgJIAHAAIADgDIADgFIAAgIIAAgvQAAgIgCgEQgBgDgDAAIgFABIgFABIgDgJIAqgMIAJAAIAABRIABAIIADAFIADADIAGAAIAAAJgAA3gvIgGgEIgFgGIgBgIQAAgEABgDIAFgGIAGgEIAHgBIAHACQADABADACIAEAGIABAHQAAAEgBAEIgEAGIgGAEQgDABgEAAIgHgBg");
	this.shape.setTransform(0,-7.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhlBCIAAiDIDLAAIAACDg");
	this.shape_1.setTransform(-0.7,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol132, new cjs.Rectangle(-10.9,-15.6,20.4,16.8), null);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABEA3IAAgUIgHAHIgJAGIgKAFQgGACgGAAQgJAAgGgCQgFgEgDgFQgDgGgBgGIgBgQIAAgqIgBgIIgCgFQgBgCgDgBIgIAAIAAgKIAvAAIAABCQAAAMADAEQADAGAHgBQAFAAAGgDQAFgEAFgGIAAgwIAAgIIgCgFQgDgCgDgBIgHAAIAAgKIAwAAIAABIIABANQABADAEAAIAFgBIAFAAIADAIIgrAMgAgzA1IgGgDIgDgGIgCgGIgHAGIgIAGIgIADIgJABQgMAAgGgHQgHgHAAgNQAAgIAHgIQAFgGAJgFQAJgGAKgDIARgHIAAgEIgBgKIgCgIIgEgFQgDgCgEAAQgGAAgDADQgCAEAAAKIAAAFIgDAFIgFAEQgDACgEAAQgGgBgEgEQgEgDAAgHQAAgGAEgFQAEgGAGgDQAHgEAIgCIANgBQAMAAAJABQAJACAFAFQAFAEADAGQACAIAAAJIAAAeIAAAJIAAAIIACAEQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAIACgBIAEgDIAEgCIACgCIAAALIgFAFIgHAFIgKAFQgGACgGAAIgGgBgAhKAAIgIAHQgDAEAAAEIgBAHQgBAEADAEQADAEAEAAQAEAAAEgCIAHgHIAAgfIgMAGg");
	this.shape.setTransform(0,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhlA0IAAhnIDLAAIAABng");
	this.shape_1.setTransform(-2.7,-5.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol131, new cjs.Rectangle(-12.9,-11.3,24.9,11.100000000000001), null);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXA0QgJgEgGgIQgGgHgDgKQgDgLAAgMQAAgMAFgKQAEgKAHgIQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAGADAIQAEAJAAAMIhCAAQAAAIACAGQADAHAEAGQAFAGAGAEQAGADAJAAQAHAAAGgEQAGgFAFgLIAHADIgFAPQgEAIgFAGQgGAFgHAEQgIAEgKAAQgLAAgJgEgAhOgpQgDABgCAEQgCADgCAFIgBAKIAjAAIgBgIIgDgIQgCgEgEgDQgDgCgGAAQgDAAgDACgAA6A0IAAgJIAGAAIAEgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIABgJIAAgoQAAgLgDgFQgDgFgHAAQgFAAgGADQgFADgGAGIAAAxIABAIIACAFIAEADIAGAAIAAAJIg5AAIAAgJIAHAAIADgDIABgFIABgIIAAguIgBgNQgCgDgCAAIgFABIgFABIgDgJIApgMIAJAAIAAATIAKgHIAIgGIAKgFQAFgBAGAAQAJAAAFADQAGAEADAFQADAGABAHIABAOIAAAqIABAIIACAFIADADIAGAAIAAAJg");
	this.shape.setTransform(-0.475,-3.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhlA0IAAhnIDLAAIAABng");
	this.shape_1.setTransform(-1.2,-3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol130, new cjs.Rectangle(-12,-9.5,23.1,11.1), null);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BAB43").s().p("AhZAzQgKgFgHgHQgHgIgEgJQgEgLAAgKQAAgKAEgKQAEgKAHgJQAGgHAKgFQAKgFAMAAQAMAAAKAFQAJADAHAIQAHAHAEAKQAEAJAAALQAAALgDALQgEAKgHAIQgGAIgKAFQgKAFgMAAQgMAAgKgFgAhOgpQgDABgCAEQgCAFgBAGQgBAHAAALQAAAJACAKQACAJAEAIQADAHAFAEQAFAEAEAAQAHAAAEgJQADgIAAgVIgBgRQgCgJgDgHQgDgIgFgEQgFgEgGAAQgCAAgDACgABBA0IAAgJIAGgBIAEgCQAAAAAAAAQABgBAAAAQAAgBAAgBQABAAAAgBIAAgJIAAgoQAAgMgDgFQgCgEgIAAQgFAAgFADQgGACgFAHIAAAxIABAIIACAFIADACIAGABIAAAJIg4AAIAAgJIAFgBIAEgCIACgFIAAgIIAAgvIgBgMQgBgDgEAAIgEABIgFABIgCgJIApgNIAJAAIAAATIAJgGIAJgHIAJgEQAFgCAHAAQAIAAAGAEQAFADADAGQADAGACAHIABAOIAAAqIAAAIIACAFIAEACIAGABIAAAJg");
	this.shape.setTransform(-0.025,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-5.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol129, new cjs.Rectangle(-12.5,-15.1,26.6,18.4), null);


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BAB43").s().p("AgzA2IgGgEIgDgFIgCgGIgHAGIgIAFIgIAEIgJABQgMAAgGgHQgGgHAAgNQAAgJAGgHQAGgHAIgFQAJgFAKgEIARgGIAAgFIAAgJIgDgIIgEgFQgDgCgEAAQgFAAgDADQgDAEAAAJIAAAGIgDAFIgFAEQgCABgFAAQgGAAgEgEQgEgDAAgHQAAgHAEgFQAEgFAHgEQAGgDAIgCIAOgCQAMAAAIACQAJACAFAEQAFAFADAGQACAHAAAKIAAAeIAAAJIABAIIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIADgCIAEgCIACgCIAAALIgFAEIgHAGIgKAFQgGACgFAAIgHgBgAhKABIgHAHQgDADgBAEIgBAIQAAAEACAEQADAEAEAAQAEAAAEgDIAHgGIAAgfIgMAGgAA+A1IAAgJIAGgBIAEgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgJIAAgpQAAgLgDgFQgDgFgHAAQgFAAgGADQgFADgGAGIAAAyIABAIIACAFIAEACIAGABIAAAJIg5AAIAAgJIAGgBIAEgCIABgFIABgIIAAgvIgBgMQgCgDgDAAIgEAAIgFABIgDgIIApgNIAJAAIAAATIAKgGIAIgHIAKgEQAFgCAGAAQAJAAAFAEQAGADADAGQADAFABAIIABANIAAArIABAIIACAFIADACIAGABIAAAJg");
	this.shape.setTransform(-0.025,-4.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(-0.2,-4.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol128, new cjs.Rectangle(-13.5,-14.1,26.6,18.4), null);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A138").s().p("ABGA3IAAgUIgGAHIgJAHIgLAEQgGACgGAAQgJAAgFgCQgFgEgDgFQgEgGgBgGIgBgQIAAgqIgBgIIgCgFQgBgCgDgBIgHAAIAAgKIAvAAIAABCQAAALACAGQADAEAHAAQAFAAAGgDQAFgEAFgGIAAgwIAAgIIgCgFQgCgCgDgBIgHAAIAAgKIAvAAIAABIIABANQACADAEAAIAEgBIAGgBIACAJIgqAMgAhaAzQgJgEgHgIQgIgIgDgJQgEgKAAgLQAAgKAEgKQADgLAIgHQAGgIAKgFQAKgEAMgBQALAAAKAEQAKAFAHAHQAHAHAEAKQAEAKAAALQAAALgEAKQgEAKgGAIQgHAIgKAFQgJAFgMgBQgMABgLgFgAhOgqQgDACgCAEQgCAEgBAHQgBAHAAAKQAAAKACAJQACAKAEAHQADAHAFAFQAEAEAFAAQAHAAAEgJQADgIAAgUIgBgRQgCgKgEgHQgDgIgEgDQgFgGgGAAQgDAAgCACg");
	this.shape.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.25,-5.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol127, new cjs.Rectangle(-13,-14.9,26.6,18.4), null);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A138").s().p("AhWBPQgJgEgGgHQgGgHgEgKQgCgJAAgLQAAgOADgKQAFgKAGgIQAHgIAIgEQAJgEAJAAQAMAAAHADQAIACAFAFQAFAEACAFQADAEAAAEQAAAGgEAEQgDAEgIAAQgFAAgDgDQgDgCgBgDIgDgHIgDgHQgBgEgDgCQgDgCgGAAQgJAAgEAGQgFAHABAMQAAAKACAKQADAIAEAHQAFAHAGAEQAGADAIAAIAFAAIAHgDQAEgCADgEIAFgLIAHADIgFAPQgEAIgFAGQgGAFgHAEQgIAEgKAAQgKAAgJgEgAA6BPIAAgJIAGAAIAEgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIABgJIAAgpQAAgLgDgEQgCgFgIAAIgFABIgFADIgGAEIgGAFIAAAwIACAIQAAAEACABIADADIAGAAIAAAJIg5AAIAAgJIAHgBQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIACgFIAAgIIAAhlQAAgJgBgDQgCgDgDAAIgDAAIgFABIgDgHIAogOIAJAAIAABMIAKgIIAIgHIAKgFQAFgBAHAAQAIAAAFADQAGAEADAFQADAGACAHIABANIAAArIAAAIIACAFIAEADIAFAAIAAAJg");
	this.shape.setTransform(0,-5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-5.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol126, new cjs.Rectangle(-12.5,-14.9,26.6,18.4), null);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A138").s().p("Ah8BqIAAgJIAHgBIADgCIACgFIABgIIAAhhQAAgJgCgDQgCgDgDAAIgEAAIgEACIgEgIIAqgOIAJAAIAAAVQAJgLAIgFQAJgFAJAAQAHAAAHADQAHAEAFAGQAGAGADAIQADAJAAALQAAAMgDAMQgDAMgHAJQgGAIgKAFQgKAFgNAAQgFAAgGgCQgGgBgEgDIAAAcIABAIIACAFQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAGABIAAAJgAhEgbQgFADgGAGIAAAvQAAAKAFAFQAFAFAJAAQAEAAAEgCQADgCADgFQADgFACgIQACgIAAgNQAAgGgCgGIgDgMQgCgFgEgDQgEgEgFAAQgEAAgFADgABKA4IAAgJIAGgBIAEgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgJIAAgpQAAgLgDgFQgDgFgHAAIgFABIgGAEIgFAEIgGAGIAAAuIABAJQABADABACIAEACIAGABIAAAJIg6AAIAAgJIAHgBQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIABgFIABgIIAAhkQAAgJgCgEQgCgDgDAAIgEABIgEABIgEgIIAqgNIAJAAIAABMIAKgJIAIgGIAKgFQAFgCAGAAQAJAAAFAEQAGADADAGQADAFABAIIABANIAAAqIABAJIACAFIADACIAGABIAAAJg");
	this.shape.setTransform(0.025,-3.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhrBcIAAi3IDXAAIAAC3g");
	this.shape_1.setTransform(-0.175,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol125, new cjs.Rectangle(-13.1,-14.5,26.299999999999997,21.2), null);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFBRIAAgJIAGgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgEIgCgDIgYghIAAAbIABAJIABAGIAFABIAFABIAAAJIg5AAIAAgJIAGgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQACgCAAgEIAAgIIAAhkQAAgJgCgDQgBgEgEAAIgEABIgDABIgFgHIArgOIAJAAIAABlIAYgVIADgDIABgFIAAgCIgCgBIgCgCIgEAAIAAgJIA1AAIAAAJIgIABIgHACIgGADIgHAGIgRARIAgArIAGAIIAFADIAEACIAGAAIAAAJg");
	this.shape.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol124, new cjs.Rectangle(-8.4,-12.8,18.5,19), null);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1445();
	this.instance.setTransform(-58.45,-8.2,0.2437,0.2437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-8.2,117,16.4);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1444();
	this.instance.setTransform(-16.7,-16.2,0.2273,0.2273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-16.2,33.4,32.5);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC765").s().p("AgpBKQgEgEAAgFIAAiBIABgEIADgFQADgDAFAAQAFAAAEADIBCBCQAEADAAAEQAAAFgEADIhCBCIgEACIgFABQgFAAgDgDg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-7.7,9.1,15.4);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.crotit();
	this.instance.setTransform(-152.95,-14.95,0.5861,0.599);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.9,-14.9,305.9,29.9);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SOTETRE();
	this.instance.setTransform(-258.05,-18,0.7458,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258,-18,516.1,36);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#549848").s().p("ABlA4IAAgVIgHAHIgJAHIgKAFQgHACgGAAQgIAAgGgDQgFgEgDgFQgEgFgBgHIgBgQIAAgqIgBgIIgCgFQgBgCgEAAIgHgBIAAgJIAwAAIAABBQgBAMADAFQADAFAHAAQAFAAAGgEQAFgEAGgGIAAgwIgBgIIgCgFQgCgCgDAAIgHgBIAAgJIAvAAIAABIIABAMQACADADAAIAGAAIAEgBIADAIIgqANgAgxA1QgIgEgGgGQgGAFgIAEQgIAEgMAAQgMAAgLgFQgKgEgHgIQgGgIgEgJQgDgIAAgIIgBgFQAAgKAEgKQAEgKAGgIQAHgIAKgFQAKgEALAAIAMABIAKADIAJAEQAEADADADIAKgHIAJgFIAJgCIAGgBQAJAAAHADQAHADAFAFQAFAFAEAJQADAIAAAMIAAABIhAAAIAAAEQAAAFACAGIAAABQACAGAFAGQAEAFAHAEQAFADAJAAQAIAAAFgEQAFgFAFgLIAHADQgCAIgDAHQgEAIgEAGQgGAFgHAEQgHAEgLAAQgKAAgIgDgAhsgpQgDABgCAFQgCAEgBAGQgCAHAAALIACANIABAGQACAJADAIQAEAHAFAEQAEAEAFAAQAHAAADgIQAEgJAAgUIAAgBIgBgQQgDgKgDgHQgCgHgFgEQgFgFgGAAQgDAAgCACgAgpgpQgDABgDAEQgCADgBAFQgBAEAAAGIAjAAIgCgIIgDgIQgCgEgEgDQgDgCgGAAQgCAAgDACg");
	this.shape.setTransform(0,-5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiDBfIAAi9IEHAAIAAC9g");
	this.shape_1.setTransform(0.85,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol92, new cjs.Rectangle(-15.2,-14.1,30.4,19), null);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIA0QgJgEgGgIQgGgHgDgKQgEgLAAgMQABgMAFgKQADgKAIgIQAHgHAJgEQAJgEAJAAQAJAAAHADQAHACAGAGQAGAGADAIQAEAJAAAMIhCAAQAAAIACAGQACAHAFAGQAEAGAGAEQAHADAIAAQAIAAAGgEQAGgFAFgLIAHADIgGAPQgDAIgGAGQgFAFgHAEQgIAEgKAAQgLAAgJgEgAg/gpQgDABgCAEQgDADgBAFIgBAKIAiAAIAAgIIgDgIQgCgEgEgDQgEgCgFAAQgDAAgDACgAAGA0IAAgJIAHAAIADgDIACgFIABgIIAAguIgCgNQgBgDgDAAIgGABIgEABIgDgJIAqgMIAJAAIAAAWIAHgIIAHgHQAEgEAEgBQAEgCAGAAIAGABQADABADACQADACABADQACADAAAEQAAAFgEAFQgDAFgHAAQgEAAgEgCIgEgDIgFgEIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgEAEIgEAGIgEAHIAAAqIABAIIACAFIAEADIAGAAIAAAJg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiDBfIAAi9IEHAAIAAC9g");
	this.shape_1.setTransform(0.85,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(-12.3,-8.9,26.3,19), null);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVA2IgGgEIgDgFIgBgGIgIAGIgIAFIgIAEIgJABQgMAAgGgHQgGgHAAgNQAAgJAGgHQAGgHAJgFQAIgFAKgEIASgGIAAgFIgBgJIgDgIIgEgFQgCgCgFAAQgFAAgDADQgCAEgBAJIAAAGIgCAFIgGAEQgCABgFAAQgGAAgEgEQgDgDAAgHQAAgHADgFQAFgFAGgEQAGgDAIgCIAOgCQAMAAAJACQAIACAFAEQAFAFADAGQACAHAAAKIAAAeIAAAJIABAIIACAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIAEgCIADgCIACgCIAAALIgEAEIgIAGIgKAFQgFACgGAAIgHgBgAhsABIgHAHQgDADgBAEIgBAIQAAAEACAEQADAEAEAAQAEAAAEgDIAIgGIAAgfIgNAGgABgA1IAAgJIAGgBIAEgCQACgBAAgEIABgJIAAgoQAAgLgDgFQgDgFgIAAQgEAAgFADQgGADgFAGIAAAyIAAAIIACAFIADACIAGABIAAAJIg4AAIAAgJIAFgBIAFgCIABgFIABgJIAAgoQAAgLgDgFQgDgFgHAAQgFAAgFADQgGADgGAGIAAAxIABAJIACAFIAEACIAGABIAAAJIg5AAIAAgJIAGgBIAEgCIADgFIAAgJIAAguQAAgJgBgDQgCgDgEAAIgFAAIgEABIgDgIIAqgNIAIAAIAAATIAJgGIAJgHIAJgEQAGgCAGAAQAGAAAEACIAIAEIAEAGIAEAJIAIgIIAJgHIAMgEQAFgCAHAAQAJAAAFAEQAGADADAGQADAFABAHIABAOIAAAqIABAJIACAFIAEACIAFABIAAAJg");
	this.shape.setTransform(0,-5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AifBVIAAipIE/AAIAACpg");
	this.shape_1.setTransform(0.2,-5.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(-15.8,-14,32,16.9), null);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47A434").s().p("AhdBNIgQgEQgHgDgEgEQgDgEAAgFQAAgGAEgGQAGgGALgHQgGgBgEgEQgDgFAAgEQAAgDACgDIAEgIIAHgGIAIgHIgIgFIgGgHIgEgJQgCgFAAgGQgBgIAEgHQAEgHAFgFQAHgFAIgDQAIgCAKAAIALABIAJADIAJADIAKABIAEAAIAEAAIAFAAIAEAAIADABQACABAAAEQAAADgCACQgBACgDAAIgEAAIgEAAIgEAAIgDgBQADAEACAEIABAJQgBAHgCAGQgDAHgFAFQgGAFgIAEQgIADgLAAIgIgBIgJgBIgFAFQgCACgBACQABADADABIAKACIAMAAIAPAAIAOACQAIABAGADQAFAEAEAFQADAGAAAIQAAAHgDAGQgDAGgFAEQgEAFgHADIgNAGIgOADIgNABQgKAAgKgCgAheAoIgCAGQAAADAEADQAEADAFACIANABIALABIALgBIALgCQAFgCADgCQADgCABgEQAAgEgDgCIgHgDIgMgBIgPgCIgPAAIgOgBIgDAHgAhNhEQgDADgCADQgCADgBAFIAAAIIAAAMQABAGACAFQACAFAEADQAEACAFAAQAFAAADgBQADgDABgEQACgDABgFIAAgIIAAgKIgEgLQgCgFgDgEQgDgDgGAAQgEAAgDACgABEAdIAAgJIAGgBIADgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIABgJIAAgoQAAgLgDgFQgDgFgHAAQgFAAgFADQgGADgFAGIAAAxIABAJIACAEIADADIAGABIAAAJIg5AAIAAgJIAGgBIAEgDIACgEIAAgJIAAguIgBgNQgCgDgDAAIgFABIgEABIgCgJIApgMIAJAAIAAATIAJgHIAJgGIAJgFQAFgBAHAAQAIAAAFADQAGAEADAFQADAGACAIIABANIAAAqIAAAJIACAEIAEADIAFABIAAAJg");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiCBfIAAi9IEGAAIAAC9g");
	this.shape_1.setTransform(0.15,-3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(-13,-12.9,26.3,19), null);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47A434").s().p("AhNBOIgQgFQgHgDgEgEQgEgEAAgFQAAgGAFgGQAFgGAMgHQgGgBgEgEQgDgEAAgFQAAgDACgDIAEgHIAHgHIAHgHIgHgEIgGgHIgFgJQgCgFAAgGQAAgJAEgHQADgHAGgFQAGgFAJgCQAIgDAJAAIAMABIAJADIAJADIAKABIAEAAIAEAAIAFAAIACAAIAEABQACABAAAEQAAAEgCACQgBABgEAAIgCAAIgEAAIgEAAIgDAAQADADABAFIABAJQAAAGgCAHQgDAGgFAFQgGAGgIADQgIADgLAAIgIAAIgJgCIgFAGQgDABAAADQAAACAEACIAJABIANAAIAPAAIAOACQAIACAFADQAGADACAFQAEAGAAAIQAAAHgDAGQgCAGgFAEQgFAFgGADIgNAGIgOADIgNABQgLAAgJgBgAhPApIgBAFQAAAEAEADIAJAEIAMACIAMAAIALAAIALgDQAFgBADgDQADgCAAgEQAAgEgCgCIgHgDIgMgBIgPgBIgQAAIgNgBIgEAHgAg+hDQgDACgBADQgCAEgBAEIgBAJIABALQABAGACAFQACAFAEADQADADAGAAQAEAAADgCQADgDACgDQACgEAAgEIABgIIgBgKIgDgLQgCgFgDgEQgEgEgFAAQgFAAgDADgAAsAcQgJgEgGgHQgGgIgDgJQgDgKAAgNQAAgMAFgLQAEgKAHgHQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAFADAJQAEAJAAAMIhCAAQAAAHACAIQADAHAEAGQAFAFAGADQAGAEAJAAQAHAAAGgFQAGgDAFgMIAHADIgFAPQgEAHgFAGQgGAGgHAEQgIADgKAAQgLAAgJgEgAA1hBQgDACgCADQgCADgCAFIgBAKIAjAAIgBgIIgDgIQgCgEgEgCQgDgDgGAAQgDAAgDACg");
	this.shape.setTransform(0.025,-2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiDBfIAAi9IEHAAIAAC9g");
	this.shape_1.setTransform(0.85,-3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol70, new cjs.Rectangle(-12.3,-12.9,26.3,19), null);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3AA22E").s().p("AgtBNIgHgDIgFgGQgDgDAAgFQAAgEACgEIADgEQACgCADAAIAFgCQAFABADACIAFADIAFAFQACABADAAQADAAACgDQADgDADgFIAEgKIAEgJIgjhOIgEgHIgEgFIgEgCIgHgBIAAgJIA+AAIAAAJQgFgBgDADQgDABAAAFQAAAEADAGIAPAlIASgoIABgEIAAgDQAAgFgDgBQgDgDgGABIAAgJIAqAAIAAAJQgIAAgDADQgEAEgDAGIgoBgQgDAKgFAGQgFAHgFAEQgFAFgGACQgGABgFAAIgIAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhaBfIAAi9IC0AAIAAC9g");
	this.shape_1.setTransform(-0.85,-1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(-9.9,-11,18.1,19), null);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3AA22E").s().p("AA0BSIAAgJIAHgBQAAAAABAAQABgBAAAAQABAAAAgBQAAAAABAAIACgGIAAgIIAAhkQAAgJgCgEQgBgDgEAAIgEABIgEABIgDgIIAqgNIAJAAIAACHIAAAJQABAEABABIAEADIAGAAIAAAJgAgbBSIAAgJIAHgBQAAAAABAAQABgBAAAAQABAAAAgBQAAAAABAAIACgGIAAgIIAAhkQAAgJgCgEQgBgDgEAAIgEABIgEABIgDgIIApgNIAJAAIAACHIAAAJQABAEABABIAEADIAGAAIAAAJgAhnBSIAAgJIAHAAIAEgDIACgFIAAgJIAAguQAAgKgBgCQgBgDgEAAIgFAAIgFABIgDgIIArgNIAJAAIAABSIAAAIIADAFIADADIAGAAIAAAJgAhRgtIgGgEIgEgGIgCgIQAAgEACgDIAEgGIAGgEIAHgBIAHACQAEABACACIAEAGIACAHQAAAEgCAEIgEAFIgGAFQgDABgEAAIgHgBg");
	this.shape.setTransform(0.025,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiDBfIAAi9IEHAAIAAC9g");
	this.shape_1.setTransform(0.85,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(-12.3,-16.7,26.3,19), null);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3AA22E").s().p("ABjBQQgJgEgGgIQgGgHgDgKQgDgLAAgMQAAgNAFgKQAEgJAHgIQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAGADAIQAEAIAAAMIhCAAQAAAIACAHQADAHAEAGQAFAGAGAEQAGADAJAAQAHAAAGgEQAGgFAFgLIAHADIgFAPQgEAIgFAGQgGAFgHAEQgIAEgKAAQgLAAgJgEgABsgNQgDABgCAEQgCADgCAFIgBAJIAjAAIgBgIIgDgHQgCgEgEgDQgDgCgGAAQgDAAgDACgAgBBQIAAgJIAGgBQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIACgFIAAgIIAAhlQAAgJgCgDQgBgDgEAAIgEAAIgDABIgDgIIApgNIAJAAIAACIIAAAIQABAEABABIAEADIAGAAIAAAJgAhRBQIAAgJIAHgBQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIACgFIAAgIIAAhlQAAgJgCgDQgBgDgEAAIgEAAIgEABIgDgIIAqgNIAJAAIAACIIAAAIQABAEABABIAEADIAGAAIAAAJgAidBQIAAgJIAHAAIAEgDIACgFIAAgIIAAgvQAAgIgBgEQgBgDgEAAIgFABIgFABIgDgJIArgMIAJAAIAABRIAAAIIADAFIADADIAGAAIAAAJgAiHgvIgGgEIgEgGIgCgIQAAgEACgDIAEgGIAGgEIAHgBIAHACQAEABACACIAEAGIACAHQAAAEgCAEIgEAGIgGAEQgDABgEAAIgHgBg");
	this.shape.setTransform(0.025,-7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AioBfIAAi9IFRAAIAAC9g");
	this.shape_1.setTransform(0.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol67, new cjs.Rectangle(-16.3,-16.1,34.1,19), null);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3AA22E").s().p("Ah1BPIAAgJIAJgBIAFgCIACgFIAAgGIAAgmQgIAHgHAEQgHADgJAAQgIAAgHgDQgIgDgGgGQgGgGgEgKQgEgJAAgNQAAgMAEgLQAEgLAHgIQAIgIAKgFQAKgFALAAQAKAAAHADQAIAEAEAEIAEgDIAEgDIAEgDIAEgCIAHAAIAACGIAAAGQAAABABAAQAAABAAABQAAAAABAAQAAABABAAQABACAEABIAJABIAAAJgAiBhCQgFACgDAFQgDAFgCAHQgCAIAAALQAAALADAIQACAIADAFQAEAFAEADQAEADAFAAQAFAAAEgDIAJgHIAAg1IgBgHQgBgEgDgDQgCgDgEgBQgDgCgFAAQgFAAgEACgABwAcQgJgEgGgHQgGgIgDgJQgEgKAAgNQAAgMAFgLQAEgKAIgHQAHgHAJgEQAJgEAJAAQAJAAAHADQAHACAGAGQAGAFADAJQADAJAAAMIhBAAQAAAHACAIQACAHAFAGQAEAFAGADQAHAEAIAAQAIAAAGgFQAGgDAEgMIAHADIgFAPQgDAHgGAGQgFAGgIAEQgHADgKAAQgMAAgIgEgAB5hBQgDACgCADQgDADgBAFIgBAKIAiAAIAAgIIgDgIQgDgEgDgCQgEgDgFAAQgDAAgDACgAAZAgIAAgUIgGAGIgJAHIgKAFQgGACgGAAQgJAAgFgDQgGgDgDgFQgDgGgBgHIgBgOIAAgrIgBgIIgCgFQgCgCgDgBIgHAAIAAgKIAvAAIAABDQAAAKADAFQADAFAGAAQAFAAAGgEQAFgDAFgFIAAgxIAAgIIgCgFQgCgCgDgBIgIAAIAAgKIAwAAIAABJIABAMQACADADAAIAFgBIAFgBIADAJIgqAMg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("Ai3BfIAAi9IFvAAIAAC9g");
	this.shape_1.setTransform(0.9,-0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(-17.6,-10.3,36.900000000000006,19), null);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A334").s().p("ADaBQQgKgEgFgIQgGgHgDgKQgEgLAAgMQAAgNAFgKQAEgJAHgIQAIgHAIgEQAKgEAJAAQAIAAAHADQAIACAFAGQAHAGACAIQAEAIAAAMIhBAAQAAAIACAHQACAHAFAGQAEAGAGAEQAHADAIAAQAHAAAHgEQAFgFAFgLIAHADIgFAPQgDAIgGAGQgGAFgHAEQgHAEgKAAQgMAAgIgEgADjgNQgEABgCAEQgCADgBAFIgBAJIAiAAIgBgIIgCgHQgDgEgEgDQgDgCgGAAQgDAAgCACgAhmBUIAAgVIgGAHIgJAHIgLAFQgFACgHAAQgIAAgGgDQgFgEgEgFQgDgFgBgHIgBgQIAAgrIgBgHIgCgFQgBgCgDAAIgIgBIAAgJIAvAAIAABBQAAAMADAFQADAFAIAAQAEAAAGgEQAGgEAEgGIAAgxIAAgHIgCgFQgCgCgDAAIgIgBIAAgJIAxAAIAABIIABAMQABADADAAIAFAAIAGgBIACAIIgqANgAj+BQQgGgDgFgFIgDgEQgHgHgCgKQgEgLAAgMQAAgNAFgKQAEgJAHgHIAAgBQAIgHAJgEQAIgEAKAAQAIAAAIADQAHACAFAGQAGAGADAIQAEAIAAAMIhCAAQAAAIACAHQADAHAEAGQAFAGAGAEQAGADAJAAQAIAAAFgEQAHgFAEgLIAHADIgFAPQgDAIgGAGQgGAFgHAEQgIAEgKAAQgLAAgJgEgAj1gNQgCABgCAEQgDADgCAFIgBAJIAjAAIAAgIIgDgHQgDgEgDgDQgEgCgFAAQgEAAgDACgAB0BQIAAgJIAHgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIABgIIAAhlQAAgJgCgDQgCgDgEAAIgDAAIgFABIgDgIIAqgNIAJAAIAACIIABAIQAAAEACABIADADIAGAAIAAAJgAAlBQIAAgJIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIAAgIIAAhlQAAgJgBgDQgCgDgEAAIgDAAIgFABIgDgIIAqgNIAJAAIAACIIABAIQAAAEACABIADADIAGAAIAAAJgAgnBQIAAgJIAIAAIADgDIACgFIABgIIAAgvQAAgIgCgEQgBgDgEAAIgFABIgEABIgEgJIArgMIAIAAIAABRIAAAIIADAFIAEADIAGAAIAAAJgAgRgvIgGgEIgEgGIgCgIQABgEABgDIAEgGIAGgEIAHgBIAHACQADABADACIADAGIACAHQAAAEgCAEIgDAGIgGAEQgCABgFAAIgHgBg");
	this.shape.setTransform(0,-9.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AkeBfIAAi9II9AAIAAC9g");
	this.shape_1.setTransform(0.15,-8.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(-28.5,-18,57.4,19), null);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A334").s().p("AgHBUIAAgVIgHAHIgJAHIgKAFQgHACgGAAQgIAAgGgDQgFgEgDgFQgEgFgBgHIgBgQIAAgrIgBgHIgCgFQgBgCgEAAIgHgBIAAgJIAwAAIAABBQgBAMADAFQADAFAHAAQAFAAAGgEQAFgEAGgGIAAgxIgBgHIgCgFQgCgCgDAAIgHgBIAAgJIAuAAIAABIIABAMQACADAEAAIAEAAIAFgBIADAIIgqANgAifBQQgKgEgGgIQgFgHgEgKQgDgLAAgMQAAgNAFgKQAEgJAHgIQAIgHAIgEQAKgEAJAAQAIAAAHADQAIACAFAGQAHAGACAIQAEAIAAAMIhBAAQAAAIACAHQACAHAFAGQAEAGAGAEQAHADAIAAQAHAAAHgEQAFgFAFgLIAHADIgFAPQgDAIgGAGQgGAFgHAEQgHAEgKAAQgMAAgIgEgAiWgNQgEABgCAEQgCADgBAFIgBAJIAiAAIgBgIIgDgHQgCgEgEgDQgDgCgGAAQgDAAgCACgACDBQIAAgJIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIAAgIIAAhlQAAgJgCgDQgBgDgDAAIgFAAIgDABIgEgIIAqgNIAJAAIAACIIAAAIQABAEABABIAFADIAFAAIAAAJgAA3BQIAAgJIAGAAIAEgDIACgFIABgIIAAgvQgBgIgBgEQgBgDgEAAIgEABIgGABIgCgJIAqgMIAJAAIAABRIABAIIACAFIADADIAHAAIAAAJgABMgvIgGgEIgEgGIgBgIQAAgEABgDIAEgGIAGgEIAIgBIAHACQADABACACIAFAGIABAHQAAAEgBAEIgFAGIgFAEQgEABgDAAIgIgBg");
	this.shape.setTransform(0,-7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AjDBfIAAi9IGHAAIAAC9g");
	this.shape_1.setTransform(-0.55,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(-20.2,-16.7,39.3,19), null);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A334").s().p("ACYBQQgJgEgGgIQgGgHgDgKQgEgLAAgMQAAgNAFgKQAEgJAIgIQAHgHAJgEQAJgEAJAAQAJAAAHADQAHACAGAGQAGAGADAIQADAIAAAMIhBAAQAAAIACAHQACAHAFAGQAEAGAGAEQAHADAIAAQAIAAAGgEQAGgFAEgLIAHADIgFAPQgDAIgGAGQgFAFgIAEQgHAEgKAAQgMAAgIgEgAChgNQgDABgCAEQgDADgBAFIgBAJIAiAAIAAgIIgDgHQgDgEgDgDQgEgCgFAAQgDAAgDACgAi8BQQgJgEgGgIQgGgHgDgKQgDgLAAgMQAAgNAFgKQAEgJAHgIQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAGADAIQAEAIAAAMIhCAAQAAAIACAHQADAHAEAGQAFAGAGAEQAGADAJAAQAHAAAGgEQAGgFAFgLIAHADIgFAPQgEAIgFAGQgGAFgHAEQgIAEgKAAQgLAAgJgEgAizgNQgDABgCAEQgCADgCAFIgBAJIAjAAIgBgIIgDgHQgCgEgEgDQgDgCgGAAQgDAAgDACgAAzBQIAAgJIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIABgIIAAhlQAAgJgCgDQgCgDgDAAIgEAAIgEABIgEgIIAqgNIAJAAIAACIIABAIQAAAEACABIAEADIAFAAIAAAJgAgcBQIAAgJIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIABgIIAAhlQAAgJgCgDQgCgDgDAAIgEAAIgEABIgEgIIApgNIAJAAIAACIIABAIQAAAEACABIAEADIAFAAIAAAJgAhoBQIAAgJIAHAAIADgDIACgFIABgIIAAgvQAAgIgCgEQgBgDgEAAIgEABIgFABIgDgJIAqgMIAJAAIAABRIABAIIACAFIAEADIAGAAIAAAJgAhTgvIgGgEIgEgGIgBgIQAAgEABgDIAEgGIAGgEIAIgBIAHACQADABADACIAEAGIABAHQAAAEgBAEIgEAGIgGAEQgDABgEAAIgIgBg");
	this.shape.setTransform(0.025,-7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AjgBfIAAi9IHBAAIAAC9g");
	this.shape_1.setTransform(0.85,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol63, new cjs.Rectangle(-21.6,-16.7,44.900000000000006,19), null);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A334").s().p("AheBQQgJgEgGgIQgGgHgDgKQgDgLAAgMQAAgNAFgKQAEgJAHgIQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAGADAIQAEAIAAAMIhCAAQAAAIACAHQADAHAEAGQAFAGAGAEQAGADAJAAQAHAAAGgEQAGgFAFgLIAHADIgFAPQgEAIgFAGQgGAFgHAEQgIAEgKAAQgLAAgJgEgAhVgNQgDABgCAEQgCADgCAFIgBAJIAjAAIgBgIIgDgHQgCgEgEgDQgDgCgGAAQgDAAgDACgABBBQIAAgJIAGgBQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIACgFIABgIIAAhlQAAgJgCgDQgCgDgDAAIgEAAIgEABIgEgIIAqgNIAJAAIAACIIABAIQAAAEACABIAEADIAFAAIAAAJgAgKBQIAAgJIAHAAIADgDIABgFIABgIIAAgvQAAgIgCgEQAAgDgEAAIgEABIgFABIgDgJIApgMIAJAAIAABRIABAIIACAFIAEADIAGAAIAAAJgAAKgvIgGgEIgEgGIAAgIQAAgEAAgDIAEgGIAGgEIAIgBIAHACQADABADACIAEAGIABAHQAAAEgBAEIgEAGIgGAEQgDABgEAAIgIgBg");
	this.shape.setTransform(0.025,-7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiDBfIAAi9IEHAAIAAC9g");
	this.shape_1.setTransform(0.85,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(-12.3,-16.7,26.3,19), null);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A334").s().p("ACcBQQgJgEgGgIQgGgHgDgKQgEgLAAgMQAAgNAFgKQAEgJAIgIQAHgHAJgEQAJgEAJAAQAJAAAHADQAHACAGAGQAGAGADAIQADAIAAAMIhBAAQAAAIACAHQACAHAFAGQAEAGAGAEQAHADAIAAQAIAAAGgEQAGgFAEgLIAHADIgFAPQgDAIgGAGQgFAFgIAEQgHAEgKAAQgMAAgIgEgAClgNQgDABgCAEQgDADgBAFIgBAJIAiAAIAAgIIgDgHQgDgEgDgDQgEgCgFAAQgDAAgDACgAiYBRIgGgDIgDgFIgCgGIgHAGIgIAFIgIADIgJABQgMAAgGgHQgGgHAAgNQAAgIAGgHQAGgHAIgGQAJgFAKgEIARgHIAAgEIAAgJIgDgIIgEgFQgDgCgEAAQgFAAgDAEQgDADAAAKIAAAEIgDAFIgFAEQgCACgFAAQgGAAgEgEQgEgEAAgHQAAgFAEgFQAEgGAHgDQAGgEAIgCIAOgBQAMAAAIACQAJABAFAFQAFAEADAHQACAHAAAIIAAAfIAAAJIABAIIABAEQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIADgBIADgCIAEgDIACgCIAAALIgFAFIgHAGIgKAEQgGACgFAAIgHgBgAivAdIgHAGQgDAEgBAEIgBAHQAAAFACAEQADADAEAAQAEAAAEgCIAHgHIAAgfIgMAHgAA3BQIAAgJIAGgBQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIACgFIABgIIAAhlQAAgJgCgDQgCgDgDAAIgEAAIgEABIgEgIIAqgNIAJAAIAACIIABAIQAAAEACABIAEADIAFAAIAAAJgAgYBQIAAgJIAGgBQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIACgFIABgIIAAhlQAAgJgCgDQgCgDgDAAIgEAAIgEABIgEgIIApgNIAJAAIAACIIABAIQAAAEACABIAEADIAFAAIAAAJgAhkBQIAAgJIAHAAIADgDIACgFIABgIIAAgvQAAgIgCgEQgBgDgEAAIgEABIgFABIgDgJIAqgMIAJAAIAABRIABAIIACAFIAEADIAGAAIAAAJgAhPgvIgGgEIgEgGIgBgIQAAgEABgDIAEgGIAGgEIAIgBIAHACQADABADACIAEAGIABAHQAAAEgBAEIgEAGIgGAEQgDABgEAAIgIgBg");
	this.shape.setTransform(0.025,-7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AjgBfIAAi9IHBAAIAAC9g");
	this.shape_1.setTransform(0.85,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol61, new cjs.Rectangle(-22,-16.1,45.4,19), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44A334").s().p("Ag6BSIgGgDIgDgGIgCgFIgHAFIgIAGIgIADIgJABQgMAAgGgHQgGgHAAgNQAAgJAGgGQAGgIAIgFQAJgGAKgEIARgGIAAgEIAAgJIgDgIIgEgFQgDgCgEAAQgFAAgDAEQgDADAAAJIAAAFIgDAFIgFAEQgCABgFABQgGAAgEgFQgEgDAAgHQAAgGAEgEQAEgGAHgDQAGgEAIgCIAOgCQAMAAAIACQAJACAFAEQAFAFADAGQACAHAAAJIAAAfIAAAJIABAIIABAEQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIADAAIADgCIAEgDIACgCIAAALIgFAFIgHAGIgKAEQgGACgFAAIgHgBgAhRAdIgHAHQgDAEgBAEIgBAHQAAAFACAEQADADAEAAQAEAAAEgCIAHgHIAAgfIgMAGgABFBRIAAgJIAGgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAIACgGIABgIIAAhkQAAgJgCgDQgCgEgDAAIgEABIgEABIgEgIIAqgNIAJAAIAACHIABAJQAAADACACIAEADIAFAAIAAAJgAgGBRIAAgJIAGAAIADgDIACgFIABgJIAAgvQAAgIgCgDQgBgDgDAAIgEAAIgFABIgDgIIApgNIAJAAIAABSIABAIIACAFIAEADIAGAAIAAAJgAAOguIgGgEIgEgGIgBgIQAAgEABgDIAEgGIAGgEIAIgBIAHABQADACADACIAEAGIABAHQAAAEgBAEIgEAFIgGAFQgDABgEAAIgIgBg");
	this.shape.setTransform(0.025,-7.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiDBfIAAi9IEHAAIAAC9g");
	this.shape_1.setTransform(0.85,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol60, new cjs.Rectangle(-12.6,-16.1,26.6,19), null);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#692583").s().p("AB2BDQgKgEgFgHQgHgIgCgKQgEgKAAgNQAAgMAFgKQAEgKAHgHQAHgHAJgEQAKgEAJAAQAIAAAIADQAHACAFAGQAHAFACAJQAEAJAAALIhCAAQABAHACAIQACAHAEAGQAFAGAGADQAHAEAIAAQAHAAAHgFQAFgEAFgMIAHADIgFAQQgEAHgFAGQgGAGgHAEQgHADgKAAQgMAAgIgEgAB/gaQgEACgCADQgCADgBAFIgCAKIAjAAIgBgIIgCgIQgDgEgEgCQgDgDgGAAQgCAAgDACgAAZA+QgGgJAAgRIAAg8IgSAAIAAgHQAHgCAGgDIALgJIAKgMQAGgGADgHIAIAAIAAAiIAbAAIAAAMIgbAAIAAA4QAAAKACAEQACAEAFAAQADAAAEgDQADgDADgGIAHAAIgDAKQgDAGgEAFQgEAFgHAEQgGADgKAAQgMAAgHgJgAg4A+QgHgJAAgRIAAg8IgSAAIAAgHQAHgCAGgDIAMgJIAKgMQAFgGADgHIAIAAIAAAiIAcAAIAAAMIgcAAIAAA4QAAAKACAEQADAEAEAAQAEAAAEgDQADgDACgGIAHAAIgDAKQgCAGgEAFQgFAFgGAEQgHADgJAAQgNAAgGgJgAiaBDQgIgEgGgHQgHgIgCgKQgEgKAAgNQAAgMAFgKQAEgKAHgHQAIgHAJgEQAJgEAJAAQAIAAAIADQAHACAFAGQAHAFACAJQAEAJAAALIhCAAQAAAHACAIQADAHAEAGQAFAGAGADQAGAEAJAAQAHAAAHgFQAGgEAEgMIAHADIgFAQQgDAHgGAGQgFAGgIAEQgIADgJAAQgMAAgJgEgAiRgaQgDACgBADQgDADgCAFIgBAKIAjAAIgBgIIgCgIQgDgEgEgCQgDgDgGAAQgCAAgEACg");
	this.shape.setTransform(0,-5.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AitBcIAAi3IFbAAIAAC3g");
	this.shape_1.setTransform(0.85,-5.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(-18.2,-14.9,36.5,18.4), null);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AArA3IgJgCIgGgDIgFgBIgBABIgBACIgBACIAAACIgJAAIAAgsIAJAAQAAAHADAGIAHAKQADAFAGADQAFADAGAAQAHAAADgEQADgDABgFQgBgGgEgEIgJgHIgNgHIgNgIQgGgDgEgGQgDgHAAgJQAAgHADgGQACgGAFgEQAFgEAGgCQAGgCAGAAIAJABIAIABIAHACIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIABgDIAIAAIAAAoIgJAAIgEgLQgEgGgDgEQgFgEgEgCQgFgCgFAAQgHAAgDADQgDADgBAEQABAGAEAEQAEAEAHADIANAHIAOAIQAGAEAEAGQAEAGABAJQgBAIgDAGQgCAGgFAEQgGAFgGACQgHACgIAAIgKgBgAg5A3IgJgCIgGgDIgEgBIgCABIgBACIgBACIgBACIgJAAIAAgsIAJAAQACAHACAGIAHAKQADAFAGADQAFADAGAAQAIAAACgEQADgDAAgFQAAgGgDgEIgKgHIgNgHIgNgIQgFgDgEgGQgEgHAAgJQAAgHADgGQADgGAEgEQAFgEAGgCQAGgCAGAAIAJABIAIABIAHACIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIABgDIAIAAIAAAoIgIAAIgGgLQgDgGgDgEQgFgEgEgCQgFgCgGAAQgGAAgDADQgDADgBAEQABAGAEAEQAEAEAHADIANAHIAOAIQAGAEAFAGQADAGAAAJQAAAIgDAGQgCAGgFAEQgGAFgGACQgHACgIAAIgKgBg");
	this.shape.setTransform(0,-5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhiBcIAAi3IDFAAIAAC3g");
	this.shape_1.setTransform(0.85,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(-9,-14.2,19.7,18.299999999999997), null);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDBPIAAgKIAJAAIAEgCIADgFIAAgGIAAgnQgIAIgHAEQgHADgKAAQgHAAgHgDQgIgDgHgGQgFgHgEgJQgEgJgBgNQAAgNAFgKQAEgLAHgIQAHgIAKgGQALgEALAAQAJAAAIADQAHAEAFAEIAEgDIAEgDIAEgDIADgCIAHAAIAACGIABAGQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQABACADABIAJAAIAAAKgAhPhDQgFADgDAFQgDAEgCAIQgCAIAAALQAAALACAIQACAIAEAFQAEAFAEADQAEADAFgBQAFABAEgDIAJgHIAAg1IgBgIQgCgDgCgDQgDgDgDgCQgEgBgEAAQgFAAgEABgABLAgIAAgUIgHAGIgJAHIgKAFQgGACgGAAQgJAAgFgDQgGgEgDgEQgEgGAAgHIgCgOIAAgrIgBgJIgCgFQgBgBgDgBIgGgBIAAgJIAuAAIAABCQAAALACAFQAEAFAHAAQAEAAAHgEQAFgDAFgGIAAgwIAAgJIgCgFQgDgBgCgBIgIgBIAAgJIAwAAIAABJIABAMQABADAEAAIAFgBIAFgBIADAJIgqAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.1,-1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(-13.2,-10.4,26.6,18.3), null);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3DA535").s().p("AB6A4IAAgVIgHAHIgJAHIgKAFQgGACgGAAQgJAAgGgDQgFgEgDgFQgDgFgBgHIgBgQIAAgqIgBgIIgDgFQgBgCgDAAIgIgBIAAgJIAwAAIAABBQAAAMADAFQADAFAHAAQAFAAAGgEQAFgEAFgGIAAgwIgBgIIgBgFQgDgCgDAAIgHgBIAAgJIAwAAIAABIIABAMQACADADAAIAFAAIAFgBIADAIIgrANgAiRA0QgJgEgGgIQgGgHgDgKQgDgLgBgMQAAgMAGgKQADgKAIgIQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAGADAIQADAJAAAMIhBAAQAAAIACAGQACAHAFAGQAFAGAFAEQAHADAIAAQAIAAAGgEQAGgFAFgLIAGADIgEAPQgEAIgFAGQgGAFgIAEQgHAEgKAAQgMAAgIgEgAiIgpQgDABgCAEQgCADgCAFIgBAKIAiAAIAAgIIgDgIQgCgEgEgDQgDgCgGAAQgDAAgDACgAACA1IgFgDIgDgFIgCgGIgHAGIgIAFIgIADIgJABQgMAAgGgHQgHgHAAgNQAAgIAHgHQAFgHAJgFQAJgFAKgEIARgHIAAgEIgBgKIgCgIIgEgFQgDgCgEAAQgGAAgDAEQgCADAAAKIAAAFIgDAFIgFAEQgDACgEAAQgGAAgEgEQgEgEAAgHQAAgGAEgFQAEgGAGgDQAHgEAIgCIANgBQAMAAAIACQAJABAFAFQAFAEADAHQACAHAAAJIAAAeIAAAJIAAAIIACAEQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIACgBIAEgCIAEgDIACgCIAAALIgFAFIgHAGIgKAEQgGACgGAAIgGgBgAgUABIgIAGQgDAEAAAEIgBAHQgBAFADAEQADADAEAAQAEAAAEgCIAHgHIAAgeIgMAGg");
	this.shape.setTransform(0,-2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AimBcIAAi3IFNAAIAAC3g");
	this.shape_1.setTransform(-0.3,-2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(-17.3,-11.6,34.7,18.3), null);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s().p("AhYBcIAAi3ICxAAIAAC3g");
	this.shape.setTransform(0.625,-7.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DA535").s().p("AgSBRQgIgEgGgIQgHgHgCgKQgEgLAAgMQAAgNAFgKQAEgJAHgIQAHgHAJgEQAKgEAIAAQAIAAAIADQAHACAFAGQAHAGACAIQAEAIAAAMIhBAAQAAAIADAHQACAHAEAGQAFAGAFAEQAGADAJAAQAHAAAHgEQAFgFAFgLIAHADIgFAPQgEAIgFAGQgFAFgIAEQgIAEgJAAQgLAAgJgEgAgJgMQgDABgBAEQgDADgCAEIgBAKIAiAAIgBgIIgCgHQgDgEgEgDQgDgCgFAAQgCAAgEACgAAOgnIgggTQgGgEgDgDQgDgDAAgEQAAgFADgDQAEgEAEAAQAFAAAEACQAFADADAEIAeAkg");
	this.shape_1.setTransform(0,-7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(-8.2,-16.8,17.7,18.3), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3DA535").s().p("ABEA3IAAgUIgHAHIgJAHIgKAEQgGACgGAAQgJAAgGgCQgFgEgDgFQgDgGgBgGIgBgQIAAgqIgBgIIgCgFQgBgCgDgBIgIAAIAAgKIAvAAIAABCQAAALADAGQADAEAHAAQAFAAAGgDQAFgEAFgGIAAgwIAAgIIgCgFQgDgCgDgBIgHAAIAAgKIAwAAIAABIIABANQABADAEAAIAFgBIAFgBIADAJIgrAMgAgzA1IgGgDIgDgGIgCgGIgHAGIgIAGIgIADIgJABQgMAAgGgHQgHgHAAgNQAAgIAHgIQAFgGAJgFQAJgGAKgEIARgGIAAgEIgBgKIgCgIIgEgFQgDgCgEAAQgGAAgDADQgCAEAAAKIAAAFIgDAFIgFAEQgDACgEAAQgGAAgEgFQgEgDAAgHQAAgHAEgEQAEgGAGgDQAHgEAIgCIANgCQAMAAAJACQAJACAFAFQAFAEADAGQACAIAAAJIAAAeIAAAJIAAAIIACAEQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAIACgBIAEgCIAEgDIACgCIAAALIgFAFIgHAFIgKAFQgGACgGAAIgGgBgAhKAAIgIAHQgDADAAAFIgBAHQgBAEADAFQADADAEAAQAEAAAEgCIAHgHIAAgfIgMAGg");
	this.shape.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-3.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(-12.5,-12.9,26.6,18.3), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwA0IAAgJIA3hSIgQAAQgGAAgEACQgFACgCADQgDAEgBAFIgCALIgJAAIABgnIBZAAIAAAJIg3BSIATAAQAGAAAFgCQAEgBADgEQADgDACgGQACgGABgIIAIAAIgBAqg");
	this.shape.setTransform(0.025,-4.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhVBcIAAi3ICrAAIAAC3g");
	this.shape_1.setTransform(-1.075,-4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(-9.7,-13.6,17.299999999999997,18.4), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8BqIAAgJIAHgBIADgCIACgFIABgIIAAhhQAAgJgCgDQgCgDgDAAIgEAAIgEACIgEgIIAqgOIAJAAIAAAVQAJgLAIgFQAJgFAJAAQAHAAAHADQAHAEAFAGQAGAGADAIQADAJAAALQAAAMgDAMQgDAMgHAJQgGAIgKAFQgKAFgNAAQgFAAgGgCQgGgBgEgDIAAAcIABAIIACAFQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAGABIAAAJgAhEgbQgFADgGAGIAAAvQAAAKAFAFQAFAFAJAAQAEAAAEgCQADgCADgFQADgFACgIQACgIAAgNQAAgGgCgGIgDgMQgCgFgEgDQgEgEgFAAQgEAAgFADgABKA4IAAgJIAGgBIAEgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgJIAAgpQAAgLgDgFQgDgFgHAAIgFABIgGAEIgFAEIgGAGIAAAuIABAJQABADABACIAEACIAGABIAAAJIg6AAIAAgJIAHgBQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIABgFIABgIIAAhkQAAgJgCgEQgCgDgDAAIgEABIgEABIgEgIIAqgNIAJAAIAABMIAKgJIAIgGIAKgFQAFgCAGAAQAJAAAFAEQAGADADAGQADAFABAIIABANIAAAqIABAJIACAFIADACIAGABIAAAJg");
	this.shape.setTransform(0.025,-4.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(-13.1,-15.1,27.2,21.2), null);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40A247").s().p("AgVBSIgFgDIgEgGIgBgGIgIAGIgHAGIgIADIgKABQgLAAgHgHQgFgHAAgNQAAgIAFgIQAHgGAIgGQAIgGAKgDIASgHIAAgEIAAgJIgDgIIgFgFQgCgCgEAAQgGAAgDADQgCAEAAAJIgBAFIgCAFIgFAEQgDACgEAAQgGgBgEgEQgEgDAAgHQAAgFAEgFQAEgGAHgDQAGgEAHgCIAPgBQAMAAAIABQAJACAFAFQAFAEACAGQACAHAAAJIAAAfIAAAJIABAIIABAEQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAEgBIADgDIADgCIADgCIAAALIgFAFIgIAFIgJAFQgFACgFAAIgIgBgAgrAdIgHAHQgDAEgCAEIgBAHQABAEACAEQACAEAFAAQAEAAADgCIAIgHIAAggIgMAHgAAfBRIAAgJIAHAAIADgDIACgFIAAgJIAAguQAAgJgBgDQgBgDgEAAIgFAAIgEABIgEgIIArgMIAJAAIAABRIABAIIACAFIAEADIAFAAIAAAJgAA0guIgGgEIgEgGIgCgIQABgEABgDIAEgGIAGgEIAHgBIAIACQADAAADADIAEAGIABAHQAAAEgBADIgEAGIgGAFQgEABgEAAIgHgBg");
	this.shape.setTransform(0,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(-12.5,-16.1,26.6,19), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40A247").s().p("AAqBSIAAgJIAHAAIADgCQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBIAAgJIAAgqQAAgKgDgFQgCgFgIAAQgFAAgGADQgFADgFAFIAAAzIABAIIABAFIAEADIAGAAIAAAJIg4AAIAAgJIAGAAIAEgDIABgFIABgIIAAgvIgBgMQgCgDgDAAIgFAAIgFABIgDgIIAqgMIAJAAIAAASIAJgGIAJgGIAJgFQAFgCAGABQAJAAAGADQAFADADAGQADAGABAGIABANIAAAsIABAIIACAFIAEADIAGAAIAAAJgAhdBSIAAgJIAIAAIADgDIACgFIABgJIAAguQAAgKgCgCQgBgDgEAAIgFAAIgEABIgEgIIArgMIAJAAIAABRIAAAIIADAFIAEADIAGAAIAAAJgAhHgtIgGgEIgEgGIgCgIQABgEABgDIAEgGIAGgEIAHgBIAHACQAEAAADADIADAGIACAHQAAAEgCADIgDAGIgHAFQgCABgFAAIgHgBg");
	this.shape.setTransform(0,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.1,-3.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(-13.2,-13.4,26.6,18.9), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABGA4IAAgVIgGAGIgJAHIgLAGQgGACgGAAQgJAAgFgDQgFgEgDgFQgEgFgBgIIgBgPIAAgqIgBgIIgCgFQgBgCgDgBIgHAAIAAgJIAvAAIAABBQAAAMACAEQADAFAHABQAFAAAGgFQAFgDAFgGIAAgwIAAgIIgCgFQgCgCgDgBIgHAAIAAgJIAvAAIAABHIABANQACADAEAAIAEAAIAGgBIACAIIgqANgAhaAzQgJgEgHgIQgIgIgDgKQgEgKAAgKQAAgKAEgKQADgLAIgIQAGgHAKgFQAKgFAMABQALAAAKADQAKAEAHAIQAHAHAEAKQAEAKAAAKQAAAMgEAKQgEAKgGAIQgHAIgKAFQgJAEgMABQgMgBgLgEgAhOgqQgDACgCAFQgCAEgBAGQgBAHAAALQAAAJACAJQACAKAEAIQADAGAFAEQAEAFAFAAQAHAAAEgIQADgJAAgVIgBgRQgCgJgEgHQgDgHgEgFQgFgEgGAAQgDAAgCABg");
	this.shape.setTransform(0,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-12.5,-14.2,26.6,18.299999999999997), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#549848").s().p("Ag6BPQgKgEgIgIQgGgIgEgJQgEgKAAgLQAAgLAEgKQAEgJAGgIQAHgIAKgFQAJgEAMAAQAMAAALAEQAJAEAGAHQAHAHAEAJQAEAKAAALQAAAMgDAKQgFAKgGAIQgFAIgKAFQgKAFgMAAQgMAAgKgFgAgvgNQgDABgCAFQgCAEgBAFQgBAHgBALQABAKACAKQACAJADAIQAEAHAFAEQAFAEAEAAQAHAAADgIQAEgJAAgUIgCgSQgCgKgCgHQgDgGgFgEQgFgFgGAAQgCAAgDACgAAhBQIAAgJIAHAAIADgDIADgFIAAgIIAAgvQAAgIgCgEQgBgDgDAAIgFABIgFABIgDgJIAqgMIAJAAIAABRIABAIIADAFIADADIAGAAIAAAJgAA3gvIgGgEIgFgGIgBgIQAAgEABgDIAFgGIAGgEIAHgBIAHACQADABADACIAEAGIABAHQAAAEgBAEIgEAGIgGAEQgDABgEAAIgHgBg");
	this.shape.setTransform(0,-7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhnBcIAAi3IDQAAIAAC3g");
	this.shape_1.setTransform(-0.65,-7.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(-11.1,-16.2,20.9,18.4), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#549848").s().p("ABAA4IAAgVIgGAHIgJAHIgLAFQgGACgHAAQgIAAgFgDQgGgEgDgFQgDgFgBgHIgBgQIAAgqIgBgIIgBgFQgCgCgDAAIgHgBIAAgJIAuAAIAABBQAAAMACAFQADAFAIAAQAEAAAGgEQAGgEAFgGIAAgwIAAgIIgDgFQgCgCgCAAIgIgBIAAgJIAwAAIAABIIABAMQABADAEAAIAFAAIAFgBIACAIIgpANgAhXA0QgJgEgGgIQgGgHgDgKQgEgLABgMQAAgMAEgKQAFgKAHgIQAHgHAJgEQAJgEAJAAQAJAAAHADQAIACAFAGQAGAGADAIQADAJABAMIhCAAQAAAIACAGQADAHAEAGQAEAGAHAEQAGADAIAAQAIAAAGgEQAGgFAEgLIAIADIgGAPQgDAIgGAGQgFAFgHAEQgIAEgKAAQgLAAgJgEgAhOgpQgDABgCAEQgDADgBAFIgBAKIAiAAIAAgIIgDgIQgDgEgDgDQgEgCgFAAQgDAAgDACg");
	this.shape.setTransform(0,-4.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(-12.5,-13.6,26.6,18.4), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhWBPQgJgEgGgHQgGgHgEgKQgCgJAAgLQAAgOADgKQAFgKAGgIQAHgIAIgEQAJgEAJAAQAMAAAHADQAIACAFAFQAFAEACAFQADAEAAAEQAAAGgEAEQgDAEgIAAQgFAAgDgDQgDgCgBgDIgDgHIgDgHQgBgEgDgCQgDgCgGAAQgJAAgEAGQgFAHABAMQAAAKACAKQADAIAEAHQAFAHAGAEQAGADAIAAIAFAAIAHgDQAEgCADgEIAFgLIAHADIgFAPQgEAIgFAGQgGAFgHAEQgIAEgKAAQgKAAgJgEgAA6BPIAAgJIAGAAIAEgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIABgJIAAgpQAAgLgDgEQgCgFgIAAIgFABIgFADIgGAEIgGAFIAAAwIACAIQAAAEACABIADADIAGAAIAAAJIg5AAIAAgJIAHgBQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIACgFIAAgIIAAhlQAAgJgBgDQgCgDgDAAIgDAAIgFABIgDgHIAogOIAJAAIAABMIAKgIIAIgHIAKgFQAFgBAHAAQAIAAAFADQAGAEADAFQADAGACAHIABANIAAArIAAAIIACAFIAEADIAFAAIAAAJg");
	this.shape.setTransform(0,-7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-7.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(-12.5,-16.8,26.6,18.3), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBA0IAAgJQAEAAACgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgBAAAAIgCgEIgEgHIgEgHIgDgFIgLAOQgEAGAAADQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQACABADAAIAAAJIgrAAIAAgJQAHAAAFgDQAGgEAHgIIASgYIgagiIgFgHIgFgDIgEgCIgFAAIAAgJIA8AAIAAAJIgBAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBAEIABADIADAGIAGAHIADgDIAEgFIAEgGIABgDQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIAAgJIAmAAIAAAJQgGAAgEADQgFADgFAFIgIAKIgJALIAcAnIAFAHIAEAEIADADIAFAAIAAAJg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhbBcIAAi3IC3AAIAAC3g");
	this.shape_1.setTransform(0,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-9.1,-9,18.299999999999997,18.3), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BAB43").s().p("AhXA0QgJgEgGgIQgGgHgDgKQgDgLAAgMQAAgMAFgKQAEgKAHgIQAHgHAJgEQAJgEAKAAQAIAAAHADQAIACAFAGQAGAGADAIQAEAJAAAMIhCAAQAAAIACAGQADAHAEAGQAFAGAGAEQAGADAJAAQAHAAAGgEQAGgFAFgLIAHADIgFAPQgEAIgFAGQgGAFgHAEQgIAEgKAAQgLAAgJgEgAhOgpQgDABgCAEQgCADgCAFIgBAKIAjAAIgBgIIgDgIQgCgEgEgDQgDgCgGAAQgDAAgDACgAA6A0IAAgJIAGAAIAEgCQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIABgJIAAgoQAAgLgDgFQgDgFgHAAQgFAAgGADQgFADgGAGIAAAxIABAIIACAFIAEADIAGAAIAAAJIg5AAIAAgJIAHAAIADgDIABgFIABgIIAAguIgBgNQgCgDgCAAIgFABIgFABIgDgJIApgMIAJAAIAAATIAKgHIAIgGIAKgFQAFgBAGAAQAJAAAFADQAGAEADAFQADAGABAHIABAOIAAAqIABAIIACAFIADADIAGAAIAAAJg");
	this.shape.setTransform(0.025,-4.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(-12.5,-13.6,26.6,18.4), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzA2IgFgEIgEgFIgBgGIgIAGIgHAFIgIAEIgKABQgLAAgHgHQgGgHAAgNQAAgJAGgHQAGgHAJgFQAIgFAKgEIASgGIAAgFIgBgJIgCgIIgFgFQgCgCgEAAQgGAAgDADQgCAEAAAJIgBAGIgCAFIgFAEQgDABgEAAQgHAAgDgEQgEgDAAgHQAAgHAEgFQAEgFAGgEQAHgDAHgCIAOgCQAMAAAJACQAIACAGAEQAFAFACAGQADAHAAAKIAAAeIAAAJIAAAIIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIADgBIAEgCIADgCIADgCIAAALIgFAEIgIAGIgKAFQgFACgGAAIgHgBgAhJABIgIAHQgDADgBAEIgBAIQAAAEADAEQACAEAFAAQADAAAEgDIAIgGIAAgfIgMAGgAA/A1IAAgJIAGgBIAEgCQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAIAAgJIAAgpQAAgLgDgFQgCgFgIAAQgFAAgFADQgGADgFAGIAAAyIABAIIACAFIADACIAGABIAAAJIg4AAIAAgJIAFgBIAEgCIACgFIAAgIIAAgvIgBgMQgBgDgEAAIgEAAIgFABIgCgIIApgNIAJAAIAAATIAJgGIAJgHIAJgEQAFgCAHAAQAIAAAGAEQAFADADAGQADAFACAIIABANIAAArIAAAIIACAFIAEACIAFABIAAAJg");
	this.shape.setTransform(0.025,-5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-12.5,-14.2,26.6,18.299999999999997), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABGA4IAAgVIgGAGIgJAHIgLAGQgGACgGAAQgJAAgFgDQgFgEgDgFQgEgFgBgIIgBgPIAAgqIgBgIIgCgFQgBgCgDgBIgHAAIAAgJIAvAAIAABBQAAAMACAEQADAFAHABQAFAAAGgFQAFgDAFgGIAAgwIAAgIIgCgFQgCgCgDgBIgHAAIAAgJIAvAAIAABHIABANQACADAEAAIAEAAIAGgBIACAIIgqANgAhaAzQgJgEgHgIQgIgIgDgKQgEgKAAgKQAAgKAEgKQADgLAIgIQAGgHAKgFQAKgFAMABQALAAAKADQAKAEAHAIQAHAHAEAKQAEAKAAAKQAAAMgEAKQgEAKgGAIQgHAIgKAFQgJAEgMABQgMgBgLgEgAhOgqQgDACgCAFQgCAEgBAGQgBAHAAALQAAAJACAJQACAKAEAIQADAGAFAEQAEAFAFAAQAHAAAEgIQADgJAAgVIgBgRQgCgJgEgHQgDgHgEgFQgFgEgGAAQgDAAgCABg");
	this.shape.setTransform(0,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(-12.5,-14.2,26.6,18.299999999999997), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhZAzQgKgEgHgIQgHgIgEgKQgEgKAAgKQAAgKAEgKQAEgLAHgIQAGgHAKgFQAKgFAMABQAMAAAKADQAJAEAHAIQAHAHAEAKQAEAKAAAKQAAAMgDAKQgEAKgHAIQgGAIgKAFQgKAEgMABQgMgBgKgEgAhOgqQgDACgCAFQgCAEgBAGQgBAHAAALQAAAJACAJQACAKAEAIQADAGAFAEQAFAFAEAAQAHAAAEgIQADgJAAgVQAAgHgBgKQgCgJgDgHQgDgHgFgFQgFgEgGAAQgCAAgDABgABBA0IAAgJIAGgBIAEgCQAAAAAAAAQABgBAAAAQAAgBAAgBQABAAAAgBIAAgJIAAgpQAAgKgDgGQgCgEgIAAQgFAAgFACQgGAEgFAFIAAAyIABAIIACAFIADACIAGABIAAAJIg4AAIAAgJIAFgBIAEgCIACgFIAAgIIAAgvIgBgMQgBgDgEAAIgEABIgFABIgCgJIApgMIAJAAIAAATIAJgHIAJgHIAJgEQAFgBAHAAQAIAAAGADQAFAEADAFQADAFACAIIABAOIAAAqIAAAIIACAFIAEACIAGABIAAAJg");
	this.shape.setTransform(0.025,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AiEBcIAAi3IEJAAIAAC3g");
	this.shape_1.setTransform(0.8,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(-12.5,-14.2,26.6,18.299999999999997), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAzBSIgFgDIgEgGIgBgGIgIAGIgHAGIgIADIgKABQgKAAgHgHQgFgHAAgNQAAgIAFgIQAHgGAHgGQAIgGAKgDIASgHIAAgEIgBgJIgCgIIgFgFQgCgCgEAAQgFAAgDADQgDAEAAAJIgBAFIgCAFIgFAEQgDACgEAAQgFgBgEgEQgEgDAAgHQAAgFAEgFQAEgGAGgDQAGgEAHgCIAPgBQAMAAAIABQAIACAGAFQAFAEACAGQADAHAAAJIAAAfIAAAJIABAIIABAEQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAEgBIADgDIADgCIADgCIAAALIgFAFIgIAFIgKAFQgFACgGAAIgHgBgAAdAdIgHAHQgDAEgCAEIgBAHQAAAEADAEQADAEAEAAQADAAAEgCIAIgHIAAggIgMAHgAhVBRIAAgJIAHAAIADgDIACgFIABgJIAAguQAAgJgCgDQgBgDgDAAIgFAAIgFABIgDgIIAqgMIAJAAIAABRIABAIIACAFIAEADIAGAAIAAAJgAhAguIgFgEIgFgGIgBgIQAAgEABgDIAFgGIAFgEIAIgBIAHACQAEAAACADIAEAGIABAHQABAEgCADIgEAGIgGAFQgDABgEAAIgIgBg");
	this.shape.setTransform(0,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-9.2,-16.1,19.299999999999997,20.5), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhdBNIgQgEQgHgDgEgEQgEgFAAgEQAAgGAEgEIABgCQAFgGAMgHQgGgCgEgEQgDgEAAgEQAAgDACgDIAEgIIAHgGIAHgHIgHgEIgGgIIgFgJQgCgFAAgFQAAgJAEgHQADgHAGgFQAGgFAJgDQAIgCAJAAIAMABIAJADIAJADIAKABIAEAAIAEAAIAFAAIADAAIAEABQACABAAAEQAAAEgCACQgBABgEAAIgDAAIgEAAIgEAAIgDgBQADAEABAFIABAJQAAAGgCAGQgDAHgFAFQgGAGgIADQgIADgLAAIgIAAIgJgCIgFAFQgDACAAADQAAACAEABIAJABIANAAIAPABIAOACQAIABAFADQAGADADAGQAEAGAAAIQAAAHgDAGQgDAFgFAFQgFAEgGAEIgNAGIgOADIgNABQgLAAgJgCgAhfAoIgBAGQAAAEAEACQAEADAFACIAMABIAMABIALgBIALgCQAFgCADgCQADgCAAgEQAAgEgCgCIgHgDIgMgCIgPgBIgQAAIgNgBIgEAHgAhOhDQgDACgBADQgCAEgBAEIgBAIIABAMQABAGACAFQACAEAEAEQADACAGAAQAEAAADgBQADgDACgEQACgDAAgFIABgIIgBgKIgDgLQgCgEgDgFQgEgDgFAAQgFAAgDADgABJAgIAAgUIgGAGIgJAHIgLAFQgGACgGAAQgJAAgFgDQgGgEgDgEQgDgGgBgHIgBgOIAAgrIgBgJIgCgFQgCgBgCgBIgHgBIAAgJIAuAAIAABCQAAALADAFQADAFAHAAQAFAAAGgEQAFgDAFgGIAAgwIAAgJIgCgFQgCgBgDgBIgIgBIAAgJIAwAAIAABJIABAMQACADADAAIAFgBIAFgBIADAJIgqAMg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("Ah9BfIAAi9ID7AAIAAC9g");
	this.shape_1.setTransform(0.15,-0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-12.4,-10.3,25.200000000000003,19), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AhIB/QgKgFgJgIQgIgIgEgKQgFgLAAgMIAAiSQAAgJADgIQADgJAFgIQAIgKAKgFQAJgHAMgBQALgCALADQAMACAJAHIBkBKQAHAFAFAIQAIAJACALQADAMgCAKQgCALgGAKQgFAKgKAHIhkBJQgHAGgJACQgJAEgJAAQgMgBgLgEgAg9hfQgGADgEAGQgEAGAAAHIAACSQAAAEACAEQABAEACADQAGAIALACQAKACAJgGIBjhKIAGgFQAGgIgCgKQgBgLgJgGIhjhJQgDgDgEgBIgIgBQgGAAgGADg");
	this.shape.setTransform(0.0281,0.0306);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.02)").s().p("AjGDZIAAmxIGNAAIAAGxg");
	this.shape_1.setTransform(-1.25,-2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-21.1,-24.1,39.8,43.3), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#290000").s().p("AghBnQgHgFAAgHIABgFIADgEQACgDADgBQACgBADAAQAEAAADABIAFAEIACAEIADAFIAEADIADABQACAAADgCIACgHIABgJIAAgKIAAhRQAAgKgCgDQAAgDgEAAIgEAAIgFABIgDgIIAqgMIAJAAIAABdQgBAOgDALQgEAMgHAIQgHAJgKAFQgKAEgMAAQgMABgGgFgAAIhKQgFgGAAgIQAAgEABgDIAEgGIAGgEIAIgBQADAAAEABIAGAEIAFAGQABADAAAEQAAAEgBADQgCAEgDACIgGAFQgEABgDAAQgJAAgFgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-8.4,-10.7,18.5,21.5), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD0F0F").s().p("AAcAcIgcgXIgaAXIgEABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgCgCIACgEIAbgWIgbgWQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIACgCIACgBIAEABIAaAWIAcgWIACgBIADABIACACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgbAWIAbAWIACAEIgCACQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape.setTransform(0.1,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAtQgIgDgIgIQgPgOAAgUQAAgUAPgOQAIgHAIgEQAJgDAKAAQAIAAAHACQAMADAJAJIABABQAOAOAAATQAAAUgPAOQgJAKgMADQgHACgIAAQgKAAgJgEg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-5,10.2,9.8);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AAmCAQgIgDgGgHQgHgGgDgHQgDgJAAgJIAAiuQAAgJADgIQADgIAHgGQAGgGAIgEQAIgDAKAAQAIAAAIADQAIAEAGAGQAHAGACAIQAEAIABAJIAACuQgBAJgEAJQgCAHgHAGQgGAHgIADQgIAEgIAAQgKAAgIgEgAAwhfQgDAEgBAEIAACuQABAFADADQACAEAGAAQAEAAADgEQADgDABgFIAAiuQgBgEgDgEQgDgDgEAAQgGAAgCADgAhHCAQgIgDgGgHQgHgGgCgHQgEgJgBgJIAAiuQABgJAEgIQACgIAHgGQAGgGAIgEQAIgDAJAAQAJAAAIADQAIAEAGAGQAHAGADAIQADAIAAAJIAACuQAAAJgDAJQgDAHgHAGQgGAHgIADQgIAEgJAAQgJAAgIgEgAg+hfQgDAEgBAEIAACuQABAFADADQADAEAFAAQAEAAADgEQAEgDAAgFIAAiuQAAgEgEgEQgDgDgEAAQgFAAgDADg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.02)").s().p("AjGDZIAAmxIGNAAIAAGxg");
	this.shape_1.setTransform(-1.25,-2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-21.1,-24.1,39.8,43.3), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AgpB9QgZgJgVgRIgOAOIgEACIgEABQgEAAgDgDQgEgEAAgEIAAgyQAAgFAEgDQADgDAEAAIAzAAIAEAAIAEADQADADAAAFQAAAFgDACIgNANQAKAJANAGQANAGAOACQATADATgFQAPgEANgIIAHgFQAPgLAKgQQAKgRAEgVQAAgGAFgEQAFgEAGAAIACAAQAHACAEAFQAEAFgBAHQgDATgIASQgIASgNAOQgSAUgYALIgEACQgVAJgYACIgGAAQgWAAgVgHgAh0AAQgHAAgEgGQgEgGABgGQADgTAIgSQAJgRAMgPQARgSAWgLIAEgCQAWgLAbgCQAYgBAZAIQAZAJAUASIAOgOQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAEgBQAFAAADAEQADACAAAFIAAAzQAAAEgDADQgDADgFAAIgyAAIgFgBIgCAAIgBgCQgDgDAAgEQAAgFADgDIANgNIgMgIIgMgHQgNgGgNgCQgUgDgTAFQgTAFgPAMQgQALgKARQgKARgDAUQgBAGgFAEQgEADgGAAIgDAAg");
	this.shape.setTransform(-0.0009,0.0193);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-13.1,-13.1,26.2,26.299999999999997), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1333();
	this.instance.setTransform(-9.25,-11,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_1334();
	this.instance_1.setTransform(-21.1,-24.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-21.1,-24.1,39.7,43.400000000000006), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1331();
	this.instance.setTransform(-6.95,-12.7,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_1334();
	this.instance_1.setTransform(-21.1,-24.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-21.1,-24.1,39.7,43.400000000000006), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1329();
	this.instance.setTransform(-8.1,-1.6,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_1334();
	this.instance_1.setTransform(-21.1,-24.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-21.1,-24.1,39.7,43.400000000000006), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1327();
	this.instance.setTransform(-8.1,-2.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_1334();
	this.instance_1.setTransform(-21.1,-24.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-21.1,-24.1,39.7,43.400000000000006), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1325();
	this.instance.setTransform(-8.1,-3.25,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_1334();
	this.instance_1.setTransform(-21.1,-24.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-21.1,-24.1,39.7,43.400000000000006), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1324();
	this.instance.setTransform(-11.95,-12.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-11.9,-12.9,24,26), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1323();
	this.instance.setTransform(-11.95,-12.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-11.9,-12.9,24,26), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1322();
	this.instance.setTransform(-11.95,-12.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-11.9,-12.9,24,26), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1321();
	this.instance.setTransform(-11.95,-12.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-11.9,-12.9,24,26), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1320();
	this.instance.setTransform(-11.95,-12.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-11.9,-12.9,24,26), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1319();
	this.instance.setTransform(-11.95,-12.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-11.9,-12.9,24,26), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_1298();
	this.instance.setTransform(-21.55,-22.9,0.2879,0.2879);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-22.9,43.7,45.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(244,136,254,0.62)").s().p("AhFEXIAAotICLAAIAAItg");
	this.shape.setTransform(0,-6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-34,14,55.8);


(lib.sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1292();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sq, new cjs.Rectangle(0,0,74,74), null);


(lib.soline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(213,214,212,0.008)").s().p("AlBC3IAAltIKDAAIAAFtg");
	this.shape.setTransform(0.175,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1.9,1,1).p("AkzAAIJnAA");
	this.shape_1.setTransform(-1.175,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009900").ss(1.9,1,1).p("AkrAAIJXAA");
	this.shape_2.setTransform(-1.175,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D30000").ss(1.9,1,1).p("Ak5AAIJzAA");
	this.shape_3.setTransform(-1.225,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.027)").s().p("AjPCrIAAlVIGfAAIAAFVg");
	this.shape_4.setTransform(-1.15,1.4);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-19.6,66,40.2);


(lib.retit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lescartes();
	this.instance.setTransform(-240.05,-30,0.5635,0.5455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-30,480.1,60);


(lib.rectongle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1286();
	this.instance.setTransform(-95.1,-20.3,0.1683,0.1683);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-20.3,136.8,33.8);


(lib.prebleu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,153,0.2)").s().p("AgvAzQgTgVAAgeQAAgdATgVQAVgWAaAAQAcAAAUAWQATAVABAdQgBAegTAVQgUAVgcAAQgaAAgVgVg");
	this.shape.setTransform(27.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,153,0.4)").s().p("AgxAzQgUgVAAgeQAAgdAUgWQAVgUAcgBQAdABAUAUQAVAWAAAdQAAAegVAVQgUAWgdgBQgcABgVgWg");
	this.shape_1.setTransform(19.3,19.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,153,0.6)").s().p("AgwAzQgUgVAAgeQAAgdAUgWQAUgUAcgBQAdABAUAUQAUAWAAAdQAAAegUAVQgUAWgdgBQgcABgUgWg");
	this.shape_2.setTransform(0.225,28.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,102,153,0.698)").s().p("AgwAzQgUgVAAgeQAAgdAUgWQAVgUAbAAQAdAAAUAUQAUAWAAAdQAAAegUAVQgUAWgdAAQgbAAgVgWg");
	this.shape_3.setTransform(-19.275,19.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,102,153,0.8)").s().p("AgxAzQgUgVgBgeQABgdAUgVQAVgWAcAAQAdAAAVAWQAUAVAAAdQAAAegUAVQgVAVgdABQgcgBgVgVg");
	this.shape_4.setTransform(-27.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,102,153,0.898)").s().p("AgxAzQgUgVAAgeQAAgdAUgWQAVgUAcAAQAdAAAUAUQAVAWAAAdQAAAegVAVQgUAWgdAAQgcAAgVgWg");
	this.shape_5.setTransform(-19.15,-19.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006699").s().p("AgyAzQgVgVAAgeQAAgdAVgWQAVgUAdAAQAeAAAUAUQAWAWgBAdQABAegWAVQgUAWgeAAQgdAAgVgWg");
	this.shape_6.setTransform(0.05,-28.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,-35.3,68.5,70.6);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B50000").s().p("AnUBTQgDgEAAgKQAAgJADgfIAHgsIgIgNIAOgKQAGgCAHAAQAKAAAAAOIAAAKIAAABQAFgMAHgGQAIgHAKAAQAKAAAHALQAGAKAAARQAAATgNASQgHAKgLAGQgKADgNAAIgKAAIgBAMQAAAKAEADQgIAKgIAAQgJAAgDgGgAm2AWIgDASQARAAAKgNQAKgMAAgQQAAgGgDgGQgDgCgEAAQgSAAgGAlgALsAwQgLgNABgSQAAgYAQgQQAPgRAXAAQANAAAGAHQAIAHgBALQAAAOgMAKQgNAIgaAAQABAMADAGQADAGAGAAQAGAAADgGQAEgCAAgKQAUAAAAALQAAAIgKAKQgKAIgPAAQgTAAgLgMgAMIgNQgFAGgEALQAPAAAHgFQAHgGgBgGIgBgGQgCgCgDAAQgHAAgGAIgAKUAwQgLgNAAgSQAAgYAPgQQAPgRAXAAQANAAAHAGQAHAFAAAIQAAAIgFAEQgEACgHAAIgJgBQgFgFgDgGQgIAFgFALQgEAHgBANQABALADAGQADAHAHAAQAFAAAEgGQADgGAAgGQAUAAAAALQAAAIgLAKQgIAIgSAAQgQAAgLgMgAJaA2QgDgEAAgKQAAgLAJgrIgIgNQARgNAKAAQAFAAADACQACAEABAGIgGAbQgFAYAAAMQAAANAEAEQgHAIgKAAQgIAAgEgGgAIGAwQgLgNAAgSQAAgYAPgQQAPgRAYAAQALAAAHAGQAIAFgBAIQABAIgFAEQgFACgFAAIgLgBQgEgFgCgGQgKAFgEALQgFAHAAANQAAALAEAGQADAHAGAAQAGAAADgGQAEgGAAgGQAUAAAAALQAAAIgKAKQgKAIgRAAQgRAAgKgMgAGzAoQAAgGADgTIAGgiIgHgNQAQgIAIAAQAHAAAAALIgEAWIABAAQAKghAPAAQAGAAAEAFQADAFAAAEQAAALgFAGQgGAHgLAAQgRAAAAAlQAAANADAEQgKAIgGAAQgQAAAAgUgAFgAwQgKgNAAgSQAAgYAQgQQAPgRAXAAQANAAAHAHQAHAHAAALQAAAOgNAKQgNAIgaAAQAAAMAFAGQADAGAGAAQAFAAAEgGQADgCAAgKQAVAAAAALQAAAIgKAKQgKAIgPAAQgUAAgLgMgAF8gNQgFAGgDALQAOAAAIgFQAGgGABgGIgCgGQgCgCgDAAQgIAAgGAIgAEoA5QgEgEgEgLIgHgOQgKAHAAALQABAEABADQgKAHgKAAQgEAAgFgGQgCgCAAgHQAAgLAHgLQAIgHALgGIADgCIgIgQQgFgMgLgGQAIgOAPAAQAGAAAEAEQAFAEAEALIAHANQAIgLAAgHIgBgHQAKgHAJAAQAFAAAEAFQAEADgBAGQAAAMgIAHQgJAKgJAGIgDACIAJASQAFAMALAEQgJAPgOAAQgGAAgFgDgAClAwQgJgNAAgSQAAgYAPgQQAPgRAYAAQAMAAAIAHQAGAHAAALQAAAOgNAKQgNAIgZAAQAAAMAEAGQADAGAGAAQAFAAAEgGQADgCAAgKQAVAAAAALQAAAIgJAKQgLAIgPAAQgUAAgLgMgADDgNQgHAGgCALQANAAAHgFQAIgGAAgGIgCgGQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgHAAgFAIgABGA2QgEgGAAgNQAAgIAFgiIAGglIgHgNQAQgMALAAQAFAAADAEQACACAAAGQAAAJgGAiQgHAfAAAQQAAAOAEAFQgJAIgIAAQgIAAgDgGgAgeA2IgLgCQgHAHgHAAQgHAAgEgFQgDgEAAgIQAAgHAFgGQAEgGAGAAIAZgaIgZgGQgFgGgBgLIABgOQAKAEANAEQAKADAIABQADgFAEgFQAFgCAGAAQAEAAAFAFQADADAAAGQAAANgKAFIgcAlQAJAEAGAAIARgKQADAKAAAIQAAAHgGAGQgGAGgIAAQgKAAgJgGgAiRAwQgLgNAAgSQAAgYAPgQQAQgRAXAAQAMAAAIAHQAGAHABALQAAAOgNAKQgNAIgaAAQABAMADAGQADAGAGAAQAFAAAEgGQAEgCAAgKQAUAAAAALQAAAIgJAKQgLAIgPAAQgTAAgKgMgAh1gNQgHAGgCALQAOAAAHgFQAGgGAAgGIAAgGQgCgCgEAAQgHAAgFAIgAjRA2QgEgGAAgNQAAgHAFgjIgLAGIgBgIQAAgKAEgCQAEgFAGAAQAAgIgDgKQAHgHAEgBQAHgFAGAAQAGAAADAEQACACAAAGIgCASQAGgBAFgEQABAFABAGQAAAFgFADQgDAGgHAAIgCAAQgFAYAAAQQAAAOAFAFQgJAIgIAAQgJAAgDgGgAkvAwQgLgNAAgSQABgYAPgQQAPgRAXAAQAOAAAGAHQAHAHAAALQAAAOgMAKQgNAIgbAAQABAMADAGQAEAGAGAAQAFAAAEgGQAEgCAAgKQAUAAAAALQAAAIgKAKQgKAIgPAAQgTAAgLgMgAkTgNQgGAGgCALQAOAAAHgFQAHgGAAgGIgCgGQgBgCgEAAQgGAAgHAIgAloA2QgDgGAAgNQAAgIAEgiIAHglIgJgNQATgMAJAAQAGAAADAEQACACAAAGQAAAJgHAiQgGAfAAAQQAAAOAEAFQgJAIgIAAQgIAAgEgGgAoKAoQAAgHAEgSQAEgRAAgFQAAgHgFAAIgJABIgJAMQgFAFgBAMQgEALAAAIQAAANADAEQgIAIgHAAQgQAAgBgUQAAgHAEgSQAFgRAAgFQAAgHgFAAIgJABIgJAMQgEAFgDAMQgDALAAAIQAAANADAEQgIAIgHAAQgQAAgBgUQAAgGADgTIAGgiIgIgNQAOgIAMAAQAMAAAAANQAAAIgDAGIABAAQAPgbAVAAQAIAAAFAFQAEADAAALIgBAIIABAAQAPgbAVAAQARAAAAAUQAAAHgEARQgEAXAAAIQAAANADAEQgHAIgJAAQgPAAAAgUgArPAwQgKgNAAgSQAAgYAPgQQAOgRAWAAQAFAAAFACQABAFABAHIAGgBQAGAAAHAHQAGAHAAAMQAAAMgFAMQgEAMgHAKQgHAHgJACQgIAGgJAAQgSAAgLgMgAq3gHQgGAKAAAMQAAALAEAHQAEAHAHAAQAOAAAGgXQgLgGAAgSIACgIQABgGAFgFQgTAGgHANgAsnAwQgLgNAAgSQABgYAPgQQAPgRAXAAQALAAAIAGQAHAFAAAIQAAAIgGAEQgEACgFAAIgKgBQgFgFgCgGQgJAFgEALQgGAHAAANQAAALAEAGQADAHAHAAQAFAAAEgGQADgGAAgGQAUAAAAALQAAAIgKAKQgKAIgRAAQgQAAgLgMgAB3gXQAAgFAFgMQACgMAAgFIAAgIQAGgEAGAAQAJAAAAAGQAAAGgEANQgEAMAAAFQAAAGACACQgHAEgGAAQgJAAAAgIgAkegzQgCgDAAgGQAHgDAGgGIAOgNQAHgGAFAAQAIAAAAASIgBALIgDAAQgHAAgLAFQgLAGgGAAQgDAAgDgDgAJkg1QgDgEAAgGQAAgHAFgFQAHgDAGAAQAHAAAEADQAEAEAAAGQAAAGgGAFQgFADgIAAQgHAAgEgCg");
	this.shape.setTransform(0.5,-0.85,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.3,-9.6,163.7,17.7);


(lib.mokabir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["قالب القصص_atlas_13"],50);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1.874,0,0,2.124,-75,-85)).s().p("AJENSIAAgUIgwAAIAxgBQglgggigkQi5jFicjgQAAgLAFgFQAfgcgkgpQhCgigvBNQhEASgrAtQj3Ali4hkQAAgLgGgFQgmgfghgiQiGiFg0iSIABlCIAQAAIACACQAWjKB4hoQAbgXASggQATgKAUgIQAIgDAEgFQAGgFAAgLQA+gGAngZQAVgMAYgJQAEgBAAgLID8AAIAAAKIAtAAIAAALIg2ABIA2AAIAAAGIBPAAIAAADIg6ABIAAAKQASABAOAHIAJAGQAPAIASAAQBzBpBXCEIAKANQAEAFAJAAQCEGDi8EbQgSAdASAWIBrAaIAWAGIAHACQAOAJATAAQAAALAFAFQCwC4CXDPIAKANQAFAFAJAAIAAC/gAnrtQIAAAAIAEAAIgEAAg")
	}.bind(this);
	this.shape.setTransform(74.975,85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,170);


(lib.mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFDsIAAnXICLAAIAAHXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mask, new cjs.Rectangle(-7,-23.5,14,47.1), null);


(lib.grey_tool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_1065();
	this.instance.setTransform(8,0,0.3289,0.3289);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grey_tool, new cjs.Rectangle(8,0,992,499), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Syol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tetg2();
	this.instance.setTransform(-250.8,-153.4,0.8532,0.621);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.8,-153.4,501.70000000000005,306.8);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaBNIgQgEQgHgDgEgEQgEgFAAgEQAAgGAFgGQAFgGAMgHQgGgCgEgEQgDgEAAgEQAAgDACgDIAEgIIAHgGIAHgHIgHgEIgGgIIgFgJQgCgFAAgFQAAgJAEgHQADgHAGgFQAGgFAJgDQAIgCAJAAIALABIAJADIAJADIAKABIAEAAIAEAAIAFAAIADAAIAEABQACABAAAEQAAAEgCACQgBABgEAAIgDAAIgEAAIgEAAIgDgBQADAEABAFIABAJQAAAGgCAGQgDAHgFAFQgGAGgIADQgIADgKAAIgIAAIgJgCIgFAFQgDACAAADQAAACAEABIAJABIAMAAIAPABIAOACQAIABAFADQAGADADAGQAEAGAAAIQAAAHgDAGQgDAFgFAFQgFAEgGAEIgNAGIgOADIgMABQgLAAgJgCgAgcAoIgBAGQAAAEAEACQAEADAFACIAMABIALABIALgBIALgCQAFgCADgCQADgCAAgEQAAgEgCgCIgHgDIgMgCIgPgBIgPAAIgNgBIgEAHgAgLhDQgDACgBADQgCAEgBAEIgBAIIABAMQABAGACAFQACAEAEAEQADACAGAAQADAAADgBQADgDACgEQACgDAAgFIABgIIgBgKIgDgLQgCgEgDgFQgEgDgEAAQgFAAgDADg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-8.4,-8.9,18.5,19), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#290000").s().p("AAIBRIAAgJIAGAAIAEgCQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBIABgJIAAgpQAAgMgEgDQgCgFgIgBIgEABIgFAEIgFADIgGAGIAAAvIABAJQABADABACIAEADIAFAAIAAAJIg5AAIAAgJIAHgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAIACgGIAAgIIAAhkQAAgJgBgDQgCgEgDAAIgEABIgEABIgEgHIAqgOIAJAAIAABMIAJgIIAIgHIAKgFQAEgBAHgBQAIABAGADQAGAEADAFQADAFABAIIABAMIAAArIAAAJIADAFIADADIAGAAIAAAJg");
	this.shape.setTransform(0,-7.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-8.4,-16.1,18.5,19), null);


(lib.Symbol36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#290000").s().p("AgwA0IAAgJIA3hSIgQAAQgGAAgEACQgFACgCADQgDAEgBAFIgCALIgJAAIABgnIBZAAIAAAJIg3BSIATAAQAGAAAFgCQAEgBADgEQADgDACgGQACgGABgIIAIAAIgBAqg");
	this.shape_2.setTransform(0.025,-4.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_3.setTransform(0.8,-4.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36_1, new cjs.Rectangle(-8.4,-13.8,18.5,19), null);


(lib.Symbol34copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#290000").s().p("AgIBRIgNgEIgLgFIgKgGIAAhxQAAgJgBgDQgCgDgDAAIgFAAIgFABIgDgIIArgNIAJAAIAABMQAIgMAIgEQAIgFAJAAQAIAAAHADQAGADAGAGQAFAGADAJQADAIAAAKQAAANgFAMQgEAMgIAJQgIAIgKAGQgLAFgMAAIgMgCgAAAgBQgFACgEAFIAAA1QADAGAFADQAEADAFAAQAGAAAEgEQADgDADgGQACgGABgHIABgPIgBgNQgBgHgCgFQgCgFgEgBQgEgEgFAAQgEAAgFAEg");
	this.shape.setTransform(0.025,-7.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34copy, new cjs.Rectangle(-8.4,-16.5,18.5,19), null);


(lib.Symbol34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AACAAIgCACIgBABAgPgQIARAQAgDABIACACIgOANAAAACIAQAPAAQgOIgOAO");
	this.shape_2.setTransform(-0.375,-0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgTAtQgJgDgHgHQgPgOAAgVQAAgTAPgPQAHgHAJgDQAKgEAJAAQAIAAAIADQALACAJAJIAAAAQAPAPAAATQAAAVgPAOQgJAIgLAEQgIACgIAAQgJAAgKgEgAAQAOIgRgOIACgCIgRgQIARAQIgCACIgBAAIABAAgAgQANIAOgNIgCAAIACAAgAABgCIAPgPg");
	this.shape_3.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-5.4,10.2,9.8);


(lib.Symbol33copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#290000").s().p("AgDA2IgkhTIgEgHIgEgEIgEgDIgHgBIAAgJIA+AAIAAAJQgFAAgDACQgDACAAAEIABAFIACAFIAPAlIASgoIABgHQAAgEgCgCQgEgCgHAAIAAgJIAqAAIAAAJQgGABgEADQgEAEgDAGIglBUg");
	this.shape.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33copy, new cjs.Rectangle(-8.4,-12.8,18.5,19), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCBFIAAgIIAHgBIAEgCIACgEIAAgGIAAghQgHAHgFADQgGADgIAAQgHAAgGgDQgHgCgFgGQgGgFgDgJQgEgHAAgMQAAgKAEgKQAEgJAGgHQAGgIAJgEQAJgEAKAAQAHAAAHADQAGADAEADIADgCIAEgCIADgDIAEgCIAGAAIAAB0IAAAGIACAEQABAAAAAAQABABAAAAQABAAAAAAQABABABAAIAIABIAAAIgAgNg6QgEACgCAEQgDAEgCAHQgBAHAAAKQAAAJACAHQACAHADAEQADAFAEACQADADAEAAQAEAAADgDIAIgGIAAguIgBgGIgDgGIgFgEQgCgCgEAAQgFAAgEACg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-8.4,-8.9,18.5,19), null);


(lib.Symbol31copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBRQgIgEgGgIIgHgJIgCgIQgEgLAAgMQAAgNAFgKIABgEQAFgHAFgGQAIgHAJgEQAJgEAIAAQAIAAAIADQAHACAFAGQAHAGACAIQAEAIAAAMIhBAAQAAAIACAHQADAHAEAGQAFAGAFAEQAGADAJAAQAHAAAHgEQAGgFAEgLIAHADIgFAPQgDAIgGAGQgFAFgIAEQgIAEgJAAQgLAAgJgEgAgJgMQgCABgCAEQgDADgCAEIgBAKIAiAAIgBgIIgCgHQgDgEgDgDQgEgCgFAAQgCAAgEACgAgOgnIAggpIAEgDIAFgBQAFAAADAEQAEADAAAEIAAABIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgmAYg");
	this.shape.setTransform(0.8,-6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31copy, new cjs.Rectangle(-8.4,-15.3,18.5,19), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_969();
	this.instance.setTransform(-319.1,-214.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.1,-214.1,638.3,428.29999999999995);


(lib.Symbol30copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANA2IgFgEIgEgFIgBgGIgHAGIgHAFIgIAEIgKABQgLAAgHgHQgGgHAAgNQAAgJAGgHQAGgHAJgFQAIgFAKgEIARgGIAAgFIgBgJIgCgIIgEgFQgCgCgEAAQgGAAgDADQgCAEAAAJIgBAGIgCAFIgFAEQgDABgEAAQgHAAgDgEQgEgDAAgHQAAgHAEgFQAEgFAGgEQAHgDAHgCIAOgCQALAAAJACQAIACAGAEQAFAFACAGQADAHAAAKIAAAeIAAAJIAAAIIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIADgBIAEgCIADgCIADgCIAAALIgFAEIgIAGIgKAFQgFACgGAAIgHgBgAgIABIgIAHQgDADgBAEIgBAIQAAAEADAEQACAEAFAAQADAAAEgDIAHgGIAAgfIgLAGg");
	this.shape.setTransform(0.775,-3.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30copy, new cjs.Rectangle(-8.4,-10.7,18.5,19), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BPIAAgKIAHAAIADgCIACgGIABgHIAAhhQAAgJgCgDQgCgDgDgBIgEABIgEABIgEgIIAqgNIAJAAIAAAVQAJgMAHgEQAJgFAJAAQAHAAAHADQAHAEAFAFQAGAHADAIQADAJAAAKQAAAOgDAMQgDAKgHAJQgGAJgKAFQgKAFgNAAQgFAAgFgCQgGgBgEgEIAAAdIABAIIACAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIAFAAIAAAKgAAAg2QgEACgGAGIAAAwQAAAKAFAEQAFAGAIAAQAEAAAEgCQADgDADgFQADgEACgIQACgHAAgNQAAgHgCgGIgDgMQgCgFgEgDQgEgEgFAAQgEAAgFADg");
	this.shape.setTransform(1.325,-2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-2.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-8.4,-11.5,18.5,19), null);


(lib.Symbol28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBTIAAgOQgIAHgGADQgHAEgJAAQgIAAgHgDQgIgEgGgGQgHgHgDgKQgEgKgBgNQAAgNAFgLQAFgKAGgHQAHgIAJgEQAJgEAJAAQAHAAAFACQAGACAGAFIAAgdQAAgJgCgDQgBgDgEAAIgFAAIgEABIgCgIIAogNIAKAAIAACCIABAMQABADAEAAIAFAAIAFgBIACAIIgpANgAgPgPQgEACgDAEQgDAFgCAGQgBAHAAALQAAALACAJQACAIADAGQADAGAEADQAFACAEAAQAFAAADgDIAJgIIAAgvQAAgFgDgEIgEgIIgGgFQgEgCgEAAQgDAAgDACg");
	this.shape_1.setTransform(0.8,-6.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_2.setTransform(0.8,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28_1, new cjs.Rectangle(-8.4,-16.5,18.5,19), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1022();
	this.instance.setTransform(-4.3,-9.65,0.3266,0.3266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_1023();
	this.instance_1.setTransform(-9.55,-13.5,0.3266,0.3266);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-9.5,-13.5,18.6,19), null);


(lib.Symbol25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBRIAAgJQAIAAAFgDQADgDAAgLIAAhBIgUAAIAAgMIAUAAIAAgBIABgLIAFgMQACgGAEgGQAEgGAGgGQAFgEAHgDQAIgDAJAAQAJAAAFABQAGACAFADQADADACAEQACADAAAEIgBAFIgDAEIgDAEIgGABQgEgBgEgBIgEgEIgEgFIgEgGIgEgDQgCgBgDAAQgDAAgCACQgCADgBAEIgBAJIAAAKIAAARIAbAAIAAAMIgbAAIAABBQAAAGACADQABADACACIAHACIAHABIAAAJg");
	this.shape.setTransform(0.1,-5.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC4AAIAAC9g");
	this.shape_1.setTransform(0.2,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25_1, new cjs.Rectangle(-9,-14.2,18.5,19), null);


(lib.Symbol24copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpA2IAAgJIAGgBIAEgCIACgFIAAgIIAAgvIgBgMQgBgDgEAAIgFAAIgFABIgCgIIAqgNIAIAAIAAAWIAGgIIAHgHQAEgDAFgCQAEgCAFAAIAHABQADABADADIABABIAAAVQgDAEgGAAQgFAAgDgCIgFgDIgEgDIgEgCQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgEAEIgEAGIgEAHIAAAqIABAIIACAFIADACIAGABIAAAJg");
	this.shape.setTransform(0.425,-3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AguBLIAAiVIBdAAIAACVg");
	this.shape_1.setTransform(0.525,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24copy2, new cjs.Rectangle(-4.4,-11,9.7,15), null);


(lib.Symbol23copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA+QgGgJAAgRIAAg8IgSAAIAAgHQAGgCAHgDIALgJIAKgMQAFgGADgHIAIAAIAAAiIAbAAIAAAMIgbAAIAAA4QAAAKACAEQACAEAFAAQADAAAEgDQADgDADgGIAHAAIgDAKQgDAGgEAFQgEAFgHAEQgGADgKAAQgLAAgHgJg");
	this.shape.setTransform(-0.05,-5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhHBfIAAi9ICPAAIAAC9g");
	this.shape_1.setTransform(0.85,-5.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23copy, new cjs.Rectangle(-6.4,-14.7,14.5,19), null);


(lib.Symbol22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIA2IAAgJIAGgBIAEgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgJIAAgpQgBgLgDgFQgCgFgIAAQgEAAgFADQgFADgGAGIAAAyIABAIIACAFIADACIAGABIAAAJIg5AAIAAgJIAGgBIAFgCIABgFIAAgIIAAgvIgBgMQgBgDgEAAIgEAAIgGABIgCgIIAqgNIAJAAIAAATIAKgGIAHgHIAKgEQAEgCAHAAQAJAAAFAEQAGADADAGQACAFACAIIABANIAAArIAAAIIACAFIAEACIAGABIAAAJg");
	this.shape.setTransform(2.05,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhIBfIAAi9ICSAAIAAC9g");
	this.shape_1.setTransform(2.45,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22_1, new cjs.Rectangle(-4.9,-14.1,14.700000000000001,19), null);


(lib.Symbol21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPA2IAAgUIgGAGIgJAHIgKAFQgGACgHAAQgIAAgFgDQgGgEgDgEQgEgGgBgHIgBgPIAAgqIgBgJIgBgFQgCgBgDgBIgIgBIAAgJIAwAAIAABBQAAAMACAFQADAFAIAAQAFAAAEgEQAGgDAFgHIAAgvIgBgJIgCgFQgCgBgCgBIgIgBIAAgJIAwAAIAABIIABANQACADADAAIAFgBIAFgBIACAJIgpAMg");
	this.shape.setTransform(1.2,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21_1, new cjs.Rectangle(-8.4,-13.1,18.5,19), null);


(lib.Symbol20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBRIAAgJIAHgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIACgEIABgIIAAhlQAAgJgCgEQgCgCgDAAIgEAAIgEABIgEgIIAqgNIAJAAIAACIIAAAIQAAADACACIAEACIAFABIAAAJg");
	this.shape.setTransform(0.2,-6.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC4AAIAAC9g");
	this.shape_1.setTransform(0.2,-6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20_1, new cjs.Rectangle(-9,-16.1,18.5,19), null);


(lib.Symbol19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqA2IAAgJIAGgBIADgCQACgBAAgEIABgJIAAgoQAAgLgDgFQgCgFgIAAQgEAAgGADQgGADgFAGIAAAyIABAIIACAFIADACIAGABIAAAJIg4AAIAAgJIAGgBIAEgCIACgFIABgJIAAgoQAAgLgDgFQgEgFgHAAQgFAAgFADQgGADgFAGIAAAxIAAAJIACAFIAFACIAFABIAAAJIg6AAIAAgJIAHgBIAEgCIACgFIAAgJIAAguQAAgJgBgDQgCgDgDAAIgFAAIgFABIgDgIIArgNIAJAAIAAATIAJgGIAJgHIAJgEQAFgCAGAAQAHAAACACIAIAEIAFAGIADAJIAIgIIAKgHIALgEQAGgCAHAAQAIAAAFAEQAGADADAGQAEAFABAHIABAOIAAAqIAAAJIACAFIAEACIAFABIAAAJg");
	this.shape.setTransform(0.7,-3.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19_1, new cjs.Rectangle(-9.1,-13.5,19.7,19), null);


(lib.Symbol18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBSIAAgJIAHAAIADgDIACgFIABgIIAAgvQAAgKgCgCQgBgDgDAAIgFAAIgFABIgDgIIAqgMIAJAAIAABRIAAAIIACAFIAEADIAGAAIAAAJgAgEgtIgFgEIgFgGIgBgIQAAgEABgDIAFgGIAFgEIAHgBIAHACQAEAAACADIAEAGIABAHQABAEgCADIgEAGIgGAFQgDABgEAAIgHgBg");
	this.shape.setTransform(-0.25,-5.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhcBfIAAi9IC5AAIAAC9g");
	this.shape_1.setTransform(0.8,-4.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18_1, new cjs.Rectangle(-8.4,-14.3,18.5,19), null);


(lib.Symbol16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAzQgJgEgIgIQgGgIgEgKQgEgKAAgKQAAgKAEgKQAEgLAGgHQAHgIAKgFQAJgFAMABQALAAALADQAJAEAHAIQAHAHAEAKQAEAJAAAMQAAAKgDALQgEAKgHAIQgGAIgKAFQgKAEgMABQgLgBgLgEgAgJgqQgDACgCAFQgCAEgBAGQgBAHgBALQABAJACAJQACAKADAHQAEAIAFADQADAFAFAAQAHAAADgIQAEgJAAgUQAAgJgCgIQgCgKgCgHQgDgHgFgFQgFgEgFAAQgDAAgCABg");
	this.shape.setTransform(-1,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AhbBfIAAi9IC3AAIAAC9g");
	this.shape_1.setTransform(-0.3,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16_1, new cjs.Rectangle(-9.5,-12.7,18.5,19), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AgpCHQgagJgTgTIgOAPIgDACIgFACQgFAAgDgEQgDgEAAgFIAAg2QAAgFADgEQADgDAFAAIAyAAIAEABIAEACQADAEAAAFQAAAFgDADIgNAOQAKAKANAGQANAHANACQAUADATgFQAPgFANgJIAGgFQAPgLALgTQAKgSADgWQAAgGAFgEQAGgEAEAAIAEAAQAGABAEAFQAEAHgBAHQgDAUgIATQgIAUgNAPQgRAWgZAMIgDACQgWAKgYABIgHAAQgVAAgUgHgAhzAAQgHAAgEgGQgEgGABgIQADgUAIgTQAIgTANgQQARgUAVgMIAEgBQAWgMAagCQAZgBAYAIQAZAKAVATIAOgQIADgCIAEAAQAEAAAEACQADAEAAAFIAAA2QAAAFgDADQgEAEgEAAIgyAAIgEgBIgCgBIgCgCQgCgDAAgFQAAgFACgDIANgOQgFgFgGgDQgFgFgHgDQgNgGgOgCQgTgDgTAFQgSAFgQAMQgPANgLASQgJASgEAVQgBAHgEAEQgFAFgGAAIgCgBg");
	this.shape.setTransform(-13.55,-13.15,1,1,0,0,0,-13.2,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#919191").ss(3,1,1).p("AjAjRIGBAAQAbAAAAAeIAAFnQAAAegbAAImBAAQgbAAAAgeIAAlnQAAgeAbAAg");
	this.shape_1.setTransform(-0.475,2.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AjADSQgbAAAAgeIAAlnQAAgeAbAAIGBAAQAbAAAAAeIAAFnQAAAegbAAg");
	this.shape_2.setTransform(-0.475,2.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-24,-19.5,47.1,45), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#960000").ss(3,1,1).p("AsL/jIYXAAQAeAAAAAeMAAAA+LQAAAegeAAI4XAAQgeAAAAgeMAAAg+LQAAgeAeAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.4,-203.4,164.9,406.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DDD();
	this.instance.setTransform(-207.95,-149.5,0.6429,0.5447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.9,-149.5,415.9,299.1);


(lib.Symbol10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.HHH();
	this.instance_1.setTransform(-209.35,-168,0.9327,0.8276);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.3,-168,418.70000000000005,336);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tetg3();
	this.instance.setTransform(-202.85,-152.25,0.6639,0.6018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.8,-152.2,405.6,304.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.392],-24.7,0,24.8,0).s().p("Aj5fQMAAAg+fIHzAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-200,50,400);


(lib.Symbol7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tetg1();
	this.instance.setTransform(-196.15,-159.2,0.5727,0.5885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.1,-159.2,392.29999999999995,318.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,0.392],24.8,0,-24.7,0).s().p("Aj5fQMAAAg+fIHzAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-200,50,400);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mm();
	this.instance.setTransform(-205,-141,0.7938,0.6447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-141,410.4,282.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.nnn();
	this.instance.setTransform(-185.55,-138.65,0.9231,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.5,-138.6,371.1,277.29999999999995);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["قالب القصص_atlas_2"],0);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.332,0,0,0.269,-271.3,-150.8)).s().p("EgqjAXvMAAAgkRMAzoAAAIAAjRIBLAAICrlnIJDiUIAABxIC2CLIMYAAIAAA6IFYAAMAAAAqng")
	}.bind(this);
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.4,-151.8,544.9,303.70000000000005);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text9();
	this.instance.setTransform(-300.25,-169.35,0.623,0.4792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.2,-169.3,600.5,338.70000000000005);


(lib.Symbol1copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgrDlIgCAAIAAgDIgCgCIAAAAIgBAAIgBAAIgBgBIAAAAIgBAAIgBAAIgBAAIAAAAQAAABAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAAAIAAAAIAAABIAAABIABAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAIAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBgCIAAgBIgBAAIAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBAAIAAgBIgBgBIAAAAIgBgCIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIABAAIABABIAAgBIAAgBIAAgBIAAAAIgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAAAIgDgEIAAAAIgDgDIAAAAIAAgBIAAAAIgBgBIAAgBIgBgCIAAAAIgBgBIAAgBIAAAAIgCgCIAAAAIgBgCIgBgCQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBAAIAAgDIAAAAIgBgBIAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAAAgBIAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIABAAIAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAAAIAAABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAAAIABAAIAAgBIAAgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAgBAAgBIAAgBIAAgBIAAgBIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAIAAgBIgBgBIAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgBIAAgBIAAAAIgBgBIgBAAQAAABAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIgCgEIgBgBIAAAAIgBgBIgBgCIgBgBIgBgBQAAABAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAAAIgBgCIAAAAIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBgCIgBAAIgBgCIAAAAIgBgBIAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIgBgBIAAgBIgBgCIgCgCIAAgBIgBABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAgBIAAAAIgBgCIgBAAIgBgCIAAgBIgBgCIAAAAIgBgCIAAAAIgBAAIgBgCIgCgCIgBgBIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBIAAgBIABAAIgBAAIAAgCIAAgBIAAAAIgBgBIgBAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABgBIgCAAQAAAAAAABQAAAAAAgBQgBAAAAAAQAAgBAAAAIABAAIABAAIABgBIAAgBIAAgBIAAgBIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBAAIgBgBIgBAAIAAABQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgCIgBgEIgBgCIACAAIAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABAAIAAgBIAAgBIAAgBIAAgBQgDgBAAgDIgBAAIAAgCIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIAAAAIAAgDIgBAAIAAgBIABgBIAAAAIAAAAIAAgCIABAAIAAAAIAAgBIABAAIAAAAIAAgBIAAgCIABAAIAAgBIgBAAIgCgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAAAIABAAIAAgBIgBgCIABABIABABIAAgBIAAgCIgBAAIAAgBIAAAAIgBgCIABAAIAAgBIAAAAIAAAAIAAgCIAAAAIABgBIAAAAIABAAIAAgBQABAAABAAQAAAAABAAQAAAAAAABQABAAgBAAIAAABIABAAQABAAAAAAQAAgBABABQAAAAAAAAQAAABAAABIgBAAIABAAIAAAAIAAAAIABAAIAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBAAIAAAAIgBAAIgBgCIAAAAIgBgBQgBAAAAAAQAAABgBgBQAAAAAAAAQAAgBAAgBQAAABABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIAAAAIAAgBIABAAIAAgBIAAAAIABgCIAAAAIAAgBIABAAIACAAIABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAABIAAABIABABIAAABIAAABIABAAIABAAIAAAAIAAgCIAAAAIAAgBIAAAAIAAgCQAAgBABAAQAAAAAAAAQAAAAABAAQAAABAAABIAAAAIABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAABIAAABIAAABIABAAIABAAIAAgBIgBgBIAAAAIAAgBIAAAAIABAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAAAAIAAgCIgBAAQgBABAAAAQgBABAAAAQAAAAgBgBQAAAAAAgBIACgBIAAAAIgBAAIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBIACgBIAAAAIgBgBIgBgDIAAAAIAAgBIACAAIAAgBIAAgBIACABIAAAAIABABIAAABIABABIAAABIAAAAIABAAIAAgBIABgBIAAgBIAAgBQAAgBAAAAQABAAAAAAQAAgBAAAAQAAABAAAAIABABIABAAIAAgBIAAgBIACABIAAABIACAAIAAAAIABABIACABIABAAIABABIAAABIABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAAIAAABIABAAIAAgBQAAAAABABQAAAAAAAAQAAAAAAAAQAAABgBAAIAAABIABAAIABABIAAAAIABABIABABIAAABIADACIAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAAIAAgBQABAAAAABQABAAAAAAQAAAAAAABQAAAAgBABIAAAAIABABIAAABIABABIAAAAIAAAAIAAgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIABAAIAAgBIAAgDQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAABIABACQABAAgBAAIAAABIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAIACACIAAABIAAAAIAAABIABAAIAAgBIACABIAAABIAAABIAAAAIAAABIAAABIACABIAAABIAAAAIAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAIACACIAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAABIACACIAAABIABAAIAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAABQABAAAAAAQAAAAABAAQAAAAAAABQgBAAAAAAIAAAAIAAABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAABIABACIABABIAAAAIAAABIACAAIABABQAAAAAAAAQABAAAAABQAAAAAAAAQgBAAAAABIAAAAIACABIAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAAAIAAABIgBABIAAAAIABABIABgBIAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABIAAABIABAAIACACIgBAAIABABIAAABIACADIAAABIABAAIAAgBIACABIAAAAIACgFIAAgEIABAAIAAgBIAAgBIAAgBIAAAAIABgCIAAABIABAAIAAgBIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAgBIAAAAIAAgBIABgBIAAAAIABAAIAAgBIAAgBIAAgBIABgCIAAAAIAAgBIAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAgBgBIABAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgCIABAAIAAAAIABgBIABAAIAAgBIAAgBIAAAAIAAgBIAAgDIADgBIAAgBIgBgBIABAAIAAgBIAAgCIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAIAAgBIAAAAIgBgBIACgCIAAABIABAAIAAgBIAAgBIAAgBIABAAIAAAAIABAAIAAAAIAAgBIAAgBIABAAIAAgBIgBAAIAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIAAAAIAAgCIABAAIAAAAIABABIAAAAIAAgBIAAgBIABAAIAAAAIAAgBIAAAAIAAgBIABgCIAAAAIAAAAIAAgBQAAgBAAgBQABAAAAAAQAAgBAAABQAAAAAAAAIABAAIAAAAIAAgBIAAgCQAAgBAAAAQABAAAAAAQAAgBAAAAQAAABABAAIAAgBIAAgBIgCgCIABAAIAAgBIgBgBQABgBAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAgBIAAgCIABgCIAAABIABgCIAAAAIAAAAIABgBIAAgBIAAgBIABgCIABAAIAAgBIAAAAIABgBIAAAAIABAAIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgCIABAAIAAgBIgBAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAAgBIABgCIAAgBIAAgBIAAAAQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAAABIABAAIAAAAIABAAIAAgBIAAgBIAAgCIABgBIAAAAIABAAIAAgBIABgBIAAAAIAAgBQABgDgCgCIACAAIAAABIABAAIAAgBIABAAIAAAAIAAgBIAAgBIAAgBIgBAAIAAgBQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAABIABAAIAAgBIAAgBIABgBIAAAAIAAgBIAAgBIABgCIAAgBIACgBIAAgBIAAAAIAAgBIAAgBIACgBIAAAAIAAgBIABgBIAAAAIAAgBIABAAIAAAAIAAgCIABgBIABgDIABAAIAAAAIAAgBIAAgCIAAAAIgBgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAAAIAAAAIABgBIABAAIAAAAIAAgCIAAAAIAAgBIABAAIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIgBgFIACACIAAAAIAAgCIAAAAIAAgBIAAAAIgBAAIAAgDIABABIAAAAIAAACIAAAAIACAAIAAAAIADgFIAAAAIAAAAIABgBIAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAIABACIABAAIAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAIABgBIAAgBIAAgBIACgBIAAABIABgBIAAAAIACgCIAAgBIAAgBIAAgBIAAABQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAAAIAAgBIAAgBIAAgBIABgBIAAABIABAAIAAgBIABAAIAAgBIAAgBIAAAAIAAAAIAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAABQAAAAgBABIAAABIACgBIABAAIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAAgBIgBgCIAAAAIAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAAIABAAIAAgBIAAgBIgBgBIABAAIAAgBQAAgBAAAAQABgBAAAAQAAAAAAABQAAAAAAABIAAgBIABAAIAAgBIAAAAIABgBIAAgBIAAgBIABAAIABAAIAAgBIABgCIAAAAIAAAAIAAgBIAAgCIABgBIAAgBIAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAAAAIAAgCIAAAAIAAgBIAAgBQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQABgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIABgBIABAAIAAAAIAAgBIABAAIAAgBQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAABAAIABABIAAAAIABAAIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAAAIABgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAAAIAAgBIABgBIAAgBIAAgBIABAAIAAgBIgBgCQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAABAAIAAAAIAAgBIABAAIAAAAIAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIAAgBIABAAIAAgBIgBgBIABAAIAAABIACAAIAAgBIACgCIAAAAIAAgBIAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIAAgBIABAAIgBAAIAAgBIACgBIAAAAIAAgBIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAgBIADgCIAAAAIAAAAIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAAAIAAgBIAAgBIABABIAAAAIAAgBIAAgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAAAIABgBIABAAIAAgBIAAgBIAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAABABAAIAAABIACgDIAAgBIABAAIAAAAIAAgBIAAgBIABAAIAAgBIABAAIABAAIAAgBIgBgBIAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAAABIABgBIAAgBIAAgBIAAAAIABAAIAAgBIgBgBQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAIAAABIABgBIABAAIAAAAIAAgBIABgCIABgCIAAABIAAgBIAAgBIAAAAIAAgDIABAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAABQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABIAAgBIAAgBQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIAAgBIAAgCQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAABIAAAAIAAgBIAEgCIABAAIACAAIAAAAIAAgBIAAgBIABgBIABAAIAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABgBIAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAABAAQAAAAAAAAQAAABABAAQAAAAgBABIACAAIAAgBIAAgBIAAAAIABAAIAAgBIACgCIAAAAIABgCIABAAIAAAAIABAAIABABIAAABIABAAIAAAIIALAAIAAABIAAABIAAABIgBAAIAAABIgCABIACACQgBAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABAAIAAAGIAAABIAIAAIABABIAAABIABACIAAABIAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIAAAAIgBABIAAABIgBAAIAAABIABAAIAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABAAIAAAAIAAgBIgBgBIABAAIAAgBIADgCIAAAEIAAABIAAANIABAAIACAAIACAAIAAABIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBAAIAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIAAAAIADAGIgDACIgBABIABAAIAAgBIABAAIAAAAIABABIAAAAIAAABIgBABIAAAAQgBABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAAIABAAIAAAAIAAgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIAAAAIAAABIAAABQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBAAIAAABIgBAAIAAABIAAAAIAAABIABAAIAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIgBAAIAAABIgBACIgCADIAAAAIgBABIAAABIgCABIAAABQABACAAADIgBAAIAAABIgBACIAAAAIAAACIgBAAIgBACIAAAAIgBABIgBABIAAAAIgDACIgBACIAAAAIgBABIAAABIgFAEIgBABIgBABIAAABIgBAAIgBABIgDAEIAAABIgBABIAAAAIgBAAIAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAIAAABIgCACIAAABQABAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIAAAAIgBABIAAAAIgBABIgBABIAAABIgBABIAAAAIgCABIAAABIgBABIAAAAIAAABIgCABIAAABIAAAAIAAAAIAAABIAAAAIgBAAIAAABIgBACIgBABIgBAAIAAABIgBABIgBAAIAAABIgCAEIAAABIgCACIgGAIIAAAAIgBABIAAABIAAAAIgBACIgBAAIAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgBABIAAABIAAAAIgCADIAAABIgCABIAAABIAAABIgCAAIAAABIAAACIAAAAIgCACIAAABIgBABIAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAIAAABIAAABIgBABIgBABIAAABIgBABIAAABIAAAAIAAAAIgBACIAAABIAAAAIgBABIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIgBAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIAAABIgBACIAAAAIgBABIAAABIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABIAAABIAAAAIgBACIAAABIgDADIAAABIABABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAAIgBACIgBAAIgBACIAAABIgBABIAAAAIgBACIAAABIAAAAIAAABQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIAAAAQgBADgCACIAAABIAAAAIgBADIAAAAIgBABIAAAAIgCADIAAABIgBABIAAABIgBABIAAABIgBACIAAABIgBABIAAABIAAABQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAABIAAABIgBABIAAAAIgBAAIAAABIgBACIAAAAIAAABIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBgBIgBAAIAAABIgBADIAAAAIgBACIAAABIgBAAIAAABIAAABIgCAEIgBAAIAAABIgBABIAAABIAAAAIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIAAAAIgCAEIAAABIgBABIAAABIgBABIAAABIAAAAIgBACIgBAAIAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIAAABIAAAAIAAABIAAABIgCAEIAAAAIgBABIAAABIgBACIAAABIgCADIAAABIgDAFIAAABIgBACIAAABIgBAAIAAABIAAABIAAABIAAABIAAAAIABAAIAAAAIAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAgBABIAAAAIAAABIgBABIAAAAIgBACIAAABIAAABIgBABIAAABIgBABIgDAHIAAABIAAAAIgBABIAAABIAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAAAgBgBIAAABIAAAAIAAABIAAAEIAAAAIAAABIgBAAIAAABIAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAgBIAAABIABABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAABIAAAAIAAABIAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIAAABIgCADIAAAAIABABQABAEgCgDIAAABIgBAAIAAABIAAAAIAAABIgBACIAAABIAAABIAAABIgBACIAAABIgBABIAAABIgCAHIAAAAIAAABIgBADIAAAAIgBABIAAABIAAABIgBADIAAAAIgBAEIAAABIAAABIAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBgBIAAABIgBAAIAAAAQABABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIAAABQAAAEgCADIAAACIAAAAIAAABQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAgBIAAABIgBADIAAAAIgBABIAAABIAAAAIgBAEIAAAAQAEgCgCAEIAAABIAAAAIgBABIAAABIgCAAIAAAAQAAAAgBABQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIgCgBQAAABAAABQAAAAAAAAQgBABAAgBQAAAAgBAAIAAgBIAAAAIgCgCIAAAAIgBAAIAAABIgCABIAAABIAAABIAAAAIAAABIgCACIAAAAIAAAAIgCAAgACai7IAAACIAAAAIAAgBIABAAIAAgBIgBgBIAAAAIAAABgAhwCYIgBgBQADgCgBADIgBABIAAgBgAiTBjIAAgBIAAgBQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIAAABIAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAgAhZAtQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQgBAAAAABIgBAAgAhgAiIAAgBIACADIgCgCgAh6AAIgCgBQACAAABAAQABABAAAAQABAAAAAAQAAAAgBAAIgCAAgAgOgiQAEgFgCAHIgCACIAAgEgAADg+QAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIABgBQABgBAAAAQABAAAAABQAAAAgBAAQAAABgBABIAAAAgAAYhkIAAgBQAAAAABAAQAAAAABABQAAAAAAAAQAAAAgBAAIgBAAgAAmh7IACgCIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgBABAAAAIAAAAIAAABIgCABIgBgBgAg9iNIgBgBIAFAAIgCACIgCgBgAA/ieIgBgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAgABQi3QAHAAgHAAgABVi6IAAAAIABAAgABujbQACAAABAAQAAAAAAAAQAAAAAAAAQgBAAgCABg");
	this.shape.setTransform(16.25,22.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.5,45.9);


(lib.rid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBEIAAgBIgCgDIACgEIADgBIABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIACAEIgCAEIgDAAgAhXAOIAAg1ICvAAIAAA1gAhogyIAAgRIDRAAIAAARg");
	this.shape.setTransform(15.975,-15.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgNBMIgBgBQgFgFAAgGQAAgHAFgFIABgBQADgCAEgBIAAgXIhYAAIgGgCIgBgEIAAg6IgLAAQgDAAgCgCIgCgEIAAgdIACgEIAFgBIDgAAIAGABIACAEIAAAdIgCAEQgDACgDAAIgJAAIAAA6IgCAEQgDACgCAAIhZAAIAAAXIAHAEQAGAFAAAHQAAAGgGAFQgFAFgIAAQgJAAgFgEgAgDA8IgCAEIACADIAAABIAEAAIADAAIACgEIgCgEQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBAAgAhXANICvAAIAAg0IivAAgAhogyIDRAAIAAgSIjRAAg");
	this.shape_1.setTransform(15.975,-15.825);

	this.instance = new lib.whitrglossyrectanglebuttonmd();
	this.instance.setTransform(0,-31.65,0.1075,0.1529);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31.6,32,31.6);


(lib.hijab_alpha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+aAjKMAAAhGTMB81AAAMAAABGTg");
	this.shape.setTransform(399.45,224.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hijab_alpha, new cjs.Rectangle(0,0,798.9,449.9), null);


(lib.chafafdndcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.CachedBmp_984();
	this.instance.setTransform(-14.9,-7.9,0.1515,0.1515);

	this.instance_1 = new lib.CachedBmp_985();
	this.instance_1.setTransform(-14.5,-8.95,0.1515,0.1515);

	this.instance_2 = new lib.CachedBmp_986();
	this.instance_2.setTransform(-11.9,-8.55,0.1515,0.1515);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-8.9,28.9,16.9);


(lib.chaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(201,245,221,0.027)").s().p("AtBINIAAwZIaDAAIAAQZg");
	this.shape.setTransform(83.375,52.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chaf, new cjs.Rectangle(0,0,166.8,104.9), null);


(lib.ci = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_978();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ci, new cjs.Rectangle(0,0,74,74), null);


(lib.chaf_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(201,245,221,0.027)").s().p("AtGINIAAwZIaNAAIAAQZg");
	this.shape_1.setTransform(83.925,52.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chaf_1, new cjs.Rectangle(0,0,167.9,104.9), null);


(lib.cswsouf3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 6
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(80,12.75,14.416,2.303);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.4,scaleX:36.6918,scaleY:1,x:17.3,y:31},24).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1RALaIAA2zMBqjAAAIAAWzg");
	this.shape.setTransform(41.025,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.9,-44.9,681.9,145.9);


(lib.Symbol157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(58,16.35,4.1429,0.6735,0,0,0,7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol157, new cjs.Rectangle(0,0.5,58,31.700000000000003), null);


(lib.Symbol37_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.musicOn = new lib.Symbol33();
	this.musicOn.name = "musicOn";
	this.musicOn.setTransform(-1.9,0.15);

	this.timeline.addTween(cjs.Tween.get(this.musicOn).wait(1));

	// Layer_2
	this.musicOff = new lib.Symbol36();
	this.musicOff.name = "musicOff";
	this.musicOff.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.musicOff).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37_1, new cjs.Rectangle(-23,-24.1,42.7,43.5), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol158("synched",0);
	this.instance.setTransform(-0.1,0.2,1,1,0,0,0,4.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-4.6,-12.3,9,25), null);


(lib.Symbol29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol159("synched",0);
	this.instance.setTransform(112,0,1,1,0,0,0,111.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29_1, new cjs.Rectangle(-0.9,-1.4,226,3), null);


(lib.shap_hjb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var that = this;
		function add_remove(sclX, sclY, type) {
		
		
			if (type === "circle") {
		
				that.sq.visible = false;
				
			} else if (type === "square") {
		
				that.ci.visible = false;
			}
			var rm_shape = new lib.rem_shape();
		
			//rm_shape.x = 15;
			//rm_shape.y = 15;
		
			rm_shape.scaleX = 1 / sclX;
			rm_shape.scaleY = 1 / sclY;
		
			that.addChild(rm_shape);
		
			rm_shape.addEventListener("click", toRemove_shape);
		
			function toRemove_shape() {
		
		
				rm_shape.removeEventListener("click", toRemove_shape);
		
				that.parent.removeChild(that);
			}
		
		}
		
		that.add_remove = add_remove;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.ci = new lib.ci();
	this.ci.name = "ci";
	this.ci.setTransform(-37,-37);

	this.timeline.addTween(cjs.Tween.get(this.ci).wait(1));

	// Layer_4
	this.sq = new lib.sq();
	this.sq.name = "sq";
	this.sq.setTransform(37,37,1,1,0,0,0,37,37);

	this.timeline.addTween(cjs.Tween.get(this.sq).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shap_hjb, new cjs.Rectangle(-37,-37,111,111), null);


(lib.return_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.mokabir("synched",0);
	this.instance.setTransform(9.05,9,0.1209,0.107,0,0,0,74.9,84.2);

	this.instance_1 = new lib.Symbol34_1("synched",0);
	this.instance_1.setTransform(9.6,4.95,1.777,1.8558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,18.2,23.2);


(lib.rem_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol34("synched",0);
	this.instance.setTransform(-0.15,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rem_shape, new cjs.Rectangle(-5.2,-5.5,10.2,9.8), null);


(lib.PAGEloaDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_4
	this.instance = new lib.prebleu("synched",0);
	this.instance.setTransform(0.3,-0.1,0.3435,0.2802,0,0,0,0.3,-0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(5).to({regX:0.1,regY:-0.4,scaleX:0.3134,scaleY:0.3134,skewX:50.7973,skewY:39.2027,y:-0.15},0).wait(5).to({regX:-0.2,regY:-0.1,scaleX:0.2802,scaleY:0.3434,rotation:90,skewX:0,skewY:0,y:-0.1},0).wait(5).to({regX:-0.4,scaleX:0.3134,scaleY:0.3134,rotation:0,skewX:129.1983,skewY:140.7938,x:0.35,y:-0.15},0).wait(5).to({regX:-0.3,regY:0,scaleX:0.3434,scaleY:0.2801,rotation:180,skewX:0,skewY:0,y:-0.1},0).wait(5).to({regX:0,scaleX:0.2801,scaleY:0.3434,rotation:270},0).wait(5).to({startPosition:0},0).wait(6));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("Eg9kAkGMAAAhILMB7JAAAMAAABILg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394,-231,788.1,462);


(lib.cswsouf6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(699));

	// Layer_3 copy
	this.instance = new lib.Symbol157();
	this.instance.setTransform(118.15,12.05,1,1,0,0,0,29.1,16.3);
	this.instance._off = true;

	this.instance_1 = new lib.mask();
	this.instance_1.setTransform(148.7,12.1,0.3176,0.6735,0,0,0,7.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance_1}]},35).to({state:[]},2).wait(646));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true,regX:7.2,regY:0.1,scaleX:0.3176,scaleY:0.6735,x:148.7,y:12.1},35).wait(648));

	// Layer_3
	this.instance_2 = new lib.mask();
	this.instance_2.setTransform(352.7,40.55,9.3324,0.6735,0,0,0,7.2,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({scaleX:0.4911,x:353.9},78).to({_off:true},1).wait(604));

	// Layer_2
	this.instance_3 = new lib.mask();
	this.instance_3.setTransform(391.45,64.55,14.4999,0.6735,0,0,0,7.2,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).wait(37).to({scaleX:0.4071,x:392.9},35).to({_off:true},1).wait(610));

	// Layer_4
	this.instance_4 = new lib.mask();
	this.instance_4.setTransform(496,314.45,27.2663,0.6735,0,0,0,7.2,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).wait(90).to({scaleX:0.6719,x:498.1},36).to({_off:true},1).wait(556));

	// Layer_5
	this.instance_5 = new lib.mask();
	this.instance_5.setTransform(380.8,342.45,15.4509,0.6735,0,0,0,7.4,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).wait(214).to({scaleX:0.4845,x:381.25},50).to({_off:true},1).wait(418));

	// Layer_6
	this.instance_6 = new lib.mask();
	this.instance_6.setTransform(605.5,361.45,34.3811,0.6735,0,0,0,7,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).wait(322).to({scaleX:0.4894,x:607.2},50).to({_off:true},1).wait(310));

	// Layer_7
	this.instance_7 = new lib.mask();
	this.instance_7.setTransform(512.8,383.5,24.9155,0.5096,0,0,0,7.2,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(414).to({scaleX:1.1364,x:516},50).to({_off:true},1).wait(218));

	// Layer_8
	this.instance_8 = new lib.mask();
	this.instance_8.setTransform(584.75,403.45,27.9088,0.5908,0,0,0,7.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).wait(547).to({regX:7,scaleX:0.396,x:584.7},46).to({_off:true},1).wait(89));

	// Layer_9
	this.instance_9 = new lib.mask();
	this.instance_9.setTransform(560.6,434.4,28.3216,0.6735,0,0,0,7.2,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).wait(630).to({regX:6.9,scaleX:0.5073,x:555.6},46).wait(7));

	// text
	this.instance_10 = new lib.Symbol138();
	this.instance_10.setTransform(345.6,222,1,1,0,0,0,282.6,216);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},2).wait(14).to({_off:false},0).wait(683));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.8,628.3,454.1);


(lib.cswsouf15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(998));

	// Layer_2
	this.instance = new lib.nammm();
	this.instance.setTransform(121,125,0.4919,0.3967);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(37,271,0.1342,0.0969);

	this.instance_2 = new lib.text1pngcopy();
	this.instance_2.setTransform(50,56,0.093,0.067);

	this.instance_3 = new lib.titre1pngcopy();
	this.instance_3.setTransform(168,9,0.0569,0.0902);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(998));

	// sfer
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(43.25,64.05,8.7002,0.2021,0,0,0,-6.9,0.5);
	this.instance_4.alpha = 0.7617;
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(40.55,329.65,14.5932,0.2021,0,0,0,-6.7,0.8);
	this.instance_5.alpha = 0.7617;

	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(35.15,397.25,4.3017,0.2021,0,0,0,-6.4,0.5);
	this.instance_6.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},103).to({state:[{t:this.instance_4}]},50).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_4}]},58).to({state:[{t:this.instance_4}]},40).to({state:[{t:this.instance_4}]},89).to({state:[{t:this.instance_4}]},50).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_5,p:{regX:-6.7,regY:0.8,scaleX:14.5932,x:40.55,y:329.65}},{t:this.instance_4}]},20).to({state:[{t:this.instance_4}]},59).to({state:[{t:this.instance_4}]},36).to({state:[{t:this.instance_4}]},48).to({state:[{t:this.instance_5,p:{regX:-6.5,regY:0.5,scaleX:23.0461,x:47.75,y:375.35}},{t:this.instance_4}]},8).to({state:[{t:this.instance_5,p:{regX:7,regY:-7,scaleX:30.7144,x:463.7,y:372.9}},{t:this.instance_4}]},52).to({state:[{t:this.instance_5,p:{regX:7,regY:-7,scaleX:36.6734,x:549.6,y:372.9}},{t:this.instance_4}]},36).to({state:[{t:this.instance_6,p:{regX:-6.4,regY:0.5,scaleX:4.3017,x:35.15,y:397.25}},{t:this.instance_5,p:{regX:7,regY:-7,scaleX:36.6734,x:549.6,y:372.9}},{t:this.instance_4}]},9).to({state:[{t:this.instance_6,p:{regX:7.2,regY:-6.7,scaleX:11.0092,x:188.9,y:395.8}},{t:this.instance_5,p:{regX:7,regY:-7,scaleX:36.6734,x:549.6,y:372.9}},{t:this.instance_4}]},39).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_4}]},10).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(103).to({_off:false},0).wait(50).to({regX:-6.8,regY:0.8,scaleX:8.6685,x:99.35,y:79.8},0).wait(47).to({regX:-6.9,scaleX:9.4563,x:113.9,y:91.7},0).wait(58).to({regX:-6.8,regY:0.5,scaleX:8.1874,x:140.55,y:102.15},0).wait(40).to({scaleX:12.153,x:163.8,y:113.45},0).wait(89).to({scaleX:16.2367,x:146.8,y:283.9},0).wait(50).to({regX:-6.7,regY:0.8,scaleX:16.7681,x:141,y:305.85},0).wait(47).to({regX:7.2,regY:-6.7,scaleX:27.3963,x:527.25,y:304.35},0).wait(20).to({startPosition:0},0).wait(59).to({regX:-6.6,regY:0.5,scaleX:11.3298,x:151.35,y:352},0).wait(36).to({regX:7.2,regY:-6.7,scaleX:23.6771,x:481.95,y:350.55},0).wait(48).to({regX:7.4,scaleX:28.3227,x:553.95},0).wait(8).to({startPosition:0},0).wait(52).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(39).to({startPosition:0},0).wait(27).to({regX:-6.4,regY:0.5,scaleX:6.759,x:138.4,y:420.1},0).wait(10).to({regX:7,regY:-6.7,scaleX:17.7051,x:384.5,y:418.15},0).wait(170));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.6,9,517,419);


(lib.cswsouf14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(743));

	// Layer_6
	this.instance = new lib.Symbol11("synched",0);
	this.instance.setTransform(142.1,357.15,0.5595,0.5376,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(500).to({_off:false,regX:1.2,regY:1.4,scaleX:0.043,scaleY:0.0377,alpha:0},0).to({regX:0.1,regY:0.1,scaleX:0.5595,scaleY:0.5376,alpha:1},44).wait(198));

	// Layer_4
	this.instance_1 = new lib.Symbol10_1("synched",0);
	this.instance_1.setTransform(383.5,138.1,0.5595,0.5376,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(86).to({_off:false,regX:1.8,regY:6.2,scaleX:0.0276,scaleY:0.032,alpha:0},0).to({regX:0.1,regY:0.4,scaleX:0.5595,scaleY:0.5376,alpha:1},22).wait(634));

	// Layer_14
	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(380.5,19.05,17.9582,0.7599,0,0,0,6.8,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).to({regX:7.1,scaleX:0.2603,x:387.7},46).wait(53).to({regX:7,regY:0.1,scaleX:11.9229,scaleY:0.5957,x:215.55,y:56.05},0).to({scaleX:0.298,x:215.9},36).wait(30).to({regX:7.1,regY:0.2,scaleX:10.0636,x:246.75,y:85.6},0).to({regX:7.5,scaleX:0.3714,x:251,y:88},36).wait(39).to({regX:7.4,regY:0.4,scaleX:12.3094,x:239.6,y:114.45},0).to({regX:7.3,scaleX:0.3846,x:240.55},31).wait(1).to({regX:7.4,regY:0.1,scaleX:5.7272,x:89.3,y:142.25},0).to({regX:7.7,regY:0.4,scaleX:0.419,x:89.35,y:142.45},12).wait(38).to({regX:7.4,scaleX:9.484,x:242.25,y:170.35},0).to({regX:7.5,scaleX:0.3952,x:242.8},30).wait(1).to({regX:7.4,regY:0.2,scaleX:13.304,x:202.75,y:201.35},0).to({regX:7.6,scaleX:0.3682,x:204.1},48).wait(30).to({regX:7.4,scaleX:14.0679,x:249.65,y:230.1},0).to({regX:7.7,scaleX:0.2941,x:249.05},35).wait(1).to({regX:7.4,scaleX:8.1575,x:132.4,y:256.7},0).to({scaleX:0.4263,x:132.3},28).wait(31).to({regY:0.1,scaleX:7.8874,x:486.4,y:299.9},0).to({regX:7.8,regY:0.4,scaleX:0.2456,x:487.45,y:300.1},15).wait(1).to({regX:7.4,regY:0.2,scaleX:12.5984,x:476.45,y:329.9},0).to({regX:7.2,scaleX:0.3645,x:470.55},28).wait(1).to({regX:7.4,regY:0.1,scaleX:12.395,x:474.65,y:362.55},0).to({regX:7.5,scaleX:0.456,x:472.65},38).wait(1).to({regY:0.4,scaleX:3.78,x:349.65,y:393.1},0).to({regX:7.4,scaleX:0.3645,x:351.65},10).wait(82));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH0b3IAAt0IgCAAIAAkJIf6AAIAAR9gEgnpAK4IAA9xIgCAAIAAo9MAm7AAAMAAAAmug");
	this.shape.setTransform(254.025,221.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AH0bzIAAtzIgCAAIAAkJIf6AAIAAR8gEgnpALmIAA9xIgCAAIAAlTMAm7AAAMAAAAjEgA//4ZIAAjZIbXAAIAADZg");
	this.shape_1.setTransform(254.025,222.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AH0ZpIAAtzIgCAAIAAkJIf6AAIAAR8gEgnpAJcIAA9xIgCAAIAAlTMAm7AAAMAAAAjEg");
	this.shape_2.setTransform(254.025,236.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AH0ZXIAAtzIgCAAIAAkKIf6AAIAAR9gEgnpAJKIAA9xIgCAAIAAhEMAm7AAAIAAe1gA2619IAAjZIWZAAIAADZg");
	this.shape_3.setTransform(254.025,237.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AH0XhIAAtzIgCAAIAAkJIf6AAIAAR8gEgnpAHUIAA9xIgCAAIAAhDMAm7AAAIAAe0g");
	this.shape_4.setTransform(254.025,249.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AHzXhIAAtzIgCAAIAAkJIf6AAIAAR8gEgnqAHUIAA51MAmpAAAIAAk/IAQAAIAAe0gA9SzcIhQjZIbRAAIAADZg");
	this.shape_5.setTransform(254.125,249.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AHzXhIAAtzIgCAAIAAkJIf6AAIAAR8gEgnqAHUIAA51MAmpAAAIAAk/IAQAAIAAe0g");
	this.shape_6.setTransform(254.125,249.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AHzS6IAAtzIgCAAIAAkKIf6AAIAAR9gEgnqACtIAA1mMAm5AAAIAAVmg");
	this.shape_7.setTransform(254.125,279.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AHzSxIAAt0IgCAAIAAkJIf6AAIAAR9gEgnqACkIAAxXMAm5AAAIAARXgA2pvWIAAjaITKAAIAADag");
	this.shape_8.setTransform(254.125,280.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AHzQyIAAtzIgCAAIAAkIIf6AAIAAR7gEgnqAAlIAAxXMAm5AAAIAARXg");
	this.shape_9.setTransform(254.125,292.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AHzOTIAAtzIgCAAIAAkJIf6AAIAAR8gEgnqgB5IAAsZMAm5AAAIAAMZg");
	this.shape_10.setTransform(254.125,308.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AHzOUIAAtzIgCAAIAAkIIf6AAIAAR7gEgnqgB4IAAoBMAm5AAAIAAIBgA/rq6IAAjZIeCAAIAADZg");
	this.shape_11.setTransform(254.125,308.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AHzMHIAAtyIgCAAIAAkKIf6AAIAAR8gEgnqgEFIAAoBMAm5AAAIAAIBg");
	this.shape_12.setTransform(254.125,322.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AHzI+IAAtyIgCAAIAAkJIf6AAIAAR7gEgnqgHOIAAgiMAm5AAAIAAAig");
	this.shape_13.setTransform(254.125,342.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AHzImIAAs/IKPAAIBJkMIPWAAIAADZIwfAzIVpAAIAAM/gEgnqgHmIAAgiMAm5AAAIAAAig");
	this.shape_14.setTransform(254.125,345.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AGfIYIAAs/MAhMAAAIAAM/gEgnqgH0IAAgjMAm5AAAIAAAjg");
	this.shape_15.setTransform(254.125,346.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AGfIYIAAooMAhMAAAIAAIogEgnqgH0IAAgjMAm5AAAIAAAjg");
	this.shape_16.setTransform(254.125,346.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AGkIYIAAjZMAhIAAAIAADZgEgnrgH0IAAgjMAm6AAAIAAAjg");
	this.shape_17.setTransform(254.15,346.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},41).to({state:[{t:this.shape_1}]},75).to({state:[{t:this.shape_2}]},24).to({state:[{t:this.shape_3}]},45).to({state:[{t:this.shape_4}]},21).to({state:[{t:this.shape_5}]},53).to({state:[{t:this.shape_6}]},22).to({state:[{t:this.shape_7}]},32).to({state:[{t:this.shape_8}]},29).to({state:[{t:this.shape_9}]},21).to({state:[{t:this.shape_10}]},31).to({state:[{t:this.shape_11}]},58).to({state:[{t:this.shape_12}]},20).to({state:[{t:this.shape_13}]},36).to({state:[{t:this.shape_14}]},39).to({state:[{t:this.shape_15}]},20).to({state:[{t:this.shape_16}]},16).to({state:[{t:this.shape_17}]},29).to({state:[]},39).wait(92));

	// text
	this.instance_3 = new lib.titre5();
	this.instance_3.setTransform(142,2,0.256,0.4199);

	this.instance_4 = new lib.RTF();
	this.instance_4.setTransform(304,285,0.4424,0.4473);

	this.instance_5 = new lib.FFFFFIN();
	this.instance_5.setTransform(15,43,0.4435,0.4036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},40).wait(702));

	// sfer
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(52.3,56.8,11.5432,0.2828,0,0,0,-6.8,-6.2);
	this.instance_6.alpha = 0.7617;

	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(65.65,113.9,12.1603,0.2828,0,0,0,-6.7,-5.9);
	this.instance_7.alpha = 0.7617;

	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.setTransform(300.55,331.65,11.9527,0.2828,0,0,0,-7,-6);
	this.instance_8.alpha = 0.7617;

	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.setTransform(375.8,298.75,7.1097,0.2828,0,0,0,-7,-6.4);
	this.instance_9.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{regX:-6.8,regY:-6.2,scaleX:11.5432,x:52.3,y:56.8}}]},140).to({state:[{t:this.instance_6,p:{regX:-6.7,regY:-6,scaleX:9.6577,x:109.9,y:84.45}}]},66).to({state:[{t:this.instance_7,p:{regY:-5.9,scaleX:12.1603,x:65.65,y:113.9,regX:-6.7}},{t:this.instance_6,p:{regX:-7,regY:-5.9,scaleX:5.2115,x:9.6,y:142.5}}]},75).to({state:[{t:this.instance_7,p:{regY:-6.2,scaleX:8.9086,x:111.85,y:170.5,regX:-6.7}},{t:this.instance_6,p:{regX:-7,regY:-5.7,scaleX:13.2064,x:10.45,y:199.2}}]},82).to({state:[{t:this.instance_7,p:{regY:-6.2,scaleX:13.5863,x:50.25,y:227.85,regX:-7}},{t:this.instance_6,p:{regX:-7,regY:-6,scaleX:8.0942,x:10.6,y:256.25}}]},109).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{regY:-6.4,scaleX:11.7819,x:300.85,y:362.6,regX:-7}},{t:this.instance_6,p:{regX:-7,regY:-6.2,scaleX:3.1486,x:300.5,y:392.2}}]},95).wait(176));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508.1,437.5);


(lib.cswsouf13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(374));

	// _qsk
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(280.05,59.1,16.4649,0.4064,0,0,0,7,0.1);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 227, 186, 215, 0)];
	this.instance.cache(-9,-25,18,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:6.9,scaleX:0.2113,x:282,y:58.8},39).wait(9).to({regX:7.4,regY:0.2,scaleX:25.0189,scaleY:0.4875,x:640.15,y:59.15},0).to({regX:7.3,regY:0.1,scaleX:0.5056,scaleY:0.3599,x:630.05,y:57.95},52).wait(1).to({scaleX:21.9196,x:359.65,y:91.75},0).to({regX:7.4,scaleX:0.3067,x:356.75},46).wait(10).to({regX:7.2,regY:0.2,scaleX:20.0676,scaleY:0.4799,x:636.55,y:94.05},0).to({regX:7.4,regY:0.1,scaleX:0.3067,scaleY:0.3599,x:636.3,y:91.75},33).wait(1).to({regX:7.2,scaleX:13.0755,x:230.2,y:126},0).to({regX:7.4,scaleX:0.3067,x:233.45,y:127.15},28).wait(126));

	// shqpe
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3BAD7").s().p("EgvEAI5IAAt+IP/AAIAAgKIEaAAIAAgLIAdAAIAAgDIR3AAIAAjbMA3cAAAIAARxg");
	this.shape.setTransform(333.125,103.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3BAD7").s().p("EgvEAHLIAAt+IP/AAIAAgJIfqAAIAAgOMAugAAAIAAOVg");
	this.shape_1.setTransform(333.125,117.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3BAD7").s().p("EgvEAHLIAApAMAyWAAAIAAlWMArzAAAIAAOWg");
	this.shape_2.setTransform(333.125,114.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3BAD7").s().p("EgvEAEjIAAo/MAyWAAAIAAgHMArzAAAIAAJGg");
	this.shape_3.setTransform(333.125,132.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},48).to({state:[{t:this.shape_2}]},53).to({state:[{t:this.shape_3}]},56).to({state:[]},34).wait(154));

	// text
	this.instance_1 = new lib.text15();
	this.instance_1.setTransform(49,46,0.6451,0.4934);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(28).to({_off:false},0).wait(345));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AgQNTIAA2/IBmAAIAAW/g");
	var mask_graphics_2 = new cjs.Graphics().p("AjbNTIAA2/IH6AAIAAW/g");
	var mask_graphics_3 = new cjs.Graphics().p("AmnNTIAA2/IOPAAIAAW/g");
	var mask_graphics_4 = new cjs.Graphics().p("ApzNTIAA2/IUkAAIAAW/g");
	var mask_graphics_5 = new cjs.Graphics().p("As/NTIAA2/Ia4AAIAAW/g");
	var mask_graphics_6 = new cjs.Graphics().p("AwLNTIAA2/MAhNAAAIAAW/g");
	var mask_graphics_7 = new cjs.Graphics().p("AzWNTIAA2/MAnhAAAIAAW/g");
	var mask_graphics_8 = new cjs.Graphics().p("A2iNTIAA2/MAt2AAAIAAW/g");
	var mask_graphics_9 = new cjs.Graphics().p("A5uNTIAA2/MA0LAAAIAAW/g");
	var mask_graphics_10 = new cjs.Graphics().p("A86NTIAA2/MA6gAAAIAAW/g");
	var mask_graphics_11 = new cjs.Graphics().p("EggFANTIAA2/MBA0AAAIAAW/g");
	var mask_graphics_12 = new cjs.Graphics().p("EgjRANTIAA2/MBHJAAAIAAW/g");
	var mask_graphics_13 = new cjs.Graphics().p("EgmdANTIAA2/MBNeAAAIAAW/g");
	var mask_graphics_14 = new cjs.Graphics().p("EgppANTIAA2/MBTzAAAIAAW/g");
	var mask_graphics_15 = new cjs.Graphics().p("Egs0ANTIAA2/MBaGAAAIAAW/g");
	var mask_graphics_16 = new cjs.Graphics().p("EgwAANTIAA2/MBgbAAAIAAW/g");
	var mask_graphics_17 = new cjs.Graphics().p("EgzYANTIAA2/MBmxAAAIAAW/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:8.5906,y:85.0532}).wait(1).to({graphics:mask_graphics_2,x:28.6805,y:85.0532}).wait(1).to({graphics:mask_graphics_3,x:48.7705,y:85.0532}).wait(1).to({graphics:mask_graphics_4,x:68.8604,y:85.0532}).wait(1).to({graphics:mask_graphics_5,x:88.9503,y:85.0532}).wait(1).to({graphics:mask_graphics_6,x:109.0402,y:85.0532}).wait(1).to({graphics:mask_graphics_7,x:129.1302,y:85.0532}).wait(1).to({graphics:mask_graphics_8,x:149.2201,y:85.0532}).wait(1).to({graphics:mask_graphics_9,x:169.31,y:85.0532}).wait(1).to({graphics:mask_graphics_10,x:189.3999,y:85.0532}).wait(1).to({graphics:mask_graphics_11,x:209.4899,y:85.0532}).wait(1).to({graphics:mask_graphics_12,x:229.5798,y:85.0532}).wait(1).to({graphics:mask_graphics_13,x:249.6697,y:85.0532}).wait(1).to({graphics:mask_graphics_14,x:269.7597,y:85.0532}).wait(1).to({graphics:mask_graphics_15,x:289.8496,y:85.0532}).wait(1).to({graphics:mask_graphics_16,x:309.9395,y:85.0532}).wait(1).to({graphics:mask_graphics_17,x:328.85,y:85.0532}).wait(357));

	// photo
	this.instance_2 = new lib.text001();
	this.instance_2.setTransform(26,22,0.3248,0.2152);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(374));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653.5,168.8);


(lib.cswsouf12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(525));

	// Layer_7
	this.instance = new lib.Symbol9copy("synched",0);
	this.instance.setTransform(324.1,105.95,0.8069,0.696);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4).to({_off:false,regX:2.1,regY:1.4,scaleX:0.0465,scaleY:0.0361,x:324.15,y:106,alpha:0},0).to({regX:0,regY:0,scaleX:0.8069,scaleY:0.696,x:324.1,y:105.95,alpha:1},9).wait(511));

	// Layer_14
	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(565.85,242.8,34.7336,0.5617,0,0,0,7,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({regX:7.2,scaleX:0.4617,x:569.75},74).wait(1).to({regX:7,regY:0.4,scaleX:20.7286,x:317.3,y:274.9},0).to({regX:7.2,scaleX:0.5181,x:317.95},36).wait(41).to({regX:7,scaleX:7.0328,x:212.55,y:306.1},0).to({regX:7.2,scaleX:0.2763,x:216.75},18).wait(8).to({scaleX:22.3793,x:533.25,y:304},0).to({regX:7.3,scaleX:0.7068,x:536.15},43).wait(38).to({regX:7.2,regY:0.2,scaleX:10.681,x:229,y:339.7},0).to({regX:7.6,scaleX:0.2111,x:231.8},33).wait(17).to({regX:7.3,scaleX:6.0643,x:309.9},0).to({regX:7.4,scaleX:0.486,x:313.75},21).wait(28).to({regY:0.4,scaleX:7.0574,x:247.5,y:370.3},0).to({regX:7.5,scaleX:0.1334,x:247.85},25).wait(8).to({regX:7,regY:0.2,scaleX:24.4582,x:586.65,y:370.2},0).to({regX:7.2,scaleX:0.5944,x:591.65},42).wait(1).to({regX:7,scaleX:14.641,x:229.1,y:403.7},0).to({regX:7.2,scaleX:0.4673,x:234.95},33).wait(32));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EguBAP5IAA7VIMaAAIAAkcMBLlAAAIAAEcIEEAAIAAbVg");
	this.shape.setTransform(294.6,330.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EguBANrIAA7VMBcDAAAIAAbVg");
	this.shape_1.setTransform(294.6,344.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EguBALSIAA2jMBcDAAAIAAWjg");
	this.shape_2.setTransform(294.6,360.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EguBALSIAAxcITZAAIAAkXIOWAAQAMgYAOgYMA56AAAIAAWjg");
	this.shape_3.setTransform(294.6,360.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EguBALSIAAxcMAiJAAAQh6iBB6jGMA56AAAIAAWjg");
	this.shape_4.setTransform(294.6,360.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EguBAIvIAAxdMBcDAAAIAARdg");
	this.shape_5.setTransform(294.6,376.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EguBAIvIAAr/MAkNAAAIAAgLI4GAAIAAkiIYGAAIAAgxMA32AAAIAARdg");
	this.shape_6.setTransform(294.6,376.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EguBAIvIAAr/MAkOAAAIAAleMA31AAAIAARdg");
	this.shape_7.setTransform(290.6,376.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EguBAIvIAAr/MAkNAAAIAAgPILsAAIAAAIMApLAAAIAAlXIC/AAIAARdg");
	this.shape_8.setTransform(294.6,376.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EguBAGHIAAnkIWaAAIAAjyIQBAAIAAg3IJeAAIAAAHMAjIAAAIAAAPIJCAAIAAL3g");
	this.shape_9.setTransform(294.6,393.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EguBAGHIAAnkMAmbAAAIAAkpIJeAAIAAAHMAjIAAAIAAAPIJCAAIAAL3g");
	this.shape_10.setTransform(294.6,393.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EguBADzIAAnkIf9AAIAAAHMA8GAAAIAAHdg");
	this.shape_11.setTransform(294.6,408.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},75).to({state:[{t:this.shape_3}]},58).to({state:[{t:this.shape_4}]},19).to({state:[{t:this.shape_5}]},26).to({state:[{t:this.shape_6}]},61).to({state:[{t:this.shape_7}]},20).to({state:[{t:this.shape_8}]},50).to({state:[{t:this.shape_9}]},30).to({state:[{t:this.shape_10}]},19).to({state:[{t:this.shape_11}]},33).to({state:[]},43).wait(65));

	// text
	this.instance_2 = new lib.text14();
	this.instance_2.setTransform(33,229,0.565,0.4828);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(15).to({_off:false},0).wait(509));

	// sfer
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(34.35,275.25,19.6087,0.2563,0,0,0,-7,0.4);
	this.instance_3.alpha = 0.7617;

	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(78.7,242.75,34.3285,0.2563,0,0,0,-7,0.2);
	this.instance_4.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{regX:-7,scaleX:34.3285,x:78.7,y:242.75}},{t:this.instance_3,p:{regY:0.4,scaleX:19.6087,x:34.35,y:275.25}}]},26).to({state:[{t:this.instance_3,p:{regY:0.2,scaleX:28.9561,x:120.8,y:306.55}}]},152).to({state:[{t:this.instance_3,p:{regY:0.2,scaleX:16.5017,x:76.6,y:340.05}}]},107).to({state:[{t:this.instance_4,p:{regX:-6.9,scaleX:31.1697,x:148.9,y:371.45}},{t:this.instance_3,p:{regY:0,scaleX:14.0266,x:29.05,y:403.4}}]},99).wait(141));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,596.9,432.4);


(lib.cswsouf10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(598));

	// Layer_7
	this.instance = new lib.Symbol7copy("synched",0);
	this.instance.setTransform(263.25,136.55,0.7312,0.5986,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(66).to({_off:false,regX:3.1,regY:1.4,scaleX:0.033,scaleY:0.0342,x:263.3,y:138.75,alpha:0},0).to({regX:0.1,regY:0.1,scaleX:0.7312,scaleY:0.5986,x:263.25,alpha:1},42).wait(489));

	// Layer_14
	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(404.75,19.05,20.3061,0.7771,0,0,0,7.2,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({scaleX:0.572,x:409},63).wait(47).to({scaleX:7.3069,scaleY:0.4081,x:224.9,y:249.55},0).to({regX:7.4,scaleX:0.2829,x:231.6},22).wait(9).to({regX:7,regY:0.1,scaleX:18.7822,x:487.85,y:249.6},0).to({regX:7.1,scaleX:0.4024,x:492.85},46).wait(1).to({regX:7,scaleX:5.8359,x:85.5,y:278.05},0).to({scaleX:0.3335,x:90.35},11).wait(30).to({regX:7.1,regY:0,scaleX:20.7268,x:343.05,y:304.25},0).to({regX:7.3,scaleX:0.5126,x:345.75},38).wait(37).to({regX:7.1,regY:0.2,scaleX:16.9784,x:360.6,y:331.3},0).to({regX:7.5,scaleX:0.3138,x:364.7},52).wait(29).to({regX:7.1,scaleX:15.3527,x:270.15,y:358.95},0).to({regX:7.2,scaleX:0.4882,x:275.3},22).wait(37).to({regY:0.1,scaleX:28.7653,x:527.8,y:385.9},0).to({scaleX:0.271,x:526.6},57).wait(1).to({regX:7.1,regY:0.2,scaleX:4.1946,x:64.35,y:414.6},0).to({regX:7.2,scaleX:0.2371,x:64.75},19).wait(9).to({regX:7.1,scaleX:10.2868,x:207.7,y:412.9},0).to({regX:7.2,scaleX:0.5107,x:210.95},24).wait(17));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egn9AOVIAA8pMBP7AAAIAAcpg");
	this.shape.setTransform(263.825,333.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egn9AOjIAA5uMAh+AAAIAAgFIv7AAIAAjSIVCAAIAAAcMAo2AAAIAAcpg");
	this.shape_1.setTransform(263.825,332.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Egn9AOVIAA5uMAh+AAAIAAi7MAt9AAAIAAcpg");
	this.shape_2.setTransform(263.825,333.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Egn9AM4IAA5vMBP7AAAIAAZvg");
	this.shape_3.setTransform(263.825,343.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Egn9AKpIAA1RMBP7AAAIAAVRg");
	this.shape_4.setTransform(263.825,357.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Egn9AKMIAAxFIHLAAIAAjSMAtFAAAIAADSIoSAAIAAAIMAj9AAAIAAQ9g");
	this.shape_5.setTransform(263.825,360.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Egn9AIjIAAxFMAr+AAAIAAAIMAj9AAAIAAQ9g");
	this.shape_6.setTransform(263.825,370.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Egn9AIBIAAswIQaAAIBpjRMAlOAAAIAADRIYqAAIAAMwg");
	this.shape_7.setTransform(263.825,374.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Egn9AGYIAAsvMBP7AAAIAAMvg");
	this.shape_8.setTransform(263.825,384.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Egn9AF6IAAoiIHLAAIAAjRMAgzAAAQCJA8gWA9QgQAshjAsMAn9AAAIAAIig");
	this.shape_9.setTransform(263.825,387.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Egn9AESIAAoiMBP7AAAIAAIig");
	this.shape_10.setTransform(263.825,398.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Egp0AD0IAAkVISEAAIAAjRMBBlAAAIAADRIjtAAIAAEVg");
	this.shape_11.setTransform(275.7,401.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgnVACLQgxgQgTggQgfgzAvhcQATgnAhgvMBP7AAAIAAEVg");
	this.shape_12.setTransform(259.8209,411.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgjqACLIAAkVMBHVAAAIAAEVg");
	this.shape_13.setTransform(292.7,411.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},117).to({state:[{t:this.shape_2}]},19).to({state:[{t:this.shape_3}]},31).to({state:[{t:this.shape_4}]},47).to({state:[{t:this.shape_5}]},23).to({state:[{t:this.shape_6}]},18).to({state:[{t:this.shape_7}]},52).to({state:[{t:this.shape_8}]},23).to({state:[{t:this.shape_9}]},61).to({state:[{t:this.shape_10}]},20).to({state:[{t:this.shape_11}]},38).to({state:[{t:this.shape_12}]},21).to({state:[{t:this.shape_13}]},58).to({state:[]},28).wait(41));

	// text
	this.instance_2 = new lib.text12();
	this.instance_2.setTransform(10,240,0.5293,0.3847);

	this.instance_3 = new lib.titre4();
	this.instance_3.setTransform(124,4,0.2933,0.3874);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},26).wait(571));

	// sfer
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(7.8,277.25,5.4815,0.2205,0,0,0,-7,-6.4);
	this.instance_4.alpha = 0.7617;

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(118.85,249.4,26.3677,0.2205,0,0,0,-7,-6.6);
	this.instance_5.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{scaleX:26.3677,x:118.85,y:249.4}},{t:this.instance_4,p:{regX:-7,regY:-6.4,scaleX:5.4815,x:7.8,y:277.25}}]},137).to({state:[{t:this.instance_4,p:{regX:-6.9,regY:-6.6,scaleX:20.4434,x:54.4,y:304.9}}]},119).to({state:[{t:this.instance_4,p:{regX:-6.8,regY:-6.4,scaleX:16.7531,x:125.5,y:331.1}}]},75).to({state:[{t:this.instance_4,p:{regX:-7,regY:-6.6,scaleX:15.3771,x:51.1,y:358.1}}]},81).to({state:[{t:this.instance_5,p:{scaleX:28.3928,x:121.45,y:385}},{t:this.instance_4,p:{regX:-6.8,regY:-6.6,scaleX:14.1655,x:7.6,y:413.05}}]},59).wait(127));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.8,543.4,424.59999999999997);


(lib.cswsouf9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(800));

	// Layer_6
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(159.25,338.15,0.6044,0.6104,0,0,0,-4.2,-14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(378).to({_off:false,regX:2.1,regY:5,scaleX:0.0234,scaleY:0.0199,x:158.85,y:346.5,alpha:0},0).to({regX:-4.2,regY:-14.8,scaleX:0.6044,scaleY:0.6104,x:159.25,y:338.15,alpha:1},40,cjs.Ease.quintIn).wait(381));

	// Layer_4
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(435.2,128.3,0.6321,0.5853,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(50).to({_off:false,regX:1.3,regY:2.6,scaleX:0.0392,scaleY:0.0375,y:128.35,alpha:0},0).to({regX:0.1,regY:0.1,scaleX:0.6321,scaleY:0.5853,y:128.3,alpha:1},63,cjs.Ease.quintIn).wait(686));

	// Layer_14
	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(422.9,16.05,17.8203,0.6485,0,0,0,7.4,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:7.5,scaleX:0.7607,x:424.6},35).wait(52).to({regX:7,scaleX:11.3422,scaleY:0.4725,x:274.85,y:43.7},0).to({regX:7.5,scaleX:0.2598,scaleY:0.5029,x:279.8,y:46},26).wait(1).to({regY:0.4,scaleX:14.3472,scaleY:0.4579,x:212.55,y:72.15},0).to({scaleX:0.3789,x:212.2},33).wait(31).to({regX:7.1,regY:0,scaleX:9.1516,x:195.3,y:100.7},0).to({regX:7.2,scaleX:0.2662,x:197.35},35).wait(20).to({regX:7.1,regY:0.4,scaleX:8.8804,x:240.7,y:128.9},0).to({regX:7.2,scaleX:0.3779,x:242.65},28).wait(10).to({scaleX:2.3678,x:273.7},0).to({scaleX:0.3381,x:275.25},7).wait(1).to({regY:0,scaleX:17.9368,x:267.7,y:156.3},0).to({scaleX:0.4965,x:270.15},45).wait(1).to({regY:0.1,scaleX:11.42,x:173.1,y:185.55},0).to({regX:7.4,scaleX:0.3992,x:174.9},26).wait(24).to({regX:7.3,scaleX:9.0023,x:182.45,y:214.85},0).to({regX:7.5,scaleX:0.3751,x:184.45},29).wait(34).to({regX:7,regY:0.2,scaleX:23.9568,x:431.2,y:242.4},0).to({regX:7.1,scaleX:0.4219,x:438.15},55).wait(1).to({regX:7,regY:0.4,scaleX:16.1241,x:557.6,y:268.05},0).to({regX:7.1,scaleX:0.3454,x:561.6},23).wait(1).to({regX:7,scaleX:7.058,x:427.55,y:294.95},0).to({regX:7.2,scaleX:0.4553,x:433.55},18).wait(36).to({regX:7,scaleX:5.6262,x:517.65,y:320.75},0).to({regX:7.1,scaleX:0.5006,x:524.5},18).wait(5).to({regX:7,scaleX:13.8554,x:525.55,y:347.65},0).to({regX:7.1,scaleX:0.2957,x:526.9},30).wait(1).to({regX:7,regY:0.5,scaleX:4.7828,x:394.4,y:376.8},0).to({regX:7.2,scaleX:0.1872,x:394.75},8).wait(13).to({regY:0.2,scaleX:13.1586,x:579.85,y:374.35},0).to({scaleX:0.3153,x:581.35},29).wait(1).to({regX:7,regY:0.5,scaleX:13.7884,x:523.75,y:401.95},0).to({regX:7.2,scaleX:0.2453,x:528.85},34).wait(88));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD6dWIAA3sMgvAAAAQkezID/r7IOUAAIAAAFIbXAAIAAgXIF0AAIAAbPMAplAAAIAAbygEgtRgafIAAikIMDAAIAAgSINpAAIAAASIElAAIAAgSINpAAIAAC2g");
	this.shape.setTransform(291.0403,222.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AD6dWIAA3sMgvAAAAQkezID/r7IOUAAIAAAFIbXAAIAAgXIF0AAIAAbPMAplAAAIAAbygA7D6fIAAikIMDAAIAAgSINpAAIAAC2g");
	this.shape_1.setTransform(291.0403,222.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AD6bhIAA3sMgvAAAAQkezID/r7IOUAAIAAAFIbXAAIAAgXIF0AAIAAbQMAplAAAIAAbxg");
	this.shape_2.setTransform(291.0403,233.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AD6bhIAA3sMgvAAAAQjywLCRrCIfjAAIAAjxILKAAIAAgXIF0AAIAAbQMAplAAAIAAbxg");
	this.shape_3.setTransform(288.5434,233.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AD6ZjIAA3sMgvAAAAQi/syAyplIewAAIAAg1I0sAAIAAikIMDAAIAAgSIIpAAIAAhLIBfAAIAAgMIQ+AAIAALQIkfAAIAAARQjjB7iiApIKkAAIAAJPMAplAAAIAAbxgAsordIB8AAQhfgpgdh7g");
	this.shape_4.setTransform(291.047,246.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AD6ZjIAA3sMgvAAAAQi/syAyplIewAAIAAk2IBfAAIAAgMIQ+AAIAAXUMAplAAAIAAbxg");
	this.shape_5.setTransform(291.047,246.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AD6ZjIAA3sMgvAAAAQiZqQACoLIAAgGMAlhAAAIAAgkIzTAAIAAikIMDAAIAAgRIHQAAIAAlfIL2AAIAAXUMAplAAAIAAbxg");
	this.shape_6.setTransform(291.0487,247.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AD6ZjIAA3sMgvAAAAQiZqQACoMIAAgFMAlhAAAIAAo4IL2AAIAAXUMAplAAAIAAbxg");
	this.shape_7.setTransform(291.0487,246.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AD6VNIAA3rMgvAAAAQiZqRACoLIAAgGMAlhAAAIAAgMIL2AAIAAOpMAplAAAIAAbwg");
	this.shape_8.setTransform(291.0487,274.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AD1S+IAA3rMgvAAAAQhzntgbmjMAxOAAAIAAKKMAplAAAIAAbxg");
	this.shape_9.setTransform(291.475,288.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ADlQiIAA3rMgu/AAAQhKk7gmkeMAwvAAAIAAFUMApmAAAIAAbwg");
	this.shape_10.setTransform(293.05,304.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADPQLIAA3rMgu/AAAQgnijgdidMAwDAAAIAAA7MApmAAAIAAbwgEglfgNWIAAijIKTAAIAAgSILoAAIAAC1g");
	this.shape_11.setTransform(295.25,306.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ADPOWIAA3rMgu/AAAQgnikgdicMAwDAAAIAAA6MApmAAAIAAbxg");
	this.shape_12.setTransform(295.25,318.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjkN5IAA4MMApkAAAIAAYMgEgl/gLDIAAijIZ3AAIAAgSIdPAAIAAC1g");
	this.shape_13.setTransform(338.925,320.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACyMHIAA3rMgvAAAAIgIgiMBYtAAAIAAYNg");
	this.shape_14.setTransform(298.225,332.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A0yKMIAA0XMAplAAAIAAUXg");
	this.shape_15.setTransform(449.05,344.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A0yKMIAAv+IR4AAIAAkZIXtAAIAAUXg");
	this.shape_16.setTransform(449.05,344.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A0yHuIAAr9MAplAAAIAAL9gAhFk3IAAikIMDAAIAAgSIAWAAIAAC2g");
	this.shape_17.setTransform(449.05,360.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A0yF/IAAr9MAplAAAIAAL9g");
	this.shape_18.setTransform(449.05,371.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("A0yEAIAAjXIMEAAQwaglGakDMAnhAADIAAH8g");
	this.shape_19.setTransform(449.05,384.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("A0xD+IAAjXIMCAAIAAkkIdhAAIAAH7g");
	this.shape_20.setTransform(450.55,384.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A0yB0IAAjWIMEAAIAAgRIdhAAIAADng");
	this.shape_21.setTransform(449.05,398.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},64).to({state:[{t:this.shape_2}]},23).to({state:[{t:this.shape_3}]},27).to({state:[{t:this.shape_4}]},46).to({state:[{t:this.shape_5}]},18).to({state:[{t:this.shape_6}]},41).to({state:[{t:this.shape_7}]},14).to({state:[{t:this.shape_8}]},38).to({state:[{t:this.shape_9}]},8).to({state:[{t:this.shape_10}]},46).to({state:[{t:this.shape_11}]},34).to({state:[{t:this.shape_12}]},16).to({state:[{t:this.shape_13}]},44).to({state:[{t:this.shape_14}]},19).to({state:[{t:this.shape_15}]},56).to({state:[{t:this.shape_16}]},24).to({state:[{t:this.shape_17}]},32).to({state:[{t:this.shape_18}]},22).to({state:[{t:this.shape_19}]},23).to({state:[{t:this.shape_20}]},31).to({state:[{t:this.shape_21}]},21).to({state:[]},30).wait(122));

	// text
	this.instance_3 = new lib.titre3();
	this.instance_3.setTransform(171,2,0.3624,0.3562);

	this.instance_4 = new lib.test11();
	this.instance_4.setTransform(333,257,0.5187,0.3753);

	this.instance_5 = new lib.test10();
	this.instance_5.setTransform(15,33,0.4831,0.399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(800));

	// sfer
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(13.1,70.65,14.1182,0.2156,0,0,0,-6.8,-6.5);
	this.instance_6.alpha = 0.7617;

	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(119.6,43.8,11.0568,0.2156,0,0,0,-7,-6.5);
	this.instance_7.alpha = 0.7617;

	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.setTransform(117.9,127.5,10.992,0.2156,0,0,0,-7,-6.5);
	this.instance_8.alpha = 0.7617;

	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.setTransform(440.6,321.3,5.4826,0.2156,0,0,0,-7,-6.5);
	this.instance_9.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7,p:{scaleX:11.0568,x:119.6,y:43.8,regY:-6.5,regX:-7}},{t:this.instance_6,p:{regX:-6.8,scaleX:14.1182,x:13.1,y:70.65,regY:-6.5}}]},88).to({state:[{t:this.instance_6,p:{regX:-7,scaleX:9.1545,x:65.9,y:99.45,regY:-6.5}}]},91).to({state:[{t:this.instance_8,p:{scaleX:10.992,x:117.9,y:127.5}},{t:this.instance_7,p:{scaleX:17.6552,x:15.05,y:156.3,regY:-6.5,regX:-7}},{t:this.instance_6,p:{regX:-7,scaleX:10.9527,x:14.9,y:184.3,regY:-6.5}}]},55).to({state:[{t:this.instance_6,p:{regX:-7,scaleX:8.9899,x:53.75,y:213,regY:-6.5}}]},142).to({state:[{t:this.instance_8,p:{scaleX:6.8307,x:331.15,y:293.15}},{t:this.instance_7,p:{scaleX:23.7934,x:96.4,y:240.65,regY:-6.2,regX:-7}},{t:this.instance_6,p:{regX:-7,scaleX:15.9168,x:332.25,y:267.45,regY:-6.2}}]},63).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:13.6942,x:332.75,y:346.55}},{t:this.instance_7,p:{scaleX:17.343,x:333.55,y:374.55,regY:-6.5,regX:-6.9}},{t:this.instance_6,p:{regX:-6.9,scaleX:13.8052,x:331.65,y:400.3,regY:-6.5}}]},134).wait(227));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0.6,586.1,432.9);


(lib.cswsouf8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(996));

	// Layer_7
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(266.55,360.2,0.6866,0.6279,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(315).to({_off:false,regX:2.4,regY:3.5,scaleX:0.0213,scaleY:0.0285,y:360.25,alpha:0},0).to({regX:0.1,regY:0.1,scaleX:0.6866,scaleY:0.6279,y:360.2,alpha:1},87,cjs.Ease.quintIn).wait(593));

	// Layer_14
	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(234.75,19.65,8.8519,0.4467,0,0,0,7.2,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({scaleX:0.3107,x:242.65},17).wait(9).to({regX:7.3,scaleX:19.6432,x:511.3},0).to({regX:7.4,scaleX:0.401,x:511.5},42).wait(1).to({regX:7.2,regY:0.5,scaleX:5.7266,scaleY:0.3882,x:97.65,y:43.1},0).to({regX:7.4,scaleX:0.5041,x:98.2},6).wait(47).to({regY:0.4,scaleX:10.5904,x:216,y:62.7},0).to({scaleX:0.3989,x:222.05},26).wait(32).to({regX:7.3,scaleX:6.2232,x:300.15},0).to({regX:7.4,scaleX:0.3046,x:302.35},23).wait(22).to({regY:0.5,scaleX:7.2141,x:210.7,y:85.3},0).to({scaleX:0.2975,x:217.85},20).wait(5).to({regX:7,regY:0.2,scaleX:19.0668,x:473.45,y:85.2},0).to({regX:7.2,scaleX:0.2629,x:479.8},36).wait(1).to({regX:7,regY:0.1,scaleX:5.7652,x:97.55,y:108.5},0).to({regX:7.2,scaleX:0.3283,x:98.15},12).wait(28).to({regX:7.1,regY:0.2,scaleX:10.2584,x:206.6,y:131.05},0).to({regX:7.2,scaleX:0.3625,x:216.65},25).wait(50).to({regX:7.1,regY:0.1,scaleX:6.7061,x:205.55,y:153.6},0).to({regX:7.2,scaleX:0.2141,x:213.75},21).wait(1).to({regX:7.1,regY:0.4,scaleX:22.8114,x:526.9,y:152.25},0).to({regX:7.2,scaleX:0.3157,x:530.25},49).wait(1).to({regX:7,scaleX:5.5253,x:95.75,y:174.85},0).to({regX:7.2,scaleX:0.2547,x:101.15},9).wait(35).to({regX:7,scaleX:9.9284,x:199.2,y:197.45},0).to({regX:7.3,scaleX:0.3092,x:204},19).wait(15).to({regX:7.2,scaleX:21.0403,x:495.4},0).to({scaleX:0.2922,x:496.95},32).wait(1).to({regY:0.2,scaleX:8.5827,x:142.55,y:218.55},0).to({regX:7.4,scaleX:0.2182,x:148.6},20).wait(24).to({regX:7.2,scaleX:10.3648,x:286},0).to({scaleX:0.2919,x:293},23).wait(11).to({scaleX:13.0706,x:468.05},0).to({regX:7.4,scaleX:0.4431,x:470.15},29).wait(7).to({regX:7.2,regY:0.4,scaleX:7.1967,x:121.3,y:241.9},0).to({regX:7.3,scaleX:0.4054,x:121.35},18).wait(30).to({regX:7.2,regY:0.2,scaleX:6.816,x:206.7,y:260.8},0).to({scaleX:0.2483,x:208.25},24).wait(9).to({regX:7.1,regY:0.4,scaleX:21.1312,x:505.9,y:263.35},0).to({regX:7,scaleX:0.4416,x:509.25},39).wait(1).to({regY:0.2,scaleX:3.325,x:63.85,y:285.9},0).to({scaleX:0.213,x:65.5},7).wait(10).to({regX:7.2,scaleX:11.614,x:226.7},0).to({scaleX:0.3271,x:230.9},31).wait(112));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgqGAYxMAAAgtZIQvAAIAAkIMBDdAAAMAAAAxhg");
	this.shape.setTransform(274.6,163.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgqGAYxMAAAgtZMAj1AAAIAAkIMAwYAAAMAAAAxhg");
	this.shape_1.setTransform(273.6,163.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgqGAWtMAAAgtZMAiVAAAIAAAHMAx3AAAMAAAAtSg");
	this.shape_2.setTransform(274.6,176.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgqGAVAMAAAgp/MBUMAAAMAAAAp/g");
	this.shape_3.setTransform(274.6,187.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgqGAVAMAAAgmrIKbAAQiohoCohOIV9geQgvAuAvAXIAAhFMAz0AAAMAAAAp/gAr9xrICPAAIAAgUQglAQhqAEg");
	this.shape_4.setTransform(274.6,187.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgqGAVAMAAAgmrMAgYAAAIAAjUMAz0AAAMAAAAp/g");
	this.shape_5.setTransform(274.6,187.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgqGAVAMAAAgmrMAgYAAAIAAgPINcAAIAAjFMAmYAAAMAAAAp/g");
	this.shape_6.setTransform(274.6,187.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgqGATlMAAAgjRIQcAAQhqhNBqhoIPYAAIAAglIAkAAIAAgPINcAAIAAgPMAmYAAAMAAAAnJg");
	this.shape_7.setTransform(274.6,196.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgqGATlMAAAgjRIf0AAIAAjaIAkAAIAAgPINcAAIAAgPMAmYAAAMAAAAnJg");
	this.shape_8.setTransform(274.6,196.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgqGARsMAAAgjRIf0AAIAAgGMA0YAAAMAAAAjXg");
	this.shape_9.setTransform(274.6,208.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgqGAPxIAA/hMBUMAAAIAAfhg");
	this.shape_10.setTransform(274.6,220.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgqGAPxIAA74IK7AAQk+g9E+isMBJRAAAIAAfhg");
	this.shape_11.setTransform(274.6,220.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgqGAPxIAA8OIfWAAIAAjTMA02AAAIAAfhg");
	this.shape_12.setTransform(274.6,220.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgqGAOSIAA4lIRkAAIAAi2QJsgxEGAxIAAhIMA02AAAIAAcjg");
	this.shape_13.setTransform(274.6,230.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgqGAOSIAA4lIfWAAIAAj+MA02AAAIAAcjg");
	this.shape_14.setTransform(274.6,230.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgqGAMhIAA4lIfWAAIAAgcMA02AAAIAAZBg");
	this.shape_15.setTransform(274.6,241.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgqGAKmIAA1LMBUMAAAIAAVLg");
	this.shape_16.setTransform(274.6,253.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgqGAKmIAAx3IJaAAIAAi3IVJAAIAAgdMA1pAAAIAAVLg");
	this.shape_17.setTransform(274.6,253.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgqFAKmIAAx3IeiAAIAAjUMA1qAAAIAAVLg");
	this.shape_18.setTransform(272.95,253.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgqFAJBIAAx3IeiAAIAAgKMA1pAAAIAASBg");
	this.shape_19.setTransform(272.3,265.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("EgqFAJBIAAu1IVtAAIAAjCII1AAIAAgKMA1pAAAIAASBg");
	this.shape_20.setTransform(272.3,265.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EgqFAJBIAAu1IVtAAIAAgIIWYAAIAAjEMAoGAAAIAASBg");
	this.shape_21.setTransform(272.3,265.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("EgqFAHfIAAu1IVtAAIAAgIIUbAAIAAAVMAqDAAAIAAOog");
	this.shape_22.setTransform(272.3,275.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EgqFAFcIAAq3MBULAAAIAAK3g");
	this.shape_23.setTransform(272.3,288.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AoxDbQxDgOwRhOIAAinIRHAAIAAi1MBDEAAAIAAFcQ2SBf1HAAQjwAAjugDg");
	this.shape_24.setTransform(272.3,275.9759);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EgqFAFcIAAoCIfsAAIAAi1MA0fAAAIAAK3g");
	this.shape_25.setTransform(272.3,288.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EgqFAEBIAAoBIeNAAIAAAWMA1+AAAIAAHrg");
	this.shape_26.setTransform(272.3,297.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EgqFAEBIAAkKIJiAAIAAj3IUrAAIAAAWMA1+AAAIAAHrg");
	this.shape_27.setTransform(272.3,297.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},15).to({state:[{t:this.shape_2}]},26).to({state:[{t:this.shape_3}]},43).to({state:[{t:this.shape_4}]},31).to({state:[{t:this.shape_5}]},22).to({state:[{t:this.shape_6}]},58).to({state:[{t:this.shape_7}]},30).to({state:[{t:this.shape_8}]},15).to({state:[{t:this.shape_9}]},25).to({state:[{t:this.shape_10}]},37).to({state:[{t:this.shape_11}]},25).to({state:[{t:this.shape_12}]},15).to({state:[{t:this.shape_13}]},56).to({state:[{t:this.shape_14}]},19).to({state:[{t:this.shape_15}]},22).to({state:[{t:this.shape_16}]},50).to({state:[{t:this.shape_17}]},25).to({state:[{t:this.shape_18}]},19).to({state:[{t:this.shape_19}]},34).to({state:[{t:this.shape_20}]},33).to({state:[{t:this.shape_21}]},44).to({state:[{t:this.shape_22}]},34).to({state:[{t:this.shape_23}]},36).to({state:[{t:this.shape_24}]},29).to({state:[{t:this.shape_25}]},19).to({state:[{t:this.shape_26}]},33).to({state:[{t:this.shape_27}]},40).to({state:[]},17).wait(143));

	// text
	this.instance_2 = new lib.text8bitmap();
	this.instance_2.setTransform(275.3,162.6,1,1,0,0,0,254.3,153.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(996));

	// sfer
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(18.5,41.4,5.0039,0.2312,0,0,0,-7,-6.5);
	this.instance_3.alpha = 0.7617;

	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(110.2,18.95,27.9214,0.2312,0,0,0,-7,-6.5);
	this.instance_4.alpha = 0.7617;

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(60.55,196.1,30.6605,0.2312,0,0,0,-7,-6.2);
	this.instance_5.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{regX:-7,regY:-6.5,scaleX:27.9214,x:110.2,y:18.95}},{t:this.instance_3,p:{regX:-7,regY:-6.5,scaleX:5.0039,x:18.5,y:41.4}}]},16).to({state:[{t:this.instance_3,p:{regX:-6.9,regY:-6.7,scaleX:16.9479,x:62.5,y:63.25}}]},122).to({state:[{t:this.instance_4,p:{regX:-6.7,regY:-6.2,scaleX:26.078,x:114.45,y:85.2}},{t:this.instance_3,p:{regX:-7,regY:-6.2,scaleX:5.0857,x:21.1,y:107.95}}]},103).to({state:[{t:this.instance_3,p:{regX:-7,regY:-6.2,scaleX:10.3531,x:60.8,y:129.85}}]},102).to({state:[{t:this.instance_4,p:{regX:-6.9,regY:-6.5,scaleX:29.282,x:115.05,y:151.75}},{t:this.instance_3,p:{regX:-7,regY:-6.2,scaleX:5.3848,x:20.4,y:173.35}}]},75).to({state:[{t:this.instance_5},{t:this.instance_4,p:{regX:-7,regY:-6,scaleX:31.611,x:21.1,y:217.95}},{t:this.instance_3,p:{regX:-7,regY:-6,scaleX:6.6812,x:17.25,y:240.35}}]},116).to({state:[{t:this.instance_4,p:{regX:-6.9,regY:-6.2,scaleX:28.2816,x:112.8,y:261.8}},{t:this.instance_3,p:{regX:-7,regY:-6.2,scaleX:14.9116,x:16.1,y:284.15}}]},229).wait(233));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,4.7,541.2,450.8);


(lib.cswsouf7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(769));

	// Layer_14
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(364.7,15.3,19.8698,0.7566,0,0,0,7.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regX:7.3,regY:0.2,scaleX:0.2807,x:366.7,y:15.35},49).wait(52).to({regX:7.2,regY:0.4,scaleX:21.6249,scaleY:0.5202,x:409.15,y:52.9},0).to({scaleX:0.3821,x:408.65},49).wait(40).to({scaleX:19.4997,x:344.2,y:78.6},0).to({regX:7.4,scaleX:0.4091,x:347.25},59).wait(54).to({regX:7.2,scaleX:3.9486,x:156.5,y:105.95},0).to({regX:7.4,scaleX:0.3325,x:165.5},17).wait(2).to({regX:7.2,scaleX:2.3138,x:188.85},0).to({regX:7.4,scaleX:0.3328,x:201.1},14).wait(4).to({regX:7.1,regY:0.2,scaleX:21.2876,x:488.15,y:104.15},0).to({regX:7.7,regY:0.5,scaleX:0.4211,x:496.3,y:104.3},44).wait(1).to({regX:7,regY:0.1,scaleX:6.5803,x:104.75,y:132.3},0).to({regX:7.2,scaleX:0.3044,x:108.85},17).wait(51).to({regX:7,regY:0.2,scaleX:24.8877,x:403.1,y:159.65},0).to({regX:7.1,scaleX:0.4428,x:411.45},56).wait(54).to({regX:7,regY:0.1,scaleX:24.4449,x:439.95,y:395.7},0).to({regX:7.2,scaleX:0.3469,x:443.65},48).wait(40).to({regY:0.3,scaleX:7.3329,x:155.8,y:422.45},0).to({regY:0.2,scaleX:0.3253,x:158.4,y:422.4},24).wait(12).to({regX:7.1,scaleX:10.1467,x:299.9},0).to({regX:7.3,scaleX:0.2878,x:302.35},27).wait(1).to({regX:7.2,scaleX:7.637,x:408},0).to({scaleX:0.5108,x:411.05},22).wait(25));

	// shape
	this.instance_1 = new lib.Symbol140();
	this.instance_1.setTransform(262.6,104.15,1,1,0,0,0,262.6,69.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpBAEKIAAoTMBSDAAAIAAITg");
	this.shape.setTransform(263.075,408.275);

	this.instance_2 = new lib.Symbol141();
	this.instance_2.setTransform(262.9,236.6,1,1,0,0,0,262.9,198.2);

	this.instance_3 = new lib.Symbol142();
	this.instance_3.setTransform(262.9,252.05,1,1,0,0,0,262.9,182.8);

	this.instance_4 = new lib.Symbol143();
	this.instance_4.setTransform(262.9,251.85,1,1,0,0,0,262.9,183);

	this.instance_5 = new lib.Symbol144();
	this.instance_5.setTransform(262.9,264.4,1,1,0,0,0,262.9,170.3);

	this.instance_6 = new lib.Symbol145();
	this.instance_6.setTransform(262.9,264.4,1,1,0,0,0,262.9,170.3);

	this.instance_7 = new lib.Symbol146();
	this.instance_7.setTransform(260.9,264.4,1,1,0,0,0,262.9,170.3);

	this.instance_8 = new lib.Symbol147();
	this.instance_8.setTransform(261.4,264.4,1,1,0,0,0,262.9,170.3);

	this.instance_9 = new lib.Symbol148();
	this.instance_9.setTransform(262.9,276.45,1,1,0,0,0,262.9,158.3);

	this.instance_10 = new lib.Symbol149();
	this.instance_10.setTransform(262.9,290.5,1,1,0,0,0,262.9,144.2);

	this.instance_11 = new lib.Symbol150();
	this.instance_11.setTransform(263.05,292.05,1,1,0,0,0,262.6,142.8);

	this.instance_12 = new lib.Symbol151();
	this.instance_12.setTransform(263.05,408.3,1,1,0,0,0,262.6,26.6);

	this.instance_13 = new lib.Symbol152();
	this.instance_13.setTransform(263.05,410.35,1,1,0,0,0,262.6,24.4);

	this.instance_14 = new lib.Symbol153();
	this.instance_14.setTransform(263.05,422.3,1,1,0,0,0,262.6,12.6);

	this.instance_15 = new lib.Symbol154();
	this.instance_15.setTransform(263.05,422.3,1,1,0,0,0,262.6,12.6);

	this.instance_16 = new lib.Symbol155();
	this.instance_16.setTransform(261.55,422.3,1,1,0,0,0,262.6,12.6);

	this.instance_17 = new lib.Symbol156();
	this.instance_17.setTransform(263.05,422.3,1,1,0,0,0,262.6,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},80).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_4}]},69).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_6}]},92).to({state:[{t:this.instance_7}]},21).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_9}]},18).to({state:[{t:this.instance_10}]},45).to({state:[{t:this.instance_11}]},47).to({state:[{t:this.instance_12}]},21).to({state:[{t:this.instance_13}]},89).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_15}]},69).to({state:[{t:this.instance_16}]},19).to({state:[{t:this.instance_17}]},36).to({state:[]},28).wait(47));

	// text
	this.instance_18 = new lib.titre8();
	this.instance_18.setTransform(88,0,0.3265,0.3815);

	this.instance_19 = new lib.text8();
	this.instance_19.setTransform(16,39,0.5052,0.4881);

	this.instance_20 = new lib.Symbol139();
	this.instance_20.setTransform(256.7,216.9,1,1,0,0,0,240.7,216.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).to({state:[]},1).to({state:[{t:this.instance_20}]},6).wait(762));

	// sfer
	this.instance_21 = new lib.Symbol1("synched",0);
	this.instance_21.setTransform(107.1,53.75,21.5139,0.2662,0,0,0,-6.7,0.2);
	this.instance_21.alpha = 0.7617;
	this.instance_21._off = true;

	this.instance_22 = new lib.Symbol1("synched",0);
	this.instance_22.setTransform(122,106.75,27.4322,0.2662,0,0,0,-6.2,0.2);
	this.instance_22.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},108).to({state:[{t:this.instance_21}]},89).to({state:[{t:this.instance_22},{t:this.instance_21}]},113).to({state:[{t:this.instance_21}]},150).to({state:[{t:this.instance_21}]},110).to({state:[{t:this.instance_21}]},88).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(108).to({_off:false},0).wait(89).to({regX:-7,regY:-3.4,scaleX:19.4392,x:67.15,y:78.5},0).wait(113).to({regY:-6.8,scaleX:6.5642,x:13.55,y:130.5},0).wait(150).to({regY:-6.5,scaleX:24.8645,x:53.35,y:158.85},0).wait(110).to({scaleX:24.1463,x:100.05,y:395.75},0).wait(88).to({regX:-6.9,scaleX:25.2543,x:54.3,y:421.45},0).wait(111));

	// Layer_7
	this.instance_23 = new lib.Symbol3copy("synched",0);
	this.instance_23.setTransform(250.6,257.55,0.6691,0.7227);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},1).wait(132).to({_off:false,regY:1.5,scaleX:0.0133,scaleY:0.0331,y:257.6,alpha:0.0195},0).to({regY:0,scaleX:0.6691,scaleY:0.7227,y:257.55,alpha:1},132,cjs.Ease.quintIn).wait(504));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2.6,527.7,437.5);


(lib.cswsouf5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1462));

	// Layer_14
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(63.05,183.15,3.8786,0.4798,0,0,0,7,0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(166).to({_off:false},0).to({regX:7.7,regY:0.4,scaleX:0.1893,x:63.25,y:185.9},29).wait(4).to({regX:7.2,regY:0.3,scaleX:1.6436,x:87.85,y:183.15},0).to({regX:7.8,scaleX:0.1871,x:87.8},8).wait(104).to({regX:7.2,regY:0.4,scaleX:2.3896,x:95.75,y:208.3},0).to({regX:7.4,scaleX:0.304,x:103.8},21).wait(18).to({regX:7.2,regY:0.2,scaleX:26.2041,x:466.95,y:206.7},0).to({regX:7.6,scaleX:0.448,x:474.35},69).wait(46).to({regX:7.2,regY:0.4,scaleX:17.0505,x:290.95,y:232.1},0).to({scaleX:0.3603,x:302.2},44).wait(17).to({scaleX:9.8206,x:430.55},0).to({regX:7.9,scaleX:0.242,x:435.5},24).wait(21).to({regX:7.2,scaleX:3.4579,x:476.7},0).to({regX:7.9,scaleX:0.1833,x:485.15},9).wait(2).to({regX:7.2,regY:0.2,scaleX:3.9328,x:62.75,y:253.6},0).to({regX:7.8,scaleX:0.18,x:67.55},6).wait(33).to({regX:7.3,regY:0.4,scaleX:11.9454,x:233.8,y:276.75},0).to({regX:7.5,scaleX:0.2854,x:237.45},54).wait(18).to({regX:7.4,scaleX:16.0398,x:463.1,y:277.45},0).to({regX:7.5,scaleX:0.3306,x:463.2},46).wait(38).to({regX:7.3,regY:0.3,scaleX:14.9453,x:262.2,y:301.3},0).to({regX:7.7,scaleX:0.2612,x:267.9},44).wait(32).to({regX:7.3,regY:0.4,scaleX:5.7634,x:145.8,y:324.45},0).to({regX:8,scaleX:0.1813,x:154.1},16).wait(11).to({regX:7.4,scaleX:2.0395,x:175.05},0).to({regX:7.8,scaleX:0.2382,x:181.5},14).wait(22).to({regX:7.2,scaleX:20.2878,x:461.6},0).to({regX:7.6,scaleX:0.276,x:462.75},64).wait(26).to({regX:7.4,scaleX:1.5578,x:481.6},0).to({regX:7.7,scaleX:0.2812,x:488.35},3).wait(1).to({regX:7,scaleX:15.4082,x:224.75,y:348.35},0).to({regX:7.3,scaleX:0.2611,x:229},48).wait(43).to({regX:7,regY:0.3,scaleX:3.9917,x:105.9,y:370.65},0).to({regX:7.2,scaleX:0.368,x:108.5},15).wait(2).to({regX:7.1,scaleX:3.0926,x:150.85,y:371.4},0).to({regX:7.4,scaleX:0.2699,x:157.95},20).wait(28).to({regX:7,scaleX:16.4631,x:383.05},0).to({regX:7.5,scaleX:0.2929,x:389.2},39).wait(49).to({regX:7,regY:0.2,scaleX:5.7633,x:145.8,y:394.8},0).to({regX:7.7,scaleX:0.2461,x:153.55},20).wait(18).to({regX:7,scaleX:9.4551,x:280.05},0).to({regX:7.5,scaleX:0.3028,x:286.65},29).wait(2).to({regX:7.2,scaleX:14.4299,x:486.3},0).to({regX:7.6,scaleX:0.2895,x:485.5},38).wait(101));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmyASWMAAAgg0IOeAAIAAgPMA/HAAAMAAAAhDgA86utIAAjoIDlAAIAADog");
	this.shape.setTransform(248.275,289.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgmyAQiMAAAgg0IOeAAIAAgPMA/HAAAMAAAAhDg");
	this.shape_1.setTransform(248.275,300.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgmyAQfIAA82IPMAAIAAgeIlYAAIAAjpMBDxAAAMAAAAg9g");
	this.shape_2.setTransform(248.275,301.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgmyAQfIAA82IPMAAIAAkHMA+ZAAAMAAAAg9g");
	this.shape_3.setTransform(248.275,301.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgmyAOiIAA82IPMAAIAAgNMA+ZAAAIAAdDg");
	this.shape_4.setTransform(248.275,313.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgmyAOiIAA5RIGpAAIBojyMBFUAAAIAAdDgABTqzIFfAEIAAgKg");
	this.shape_5.setTransform(248.275,313.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgmyAOiIAA5RMAtkAAAIAAjyMAgBAAAIAAdDg");
	this.shape_6.setTransform(248.275,313.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgmyAOiIAA5RMAtkAAAIAAgUIVCAAIAAjeIK/AAIAAdDg");
	this.shape_7.setTransform(248.275,313.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgmyAMzIAA5RMAtkAAAIAAgUMAgBAAAIAAZlg");
	this.shape_8.setTransform(248.275,324.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgmyAK3IAA1tMBNlAAAIAAVtg");
	this.shape_9.setTransform(248.275,337.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgmyAMzIAAyCMAkIAAAIAAgYI5oAAQiIhjCIiFIZoAAIAAjPIJcAAIAAgUMAgBAAAIAAZlg");
	this.shape_10.setTransform(248.275,324.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgmyAMzIAAyCMAkIAAAIAAnPIJcAAIAAgUMAgBAAAIAAZlg");
	this.shape_11.setTransform(248.275,324.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgmyAJMIAAyDMAkIAAAIAAgGMAieAAAIAAgOIG/AAIAASXg");
	this.shape_12.setTransform(248.275,347.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgmyAJLIAAuXIGpAAIBxj+MAgQAAAIAAAMId8AAIAAgHIG/AAIAASQgAq5lSIMvAGIAAgVg");
	this.shape_13.setTransform(248.275,347.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgmyAJIIAAuWMAooAAAIAAjyId+AAIAAgHIG/AAIAASPg");
	this.shape_14.setTransform(248.275,348.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgmyAHWIAAqsIIsAAICLj6IOyAAIAAAPIO/AAIAAgUMAk9AAAIAAOrgA6ljYIKlACIAAgRg");
	this.shape_15.setTransform(248.275,359.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgmyAHWIAAqsIWyAAIAAjrIR2AAIAAgUMAk9AAAIAAOrg");
	this.shape_16.setTransform(245.275,359.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgmyAHWIAAqsIWyAAIAAgNQGBASg8iLIAEhlIMtAAIAAgUMAk9AAAIAAOrg");
	this.shape_17.setTransform(245.775,359.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgmyAHWIAAqsIWyAAIAAgNIBPAAIAAAUMAusAAAIAAgpIAuAAIAAjdIGKAAIAAOrg");
	this.shape_18.setTransform(248.275,359.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgmyAFdIAAqsIWyAAIAAgNIBPAAIAAAUMAs1AAAIAAAHIIvAAIAAKeg");
	this.shape_19.setTransform(248.275,371.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("EgmyAFTIAAnBMAizAAAIAAjkMAiDAAAIAAAHIIvAAIAAKeg");
	this.shape_20.setTransform(248.275,372.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EgmyADpIAAjxIHbAAIAAjgIJ/AAIAAAQIRZAAIAAgHMAqyAAAIAAHIg");
	this.shape_21.setTransform(248.275,383.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("EgmyADkIAAjwIRPAAIAAjQIRkAAIAAgHMAqyAAAIAAHHg");
	this.shape_22.setTransform(244.275,383.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EgmyADrIAAjxIIoAAIAAAGIPjABQhchmBTh4IAJgMIKoATIAAgHMAqyAAAIAAHIg");
	this.shape_23.setTransform(248.275,383.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("EgmyADkIAAjwIIoAAIAAAGINIAAIAAANMAmLAAAIAAjqIRqAAIAAHHg");
	this.shape_24.setTransform(248.275,383.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("A0tApIAAgBIs3AAIAAjoIO3AAIAeBtIAAhhIbLAAIAAAHIYpAAIAADWQ3PiZ8HCKIAtCoQioiehBAFg");
	this.shape_25.setTransform(279.65,402.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A7IBvIAAjdIdpAAIAAAIIYoAAIAADVg");
	this.shape_26.setTransform(319.825,395.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Aw4BvIAAjdIJJAAIAAAIIYnAAIAADVg");
	this.shape_27.setTransform(388.5,395.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},166).to({state:[{t:this.shape_1}]},33).to({state:[{t:this.shape_2}]},97).to({state:[{t:this.shape_3}]},15).to({state:[{t:this.shape_4}]},39).to({state:[{t:this.shape_5}]},99).to({state:[{t:this.shape_6}]},16).to({state:[{t:this.shape_7}]},61).to({state:[{t:this.shape_8}]},45).to({state:[{t:this.shape_9}]},11).to({state:[{t:this.shape_10}]},25).to({state:[{t:this.shape_11}]},14).to({state:[{t:this.shape_12}]},72).to({state:[{t:this.shape_13}]},69).to({state:[{t:this.shape_14}]},15).to({state:[{t:this.shape_15}]},62).to({state:[{t:this.shape_16}]},14).to({state:[{t:this.shape_17}]},27).to({state:[{t:this.shape_18}]},36).to({state:[{t:this.shape_19}]},90).to({state:[{t:this.shape_20}]},4).to({state:[{t:this.shape_21}]},76).to({state:[{t:this.shape_22}]},15).to({state:[{t:this.shape_23}]},17).to({state:[{t:this.shape_24}]},48).to({state:[{t:this.shape_25}]},69).to({state:[{t:this.shape_26}]},19).to({state:[{t:this.shape_27}]},38).to({state:[]},31).wait(139));

	// text
	this.instance_1 = new lib.tex114();
	this.instance_1.setTransform(18,192,0.51,0.3749);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(165).to({_off:false,x:12,y:173},0).wait(1296));

	// sfer
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(8.75,184.85,3.7441,0.2474,0,0,0,-6.9,0.4);
	this.instance_2.alpha = 0.7617;
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(8.75,256.85,3.4708,0.2474,0,0,0,-7,1.4);
	this.instance_3.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},166).to({state:[{t:this.instance_2}]},33).to({state:[{t:this.instance_2}]},112).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_2}]},115).to({state:[{t:this.instance_2}]},61).to({state:[{t:this.instance_2}]},45).to({state:[{t:this.instance_3,p:{regY:1.4,scaleX:3.4708,x:8.75,y:256.85}},{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_2}]},72).to({state:[{t:this.instance_2}]},84).to({state:[{t:this.instance_3,p:{regY:-3.9,scaleX:15.548,x:10.05,y:348.35}},{t:this.instance_2}]},76).to({state:[{t:this.instance_2}]},248).to({state:[{t:this.instance_2}]},153).to({state:[]},158).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(166).to({_off:false},0).wait(33).to({regX:-6.8,scaleX:1.5544,x:62.9},0).wait(112).to({regX:-6.9,regY:0,scaleX:2.2198,x:62.75,y:209},0).wait(39).to({regY:-6.2,scaleX:28.6506,x:62.3,y:206.7},0).wait(115).to({regX:-6.3,regY:0.6,scaleX:16.558,x:67.15,y:233.25},0).wait(61).to({regX:-6.9,regY:1.4,scaleX:27.127,x:51.3,y:233.45},0).wait(45).to({regX:-7,scaleX:30.4538,x:48.1},0).wait(11).to({startPosition:0},0).wait(39).to({regX:-6.9,regY:1.2,scaleX:11.9496,x:63.95,y:279.65},0).wait(72).to({regX:-6.8,scaleX:28.3873,x:65.1,y:279.6},0).wait(84).to({regY:1.4,scaleX:14.9552,x:51.55,y:304.5},0).wait(76).to({regX:-7,scaleX:29.8497,x:62.85,y:327.35},0).wait(248).to({regX:-6.8,regY:-4.2,scaleX:23.7524,x:56.1,y:372.5},0).wait(153).to({regX:-6.7,scaleX:29.8995,x:69.35,y:394.65},0).to({_off:true},158).wait(50));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_39 = new cjs.Graphics().p("AIyCsIAAk8IBfAAIAAE8g");
	var mask_graphics_40 = new cjs.Graphics().p("AINCrIAAk7ICpAAIAAE7g");
	var mask_graphics_41 = new cjs.Graphics().p("AHoCqIAAk7ID0AAIAAE7g");
	var mask_graphics_42 = new cjs.Graphics().p("AHDCqIAAk8IE+AAIAAE8g");
	var mask_graphics_43 = new cjs.Graphics().p("AGeCpIAAk7IGJAAIAAE7g");
	var mask_graphics_44 = new cjs.Graphics().p("AF5CoIAAk7IHTAAIAAE7g");
	var mask_graphics_45 = new cjs.Graphics().p("AFVCoIAAk8IIdAAIAAE8g");
	var mask_graphics_46 = new cjs.Graphics().p("AEwCnIAAk7IJnAAIAAE7g");
	var mask_graphics_47 = new cjs.Graphics().p("AELCmIAAk7IKyAAIAAE7g");
	var mask_graphics_48 = new cjs.Graphics().p("ADmCmIAAk8IL8AAIAAE8g");
	var mask_graphics_49 = new cjs.Graphics().p("ADBClIAAk7INHAAIAAE7g");
	var mask_graphics_50 = new cjs.Graphics().p("ACcCkIAAk7IORAAIAAE7g");
	var mask_graphics_51 = new cjs.Graphics().p("AB3CkIAAk8IPcAAIAAE8g");
	var mask_graphics_52 = new cjs.Graphics().p("ABSCjIAAk7IQmAAIAAE7g");
	var mask_graphics_53 = new cjs.Graphics().p("AAtCiIAAk7IRxAAIAAE7g");
	var mask_graphics_54 = new cjs.Graphics().p("AAICiIAAk8IS7AAIAAE8g");
	var mask_graphics_55 = new cjs.Graphics().p("AgbChIAAk7IUEAAIAAE7g");
	var mask_graphics_56 = new cjs.Graphics().p("AhACgIAAk7IVPAAIAAE7g");
	var mask_graphics_57 = new cjs.Graphics().p("AhlCgIAAk8IWZAAIAAE8g");
	var mask_graphics_58 = new cjs.Graphics().p("AiKCfIAAk7IXkAAIAAE7g");
	var mask_graphics_59 = new cjs.Graphics().p("AivCeIAAk7IYuAAIAAE7g");
	var mask_graphics_60 = new cjs.Graphics().p("AjUCeIAAk7IZ5AAIAAE7g");
	var mask_graphics_61 = new cjs.Graphics().p("Aj5CeIAAk7IbDAAIAAE7g");
	var mask_graphics_62 = new cjs.Graphics().p("AkeCeIAAk7IcOAAIAAE7g");
	var mask_graphics_63 = new cjs.Graphics().p("AlDCeIAAk7IdYAAIAAE7g");
	var mask_graphics_64 = new cjs.Graphics().p("AlnCeIAAk7IeiAAIAAE7g");
	var mask_graphics_65 = new cjs.Graphics().p("AmMCeIAAk7IfsAAIAAE7g");
	var mask_graphics_66 = new cjs.Graphics().p("AmxCeIAAk7MAg3AAAIAAE7g");
	var mask_graphics_67 = new cjs.Graphics().p("AnWCeIAAk7MAiBAAAIAAE7g");
	var mask_graphics_68 = new cjs.Graphics().p("An7CeIAAk7MAjMAAAIAAE7g");
	var mask_graphics_69 = new cjs.Graphics().p("AogCeIAAk7MAkWAAAIAAE7g");
	var mask_graphics_70 = new cjs.Graphics().p("ApFCeIAAk7MAlhAAAIAAE7g");
	var mask_graphics_71 = new cjs.Graphics().p("ApqCeIAAk7MAmrAAAIAAE7g");
	var mask_graphics_72 = new cjs.Graphics().p("AqPCeIAAk7MAn2AAAIAAE7g");
	var mask_graphics_73 = new cjs.Graphics().p("Aq0CeIAAk7MApAAAAIAAE7g");
	var mask_graphics_74 = new cjs.Graphics().p("ArYCeIAAk7MAqKAAAIAAE7g");
	var mask_graphics_75 = new cjs.Graphics().p("Ar9CeIAAk7MArUAAAIAAE7g");
	var mask_graphics_76 = new cjs.Graphics().p("AsiCeIAAk7MAsfAAAIAAE7g");
	var mask_graphics_77 = new cjs.Graphics().p("AtHCeIAAk7MAtpAAAIAAE7g");
	var mask_graphics_82 = new cjs.Graphics().p("AwxCrIAAk7MAx/AAAIAAE7g");
	var mask_graphics_83 = new cjs.Graphics().p("AwtDCIAAloMAx8AAAIAAFog");
	var mask_graphics_84 = new cjs.Graphics().p("AwpDYIAAmUMAx5AAAIAAGUg");
	var mask_graphics_85 = new cjs.Graphics().p("AwlDuIAAnBMAx2AAAIAAHBg");
	var mask_graphics_86 = new cjs.Graphics().p("AwhEFIAAnuMAx0AAAIAAHug");
	var mask_graphics_87 = new cjs.Graphics().p("AwdEbIAAoaMAxxAAAIAAIag");
	var mask_graphics_88 = new cjs.Graphics().p("AwZExIAApGMAxuAAAIAAJGg");
	var mask_graphics_89 = new cjs.Graphics().p("AwVFIIAApzMAxrAAAIAAJzg");
	var mask_graphics_90 = new cjs.Graphics().p("AwRFeIAAqfMAxoAAAIAAKfg");
	var mask_graphics_91 = new cjs.Graphics().p("AwNF0IAArMMAxlAAAIAALMg");
	var mask_graphics_92 = new cjs.Graphics().p("AwJGLIAAr5MAxiAAAIAAL5g");
	var mask_graphics_93 = new cjs.Graphics().p("AwFGhIAAslMAxfAAAIAAMlg");
	var mask_graphics_94 = new cjs.Graphics().p("AwBG3IAAtRMAxcAAAIAANRg");
	var mask_graphics_95 = new cjs.Graphics().p("Av9HOIAAt+MAxZAAAIAAN+g");
	var mask_graphics_96 = new cjs.Graphics().p("Av5HkIAAuqMAxWAAAIAAOqg");
	var mask_graphics_97 = new cjs.Graphics().p("Av1H6IAAvWMAxUAAAIAAPWg");
	var mask_graphics_98 = new cjs.Graphics().p("AvxIRIAAwEMAxRAAAIAAQEg");
	var mask_graphics_99 = new cjs.Graphics().p("AvtInIAAwwMAxOAAAIAAQwg");
	var mask_graphics_100 = new cjs.Graphics().p("AvpI9IAAxcMAxLAAAIAARcg");
	var mask_graphics_101 = new cjs.Graphics().p("AvlJUIAAyJMAxIAAAIAASJg");
	var mask_graphics_102 = new cjs.Graphics().p("AvhJqIAAy1MAxFAAAIAAS1g");
	var mask_graphics_103 = new cjs.Graphics().p("AvdKAIAAzhMAxCAAAIAAThg");
	var mask_graphics_104 = new cjs.Graphics().p("AvZKXIAA0PMAw/AAAIAAUPg");
	var mask_graphics_105 = new cjs.Graphics().p("AvVKtIAA07MAw8AAAIAAU7g");
	var mask_graphics_106 = new cjs.Graphics().p("AvRLDIAA1nMAw5AAAIAAVng");
	var mask_graphics_107 = new cjs.Graphics().p("AvNLaIAA2UMAw2AAAIAAWUg");
	var mask_graphics_108 = new cjs.Graphics().p("AvJLwIAA3AMAw0AAAIAAXAg");
	var mask_graphics_109 = new cjs.Graphics().p("AvFMGIAA3sMAwxAAAIAAXsg");
	var mask_graphics_110 = new cjs.Graphics().p("AvBMdIAA4aMAwuAAAIAAYag");
	var mask_graphics_111 = new cjs.Graphics().p("Au9MzIAA5GMAwrAAAIAAZGg");
	var mask_graphics_112 = new cjs.Graphics().p("Au5NJIAA5yMAwoAAAIAAZyg");
	var mask_graphics_113 = new cjs.Graphics().p("Au1NgIAA6fMAwlAAAIAAafg");
	var mask_graphics_114 = new cjs.Graphics().p("AuxN2IAA7LMAwiAAAIAAbLg");
	var mask_graphics_115 = new cjs.Graphics().p("AutOMIAA73MAwfAAAIAAb3g");
	var mask_graphics_116 = new cjs.Graphics().p("AupOjIAA8lMAwcAAAIAAclg");
	var mask_graphics_117 = new cjs.Graphics().p("AulO5IAA9RMAwZAAAIAAdRg");
	var mask_graphics_118 = new cjs.Graphics().p("AunPSIAA99MAwXAAAIAAd9g");
	var mask_graphics_916 = new cjs.Graphics().p("AzFCrIAAk7MA2OAAAIAAE7g");
	var mask_graphics_917 = new cjs.Graphics().p("AzHDBIAAlmMA2QAAAIAAFmg");
	var mask_graphics_918 = new cjs.Graphics().p("AzJDWIAAmQMA2TAAAIAAGQg");
	var mask_graphics_919 = new cjs.Graphics().p("AzLDrIAAm6MA2VAAAIAAG6g");
	var mask_graphics_920 = new cjs.Graphics().p("AzNEBIAAnlMA2XAAAIAAHlg");
	var mask_graphics_921 = new cjs.Graphics().p("AzPEWIAAoPMA2ZAAAIAAIPg");
	var mask_graphics_922 = new cjs.Graphics().p("AzREsIAAo6MA2bAAAIAAI6g");
	var mask_graphics_923 = new cjs.Graphics().p("AzTFBIAApkMA2eAAAIAAJkg");
	var mask_graphics_924 = new cjs.Graphics().p("AzVFWIAAqOMA2gAAAIAAKOg");
	var mask_graphics_925 = new cjs.Graphics().p("AzXFsIAAq5MA2iAAAIAAK5g");
	var mask_graphics_926 = new cjs.Graphics().p("AzZGBIAArjMA2kAAAIAALjg");
	var mask_graphics_927 = new cjs.Graphics().p("AzaGWIAAsMMA2lAAAIAAMMg");
	var mask_graphics_928 = new cjs.Graphics().p("AzcGsIAAs3MA2nAAAIAAM3g");
	var mask_graphics_929 = new cjs.Graphics().p("AzeHBIAAthMA2qAAAIAANhg");
	var mask_graphics_930 = new cjs.Graphics().p("AzgHWIAAuLMA2sAAAIAAOLg");
	var mask_graphics_931 = new cjs.Graphics().p("AziHsIAAu2MA2uAAAIAAO2g");
	var mask_graphics_932 = new cjs.Graphics().p("AzkIBIAAvgMA2wAAAIAAPgg");
	var mask_graphics_933 = new cjs.Graphics().p("AzmIWIAAwKMA2yAAAIAAQKg");
	var mask_graphics_934 = new cjs.Graphics().p("AzoIsIAAw1MA21AAAIAAQ1g");
	var mask_graphics_935 = new cjs.Graphics().p("AzqJBIAAxfMA23AAAIAARfg");
	var mask_graphics_936 = new cjs.Graphics().p("AzsJXIAAyKMA25AAAIAASKg");
	var mask_graphics_937 = new cjs.Graphics().p("AzuJsIAAy0MA27AAAIAAS0g");
	var mask_graphics_938 = new cjs.Graphics().p("AzwKBIAAzeMA29AAAIAATeg");
	var mask_graphics_939 = new cjs.Graphics().p("AzxKXIAA0JMA2/AAAIAAUJg");
	var mask_graphics_940 = new cjs.Graphics().p("AzzKsIAA0zMA3BAAAIAAUzg");
	var mask_graphics_941 = new cjs.Graphics().p("Az1LBIAA1dMA3DAAAIAAVdg");
	var mask_graphics_942 = new cjs.Graphics().p("Az3LXIAA2IMA3FAAAIAAWIg");
	var mask_graphics_943 = new cjs.Graphics().p("Az5LsIAA2yMA3HAAAIAAWyg");
	var mask_graphics_944 = new cjs.Graphics().p("Az7MBIAA3bMA3KAAAIAAXbg");
	var mask_graphics_945 = new cjs.Graphics().p("Az9MXIAA4GMA3MAAAIAAYGg");
	var mask_graphics_946 = new cjs.Graphics().p("Az/MsIAA4wMA3OAAAIAAYwg");
	var mask_graphics_947 = new cjs.Graphics().p("A0BNBIAA5aMA3QAAAIAAZag");
	var mask_graphics_948 = new cjs.Graphics().p("A0DNXIAA6FMA3SAAAIAAaFg");
	var mask_graphics_949 = new cjs.Graphics().p("A0FNsIAA6vMA3VAAAIAAavg");
	var mask_graphics_950 = new cjs.Graphics().p("A0GOCIAA7aMA3WAAAIAAbag");
	var mask_graphics_951 = new cjs.Graphics().p("A0IOXIAA8EMA3YAAAIAAcEg");
	var mask_graphics_952 = new cjs.Graphics().p("A0dOqIAA8uMA3aAAAIAAcug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_graphics_39,x:65.671,y:17.161}).wait(1).to({graphics:mask_graphics_40,x:69.4227,y:17.0952}).wait(1).to({graphics:mask_graphics_41,x:73.1745,y:17.0294}).wait(1).to({graphics:mask_graphics_42,x:76.9262,y:16.9636}).wait(1).to({graphics:mask_graphics_43,x:80.678,y:16.8978}).wait(1).to({graphics:mask_graphics_44,x:84.4297,y:16.832}).wait(1).to({graphics:mask_graphics_45,x:88.1815,y:16.7662}).wait(1).to({graphics:mask_graphics_46,x:91.9332,y:16.7004}).wait(1).to({graphics:mask_graphics_47,x:95.6849,y:16.6347}).wait(1).to({graphics:mask_graphics_48,x:99.4367,y:16.5689}).wait(1).to({graphics:mask_graphics_49,x:103.1884,y:16.5031}).wait(1).to({graphics:mask_graphics_50,x:106.9402,y:16.4373}).wait(1).to({graphics:mask_graphics_51,x:110.6919,y:16.3715}).wait(1).to({graphics:mask_graphics_52,x:114.4436,y:16.3057}).wait(1).to({graphics:mask_graphics_53,x:118.1954,y:16.2399}).wait(1).to({graphics:mask_graphics_54,x:121.9471,y:16.1741}).wait(1).to({graphics:mask_graphics_55,x:125.6989,y:16.1083}).wait(1).to({graphics:mask_graphics_56,x:129.4506,y:16.0425}).wait(1).to({graphics:mask_graphics_57,x:133.2023,y:15.9768}).wait(1).to({graphics:mask_graphics_58,x:136.9541,y:15.911}).wait(1).to({graphics:mask_graphics_59,x:140.7058,y:15.8452}).wait(1).to({graphics:mask_graphics_60,x:144.4576,y:15.7368}).wait(1).to({graphics:mask_graphics_61,x:148.2093,y:15.6053}).wait(1).to({graphics:mask_graphics_62,x:151.9611,y:15.4737}).wait(1).to({graphics:mask_graphics_63,x:155.7128,y:15.3421}).wait(1).to({graphics:mask_graphics_64,x:159.4645,y:15.2105}).wait(1).to({graphics:mask_graphics_65,x:163.2163,y:15.0789}).wait(1).to({graphics:mask_graphics_66,x:166.968,y:14.9474}).wait(1).to({graphics:mask_graphics_67,x:170.7198,y:14.8158}).wait(1).to({graphics:mask_graphics_68,x:174.4715,y:14.6842}).wait(1).to({graphics:mask_graphics_69,x:178.2232,y:14.5526}).wait(1).to({graphics:mask_graphics_70,x:181.975,y:14.4211}).wait(1).to({graphics:mask_graphics_71,x:185.7267,y:14.2895}).wait(1).to({graphics:mask_graphics_72,x:189.4785,y:14.1579}).wait(1).to({graphics:mask_graphics_73,x:193.2302,y:14.0263}).wait(1).to({graphics:mask_graphics_74,x:196.982,y:13.8947}).wait(1).to({graphics:mask_graphics_75,x:200.7337,y:13.7632}).wait(1).to({graphics:mask_graphics_76,x:204.4854,y:13.6316}).wait(1).to({graphics:mask_graphics_77,x:208.2372,y:13.5}).wait(5).to({graphics:mask_graphics_82,x:212.6189,y:17.136}).wait(1).to({graphics:mask_graphics_83,x:212.7279,y:19.3689}).wait(1).to({graphics:mask_graphics_84,x:212.8368,y:21.6018}).wait(1).to({graphics:mask_graphics_85,x:212.9457,y:23.8347}).wait(1).to({graphics:mask_graphics_86,x:213.0546,y:26.0675}).wait(1).to({graphics:mask_graphics_87,x:213.1636,y:28.3004}).wait(1).to({graphics:mask_graphics_88,x:213.2725,y:30.5333}).wait(1).to({graphics:mask_graphics_89,x:213.3814,y:32.7662}).wait(1).to({graphics:mask_graphics_90,x:213.4903,y:34.9991}).wait(1).to({graphics:mask_graphics_91,x:213.5993,y:37.232}).wait(1).to({graphics:mask_graphics_92,x:213.7082,y:39.4649}).wait(1).to({graphics:mask_graphics_93,x:213.8171,y:41.6978}).wait(1).to({graphics:mask_graphics_94,x:213.926,y:43.9307}).wait(1).to({graphics:mask_graphics_95,x:214.035,y:46.1636}).wait(1).to({graphics:mask_graphics_96,x:214.1439,y:48.3965}).wait(1).to({graphics:mask_graphics_97,x:214.2528,y:50.6294}).wait(1).to({graphics:mask_graphics_98,x:214.3618,y:52.8623}).wait(1).to({graphics:mask_graphics_99,x:214.4707,y:55.0952}).wait(1).to({graphics:mask_graphics_100,x:214.5796,y:57.3281}).wait(1).to({graphics:mask_graphics_101,x:214.6885,y:59.561}).wait(1).to({graphics:mask_graphics_102,x:214.7975,y:61.7938}).wait(1).to({graphics:mask_graphics_103,x:214.9064,y:64.0267}).wait(1).to({graphics:mask_graphics_104,x:215.0153,y:66.2596}).wait(1).to({graphics:mask_graphics_105,x:215.1242,y:68.4925}).wait(1).to({graphics:mask_graphics_106,x:215.2332,y:70.7254}).wait(1).to({graphics:mask_graphics_107,x:215.3421,y:72.9583}).wait(1).to({graphics:mask_graphics_108,x:215.451,y:75.1912}).wait(1).to({graphics:mask_graphics_109,x:215.5599,y:77.4241}).wait(1).to({graphics:mask_graphics_110,x:215.6689,y:79.657}).wait(1).to({graphics:mask_graphics_111,x:215.7778,y:81.8899}).wait(1).to({graphics:mask_graphics_112,x:215.8867,y:84.1228}).wait(1).to({graphics:mask_graphics_113,x:215.9956,y:86.3557}).wait(1).to({graphics:mask_graphics_114,x:216.1046,y:88.5886}).wait(1).to({graphics:mask_graphics_115,x:216.2135,y:90.8215}).wait(1).to({graphics:mask_graphics_116,x:216.3224,y:93.0544}).wait(1).to({graphics:mask_graphics_117,x:216.4314,y:95.2873}).wait(1).to({graphics:mask_graphics_118,x:215.9875,y:97.8256}).wait(798).to({graphics:mask_graphics_916,x:224.9145,y:17.136}).wait(1).to({graphics:mask_graphics_917,x:224.9339,y:19.2719}).wait(1).to({graphics:mask_graphics_918,x:224.9532,y:21.4078}).wait(1).to({graphics:mask_graphics_919,x:224.9725,y:23.5437}).wait(1).to({graphics:mask_graphics_920,x:224.9919,y:25.6796}).wait(1).to({graphics:mask_graphics_921,x:225.0112,y:27.8155}).wait(1).to({graphics:mask_graphics_922,x:225.0305,y:29.9513}).wait(1).to({graphics:mask_graphics_923,x:225.0499,y:32.0872}).wait(1).to({graphics:mask_graphics_924,x:225.0692,y:34.2231}).wait(1).to({graphics:mask_graphics_925,x:225.0885,y:36.359}).wait(1).to({graphics:mask_graphics_926,x:225.1079,y:38.4949}).wait(1).to({graphics:mask_graphics_927,x:225.1272,y:40.6308}).wait(1).to({graphics:mask_graphics_928,x:225.1465,y:42.7667}).wait(1).to({graphics:mask_graphics_929,x:225.1658,y:44.9026}).wait(1).to({graphics:mask_graphics_930,x:225.1852,y:47.0385}).wait(1).to({graphics:mask_graphics_931,x:225.2045,y:49.1744}).wait(1).to({graphics:mask_graphics_932,x:225.2238,y:51.3103}).wait(1).to({graphics:mask_graphics_933,x:225.2432,y:53.4462}).wait(1).to({graphics:mask_graphics_934,x:225.2625,y:55.5821}).wait(1).to({graphics:mask_graphics_935,x:225.2818,y:57.718}).wait(1).to({graphics:mask_graphics_936,x:225.3012,y:59.8539}).wait(1).to({graphics:mask_graphics_937,x:225.3205,y:61.9898}).wait(1).to({graphics:mask_graphics_938,x:225.3398,y:64.1257}).wait(1).to({graphics:mask_graphics_939,x:225.3592,y:66.2616}).wait(1).to({graphics:mask_graphics_940,x:225.3785,y:68.3975}).wait(1).to({graphics:mask_graphics_941,x:225.3978,y:70.5334}).wait(1).to({graphics:mask_graphics_942,x:225.4172,y:72.6693}).wait(1).to({graphics:mask_graphics_943,x:225.4365,y:74.8052}).wait(1).to({graphics:mask_graphics_944,x:225.4558,y:76.9411}).wait(1).to({graphics:mask_graphics_945,x:225.4751,y:79.077}).wait(1).to({graphics:mask_graphics_946,x:225.4945,y:81.2129}).wait(1).to({graphics:mask_graphics_947,x:225.5138,y:83.3488}).wait(1).to({graphics:mask_graphics_948,x:225.5331,y:85.4846}).wait(1).to({graphics:mask_graphics_949,x:225.5525,y:87.6205}).wait(1).to({graphics:mask_graphics_950,x:225.5718,y:89.7564}).wait(1).to({graphics:mask_graphics_951,x:225.5911,y:91.8923}).wait(1).to({graphics:mask_graphics_952,x:223.7101,y:93.833}).wait(510));

	// Layer_7
	this.instance_4 = new lib.titr1();
	this.instance_4.setTransform(131,2,0.0706,0.0936);

	this.instance_5 = new lib.txt05();
	this.instance_5.setTransform(115,14,0.316,0.3026);

	this.instance_6 = new lib.text6();
	this.instance_6.setTransform(112,2,0.3231,0.3052);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},38).to({state:[{t:this.instance_4},{t:this.instance_6}]},877).wait(546));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,519.8,421.9);


(lib.cswsouf4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1390));

	// mask_idn
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(102.45,48.3,3.8488,0.437,0,0,0,7,0);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 198, 232, 250, 0)];
	this.instance.cache(-9,-25,18,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({regX:7.4,scaleX:0.2047,x:103.15},17).wait(3).to({regX:7.1,scaleX:6.0325,x:188.2},0).to({regX:7.2,scaleX:0.3209,x:190.55},16).wait(14).to({regX:7.4,regY:0.1,scaleX:29.3807,x:611.3,y:48.95},0).to({scaleX:0.7142,x:613.7},80).wait(40).to({regX:7,regY:0,scaleX:4.6503,x:111.15,y:71.55},0).to({regX:7.2,scaleX:0.2175,x:113.2},18).wait(22).to({regX:7,regY:0.1,scaleX:23.7018,x:443.75,y:70.35},0).to({regX:7.1,scaleX:0.3385,x:445},65).wait(31).to({regX:7.4,regY:0,scaleX:4.3581,x:507.05,y:70.95},0).to({regX:7.5,scaleX:0.2885},14).wait(33).to({regX:7.3,scaleX:15.8739,x:274.25,y:92.35},0).to({regX:7.7,scaleX:0.2221,x:274.3},38).wait(32).to({regX:7.3,scaleX:10.3235,x:420.3},0).to({regX:7.5,scaleX:0.2526,x:420.6},28).wait(30).to({regX:7.4,scaleX:12.0561,x:589},0).to({regX:7.5,scaleX:0.293,x:590},29).wait(26).to({regX:7,scaleX:24.2049,x:388.7,y:115},0).to({scaleX:0.3457,x:389.85},57).wait(38).to({scaleX:18.4824,x:643.25},0).to({regX:7.2,scaleX:0.3945,x:645.1},55).wait(50).to({regX:7,scaleX:23.169,x:370.5,y:138.25},0).to({regX:7.2,scaleX:0.2565,x:374.05},62).wait(43).to({regX:7,regY:0.1,scaleX:13.1865,x:557.1,y:137.05},0).to({regX:7.3,scaleX:0.2805,x:559.1},39).wait(57).to({regX:7,scaleX:11.0671,x:203.1,y:160.3},0).to({regX:7.2,scaleX:0.2371,x:203.7},27).wait(17).to({regX:7,scaleX:6.8286,x:298.1},0).to({regX:7.3,scaleX:0.3159,x:298.7},21).wait(17).to({regX:7,scaleX:5.9085,x:379.55},0).to({regX:7.3,scaleX:0.2743,x:380.75},18).wait(18).to({regX:7.1,scaleX:18.6377,x:641.75},0).to({regX:7.3,scaleX:0.2743,x:642.95,y:158.45},73).wait(14).to({regX:7.2,regY:0,scaleX:20.6021,x:336.4,y:182.3},0).to({scaleX:0.2019,x:336.6},60).wait(14).to({scaleX:14.9545,x:547.75},0).to({scaleX:0.3784,x:548.85},45).wait(91));

	// shqpe
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6E8FA").s().p("Egu5AMQIAA0lIIPAAIgKgLIBhAAIAAjvMBUNAAAIAAYfg");
	this.shape.setTransform(338.075,114.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6E8FA").s().p("Egu5AMQIAA0lIIPAAIgKgLIBhAAIAAgGINsAAIAAjpMBGhAAAIAAYfg");
	this.shape_1.setTransform(338.075,114.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6E8FA").s().p("Egu5AKbIAA0lIIPAAIgKgKIBhAAIAAgHIMGAAIAAAHMBIHAAAIAAUvg");
	this.shape_2.setTransform(338.075,125.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6E8FA").s().p("Egu5AKbIAAxBILwAAIAAj1IJ8AAIAAAHMBIHAAAIAAUvg");
	this.shape_3.setTransform(338.075,125.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6E8FA").s().p("Egu5AKYIAAxBILwAAIAAgSMAzzAAAIAAjcIeQAAIAAUvg");
	this.shape_4.setTransform(338.075,126.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6E8FA").s().p("Egu5AIqIAAxBILwAAIAAgSMAr0AAAIAAAGMAmPAAAIAARNg");
	this.shape_5.setTransform(338.075,137.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6E8FA").s().p("Egu5AIqIAAtrMAkaAAAIAAjoITKAAIAAAGMAmPAAAIAARNg");
	this.shape_6.setTransform(338.075,137.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6E8FA").s().p("Egu5AInIAAtrMAkaAAAIAAgMIXCAAIAAjWMAiXAAAIAARNg");
	this.shape_7.setTransform(338.075,137.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6E8FA").s().p("Egu5AG8IAAtrMAkaAAAIAAgMMA5ZAAAIAAN3g");
	this.shape_8.setTransform(338.075,148.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6E8FA").s().p("Egu5AG8IAAqIMA3AAAAIAAjvMAmzAAAIAAN3g");
	this.shape_9.setTransform(338.075,148.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C6E8FA").s().p("Egu5AFLIAAqIMA3AAAAIAAgNMAmzAAAIAAKVg");
	this.shape_10.setTransform(338.075,159.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6E8FA").s().p("Egu5AFLIAAmtMA0CAAAIAAjbIC+AAIAAgNMAmzAAAIAAKVg");
	this.shape_11.setTransform(338.075,159.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6E8FA").s().p("Egu5ADgIAAmtMA0CAAAIAAgSMApxAAAIAAG/g");
	this.shape_12.setTransform(338.075,170.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6E8FA").s().p("Egu5ADgIAAjRIaQAAIAAjcIZyAAIAAgSMApxAAAIAAG/g");
	this.shape_13.setTransform(338.075,170.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C6E8FA").s().p("Egu5ADgIAAjRIaQAAIAAgHIOuAAIAAjVILEAAIAAgSMApxAAAIAAG/g");
	this.shape_14.setTransform(338.075,170.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6E8FA").s().p("Egu5ADgIAAjRIaQAAIAAgHIK2AAIAAAHIQbAAIAAjuMAoSAAAIAAG/g");
	this.shape_15.setTransform(338.075,170.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C6E8FA").s().p("Egu5ABsIAAjQIaQAAIAAgHIK2AAIAAAHILoAAIAAASMAtFAAAIAAC+g");
	this.shape_16.setTransform(338.075,181.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C6E8FA").s().p("A3uBoIAAjQICZAAIAAASMAtEAAAIAAC+g");
	this.shape_17.setTransform(486.35,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},38).to({state:[{t:this.shape_1}]},20).to({state:[{t:this.shape_2}]},30).to({state:[{t:this.shape_3}]},120).to({state:[{t:this.shape_4}]},40).to({state:[{t:this.shape_5}]},96).to({state:[{t:this.shape_6}]},47).to({state:[{t:this.shape_7}]},70).to({state:[{t:this.shape_8}]},58).to({state:[{t:this.shape_9}]},55).to({state:[{t:this.shape_10}]},95).to({state:[{t:this.shape_11}]},105).to({state:[{t:this.shape_12}]},105).to({state:[{t:this.shape_13}]},96).to({state:[{t:this.shape_14}]},44).to({state:[{t:this.shape_15}]},38).to({state:[{t:this.shape_16}]},36).to({state:[{t:this.shape_17}]},87).to({state:[]},74).wait(136));

	// text
	this.instance_1 = new lib.HistoiresCP();
	this.instance_1.setTransform(50,35,0.6137,0.5335);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(37).to({_off:false},0).wait(1352));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("AgOQfIAA8SIBlAAIAAcSg");
	var mask_graphics_18 = new cjs.Graphics().p("AkrQjIAA8hIKjAAIAAchg");
	var mask_graphics_19 = new cjs.Graphics().p("ApHQmIAA8uITgAAIAAcug");
	var mask_graphics_20 = new cjs.Graphics().p("AtkQqIAA89IceAAIAAc9g");
	var mask_graphics_21 = new cjs.Graphics().p("AyBQuIAA9MMAlcAAAIAAdMg");
	var mask_graphics_22 = new cjs.Graphics().p("A2dQxIAA9aMAuZAAAIAAdag");
	var mask_graphics_23 = new cjs.Graphics().p("A66Q1IAA9pMA3XAAAIAAdpg");
	var mask_graphics_24 = new cjs.Graphics().p("A/XQ4IAA92MBAVAAAIAAd2g");
	var mask_graphics_25 = new cjs.Graphics().p("EgjzAQ8IAA+FMBJSAAAIAAeFg");
	var mask_graphics_26 = new cjs.Graphics().p("EgoQARAIAA+UMBSQAAAIAAeUg");
	var mask_graphics_27 = new cjs.Graphics().p("EgssARDIAA+iMBbNAAAIAAeig");
	var mask_graphics_28 = new cjs.Graphics().p("EgxJARHIAA+xMBkLAAAIAAexg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:8.7066,y:105.5308}).wait(1).to({graphics:mask_graphics_18,x:37.609,y:105.8904}).wait(1).to({graphics:mask_graphics_19,x:66.5113,y:106.2499}).wait(1).to({graphics:mask_graphics_20,x:95.4136,y:106.6095}).wait(1).to({graphics:mask_graphics_21,x:124.316,y:106.969}).wait(1).to({graphics:mask_graphics_22,x:153.2183,y:107.3286}).wait(1).to({graphics:mask_graphics_23,x:182.1207,y:107.6882}).wait(1).to({graphics:mask_graphics_24,x:211.023,y:108.0477}).wait(1).to({graphics:mask_graphics_25,x:239.9253,y:108.4073}).wait(1).to({graphics:mask_graphics_26,x:268.8277,y:108.7668}).wait(1).to({graphics:mask_graphics_27,x:297.73,y:109.1264}).wait(1).to({graphics:mask_graphics_28,x:326.6323,y:109.4859}).wait(1362));

	// photo
	this.instance_2 = new lib.text003();
	this.instance_2.setTransform(26,22,0.3164,0.2709);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(16).to({_off:false},0).wait(1373));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,656.4,206.8);


(lib.cswsouf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(594));

	// _qsk
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(154.4,73.4,8.1975,0.4542,0,0,0,7,0.2);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 227, 186, 215, 0)];
	this.instance.cache(-9,-25,18,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({regY:0,scaleX:0.1938,x:156.7,y:72.45},23).wait(9).to({regX:7.3,regY:0.2,scaleX:11.1086,scaleY:0.4022,x:315.1,y:73.45},0).to({regX:7.1,scaleX:0.3533,x:320.05,y:74.05},33).wait(40).to({regX:7.3,scaleX:4.2897,x:99.8,y:102.25},0).to({regX:7.2,regY:0.4,scaleX:0.397,x:104.6,y:101.65},15).wait(7).to({regX:7.4,regY:0.2,scaleX:6.0712,scaleY:0.435,x:188,y:100.8},0).to({scaleX:0.3578,scaleY:0.4022,x:187.6,y:102},20).wait(8).to({regX:7.5,scaleX:16.0069,scaleY:0.5018,x:417.45,y:101.45},0).to({regX:7.7,regY:0.1,scaleX:0.2541,scaleY:0.4022,x:414.45,y:101.4},36).wait(29).to({regX:7,regY:1.9,scaleX:8.1896,scaleY:0.4955,x:526.3,y:102.1},0).to({regX:7.6,regY:0.2,scaleX:0.3021,scaleY:0.4022,x:530.65,y:101.4},37).wait(17).to({regX:7.4,regY:0.1,scaleX:2.594,scaleY:0.4358,x:564.85,y:100.75},0).to({regX:7.7,scaleX:0.2867,scaleY:0.4022,x:566.3,y:100.1},5).wait(2).to({regX:7.1,regY:3.2,scaleX:7.113,scaleY:0.5191,x:141.35,y:132.6},0).to({regX:7.2,scaleX:0.4583,scaleY:0.4022,x:145.7,y:129.95},20).wait(19).to({regX:7.1,regY:3.4,scaleX:8.5536,scaleY:0.4899,x:264.8},0).to({regX:7.8,regY:0.2,scaleX:0.1734,scaleY:0.4022,x:264.9,y:128.75},27).wait(26).to({regX:7,regY:0.1,scaleX:19.8757,scaleY:0.469,x:542.05,y:130.05},0).to({regX:7.9,regY:0.2,scaleX:0.1913,scaleY:0.4022,x:544.7,y:128.75},56).wait(24).to({regX:7.2,regY:0.1,scaleX:1.9449,x:571.75,y:130},0).to({regX:7.4,regY:0.4,scaleX:0.3671,x:575.35,y:128.65},7).to({regX:7.1,regY:0.2,scaleX:21.5433,scaleY:0.5016,x:344.35,y:157.15},1).to({regY:0.1,scaleX:0.8034,scaleY:0.4022,x:353.9,y:157.35},51).wait(49));

	// shqpe
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3BAD7").s().p("EgrKAJ8IAAvnIOqAAIAAgLIECAAIAAgNIAbAAIAAj4MBDOAAAIAAT3g");
	this.shape.setTransform(309.575,123.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3BAD7").s().p("EgrKAJ8IAAvnIOqAAIAAgLIdCAAIAAkFMAqpAAAIAAT3g");
	this.shape_1.setTransform(309.575,123.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3BAD7").s().p("EgrKAH2IAArhIKZAAIAAkGIERAAIAAgEMBHrAAAIAAPrg");
	this.shape_2.setTransform(309.575,137.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3BAD7").s().p("EgrKAH2IAArhIKZAAIAAgMINkAAIAAj+MA+YAAAIAAPrg");
	this.shape_3.setTransform(309.575,137.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3BAD7").s().p("EgrKAH2IAArhIKZAAIAAgMMAwiAAAIAAj+IbaAAIAAPrg");
	this.shape_4.setTransform(309.575,137.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3BAD7").s().p("EgrKAH2IAArhIKZAAIAAgMMBC6AAAIAAj+IJCAAIAAPrg");
	this.shape_5.setTransform(309.575,137.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3BAD7").s().p("EgrKAF3IAArhIKZAAIAAgMMBL8AAAIAALtg");
	this.shape_6.setTransform(309.575,152.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3BAD7").s().p("EgrKAFnIAAm8IQzAAIAAggIAOAAIAAjxMBFUAAAIAALNg");
	this.shape_7.setTransform(309.575,151.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3BAD7").s().p("EgpuAF3IhcncINcAAIAAANIW6AAIAAkeMAx/AAAIAALtg");
	this.shape_8.setTransform(309.575,152.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E3BAD7").s().p("EgpAAEVIiKl6INcAAIAAANIW6AAIAAgNMArRAAAIAAkRIGuAAIAALtg");
	this.shape_9.setTransform(309.575,152.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3BAD7").s().p("EgrKADrIAAnJIeyAAIAAgGMAwuAAAIAAgGIG1AAIAAHVg");
	this.shape_10.setTransform(309.575,163.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},33).to({state:[{t:this.shape_1}]},32).to({state:[{t:this.shape_2}]},73).to({state:[{t:this.shape_3}]},22).to({state:[{t:this.shape_4}]},28).to({state:[{t:this.shape_5}]},65).to({state:[{t:this.shape_6}]},54).to({state:[{t:this.shape_7}]},7).to({state:[{t:this.shape_8}]},39).to({state:[{t:this.shape_9}]},53).to({state:[{t:this.shape_10}]},80).to({state:[]},8).wait(100));

	// text
	this.instance_1 = new lib.text1();
	this.instance_1.setTransform(43,57,0.1644,0.1228);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(32).to({_off:false},0).wait(561));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AAFPiIAA5rIBeAAIAAZrg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai1PiIAA5rIHQAAIAAZrg");
	var mask_graphics_11 = new cjs.Graphics().p("AlwPiIAA5rINEAAIAAZrg");
	var mask_graphics_12 = new cjs.Graphics().p("AorPiIAA5rIS3AAIAAZrg");
	var mask_graphics_13 = new cjs.Graphics().p("ArmPiIAA5rIYqAAIAAZrg");
	var mask_graphics_14 = new cjs.Graphics().p("AuhPiIAA5rIedAAIAAZrg");
	var mask_graphics_15 = new cjs.Graphics().p("AxcPiIAA5rMAkRAAAIAAZrg");
	var mask_graphics_16 = new cjs.Graphics().p("A0WPiIAA5rMAqDAAAIAAZrg");
	var mask_graphics_17 = new cjs.Graphics().p("A3RPiIAA5rMAv2AAAIAAZrg");
	var mask_graphics_18 = new cjs.Graphics().p("A6MPiIAA5rMA1pAAAIAAZrg");
	var mask_graphics_19 = new cjs.Graphics().p("A9HPiIAA5rMA7dAAAIAAZrg");
	var mask_graphics_20 = new cjs.Graphics().p("EggCAPiIAA5rMBBQAAAIAAZrg");
	var mask_graphics_21 = new cjs.Graphics().p("Egi9APiIAA5rMBHDAAAIAAZrg");
	var mask_graphics_22 = new cjs.Graphics().p("Egl4APiIAA5rMBM2AAAIAAZrg");
	var mask_graphics_23 = new cjs.Graphics().p("EgozAPiIAA5rMBSqAAAIAAZrg");
	var mask_graphics_24 = new cjs.Graphics().p("EgruAPiIAA5rMBYdAAAIAAZrg");
	var mask_graphics_25 = new cjs.Graphics().p("EguzAPiIAA5rMBePAAAIAAZrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:9.9032,y:99.4029}).wait(1).to({graphics:mask_graphics_10,x:28.3293,y:99.4029}).wait(1).to({graphics:mask_graphics_11,x:46.7553,y:99.4029}).wait(1).to({graphics:mask_graphics_12,x:65.1813,y:99.4029}).wait(1).to({graphics:mask_graphics_13,x:83.6074,y:99.4029}).wait(1).to({graphics:mask_graphics_14,x:102.0334,y:99.4029}).wait(1).to({graphics:mask_graphics_15,x:120.4595,y:99.4029}).wait(1).to({graphics:mask_graphics_16,x:138.8855,y:99.4029}).wait(1).to({graphics:mask_graphics_17,x:157.3115,y:99.4029}).wait(1).to({graphics:mask_graphics_18,x:175.7376,y:99.4029}).wait(1).to({graphics:mask_graphics_19,x:194.1636,y:99.4029}).wait(1).to({graphics:mask_graphics_20,x:212.5897,y:99.4029}).wait(1).to({graphics:mask_graphics_21,x:231.0157,y:99.4029}).wait(1).to({graphics:mask_graphics_22,x:249.4417,y:99.4029}).wait(1).to({graphics:mask_graphics_23,x:267.8678,y:99.4029}).wait(1).to({graphics:mask_graphics_24,x:286.2938,y:99.4029}).wait(1).to({graphics:mask_graphics_25,x:303.6426,y:99.4029}).wait(569));

	// photo
	this.instance_2 = new lib.text001();
	this.instance_2.setTransform(27,33,0.2979,0.2405);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).wait(585));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.5,197.1);


(lib.cswsouf11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(918));

	// Layer_7
	this.instance = new lib.Syol8("synched",0);
	this.instance.setTransform(251.45,85,0.6932,0.6048,0,0,0,-4.5,-12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:2.1,regY:2.1,scaleX:0.0239,scaleY:0.0469,x:254.6,y:91.5,alpha:0},0).to({regX:-4.5,regY:-12.9,scaleX:0.6932,scaleY:0.6048,x:251.45,y:85,alpha:1},13).wait(904));

	// Layer_14
	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(398.5,194.6,22.1402,0.465,0,0,0,7,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({regX:7.5,regY:-0.2,scaleX:0.4024,x:403.3,y:194.4},46).wait(25).to({regX:7.2,regY:0.4,scaleX:28.9348,scaleY:0.4803,x:450.85,y:219.25},0).to({regY:0.3,scaleX:0.4005,x:451.55,y:219.2},63).wait(56).to({regX:7.3,regY:0.4,scaleX:15.3183,scaleY:0.4209,x:307.4,y:244.65},0).to({regX:7.5,scaleX:0.2623,x:304.85},32).wait(8).to({regX:7.2,scaleX:9.4611,x:428.25},0).to({regX:7.4,scaleX:0.3332,x:429.8},22).wait(33).to({regX:7.5,regY:0.5,scaleX:6.822,x:142.7,y:269.35},0).to({scaleX:0.2149,x:139.7},17).wait(8).to({regX:7.3,scaleX:14.2554,x:342.4},0).to({regX:7.4,scaleX:0.2493,x:345},30).wait(41).to({regX:7,regY:0.4,scaleX:16.4592,x:343.2,y:293.25},0).to({scaleX:0.2976,x:351.85},37).wait(14).to({scaleX:12.3471,x:512.8},0).to({regX:7.2,scaleX:0.4333,x:516.9},24).wait(22).to({regX:7,regY:0.1,scaleX:21.9581,x:395.95,y:315.75},0).to({regX:7.2,scaleX:0.3136,x:402.15},50).wait(35).to({regX:7,regY:0.4,scaleX:31.212,x:495.5,y:337.55},0).to({scaleX:0.4457,x:499.15},75).wait(1).to({regY:0.2,scaleX:11.2587,x:157.6,y:360.75},0).to({regX:7.2,scaleX:0.3205,x:160.25},23).wait(28).to({regX:7,regY:0.1,scaleX:29.5642,x:521.65,y:383.95},0).to({scaleX:0.4067,x:519.5},85).wait(1).to({regY:0.2,scaleX:35.203,x:493.35,y:406.95},0).to({regX:7.2,scaleX:0.5011,x:497.35},87).wait(37));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgniAR4MAAAggJINYAAIAAjmMBAuAAAIAADmIA+AAMAAAAgJg");
	this.shape.setTransform(256.2,300.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgniAQFMAAAggJMBPEAAAMAAAAgJg");
	this.shape_1.setTransform(256.2,311.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgniAQAIAA8TIGWAAIAAjsMBAtAAAIAADsIIBAAIAAcTg");
	this.shape_2.setTransform(256.2,312.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgniAOKIAA8TMBPEAAAIAAcTg");
	this.shape_3.setTransform(256.2,323.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgniAOKIAA45INVAAIAAjaMAgaAAAIAADaIASAAIAAjaMAhDAAAIAAcTg");
	this.shape_4.setTransform(256.2,323.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgniAOKIAA45QTBhsbABsIAAjaMAhDAAAIAAcTg");
	this.shape_5.setTransform(256.2,323.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgniAMdIAA45MAqnAAAIAAAHMAkdAAAIAAYyg");
	this.shape_6.setTransform(256.2,334.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgniAMdIAA1CIGWgBIAAjFIOeAAQANgZAYgYIVOAAIAAAHMAkdAAAIAAYyg");
	this.shape_7.setTransform(256.2,334.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgniAMdIAA1CIVSgDQhliFBshvIVOAAIAAAHMAkdAAAIAAYyg");
	this.shape_8.setTransform(256.2,334.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgniAKTIAA0lMBPEAAAIAAUlg");
	this.shape_9.setTransform(256.2,348.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgnhAKTIAAw1IRBAAIAAjUMAkQAAAIAAgcIZyAAIAAUlg");
	this.shape_10.setTransform(256.15,348.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgniAKTIAAw1MA1RAAAIAAjwIZ0AAIAAUlg");
	this.shape_11.setTransform(255.7,348.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgniAIfIAAw2MA1SAAAIAAgHIZyAAIAAQ9g");
	this.shape_12.setTransform(256.2,360.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgniAIrIAAtjMA9dAAAIAAgGMgv9AAAIAAjsMA4iAAAIAADrIJCAAIAANqg");
	this.shape_13.setTransform(256.2,358.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgniAG1IAAtiMA9dAAAIAAgHIRnAAIAANpg");
	this.shape_14.setTransform(256.2,370.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgniAGpIAAqCII2AAIAAjPMBDbAAAIAADPICzAAIAAKCg");
	this.shape_15.setTransform(256.2,371.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgniAFBIAAqBMBPEAAAIAAKBg");
	this.shape_16.setTransform(256.2,382.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgniADGIAAmLMBPEAAAIAAGLg");
	this.shape_17.setTransform(256.2,394.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgopADPIAAiyIQlAAIAAjrMBAtAAAIAADrIiOAAIAACyg");
	this.shape_18.setTransform(263.3,393.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgniABZIAAixMBPEAAAIAACxg");
	this.shape_19.setTransform(256.2,405.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},53).to({state:[{t:this.shape_3}]},18).to({state:[{t:this.shape_4}]},98).to({state:[{t:this.shape_5}]},21).to({state:[{t:this.shape_6}]},40).to({state:[{t:this.shape_7}]},36).to({state:[{t:this.shape_8}]},19).to({state:[{t:this.shape_9}]},25).to({state:[{t:this.shape_10}]},52).to({state:[{t:this.shape_11}]},19).to({state:[{t:this.shape_12}]},51).to({state:[{t:this.shape_13}]},29).to({state:[{t:this.shape_14}]},17).to({state:[{t:this.shape_15}]},66).to({state:[{t:this.shape_16}]},19).to({state:[{t:this.shape_17}]},76).to({state:[{t:this.shape_18}]},33).to({state:[{t:this.shape_19}]},18).to({state:[]},86).wait(124));

	// text
	this.instance_2 = new lib.text1r3();
	this.instance_2.setTransform(4,185,0.5066,0.3448);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(7).to({_off:false},0).wait(910));

	// sfer
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(89.1,196.35,21.882,0.2122,0,0,0,-7,0.5);
	this.instance_3.alpha = 0.7617;
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(59.3,338.25,30.8943,0.2122,0,0,0,-7,-2.1);
	this.instance_4.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},18).to({state:[{t:this.instance_3}]},71).to({state:[{t:this.instance_3}]},119).to({state:[{t:this.instance_3}]},95).to({state:[{t:this.instance_3}]},96).to({state:[{t:this.instance_3}]},97).to({state:[{t:this.instance_4,p:{scaleX:30.8943,x:59.3,y:338.25}},{t:this.instance_3}]},85).to({state:[{t:this.instance_4,p:{scaleX:28.4581,x:111.65,y:385.45}},{t:this.instance_3}]},127).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).wait(71).to({regX:-6.9,scaleX:28.5725,x:43.4,y:220.3},0).wait(119).to({regY:0.2,scaleX:24.0645,x:90.25,y:245},0).wait(95).to({scaleX:21.0237,x:45.55,y:270.4},0).wait(96).to({regX:7.2,regY:-6.9,scaleX:28.3793,x:515.75,y:292.85},0).wait(97).to({regX:-7,regY:-2.6,scaleX:21.7894,x:90.35,y:315.7},0).wait(85).to({scaleX:10.8518,x:2.8,y:361.2},0).wait(127).to({regX:-6.9,regY:-2.4,scaleX:34.32,x:7.85,y:408.65},0).wait(210));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.9,523.5,440.4);


(lib.ccswsouf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(728));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(98.45,250.8,6.7187,0.5587,0,0,0,7,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({_off:false},0).to({regX:7.5,scaleX:0.2399,x:98.55,y:249.3},24).wait(40).to({regX:7.2,regY:0.3,scaleX:8.2207,scaleY:0.4949,x:213.85,y:250.5},0).to({regX:7.1,regY:0.5,scaleX:0.4374,x:219.5,y:252.9},32).wait(28).to({regX:7.2,regY:0.4,scaleX:7.3492,x:319.25,y:251.5},0).to({regX:7.3,regY:0.5,scaleX:0.4916,x:327,y:253.1},25).wait(48).to({regY:0.3,scaleX:14.6653,x:528.65,y:251.3},0).to({regX:7.2,scaleX:0.443,x:527.1},47).wait(1).to({regX:7.3,regY:0.4,scaleX:8.2389,x:122.55,y:284.95},0).to({regX:7.5,scaleX:0.3146,x:123.65},18).wait(46).to({regX:6.9,regY:1.8,scaleX:12.3569,x:173.05,y:320.05},0).to({regX:7.5,regY:0.4,scaleX:0.374,x:178.45,y:321.7},28).wait(48).to({regX:7.4,scaleX:10.2607,x:322.2,y:318.55},0).to({regX:7.6,scaleX:0.355,x:325.35},38).wait(24).to({regX:7,regY:3.5,scaleX:15.9008,x:541.35,y:320.1},0).to({regX:7.9,regY:0.4,scaleX:0.2146,x:546.75,y:318.55},41).wait(1).to({regX:7.5,regY:0.5,scaleX:4.0267,x:59.95,y:352.2},0).to({regX:7.6,regY:0.4,scaleX:0.2368,x:65.65,y:353.75},18).wait(64).to({regX:7.2,scaleX:17.2407,x:301.1},0).to({regX:7,scaleX:0.3908,x:306.35},48).wait(11));

	// big shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgqIAKCIAAvwIOTAAIAAkTMBF+AAAIAAUDg");
	this.shape.setTransform(276.975,300.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgqIAKCIAAvwMAgIAAAIAAkTMA0JAAAIAAUDg");
	this.shape_1.setTransform(276.975,300.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgqIAKCIAAvwMAgIAAAIAAgQIQQAAIAAkDMAj5AAAIAAUDg");
	this.shape_2.setTransform(276.975,300.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgqIAIAIAAvwMAgIAAAIAAgPMA0JAAAIAAP/g");
	this.shape_3.setTransform(276.975,313.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgqIAIAIAAqfIRkAAIAAlRIOkAAIAAgPMA0JAAAIAAP/g");
	this.shape_4.setTransform(277.975,313.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgqIAFUIAAlBIZXAAIAAgPIARAAIAAlXMA6pAAAIAAKng");
	this.shape_5.setTransform(266.975,334.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgqIAFUIAAlAIUbAAIAAAPIcNAAIAAl2MAjpAAAIAAKng");
	this.shape_6.setTransform(276.975,330.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgqIACgIAAk/IUbAAIAAAPIcNAAIAAgIMAjpAAAIAAE4g");
	this.shape_7.setTransform(276.975,348.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgmGACgIAAk/IMXAAIAAAPIcNAAIAAgIMAjpAAAIAAE4g");
	this.shape_8.setTransform(302.775,348.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},98).to({state:[{t:this.shape_1}]},64).to({state:[{t:this.shape_2}]},60).to({state:[{t:this.shape_3}]},73).to({state:[{t:this.shape_4}]},48).to({state:[{t:this.shape_5}]},64).to({state:[{t:this.shape_6}]},76).to({state:[{t:this.shape_7}]},62).to({state:[{t:this.shape_8}]},42).to({state:[]},82).wait(59));

	// all txt
	this.instance_1 = new lib.text0001();
	this.instance_1.setTransform(8,237,0.546,0.5392);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(102.1,19.3,0.8325,0.7823,0,0,0,-6.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},97).wait(630));

	// rose
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(5.05,253.2,6.5367,0.2881,0,0,0,-7,0.5);
	this.instance_3.alpha = 0.7617;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).to({_off:true},33).wait(31).to({_off:false,scaleX:7.9659,x:101.85},0).to({_off:true},44).wait(16).to({_off:false,scaleX:7.4787,x:214,y:254},0).to({_off:true},43).wait(30).to({_off:false,regX:-6.9,regY:0.1,scaleX:14.3409,x:319.7,y:255.5},0).wait(48).to({regY:0.7,scaleX:7.7513,x:7.3,y:287.05},0).to({_off:true},35).wait(29).to({_off:false,scaleX:12.279,x:1.2,y:322.05},0).to({_off:true},46).wait(30).to({_off:false,scaleX:10.4239,x:174.25},0).to({_off:true},48).wait(14).to({_off:false,regX:-6.8,scaleX:15.7299,x:322.55},0).wait(42).to({regY:0.4,scaleX:4.2173,x:1.6,y:355.65},0).to({_off:true},34).wait(48).to({_off:false,regX:-6.6,scaleX:17.3738,x:63},0).wait(59));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("AHEC8IAAlvIB0AAIAAFvg");
	var mask_graphics_9 = new cjs.Graphics().p("AGXC8IAAlvIDOAAIAAFvg");
	var mask_graphics_10 = new cjs.Graphics().p("AFqC8IAAlvIEnAAIAAFvg");
	var mask_graphics_11 = new cjs.Graphics().p("AE9C8IAAlvIGBAAIAAFvg");
	var mask_graphics_12 = new cjs.Graphics().p("AEQC8IAAlvIHaAAIAAFvg");
	var mask_graphics_13 = new cjs.Graphics().p("ADiC8IAAlvII0AAIAAFvg");
	var mask_graphics_14 = new cjs.Graphics().p("AC1C8IAAlvIKOAAIAAFvg");
	var mask_graphics_15 = new cjs.Graphics().p("ACIC8IAAlvILnAAIAAFvg");
	var mask_graphics_16 = new cjs.Graphics().p("ABbC8IAAlvINBAAIAAFvg");
	var mask_graphics_17 = new cjs.Graphics().p("AAuC8IAAlvIOaAAIAAFvg");
	var mask_graphics_18 = new cjs.Graphics().p("AABC8IAAlvIPzAAIAAFvg");
	var mask_graphics_19 = new cjs.Graphics().p("AgrC8IAAlvIRMAAIAAFvg");
	var mask_graphics_20 = new cjs.Graphics().p("AhYC8IAAlvISlAAIAAFvg");
	var mask_graphics_21 = new cjs.Graphics().p("AiFC8IAAlvIT/AAIAAFvg");
	var mask_graphics_22 = new cjs.Graphics().p("AiyC8IAAlvIVYAAIAAFvg");
	var mask_graphics_23 = new cjs.Graphics().p("AjfC8IAAlvIWyAAIAAFvg");
	var mask_graphics_24 = new cjs.Graphics().p("AkNC8IAAlvIYMAAIAAFvg");
	var mask_graphics_25 = new cjs.Graphics().p("Ak6C8IAAlvIZlAAIAAFvg");
	var mask_graphics_26 = new cjs.Graphics().p("AlnC8IAAlvIa/AAIAAFvg");
	var mask_graphics_27 = new cjs.Graphics().p("AmUC8IAAlvIcYAAIAAFvg");
	var mask_graphics_28 = new cjs.Graphics().p("AnBC8IAAlvIdyAAIAAFvg");
	var mask_graphics_29 = new cjs.Graphics().p("AnuC8IAAlvIfLAAIAAFvg");
	var mask_graphics_30 = new cjs.Graphics().p("AobC8IAAlvMAgkAAAIAAFvg");
	var mask_graphics_31 = new cjs.Graphics().p("ApIC8IAAlvMAh+AAAIAAFvg");
	var mask_graphics_32 = new cjs.Graphics().p("Ap1C8IAAlvMAjXAAAIAAFvg");
	var mask_graphics_33 = new cjs.Graphics().p("AqiC8IAAlvMAkxAAAIAAFvg");
	var mask_graphics_34 = new cjs.Graphics().p("ArPC8IAAlvMAmKAAAIAAFvg");
	var mask_graphics_35 = new cjs.Graphics().p("Ar8C8IAAlvMAnjAAAIAAFvg");
	var mask_graphics_36 = new cjs.Graphics().p("AsqC8IAAlvMAo+AAAIAAFvg");
	var mask_graphics_37 = new cjs.Graphics().p("AtXC8IAAlvMAqXAAAIAAFvg");
	var mask_graphics_38 = new cjs.Graphics().p("AuEC8IAAlvMArxAAAIAAFvg");
	var mask_graphics_39 = new cjs.Graphics().p("AuxC8IAAlvMAtKAAAIAAFvg");
	var mask_graphics_40 = new cjs.Graphics().p("AvTC8IAAlvMAujAAAIAAFvg");
	var mask_graphics_46 = new cjs.Graphics().p("AvTC8IAAlvMAujAAAIAAFvg");
	var mask_graphics_47 = new cjs.Graphics().p("AvTDfIAAm0MAujAAAIAAG0g");
	var mask_graphics_48 = new cjs.Graphics().p("AvTEDIAAn6MAujAAAIAAH6g");
	var mask_graphics_49 = new cjs.Graphics().p("AvTEmIAAo+MAukAAAIAAI+g");
	var mask_graphics_50 = new cjs.Graphics().p("AvSFKIAAqEMAujAAAIAAKEg");
	var mask_graphics_51 = new cjs.Graphics().p("AvSFtIAArJMAujAAAIAALJg");
	var mask_graphics_52 = new cjs.Graphics().p("AvSGQIAAsOMAujAAAIAAMOg");
	var mask_graphics_53 = new cjs.Graphics().p("AvSG0IAAtTMAujAAAIAANTg");
	var mask_graphics_54 = new cjs.Graphics().p("AvSHXIAAuYMAukAAAIAAOYg");
	var mask_graphics_55 = new cjs.Graphics().p("AvRH6IAAvdMAujAAAIAAPdg");
	var mask_graphics_56 = new cjs.Graphics().p("AvRIeIAAwiMAujAAAIAAQig");
	var mask_graphics_57 = new cjs.Graphics().p("AvRJBIAAxnMAujAAAIAARng");
	var mask_graphics_58 = new cjs.Graphics().p("AvRJkIAAysMAujAAAIAASsg");
	var mask_graphics_59 = new cjs.Graphics().p("AvRKIIAAzyMAukAAAIAATyg");
	var mask_graphics_60 = new cjs.Graphics().p("AvQKrIAA02MAujAAAIAAU2g");
	var mask_graphics_61 = new cjs.Graphics().p("AvQLOIAA17MAujAAAIAAV7g");
	var mask_graphics_62 = new cjs.Graphics().p("AvQLyIAA3BMAujAAAIAAXBg");
	var mask_graphics_63 = new cjs.Graphics().p("AvQMVIAA4FMAujAAAIAAYFg");
	var mask_graphics_64 = new cjs.Graphics().p("AvQM4IAA5KMAukAAAIAAZKg");
	var mask_graphics_65 = new cjs.Graphics().p("AvPNcIAA6QMAujAAAIAAaQg");
	var mask_graphics_66 = new cjs.Graphics().p("AvPN/IAA7VMAujAAAIAAbVg");
	var mask_graphics_67 = new cjs.Graphics().p("AvPOjIAA8aMAujAAAIAAcag");
	var mask_graphics_68 = new cjs.Graphics().p("AvPPGIAA9fMAujAAAIAAdfg");
	var mask_graphics_69 = new cjs.Graphics().p("AvPPpIAA+kMAukAAAIAAekg");
	var mask_graphics_70 = new cjs.Graphics().p("AvPQNIAA/qMAukAAAIAAfqg");
	var mask_graphics_71 = new cjs.Graphics().p("AvOQwMAAAgguMAujAAAMAAAAgug");
	var mask_graphics_72 = new cjs.Graphics().p("AvORTMAAAghzMAujAAAMAAAAhzg");
	var mask_graphics_73 = new cjs.Graphics().p("AvTRzMAAAgi4MAujAAAMAAAAi4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:56.8386,y:18.8111}).wait(1).to({graphics:mask_graphics_9,x:61.2794,y:18.8111}).wait(1).to({graphics:mask_graphics_10,x:65.7202,y:18.8111}).wait(1).to({graphics:mask_graphics_11,x:70.1609,y:18.8111}).wait(1).to({graphics:mask_graphics_12,x:74.6017,y:18.8111}).wait(1).to({graphics:mask_graphics_13,x:79.0425,y:18.8111}).wait(1).to({graphics:mask_graphics_14,x:83.4832,y:18.8111}).wait(1).to({graphics:mask_graphics_15,x:87.924,y:18.8111}).wait(1).to({graphics:mask_graphics_16,x:92.3648,y:18.8111}).wait(1).to({graphics:mask_graphics_17,x:96.8056,y:18.8111}).wait(1).to({graphics:mask_graphics_18,x:101.2463,y:18.8111}).wait(1).to({graphics:mask_graphics_19,x:105.6871,y:18.8111}).wait(1).to({graphics:mask_graphics_20,x:110.1279,y:18.8111}).wait(1).to({graphics:mask_graphics_21,x:114.5687,y:18.8111}).wait(1).to({graphics:mask_graphics_22,x:119.0094,y:18.8111}).wait(1).to({graphics:mask_graphics_23,x:123.4502,y:18.8111}).wait(1).to({graphics:mask_graphics_24,x:127.891,y:18.8111}).wait(1).to({graphics:mask_graphics_25,x:132.3318,y:18.8111}).wait(1).to({graphics:mask_graphics_26,x:136.7725,y:18.8111}).wait(1).to({graphics:mask_graphics_27,x:141.2133,y:18.8111}).wait(1).to({graphics:mask_graphics_28,x:145.6541,y:18.8111}).wait(1).to({graphics:mask_graphics_29,x:150.0949,y:18.8111}).wait(1).to({graphics:mask_graphics_30,x:154.5356,y:18.8111}).wait(1).to({graphics:mask_graphics_31,x:158.9764,y:18.8111}).wait(1).to({graphics:mask_graphics_32,x:163.4172,y:18.8111}).wait(1).to({graphics:mask_graphics_33,x:167.858,y:18.8111}).wait(1).to({graphics:mask_graphics_34,x:172.2987,y:18.8111}).wait(1).to({graphics:mask_graphics_35,x:176.7395,y:18.8111}).wait(1).to({graphics:mask_graphics_36,x:181.1803,y:18.8111}).wait(1).to({graphics:mask_graphics_37,x:185.621,y:18.8111}).wait(1).to({graphics:mask_graphics_38,x:190.0618,y:18.8111}).wait(1).to({graphics:mask_graphics_39,x:194.5026,y:18.8111}).wait(1).to({graphics:mask_graphics_40,x:200.0078,y:18.8111}).wait(6).to({graphics:mask_graphics_46,x:200.0078,y:18.8111}).wait(1).to({graphics:mask_graphics_47,x:200.0275,y:22.3463}).wait(1).to({graphics:mask_graphics_48,x:200.0472,y:25.8816}).wait(1).to({graphics:mask_graphics_49,x:200.0669,y:29.4168}).wait(1).to({graphics:mask_graphics_50,x:200.0866,y:32.9521}).wait(1).to({graphics:mask_graphics_51,x:200.1063,y:36.4873}).wait(1).to({graphics:mask_graphics_52,x:200.126,y:40.0226}).wait(1).to({graphics:mask_graphics_53,x:200.1457,y:43.5578}).wait(1).to({graphics:mask_graphics_54,x:200.1655,y:47.0931}).wait(1).to({graphics:mask_graphics_55,x:200.1852,y:50.6283}).wait(1).to({graphics:mask_graphics_56,x:200.2049,y:54.1636}).wait(1).to({graphics:mask_graphics_57,x:200.2246,y:57.6988}).wait(1).to({graphics:mask_graphics_58,x:200.2443,y:61.2341}).wait(1).to({graphics:mask_graphics_59,x:200.264,y:64.7693}).wait(1).to({graphics:mask_graphics_60,x:200.2837,y:68.3046}).wait(1).to({graphics:mask_graphics_61,x:200.3034,y:71.8399}).wait(1).to({graphics:mask_graphics_62,x:200.3231,y:75.3751}).wait(1).to({graphics:mask_graphics_63,x:200.3429,y:78.9104}).wait(1).to({graphics:mask_graphics_64,x:200.3626,y:82.4456}).wait(1).to({graphics:mask_graphics_65,x:200.3823,y:85.9809}).wait(1).to({graphics:mask_graphics_66,x:200.402,y:89.5161}).wait(1).to({graphics:mask_graphics_67,x:200.4217,y:93.0514}).wait(1).to({graphics:mask_graphics_68,x:200.4414,y:96.5866}).wait(1).to({graphics:mask_graphics_69,x:200.4611,y:100.1219}).wait(1).to({graphics:mask_graphics_70,x:200.4808,y:103.6571}).wait(1).to({graphics:mask_graphics_71,x:200.5005,y:107.1924}).wait(1).to({graphics:mask_graphics_72,x:200.5203,y:110.7276}).wait(1).to({graphics:mask_graphics_73,x:200.0078,y:113.9073}).wait(655));

	// Layer_7
	this.instance_4 = new lib.text0();
	this.instance_4.setTransform(119,1,0.2304,0.1938);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(7).to({_off:false},0).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,0,550.4000000000001,368.4);


(lib.akmil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1copy2("synched",0);
	this.instance.setTransform(98.45,21.45,0.0448,1.9447,0,0,0,82.6,-0.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance.cache(-83,-12,168,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:82.3,scaleX:0.744,scaleY:1.4628,x:99.3,y:22.35},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,3.5,121.8,34.5);


(lib.yad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol121("synched",0);
	this.instance.setTransform(61.1,26.45,2.9142,3.4025);
	this.instance.alpha = 0.5313;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:59.45,alpha:1},8,cjs.Ease.bounceInOut).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol121("synched",0);
	this.instance_1.setTransform(36.65,26.45,2.9142,3.4025);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:61.1,alpha:0.5313},9,cjs.Ease.quartInOut).to({_off:true},4).wait(8));

	// Layer_3
	this.instance_2 = new lib.Symbol121("synched",0);
	this.instance_2.setTransform(13.1,26.45,2.9142,3.4025);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:36.65,alpha:0.5898},8,cjs.Ease.bounceIn).to({_off:true},3).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0.3,74.6,52.400000000000006);


(lib.Symbol33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//var that = this ;
		//that.listeners_are_added = false;
		
		//if( ! that.listeners_are_added) {that.addEventListener("click", sitar);
		//	that.listeners_are_added = true;}
		//var sitar_is_clicked = false ;
		
		//function sitar(evt) {
		
		//	sitar_is_clicked = !sitar_is_clicked;
		//	if (sitar_is_clicked) {
		//		that.gotoAndStop(1);
		
		//	} else {
		//		that.gotoAndStop(0);
		//	}
		
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(196,0,0,0.667)").ss(3,1,1).p("AA1hCQADACADADQAZAaAAAjQAAAkgZAZQgYAagjAAQgiAAgZgaQgYgZAAgkQAAgjAYgaQAZgZAiAAQAfAAAWAUIhqBw");
	this.shape_2.setTransform(-0.2,-0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(1));

	// Layer_3
	this.instance = new lib.rid("synched",0);
	this.instance.setTransform(-0.05,-0.55,0.65,0.7127,0,0,0,16,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-12.2,20.700000000000003,22.6);


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAzQgJgDgGgIQgGgHgEgJQgDgKAAgKQAAgNAEgLQAEgKAHgJQAHgHAIgEQAJgEAIgBQAMABAHADQAIACAFAFQAFADACAGQACAEAAAEQAAAGgDAFQgEADgHAAQgFABgDgDQgDgCgCgEIgCgHIgDgHQgBgEgDgCQgDgCgFAAQgJgBgEAHQgFAHAAANQAAAKADAJQACAIAFAHQAEAGAGAFQAGADAIAAIAFgBIAHgCQADgCADgFIAGgKIAHACIgFAQQgEAIgFAFQgGAGgHAEQgIADgKABQgKAAgIgFg");
	this.shape.setTransform(-0.075,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol160("synched",0);
	this.instance_1.setTransform(-0.7,-5.5,1,1,0,0,0,9.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17_1, new cjs.Rectangle(-9.9,-15,18.6,19), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA3IgJgCIgHgDIgEgBIgCABIgBACIgBACIAAACIgJAAIAAgsIAJAAQABAHACAGIAHAKQAEAFAFADQAFADAGAAQAHAAADgEQADgDAAgFQAAgGgEgEIgJgHIgNgHIgMgIQgGgDgEgGQgDgHgBgJQABgHACgGQADgGAEgEQAGgEAFgCQAHgCAGAAIAIABIAIABIAGACIAGAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIACgDIAHAAIAAAoIgIAAIgFgLQgDgGgEgEQgEgEgFgCQgFgCgEAAQgGAAgEADQgDADAAAEQAAAGAEAEQAEAEAHADIANAHIANAIQAHAEAEAGQAEAGAAAJQAAAIgDAGQgDAGgEAEQgGAFgHACQgHACgHAAIgJgBg");
	this.shape.setTransform(0,-3.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.Symbol160("synched",0);
	this.instance.setTransform(0.1,-3.3,1,1,0,0,0,9.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-9.1,-12.8,18.6,19), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AhOCMQgIgDgFgGIhThbQgGgHAAgKQAAgLAGgIQAHgGAKAAQAJAAAGAGIBOBWIDOjiQAHgIAKAAQAJAAAGAIQAHAIAAAJQAAALgHAIIjSDnQgFAHgHACQgHAEgJABQgHgBgHgEg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#028901").s().p("AF7B5QgRgHgLgMQgMgOgGgQQgGgQgBgSQAAgTAHgQQAFgRAMgNQALgOARgHQAQgIAVAAQATAAARAHQARAHALAMQALAMAIAQQAFAQABASQAAAUgGARQgHASgLAOQgLAMgQAIQgQAJgVAAQgVAAgQgJgAGOgiQgEADgEAHQgDAGgDAMQgCALAAARQABARADARQADAPAHANQAGAMAHAHQAIAHAJAAQAKAAAHgOQAFgPABghQgBgQgDgPQgCgPgGgMQgFgMgHgIQgIgHgKAAQgEAAgFADgADRCCIg9iNIgGgLQgDgFgDgDQgFgCgEgBIgLgDIAAgOIBqAAIAAAOQgLAAgEAEQgEAEgBAGIABAIIAEAJIAbA+IAdhEQADgGAAgFQAAgGgFgEQgFgEgLAAIAAgOIBHAAIAAAOQgNABgGAGQgHAGgEAKIg9CPgAAxB9QgGgDgDgDQgEgDgDgFQgCgFAAgFIgMAKIgNAJIgNAFQgHACgJAAQgTAAgKgMQgLgMAAgVQAAgOAKgMQAKgMAPgJQAOgJAQgHIAdgMIAAgGIgBgQQgCgHgCgGQgDgFgEgEQgFgDgGABQgJgBgFAHQgDAFAAAQIgCAJIgEAHQgDAEgFADQgFACgHABQgLgBgGgGQgGgGgBgLQAAgKAIgJQAGgJALgGQAKgGANgDQALgDAMAAQAUAAAPAEQAOACAIAIQAKAHAEALQADALAAAQIAAA0IAAAPIABANIADAGQACAEADAAIAGgCIAGgEIAFgDIAFgFIAAATIgIAIQgGAFgIAEIgQAJQgJADgKAAQgGAAgFgCgAALAlQgIAGgDAGQgGAFgBAGQgCAHAAAGQAAAIAEAGQAEAGAGABQAHAAAHgGQAGgEAGgGIAAg1QgMAGgIAGgAjtB7IAAgOIALgCQAEgBACgDQACgDACgFIABgNIAAhQQAAgPgDgFQgCgGgGABIgIABIgIABIgFgNIBHgWIAPAAIAAAlQAFgHAGgGQAFgIAGgFQAIgEAHgDQAHgEAIAAQAGAAAGACQAGACAEADQAEAEADAFQACAFAAAFQAAALgGAHQgFAIgMAAQgIAAgFgDIgIgGIgHgFQgDgDgDAAQgEAAgCACIgHAHIgHAKIgGALIAABJIABANQABAFACADQACADAFABIAKACIAAAOgAn2B7IAAgOQALgBAIgCQAGgCAEgDQAEgFACgHIABgRIAAicIgBgRQgCgGgEgFQgEgEgGgCQgIgCgLAAIAAgJIC3AAQAPAGAKAJQAJAJAGAKQAEALAAAJQAAALgCAIQgCAKgGAHQgHAIgMAGQgMAHgVAFQAoAHARARQARAQAAAZQABASgJAOQgIANgOAIQgOAKgRAEQgRAFgSgBgAmVAAIAABOQAAAOAEAEQAGAFALAAQAJAAAJgCQAJgCAJgEQAHgGAFgJQAGgJAAgOQAAgegRgNQgQgNgeAAIgFABIgEAAIgDAAgAmShwIgDABIAABZIADAAIAEABIAFAAQAbAAANgNQAOgOAAgVQAAgLgCgIQgEgIgGgGQgGgFgKgDQgKgCgQAAIgFAAIgEAAg");
	this.shape_1.setTransform(-29.5,34.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#028901").s().p("AhOEZQgIgHgFgLIhTi3QgGgPAAgTQAAgWAGgPQAHgMAKAAQAJAAAGAMIBOCrIDOnEQAHgQAKAAQAJAAAGAQQAHAOAAAVQAAAVgHAPIjSHQQgFAMgHAGQgHAIgJAAQgHAAgHgIg");
	this.shape_2.setTransform(0.025,-9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#028901").s().p("AhbADIAAgFICQAAQAVAAARAFIABAAg");
	this.shape_3.setTransform(37.2,37.575);

	this.instance = new lib.akmil();
	this.instance.setTransform(-74.75,-18.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#919191").ss(3,1,1).p("AjAjRIGBAAQAbAAAAAeIAAFnQAAAegbAAImBAAQgbAAAAgeIAAlnQAAgeAbAAg");
	this.shape_4.setTransform(-0.925,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.027)").s().p("AjADSQgbAAAAgeIAAlnQAAgeAbAAIGBAAQAbAAAAAeIAAFnQAAAegbAAg");
	this.shape_5.setTransform(-0.925,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-38.3,126.19999999999999,85.9);


(lib.DND4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ktrgwx = new lib.chafafdndcopy();
	this.ktrgwx.name = "ktrgwx";
	this.ktrgwx.setTransform(33.35,138.4,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgqs = new lib.chafafdndcopy();
	this.ktrgqs.name = "ktrgqs";
	this.ktrgqs.setTransform(3.85,138.6,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgor = new lib.chafafdndcopy();
	this.ktrgor.name = "ktrgor";
	this.ktrgor.setTransform(-25.75,138.4,0.9736,1.4602,0,0,0,0.1,0.1);

	this.etrgvb = new lib.chafafdndcopy();
	this.etrgvb.name = "etrgvb";
	this.etrgvb.setTransform(50.1,22.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgkl = new lib.chafafdndcopy();
	this.ktrgkl.name = "ktrgkl";
	this.ktrgkl.setTransform(20.6,22.55,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgvb = new lib.chafafdndcopy();
	this.ktrgvb.name = "ktrgvb";
	this.ktrgvb.setTransform(-9,22.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgop = new lib.chafafdndcopy();
	this.ktrgop.name = "ktrgop";
	this.ktrgop.setTransform(-39.5,22.55,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgzs = new lib.chafafdndcopy();
	this.ktrgzs.name = "ktrgzs";
	this.ktrgzs.setTransform(36.45,-92.25,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgxc = new lib.chafafdndcopy();
	this.ktrgxc.name = "ktrgxc";
	this.ktrgxc.setTransform(6.95,-92.05,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgdf = new lib.chafafdndcopy();
	this.ktrgdf.name = "ktrgdf";
	this.ktrgdf.setTransform(-22.65,-92.25,0.9736,1.4602,0,0,0,0.1,0.1);

	this.adndwx = new lib.Symbol17_1();
	this.adndwx.name = "adndwx";
	this.adndwx.setTransform(-57.5,97.3);

	this.odndor = new lib.Symbol20_1();
	this.odndor.name = "odndor";
	this.odndor.setTransform(50.1,80.05);

	this.kdndqs = new lib.Symbol30copy();
	this.kdndqs.name = "kdndqs";
	this.kdndqs.setTransform(-53.8,53.8);

	this.rdndvb = new lib.Symbol30copy();
	this.rdndvb.name = "rdndvb";
	this.rdndvb.setTransform(55.9,-19.95);

	this.fdndvb = new lib.Symbol30copy();
	this.fdndvb.name = "fdndvb";
	this.fdndvb.setTransform(-48.45,-19.95);

	this.odndop = new lib.Symbol20_1();
	this.odndop.name = "odndop";
	this.odndop.setTransform(54.1,-64.05);

	this.rdnddf = new lib.Symbol25_1();
	this.rdnddf.name = "rdnddf";
	this.rdnddf.setTransform(40.5,-177.95);

	this.sdndzs = new lib.Symbol20_1();
	this.sdndzs.name = "sdndzs";
	this.sdndzs.setTransform(-55.6,-142.4);

	this.mdndkl = new lib.Symbol19_1();
	this.mdndkl.name = "mdndkl";
	this.mdndkl.setTransform(-47.4,-61.15);

	this.idndxc = new lib.Symbol18_1();
	this.idndxc.name = "idndxc";
	this.idndxc.setTransform(-46.1,-172.5);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(10.2,173.75,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-18.75,174.8,0.5884,0.5549,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay},{t:this.idndxc},{t:this.mdndkl},{t:this.sdndzs},{t:this.rdnddf},{t:this.odndop},{t:this.fdndvb},{t:this.rdndvb},{t:this.kdndqs},{t:this.odndor},{t:this.adndwx},{t:this.ktrgdf},{t:this.ktrgxc},{t:this.ktrgzs},{t:this.ktrgop},{t:this.ktrgvb},{t:this.ktrgkl},{t:this.etrgvb},{t:this.ktrgor},{t:this.ktrgqs},{t:this.ktrgwx}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DND4, new cjs.Rectangle(-67.4,-192.1,133.4,379.9), null);


(lib.DND3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ktrgpm = new lib.chafafdndcopy();
	this.ktrgpm.name = "ktrgpm";
	this.ktrgpm.setTransform(28.9,135.5,0.9736,1.4602,0,0,0,-0.7,-0.4);

	this.ktrgty = new lib.chafafdndcopy();
	this.ktrgty.name = "ktrgty";
	this.ktrgty.setTransform(0.1,136.3,0.9736,1.4602);

	this.ktrghj = new lib.chafafdndcopy();
	this.ktrghj.name = "ktrghj";
	this.ktrghj.setTransform(-29.5,136.1,0.9736,1.4602);

	this.ktrgbn = new lib.chafafdndcopy();
	this.ktrgbn.name = "ktrgbn";
	this.ktrgbn.setTransform(43.25,21.45,0.9736,1.4602);

	this.ktrgfc = new lib.chafafdndcopy();
	this.ktrgfc.name = "ktrgfc";
	this.ktrgfc.setTransform(13.75,21.65,0.9736,1.4602);

	this.ktrgun = new lib.chafafdndcopy();
	this.ktrgun.name = "ktrgun";
	this.ktrgun.setTransform(-15.95,21.45,0.9736,1.4602,0,0,0,-0.1,0);

	this.ktrgln = new lib.chafafdndcopy();
	this.ktrgln.name = "ktrgln";
	this.ktrgln.setTransform(-47.25,21.5,0.9736,1.4602,0,0,0,-0.9,-0.1);

	this.ktrgce = new lib.chafafdndcopy();
	this.ktrgce.name = "ktrgce";
	this.ktrgce.setTransform(31.45,-94.65,0.9736,1.4602,0,0,0,0.2,0);

	this.ktrggh = new lib.chafafdndcopy();
	this.ktrggh.name = "ktrggh";
	this.ktrggh.setTransform(1.15,-95.05,0.9736,1.4602,0,0,0,-0.6,-0.4);

	this.dtrgze = new lib.chafafdndcopy();
	this.dtrgze.name = "dtrgze";
	this.dtrgze.setTransform(-29.05,-94.65,0.9736,1.4602,0,0,0,-0.2,0);

	this.ydndty = new lib.Symbol16_1();
	this.ydndty.name = "ydndty";
	this.ydndty.setTransform(-58.45,85.45);

	this.sdndhj = new lib.Symbol15();
	this.sdndhj.name = "sdndhj";
	this.sdndhj.setTransform(60.85,74.7);

	this.edndbn = new lib.Symbol27();
	this.edndbn.name = "edndbn";
	this.edndbn.setTransform(53.5,-64.25);

	this.mdndpm = new lib.Symbol20_1();
	this.mdndpm.name = "mdndpm";
	this.mdndpm.setTransform(-62.4,50.5);

	this.ldndln = new lib.Symbol20_1();
	this.ldndln.name = "ldndln";
	this.ldndln.setTransform(50.15,-25.55);

	this.bdndze = new lib.Symbol15();
	this.bdndze.name = "bdndze";
	this.bdndze.setTransform(35.45,-151.05);

	this.gdndgh = new lib.Symbol30copy();
	this.gdndgh.name = "gdndgh";
	this.gdndgh.setTransform(36.3,-176.25);

	this.ndndfc = new lib.Symbol22_1();
	this.ndndfc.name = "ndndfc";
	this.ndndfc.setTransform(-62.05,-23.65);

	this.udndun = new lib.Symbol21_1();
	this.udndun.name = "udndun";
	this.udndun.setTransform(-59.45,-64.3);

	this.edndce = new lib.Symbol17_1();
	this.edndce.name = "edndce";
	this.edndce.setTransform(-55.7,-167);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.1,172,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.8,173.05,0.5884,0.5549,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay},{t:this.edndce},{t:this.udndun},{t:this.ndndfc},{t:this.gdndgh},{t:this.bdndze},{t:this.ldndln},{t:this.mdndpm},{t:this.edndbn},{t:this.sdndhj},{t:this.ydndty},{t:this.dtrgze},{t:this.ktrggh},{t:this.ktrgce},{t:this.ktrgln},{t:this.ktrgun},{t:this.ktrgfc},{t:this.ktrgbn},{t:this.ktrghj},{t:this.ktrgty},{t:this.ktrgpm}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DND3, new cjs.Rectangle(-71.4,-186.9,141.8,372.9), null);


(lib.DND2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.gtrgfr = new lib.chafafdndcopy();
	this.gtrgfr.name = "gtrgfr";
	this.gtrgfr.setTransform(51.4,136.85,0.9736,1.4602,0,0,0,0.1,0.1);

	this.jtrgrt = new lib.chafafdndcopy();
	this.jtrgrt.name = "jtrgrt";
	this.jtrgrt.setTransform(21.9,137.05,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ztrgfr = new lib.chafafdndcopy();
	this.ztrgfr.name = "ztrgfr";
	this.ztrgfr.setTransform(-8.7,136.85,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgnq = new lib.chafafdndcopy();
	this.ktrgnq.name = "ktrgnq";
	this.ktrgnq.setTransform(-40.2,137.05,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(32.1,21.65,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrggg = new lib.chafafdndcopy();
	this.ktrggg.name = "ktrggg";
	this.ktrggg.setTransform(2.6,21.85,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(-27,21.65,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrger = new lib.chafafdndcopy();
	this.ktrger.name = "ktrger";
	this.ktrger.setTransform(28.55,-94.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgzr = new lib.chafafdndcopy();
	this.ktrgzr.name = "ktrgzr";
	this.ktrgzr.setTransform(-1.05,-94.55,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgar = new lib.chafafdndcopy();
	this.ktrgar.name = "ktrgar";
	this.ktrgar.setTransform(-30.55,-94.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ednder = new lib.Symbol32();
	this.ednder.name = "ednder";
	this.ednder.setTransform(-53.25,-167.5);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(-59.9,-55.45);

	this.xdndfr = new lib.Symbol18_1();
	this.xdndfr.name = "xdndfr";
	this.xdndfr.setTransform(-57.7,52.05);

	this.wdndfr = new lib.Symbol18_1();
	this.wdndfr.name = "wdndfr";
	this.wdndfr.setTransform(41.8,91.7);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-56.85,-23.55);

	this.adndar = new lib.Symbol17_1();
	this.adndar.name = "adndar";
	this.adndar.setTransform(43.85,-176.7);

	this.rdndrt = new lib.Symbol29();
	this.rdndrt.name = "rdndrt";
	this.rdndrt.setTransform(42.9,55.95);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(58.3,-52.75);

	this.qdndnq = new lib.Symbol23copy();
	this.qdndnq.name = "qdndnq";
	this.qdndnq.setTransform(-52.35,84.95);

	this.zdndzr = new lib.Symbol16_1();
	this.zdndzr.name = "zdndzr";
	this.zdndzr.setTransform(30.45,-150.4);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.65,172.55,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.25,173.45,0.5884,0.5549);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay},{t:this.zdndzr},{t:this.qdndnq},{t:this.fdndff},{t:this.rdndrt},{t:this.adndar},{t:this.vdndvv},{t:this.wdndfr},{t:this.xdndfr},{t:this.gdndgg},{t:this.ednder},{t:this.ktrgar},{t:this.ktrgzr},{t:this.ktrger},{t:this.ktrgvv},{t:this.ktrggg},{t:this.ktrgff},{t:this.ktrgnq},{t:this.ztrgfr},{t:this.jtrgrt},{t:this.gtrgfr}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DND2, new cjs.Rectangle(-68.3,-191.7,132.89999999999998,378.2), null);


(lib.DND1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(53.85,133.1,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ltrgdd = new lib.chafafdndcopy();
	this.ltrgdd.name = "ltrgdd";
	this.ltrgdd.setTransform(23.85,133.3,0.9736,1.4602,0,0,0,0.1,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(-6.25,133.1,0.9736,1.4602,0,0,0,0.1,0.1);

	this.atrgqq = new lib.chafafdndcopy();
	this.atrgqq.name = "atrgqq";
	this.atrgqq.setTransform(-37.25,133.3,0.9736,1.4602,0,0,0,0.1,0.1);

	this.etrgrr = new lib.chafafdndcopy();
	this.etrgrr.name = "etrgrr";
	this.etrgrr.setTransform(20.25,20.4,0.9736,1.4602,0,0,0,0.1,0.1);

	this.dtrgee = new lib.chafafdndcopy();
	this.dtrgee.name = "dtrgee";
	this.dtrgee.setTransform(-11.75,20.6,0.9736,1.4602,0,0,0,0.1,0.1);

	this.htrgaa = new lib.chafafdndcopy();
	this.htrgaa.name = "htrgaa";
	this.htrgaa.setTransform(20.85,-97.2,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-11.75,-97.8,0.9736,1.4602);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(-48.85,-48.75);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(46.05,53.5);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-51.95,83.6);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-55.6,50.85);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(50.35,-175.1);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(46.1,-52.1);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(54.05,83.7);

	this.ndndaa = new lib.Symbol15();
	this.ndndaa.name = "ndndaa";
	this.ndndaa.setTransform(-54.8,-158.55);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(16.85,170.8,0.5884,0.5549);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-12.1,171.8,0.5884,0.5549);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay},{t:this.ndndaa},{t:this.xdndxx},{t:this.fdndee},{t:this.mdndzz},{t:this.sdndss},{t:this.adndqq},{t:this.ddnddd},{t:this.kdndrr},{t:this.ktrgzz},{t:this.htrgaa},{t:this.dtrgee},{t:this.etrgrr},{t:this.atrgqq},{t:this.jtrgss},{t:this.ltrgdd},{t:this.xtrgxx}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DND1, new cjs.Rectangle(-64,-187.8,131,372.70000000000005), null);


(lib.addil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol9("synched",0);
	this.instance.setTransform(37,200);

	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.setTransform(-13,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.addil, new cjs.Rectangle(-38,0,100,400), null);


(lib.croch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.Symbol1copy4("synched",0);
	this.instance.setTransform(1.45,-2,0.8308,0.7416,0,0,0,16.2,22.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgkCrIgCAAIgBAAIgBgCIgBgBIgBAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgBAAIAAACIABAAIABAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBABABgBIgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAAAIgEAAIgBgCIgBAAIgCAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAAAIAAgBIgBAAIgBgCIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIgBgBIABAAIAAgCIAAAAIgBgCIgCgDIgCgCIgBAAIAAgBIAAgBIgCgCIAAgBIgBAAIAAgBIgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBAAIgBgCIAAAAIAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAgBQgBABAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIACAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIABAAIAAAAIAAgBIgCAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgCIgBAAIAAgBIAAgCIgBAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIAAgBIABgBIgBAAIAAgBIgBABQAAAAAAABQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBgBIABAAIAAgCIgBAAIgBgDIgBgBIAAAAIAAgBIgBgBIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIAAAAIgBgCIgBgBIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgBAAIAAAAIgBgBIgBgCIgBAAIAAgCIgBAAIgBAAIABAAIAAgBIgBAAIAAgCIgCgCIgBgBIgBAAIAAgCIgBAAIgBgBIgBgCIAAAAIAAgBIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgBIgBgCIAAgBIgBAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIABAAIABgBIAAgCIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAgBIgBgBIgBAAIAAgDIAAgDQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABAAIAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAABgBIABAAIAAgCIgBAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBAAIAAgBIgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAgBIAAgDIABAAIAAgBIAAgBIAAAAIAAgCIABAAIAAAAIgBAAIgBgCIABABIABAAIgBgBIAAgCIABACIABAAIAAgBIAAgBIgBAAIAAgBIgBgBIABAAIAAgBIAAgCIABgBIABAAIAAgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAAABIABAAQAAAAAAAAQAAgBABABQAAAAAAAAQAAABAAABIAAAAIAAAAIAAAAIABAAIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAAAAIAAgBIgBAAIgBgBQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAABgBQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAAgFIABgBIAAAAIAAgCIABgBIAAAAIAAAAIABAAIACAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIABACIAAABIABAAIAAgBIABAAIAAAAIgBgDQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAAAIABAAIABAAIAAACIABABIABAAIAAgBIgBAAIABAAIAAgCIgBAAIABAAIAAgBIACAAIgBAAIAAgCIgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAIABgBIAAAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIAAgBIABAAIAAAAIgBgBIAAgCIAAAAIAAgBIABAAIAAgCIABABIABABIAAABIABAAIAAABIACAAIAAgBIABAAIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAAABIAAAAIAAgBIACABIADAAIAAABIABAAIACABIABAAIAAABIAAAAIAAABIABABIAAAAIAAABIABAAIAAgBIABACIAAAAIABABIAAAAIAAAAIACAAIABACIAAAAIABABIAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAAIACAAIAAAAIACABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIABABIAAABIABAAIAAgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBAAIABAAIABAAIAAAAIAAgDQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACACQAAABAAAAIAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAgBAAIACACIAAABIAAABIABAAIAAgBIABABIAAAAIAAABIAAABIADABIAAACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBAAIACACIABACIABAAIACADIAAABIACAAIAAABQAAAAAAAAQABAAAAABQAAAAAAAAQgBAAAAAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAABIABABIAAABIABAAIAAABQABAAAAAAQABAAAAABQAAAAAAAAQgBAAAAABIABAAIABAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAIAAADIACgBQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAABIAAAAIAAAAIABABIAAACIABAAIABADIAAgBIACABIADgDIAAgDIAAgDIABgCIAAACIABAAIAAgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAAAAIABAAIAAgCIAAAAIAAgBIAAgCIACAAIAAgCIAAgBIAAAAIAAgCIACAAIAAgBIgBAAIABAAIAAgCIABAAIAAgBIABAAIAAAAIABgBIAAgBIgBgCIACgBIAAgCIABAAIgBgBIAAgCQABABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBAAIAAAAIACgCIAAgCIACAAIAAgBIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABAAIgBAAIAAgBIACgBIAAABIABAAIAAAAIAAgBIABAAIAAgBIgBAAIAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIgBAAIAAgBIABgCIABAAIAAgBIABgCIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIAAACIABAAIAAgCIACgBIABgCIAAAAIABAAIAAgCIABgBIAAAAIAAgBIABAAIAAgBIAAgBIABgBIAAgCIgBAAIACAAIAAgBIgBAAIAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIABgBIAAgCQAAABAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAIACAAIACAAIAAAAIAAgBIAAgCIABAAIABAAIAAgCIAAAAIAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAgCIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIACgBIABAAIABAAIAAgBIABgCIAAgBIABgBIABAAIAAgBIAAgBIAAgCIABAAIAAgBIABAAIAAgBIACgBIAAgCIABAAIAAgBIAAgCIgBAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAIAAgBIAAgCIAAAAIACAAIAAgBIAAAAIAAAAIABgCIAAAAIgBAAIAAgDIABAAQABAAgBAAIAAgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABABIAAABIACAAIAAgBIADgDIAAgBIAAgDIAAABIABAAIAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAIABgBIAAgCIACAAIABAAIAAgCIABgBIAAABIABgBIAAAAIABgBIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAgBAAIABAAIAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIACAAIAAAAIABAAIAAgCIABgBIACAAIAAgDIABgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABAAIAAgBIABAAIABAAIAAgBIAAgBIAAgBQAAgBAAAAQAAgBABAAQAAAAAAABQAAAAAAABIAAgBIABAAIAAgCIABAAIAAAAIAAAAIAAgBIACgCIAAgBIAAgBIACgBIAAgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgCIAAgCIACAAIAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAABAAAAIACAAIAAgBIAAgBIAAAAIAAgBIACAAIAAABIAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIABABIABAAIAAgBIACAAIAAgBIAAAAIAAgBIABgBIgBgCIABAAIAAABIABAAIAAgBIABAAIABAAIAAgCIABgBIAAgBIABAAIgBAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABAAIAAgBIACAAIAAAAIAAgCIACgBIAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABAAIAAAAIAAgBIABAAIAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIABAAIAAgDIACAAIADgBIAAgBIABAAIAAgBIAAAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIABgBIAAgCIABAAIgBAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAABAAAAIAAABIABgBIABgBIAAgBIABgBIABgBIAAgCIAAgBIABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAABQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAgCIABgBIAAgBQABAAgBABIABAAIADgCIABAAIABAAIAAAAIAAgBIACgBIAAAAIgCgCQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIACgBIAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAABgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABAAIAAgCQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIACgBIACAAIABABIABAAIAAAGIAHAAIAAABIABAAIABAAIAAABIgBAAIAAABIgBABIABABIgBAAIABABIABAAIAAAGIAHAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAABIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIABAAIAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIABAAIACgBIAAANIABAAIACAAIADAAIgBABIgBABIAAAAIAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAAIgBAAIgBABIAAABIADAEIgCABQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAABIABAAIAAgCQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIAAAAIAAABQAAABgBAAQAAAAAAAAQAAABAAAAQAAgBAAAAIgCAAIAAABIABAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAABIgCACIgCACIAAAAIgBABIAAAAIgBACIABAEIgBAAIgBACIAAAAIAAACIgBAAIAAABIgBAAIAAAAIgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBABIgCAAIAAACIgBAAIAAABIgEADIAAABIgBABIAAAAIgCAAIgDAEIAAABIgBAAIAAABIgBABIAAAAIgBAAIgCACIAAABQABAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBAAIAAABIAAABIgBABIAAAAIgBABIgBABIAAABIgCAAIAAACIgBAAIgBAAIAAABIgBAAIAAAAIAAAAIAAACIgBABIAAAAIAAAAIgBAAIAAACIgBAAIAAABIgDACIAAABIgBACIgBAAIgEAGIgBAAIAAABIgBABIAAABIgBAAIAAABIgBAAIgBABIAAACIgBABIAAAAIgCACIAAAAIAAABIgBAAIAAABIAAABIAAABIgCABIAAABIgBAAIAAABIgCABIAAAAIgBABIAAABIgBABIAAABIAAACIgCAAIAAADIgBAAIAAABQAAABAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgBABIgCACIAAACIgBABIAAAAIAAABIgCAAIAAABQABAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAABIgCABIAAABIgBABIAAABIgEAEIAAAAIABABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBABIAAABIAAABIAAABIgBAAIAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAAABIgBAAIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAgBAAIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAABIgBACIAAABIgBAAIAAABIgBAAIAAABIgBACIgBAAIgBACIAAABIgBABIAAABIAAAAIgBABIAAABIgBABIAAABIAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIgBACIAAABIgBABIAAAAIgBABIAAACQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAIAAABIgBAAIgBABIAAABQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIAAAAIgBABIAAACIAAAAIgBABIgBAAIAAACIgCACIAAABIgBAAIAAABIgBACIAAABIgBABIAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAABIgBADIAAAAIgEAEIAAABIgBABIAAADQABAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAIgBAAIAAACIgBABIAAAAIAAACIAAABIgBAAIgDAGIAAABIgBABIAAACIAAABIgBADIAAABIgBAAIAAABIABAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBgBIAAABQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAAAIgBAAIAAABIABAAIgBACIgBACIAAACIgBAAIAAABIAAABIAAABIgBAAIAAADIgBACIAAAAIgBABIgBAAIgBAGIAAABIgBABIAAADIgBACIAAABIgBACIAAACQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIgBABIAAABQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIAAABQgBADgCADIAAABIABABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAABIgBACIAAACIgBACIAAABQABAAAAAAQABgBAAAAQAAABAAAAQAAAAAAABIgBACIAAAAIgBAAIAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBAAQgBABAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIAAACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBgBAAAAIAAAAIgBAAIgBgCIgCAAIAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIAAACIgBABgACFh4IABAAIAAgBgACGh5IABAAIAAgBgACDiLIABAAIAAgBIgBAAg");
	this.shape.setTransform(1.35,-2.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgkCsIgCAAIgBAAIgBgDIgBgBIgBAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDAAQAAAAAAAAQAAABAAAAQAAAAgBgBQAAAAAAAAIgBAAIAAABIABABIABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAABIgEAAIgBgCIgBgBIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAAAIAAAAIgBAAIgBgDIgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAAAIgBAAIABAAIAAgCIAAAAIgBgDIgCgDIgCgCIgBAAIAAgBIAAAAIgCgDIAAgBIgBAAIAAAAIgBgBQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgBAAIgBgCIAAgBIAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIACAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIABgBIAAAAIAAgBIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAgBAAAAIAAgDIgBAAIAAgBIAAgBIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIAAAAIABgBIgBAAIAAgBIgBABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIgBgBIABAAIAAgCIgBAAIgBgCIgBgCIAAAAIAAgBIgBgBIgBgBQgBAAAAAAQAAABAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAAAIgBgCIgBgBIAAgBIgBgBIAAAAIAAAAIgBgCIgBgBIgBgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIgBAAIAAgBIgBgBIgBgCIgBAAIAAgBIgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIABAAIAAgBIgBAAIAAgCIgCgBIgBgCIgBAAIAAgCIgBAAIgBgBIgBgCIAAAAIAAgBIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgBIgBgBIAAgCIgBAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIgBAAQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAgBIABAAIABAAIAAgDIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAgBIgBAAIgBAAIAAgEIAAgDIgBgBIABAAIAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAIABAAIAAgDIgBAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBAAIAAgBIgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIAAgDIABAAIAAgBIAAgBIAAAAIAAgBIABAAIAAgBIgBAAIgBgCIABABIABAAIgBgBIAAgCIABACIABAAIAAAAIAAgCIgBAAIAAgBIgBgBIABAAIAAgBIAAgCIABgBIABAAIAAAAIADAAIAAABIABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAAIAAAAIAAAAIABAAIAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAAAIAAAAIgBAAIgBgCQgBABAAAAQAAAAAAAAQgBgBAAAAQAAgBABgBQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAAgFIABgBIAAAAIAAgCIABgBIAAAAIAAAAIABAAIACAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIABACIAAABIABAAIAAgBIABAAIAAAAIgBgDQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAABIABAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAgBABIAAABIABABIABAAIAAgBIgBAAIABAAIAAgBIgBgBIABAAIAAgBIACAAIgBAAIAAgCIgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBgBAAIABgBIAAAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIAAgBIABAAIAAAAIgBgBIAAgCIAAAAIAAgBIABAAIAAgCIABABIABABIAAABIABAAIAAACIACAAIAAgCIABAAIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAAABIAAAAIAAgBIACABIADAAIAAABIABAAIACABIABAAIAAACIAAAAIAAAAIABABIAAAAIAAABIABAAIAAgBIABACIAAAAIABABIAAAAIAAAAIACAAIABACIAAAAIABABIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAIACAAIAAAAIACABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIABABIAAABIABAAIAAgBQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBAAIABAAIABAAIAAAAIAAgDQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACACQAAABAAAAIAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAIACACIAAABIAAABIABAAIAAgBIABABIAAAAIAAABIAAABIADACIAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBABIACABIABACIABAAIACADIAAABIACAAIAAABQAAAAAAAAQABAAAAAAQAAABAAAAQgBAAAAAAIAAABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAABIABABIAAABIABAAIAAABQABAAAAAAQABABAAAAQAAAAAAAAQgBABAAAAIABAAIABAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBAAIAAACIACgBQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAABIAAABIAAAAIABAAIAAACIABABIABACIAAgBIACACIADgEIAAgDIAAgDIABgBIAAABIABAAIAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAAAIABAAIAAgBIAAgBIAAgBIAAgCIACAAIAAgBIAAgCIAAAAIAAgCIACAAIAAgBIgBAAIABAAIAAgCIABAAIAAgBIABAAIAAAAIABgBIAAgBIgBgCIACgBIAAgBIABAAIgBgCIAAgCQABABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBAAIAAAAIACgCIAAgCIACAAIAAgBIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIgBAAIAAgBIACgBIAAABIABAAIAAAAIAAgBIABAAIAAgBIgBAAIAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIgBAAIAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAAAABIABAAIAAgCIABgCIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAIAAACIABAAIAAgCIACgBIABgCIAAAAIABAAIAAgCIABgBIAAAAIAAgBIABAAIAAgBIAAgBIABgBIAAgCIgBAAIACAAIAAgBIgBAAIAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIABgBIAAgCQAAABAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAIACAAIACAAIAAAAIAAgCIAAgBIABAAIABAAIAAgCIAAAAIAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAgCIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIACgBIABAAIABAAIAAgBIABgCIAAgBIABgBIABAAIAAgCIAAAAIAAgCIABAAIAAgBIABAAIAAgBIACgBIAAgCIABAAIAAgBIAAgCIgBgBIACAAIABAAIAAgBIAAgCIAAAAIACAAIAAgBIAAAAIAAAAIABgCIAAAAIgBAAIAAgDIABAAQABAAgBAAIAAgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABABIAAAAIACAAIAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAAgCIAAgCIAAABIABAAIAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIABgBIAAgCQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgBIAAgBIABgBIAAABIABgBIAAAAIABgBIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAgBgBIABAAIAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIACAAIAAgBIABAAIAAgCIABAAIACAAIAAgDIABgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABAAIAAAAIABAAIABAAIAAgCIAAgBIAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAgBIABAAIAAgCIABAAIAAAAIAAAAIAAgBIACgDIAAAAIAAgBIACgCIAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgCIAAgCIACAAIAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACAAIAAAAIAAgBIAAgBIAAgBIACABIAAAAIAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABABIAAgBIABAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAAgBIgBgBIABABIABAAIAAgBIACAAIAAgBIAAgBIAAAAIABgBIgBgCIABAAIAAABIABAAIAAgBIABgBIABAAIAAgBIABgCIAAAAIABAAIgBgBIABAAIABAAIAAgBIACgBIAAAAIAAgCIACAAIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIAAgBIAAgBIABABIAAgBQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIABgBIAAgCIACAAIADgBIAAgCIABAAIAAgBIAAAAIAAAAIACAAIAAgBIgBgBIAAAAIABgBIABAAIAAgCIABAAIgBgBQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAABIABgBIABgBIAAAAIABgCIABgBIAAgBIAAgCIABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIABgCIAAAAQABAAgBAAIABAAIADgBIABAAIABAAIAAAAIAAgCIACAAIAAgBIgCgCQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIACgBIAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIABAAIAAgDQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIACgBIACAAIABABIABAAIAAAHIAHAAIAAAAIABAAIABABIAAABIgBAAIAAABIgBABIABAAIgBAAIABACIABAAIAAAFIAHAAIAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAAIABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAABIAAABIgBAAIAAACIAAAAIAAAAIgBABIAAAAIABAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIABAAIACgBIAAAOIABAAIACAAIADAAIgBAAIgBABIAAAAIAAABIgBABIAAABIgBAAIgBAAIAAABIADAEIgCACQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAIABAAIAAgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAAAAIAAABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCAAIAAABIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAABIgCABQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIAAABIgBAAIAAABIgBABIABAFIgBAAIgBABIAAABIAAABIgBAAIAAABIgBAAIAAABIgBABIgBABIgBABIgCAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAABIgEADIAAAAIgBACIAAAAIgCAAIgDAEIAAAAIgBABIAAABIgBAAIAAABIgBAAIgCACIAAAAQABABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBAAIAAABIAAABIgBAAIAAABIgBABIgBABIAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAABIgBABIgBAAIAAABIgBAAIAAAAIAAAAIAAABIgBACIAAAAIAAAAIgBAAIAAABQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAABIgDACIAAABIgBACIgBAAIgEAGIgBAAIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAABIgBAAIAAAAIgBABIgBABIAAABIgBACIAAAAIgCACIAAAAIAAABIgBAAIAAABIAAABIAAABIgCABIAAABIgBAAIAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAIgBABIAAABIgBABIAAABIAAACIgCAAIAAADIgBAAIAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBABIgCACIAAACIgBABIAAAAIAAAAIgCAAIAAACQABAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAABIgCABIAAABIgBABIAAABIgEAEIAAAAIABABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBABIAAABIAAABIAAABIgBAAIAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAABIgBAAIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAgBAAIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAABIgBACIAAABIgBAAIAAABIgBAAIAAABIgBADIgBAAIgBABIAAABIgBABIAAABIAAAAIgBABIAAABIgBACIAAAAIAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAABIgBABIAAABIgBABIAAAAIgBABIAAACQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAIAAABIgBAAIgBABIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIAAABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIAAAAIgBACIAAABIAAAAIgBACIgBAAIAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAABIgBAAIAAABIgBADIAAAAIgBABIAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIAAAAIgBADIAAAAIgEAFIAAAAIgBACIAAACQABAAAAABQAAAAAAAAQABAAAAABQAAAAgBAAIgBAAIAAACIgBABIAAABIAAABIAAABIgBABIgDAFIAAABQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIAAABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBACIAAABIgBAAIAAACIABAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAABIgBAAIAAAAIABAAIgBACIgBADIAAABIgBABIAAAAIAAABIAAABIgBABIAAACIgBACIAAABIgBAAIgBABIgBAFIAAACIgBABIAAACIgBADIAAAAIgBADIAAACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAABQAAABgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAABQgBADgCACIAAABQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIAAAAIgBACIAAADIgBABIAAACQABgBAAAAQABAAAAAAQAAAAAAABQAAAAAAABIgBABIAAABIgBAAIAAAAQgBAAAAABQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgBIgBAAIgBgCIgCAAIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAADIgBABgACFh5IABAAIAAgBgACGh6IABAAIAAAAgACDiMIABAAIAAAAIgBgBg");
	this.shape_1.setTransform(1.35,-2.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.067)").s().p("AlBC3IAAltIKDAAIAAFtg");
	this.shape_2.setTransform(0.175,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-19.6,64.4,36.7);


(lib.chafaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var that = this;
		
		//to controle if a 'zome mc' is clicked
		that.isclicked;
		
		that.listofcs = [];
		
		
		
		
		
		
		function zomhandle(e) {
		
		
			if (that.isclicked || that.parent.isDragged) return;
		
		
		
			// reset dimensions before calculate x and y ;
			that.parent.toreset();
			e.currentTarget.kadrzoom.alpha = 0;
			var pt = that.localToGlobal(e.currentTarget.x, e.currentTarget.y);
		
			diffX = that.parent.regX - e.currentTarget.x * 0.27 + 27 - (e.currentTarget.getTransformedBounds().width * 0.27) / 2;
			diffY = that.parent.regY - e.currentTarget.y * 0.25 + 25 - (2 * (4 - Math.log(1 + e.currentTarget.y))) - (e.currentTarget.getTransformedBounds().height * 0.28) / 2;
			//diffX = e.currentTarget.x*0.27 + e.currentTarget.getTransformedBounds().width *0.27/ 2;
			//diffY = e.currentTarget.y*0.25 + e.currentTarget.getTransformedBounds().height *0.25/ 2;
		
		
		
		
			console.log(" e.currentTarget.x " + e.currentTarget.x);
			console.log(" e.currentTarget.x*0.27 " + e.currentTarget.x * 0.27);
			console.log("e.currentTarget.getTransformedBounds().width  " + e.currentTarget.getTransformedBounds().width);
			console.log("e.currentTarget.getBounds().width " + e.currentTarget.getBounds().width);
		
		
			console.log("pt.x " + pt.x);
		
			console.log("that.parent.x  " + that.parent.x);
			console.log("that.parent.y" + that.parent.y);
		
		
		
			console.log("before scal pt.x  " + pt.x);
		
		
			that.isclicked = true;
		
		
		
			that.parent.regX -= diffX - 50;
			that.parent.regY -= diffY - 35;
		
			that.parent.stopDrag();
		
			that.parent.parent.tool_enable(false, 'zoom');
			parentScale(e.currentTarget);
		
			e.currentTarget.new_rtrn.gotoAndStop(1);
		}
		this.zomhandle = zomhandle;
		
		function parentScale(ob) {
		
			var xx = 0.27;
			var yy = 0.25;
			var plus = 1.05;
		
			var shape = new createjs.Shape();
		
			var facWidth = that.parent.getTransformedBounds().width / (ob.getTransformedBounds().width * xx);
			var facHeight = that.parent.getTransformedBounds().height / (ob.getTransformedBounds().height * yy);
		
			var used = Math.min(facWidth, facHeight);
		
			console.log(" that.parent.getBounds().width  " + that.parent.getBounds().width);
			console.log(" ob.getTransformedBounds().width  " + ob.getTransformedBounds().width);
			that.parent.scal(used * plus);
		
		
			stage.update();
		
		
			var pt = ob.parent.localToGlobal(ob.x, ob.y);
		
		
		
			console.log(" after scal ob.x  " + ob.x);
			console.log(" after scal pt.x  " + pt.x);
		
			var msk = new createjs.Shape();
		
		
			var c = ob.x * xx * (used * plus) + diffX - (ob.getTransformedBounds().width * xx) * (used * plus) * 0.5;
			var g = ob.y * yy * (used * plus) + diffY - (ob.getTransformedBounds().height * yy) * (used * plus) * 0.5;
		
			//msk.graphics.beginFill("#ff000050").drawRect(c, g, ob.getTransformedBounds().width*xx * used * plus, ob.getTransformedBounds().height *yy* used * plus);
			msk.graphics.beginFill("#ff000050").drawRect(414 //412//pt.x -( 40 *  (Math.log(pt.x)/3) )
				- (ob.getTransformedBounds().width * xx) * (used * plus) * 0.5, 258 - ob.getTransformedBounds().height * yy * used * plus * 0.5, //240
				ob.getTransformedBounds().width * xx * used * plus, ob.getTransformedBounds().height * yy * used);
		
		
			that.parent.mask = msk;
		
		}
		
		
		var prev_list = [];
		
		function addYad_by_frame(arr) {
		
			for (var u = 0; u < arr.length; u++) {
		
				if (arr[u].name.slice(0, 2) == 'zm') continue;
				var yad = new lib.yad();
		
				that.addChild(yad);
				yad.x = arr[u].x;
				yad.y = arr[u].y;
		
				prev_list.push(yad);
		
		
			}
		
		}
		that.addYad_by_frame = addYad_by_frame;
		
		function removeYad_by_frame() {
		
			for (var u = 0; u < prev_list.length; u++) {
		
				that.removeChild(prev_list[u]);
		
			}
			prev_list = [];
		}
		that.removeYad_by_frame = removeYad_by_frame;
	}
	this.frame_2 = function() {
		this.listofcs = [this.cswsouf1 , this.cswsouf2 , this.cswsouf3 , this.cswsouf4];
	}
	this.frame_3 = function() {
		this.listofcs = [this.cswsouf5 ];
	}
	this.frame_4 = function() {
		this.listofcs = [this.cswsouf6 , this.cswcroc9 ];
	}
	this.frame_5 = function() {
		this.listofcs = [this.cswsouf7 ];
	}
	this.frame_6 = function() {
		this.listofcs = [this.cswsouf8 , this.cswcroc13 ];
	}
	this.frame_7 = function() {
		this.listofcs = [this.cswsouf9 ];
	}
	this.frame_8 = function() {
		this.listofcs = [ this.cswcroc16 ];
	}
	this.frame_9 = function() {
		this.listofcs = [this.cswsouf10 ,this.cswsouf11 ];
	}
	this.frame_10 = function() {
		this.listofcs = [this.cswsouf12 ,this.cswsouf13 , this.cswcroc21];
	}
	this.frame_11 = function() {
		this.listofcs = [this.cswmdnd22 ,this.cswsoli22  ,this.cswmdnd23 , this.cswsoli23];
	}
	this.frame_12 = function() {
		this.listofcs = [this.cswmdnd24 ,this.cswsoli24  ,this.cswmdnd25 , this.cswsoli25];
	}
	this.frame_13 = function() {
		this.listofcs = [this.cswmdnd26 ,this.cswsoli26  ,this.cswmdnd27 , this.cswsoli27];
	}
	this.frame_14 = function() {
		this.listofcs = [this.cswmdnd28 ,this.cswsoli28  ,this.cswmdnd29 , this.cswsoli29];
	}
	this.frame_15 = function() {
		this.listofcs = [this.cswmdnd30 ,this.cswsoli30  ,this.cswmdnd31 , this.cswsoli31];
	}
	this.frame_16 = function() {
		this.listofcs = [this.cswmdnd32 ,this.cswsoli32  ,this.cswmdnd33 , this.cswsoli33];
	}
	this.frame_17 = function() {
		this.listofcs = [this.cswsouf14 ];
	}
	this.frame_18 = function() {
		this.listofcs = [this.cswvide1 ];
	}
	this.frame_19 = function() {
		this.listofcs = [this.cswvide2 ];
	}
	this.frame_22 = function() {
		this.listofcs = [this.cswvide3];
	}
	this.frame_23 = function() {
		this.listofcs = [this.cswsouf15];
	}
	this.frame_24 = function() {
		this.listofcs = [this.cswvide5];
	}
	this.frame_26 = function() {
		this.listofcs = [this.cswcroc52 , this.cswvide6 ];
	}
	this.frame_28 = function() {
		this.listofcs = [this.cswcroc56 ];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(3).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(2).call(this.frame_26).wait(2).call(this.frame_28).wait(1));

	// Layer_2
	this.cswsouf3 = new lib.chaf();
	this.cswsouf3.name = "cswsouf3";
	this.cswsouf3.setTransform(1398.35,190.45,4.9333,9.1333,0,0,0,0.1,-0.1);

	this.cswsouf4 = new lib.chaf();
	this.cswsouf4.name = "cswsouf4";
	this.cswsouf4.setTransform(1289.7,1188.5,6.0577,2.9064);

	this.cswsouf2 = new lib.chaf();
	this.cswsouf2.name = "cswsouf2";
	this.cswsouf2.setTransform(72.15,1202.45,6.0577,2.9064);

	this.cswsouf1 = new lib.chaf();
	this.cswsouf1.name = "cswsouf1";
	this.cswsouf1.setTransform(198.1,205.8,5.0044,8.9039);

	this.cswsouf5 = new lib.chaf();
	this.cswsouf5.name = "cswsouf5";
	this.cswsouf5.setTransform(1284.65,606.35,6.0577,6.551);

	this.cswcroc9 = new lib.chaf();
	this.cswcroc9.name = "cswcroc9";
	this.cswcroc9.setTransform(1445.4,247.45,5.075,6.5653,0,0,0,0.1,0.1);

	this.cswsouf6 = new lib.chaf();
	this.cswsouf6.name = "cswsouf6";
	this.cswsouf6.setTransform(75.7,259.95,6.0577,12.4845,0,0,0,0.1,0.2);

	this.cswsouf7 = new lib.chaf();
	this.cswsouf7.name = "cswsouf7";
	this.cswsouf7.setTransform(1316.65,384.15,6.1994,11.6059);

	this.cswcroc13 = new lib.chaf();
	this.cswcroc13.name = "cswcroc13";
	this.cswcroc13.setTransform(1447.45,270.9,5.3708,6.6216,0,0,0,0.1,0);

	this.cswsouf8 = new lib.chaf();
	this.cswsouf8.name = "cswsouf8";
	this.cswsouf8.setTransform(71.75,262.4,6.0577,7.9249,0,0,0,0.1,0);

	this.cswsouf9 = new lib.chaf();
	this.cswsouf9.name = "cswsouf9";
	this.cswsouf9.setTransform(1295.3,403.3,6.3177,10.794,0,0,0,0.1,0.1);

	this.cswcroc16 = new lib.chaf();
	this.cswcroc16.name = "cswcroc16";
	this.cswcroc16.setTransform(241.85,240.8,4.838,6.4899,0,0,0,0.1,0);

	this.cswsouf11 = new lib.chaf();
	this.cswsouf11.name = "cswsouf11";
	this.cswsouf11.setTransform(1387.5,209.15,5.6542,10.9629,0,0,0,0.1,0.1);

	this.cswsouf10 = new lib.chaf();
	this.cswsouf10.name = "cswsouf10";
	this.cswsouf10.setTransform(129.95,419.1,5.5377,11.2316,0,0,0,0.1,0.1);

	this.cswcroc21 = new lib.chaf();
	this.cswcroc21.name = "cswcroc21";
	this.cswcroc21.setTransform(1429.45,251.15,5.3475,6.5094,0,0,0,0.1,0.1);

	this.cswsouf13 = new lib.chaf();
	this.cswsouf13.name = "cswsouf13";
	this.cswsouf13.setTransform(62,1318.55,5.9375,2.4153,0,0,0,0.1,0);

	this.cswsouf12 = new lib.chaf();
	this.cswsouf12.name = "cswsouf12";
	this.cswsouf12.setTransform(203.85,179.25,4.9925,9.9856,0,0,0,0.1,-0.1);

	this.cswsoli23 = new lib.chaf();
	this.cswsoli23.name = "cswsoli23";
	this.cswsoli23.setTransform(1317.05,1190.9,5.8557,3.8861,0,0,0,0.1,0.1);

	this.cswsoli22 = new lib.chaf();
	this.cswsoli22.name = "cswsoli22";
	this.cswsoli22.setTransform(77.8,1190.9,5.6791,4.1132,0,0,0,0.1,0.1);

	this.cswmdnd23 = new lib.chaf();
	this.cswmdnd23.name = "cswmdnd23";
	this.cswmdnd23.setTransform(1383.15,304.9,5.6791,7.6593,0,0,0,0.1,0);

	this.cswmdnd22 = new lib.chaf();
	this.cswmdnd22.name = "cswmdnd22";
	this.cswmdnd22.setTransform(137.95,304.9,5.6791,7.6593,0,0,0,0.1,0);

	this.cswsoli25 = new lib.chaf();
	this.cswsoli25.name = "cswsoli25";
	this.cswsoli25.setTransform(1269.05,1150.9,6.1401,4.207,0,0,0,0.1,0.1);

	this.cswsoli24 = new lib.chaf();
	this.cswsoli24.name = "cswsoli24";
	this.cswsoli24.setTransform(71.8,1190.9,5.6791,4.1132,0,0,0,0.1,0.1);

	this.cswmdnd25 = new lib.chaf();
	this.cswmdnd25.name = "cswmdnd25";
	this.cswmdnd25.setTransform(1397.15,304.9,5.6791,7.6593,0,0,0,0.1,0);

	this.cswmdnd24 = new lib.chaf();
	this.cswmdnd24.name = "cswmdnd24";
	this.cswmdnd24.setTransform(137.95,304.9,5.6791,7.6593,0,0,0,0.1,0);

	this.cswsoli27 = new lib.chaf();
	this.cswsoli27.name = "cswsoli27";
	this.cswsoli27.setTransform(1285.05,1190.9,5.8557,3.8861,0,0,0,0.1,0.1);

	this.cswsoli26 = new lib.chaf();
	this.cswsoli26.name = "cswsoli26";
	this.cswsoli26.setTransform(79.8,1180.9,5.6791,4.1132,0,0,0,0.1,0.1);

	this.cswmdnd27 = new lib.chaf();
	this.cswmdnd27.name = "cswmdnd27";
	this.cswmdnd27.setTransform(1397.15,358.85,5.6791,7.6593,0,0,0,0.1,0);

	this.cswmdnd26 = new lib.chaf();
	this.cswmdnd26.name = "cswmdnd26";
	this.cswmdnd26.setTransform(137.95,358.85,5.6791,7.6593,0,0,0,0.1,0);

	this.cswsoli29 = new lib.chaf();
	this.cswsoli29.name = "cswsoli29";
	this.cswsoli29.setTransform(1263.05,1224.95,5.8557,3.8861,0,0,0,0.1,0.1);

	this.cswsoli28 = new lib.chaf();
	this.cswsoli28.name = "cswsoli28";
	this.cswsoli28.setTransform(61.8,1200.9,5.6791,4.1132,0,0,0,0.1,0.1);

	this.cswmdnd29 = new lib.chaf();
	this.cswmdnd29.name = "cswmdnd29";
	this.cswmdnd29.setTransform(1397.15,358.85,5.6791,7.6593,0,0,0,0.1,0);

	this.cswmdnd28 = new lib.chaf();
	this.cswmdnd28.name = "cswmdnd28";
	this.cswmdnd28.setTransform(137.95,358.85,5.6791,7.6593,0,0,0,0.1,0);

	this.cswsoli31 = new lib.chaf();
	this.cswsoli31.name = "cswsoli31";
	this.cswsoli31.setTransform(1271.05,1197.15,5.8557,3.8861,0,0,0,0.1,0.1);

	this.cswsoli30 = new lib.chaf();
	this.cswsoli30.name = "cswsoli30";
	this.cswsoli30.setTransform(43.8,1199.15,5.6791,4.1132,0,0,0,0.1,0.1);

	this.cswmdnd31 = new lib.chaf();
	this.cswmdnd31.name = "cswmdnd31";
	this.cswmdnd31.setTransform(1397.15,378.85,5.6791,7.3386,0,0,0,0.1,0);

	this.cswmdnd30 = new lib.chaf();
	this.cswmdnd30.name = "cswmdnd30";
	this.cswmdnd30.setTransform(137.95,378.85,5.6791,7.3386,0,0,0,0.1,0);

	this.cswsoli33 = new lib.chaf();
	this.cswsoli33.name = "cswsoli33";
	this.cswsoli33.setTransform(1269.05,1182.9,5.8557,3.8861,0,0,0,0.1,0.1);

	this.cswsoli32 = new lib.chaf();
	this.cswsoli32.name = "cswsoli32";
	this.cswsoli32.setTransform(45.9,1180.95,5.7985,4.3403,0,0,0,0.1,0.1);

	this.cswmdnd33 = new lib.chaf();
	this.cswmdnd33.name = "cswmdnd33";
	this.cswmdnd33.setTransform(1397.15,358.9,5.6791,7.3951,0,0,0,0.1,0);

	this.cswmdnd32 = new lib.chaf();
	this.cswmdnd32.name = "cswmdnd32";
	this.cswmdnd32.setTransform(137.95,358.9,5.6791,7.3951,0,0,0,0.1,0);

	this.cswsouf14 = new lib.chaf();
	this.cswsouf14.name = "cswsouf14";
	this.cswsouf14.setTransform(1311.8,427.65,6.0117,10.9994,0,0,0,0.1,0.1);

	this.cswvide1 = new lib.chaf();
	this.cswvide1.name = "cswvide1";
	this.cswvide1.setTransform(152,191.45,4.9219,1.7536,0,0,0,0.1,0.1);

	this.cswvide2 = new lib.chaf();
	this.cswvide2.name = "cswvide2";
	this.cswvide2.setTransform(1437.4,251.1,4.4952,1.0191,0,0,0,0.1,0.1);

	this.cswvide3 = new lib.chaf_1();
	this.cswvide3.name = "cswvide3";
	this.cswvide3.setTransform(1361.1,239.45,5.5027,12.1936,0,0,0,0.1,0.8);

	this.cswsouf15 = new lib.chaf();
	this.cswsouf15.name = "cswsouf15";
	this.cswsouf15.setTransform(1325.15,243.45,5.9753,0.9779,0,0,0,0.1,0.1);

	this.cswvide5 = new lib.chaf();
	this.cswvide5.name = "cswvide5";
	this.cswvide5.setTransform(1325.15,253.05,5.8557,0.9059,0,0,0,0.1,0.1);

	this.cswvide6 = new lib.chaf();
	this.cswvide6.name = "cswvide6";
	this.cswvide6.setTransform(1323.35,257.45,5.6787,0.8458,0,0,0,0.1,0.1);

	this.cswcroc52 = new lib.chaf();
	this.cswcroc52.name = "cswcroc52";
	this.cswcroc52.setTransform(266.05,252.05,4.8971,6.7551,0,0,0,0.1,0.1);

	this.cswcroc56 = new lib.chaf();
	this.cswcroc56.name = "cswcroc56";
	this.cswcroc56.setTransform(197.95,247.5,5.2183,6.6425,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cswsouf1},{t:this.cswsouf2},{t:this.cswsouf4},{t:this.cswsouf3}]},2).to({state:[{t:this.cswsouf5}]},1).to({state:[{t:this.cswsouf6},{t:this.cswcroc9}]},1).to({state:[{t:this.cswsouf7}]},1).to({state:[{t:this.cswsouf8},{t:this.cswcroc13}]},1).to({state:[{t:this.cswsouf9}]},1).to({state:[{t:this.cswcroc16}]},1).to({state:[{t:this.cswsouf10},{t:this.cswsouf11}]},1).to({state:[{t:this.cswsouf12},{t:this.cswsouf13},{t:this.cswcroc21}]},1).to({state:[{t:this.cswmdnd22},{t:this.cswmdnd23},{t:this.cswsoli22},{t:this.cswsoli23}]},1).to({state:[{t:this.cswmdnd24},{t:this.cswmdnd25},{t:this.cswsoli24},{t:this.cswsoli25}]},1).to({state:[{t:this.cswmdnd26},{t:this.cswmdnd27},{t:this.cswsoli26},{t:this.cswsoli27}]},1).to({state:[{t:this.cswmdnd28},{t:this.cswmdnd29},{t:this.cswsoli28},{t:this.cswsoli29}]},1).to({state:[{t:this.cswmdnd30},{t:this.cswmdnd31},{t:this.cswsoli30},{t:this.cswsoli31}]},1).to({state:[{t:this.cswmdnd32},{t:this.cswmdnd33},{t:this.cswsoli32},{t:this.cswsoli33}]},1).to({state:[{t:this.cswsouf14}]},1).to({state:[{t:this.cswvide1}]},1).to({state:[{t:this.cswvide2}]},1).to({state:[]},1).to({state:[{t:this.cswvide3}]},2).to({state:[{t:this.cswsouf15}]},1).to({state:[{t:this.cswvide5}]},1).to({state:[]},1).to({state:[{t:this.cswcroc52},{t:this.cswvide6}]},1).to({state:[]},1).to({state:[{t:this.cswcroc56}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2350.4,1635.8);


(lib.bkgcopy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_1 = new lib.Symbol122("synched",0);
	this.instance_1.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,31.4,29.5);


(lib.bkgcopy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_4
	this.instance = new lib.CachedBmp_975();
	this.instance.setTransform(20.55,-10.8,0.3333,0.3333);

	this.instance_1 = new lib.Symbol123("synched",0);
	this.instance_1.setTransform(17.3,-12.15,0.4376,0.8078,0,0,0,-58.5,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_3 = new lib.Symbol122("synched",0);
	this.instance_3.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,83.9,29.5);


(lib.bkgcopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AL1A2IgHAAIgFAAQgCAAgCgDIgDAAIgBAAIAAADIgBAAIgGAAIAAgaIAFAAIADAIIAEAHQACAEAEAAQADAEAEAAQAFAAABgEQACgEAAgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAIgHgHQgDAAgEgEQgFAAgDgEIgHgGQgCgEAAgIQAAgDACgCQACgEADgEQADgEADAAQAEgDAFAAIAFAAQACADADAAIADAAIAEAAIACAAIACgDIAEAAIAAAYIgFAAIgDgHQgCgDgCABQgDgEgDgBQgDgDgDAAQgEAAgDAEQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAABQAAACADADQADAAAEAEQAEAEAFAAIAIAHIAHAHQACAEAAAEQAAAGgBAEIgFAIQgEADgEAAIgJAAgAKyA2IgNAAIgJgHQgEgIgCgGQgBgEAAgLQAAgHACgIQADgFAEgEIALgIQAFgDAGAAQAFAAAFADQAFAAADAEQAEAEACAGQACAEAAALIgpAAIABAGQACAIADAEQACADAEAAQAEADAFAAQAFAAAEgDQADgEADgHIAFAEIgDAKIgGAIIgIAHIgLAAgAKrgGQAAAAgBAAQAAAAgBABQAAAAAAABQgBABAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABgBAAIAAAHIAWAAIgBgHQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAgBgBAAQAAgBgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgDgEgDAAQgCAAgCAEgAJoA2IgXg2QAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCgEIgDAAIgEgBIAAgHIAnAAIAAAHIgFABQgBAAAAAAQAAAAAAABQAAAAAAABQAAABAAABIAAACIABADIAKAaIALgdQAAAAAAAAQAAAAABAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAgBAAIgGgBIAAgHIAaAAIAAAHIgGABIgFAGIgWA2gAIeA2IAAgHIAEAAIADAAIABgEIAAgHIAAgdIgBgJIgDAAIgDAAIgDAAIgCgEIAbgLIAGAAIAAA1IAAAHIABAEIADAAIADAAIAAAHgAH/A2QgIAAgEgDQgEgIAAgKIAAgnIgLAAIAAgEQAEAAAEgEIAHgGIAHgIIAFgHIAFAAIAAAVIASAAIAAAIIgSAAIAAAjIABAKQACAEACAAQADAAACgEIADgGIAFAAQAAADgCADIgEAIIgHAHIgKAAgAHDA2IgMAAIgKgHQgDgEgDgHQgCgHAAgIQAAgGADgIQACgHAFgGQAEgEAFgEQAGgDAGAAQAHAAAFADQAEAAAEAEQADAEABAEIACACQAAAHgCAAQgDAEgEAAIgGgBQAAAAAAgBQgBgBAAAAQgBgBAAAAQAAAAgBAAIgBgHQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBgEgEAAQgFAAgDAIQgDACAAAHQAAAIACAGIAEALQADAEAEAAQAEADAEAAIAEAAQACAAACgDQACAAACgDQACgBACgHIAEAEIgDAKIgGAIIgIAHIgLAAgAGKA2IgEAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBgBAAIgCgBIgBgHIgEAHIgGABQgCADgDAAIgGAAQgHAAgEgDQgEgEAAgLQAAgDAEgFQAEgGAFgEQAGgEAGAAIALgHIgBgHIgBgGIgDgBQgCgDgCAAQgDAAgCAEQgBAAAAAGQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABgBABQAAABAAAAQAAABAAAAQAAAAgBAAQgBAAgCAEIgEAAQgEAAgDgEQgCAAAAgHQAAgDACgDQADgEAEAAQAEgEAFAAQAFgDAEAAQAHAAAGADQAFAAADAEQAEAEABAEQACACAAAHIAAASIAAAIIAAADIABADQAAABAAABQABABAAAAQAAABABAAQAAAAAAAAIACgEIADAAIACAAIABgDIAAAHIgDAEQgCADgDABQgDgBgDAEIgHAAgAF4ASIgFAHQgBAAAAAAQgBAAAAABQAAAAAAABQgBABAAABIAAAEIABAGQACAEACAAQADAAADgEQACAAACgDIAAgVQgEADgDAAgAEIA2IgHAAIgFAAQgCAAgCgDIgDAAIgBAAIAAADIgHAAIAAgaIAGAAIACAIIAEAHQADAEADAAQADAEAEAAQAFAAACgEQACgEAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgHgHQgEAAgEgEQgFAAgDgEIgGgGQgCgEAAgIIABgFQACgEADgEQADgEAEAAQAEgDAEAAIAFAAQACADADAAIAEAAIAEAAIACAAIABgDIAFAAIAAAYIgFAAIgEgHQgCgDgCABQgDgEgDgBQgDgDgDAAQgEAAgCAEQgBAAAAAAQAAAAgBABQAAAAAAABQAAABAAABQAAACADADQACAAAEAEQAEAEAFAAIAIAHIAHAHQADAEAAAEQAAAGgCAEIgFAIQgEADgEAAIgJAAgADFA2IgMAAIgKgHIgGgOQgCgEAAgLQAAgHADgIQADgFAEgEIALgIQAGgDAGAAQAFAAAEADQAFAAADAEQAFAEABAGQACAEAAALIgpAAQAAADACADQABAIADAEQACADAFAAQADADAFAAQAGAAADgDQAEgEADgHIAEAEIgDAKIgGAIQgDADgFAEIgLAAgAC/gGQgBAAAAAAQgBAAAAABQgBAAAAABQgBABAAABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgBAHIAWAAIgBgHIgCgCQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgDgEgDAAQgCAAgBAEgAB/A2IAAgHIAEAAIACAAIABgEIAAgHIAAgZQAAgIgBgDQgCgDgFABQgDgBgDADQgEAAgDADIAAAhIAAAHIABAEIADAAIAEAAIAAAHIglAAIAAgHIAFAAIACAAIABgEIAAgHIAAgdIAAgJIgDAAIgDAAIgEAAIgBgEIAagLIAGAAIAAAPQADgEADAAQACgEADAAQADgEAEAAQACgDAEAAQAGAAADADQAEAEABAEIADAGIABAKIAAAaIAAAHIABAEIADAAIADAAIAAAHgAArA2IgOAAQgGgEgEgHQgEgEgDgGQgDgFAAgHQAAgGADgIQADgHADgDQAFgHAGgEQAGgDAHAAQAIAAAGADIALAIQAEAEACAFQADAIAAAHQAAAHgCAIQgDAGgEAEQgEAHgGAEIgOAAgAAlgGQgBAAAAAAQgBAAAAABQAAAAgBABQAAABAAABQgCAAgBAFIAAAMIABANIAEALIAFAIIAGAAQAEAAACgEQACgHAAgLIgBgOIgDgLIgFgGQgDgEgEAAQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAABgAg6A2IAAgHIAkg1IgLAAQgEAAgDADIgEABIgCAFIgCAIIgFAAIAAgZIA5AAIAAAHIgjA2IAMAAQAEAAADgEQADAAACgEQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAgBIACgLIAEAAIgBAdgAiQA2IgGAAIgFAAQgDAAgBgDIgDAAIgBAAIgBADIgGAAIAAgaIAFAAIADAIIAEAHQACAEADAAQADAEAFAAQAEAAACgEQACgEAAgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAIgHgHQgDAAgEgEQgFAAgDgEIgHgGQgBgEAAgIIABgFQABgEADgEQADgEAEAAQAEgDAEAAIAGAAQACADACAAIAEAAIAEAAIACAAIABgDIAGAAIAAAYIgGAAIgDgHQgDgDgCABQgCgEgDgBQgEgDgCAAQgFAAgCAEQAAAAgBAAQAAAAAAABQAAAAgBABQAAABAAABQAAACADADQADAAADAEQAFAEAEAAIAJAHIAHAHQACAEAAAEQAAAGgCAEIgFAIQgDADgEAAIgKAAgAjTA2IgMAAIgJgHIgGgOQgCgEAAgLQAAgHADgIQADgFAEgEIALgIQAFgDAGAAQAFAAAFADQAEAAAEAEQAEAEACAGQABAEAAALIgpAAQAAADACADQABAIADAEQADADAEAAQAEADAFAAQAFAAAEgDQADgEADgHIAEAEIgDAKIgFAIQgDADgGAEIgLAAgAjZgGQAAAAgBAAQAAAAgBABQAAAAgBABQAAABAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQgBABAAAAIgBAHIAWAAIAAgHIgCgCQAAgBgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgCgEgEAAQgBAAgCAEgAkfA2IAAgHIAEAAIADAAIABgEIABgHIAAhAQAAgHgCAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCAAIgDAAIgCgEIAbgLIAFAAIAABZIAAAHIACAEIACAAIAEAAIAAAHgAl4A2IgNAAIgKgHIgFgOQgDgEAAgLQAAgHADgIQADgFAFgEIAKgIQAGgDAGAAQAFAAAEADQAFAAADAEQAEAEACAGQACAEAAALIgpAAQAAADACADQABAIADAEQACADAFAAQADADAGAAQAFAAADgDQAEgEADgHIAEAEIgDAKIgFAIIgIAHIgLAAgAl/gGQgBAAAAAAQgBAAAAABQgBAAAAABQAAABgBABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgBAHIAWAAIAAgHQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAgBgBAAQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAgBAAQgCgEgEAAQgCAAgBAEgAm/A2IAAgHIAEAAIACAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIAAgZQAAgIgBgDQgCgDgFABIgDAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQgCAAgCADQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAABIAAAdIAAAHIACAEIADAAIADAAIAAAHIglAAIAAgHIAFAAIACAAIACgEIAAgHIAAhAQAAgHgBAAQgBgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCAAIgDAAIgCgEIAagLIAGAAIAAAzQADgBADgDQACgEADAAQADgEADAAQADgDAEAAQAGAAADADQAEAEABAEIADAGIABAKIAAAaIABAHIAAAEIADAAIADAAIAAAHgAoNA2IgNAAIgKgHQgDgEgCgHQgDgHAAgIQAAgGADgIIAHgNQAEgEAFgEQAGgDAGAAQAHAAAFADQAEAAAEAEIAEAIIACACQAAAHgCAAQgCAEgFAAIgGgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIgBgHQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAQgBgEgEAAQgFAAgDAIQgDACAAAHQAAAIACAGIAEALQADAEAEAAQAEADAFAAIADAAQACAAACgDQACAAACgDQADgBABgHIAEAEIgDAKIgGAIIgHAHIgLAAgApZA2IAAgHIAEAAIADAAIABgEIAAgHIAAgdIgBgJIgDAAIgDAAIgDAAIgCgEIAbgLIAGAAIAAA1IAAAHIACAEIACAAIAEAAIAAAHgAqOA2IAAgHIAHAAQADgEAAgHIAAgqIgNAAIAAgIIANAAIABgGIACgIIAEgKIAHgIQADAAAFgEQAFgDAGAAQAFAAADADQAEAAADAEIACAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBABgBQACAAACgDIAEAAIAFAAQABABAAABQAAAAABABQAAAAAAAAQABAAAAAAIADAEIABAEIgBAHIgCADQgBAAAAABQAAAAgBAAQAAABgBAAQAAABgBABIgFAAIgEAAQgCgEgCAAIgBgDQAAABgBABQAAAAAAABQAAAAAAAAQgBAAAAAAIgCAAQgCAEgCAAQgDAAgBgEIgEAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIgDAAIgDAAIgCAEIAAAGIgBAIIAAAKIARAAIAAAIIgRAAIAAAqIACAHIACAEIADAAIAFAAIAAAHgArCA2IAAgHIAIAAQACgEAAgHIAAgqIgNAAIAAgIIANAAIABgGIACgIIAFgKIAGgIQADAAAFgEQAFgDAGAAQAFAAAEADQAEAAACAEQADAAABAEQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgBADIgDAAQgCAEgCAAQgCAAgCgEIgDAAIgCgDQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAAAAAIgEAAIgDAAIgCAEIAAAGIAAAIIAAAKIAQAAIAAAIIgQAAIAAAqIABAHQAAAAAAAAQABAAAAABQAAAAABABQAAABAAABIAEAAIAEAAIAAAHgArdA2IgEAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBgBAAAAIgCgBIgBgHIgFAHIgFABQgCADgCAAIgHAAQgHAAgEgDQgEgEAAgLQAAgDAEgFQAEgGAFgEQAGgEAGAAIALgHIgBgHIgBgGIgDgBQgBAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgEAAgBAEQgCAAAAAGQAAABAAABQAAAAAAABQAAAAAAAAQAAAAgBAAIgBAEQgBAAgCAEIgEAAQgEAAgDgEQgCAAAAgHQAAgDACgDQADgEAEAAQAEgEAFAAQAEgDAFAAQAHAAAFADQAGAAADAEIAFAIQABACAAAHIAAASIABAIIAAADIABADQAAABAAABQAAABABAAQAAABAAAAQABAAAAAAIACgEIACAAIACAAIACgDIAAAHQgBAAgCAEQgCADgDABQgCgBgEAEIgIAAgArvASIgEAHQgBAAAAAAQAAAAgBABQAAAAAAABQAAABAAABIgCAEIACAGQABAEADAAQADAAACgEQACAAADgDIAAgVQgFADgDAAgAIwgcIgEAAQgDgEgBAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgBgHIABgEQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBABgBQABAAADgDIAEAAIAFAAQAAABABABQAAAAABABQAAAAAAAAQABAAAAAAQABABAAABQAAABABAAQAAABAAAAQAAAAABAAIABAEIgBAHQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAAAQgCAAgCAEIgFAAg");
	this.shape.setTransform(98.375,-8.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance = new lib.Symbol123("synched",0);
	this.instance.setTransform(18.3,-6.5,1.3677,0.878,0,0,0,-58.4,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_2 = new lib.Symbol122("synched",0);
	this.instance_2.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,193.6,29.5);


(lib.bkgcopy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABoAwQgGgDgDgEQgEgEgDgFQgBgGgBgGQABgJACgGQACgFAFgFQAEgEAFgDQAGgDAGAAQAHAAAFACIAIAEIAEAGIABAEQAAAEgCACQgCACgEAAQgDAAgCgBIgEgDIgBgFIgCgDIgCgEIgGgBQgFAAgDAEQgDAEAAAHQAAAGACAFIAEAJQADAEADACQAFADAEAAIAFgBIADgBIAFgEIADgHIAEACIgDAJQgCAFgEADQgDAEgFACQgFACgGAAQgHAAgFgCgAAjAwQgFgDgEgEQgDgFgCgGQgCgFgBgIQABgIADgFQACgFAFgFQAEgEAGgCQAGgDAFAAQAFAAAFACQAFABADAEQAEADACAFQACAEAAAHIgpAAIABAJIAFAIIAHAGQADACAGAAQAEAAAFgDQACgDADgHIAFACIgDAJQgCAFgDADQgEAEgFACQgEACgHAAQgHAAgGgCgAAqgHIgEADIgDAEIAAAGIAWAAIAAgFIgDgEIgDgDQgDgCgDAAIgDABgAjQAwQgGgDgDgEQgEgFgCgGQgCgFAAgIQAAgIADgFQADgFAEgFQAEgEAHgCQAFgDAGAAQAFAAAFACQAEABAEAEQAEADABAFQADAEAAAHIgqAAIACAJQACAFADADIAGAGQAEACAFAAQAFAAAEgDQADgDADgHIAFACIgEAJQgCAFgDADQgEAEgEACQgFACgGAAQgIAAgFgCgAjKgHIgEADIgCAEIgBAGIAXAAIgBgFIgCgEIgDgDQgDgCgEAAIgDABgAEEAwIgDgCIgCgCIgBgEIgFAEIgGACIgEACIgHABQgGAAgFgEQgDgEAAgIQAAgFADgEQAEgEAFgDIAMgGIAMgEIAAgCIgCgFIgBgFIgCgCIgEgCQgEAAgCACIgBAHIgBADIgBADIgEACIgEABQgEAAgDgCQgCgCAAgEQAAgDACgDIAIgFIAJgDIAJgCQAGAAAGACQAFABADACQAEADACAEQABADAAAFIAAATIAAAFIAAAFIABACIACABIACgBIADgBIACgBIABgCIAAAHIgDADIgFADIgGADQgDABgEAAIgEgBgAD2ARIgFAFIgCAEIgBAEIACAFQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQADAAADgBIAFgEIAAgSIgIADgAFLAwIAAgFIAFgBIACgBIABgDIAAgFIAAgYQAAgHgBgCQgCgDgFAAQgDAAgDACQgEABgDAEIAAAdIAAAFIACADQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAEABIAAAFIgkAAIAAgFIAEgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABgDIAAgFIAAgcIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgDAAIgEABIgCgFIAbgIIAGAAIAAAMIAFgEIAGgEIAGgCQADgCAEAAQAGAAADACQADADACADQADADAAAEIABAIIAAAZIAAAFIACADQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIADABIAAAFgACYAwIAAgFIAFgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABgDIAAgFIAAgcIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgEAAIgDABIgBgFIAagIIAFAAIAAAOIAFgFIAEgEIAGgDIAGgCIAEABIAEACIACADIABAEQgBAEgBABQgCADgFAAIgFgBIgDgCIgCgBIgCgBIgDABIgCABIgCAEIgEAEIAAAZIABAFIACADQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADABIAAAFgAhGAwIAAgFIAEgBIACgBIABgDIAAgFIAAgYQAAgHgBgCQgBgDgGAAQgDAAgCACQgFABgDAEIAAAdIAAAFIACADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIAEABIAAAFIgkAAIAAgFIAEgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgDIAAgFIAAgcIgBgGQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgDAAIgDABIgCgFIAagIIAGAAIAAAMIAGgEIAFgEIAHgCQACgCAFAAQAFAAAEACQADADABADIAEAHIABAIIAAAZIAAAFIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADABIAAAFgAicAwIAAgFIAFgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgDIAAgFIAAgcIgBgGQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDAAIgDABIgCgFIAbgIIAFAAIAAAwIABAFIABADIACABIAEABIAAAFgAkQAwIAAgFIAFgBIACgBIABgDIABgFIAAg7QAAgFgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIgDAAIgCABIgDgFIAbgIIAFAAIAABQIAAAFIACADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIACABIAAAFgAluAwIAAgFIAHgBIAEgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgGIAAg6IAAgFIgCgDIgEgBIgHgBIAAgFIAvAAQAHAAAHACQAGABAGAEQAEADACAEQADAFAAAGQAAAFgDAFQgCAEgEADQgGAEgHACQgHACgLAAIgCAAIgCAAIgCgBIAAAZIABAFIACADIADACIAHABIAAAFgAlKAAIABAAIABAAIABAAQAGAAADAAQADgCADgCQACgDABgDIABgHIgBgHQgBgDgCgDQgDgCgDgBQgDgBgGAAIgBAAIgBAAIgBAAgAAmgWIAVgZIACgBIADgBQADAAACACQACACAAADIAAADIgCACIgYAPgAiOgaIgEgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgBgFIABgEQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIAEgCIAFgBIAFABIADACIACAEIABAEIgBAEIgCAEIgDADIgFAAIgFAAg");
	this.shape.setTransform(18.4,-8.15,1,1,0,0,0,-40.9,1.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance = new lib.Symbol123("synched",0);
	this.instance.setTransform(59.85,-13.55,0.7111,0.7195,0,0,0,0,-8.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_2 = new lib.Symbol122("synched",0);
	this.instance_2.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,116.9,29.5);


(lib.bkgcopy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak2A6IAAgFIAEgBIACgBIABgDIABgEIAAgzQAAgFgBgBQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgDAAIgBABIgDgEIAXgIIAFAAIAAAMQAFgHAEgCQAFgDAFAAIAIACIAGAFIAFAIQABAEAAAGQABAGgCAHQgCAGgEAFQgDAEgFADQgGACgHAAIgGgBQgDAAgCgCIAAAPIABAFIABACIABABIAEABIAAAFgAkXgNIgGAFIAAAYQAAAGACACQAEADAFAAIADgBIAEgEIACgHIABgLIAAgGIgCgGIgEgFQgCgBgCAAIgFABgAEgAgIgFgBIgDgCIgDAAIgBAAIAAABIgBABIAAABIgEAAIAAgXIAEAAIACAHIAEAFIAEAFQADABAEAAQAEAAACgCQABgCAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgDgDgBIgHgEIgHgEQgDgDgCgCQgCgDAAgFIABgHIAEgFIAGgEIAHgBIAEAAIAFABIADABIADAAIACgBIABgCIAEAAIAAAWIgEAAIgDgGIgDgFIgGgDIgFgCQgEAAgCACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAADACACQACACAEACIAIAEIAHADIAFAGQADADAAAFQAAAEgCADIgEAGIgHADIgIABIgFAAgADhAeQgFgCgDgEQgDgEgDgFQgBgGAAgGQAAgGACgGQADgFAEgEQAEgEAFgCQAFgCAFAAIAIABQAEACADADQADADACAEQABAFAAAHIgjAAQAAADACADQABAEADAEQACADADACQADACAFAAQAEAAADgDQAEgCACgHIADACIgCAIQgCAEgCAEQgDADgFACQgEABgFAAQgHAAgEgCgADmgTQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABIgCAEIgBAFIATAAIAAgEIgCgEIgDgDQgCgCgDAAIgDABgAB4AcQgEgFAAgJIAAggIgKAAIAAgEIAHgCIAHgFIAFgGIAFgIIAEAAIAAATIAPAAIAAAGIgPAAIAAAeIABAHQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIAEgFIADAAIgBAFIgDAGIgGAFQgEABgFAAQgHAAgDgEgABDAeQgEgCgEgEQgDgEgCgFQgCgGAAgGQAAgGADgGIAGgJQAEgEAFgCQAFgCAFAAIAIABQAFACACADQAEADACAEQABAFAAAHIgjAAQgBADACADQABAEACAEIAGAFQADACAFAAQAFAAADgDQADgCACgHIAEACIgCAIIgGAIIgHAFQgEABgFAAQgGAAgFgCgABJgTQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgCAEIAAAFIASAAIAAgEIgBgEIgEgDQgCgCgDAAIgCABgAhSAfIgDgCIgBgCIgBgEIgFAEIgEACIgEACIgFABQgHAAgDgEQgDgEgBgHQABgEADgEQADgEAFgCIAKgFIAKgDIAAgDIgBgFIgBgEIgDgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgDAAgCACIgBAHIgBADIgBADIgCACIgFABQgDAAgCgCQgCgCAAgEQAAgDACgDQADgDADgCIAHgDIAJgBIAKABQAFABACACQADADACADIABAJIAAAQIABAFIAAAEIABACIABABIACgBIACgBIACgBIABgBIAAAGIgDACIgEADIgFADIgGABIgEgBgAheADIgEAEQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBADIABAFQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAIAEgBIAFgEIAAgQIgHADgAjJAfIgCgCIgCgCIgBgEIgEAEIgEACIgFACIgFABQgGAAgEgEQgDgEAAgHQAAgEADgEQADgEAFgCIAKgFIAKgDIAAgDIgBgFIgBgEIgDgCIgCgCQgEAAgCACIgBAHIAAADIgBADIgDACIgEABQgDAAgDgCQgCgCAAgEQAAgDACgDQADgDADgCIAIgDIAIgBIALABQAEABADACQADADABADIABAJIAAAQIABAFIAAAEIABACIACABIABgBIACgBIACgBIACgBIAAAGIgDACIgEADIgGADIgGABIgEgBgAjUADIgFAEQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgBADIACAFQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIAEgBIAEgEIAAgQIgGADgACaAfIAAgFIAEAAIACgCIABgCIAAgFIAAgYIgBgHQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAIgDABIgDABIgCgFIAYgHIAEAAIAAAMIAEgEIADgEIAGgDIAEgBIAFABIADACIABACIABAEQAAADgCACQgBADgEAAIgEgBIgDgCIgCgCIgCgBIgCABIgCACIgCAEIgDADIAAAWIABAFIABACIACACIADAAIAAAFgAAQAfIAAgFIADAAIADgBIABgDIAAgFIAAgVQAAgGgBgCQgCgDgEAAQgDAAgDACIgGAEIAAAaIAAAFIABACIACACIAEAAIAAAFIgfAAIAAgFIAEAAIACgBIABgDIAAgFIAAgVQAAgGgBgDQgBgCgFAAQgCAAgDACQgDABgDADIAAAaIABAFIAAACIACACIAEAAIAAAFIggAAIAAgFIAEAAIACgCIABgCIAAgFIAAgYIAAgHQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgDABIgDABIgBgFIAXgHIAFAAIAAAKIAFgDIAEgDIAGgDIAGgBIAGABIADACIACAEIACAEIAEgEIAGgDQACgCAEgBIAGgBQAFAAADACIAFAFQABADABAEIAAAHIAAAWIABAFIABACIABACIAEAAIAAAFgAivAfIAAgFIAEAAIACgCIABgCIAAgFIAAgYIAAgHQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgDABIgCABIgCgFIAXgHIAFAAIAAAMIADgEIAEgEIAFgDIAFgBIADABIAEACIACACIABAEQAAADgCACQgCADgEAAIgEgBIgDgCIgBgCIgDgBIgCABIgCACIgCAEIgCADIAAAWIAAAFIABACIACACIADAAIAAAFgABVghIgSgKIgFgEIgCgEQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAEABQADABACADIARATg");
	this.shape.setTransform(20.25,24.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance = new lib.Symbol123("synched",0);
	this.instance.setTransform(-14.2,24.35,0.6067,1,0,0,0,-58.5,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_2 = new lib.Symbol122("synched",0);
	this.instance_2.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,72.2,47.3);


(lib.bkgcopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_1 = new lib.Symbol122("synched",0);
	this.instance_1.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,31.4,29.5);


(lib.bkgcopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_1 = new lib.Symbol122("synched",0);
	this.instance_1.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,31.4,29.5);


(lib.bkgcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_1 = new lib.Symbol122("synched",0);
	this.instance_1.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,31.4,29.5);


(lib.bkgcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_1 = new lib.Symbol122("synched",0);
	this.instance_1.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,31.4,29.5);


(lib.bkgcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_1 = new lib.Symbol122("synched",0);
	this.instance_1.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-14.9,31.4,29.5);


(lib.bkgcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEaAsQgHgDgDgEIgFgJQgDgGAAgHQAAgHADgGQACgEAGgEQAFgDAFgDQAFgCAGAAIAKABQAEABAEAEIAFAIQADAEAAAGIgqAAQAAAEACAEQABAEADAEQACACAFACQADACAFAAQAFAAAGgCQACgDADgGIAFACQgCAEgBAEQgCAEgFADQgDAEgFACQgDACgIAAQgFAAgGgCgAEggHQgDABgCACIgBAEQgCACAAADIAWAAIgBgEIAAgEIgFgDQgDgCgDABIgCAAgAjgArIgKgGIgFgKQgDgFAAgGQAAgGADgGIAFgJIAKgHQAGgCAIAAQAIAAAFACQAIADADADQAFAEACAFQADAFAAAGQAAAGgDAGIgFALQgFADgGADQgHACgGABQgIgBgIgCgAjYgHQAAABgBAAQAAAAAAAAQgBABAAAAQAAABAAAAQgDACAAADIAAAJIAAALIAFAKQADAEADACQACADADgBQADAAACgDQADgGAAgLIAAgJQgDgGAAgEQgCgDgDgCQgDgDgFABgAknAtIgFgCIgDgCIgFgBQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgFAAIAAghIAFAAQADAFAAAFQACAFAGADQACAEAFADQAGABAIAAIAFAAIAFgCQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQACgCAAgDQAAgEgCgDIgFgFIgIgFIgLgEIgIgFQgFgCgDgCQgFgDgCgEIgBgIQAAgFADgFQAAgEAFgDQADgEAGgCQAFgBAHAAIAIAAIAGACIAFADIAFABIADgCIAAgEIAGAAIAAAfIgGAAQAAgFgDgGIgFgHIgIgGQgFgBgGAAIgFABIgFACIgDAEIAAAEQAAADADADIAFAEIAIAFQAFABAEADIAJAFQAGABACADQAGADAAAEQACAEAAAFQAAAGgCAEQgDAGgDACQgFAEgHACQgGACgHAAIgJgBgAB8AsIgDgCIgCgDIAAgCIgGACIgFADIgFACIgFABQgIAAgDgEQgFgEAAgHQAAgEAFgFQADgDAFgDIANgFIALgEIAAgCQAAgDgCgBIgBgFIgDgCIgEgBQgDAAgDABIAAAHIAAACIgDADQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgGABQgCAAgDgCQgDgCAAgDQAAgDADgDIAGgFIAKgDIAIgBIANABQAFACADACIAFAFIABAIIAAARQAAADACADIAAADIAAACQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIABgBIADgBIACgBIACgCIAAAHIgCACIgGADIgHADIgGABIgFgBgABvAQIgFADIgDAEIAAAEIABAFQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAFgCIAGgDIAAgRQgGABgCADgADJAsIAAgFIACgBQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIAAgFIAAgaQAAgEgDgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCABIgDABIgDgFIAbgHIAFAAIAAAMIAFgEIAEgEIAHgDIAFgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIAFABQAAABAAAAQABABAAAAQAAAAABAAQAAABABAAIAAAEQAAADgDACQgCACgDAAIgGgBIgCgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgCgCIgDACQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABIAAAXIABAFIACACQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIADABIAAAFgACcAsIAAgFIAFgBQAAAAABAAQABAAAAAAQAAAAABgBQAAAAAAAAIAAgCIAAgFIAAgaIAAgFQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBgBAAAAIgDABIgCABIgDgFIAagHIAGAAIAAAsIAAAFQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQABAAAAAAIADABIAAAFgAAoAsIAAgFIAFgBIACAAIAAgCIABgGIAAgWIgBgIQgCgDgFAAQgDAAgDACQgEABgEACIAAAcIABAFQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAQABAAABAAIACABIAAAFIgiAAIAAgFIADgBIACAAIABgCQACgDAAgDIAAgWQAAgHgDgBQgCgDgEAAQgDAAgDACIgHADIAAAcQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAAACQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIADABIAAAFIgiAAIAAgFIACgBQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIAAgFIAAgaQAAgEgDgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCABIgDABIgDgFIAbgHIAGAAIAAAKIAHgDQABgCAEgBIAFgDIAHgBIAGABIAFADIADADQAAACACACIAEgEIAHgDIAGgDIAHgBQAGAAAFACIAFAFIADAHIAAAHIAAAXIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQABABAAAAIABABIAEABIAAAFgAhUAsIAAgFIADgBIADAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAgGIAAgWQAAgHgCgBQgCgDgEAAIgHACIgGADIAAAcIAAAFIAAACIADABIADABIAAAFIgjAAIAAgFIAFgBIABAAIACgCIAAgGIAAgWQAAgHgCgBQgBgDgFAAQgDAAgCACQgFABgDACIAAAcIAAAFIABACIACABIAFABIAAAFIglAAIAAgFIAFgBIADgBIAAgCIAAgFIAAgaIAAgFQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgDABIgEABIgBgFIAbgHIAFAAIAAAKIAFgDIAFgDIAGgDIAIgBIAGABIAEADQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABQADACAAACIAFgEIAGgDIAHgDIAIgBQAFAAADACQADACACADQADADAAAEQACACAAAFIAAAXIAAAFIAAACIADABIADABIAAAFgACqgZIgEgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgEIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgCIAEAAIAFABQABAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAIACAEQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABgBAAIgFABIgEgBg");
	this.shape.setTransform(-19.225,23.25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance = new lib.Symbol123("synched",0);
	this.instance.setTransform(15.65,24.85,0.5839,0.7324,0,0,0,58.3,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_2 = new lib.Symbol122("synched",0);
	this.instance_2.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-14.9,68.5,45.5);


(lib.bkg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.instance = new lib.CachedBmp_970();
	this.instance.setTransform(-86.85,19.6,0.3333,0.3333);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol123("synched",0);
	this.instance_1.setTransform(15,25.25,0.8856,0.8293,0,0,0,58.2,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.setTransform(0.05,0.15,0.7166,0.6529,0,0,0,0.1,0.2);

	this.instance_3 = new lib.Symbol122("synched",0);
	this.instance_3.setTransform(-14.15,-13.55,0.9079,0.8629,0,0,0,-16,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.3,-14.9,104.3,46.9);


(lib.waraq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol31("synched",0);
	this.instance.setTransform(319.15,214.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waraq, new cjs.Rectangle(0.1,0.1,638.3,428.29999999999995), null);


(lib.tool_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1448();
	this.instance.setTransform(-6.2,0.75,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_1447();
	this.instance_1.setTransform(-1.15,-8.15,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_1446();
	this.instance_2.setTransform(-11.1,-8.9,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy10();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.2,-0.4,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tool_btn, new cjs.Rectangle(-15.7,-15.1,31.299999999999997,29.5), null);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ktrgil = new lib.chafafdndcopy();
	this.ktrgil.name = "ktrgil";
	this.ktrgil.setTransform(44.5,23.3,1.339,1.4602,0,0,0,0.2,0.1);

	this.ktrgbb = new lib.chafafdndcopy();
	this.ktrgbb.name = "ktrgbb";
	this.ktrgbb.setTransform(3.75,23.1,1.339,1.4602,0,0,0,0.2,0.1);

	this.mtrgss = new lib.chafafdndcopy();
	this.mtrgss.name = "mtrgss";
	this.mtrgss.setTransform(-38.15,23.3,1.339,1.4602,0,0,0,0.2,0.1);

	this.atrgui = new lib.chafafdndcopy();
	this.atrgui.name = "atrgui";
	this.atrgui.setTransform(61.05,138,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(31.5,137.8,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrgvv = new lib.chafafdndcopy();
	this.ltrgvv.name = "ltrgvv";
	this.ltrgvv.setTransform(1.65,138,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgxx = new lib.chafafdndcopy();
	this.jtrgxx.name = "jtrgxx";
	this.jtrgxx.setTransform(-28.3,137.8,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgch = new lib.chafafdndcopy();
	this.atrgch.name = "atrgch";
	this.atrgch.setTransform(-58.4,138,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgai = new lib.chafafdndcopy();
	this.atrgai.name = "atrgai";
	this.atrgai.setTransform(60.35,-93.75,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrggk = new lib.chafafdndcopy();
	this.xtrggk.name = "xtrggk";
	this.xtrggk.setTransform(30.8,-93.95,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrgyn = new lib.chafafdndcopy();
	this.ltrgyn.name = "ltrgyn";
	this.ltrgyn.setTransform(0.95,-93.75,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgzz = new lib.chafafdndcopy();
	this.jtrgzz.name = "jtrgzz";
	this.jtrgzz.setTransform(-29,-93.95,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgdd = new lib.chafafdndcopy();
	this.atrgdd.name = "atrgdd";
	this.atrgdd.setTransform(-59.1,-93.75,0.9684,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(15.4,174.6,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-13.55,175.65,0.5884,0.5549,0,0,0,0.1,0.4);

	this.udndui = new lib.Symbol64();
	this.udndui.name = "udndui";
	this.udndui.setTransform(46.65,92.75);

	this.idndil = new lib.Symbol63();
	this.idndil.name = "idndil";
	this.idndil.setTransform(45.3,-37.7);

	this.adndai = new lib.Symbol60();
	this.adndai.name = "adndai";
	this.adndai.setTransform(49.75,-163.6);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-62.55,84.05);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(40,56.15);

	this.sdndgk = new lib.Symbol23copy();
	this.sdndgk.name = "sdndgk";
	this.sdndgk.setTransform(-59.3,-129.25);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-58.2,-167);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(-4.6,-126.05);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-42.1,99.85);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-49.95,-13.65);

	this.hdndch = new lib.Symbol46();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-49.7,58.65);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(-59.3,-50.25);

	this.fdndyn = new lib.Symbol24copy2();
	this.fdndyn.name = "fdndyn";
	this.fdndyn.setTransform(58.5,-131.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndyn},{t:this.bdndbb},{t:this.hdndch},{t:this.sdndss},{t:this.xdndxx},{t:this.ddnddd},{t:this.mdndzz},{t:this.sdndgk},{t:this.fdndff},{t:this.vdndvv},{t:this.adndai},{t:this.idndil},{t:this.udndui},{t:this.correctbtn},{t:this.replay},{t:this.atrgdd},{t:this.jtrgzz},{t:this.ltrgyn},{t:this.xtrggk},{t:this.atrgai},{t:this.atrgch},{t:this.jtrgxx},{t:this.ltrgvv},{t:this.xtrgff},{t:this.atrgui},{t:this.mtrgss},{t:this.ktrgbb},{t:this.ktrgil}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol118, new cjs.Rectangle(-73.7,-179.7,147.60000000000002,368.29999999999995), null);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ktrgil = new lib.chafafdndcopy();
	this.ktrgil.name = "ktrgil";
	this.ktrgil.setTransform(45.6,23.55,1.4445,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(1.65,23.35,1.4445,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-43.55,23.55,1.4445,1.4602,0,0,0,0.1,0.1);

	this.ltrgil = new lib.chafafdndcopy();
	this.ltrgil.name = "ltrgil";
	this.ltrgil.setTransform(37.7,137,2.1678,1.4602,0,0,0,0.2,0.1);

	this.ktrghj = new lib.chafafdndcopy();
	this.ktrghj.name = "ktrghj";
	this.ktrghj.setTransform(-27.95,137.2,2.1678,1.4602,0,0,0,0.2,0.1);

	this.ktrgle = new lib.chafafdndcopy();
	this.ktrgle.name = "ktrgle";
	this.ktrgle.setTransform(57.2,-93.95,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgee = new lib.chafafdndcopy();
	this.ktrgee.name = "ktrgee";
	this.ktrgee.setTransform(20.2,-93.75,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgrr = new lib.chafafdndcopy();
	this.ktrgrr.name = "ktrgrr";
	this.ktrgrr.setTransform(-16.95,-93.95,1.2217,1.4602,0,0,0,0.1,0.1);

	this.vtrgvv = new lib.chafafdndcopy();
	this.vtrgvv.name = "vtrgvv";
	this.vtrgvv.setTransform(-55.2,-93.75,1.2217,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.4,174.75,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.5,175.8,0.5884,0.5549,0,0,0,0.1,0.4);

	this.idndil = new lib.Symbol63();
	this.idndil.name = "idndil";
	this.idndil.setTransform(43.2,-41.2);

	this.edndil = new lib.Symbol65();
	this.edndil.name = "edndil";
	this.edndil.setTransform(37.65,77.15);

	this.ldndle = new lib.Symbol61();
	this.ldndle.name = "ldndle";
	this.ldndle.setTransform(45.85,-164.9);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(-55.65,-133.2);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(56.45,-135.45);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-58.4,-58.25);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-62.1,-26.25);

	this.jdndhj = new lib.Symbol25_1();
	this.jdndhj.name = "jdndhj";
	this.jdndhj.setTransform(-53.75,77.75);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-56.15,-162.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vdndvv},{t:this.jdndhj},{t:this.mdndzz},{t:this.fdndff},{t:this.fdndee},{t:this.kdndrr},{t:this.ldndle},{t:this.edndil},{t:this.idndil},{t:this.correctbtn},{t:this.replay},{t:this.vtrgvv},{t:this.ktrgrr},{t:this.ktrgee},{t:this.ktrgle},{t:this.ktrghj},{t:this.ltrgil},{t:this.ktrgzz},{t:this.ktrgff},{t:this.ktrgil}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol117, new cjs.Rectangle(-73.5,-181,147.2,369.8), null);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.bdndcm = new lib.Symbol131();
	this.bdndcm.name = "bdndcm";
	this.bdndcm.setTransform(-57.1,63.25);

	this.ndnder = new lib.Symbol130();
	this.ndnder.name = "ndnder";
	this.ndnder.setTransform(56.9,-151.1);

	this.ktrgui = new lib.chafafdndcopy();
	this.ktrgui.name = "ktrgui";
	this.ktrgui.setTransform(56.15,139.25,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgfg = new lib.chafafdndcopy();
	this.ktrgfg.name = "ktrgfg";
	this.ktrgfg.setTransform(19.15,139.45,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgcm = new lib.chafafdndcopy();
	this.ktrgcm.name = "ktrgcm";
	this.ktrgcm.setTransform(-18,139.25,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrghh = new lib.chafafdndcopy();
	this.ktrghh.name = "ktrghh";
	this.ktrghh.setTransform(-56.25,139.45,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgei = new lib.chafafdndcopy();
	this.ktrgei.name = "ktrgei";
	this.ktrgei.setTransform(56.15,24.1,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(19.15,24.3,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgrr = new lib.chafafdndcopy();
	this.ktrgrr.name = "ktrgrr";
	this.ktrgrr.setTransform(-18,24.1,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(-56.25,24.3,1.2217,1.4602,0,0,0,0.1,0.1);

	this.atrgai = new lib.chafafdndcopy();
	this.atrgai.name = "atrgai";
	this.atrgai.setTransform(59.7,-93,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrgbv = new lib.chafafdndcopy();
	this.xtrgbv.name = "xtrgbv";
	this.xtrgbv.setTransform(30.15,-93.2,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrger = new lib.chafafdndcopy();
	this.ltrger.name = "ltrger";
	this.ltrger.setTransform(0.3,-93,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgvv = new lib.chafafdndcopy();
	this.jtrgvv.name = "jtrgvv";
	this.jtrgvv.setTransform(-29.65,-93.2,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgrr = new lib.chafafdndcopy();
	this.atrgrr.name = "atrgrr";
	this.atrgrr.setTransform(-59.75,-93,0.9684,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13,175.65,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.9,176.55,0.5884,0.5549);

	this.udndui = new lib.Symbol64();
	this.udndui.name = "udndui";
	this.udndui.setTransform(45.85,64.8);

	this.edndei = new lib.Symbol62();
	this.edndei.name = "edndei";
	this.edndei.setTransform(49.45,-22.5);

	this.adndai = new lib.Symbol60();
	this.adndai.name = "adndai";
	this.adndai.setTransform(-57.4,-170.45);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-61.55,-141.15);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(32.4,-173.45);

	this.vdndvv_1 = new lib.Symbol33copy();
	this.vdndvv_1.name = "vdndvv_1";
	this.vdndvv_1.setTransform(-59.8,-29.55);

	this.kdndrr_1 = new lib.Symbol31copy();
	this.kdndrr_1.name = "kdndrr_1";
	this.kdndrr_1.setTransform(44.3,-59.95);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-61.7,-59.95);

	this.hdndbv = new lib.Symbol23copy();
	this.hdndbv.name = "hdndbv";
	this.hdndbv.setTransform(30.35,-130.45);

	this.edndfg = new lib.Symbol23copy();
	this.edndfg.name = "edndfg";
	this.edndfg.setTransform(-64.55,92.05);

	this.hdndhh = new lib.Symbol25_1();
	this.hdndhh.name = "hdndhh";
	this.hdndhh.setTransform(54,95.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hdndhh},{t:this.edndfg},{t:this.hdndbv},{t:this.fdndff},{t:this.kdndrr_1},{t:this.vdndvv_1},{t:this.kdndrr},{t:this.vdndvv},{t:this.adndai},{t:this.edndei},{t:this.udndui},{t:this.correctbtn},{t:this.replay},{t:this.atrgrr},{t:this.jtrgvv},{t:this.ltrger},{t:this.xtrgbv},{t:this.atrgai},{t:this.ktrgff},{t:this.ktrgrr},{t:this.ktrgvv},{t:this.ktrgei},{t:this.ktrghh},{t:this.ktrgcm},{t:this.ktrgfg},{t:this.ktrgui},{t:this.ndnder},{t:this.bdndcm}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol116, new cjs.Rectangle(-74.5,-188.7,147.2,378.29999999999995), null);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ttrgee = new lib.chafafdndcopy();
	this.ttrgee.name = "ttrgee";
	this.ttrgee.setTransform(40.3,-94.1,1.2637,1.4602,0,0,0,0.1,0.1);

	this.ktrgaa = new lib.chafafdndcopy();
	this.ktrgaa.name = "ktrgaa";
	this.ktrgaa.setTransform(1.85,-94.3,1.2637,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-37.7,-94.1,1.2637,1.4602,0,0,0,0.1,0.1);

	this.ktrgei = new lib.chafafdndcopy();
	this.ktrgei.name = "ktrgei";
	this.ktrgei.setTransform(57.2,21.3,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgqs = new lib.chafafdndcopy();
	this.ktrgqs.name = "ktrgqs";
	this.ktrgqs.setTransform(20.2,21.5,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-16.95,21.3,1.2217,1.4602,0,0,0,0.1,0.1);

	this.otrgac = new lib.chafafdndcopy();
	this.otrgac.name = "otrgac";
	this.otrgac.setTransform(-55.2,21.5,1.2217,1.4602,0,0,0,0.1,0.1);

	this.atrgui = new lib.chafafdndcopy();
	this.atrgui.name = "atrgui";
	this.atrgui.setTransform(60.85,135.5,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(31.3,135.3,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrggg = new lib.chafafdndcopy();
	this.ltrggg.name = "ltrggg";
	this.ltrggg.setTransform(1.45,135.5,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgqq = new lib.chafafdndcopy();
	this.jtrgqq.name = "jtrgqq";
	this.jtrgqq.setTransform(-28.5,135.3,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgrr = new lib.chafafdndcopy();
	this.atrgrr.name = "atrgrr";
	this.atrgrr.setTransform(-58.6,135.5,0.9684,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(20.55,173.2,0.5884,0.5549);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-8.4,174.2,0.5884,0.5549);

	this.rdndee = new lib.Symbol20_1();
	this.rdndee.name = "rdndee";
	this.rdndee.setTransform(-47.35,-177.5);

	this.udndui = new lib.Symbol64();
	this.udndui.name = "udndui";
	this.udndui.setTransform(50.8,63.9);

	this.edndei = new lib.Symbol62();
	this.edndei.name = "edndei";
	this.edndei.setTransform(-51.3,-56);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(-61.4,53.15);

	this.qdndqs = new lib.Symbol20_1();
	this.qdndqs.name = "qdndqs";
	this.qdndqs.setTransform(47.15,-24.3);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-58.6,101.2);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(42.7,96.75);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(47.15,-172.85);

	this.adndaa = new lib.Symbol18_1();
	this.adndaa.name = "adndaa";
	this.adndaa.setTransform(-49.4,-138.95);

	this.mdndac = new lib.Symbol15();
	this.mdndac.name = "mdndac";
	this.mdndac.setTransform(-58.6,-20.7);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-52.2,77.25);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(49.25,-60.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mdndzz},{t:this.adndqq},{t:this.mdndac},{t:this.adndaa},{t:this.sdndss},{t:this.gdndgg},{t:this.fdndff},{t:this.qdndqs},{t:this.kdndrr},{t:this.edndei},{t:this.udndui},{t:this.rdndee},{t:this.correctbtn},{t:this.replay},{t:this.atrgrr},{t:this.jtrgqq},{t:this.ltrggg},{t:this.xtrgff},{t:this.atrgui},{t:this.otrgac},{t:this.ktrgzz},{t:this.ktrgqs},{t:this.ktrgei},{t:this.ktrgss},{t:this.ktrgaa},{t:this.ttrgee}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol115, new cjs.Rectangle(-73.5,-193.6,147.2,380.9), null);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xdndwz = new lib.Symbol27();
	this.xdndwz.name = "xdndwz";
	this.xdndwz.setTransform(-44.25,-6.05);

	this.ktrgwz = new lib.chafafdndcopy();
	this.ktrgwz.name = "ktrgwz";
	this.ktrgwz.setTransform(60.75,22.95,0.9925,1.4602,0,0,0,0.2,0.1);

	this.atrgcN = new lib.chafafdndcopy();
	this.atrgcN.name = "atrgcN";
	this.atrgcN.setTransform(60.6,138.7,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrgaa = new lib.chafafdndcopy();
	this.xtrgaa.name = "xtrgaa";
	this.xtrgaa.setTransform(31.05,138.5,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrgyi = new lib.chafafdndcopy();
	this.ltrgyi.name = "ltrgyi";
	this.ltrgyi.setTransform(1.2,138.7,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(-28.75,138.5,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgdd = new lib.chafafdndcopy();
	this.atrgdd.name = "atrgdd";
	this.atrgdd.setTransform(-58.85,138.7,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ktrgil = new lib.chafafdndcopy();
	this.ktrgil.name = "ktrgil";
	this.ktrgil.setTransform(30.1,22.75,0.9676,1.4602,0,0,0,0.2,0.1);

	this.ktrguq = new lib.chafafdndcopy();
	this.ktrguq.name = "ktrguq";
	this.ktrguq.setTransform(0.8,22.95,0.9676,1.4602,0,0,0,0.2,0.1);

	this.ktrgoo = new lib.chafafdndcopy();
	this.ktrgoo.name = "ktrgoo";
	this.ktrgoo.setTransform(-28.7,22.75,0.9676,1.4602,0,0,0,0.1,0.1);

	this.ktrgjj = new lib.chafafdndcopy();
	this.ktrgjj.name = "ktrgjj";
	this.ktrgjj.setTransform(-59,22.95,0.9676,1.4602,0,0,0,0.1,0.1);

	this.ktrgqu = new lib.chafafdndcopy();
	this.ktrgqu.name = "ktrgqu";
	this.ktrgqu.setTransform(57.2,-93.25,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(20.2,-93.05,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgfg = new lib.chafafdndcopy();
	this.ktrgfg.name = "ktrgfg";
	this.ktrgfg.setTransform(-16.95,-93.25,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgqq = new lib.chafafdndcopy();
	this.ktrgqq.name = "ktrgqq";
	this.ktrgqq.setTransform(-55.2,-93.05,1.2217,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.15,173.55,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.8,174.6,0.5884,0.5549,0,0,0,0.1,0.4);

	this.ydndyi = new lib.Symbol69();
	this.ydndyi.name = "ydndyi";
	this.ydndyi.setTransform(57.4,100.85);

	this.ldndil = new lib.Symbol68();
	this.ldndil.name = "ldndil";
	this.ldndil.setTransform(-56.45,-33.35);

	this.qdndqu = new lib.Symbol66();
	this.qdndqu.name = "qdndqu";
	this.qdndqu.setTransform(47.15,-136.35);

	this.qdnduq = new lib.Symbol57();
	this.qdnduq.name = "qdnduq";
	this.qdnduq.setTransform(47.6,-58);

	this.jdndjj = new lib.Symbol35();
	this.jdndjj.name = "jdndjj";
	this.jdndjj.setTransform(45.05,-23.4);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(55.55,57.2);
	this.mdndaa.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.mdndaa.cache(-11,-15,23,23);

	this.Odndoo = new lib.Symbol41();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(-42.45,-55.95);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(-63.25,101.35);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-60.15,-131.7);

	this.qdndfg = new lib.Symbol18_1();
	this.qdndfg.name = "qdndfg";
	this.qdndfg.setTransform(-60.3,-169.65);

	this.NdndcN = new lib.Symbol43();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(-57.55,69.3);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(56.35,78);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(38.65,-173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndff},{t:this.sdndss},{t:this.NdndcN},{t:this.qdndfg},{t:this.adndqq},{t:this.ddnddd},{t:this.Odndoo},{t:this.mdndaa},{t:this.jdndjj},{t:this.qdnduq},{t:this.qdndqu},{t:this.ldndil},{t:this.ydndyi},{t:this.correctbtn},{t:this.replay},{t:this.ktrgqq},{t:this.ktrgfg},{t:this.ktrgff},{t:this.ktrgqu},{t:this.ktrgjj},{t:this.ktrgoo},{t:this.ktrguq},{t:this.ktrgil},{t:this.atrgdd},{t:this.jtrgss},{t:this.ltrgyi},{t:this.xtrgaa},{t:this.atrgcN},{t:this.ktrgwz},{t:this.xdndwz}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol114, new cjs.Rectangle(-73.5,-184,147.6,371.6), null);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ktrgwz = new lib.chafafdndcopy();
	this.ktrgwz.name = "ktrgwz";
	this.ktrgwz.setTransform(61.15,22.95,0.9925,1.4602);

	this.xdndwz = new lib.Symbol27();
	this.xdndwz.name = "xdndwz";
	this.xdndwz.setTransform(-44.25,-16.65);

	this.adnduu = new lib.Symbol131();
	this.adnduu.name = "adnduu";
	this.adnduu.setTransform(-50.5,61.15);

	this.ktrguu = new lib.chafafdndcopy();
	this.ktrguu.name = "ktrguu";
	this.ktrguu.setTransform(57.2,137.95,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgyi = new lib.chafafdndcopy();
	this.ktrgyi.name = "ktrgyi";
	this.ktrgyi.setTransform(20.2,138.15,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrggg = new lib.chafafdndcopy();
	this.ktrggg.name = "ktrggg";
	this.ktrggg.setTransform(-16.95,137.95,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgmm = new lib.chafafdndcopy();
	this.ktrgmm.name = "ktrgmm";
	this.ktrgmm.setTransform(-55.2,138.15,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgll = new lib.chafafdndcopy();
	this.ktrgll.name = "ktrgll";
	this.ktrgll.setTransform(32.75,23.1,0.9925,1.4602,0,0,0,0.2,0.1);

	this.ktrguq = new lib.chafafdndcopy();
	this.ktrguq.name = "ktrguq";
	this.ktrguq.setTransform(2.7,23.3,0.9925,1.4602,0,0,0,0.2,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-27.55,23.1,0.9925,1.4602,0,0,0,0.1,0.1);

	this.ktrgqq = new lib.chafafdndcopy();
	this.ktrgqq.name = "ktrgqq";
	this.ktrgqq.setTransform(-58.6,23.3,0.9925,1.4602,0,0,0,0.1,0.1);

	this.ktrgqu = new lib.chafafdndcopy();
	this.ktrgqu.name = "ktrgqu";
	this.ktrgqu.setTransform(57.2,-93.05,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgaa = new lib.chafafdndcopy();
	this.ktrgaa.name = "ktrgaa";
	this.ktrgaa.setTransform(20.2,-92.85,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-16.95,-93.05,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(-55.2,-92.85,1.2217,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.75,173.75,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.15,174.8,0.5884,0.5549,0,0,0,0.1,0.4);

	this.ydndyi = new lib.Symbol69();
	this.ydndyi.name = "ydndyi";
	this.ydndyi.setTransform(52.55,97.7);

	this.qdndqu = new lib.Symbol66();
	this.qdndqu.name = "qdndqu";
	this.qdndqu.setTransform(48.6,-128.5);

	this.ldndll = new lib.Symbol68();
	this.ldndll.name = "ldndll";
	this.ldndll.setTransform(51.15,-46.85);

	this.qdnduq = new lib.Symbol57();
	this.qdnduq.name = "qdnduq";
	this.qdnduq.setTransform(44.2,-19.05);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(49.5,64.25);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-63.65,-33.5);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(-54.95,-169.35);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(50.2,-166.75);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-44.25,-54.8);

	this.jdndmm = new lib.Symbol23copy();
	this.jdndmm.name = "jdndmm";
	this.jdndmm.setTransform(-50.3,108);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-54.95,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sdndss},{t:this.jdndmm},{t:this.mdndzz},{t:this.vdndvv},{t:this.mdndaa},{t:this.adndqq},{t:this.gdndgg},{t:this.qdnduq},{t:this.ldndll},{t:this.qdndqu},{t:this.ydndyi},{t:this.correctbtn},{t:this.replay},{t:this.ktrgvv},{t:this.ktrgss},{t:this.ktrgaa},{t:this.ktrgqu},{t:this.ktrgqq},{t:this.ktrgzz},{t:this.ktrguq},{t:this.ktrgll},{t:this.ktrgmm},{t:this.ktrggg},{t:this.ktrgyi},{t:this.ktrguu},{t:this.adnduu},{t:this.xdndwz},{t:this.ktrgwz}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol113, new cjs.Rectangle(-73.5,-182.1,148.2,369.9), null);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mdndwz = new lib.Symbol15();
	this.mdndwz.name = "mdndwz";
	this.mdndwz.setTransform(-59,101.65);

	this.xtrgdv = new lib.chafafdndcopy();
	this.xtrgdv.name = "xtrgdv";
	this.xtrgdv.setTransform(-35.35,138.9,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ttrgtb = new lib.chafafdndcopy();
	this.ttrgtb.name = "ttrgtb";
	this.ttrgtb.setTransform(-60.4,139.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgwz = new lib.chafafdndcopy();
	this.xtrgwz.name = "xtrgwz";
	this.xtrgwz.setTransform(62.25,138.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgtb = new lib.chafafdndcopy();
	this.ltrgtb.name = "ltrgtb";
	this.ltrgtb.setTransform(38.3,138.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrggg = new lib.chafafdndcopy();
	this.jtrggg.name = "jtrggg";
	this.jtrggg.setTransform(14.3,138.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgyi = new lib.chafafdndcopy();
	this.atrgyi.name = "atrgyi";
	this.atrgyi.setTransform(-10.45,138.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ktrgil = new lib.chafafdndcopy();
	this.ktrgil.name = "ktrgil";
	this.ktrgil.setTransform(57.2,23.8,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrghn = new lib.chafafdndcopy();
	this.ktrghn.name = "ktrghn";
	this.ktrghn.setTransform(20.2,24,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgxx = new lib.chafafdndcopy();
	this.ktrgxx.name = "ktrgxx";
	this.ktrgxx.setTransform(-16.95,23.8,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgch = new lib.chafafdndcopy();
	this.ktrgch.name = "ktrgch";
	this.ktrgch.setTransform(-55.2,24,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgqu = new lib.chafafdndcopy();
	this.ktrgqu.name = "ktrgqu";
	this.ktrgqu.setTransform(57.2,-92.1,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(20.2,-91.9,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-16.95,-92.1,1.2217,1.4602,0,0,0,0.1,0.1);

	this.ktrgbb = new lib.chafafdndcopy();
	this.ktrgbb.name = "ktrgbb";
	this.ktrgbb.setTransform(-55.2,-91.9,1.2217,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.8,174,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.1,174.9,0.5884,0.5549);

	this.ydndyi = new lib.Symbol69();
	this.ydndyi.name = "ydndyi";
	this.ydndyi.setTransform(60.65,75.85);

	this.idndil = new lib.Symbol67();
	this.idndil.name = "idndil";
	this.idndil.setTransform(51.05,-51.35);

	this.qdndqu = new lib.Symbol66();
	this.qdndqu.name = "qdndqu";
	this.qdndqu.setTransform(50.65,-141.8);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-60.1,-160.45);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-61.85,-122.15);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(41.75,103.9);

	this.fdndhn = new lib.Symbol22_1();
	this.fdndhn.name = "fdndhn";
	this.fdndhn.setTransform(49.9,-15.95);

	this.hdndch = new lib.Symbol46();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-53.7,-50.6);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(53.45,-169.4);

	this.sdndtb = new lib.Symbol24copy2();
	this.sdndtb.name = "sdndtb";
	this.sdndtb.setTransform(-59.75,57.6);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-56.7,-16.6);

	this.sdnddv = new lib.Symbol30copy();
	this.sdnddv.name = "sdnddv";
	this.sdnddv.setTransform(-49.65,78.8);

	this.fdndtb = new lib.Symbol24copy2();
	this.fdndtb.name = "fdndtb";
	this.fdndtb.setTransform(32.85,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndtb},{t:this.sdnddv},{t:this.xdndxx},{t:this.sdndtb},{t:this.bdndbb},{t:this.hdndch},{t:this.fdndhn},{t:this.gdndgg},{t:this.fdndff},{t:this.sdndss},{t:this.qdndqu},{t:this.idndil},{t:this.ydndyi},{t:this.correctbtn},{t:this.replay},{t:this.ktrgbb},{t:this.ktrgss},{t:this.ktrgff},{t:this.ktrgqu},{t:this.ktrgch},{t:this.ktrgxx},{t:this.ktrghn},{t:this.ktrgil},{t:this.atrgyi},{t:this.jtrggg},{t:this.ltrgtb},{t:this.xtrgwz},{t:this.ttrgtb},{t:this.xtrgdv},{t:this.mdndwz}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol112, new cjs.Rectangle(-73.5,-185.9,147.2,373.9), null);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.atrgoo = new lib.chafafdndcopy();
	this.atrgoo.name = "atrgoo";
	this.atrgoo.setTransform(60.7,138.8,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrgyi = new lib.chafafdndcopy();
	this.xtrgyi.name = "xtrgyi";
	this.xtrgyi.setTransform(31.15,138.6,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrgss = new lib.chafafdndcopy();
	this.ltrgss.name = "ltrgss";
	this.ltrgss.setTransform(1.3,138.8,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgff = new lib.chafafdndcopy();
	this.jtrgff.name = "jtrgff";
	this.jtrgff.setTransform(-28.65,138.6,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgqq = new lib.chafafdndcopy();
	this.atrgqq.name = "atrgqq";
	this.atrgqq.setTransform(-58.75,138.8,0.9684,1.4602,0,0,0,0.2,0.1);

	this.xtrgFB = new lib.chafafdndcopy();
	this.xtrgFB.name = "xtrgFB";
	this.xtrgFB.setTransform(-34.5,-91.35,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgvv = new lib.chafafdndcopy();
	this.ltrgvv.name = "ltrgvv";
	this.ltrgvv.setTransform(-59.55,-91.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgqu = new lib.chafafdndcopy();
	this.xtrgqu.name = "xtrgqu";
	this.xtrgqu.setTransform(63.1,-91.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgyu = new lib.chafafdndcopy();
	this.ltrgyu.name = "ltrgyu";
	this.ltrgyu.setTransform(39.15,-91.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgqx = new lib.chafafdndcopy();
	this.jtrgqx.name = "jtrgqx";
	this.jtrgqx.setTransform(15.15,-91.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgaa = new lib.chafafdndcopy();
	this.atrgaa.name = "atrgaa";
	this.atrgaa.setTransform(-9.6,-91.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ktrgLL = new lib.chafafdndcopy();
	this.ktrgLL.name = "ktrgLL";
	this.ktrgLL.setTransform(32.95,24.35,2.1678,1.4602,0,0,0,0.2,0.1);

	this.ktrgDF = new lib.chafafdndcopy();
	this.ktrgDF.name = "ktrgDF";
	this.ktrgDF.setTransform(-32.7,24.55,2.1678,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(20.5,173.95,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-8.5,174.85,0.5884,0.5549);

	this.ydndyi = new lib.Symbol69();
	this.ydndyi.name = "ydndyi";
	this.ydndyi.setTransform(-37.8,75.4);

	this.idndLL = new lib.Symbol67();
	this.idndLL.name = "idndLL";
	this.idndLL.setTransform(45.95,-47);

	this.qdndqu = new lib.Symbol66();
	this.qdndqu.name = "qdndqu";
	this.qdndqu.setTransform(-41.25,-175.8);

	this.UdndFB = new lib.Symbol42();
	this.UdndFB.name = "UdndFB";
	this.UdndFB.setTransform(49.65,-131.3);

	this.Odndoo = new lib.Symbol41();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(47.65,104.05);

	this.Xdndqx = new lib.Symbol23copy();
	this.Xdndqx.name = "Xdndqx";
	this.Xdndqx.setTransform(-32.25,-126.25);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-61.4,60.35);

	this.Sdndyu = new lib.Symbol18_1();
	this.Sdndyu.name = "Sdndyu";
	this.Sdndyu.setTransform(30.6,-175.95);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(42.05,60.35);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(53.7,-160.4);

	this.jdndDF = new lib.Symbol25_1();
	this.jdndDF.name = "jdndDF";
	this.jdndDF.setTransform(-56.25,-47.7);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-60.6,100.5);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-58.25,-140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vdndvv},{t:this.sdndss},{t:this.jdndDF},{t:this.mdndaa},{t:this.fdndff},{t:this.Sdndyu},{t:this.adndqq},{t:this.Xdndqx},{t:this.Odndoo},{t:this.UdndFB},{t:this.qdndqu},{t:this.idndLL},{t:this.ydndyi},{t:this.correctbtn},{t:this.replay},{t:this.ktrgDF},{t:this.ktrgLL},{t:this.atrgaa},{t:this.jtrgqx},{t:this.ltrgyu},{t:this.xtrgqu},{t:this.ltrgvv},{t:this.xtrgFB},{t:this.atrgqq},{t:this.jtrgff},{t:this.ltrgss},{t:this.xtrgyi},{t:this.atrgoo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol111, new cjs.Rectangle(-73.4,-190.3,147,378.3), null);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ddndai = new lib.Symbol134();
	this.ddndai.name = "ddndai";
	this.ddndai.setTransform(-58.05,56.95);

	this.mdndaa = new lib.Symbol136();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(-56.45,-172.25);

	this.odndoi = new lib.Symbol132();
	this.odndoi.name = "odndoi";
	this.odndoi.setTransform(56.7,76.45);

	this.ktrgte = new lib.chafafdndcopy();
	this.ktrgte.name = "ktrgte";
	this.ktrgte.setTransform(54.25,21.9,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(19.65,22.1,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrggg = new lib.chafafdndcopy();
	this.ktrggg.name = "ktrggg";
	this.ktrggg.setTransform(-15.1,21.9,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgxa = new lib.chafafdndcopy();
	this.ktrgxa.name = "ktrgxa";
	this.ktrgxa.setTransform(-50.9,22.1,1.1429,1.4602,0,0,0,0.1,0.1);

	this.xtrgai = new lib.chafafdndcopy();
	this.xtrgai.name = "xtrgai";
	this.xtrgai.setTransform(-35.55,136.95,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgbb = new lib.chafafdndcopy();
	this.ltrgbb.name = "ltrgbb";
	this.ltrgbb.setTransform(-60.6,137.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgmp = new lib.chafafdndcopy();
	this.xtrgmp.name = "xtrgmp";
	this.xtrgmp.setTransform(62.05,136.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgjk = new lib.chafafdndcopy();
	this.ltrgjk.name = "ltrgjk";
	this.ltrgjk.setTransform(38.1,136.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgoi = new lib.chafafdndcopy();
	this.jtrgoi.name = "jtrgoi";
	this.jtrgoi.setTransform(14.1,136.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrggn = new lib.chafafdndcopy();
	this.atrggn.name = "atrggn";
	this.atrggn.setTransform(-10.65,136.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(-35.55,-94.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgqq = new lib.chafafdndcopy();
	this.ltrgqq.name = "ltrgqq";
	this.ltrgqq.setTransform(-60.6,-94.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ntrgxx = new lib.chafafdndcopy();
	this.ntrgxx.name = "ntrgxx";
	this.ntrgxx.setTransform(62.05,-94.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgaa = new lib.chafafdndcopy();
	this.ltrgaa.name = "ltrgaa";
	this.ltrgaa.setTransform(38.1,-94.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgbv = new lib.chafafdndcopy();
	this.jtrgbv.name = "jtrgbv";
	this.jtrgbv.setTransform(14.1,-94.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgff = new lib.chafafdndcopy();
	this.atrgff.name = "atrgff";
	this.atrgff.setTransform(-10.65,-94.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(15.05,173.55,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-13.9,174.6,0.5884,0.5549,0,0,0,0.1,0.4);

	this.ndndgn = new lib.Symbol71();
	this.ndndgn.name = "ndndgn";
	this.ndndgn.setTransform(41.05,105.8);

	this.edndte = new lib.Symbol70();
	this.edndte.name = "edndte";
	this.edndte.setTransform(-55.8,-29);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(42.95,-35.65);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(43.2,-60.8);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-61.25,-135.05);

	this.rdndbv = new lib.Symbol18_1();
	this.rdndbv.name = "rdndbv";
	this.rdndbv.setTransform(56.95,-166.9);

	this.fdndjk = new lib.Symbol24copy2();
	this.fdndjk.name = "fdndjk";
	this.fdndjk.setTransform(40.55,54.1);

	this.fdndxa = new lib.Symbol22_1();
	this.fdndxa.name = "fdndxa";
	this.fdndxa.setTransform(-57.4,-60.75);

	this.xdndmp = new lib.Symbol27();
	this.xdndmp.name = "xdndmp";
	this.xdndmp.setTransform(-44.5,78.4);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(-57.35,106.1);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(47.15,-141.55);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-42.75,-158.75);

	this.adndxx = new lib.Symbol27();
	this.adndxx.name = "adndxx";
	this.adndxx.setTransform(37.6,-176.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.adndxx},{t:this.xdndxx},{t:this.fdndff},{t:this.bdndbb},{t:this.xdndmp},{t:this.fdndxa},{t:this.fdndjk},{t:this.rdndbv},{t:this.adndqq},{t:this.sdndss},{t:this.gdndgg},{t:this.edndte},{t:this.ndndgn},{t:this.correctbtn},{t:this.replay},{t:this.atrgff},{t:this.jtrgbv},{t:this.ltrgaa},{t:this.ntrgxx},{t:this.ltrgqq},{t:this.xtrgxx},{t:this.atrggn},{t:this.jtrgoi},{t:this.ltrgjk},{t:this.xtrgmp},{t:this.ltrgbb},{t:this.xtrgai},{t:this.ktrgxa},{t:this.ktrggg},{t:this.ktrgss},{t:this.ktrgte},{t:this.odndoi},{t:this.mdndaa},{t:this.ddndai}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol110, new cjs.Rectangle(-72.3,-190.3,144.8,377.9), null);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mdndaa = new lib.Symbol136();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(36.1,-155.3);

	this.Udndea = new lib.Symbol135();
	this.Udndea.name = "Udndea";
	this.Udndea.setTransform(-47.9,57.15);

	this.ddndai = new lib.Symbol134();
	this.ddndai.name = "ddndai";
	this.ddndai.setTransform(-45.15,-140.15);

	this.ktrgxx = new lib.chafafdndcopy();
	this.ktrgxx.name = "ktrgxx";
	this.ktrgxx.setTransform(61.55,-94.55,0.9471,1.4602,0,0,0,0.1,0.1);

	this.ktrgea = new lib.chafafdndcopy();
	this.ktrgea.name = "ktrgea";
	this.ktrgea.setTransform(36.2,136.05,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrggn = new lib.chafafdndcopy();
	this.ktrggn.name = "ktrggn";
	this.ktrggn.setTransform(1.45,135.85,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-34.35,136.05,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrggg = new lib.chafafdndcopy();
	this.ktrggg.name = "ktrggg";
	this.ktrggg.setTransform(53.65,20.8,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgcN = new lib.chafafdndcopy();
	this.ktrgcN.name = "ktrgcN";
	this.ktrgcN.setTransform(19.05,21,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(-15.7,20.8,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-51.5,21,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgaa = new lib.chafafdndcopy();
	this.ktrgaa.name = "ktrgaa";
	this.ktrgaa.setTransform(32.4,-94.75,0.9471,1.4602,0,0,0,0.1,0.1);

	this.ktrgai = new lib.chafafdndcopy();
	this.ktrgai.name = "ktrgai";
	this.ktrgai.setTransform(3.7,-94.55,0.9471,1.4602,0,0,0,0.1,0.1);

	this.ktrggh = new lib.chafafdndcopy();
	this.ktrggh.name = "ktrggh";
	this.ktrggh.setTransform(-25.05,-94.75,0.9471,1.4602,0,0,0,0.1,0.1);

	this.ktrgrt = new lib.chafafdndcopy();
	this.ktrgrt.name = "ktrgrt";
	this.ktrgrt.setTransform(-54.7,-94.55,0.9471,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.6,172.6,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.3,173.65,0.5884,0.5549,0,0,0,0.1,0.4);

	this.ndndgn = new lib.Symbol71();
	this.ndndgn.name = "ndndgn";
	this.ndndgn.setTransform(47.3,68.05);

	this.edndgg = new lib.Symbol70();
	this.edndgg.name = "edndgg";
	this.edndgg.setTransform(53.7,-22.85);

	this.jdndrt = new lib.Symbol25_1();
	this.jdndrt.name = "jdndrt";
	this.jdndrt.setTransform(-54.1,-176.85);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-47.25,-60.55);

	this.NdndcN = new lib.Symbol43();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(-52.75,-22.2);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-54.1,98.9);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(50.55,-58.85);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(58.15,-149.2);

	this.fdndgh = new lib.Symbol24copy2();
	this.fdndgh.name = "fdndgh";
	this.fdndgh.setTransform(45.7,-178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndgh},{t:this.xdndxx},{t:this.mdndzz},{t:this.sdndss},{t:this.NdndcN},{t:this.fdndff},{t:this.jdndrt},{t:this.edndgg},{t:this.ndndgn},{t:this.correctbtn},{t:this.replay},{t:this.ktrgrt},{t:this.ktrggh},{t:this.ktrgai},{t:this.ktrgaa},{t:this.ktrgzz},{t:this.ktrgff},{t:this.ktrgcN},{t:this.ktrggg},{t:this.ktrgss},{t:this.ktrggn},{t:this.ktrgea},{t:this.ktrgxx},{t:this.ddndai},{t:this.Udndea},{t:this.mdndaa}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol109, new cjs.Rectangle(-68.9,-191,143.3,377.6), null);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.idndin = new lib.Symbol137();
	this.idndin.name = "idndin";
	this.idndin.setTransform(-50.4,-22.6);

	this.mdndaa = new lib.Symbol136();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(36.2,-134);

	this.ktrggg = new lib.chafafdndcopy();
	this.ktrggg.name = "ktrggg";
	this.ktrggg.setTransform(28.95,22.55,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgin = new lib.chafafdndcopy();
	this.ktrgin.name = "ktrgin";
	this.ktrgin.setTransform(-5.8,22.35,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgfm = new lib.chafafdndcopy();
	this.ktrgfm.name = "ktrgfm";
	this.ktrgfm.setTransform(-41.6,22.55,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgxx = new lib.chafafdndcopy();
	this.ktrgxx.name = "ktrgxx";
	this.ktrgxx.setTransform(53.45,-94.25,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgaa = new lib.chafafdndcopy();
	this.ktrgaa.name = "ktrgaa";
	this.ktrgaa.setTransform(18.85,-94.05,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-15.9,-94.25,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(-51.7,-94.05,1.1429,1.4602,0,0,0,0.1,0.1);

	this.xtrgoo = new lib.chafafdndcopy();
	this.xtrgoo.name = "xtrgoo";
	this.xtrgoo.setTransform(-35.55,137.2,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgmm = new lib.chafafdndcopy();
	this.ltrgmm.name = "ltrgmm";
	this.ltrgmm.setTransform(-60.6,137.4,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrghh = new lib.chafafdndcopy();
	this.xtrghh.name = "xtrghh";
	this.xtrghh.setTransform(62.05,136.8,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrggn = new lib.chafafdndcopy();
	this.ltrggn.name = "ltrggn";
	this.ltrggn.setTransform(38.1,137,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(14.1,136.8,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgxv = new lib.chafafdndcopy();
	this.atrgxv.name = "atrgxv";
	this.atrgxv.setTransform(-10.65,137,0.7769,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.4,173.85,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.5,174.75,0.5884,0.5549);

	this.ndndgn = new lib.Symbol71();
	this.ndndgn.name = "ndndgn";
	this.ndndgn.setTransform(-58.7,54.25);

	this.edndgg = new lib.Symbol70();
	this.edndgg.name = "edndgg";
	this.edndgg.setTransform(43.75,-42.05);

	this.Odndoo = new lib.Symbol41();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(57.3,53.6);

	this.mdndfm = new lib.Symbol15();
	this.mdndfm.name = "mdndfm";
	this.mdndfm.setTransform(-50.35,-57.35);

	this.vdndmm = new lib.Symbol19_1();
	this.vdndmm.name = "vdndmm";
	this.vdndmm.setTransform(-54.75,80.45);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-54.35,-164.7);

	this.sdndxv = new lib.Symbol23copy();
	this.sdndxv.name = "sdndxv";
	this.sdndxv.setTransform(61.1,107.4);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(32.55,-163.9);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-63.9,116.8);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-39.8,-130.95);

	this.xdndhh = new lib.Symbol27();
	this.xdndhh.name = "xdndhh";
	this.xdndhh.setTransform(48.8,80.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndhh},{t:this.fdndff},{t:this.sdndss},{t:this.xdndxx},{t:this.sdndxv},{t:this.mdndzz},{t:this.vdndmm},{t:this.mdndfm},{t:this.Odndoo},{t:this.edndgg},{t:this.ndndgn},{t:this.correctbtn},{t:this.replay},{t:this.atrgxv},{t:this.jtrgss},{t:this.ltrggn},{t:this.xtrghh},{t:this.ltrgmm},{t:this.xtrgoo},{t:this.ktrgff},{t:this.ktrgzz},{t:this.ktrgaa},{t:this.ktrgxx},{t:this.ktrgfm},{t:this.ktrgin},{t:this.ktrggg},{t:this.mdndaa},{t:this.idndin}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol108, new cjs.Rectangle(-72.3,-177.4,144.8,365.20000000000005), null);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mdndaa = new lib.Symbol136();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(43.15,-174.25);

	this.ddndai = new lib.Symbol134();
	this.ddndai.name = "ddndai";
	this.ddndai.setTransform(46.5,-134.9);

	this.ktrgoo = new lib.chafafdndcopy();
	this.ktrgoo.name = "ktrgoo";
	this.ktrgoo.setTransform(54.35,-94.45,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgaa = new lib.chafafdndcopy();
	this.ktrgaa.name = "ktrgaa";
	this.ktrgaa.setTransform(19.75,-94.25,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgai = new lib.chafafdndcopy();
	this.ktrgai.name = "ktrgai";
	this.ktrgai.setTransform(-15,-94.45,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(-50.8,-94.25,1.1429,1.4602,0,0,0,0.1,0.1);

	this.xtrgmm = new lib.chafafdndcopy();
	this.xtrgmm.name = "xtrgmm";
	this.xtrgmm.setTransform(-35.55,136.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgch = new lib.chafafdndcopy();
	this.ltrgch.name = "ltrgch";
	this.ltrgch.setTransform(-60.6,136.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgoB = new lib.chafafdndcopy();
	this.xtrgoB.name = "xtrgoB";
	this.xtrgoB.setTransform(62.05,135.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrggn = new lib.chafafdndcopy();
	this.ltrggn.name = "ltrggn";
	this.ltrggn.setTransform(38.1,135.9,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgck = new lib.chafafdndcopy();
	this.jtrgck.name = "jtrgck";
	this.jtrgck.setTransform(14.1,135.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgdd = new lib.chafafdndcopy();
	this.atrgdd.name = "atrgdd";
	this.atrgdd.setTransform(-10.65,135.9,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(-35.55,20.85,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgQS = new lib.chafafdndcopy();
	this.ltrgQS.name = "ltrgQS";
	this.ltrgQS.setTransform(-60.6,21.05,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrggg = new lib.chafafdndcopy();
	this.xtrggg.name = "xtrggg";
	this.xtrggg.setTransform(62.05,20.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgss = new lib.chafafdndcopy();
	this.ltrgss.name = "ltrgss";
	this.ltrgss.setTransform(38.1,20.65,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgkl = new lib.chafafdndcopy();
	this.jtrgkl.name = "jtrgkl";
	this.jtrgkl.setTransform(14.1,20.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgzz = new lib.chafafdndcopy();
	this.atrgzz.name = "atrgzz";
	this.atrgzz.setTransform(-10.65,20.65,0.7769,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(19.6,172.8,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-9.4,173.7,0.5884,0.5549);

	this.mdndmm = new lib.Symbol72();
	this.mdndmm.name = "mdndmm";
	this.mdndmm.setTransform(42.15,103.5);

	this.ndndgn = new lib.Symbol71();
	this.ndndgn.name = "ndndgn";
	this.ndndgn.setTransform(-31.65,97.85);

	this.edndgg = new lib.Symbol70();
	this.edndgg.name = "edndgg";
	this.edndgg.setTransform(31.75,-49.3);

	this.OdndoB = new lib.Symbol41();
	this.OdndoB.name = "OdndoB";
	this.OdndoB.setTransform(55.6,78.3);

	this.Odndoo = new lib.Symbol41();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(-50.7,-176.95);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(36.4,54.05);

	this.gdndck = new lib.Symbol18_1();
	this.gdndck.name = "gdndck";
	this.gdndck.setTransform(-63.9,81.05);

	this.ndndQS = new lib.Symbol25_1();
	this.ndndQS.name = "ndndQS";
	this.ndndQS.setTransform(-60.05,-26.45);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(60.2,-61.9);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-54.05,-131.7);

	this.vdndkl = new lib.Symbol19_1();
	this.vdndkl.name = "vdndkl";
	this.vdndkl.setTransform(54.9,-16.35);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-59.55,-64.2);

	this.hdndch = new lib.Symbol46();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-46.3,59.35);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-41.95,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sdndss},{t:this.hdndch},{t:this.mdndzz},{t:this.vdndkl},{t:this.vdndvv},{t:this.fdndff},{t:this.ndndQS},{t:this.gdndck},{t:this.ddnddd},{t:this.Odndoo},{t:this.OdndoB},{t:this.edndgg},{t:this.ndndgn},{t:this.mdndmm},{t:this.correctbtn},{t:this.replay},{t:this.atrgzz},{t:this.jtrgkl},{t:this.ltrgss},{t:this.xtrggg},{t:this.ltrgQS},{t:this.xtrgff},{t:this.atrgdd},{t:this.jtrgck},{t:this.ltrggn},{t:this.xtrgoB},{t:this.ltrgch},{t:this.xtrgmm},{t:this.ktrgvv},{t:this.ktrgai},{t:this.ktrgaa},{t:this.ktrgoo},{t:this.ddndai},{t:this.mdndaa}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol107, new cjs.Rectangle(-72.3,-191.2,144.8,378), null);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndou = new lib.Symbol127();
	this.odndou.name = "odndou";
	this.odndou.setTransform(-50.4,60.3);

	this.hdndch = new lib.Symbol126();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-56.4,-140.45);

	this.pdndhp = new lib.Symbol125();
	this.pdndhp.name = "pdndhp";
	this.pdndhp.setTransform(-48.9,-23.15);

	this.xtrgch = new lib.chafafdndcopy();
	this.xtrgch.name = "xtrgch";
	this.xtrgch.setTransform(-58.15,-92.75,0.94,1.4602,0,0,0,0.2,0.1);

	this.xtrgua = new lib.chafafdndcopy();
	this.xtrgua.name = "xtrgua";
	this.xtrgua.setTransform(59.9,-93.15,0.94,1.4602,0,0,0,0.2,0.1);

	this.ltrgss = new lib.chafafdndcopy();
	this.ltrgss.name = "ltrgss";
	this.ltrgss.setTransform(30.9,-92.95,0.94,1.4602,0,0,0,0.2,0.1);

	this.jtrgvw = new lib.chafafdndcopy();
	this.jtrgvw.name = "jtrgvw";
	this.jtrgvw.setTransform(1.65,-93.3,0.94,1.4602);

	this.atrgxx = new lib.chafafdndcopy();
	this.atrgxx.name = "atrgxx";
	this.atrgxx.setTransform(-28.05,-92.95,0.94,1.4602,0,0,0,0.2,0.1);

	this.ktrgfd = new lib.chafafdndcopy();
	this.ktrgfd.name = "ktrgfd";
	this.ktrgfd.setTransform(48.5,138.9,1.4887,1.4602,0,0,0,0.2,0.1);

	this.ktrgou = new lib.chafafdndcopy();
	this.ktrgou.name = "ktrgou";
	this.ktrgou.setTransform(3.2,138.7,1.4887,1.4602,0,0,0,0.2,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(-43.5,138.9,1.4887,1.4602,0,0,0,0.1,0.1);

	this.ktrgaj = new lib.chafafdndcopy();
	this.ktrgaj.name = "ktrgaj";
	this.ktrgaj.setTransform(52.95,23.55,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(18.35,23.75,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgrf = new lib.chafafdndcopy();
	this.ktrgrf.name = "ktrgrf";
	this.ktrgrf.setTransform(-16.4,23.55,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrghp = new lib.chafafdndcopy();
	this.ktrghp.name = "ktrghp";
	this.ktrghp.setTransform(-52.2,23.75,1.1429,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(15.5,175.25,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-13.45,176.3,0.5884,0.5549,0,0,0,0.1,0.4);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-52.7,-174.05);

	this.rdndua = new lib.Symbol20_1();
	this.rdndua.name = "rdndua";
	this.rdndua.setTransform(47.6,-179.5);

	this.gdndfd = new lib.Symbol59();
	this.gdndfd.name = "gdndfd";
	this.gdndfd.setTransform(41.05,60.3);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-49.85,93.95);

	this.sdndrf = new lib.Symbol30copy();
	this.sdndrf.name = "sdndrf";
	this.sdndrf.setTransform(48.3,-60.55);

	this.xdndaj = new lib.Symbol27();
	this.xdndaj.name = "xdndaj";
	this.xdndaj.setTransform(47.6,-20.3);

	this.vdndvw = new lib.Symbol33copy();
	this.vdndvw.name = "vdndvw";
	this.vdndvw.setTransform(38.7,-149.65);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-47.55,-53.55);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(50.65,-127.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndxx},{t:this.fdndff},{t:this.vdndvw},{t:this.xdndaj},{t:this.sdndrf},{t:this.vdndvv},{t:this.gdndfd},{t:this.rdndua},{t:this.sdndss},{t:this.correctbtn},{t:this.replay},{t:this.ktrghp},{t:this.ktrgrf},{t:this.ktrgff},{t:this.ktrgaj},{t:this.ktrgvv},{t:this.ktrgou},{t:this.ktrgfd},{t:this.atrgxx},{t:this.jtrgvw},{t:this.ltrgss},{t:this.xtrgua},{t:this.xtrgch},{t:this.pdndhp},{t:this.hdndch},{t:this.odndou}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol106, new cjs.Rectangle(-72.3,-195.6,144.8,384.9), null);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.hdndch = new lib.Symbol126();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-55.05,-130.55);

	this.pdndhp = new lib.Symbol125();
	this.pdndhp.name = "pdndhp";
	this.pdndhp.setTransform(-51.25,-33.65);

	this.odndou = new lib.Symbol127();
	this.odndou.name = "odndou";
	this.odndou.setTransform(-54.5,107.15);

	this.xtrgax = new lib.chafafdndcopy();
	this.xtrgax.name = "xtrgax";
	this.xtrgax.setTransform(-65.1,23.75,0.5944,1.4602,0,0,0,0.1,0.1);

	this.xtrgtg = new lib.chafafdndcopy();
	this.xtrgtg.name = "xtrgtg";
	this.xtrgtg.setTransform(-59.1,-92.65,0.94,1.4602,0,0,0,0.2,0.1);

	this.xtrgqv = new lib.chafafdndcopy();
	this.xtrgqv.name = "xtrgqv";
	this.xtrgqv.setTransform(58.95,-93.05,0.94,1.4602,0,0,0,0.2,0.1);

	this.ltrgch = new lib.chafafdndcopy();
	this.ltrgch.name = "ltrgch";
	this.ltrgch.setTransform(29.95,-92.85,0.94,1.4602,0,0,0,0.2,0.1);

	this.jtrgfn = new lib.chafafdndcopy();
	this.jtrgfn.name = "jtrgfn";
	this.jtrgfn.setTransform(1,-93.05,0.94,1.4602,0,0,0,0.3,0.1);

	this.atrgzz = new lib.chafafdndcopy();
	this.atrgzz.name = "atrgzz";
	this.atrgzz.setTransform(-29,-92.85,0.94,1.4602,0,0,0,0.2,0.1);

	this.ktrgfd = new lib.chafafdndcopy();
	this.ktrgfd.name = "ktrgfd";
	this.ktrgfd.setTransform(57.3,138.75,1.2101,1.4602,0,0,0,0.1,0.1);

	this.ktrgou = new lib.chafafdndcopy();
	this.ktrgou.name = "ktrgou";
	this.ktrgou.setTransform(20.7,138.95,1.2101,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(-16.1,138.75,1.2101,1.4602,0,0,0,0.1,0.1);

	this.ktrgbb = new lib.chafafdndcopy();
	this.ktrgbb.name = "ktrgbb";
	this.ktrgbb.setTransform(-54,138.95,1.2101,1.4602,0,0,0,0.1,0.1);

	this.xtrgrr = new lib.chafafdndcopy();
	this.xtrgrr.name = "xtrgrr";
	this.xtrgrr.setTransform(-46.65,23.55,0.5944,1.4602,0,0,0,0.1,0.1);

	this.ptrgrr = new lib.chafafdndcopy();
	this.ptrgrr.name = "ptrgrr";
	this.ptrgrr.setTransform(-9.05,23.4,0.5944,1.4602,0,0,0,0.1,0.1);

	this.ltrgen = new lib.chafafdndcopy();
	this.ltrgen.name = "ltrgen";
	this.ltrgen.setTransform(-28.2,23.6,0.5944,1.4602,0,0,0,0.1,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(65.75,23,0.5944,1.4602,0,0,0,0.4,0.1);

	this.ltrgnn = new lib.chafafdndcopy();
	this.ltrgnn.name = "ltrgnn";
	this.ltrgnn.setTransform(47.3,23.2,0.5944,1.4602,0,0,0,0.2,0.1);

	this.jtrgdc = new lib.chafafdndcopy();
	this.jtrgdc.name = "jtrgdc";
	this.jtrgdc.setTransform(29.05,23,0.5944,1.4602,0,0,0,0.4,0.1);

	this.atrghp = new lib.chafafdndcopy();
	this.atrghp.name = "atrghp";
	this.atrghp.setTransform(10,23.2,0.5944,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.3,175.45,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.6,176.5,0.5884,0.5549,0,0,0,0.1,0.4);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-61.3,-173.4);

	this.odndtg = new lib.Symbol23copy();
	this.odndtg.name = "odndtg";
	this.odndtg.setTransform(45,-179.3);

	this.gdndfd = new lib.Symbol59();
	this.gdndfd.name = "gdndfd";
	this.gdndfd.setTransform(46.05,100.3);

	this.tdndnn = new lib.Symbol22_1();
	this.tdndnn.name = "tdndnn";
	this.tdndnn.setTransform(-31,-12.2);

	this.ddndrr = new lib.Symbol31copy();
	this.ddndrr.name = "ddndrr";
	this.ddndrr.setTransform(63.5,-36.1);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(-62.4,-55.1);

	this.bdndax = new lib.Symbol23copy();
	this.bdndax.name = "bdndax";
	this.bdndax.setTransform(-36.85,-56.55);

	this.xdndqv = new lib.Symbol27();
	this.xdndqv.name = "xdndqv";
	this.xdndqv.setTransform(38.95,-133.55);

	this.mdnddc = new lib.Symbol16_1();
	this.mdnddc.name = "mdnddc";
	this.mdnddc.setTransform(62.1,-58.6);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(54.25,61.9);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-57.6,56.4);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(38.95,-58.6);

	this.odnden = new lib.Symbol20_1();
	this.odnden.name = "odnden";
	this.odnden.setTransform(41.4,-15);

	this.fdndfn = new lib.Symbol24copy2();
	this.fdndfn.name = "fdndfn";
	this.fdndfn.setTransform(-52.75,-151.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndfn},{t:this.odnden},{t:this.xdndxx},{t:this.fdndff},{t:this.bdndbb},{t:this.mdnddc},{t:this.xdndqv},{t:this.bdndax},{t:this.kdndrr},{t:this.ddndrr},{t:this.tdndnn},{t:this.gdndfd},{t:this.odndtg},{t:this.mdndzz},{t:this.correctbtn},{t:this.replay},{t:this.atrghp},{t:this.jtrgdc},{t:this.ltrgnn},{t:this.xtrgxx},{t:this.ltrgen},{t:this.ptrgrr},{t:this.xtrgrr},{t:this.ktrgbb},{t:this.ktrgff},{t:this.ktrgou},{t:this.ktrgfd},{t:this.atrgzz},{t:this.jtrgfn},{t:this.ltrgch},{t:this.xtrgqv},{t:this.xtrgtg},{t:this.xtrgax},{t:this.odndou},{t:this.pdndhp},{t:this.hdndch}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol105, new cjs.Rectangle(-74,-194,147.7,383.5), null);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.hdndch = new lib.Symbol126();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-41.6,61.4);

	this.hdndco = new lib.Symbol126();
	this.hdndco.name = "hdndco";
	this.hdndco.setTransform(-49.8,-161.4);

	this.pdndhp = new lib.Symbol125();
	this.pdndhp.name = "pdndhp";
	this.pdndhp.setTransform(-46.35,-24.1);

	this.xtrgii = new lib.chafafdndcopy();
	this.xtrgii.name = "xtrgii";
	this.xtrgii.setTransform(-35.15,23.65,0.8209,1.4602,0,0,0,0.2,0.1);

	this.ltrgrr = new lib.chafafdndcopy();
	this.ltrgrr.name = "ltrgrr";
	this.ltrgrr.setTransform(-59.9,23.85,0.8209,1.4602,0,0,0,0.1,0.1);

	this.xtrgzs = new lib.chafafdndcopy();
	this.xtrgzs.name = "xtrgzs";
	this.xtrgzs.setTransform(63.9,23.25,0.8209,1.4602,0,0,0,0.2,0.1);

	this.ltrgcN = new lib.chafafdndcopy();
	this.ltrgcN.name = "ltrgcN";
	this.ltrgcN.setTransform(39.15,23.45,0.8209,1.4602,0,0,0,0.2,0.1);

	this.jtrghp = new lib.chafafdndcopy();
	this.jtrghp.name = "jtrghp";
	this.jtrghp.setTransform(14.35,23.25,0.8209,1.4602,0,0,0,0.2,0.1);

	this.atrgrr = new lib.chafafdndcopy();
	this.atrgrr.name = "atrgrr";
	this.atrgrr.setTransform(-10.7,23.3,0.8209,1.4602);

	this.ktrgre = new lib.chafafdndcopy();
	this.ktrgre.name = "ktrgre";
	this.ktrgre.setTransform(42.95,-92.05,1.2637,1.4602,0,0,0,0.1,0.1);

	this.ktrgmk = new lib.chafafdndcopy();
	this.ktrgmk.name = "ktrgmk";
	this.ktrgmk.setTransform(4.5,-92.25,1.2637,1.4602,0,0,0,0.1,0.1);

	this.ktrgco = new lib.chafafdndcopy();
	this.ktrgco.name = "ktrgco";
	this.ktrgco.setTransform(-35.05,-92.05,1.2637,1.4602,0,0,0,0.1,0.1);

	this.ktrgfd = new lib.chafafdndcopy();
	this.ktrgfd.name = "ktrgfd";
	this.ktrgfd.setTransform(57.75,138.3,1.2333,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(20.45,138.5,1.2333,1.4602,0,0,0,0.1,0.1);

	this.ktrguu = new lib.chafafdndcopy();
	this.ktrguu.name = "ktrguu";
	this.ktrguu.setTransform(-17.05,138.3,1.2333,1.4602,0,0,0,0.1,0.1);

	this.ktrgch = new lib.chafafdndcopy();
	this.ktrgch.name = "ktrgch";
	this.ktrgch.setTransform(-55.7,138.5,1.2333,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.4,175.2,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.5,176.1,0.5884,0.5549);

	this.wdndre = new lib.Symbol23copy();
	this.wdndre.name = "wdndre";
	this.wdndre.setTransform(43.4,-166.95);

	this.gdndfd = new lib.Symbol59();
	this.gdndfd.name = "gdndfd";
	this.gdndfd.setTransform(49.4,65.45);

	this.zdndss = new lib.Symbol58();
	this.zdndss.name = "zdndss";
	this.zdndss.setTransform(-53.25,99.25);

	this.NdndcN = new lib.Symbol43();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(53.55,-61.65);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(62.45,-19.45);

	this.ndndrr = new lib.Symbol31copy();
	this.ndndrr.name = "ndndrr";
	this.ndndrr.setTransform(-57.25,-56.15);

	this.adnduu = new lib.Symbol54();
	this.adnduu.name = "adnduu";
	this.adnduu.setTransform(48,102);

	this.idndii = new lib.Symbol20_1();
	this.idndii.name = "idndii";
	this.idndii.setTransform(-37.8,-50.6);

	this.sdndmk = new lib.Symbol30copy();
	this.sdndmk.name = "sdndmk";
	this.sdndmk.setTransform(43.95,-138.95);

	this.kdndzs = new lib.Symbol23copy();
	this.kdndzs.name = "kdndzs";
	this.kdndzs.setTransform(40.45,-42.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kdndzs},{t:this.sdndmk},{t:this.idndii},{t:this.adnduu},{t:this.ndndrr},{t:this.kdndrr},{t:this.NdndcN},{t:this.zdndss},{t:this.gdndfd},{t:this.wdndre},{t:this.correctbtn},{t:this.replay},{t:this.ktrgch},{t:this.ktrguu},{t:this.ktrgss},{t:this.ktrgfd},{t:this.ktrgco},{t:this.ktrgmk},{t:this.ktrgre},{t:this.atrgrr},{t:this.jtrghp},{t:this.ltrgcN},{t:this.xtrgzs},{t:this.ltrgrr},{t:this.xtrgii},{t:this.pdndhp},{t:this.hdndco},{t:this.hdndch}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol104, new cjs.Rectangle(-74.2,-181.7,149.10000000000002,370.9), null);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.hdndch = new lib.Symbol126();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-49.75,-137.25);

	this.pdndhp = new lib.Symbol125();
	this.pdndhp.name = "pdndhp";
	this.pdndhp.setTransform(-49.15,-26.4);

	this.xtrgzz = new lib.chafafdndcopy();
	this.xtrgzz.name = "xtrgzz";
	this.xtrgzz.setTransform(-56.5,135.5,0.94,1.4602,0,0,0,0.2,0.1);

	this.xtrgfd = new lib.chafafdndcopy();
	this.xtrgfd.name = "xtrgfd";
	this.xtrgfd.setTransform(61.55,135.1,0.94,1.4602,0,0,0,0.2,0.1);

	this.ltrgcc = new lib.chafafdndcopy();
	this.ltrgcc.name = "ltrgcc";
	this.ltrgcc.setTransform(32.55,135.3,0.94,1.4602,0,0,0,0.2,0.1);

	this.jtrgxx = new lib.chafafdndcopy();
	this.jtrgxx.name = "jtrgxx";
	this.jtrgxx.setTransform(3.6,135.1,0.94,1.4602,0,0,0,0.3,0.1);

	this.atrged = new lib.chafafdndcopy();
	this.atrged.name = "atrged";
	this.atrged.setTransform(-26.4,135.3,0.94,1.4602,0,0,0,0.2,0.1);

	this.ktrgjp = new lib.chafafdndcopy();
	this.ktrgjp.name = "ktrgjp";
	this.ktrgjp.setTransform(57.75,20.6,1.2333,1.4602,0,0,0,0.1,0.1);

	this.ktrguq = new lib.chafafdndcopy();
	this.ktrguq.name = "ktrguq";
	this.ktrguq.setTransform(20.45,20.8,1.2333,1.4602,0,0,0,0.1,0.1);

	this.ktrgza = new lib.chafafdndcopy();
	this.ktrgza.name = "ktrgza";
	this.ktrgza.setTransform(-17.05,20.6,1.2333,1.4602,0,0,0,0.1,0.1);

	this.ktrghp = new lib.chafafdndcopy();
	this.ktrghp.name = "ktrghp";
	this.ktrghp.setTransform(-55.7,20.8,1.2333,1.4602,0,0,0,0.1,0.1);

	this.ktrgto = new lib.chafafdndcopy();
	this.ktrgto.name = "ktrgto";
	this.ktrgto.setTransform(55.8,-95,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgch = new lib.chafafdndcopy();
	this.ktrgch.name = "ktrgch";
	this.ktrgch.setTransform(21.2,-94.8,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-13.55,-95,1.1429,1.4602,0,0,0,0.1,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(-49.35,-94.8,1.1429,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(20.95,172.45,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-8.05,173.35,0.5884,0.5549);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(43.45,-176.7);

	this.gdndfd = new lib.Symbol59();
	this.gdndfd.name = "gdndfd";
	this.gdndfd.setTransform(47.85,93.35);

	this.qdnduq = new lib.Symbol57();
	this.qdnduq.name = "qdnduq";
	this.qdnduq.setTransform(48.2,-60.75);

	this.vdnded = new lib.Symbol19_1();
	this.vdnded.name = "vdnded";
	this.vdnded.setTransform(-45,96.05);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-44.5,74.25);

	this.fdndcc = new lib.Symbol20_1();
	this.fdndcc.name = "fdndcc";
	this.fdndcc.setTransform(40.95,55.25);

	this.adndza = new lib.Symbol16_1();
	this.adndza.name = "adndza";
	this.adndza.setTransform(-52.7,-63.65);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-49.8,-169.45);

	this.xdndjp = new lib.Symbol27();
	this.xdndjp.name = "xdndjp";
	this.xdndjp.setTransform(61.95,-25.2);

	this.xdndto = new lib.Symbol27();
	this.xdndto.name = "xdndto";
	this.xdndto.setTransform(47.5,-141.7);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-58.1,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndxx},{t:this.xdndto},{t:this.xdndjp},{t:this.sdndss},{t:this.adndza},{t:this.fdndcc},{t:this.mdndzz},{t:this.vdnded},{t:this.qdnduq},{t:this.gdndfd},{t:this.vdndvv},{t:this.correctbtn},{t:this.replay},{t:this.ktrgvv},{t:this.ktrgss},{t:this.ktrgch},{t:this.ktrgto},{t:this.ktrghp},{t:this.ktrgza},{t:this.ktrguq},{t:this.ktrgjp},{t:this.atrged},{t:this.jtrgxx},{t:this.ltrgcc},{t:this.xtrgfd},{t:this.xtrgzz},{t:this.pdndhp},{t:this.hdndch}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol103, new cjs.Rectangle(-74.2,-189.5,148.60000000000002,376), null);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndoi = new lib.Symbol132();
	this.odndoi.name = "odndoi";
	this.odndoi.setTransform(-46.7,57.9);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(-36.3,23.8,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgAZ = new lib.chafafdndcopy();
	this.ltrgAZ.name = "ltrgAZ";
	this.ltrgAZ.setTransform(-61.35,24,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(61.3,23.4,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgAB = new lib.chafafdndcopy();
	this.ltrgAB.name = "ltrgAB";
	this.ltrgAB.setTransform(37.2,23.45,0.7769,1.4602);

	this.jtrgXC = new lib.chafafdndcopy();
	this.jtrgXC.name = "jtrgXC";
	this.jtrgXC.setTransform(13.35,23.4,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgyy = new lib.chafafdndcopy();
	this.atrgyy.name = "atrgyy";
	this.atrgyy.setTransform(-11.4,23.6,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrger = new lib.chafafdndcopy();
	this.xtrger.name = "xtrger";
	this.xtrger.setTransform(54.4,-91.75,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgfh = new lib.chafafdndcopy();
	this.ltrgfh.name = "ltrgfh";
	this.ltrgfh.setTransform(19.25,-91.55,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrguu = new lib.chafafdndcopy();
	this.jtrguu.name = "jtrguu";
	this.jtrguu.setTransform(-16.05,-91.75,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgaa = new lib.chafafdndcopy();
	this.atrgaa.name = "atrgaa";
	this.atrgaa.setTransform(-52.35,-91.55,1.1407,1.4602,0,0,0,0.2,0.1);

	this.xtrgea = new lib.chafafdndcopy();
	this.xtrgea.name = "xtrgea";
	this.xtrgea.setTransform(57.4,138.7,1.1854,1.4602,0,0,0,0.2,0.1);

	this.ltrgfp = new lib.chafafdndcopy();
	this.ltrgfp.name = "ltrgfp";
	this.ltrgfp.setTransform(20.85,138.9,1.1854,1.4602,0,0,0,0.2,0.1);

	this.jtrgoi = new lib.chafafdndcopy();
	this.jtrgoi.name = "jtrgoi";
	this.jtrgoi.setTransform(-15.8,138.7,1.1854,1.4602,0,0,0,0.2,0.1);

	this.atrgol = new lib.chafafdndcopy();
	this.atrgol.name = "atrgol";
	this.atrgol.setTransform(-53.55,138.9,1.1854,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.5,176.1,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.45,177.15,0.5884,0.5549,0,0,0,0.1,0.4);

	this.rdnder = new lib.Symbol73();
	this.rdnder.name = "rdnder";
	this.rdnder.setTransform(42.9,-180.35);

	this.ydndfh = new lib.Symbol23copy();
	this.ydndfh.name = "ydndfh";
	this.ydndfh.setTransform(-36.8,-167.45);

	this.edndyy = new lib.Symbol55();
	this.edndyy.name = "edndyy";
	this.edndyy.setTransform(56.3,-38.6);

	this.adnduu = new lib.Symbol54();
	this.adnduu.name = "adnduu";
	this.adnduu.setTransform(-57.15,-147.35);

	this.Udndea = new lib.Symbol56();
	this.Udndea.name = "Udndea";
	this.Udndea.setTransform(40.05,84.7);

	this.adndfp = new lib.Symbol24copy2();
	this.adndfp.name = "adndfp";
	this.adndfp.setTransform(39.05,56.55);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(44.3,-59.45);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-37.65,-36.3);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(54.15,-149.8);

	this.HdndAB = new lib.Symbol20_1();
	this.HdndAB.name = "HdndAB";
	this.HdndAB.setTransform(35.95,-26.1);

	this.WdndXC = new lib.Symbol25_1();
	this.WdndXC.name = "WdndXC";
	this.WdndXC.setTransform(-59.6,-61.5);

	this.ddndol = new lib.Symbol29();
	this.ddndol.name = "ddndol";
	this.ddndol.setTransform(-55.6,89.9);

	this.gdndAZ = new lib.Symbol23copy();
	this.gdndAZ.name = "gdndAZ";
	this.gdndAZ.setTransform(-57.65,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gdndAZ},{t:this.ddndol},{t:this.WdndXC},{t:this.HdndAB},{t:this.mdndaa},{t:this.xdndxx},{t:this.fdndff},{t:this.adndfp},{t:this.Udndea},{t:this.adnduu},{t:this.edndyy},{t:this.ydndfh},{t:this.rdnder},{t:this.correctbtn},{t:this.replay},{t:this.atrgol},{t:this.jtrgoi},{t:this.ltrgfp},{t:this.xtrgea},{t:this.atrgaa},{t:this.jtrguu},{t:this.ltrgfh},{t:this.xtrger},{t:this.atrgyy},{t:this.jtrgXC},{t:this.ltrgAB},{t:this.xtrgxx},{t:this.ltrgAZ},{t:this.xtrgff},{t:this.odndoi}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol102, new cjs.Rectangle(-73.1,-189.3,146.39999999999998,379.4), null);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(-63.05,24.75,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgvv = new lib.chafafdndcopy();
	this.xtrgvv.name = "xtrgvv";
	this.xtrgvv.setTransform(-19.85,24.6,0.6742,1.4602,0,0,0,0.2,0.1);

	this.ltrgqq = new lib.chafafdndcopy();
	this.ltrgqq.name = "ltrgqq";
	this.ltrgqq.setTransform(-41.6,24.8,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgkm = new lib.chafafdndcopy();
	this.xtrgkm.name = "xtrgkm";
	this.xtrgkm.setTransform(64.85,24.2,0.6742,1.4602,0,0,0,0.3,0.1);

	this.ltrgff = new lib.chafafdndcopy();
	this.ltrgff.name = "ltrgff";
	this.ltrgff.setTransform(44.05,24.4,0.6742,1.4602,0,0,0,0.2,0.1);

	this.jtrgyy = new lib.chafafdndcopy();
	this.jtrgyy.name = "jtrgyy";
	this.jtrgyy.setTransform(23.2,24.2,0.6742,1.4602,0,0,0,0.2,0.1);

	this.atrgqq = new lib.chafafdndcopy();
	this.atrgqq.name = "atrgqq";
	this.atrgqq.setTransform(1.75,24.4,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(55.3,-92.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgdd = new lib.chafafdndcopy();
	this.ltrgdd.name = "ltrgdd";
	this.ltrgdd.setTransform(20.15,-92.65,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrguu = new lib.chafafdndcopy();
	this.jtrguu.name = "jtrguu";
	this.jtrguu.setTransform(-15.15,-92.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrggb = new lib.chafafdndcopy();
	this.atrggb.name = "atrggb";
	this.atrggb.setTransform(-51.45,-92.65,1.1407,1.4602,0,0,0,0.2,0.1);

	this.xtrgea = new lib.chafafdndcopy();
	this.xtrgea.name = "xtrgea";
	this.xtrgea.setTransform(59.05,138.45,1.2018,1.4602,0,0,0,0.2,0.1);

	this.ltrgxk = new lib.chafafdndcopy();
	this.ltrgxk.name = "ltrgxk";
	this.ltrgxk.setTransform(22,138.65,1.2018,1.4602,0,0,0,0.2,0.1);

	this.jtrgcN = new lib.chafafdndcopy();
	this.jtrgcN.name = "jtrgcN";
	this.jtrgcN.setTransform(-15.2,138.45,1.2018,1.4602,0,0,0,0.2,0.1);

	this.atrgva = new lib.chafafdndcopy();
	this.atrgva.name = "atrgva";
	this.atrgva.setTransform(-53.45,138.65,1.2018,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(15.1,176.4,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-13.8,177.45,0.5884,0.5549,0,0,0,0.1,0.4);

	this.fdndgb = new lib.Symbol23copy();
	this.fdndgb.name = "fdndgb";
	this.fdndgb.setTransform(36.95,-166.8);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-46.45,-171.15);

	this.adnduu = new lib.Symbol54();
	this.adnduu.name = "adnduu";
	this.adnduu.setTransform(55.05,-147.25);

	this.Udndea = new lib.Symbol56();
	this.Udndea.name = "Udndea";
	this.Udndea.setTransform(46.6,86.05);

	this.edndyy = new lib.Symbol55();
	this.edndyy.name = "edndyy";
	this.edndyy.setTransform(-60.5,-50.7);

	this.NdndcN = new lib.Symbol43();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(-56.25,56.75);

	this.edndqq = new lib.Symbol18_1();
	this.edndqq.name = "edndqq";
	this.edndqq.setTransform(61.1,-52.6);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(37.25,-9.95);

	this.ndndxk = new lib.Symbol23copy();
	this.ndndxk.name = "ndndxk";
	this.ndndxk.setTransform(48.55,53.5);

	this.adndff = new lib.Symbol24copy2();
	this.adndff.name = "adndff";
	this.adndff.setTransform(45.25,-53.85);

	this.xdndkm = new lib.Symbol27();
	this.xdndkm.name = "xdndkm";
	this.xdndkm.setTransform(56.85,-20.45);

	this.vdndva = new lib.Symbol19_1();
	this.vdndva.name = "vdndva";
	this.vdndva.setTransform(-54.75,91.45);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(-54.25,-139.5);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-60.3,-13.15);

	this.sdndqq = new lib.Symbol18_1();
	this.sdndqq.name = "sdndqq";
	this.sdndqq.setTransform(-45.65,-33.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sdndqq},{t:this.fdndff},{t:this.ddnddd},{t:this.vdndva},{t:this.xdndkm},{t:this.adndff},{t:this.ndndxk},{t:this.vdndvv},{t:this.edndqq},{t:this.NdndcN},{t:this.edndyy},{t:this.Udndea},{t:this.adnduu},{t:this.xdndxx},{t:this.fdndgb},{t:this.correctbtn},{t:this.replay},{t:this.atrgva},{t:this.jtrgcN},{t:this.ltrgxk},{t:this.xtrgea},{t:this.atrggb},{t:this.jtrguu},{t:this.ltrgdd},{t:this.xtrgxx},{t:this.atrgqq},{t:this.jtrgyy},{t:this.ltrgff},{t:this.xtrgkm},{t:this.ltrgqq},{t:this.xtrgvv},{t:this.xtrgff}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol101, new cjs.Rectangle(-73.2,-184.6,148.4,375), null);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgyo = new lib.chafafdndcopy();
	this.xtrgyo.name = "xtrgyo";
	this.xtrgyo.setTransform(-35.75,23.95,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgtg = new lib.chafafdndcopy();
	this.ltrgtg.name = "ltrgtg";
	this.ltrgtg.setTransform(-60.8,24.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgqb = new lib.chafafdndcopy();
	this.xtrgqb.name = "xtrgqb";
	this.xtrgqb.setTransform(61.85,23.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgfr = new lib.chafafdndcopy();
	this.ltrgfr.name = "ltrgfr";
	this.ltrgfr.setTransform(37.9,23.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgvv = new lib.chafafdndcopy();
	this.jtrgvv.name = "jtrgvv";
	this.jtrgvv.setTransform(13.9,23.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgyy = new lib.chafafdndcopy();
	this.atrgyy.name = "atrgyy";
	this.atrgyy.setTransform(-10.85,23.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgvp = new lib.chafafdndcopy();
	this.xtrgvp.name = "xtrgvp";
	this.xtrgvp.setTransform(-36,-91.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrguu = new lib.chafafdndcopy();
	this.ltrguu.name = "ltrguu";
	this.ltrguu.setTransform(-61.05,-91.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(61.6,-92.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgch = new lib.chafafdndcopy();
	this.ltrgch.name = "ltrgch";
	this.ltrgch.setTransform(37.65,-91.95,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrggg = new lib.chafafdndcopy();
	this.jtrggg.name = "jtrggg";
	this.jtrggg.setTransform(13.65,-92.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgff = new lib.chafafdndcopy();
	this.atrgff.name = "atrgff";
	this.atrgff.setTransform(-11.1,-91.95,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgea = new lib.chafafdndcopy();
	this.xtrgea.name = "xtrgea";
	this.xtrgea.setTransform(57.1,138.9,1.1964,1.4602,0,0,0,0.2,0.1);

	this.ltrgdd = new lib.chafafdndcopy();
	this.ltrgdd.name = "ltrgdd";
	this.ltrgdd.setTransform(20.25,139.1,1.1964,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(-16.8,138.9,1.1964,1.4602,0,0,0,0.2,0.1);

	this.atrgnj = new lib.chafafdndcopy();
	this.atrgnj.name = "atrgnj";
	this.atrgnj.setTransform(-54.85,139.1,1.1964,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.7,176.2,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.2,177.1,0.5884,0.5549);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(-61.45,-180.35);

	this.vdndvp = new lib.Symbol23copy();
	this.vdndvp.name = "vdndvp";
	this.vdndvp.setTransform(48.7,-176.15);

	this.edndyy = new lib.Symbol55();
	this.edndyy.name = "edndyy";
	this.edndyy.setTransform(62.7,-45);

	this.Udndea = new lib.Symbol56();
	this.Udndea.name = "Udndea";
	this.Udndea.setTransform(-50.95,67.05);

	this.adnduu = new lib.Symbol54();
	this.adnduu.name = "adnduu";
	this.adnduu.setTransform(57.85,-133.4);

	this.hdndnj = new lib.Symbol46();
	this.hdndnj.name = "hdndnj";
	this.hdndnj.setTransform(49.15,58.85);

	this.hdndch = new lib.Symbol46();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-42.35,-154.95);

	this.hdndyo = new lib.Symbol18_1();
	this.hdndyo.name = "hdndyo";
	this.hdndyo.setTransform(55.65,-19.4);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-55.8,-15.95);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(50.75,90.75);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(32.8,-146.45);

	this.Jdndtg = new lib.Symbol20_1();
	this.Jdndtg.name = "Jdndtg";
	this.Jdndtg.setTransform(45,-55.05);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-57.75,101.2);

	this.fdndfr = new lib.Symbol24copy2();
	this.fdndfr.name = "fdndfr";
	this.fdndfr.setTransform(-59.35,-60.2);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-54.2,-128.2);

	this.xdndqb = new lib.Symbol27();
	this.xdndqb.name = "xdndqb";
	this.xdndqb.setTransform(-37.2,-36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndqb},{t:this.xdndxx},{t:this.fdndfr},{t:this.sdndss},{t:this.Jdndtg},{t:this.fdndff},{t:this.ddnddd},{t:this.vdndvv},{t:this.hdndyo},{t:this.hdndch},{t:this.hdndnj},{t:this.adnduu},{t:this.Udndea},{t:this.edndyy},{t:this.vdndvp},{t:this.gdndgg},{t:this.correctbtn},{t:this.replay},{t:this.atrgnj},{t:this.jtrgss},{t:this.ltrgdd},{t:this.xtrgea},{t:this.atrgff},{t:this.jtrggg},{t:this.ltrgch},{t:this.xtrgxx},{t:this.ltrguu},{t:this.xtrgvp},{t:this.atrgyy},{t:this.jtrgvv},{t:this.ltrgfr},{t:this.xtrgqb},{t:this.ltrgtg},{t:this.xtrgyo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol100, new cjs.Rectangle(-72.9,-193.5,146,383.7), null);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.idndin = new lib.Symbol133();
	this.idndin.name = "idndin";
	this.idndin.setTransform(47.8,-153.7);

	this.xtrgea = new lib.chafafdndcopy();
	this.xtrgea.name = "xtrgea";
	this.xtrgea.setTransform(56.85,137.25,1.1739,1.4602,0,0,0,0.2,0.1);

	this.ltrggh = new lib.chafafdndcopy();
	this.ltrggh.name = "ltrggh";
	this.ltrggh.setTransform(20.7,137.45,1.1739,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(-15.65,137.25,1.1739,1.4602,0,0,0,0.2,0.1);

	this.atrgbe = new lib.chafafdndcopy();
	this.atrgbe.name = "atrgbe";
	this.atrgbe.setTransform(-53,137.45,1.1739,1.4602,0,0,0,0.2,0.1);

	this.xtrgin = new lib.chafafdndcopy();
	this.xtrgin.name = "xtrgin";
	this.xtrgin.setTransform(55.15,-94.05,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrghp = new lib.chafafdndcopy();
	this.ltrghp.name = "ltrghp";
	this.ltrghp.setTransform(20,-93.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrguu = new lib.chafafdndcopy();
	this.jtrguu.name = "jtrguu";
	this.jtrguu.setTransform(-15.3,-94.05,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgee = new lib.chafafdndcopy();
	this.atrgee.name = "atrgee";
	this.atrgee.setTransform(-51.6,-93.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgxx = new lib.chafafdndcopy();
	this.atrgxx.name = "atrgxx";
	this.atrgxx.setTransform(60.7,22.1,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(31.15,21.9,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrgbb = new lib.chafafdndcopy();
	this.ltrgbb.name = "ltrgbb";
	this.ltrgbb.setTransform(1.3,22.1,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgyy = new lib.chafafdndcopy();
	this.jtrgyy.name = "jtrgyy";
	this.jtrgyy.setTransform(-28.65,21.9,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgze = new lib.chafafdndcopy();
	this.atrgze.name = "atrgze";
	this.atrgze.setTransform(-58.75,22.1,0.9684,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(20.45,174.75,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-8.55,175.65,0.5884,0.5549);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(-47.4,-179);

	this.adnduu = new lib.Symbol54();
	this.adnduu.name = "adnduu";
	this.adnduu.setTransform(38.8,-178.25);

	this.edndyy = new lib.Symbol55();
	this.edndyy.name = "edndyy";
	this.edndyy.setTransform(53.9,-53.95);

	this.Udndea = new lib.Symbol56();
	this.Udndea.name = "Udndea";
	this.Udndea.setTransform(50.45,93.5);

	this.zdndze = new lib.Symbol53();
	this.zdndze.name = "zdndze";
	this.zdndze.setTransform(-56.2,-14.5);

	this.pdndhp = new lib.Symbol52();
	this.pdndhp.name = "pdndhp";
	this.pdndhp.setTransform(-55.65,-151.75);

	this.sdndbb = new lib.Symbol34copy();
	this.sdndbb.name = "sdndbb";
	this.sdndbb.setTransform(-55.95,-48.15);

	this.hdndgh = new lib.Symbol23copy();
	this.hdndgh.name = "hdndgh";
	this.hdndgh.setTransform(-62.5,55.25);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-40.2,-32.05);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(48.6,-23.5);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-61.5,82.15);

	this.bdndbe = new lib.Symbol34copy();
	this.bdndbe.name = "bdndbe";
	this.bdndbe.setTransform(47.5,62.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bdndbe},{t:this.sdndss},{t:this.xdndxx},{t:this.fdndff},{t:this.hdndgh},{t:this.sdndbb},{t:this.pdndhp},{t:this.zdndze},{t:this.Udndea},{t:this.edndyy},{t:this.adnduu},{t:this.fdndee},{t:this.correctbtn},{t:this.replay},{t:this.atrgze},{t:this.jtrgyy},{t:this.ltrgbb},{t:this.xtrgff},{t:this.atrgxx},{t:this.atrgee},{t:this.jtrguu},{t:this.ltrghp},{t:this.xtrgin},{t:this.atrgbe},{t:this.jtrgss},{t:this.ltrggh},{t:this.xtrgea},{t:this.idndin}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol99, new cjs.Rectangle(-73.4,-195.5,147,384.3), null);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndou = new lib.Symbol127();
	this.odndou.name = "odndou";
	this.odndou.setTransform(-51.05,-171.7);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-52.3,-59.45);

	this.xtrgok = new lib.chafafdndcopy();
	this.xtrgok.name = "xtrgok";
	this.xtrgok.setTransform(57.45,23.8,0.8974,1.4602,0,0,0,0.3,0.1);

	this.atrgxx = new lib.chafafdndcopy();
	this.atrgxx.name = "atrgxx";
	this.atrgxx.setTransform(60.7,138.45,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrggg = new lib.chafafdndcopy();
	this.xtrggg.name = "xtrggg";
	this.xtrggg.setTransform(31.15,138.25,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrggf = new lib.chafafdndcopy();
	this.ltrggf.name = "ltrggf";
	this.ltrggf.setTransform(1.3,138.45,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgai = new lib.chafafdndcopy();
	this.jtrgai.name = "jtrgai";
	this.jtrgai.setTransform(-28.65,138.25,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgql = new lib.chafafdndcopy();
	this.atrgql.name = "atrgql";
	this.atrgql.setTransform(-58.75,138.45,0.9684,1.4602,0,0,0,0.2,0.1);

	this.xtrgzz = new lib.chafafdndcopy();
	this.xtrgzz.name = "xtrgzz";
	this.xtrgzz.setTransform(29.05,23.8,0.8974,1.4602,0,0,0,0.3,0.1);

	this.ltrgee = new lib.chafafdndcopy();
	this.ltrgee.name = "ltrgee";
	this.ltrgee.setTransform(1.4,24,0.8974,1.4602,0,0,0,0.3,0.1);

	this.jtrgin = new lib.chafafdndcopy();
	this.jtrgin.name = "jtrgin";
	this.jtrgin.setTransform(-26.45,23.8,0.8974,1.4602,0,0,0,0.1,0.1);

	this.atrgee = new lib.chafafdndcopy();
	this.atrgee.name = "atrgee";
	this.atrgee.setTransform(-55,24,0.8974,1.4602,0,0,0,0.1,0.1);

	this.ktrgdd = new lib.chafafdndcopy();
	this.ktrgdd.name = "ktrgdd";
	this.ktrgdd.setTransform(38.7,-92.3,1.2169,1.4602,0,0,0,0.2,0.1);

	this.ktrgou = new lib.chafafdndcopy();
	this.ktrgou.name = "ktrgou";
	this.ktrgou.setTransform(1.7,-92.1,1.2169,1.4602,0,0,0,0.1,0.1);

	this.ktrgrt = new lib.chafafdndcopy();
	this.ktrgrt.name = "ktrgrt";
	this.ktrgrt.setTransform(-35.3,-92.3,1.2169,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.55,171.65,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.4,172.7,0.5884,0.5549,0,0,0,0.1,0.4);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(44.7,57.85);

	this.adndai = new lib.Symbol51();
	this.adndai.name = "adndai";
	this.adndai.setTransform(47.35,88.45);

	this.idndin = new lib.Symbol50();
	this.idndin.name = "idndin";
	this.idndin.setTransform(57.15,-43.2);

	this.fdndql = new lib.Symbol20_1();
	this.fdndql.name = "fdndql";
	this.fdndql.setTransform(-58.65,100.5);

	this.gdndrt = new lib.Symbol20_1();
	this.gdndrt.name = "gdndrt";
	this.gdndrt.setTransform(47.1,-160.95);

	this.adndee = new lib.Symbol28_1();
	this.adndee.name = "adndee";
	this.adndee.setTransform(37,-11.7);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(-53.05,-143.1);

	this.jdndok = new lib.Symbol22_1();
	this.jdndok.name = "jdndok";
	this.jdndok.setTransform(30.85,-60.75);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(-58.65,-17.75);

	this.tdndgf = new lib.Symbol23copy();
	this.tdndgf.name = "tdndgf";
	this.tdndgf.setTransform(-45.6,75.9);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-60.95,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndxx},{t:this.tdndgf},{t:this.fdndee},{t:this.jdndok},{t:this.ddnddd},{t:this.adndee},{t:this.gdndrt},{t:this.fdndql},{t:this.idndin},{t:this.adndai},{t:this.gdndgg},{t:this.correctbtn},{t:this.replay},{t:this.ktrgrt},{t:this.ktrgou},{t:this.ktrgdd},{t:this.atrgee},{t:this.jtrgin},{t:this.ltrgee},{t:this.xtrgzz},{t:this.atrgql},{t:this.jtrgai},{t:this.ltrggf},{t:this.xtrggg},{t:this.atrgxx},{t:this.xtrgok},{t:this.mdndzz},{t:this.odndou}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol98, new cjs.Rectangle(-73.4,-186.6,147,372.29999999999995), null);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndou = new lib.Symbol127();
	this.odndou.name = "odndou";
	this.odndou.setTransform(-51,-138.8);

	this.xtrgxm = new lib.chafafdndcopy();
	this.xtrgxm.name = "xtrgxm";
	this.xtrgxm.setTransform(55.7,139.6,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgcc = new lib.chafafdndcopy();
	this.ltrgcc.name = "ltrgcc";
	this.ltrgcc.setTransform(20.55,139.8,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrggg = new lib.chafafdndcopy();
	this.jtrggg.name = "jtrggg";
	this.jtrggg.setTransform(-14.75,139.6,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgai = new lib.chafafdndcopy();
	this.atrgai.name = "atrgai";
	this.atrgai.setTransform(-51.05,139.8,1.1407,1.4602,0,0,0,0.2,0.1);

	this.xtrgin = new lib.chafafdndcopy();
	this.xtrgin.name = "xtrgin";
	this.xtrgin.setTransform(55.7,23.55,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgdd = new lib.chafafdndcopy();
	this.ltrgdd.name = "ltrgdd";
	this.ltrgdd.setTransform(20.55,23.75,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(-14.75,23.55,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgaa = new lib.chafafdndcopy();
	this.atrgaa.name = "atrgaa";
	this.atrgaa.setTransform(-51.05,23.75,1.1407,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(55.7,-92.65,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgjd = new lib.chafafdndcopy();
	this.ltrgjd.name = "ltrgjd";
	this.ltrgjd.setTransform(20.55,-92.45,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrgou = new lib.chafafdndcopy();
	this.jtrgou.name = "jtrgou";
	this.jtrgou.setTransform(-14.75,-92.65,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgff = new lib.chafafdndcopy();
	this.atrgff.name = "atrgff";
	this.atrgff.setTransform(-51.05,-92.45,1.1407,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.55,172.6,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.35,173.65,0.5884,0.5549,0,0,0,0.1,0.4);

	this.adndai = new lib.Symbol51();
	this.adndai.name = "adndai";
	this.adndai.setTransform(45.9,92.65);

	this.idndin = new lib.Symbol50();
	this.idndin.name = "idndin";
	this.idndin.setTransform(-57.65,-26.75);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(46.6,-28.7);

	this.gdndcc = new lib.Symbol20_1();
	this.gdndcc.name = "gdndcc";
	this.gdndcc.setTransform(-51.2,97.65);

	this.gdndgg = new lib.Symbol38();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(-55.6,58.45);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(45.2,-57.35);

	this.adndxm = new lib.Symbol27();
	this.adndxm.name = "adndxm";
	this.adndxm.setTransform(51.15,54.45);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(54.65,-151.3);

	this.udndjd = new lib.Symbol23copy();
	this.udndjd.name = "udndjd";
	this.udndjd.setTransform(49.45,-176.85);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-57.9,-175.75);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-59.9,-56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sdndss},{t:this.xdndxx},{t:this.udndjd},{t:this.fdndff},{t:this.adndxm},{t:this.ddnddd},{t:this.gdndgg},{t:this.gdndcc},{t:this.mdndaa},{t:this.idndin},{t:this.adndai},{t:this.correctbtn},{t:this.replay},{t:this.atrgff},{t:this.jtrgou},{t:this.ltrgjd},{t:this.xtrgxx},{t:this.atrgaa},{t:this.jtrgss},{t:this.ltrgdd},{t:this.xtrgin},{t:this.atrgai},{t:this.jtrggg},{t:this.ltrgcc},{t:this.xtrgxm},{t:this.odndou}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol97, new cjs.Rectangle(-70.8,-191.6,141.8,378.2), null);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndou = new lib.Symbol127();
	this.odndou.name = "odndou";
	this.odndou.setTransform(-44.7,-172.6);

	this.atrgii = new lib.chafafdndcopy();
	this.atrgii.name = "atrgii";
	this.atrgii.setTransform(60.7,-89.9,0.9684,1.4602,0,0,0,0.3,0.1);

	this.xtrgvv = new lib.chafafdndcopy();
	this.xtrgvv.name = "xtrgvv";
	this.xtrgvv.setTransform(31.15,-90.1,0.9684,1.4602,0,0,0,0.2,0.1);

	this.ltrgff = new lib.chafafdndcopy();
	this.ltrgff.name = "ltrgff";
	this.ltrgff.setTransform(1.3,-89.9,0.9684,1.4602,0,0,0,0.2,0.1);

	this.jtrgou = new lib.chafafdndcopy();
	this.jtrgou.name = "jtrgou";
	this.jtrgou.setTransform(-28.65,-90.1,0.9684,1.4602,0,0,0,0.2,0.1);

	this.atrgfn = new lib.chafafdndcopy();
	this.atrgfn.name = "atrgfn";
	this.atrgfn.setTransform(-58.75,-89.9,0.9684,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(56.6,141.75,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgaz = new lib.chafafdndcopy();
	this.ltrgaz.name = "ltrgaz";
	this.ltrgaz.setTransform(21.45,141.95,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrgai = new lib.chafafdndcopy();
	this.jtrgai.name = "jtrgai";
	this.jtrgai.setTransform(-13.85,141.75,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgkm = new lib.chafafdndcopy();
	this.atrgkm.name = "atrgkm";
	this.atrgkm.setTransform(-50.15,141.95,1.1407,1.4602,0,0,0,0.2,0.1);

	this.xtrgin = new lib.chafafdndcopy();
	this.xtrgin.name = "xtrgin";
	this.xtrgin.setTransform(55.05,25.65,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgll = new lib.chafafdndcopy();
	this.ltrgll.name = "ltrgll";
	this.ltrgll.setTransform(19.9,25.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrgou_1 = new lib.chafafdndcopy();
	this.jtrgou_1.name = "jtrgou_1";
	this.jtrgou_1.setTransform(-15.4,25.65,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgva = new lib.chafafdndcopy();
	this.atrgva.name = "atrgva";
	this.atrgva.setTransform(-51.7,25.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.1,174.05,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.8,174.95,0.5884,0.5549);

	this.adndai = new lib.Symbol51();
	this.adndai.name = "adndai";
	this.adndai.setTransform(51.8,67.85);

	this.idndin = new lib.Symbol50();
	this.idndin.name = "idndin";
	this.idndin.setTransform(-58.85,-22.6);

	this.odndou_1 = new lib.Symbol49();
	this.odndou_1.name = "odndou_1";
	this.odndou_1.setTransform(50.2,-56.7);

	this.mdndll = new lib.Symbol20_1();
	this.mdndll.name = "mdndll";
	this.mdndll.setTransform(-46,-49.6);

	this.odndkm = new lib.Symbol20_1();
	this.odndkm.name = "odndkm";
	this.odndkm.setTransform(-59.85,102.85);

	this.fdndfn = new lib.Symbol25_1();
	this.fdndfn.name = "fdndfn";
	this.fdndfn.setTransform(-51,-125.35);

	this.tdndaz = new lib.Symbol22_1();
	this.tdndaz.name = "tdndaz";
	this.tdndaz.setTransform(-60.45,62);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(57.65,-134.65);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-65.2,-154.4);

	this.vdndva = new lib.Symbol19_1();
	this.vdndva.name = "vdndva";
	this.vdndva.setTransform(49.45,-21.3);

	this.idndii = new lib.Symbol18_1();
	this.idndii.name = "idndii";
	this.idndii.setTransform(48.75,-170.65);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(46.6,97.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndxx},{t:this.idndii},{t:this.vdndva},{t:this.fdndff},{t:this.vdndvv},{t:this.tdndaz},{t:this.fdndfn},{t:this.odndkm},{t:this.mdndll},{t:this.odndou_1},{t:this.idndin},{t:this.adndai},{t:this.correctbtn},{t:this.replay},{t:this.atrgva},{t:this.jtrgou_1},{t:this.ltrgll},{t:this.xtrgin},{t:this.atrgkm},{t:this.jtrgai},{t:this.ltrgaz},{t:this.xtrgxx},{t:this.atrgfn},{t:this.jtrgou},{t:this.ltrgff},{t:this.xtrgvv},{t:this.atrgii},{t:this.odndou}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol96, new cjs.Rectangle(-73.4,-187.5,147,375.5), null);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndou = new lib.Symbol127();
	this.odndou.name = "odndou";
	this.odndou.setTransform(-57.9,-128.85);

	this.xtrgin = new lib.chafafdndcopy();
	this.xtrgin.name = "xtrgin";
	this.xtrgin.setTransform(55.75,23.1,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgdd = new lib.chafafdndcopy();
	this.ltrgdd.name = "ltrgdd";
	this.ltrgdd.setTransform(20.6,23.3,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(-14.7,23.1,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgkk = new lib.chafafdndcopy();
	this.atrgkk.name = "atrgkk";
	this.atrgkk.setTransform(-51,23.3,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ktrgaa = new lib.chafafdndcopy();
	this.ktrgaa.name = "ktrgaa";
	this.ktrgaa.setTransform(39.65,-92.85,1.2169,1.4602,0,0,0,0.2,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(2.65,-92.65,1.2169,1.4602,0,0,0,0.1,0.1);

	this.ktrgou = new lib.chafafdndcopy();
	this.ktrgou.name = "ktrgou";
	this.ktrgou.setTransform(-34.35,-92.85,1.2169,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(20.35,171.95,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-8.65,172.85,0.5884,0.5549);

	this.xtrgai = new lib.chafafdndcopy();
	this.xtrgai.name = "xtrgai";
	this.xtrgai.setTransform(55.8,138.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.ltrgom = new lib.chafafdndcopy();
	this.ltrgom.name = "ltrgom";
	this.ltrgom.setTransform(20.65,139.05,1.1407,1.4602,0,0,0,0.2,0.1);

	this.jtrgpn = new lib.chafafdndcopy();
	this.jtrgpn.name = "jtrgpn";
	this.jtrgpn.setTransform(-14.65,138.85,1.1407,1.4602,0,0,0,0.2,0.1);

	this.atrgbb = new lib.chafafdndcopy();
	this.atrgbb.name = "atrgbb";
	this.atrgbb.setTransform(-50.95,139.05,1.1407,1.4602,0,0,0,0.2,0.1);

	this.idndin = new lib.Symbol50();
	this.idndin.name = "idndin";
	this.idndin.setTransform(-57.75,-22.15);

	this.adndai = new lib.Symbol51();
	this.adndai.name = "adndai";
	this.adndai.setTransform(46.3,79.85);

	this.hdndkk = new lib.Symbol20_1();
	this.hdndkk.name = "hdndkk";
	this.hdndkk.setTransform(51.8,-60.65);

	this.tdndom = new lib.Symbol20_1();
	this.tdndom.name = "tdndom";
	this.tdndom.setTransform(26.85,57.45);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(58.95,-166.4);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(51.15,-18.45);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-59.8,-60.55);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(-35.9,95.85);

	this.sdndpn = new lib.Symbol30copy();
	this.sdndpn.name = "sdndpn";
	this.sdndpn.setTransform(-59.85,55.8);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-58.5,-177.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndff},{t:this.sdndpn},{t:this.bdndbb},{t:this.sdndss},{t:this.ddnddd},{t:this.mdndaa},{t:this.tdndom},{t:this.hdndkk},{t:this.adndai},{t:this.idndin},{t:this.atrgbb},{t:this.jtrgpn},{t:this.ltrgom},{t:this.xtrgai},{t:this.correctbtn},{t:this.replay},{t:this.ktrgou},{t:this.ktrgff},{t:this.ktrgaa},{t:this.atrgkk},{t:this.jtrgss},{t:this.ltrgdd},{t:this.xtrgin},{t:this.odndou}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol95, new cjs.Rectangle(-70.9,-188.3,142,374.3), null);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndoe = new lib.Symbol92();
	this.odndoe.name = "odndoe";
	this.odndoe.setTransform(51.8,-45.1);

	this.xtrgss = new lib.chafafdndcopy();
	this.xtrgss.name = "xtrgss";
	this.xtrgss.setTransform(-35.55,-95.35,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrger = new lib.chafafdndcopy();
	this.ltrger.name = "ltrger";
	this.ltrger.setTransform(-60.6,-95.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(62.05,-95.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgeu = new lib.chafafdndcopy();
	this.ltrgeu.name = "ltrgeu";
	this.ltrgeu.setTransform(38.1,-95.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgfc = new lib.chafafdndcopy();
	this.jtrgfc.name = "jtrgfc";
	this.jtrgfc.setTransform(14.1,-95.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgqq = new lib.chafafdndcopy();
	this.atrgqq.name = "atrgqq";
	this.atrgqq.setTransform(-10.65,-95.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ktrgxx = new lib.chafafdndcopy();
	this.ktrgxx.name = "ktrgxx";
	this.ktrgxx.setTransform(56.35,135.7,1.2089,1.4602,0,0,0,0.2,0.1);

	this.ktrgjm = new lib.chafafdndcopy();
	this.ktrgjm.name = "ktrgjm";
	this.ktrgjm.setTransform(20.15,135.9,1.2089,1.4602,0,0,0,0.1,0.1);

	this.ktrgoi = new lib.chafafdndcopy();
	this.ktrgoi.name = "ktrgoi";
	this.ktrgoi.setTransform(-16.45,136.1,1.2089,1.4602,0,0,0,0.1,0.1);

	this.ktrgdd = new lib.chafafdndcopy();
	this.ktrgdd.name = "ktrgdd";
	this.ktrgdd.setTransform(-53.1,135.9,1.2089,1.4602,0,0,0,0.2,0.1);

	this.ktrgee = new lib.chafafdndcopy();
	this.ktrgee.name = "ktrgee";
	this.ktrgee.setTransform(40.6,20.55,1.2775,1.4602,0,0,0,0.1,0.1);

	this.ktrgoe = new lib.chafafdndcopy();
	this.ktrgoe.name = "ktrgoe";
	this.ktrgoe.setTransform(1.9,20.75,1.2775,1.4602,0,0,0,0.1,0.1);

	this.ktrgza = new lib.chafafdndcopy();
	this.ktrgza.name = "ktrgza";
	this.ktrgza.setTransform(-36.95,20.55,1.2775,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(15,173.2,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-13.95,174.25,0.5884,0.5549,0,0,0,0.1,0.4);

	this.edndeu = new lib.Symbol47();
	this.edndeu.name = "edndeu";
	this.edndeu.setTransform(-53.55,-151.15);

	this.odndoi = new lib.Symbol48();
	this.odndoi.name = "odndoi";
	this.odndoi.setTransform(44.55,96.7);

	this.jdndza = new lib.Symbol22_1();
	this.jdndza.name = "jdndza";
	this.jdndza.setTransform(-60.65,-60.7);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(41.9,57.15);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(-54.75,-27.1);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-46,88.8);

	this.ddndfc = new lib.Symbol23copy();
	this.ddndfc.name = "ddndfc";
	this.ddndfc.setTransform(56.95,-150.3);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-54.75,-176.75);

	this.fdndjm = new lib.Symbol24copy2();
	this.fdndjm.name = "fdndjm";
	this.fdndjm.setTransform(-51.95,55.9);

	this.pdnder = new lib.Symbol25_1();
	this.pdnder.name = "pdnder";
	this.pdnder.setTransform(32.8,-167.9);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(60.4,-177.4);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-36.25,-177.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndff},{t:this.adndqq},{t:this.pdnder},{t:this.fdndjm},{t:this.sdndss},{t:this.ddndfc},{t:this.xdndxx},{t:this.fdndee},{t:this.ddnddd},{t:this.jdndza},{t:this.odndoi},{t:this.edndeu},{t:this.correctbtn},{t:this.replay},{t:this.ktrgza},{t:this.ktrgoe},{t:this.ktrgee},{t:this.ktrgdd},{t:this.ktrgoi},{t:this.ktrgjm},{t:this.ktrgxx},{t:this.atrgqq},{t:this.jtrgfc},{t:this.ltrgeu},{t:this.xtrgff},{t:this.ltrger},{t:this.xtrgss},{t:this.odndoe}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol94, new cjs.Rectangle(-72.3,-192.4,144.89999999999998,379.6), null);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mdndxx = new lib.Symbol15();
	this.mdndxx.name = "mdndxx";
	this.mdndxx.setTransform(40.6,75.1);

	this.xtrgfe = new lib.chafafdndcopy();
	this.xtrgfe.name = "xtrgfe";
	this.xtrgfe.setTransform(62.55,-93.35,0.6547,1.4602,0,0,0,0.4,0.1);

	this.odndeo = new lib.Symbol92();
	this.odndeo.name = "odndeo";
	this.odndeo.setTransform(-52,-39.2);

	this.atrgfe = new lib.chafafdndcopy();
	this.atrgfe.name = "atrgfe";
	this.atrgfe.setTransform(-40.25,-92.9,0.6547,1.4602,0,0,0,0.1,0.1);

	this.ltrgkj = new lib.chafafdndcopy();
	this.ltrgkj.name = "ltrgkj";
	this.ltrgkj.setTransform(-61.35,-92.7,0.6547,1.4602,0,0,0,0.1,0.1);

	this.xtrgeu = new lib.chafafdndcopy();
	this.xtrgeu.name = "xtrgeu";
	this.xtrgeu.setTransform(42.05,-93.3,0.6547,1.4602,0,0,0,0.4,0.1);

	this.mtrgkj = new lib.chafafdndcopy();
	this.mtrgkj.name = "mtrgkj";
	this.mtrgkj.setTransform(21.85,-93.1,0.6547,1.4602,0,0,0,0.2,0.1);

	this.jtrgqq = new lib.chafafdndcopy();
	this.jtrgqq.name = "jtrgqq";
	this.jtrgqq.setTransform(1.65,-93.3,0.6547,1.4602,0,0,0,0.4,0.1);

	this.atrgss = new lib.chafafdndcopy();
	this.atrgss.name = "atrgss";
	this.atrgss.setTransform(-19.25,-93.25,0.6547,1.4602);

	this.xtrgqx = new lib.chafafdndcopy();
	this.xtrgqx.name = "xtrgqx";
	this.xtrgqx.setTransform(-35.55,137.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgsx = new lib.chafafdndcopy();
	this.ltrgsx.name = "ltrgsx";
	this.ltrgsx.setTransform(-60.6,137.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(62.05,137.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrguk = new lib.chafafdndcopy();
	this.ltrguk.name = "ltrguk";
	this.ltrguk.setTransform(38.1,137.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgoi = new lib.chafafdndcopy();
	this.jtrgoi.name = "jtrgoi";
	this.jtrgoi.setTransform(14.1,137.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrguk = new lib.chafafdndcopy();
	this.atrguk.name = "atrguk";
	this.atrguk.setTransform(-10.65,137.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ktrgvn = new lib.chafafdndcopy();
	this.ktrgvn.name = "ktrgvn";
	this.ktrgvn.setTransform(40.85,22.05,1.2775,1.4602,0,0,0,0.1,0.1);

	this.ktrgeo = new lib.chafafdndcopy();
	this.ktrgeo.name = "ktrgeo";
	this.ktrgeo.setTransform(2.15,22.25,1.2775,1.4602,0,0,0,0.1,0.1);

	this.ktrgbb = new lib.chafafdndcopy();
	this.ktrgbb.name = "ktrgbb";
	this.ktrgbb.setTransform(-36.7,22.05,1.2775,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.3,174.7,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.6,175.75,0.5884,0.5549,0,0,0,0.1,0.4);

	this.edndeu = new lib.Symbol47();
	this.edndeu.name = "edndeu";
	this.edndeu.setTransform(41.9,-150);

	this.odndoi = new lib.Symbol48();
	this.odndoi.name = "odndoi";
	this.odndoi.setTransform(51.95,98.45);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-58.75,-178.95);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(49.3,-17.7);

	this.cdndvn = new lib.Symbol25_1();
	this.cdndvn.name = "cdndvn";
	this.cdndvn.setTransform(47.9,-55.4);

	this.fdndfe = new lib.Symbol24copy2();
	this.fdndfe.name = "fdndfe";
	this.fdndfe.setTransform(-57.15,-148.9);

	this.fdnduk = new lib.Symbol24copy2();
	this.fdnduk.name = "fdnduk";
	this.fdnduk.setTransform(-36.7,79.1);

	this.adndfe = new lib.Symbol24copy2();
	this.adndfe.name = "adndfe";
	this.adndfe.setTransform(64.45,-155.9);

	this.ldndkj = new lib.Symbol23copy();
	this.ldndkj.name = "ldndkj";
	this.ldndkj.setTransform(45.95,-176.25);

	this.ldndsx = new lib.Symbol23copy();
	this.ldndsx.name = "ldndsx";
	this.ldndsx.setTransform(-62.25,97.85);

	this.sdnduk = new lib.Symbol24copy2();
	this.sdnduk.name = "sdnduk";
	this.sdnduk.setTransform(49.3,55.3);

	this.ldndqx = new lib.Symbol18_1();
	this.ldndqx.name = "ldndqx";
	this.ldndqx.setTransform(-57.35,65.4);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-27.35,-149.15);

	this.kdndkj = new lib.Symbol23copy();
	this.kdndkj.name = "kdndkj";
	this.kdndkj.setTransform(-33.6,-173.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kdndkj},{t:this.sdndss},{t:this.ldndqx},{t:this.sdnduk},{t:this.ldndsx},{t:this.ldndkj},{t:this.adndfe},{t:this.fdnduk},{t:this.fdndfe},{t:this.cdndvn},{t:this.bdndbb},{t:this.adndqq},{t:this.odndoi},{t:this.edndeu},{t:this.correctbtn},{t:this.replay},{t:this.ktrgbb},{t:this.ktrgeo},{t:this.ktrgvn},{t:this.atrguk},{t:this.jtrgoi},{t:this.ltrguk},{t:this.xtrgxx},{t:this.ltrgsx},{t:this.xtrgqx},{t:this.atrgss},{t:this.jtrgqq},{t:this.mtrgkj},{t:this.xtrgeu},{t:this.ltrgkj},{t:this.atrgfe},{t:this.odndeo},{t:this.xtrgfe},{t:this.mdndxx}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol93, new cjs.Rectangle(-72.3,-193.9,144.8,382.6), null);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndeo = new lib.Symbol92();
	this.odndeo.name = "odndeo";
	this.odndeo.setTransform(42.35,-40.35);

	this.xtrgpc = new lib.chafafdndcopy();
	this.xtrgpc.name = "xtrgpc";
	this.xtrgpc.setTransform(-35.55,137.65,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgss = new lib.chafafdndcopy();
	this.ltrgss.name = "ltrgss";
	this.ltrgss.setTransform(-60.6,137.85,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgkm = new lib.chafafdndcopy();
	this.xtrgkm.name = "xtrgkm";
	this.xtrgkm.setTransform(62.05,137.25,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgpc = new lib.chafafdndcopy();
	this.ltrgpc.name = "ltrgpc";
	this.ltrgpc.setTransform(38.1,137.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgoi = new lib.chafafdndcopy();
	this.jtrgoi.name = "jtrgoi";
	this.jtrgoi.setTransform(14.1,137.25,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrggb = new lib.chafafdndcopy();
	this.atrggb.name = "atrggb";
	this.atrggb.setTransform(-10.65,137.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(-28.95,-92.65,0.8656,1.4602,0,0,0,0.1,0.1);

	this.ltrgch = new lib.chafafdndcopy();
	this.ltrgch.name = "ltrgch";
	this.ltrgch.setTransform(-56.85,-92.45,0.8656,1.4602,0,0,0,0.1,0.1);

	this.ltrgww = new lib.chafafdndcopy();
	this.ltrgww.name = "ltrgww";
	this.ltrgww.setTransform(53.1,-92.85,0.8656,1.4602,0,0,0,0.2,0.1);

	this.jtrgeu = new lib.chafafdndcopy();
	this.jtrgeu.name = "jtrgeu";
	this.jtrgeu.setTransform(26.35,-93.05,0.8656,1.4602,0,0,0,0.2,0.1);

	this.atrgvv = new lib.chafafdndcopy();
	this.atrgvv.name = "atrgvv";
	this.atrgvv.setTransform(-1.2,-92.85,0.8656,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.25,174.65,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.65,175.55,0.5884,0.5549);

	this.etrglz = new lib.chafafdndcopy();
	this.etrglz.name = "etrglz";
	this.etrglz.setTransform(21.4,23,1.3502,1.4602,0,0,0,0.2,0.1);

	this.dtrgeo = new lib.chafafdndcopy();
	this.dtrgeo.name = "dtrgeo";
	this.dtrgeo.setTransform(-23.05,23.2,1.3502,1.4602,0,0,0,0.1,0.1);

	this.edndeu = new lib.Symbol47();
	this.edndeu.name = "edndeu";
	this.edndeu.setTransform(47.65,-154.45);

	this.odndoi = new lib.Symbol48();
	this.odndoi.name = "odndoi";
	this.odndoi.setTransform(45.05,59.05);

	this.hdndch = new lib.Symbol46();
	this.hdndch.name = "hdndch";
	this.hdndch.setTransform(-35.1,-163.45);

	this.Xdndww = new lib.Symbol45();
	this.Xdndww.name = "Xdndww";
	this.Xdndww.setTransform(-58.8,-136.1);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(33.2,-178.75);

	this.ndndlz = new lib.Symbol25_1();
	this.ndndlz.name = "ndndlz";
	this.ndndlz.setTransform(-57.05,-40.35);

	this.fdndpc = new lib.Symbol24copy2();
	this.fdndpc.name = "fdndpc";
	this.fdndpc.setTransform(-62.5,105.45);

	this.gdndpc = new lib.Symbol24copy2();
	this.gdndpc.name = "gdndpc";
	this.gdndpc.setTransform(59.4,76.55);

	this.vdndgb = new lib.Symbol19_1();
	this.vdndgb.name = "vdndgb";
	this.vdndgb.setTransform(44.3,104.9);

	this.xdndkm = new lib.Symbol27();
	this.xdndkm.name = "xdndkm";
	this.xdndkm.setTransform(-47.7,84.4);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-67.3,55.5);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-58.25,-176.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vdndvv},{t:this.sdndss},{t:this.xdndkm},{t:this.vdndgb},{t:this.gdndpc},{t:this.fdndpc},{t:this.ndndlz},{t:this.xdndxx},{t:this.Xdndww},{t:this.hdndch},{t:this.odndoi},{t:this.edndeu},{t:this.dtrgeo},{t:this.etrglz},{t:this.correctbtn},{t:this.replay},{t:this.atrgvv},{t:this.jtrgeu},{t:this.ltrgww},{t:this.ltrgch},{t:this.xtrgxx},{t:this.atrggb},{t:this.jtrgoi},{t:this.ltrgpc},{t:this.xtrgkm},{t:this.ltrgss},{t:this.xtrgpc},{t:this.odndeo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol91, new cjs.Rectangle(-75.7,-192.2,148.2,380.79999999999995), null);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odndeo = new lib.Symbol92();
	this.odndeo.name = "odndeo";
	this.odndeo.setTransform(46.3,-48.2);

	this.xtrgoi = new lib.chafafdndcopy();
	this.xtrgoi.name = "xtrgoi";
	this.xtrgoi.setTransform(-35.55,130.65,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgvv = new lib.chafafdndcopy();
	this.ltrgvv.name = "ltrgvv";
	this.ltrgvv.setTransform(-60.6,130.85,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(62.05,130.25,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgmv = new lib.chafafdndcopy();
	this.ltrgmv.name = "ltrgmv";
	this.ltrgmv.setTransform(38.1,130.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrggg = new lib.chafafdndcopy();
	this.jtrggg.name = "jtrggg";
	this.jtrggg.setTransform(14.1,130.25,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgqx = new lib.chafafdndcopy();
	this.atrgqx.name = "atrgqx";
	this.atrgqx.setTransform(-10.8,130.3,0.7769,1.4602);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(19.5,167.35,0.5884,0.5549);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-9.45,168.35,0.5884,0.5549);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(44.4,14.85,1.2775,1.4602,0,0,0,0.1,0.1);

	this.ktrgeo = new lib.chafafdndcopy();
	this.ktrgeo.name = "ktrgeo";
	this.ktrgeo.setTransform(5.7,15.05,1.2775,1.4602,0,0,0,0.1,0.1);

	this.ktrgqq = new lib.chafafdndcopy();
	this.ktrgqq.name = "ktrgqq";
	this.ktrgqq.setTransform(-33.15,14.85,1.2775,1.4602,0,0,0,0.1,0.1);

	this.htrgeu = new lib.chafafdndcopy();
	this.htrgeu.name = "htrgeu";
	this.htrgeu.setTransform(26.7,-100.5,1.3245,1.4602,0,0,0,0.1,0.1);

	this.ktrgef = new lib.chafafdndcopy();
	this.ktrgef.name = "ktrgef";
	this.ktrgef.setTransform(-17.7,-100.45,1.3245,1.4602);

	this.odndoi = new lib.Symbol48();
	this.odndoi.name = "odndoi";
	this.odndoi.setTransform(55.55,96.4);

	this.edndeu = new lib.Symbol47();
	this.edndeu.name = "edndeu";
	this.edndeu.setTransform(-48.55,-171.55);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-47.1,-28.35);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-55.4,-67.2);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-61.1,82.65);

	this.ldndqx = new lib.Symbol23copy();
	this.ldndqx.name = "ldndqx";
	this.ldndqx.setTransform(-60.5,53.3);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(40.55,47.2);

	this.cdndef = new lib.Symbol25_1();
	this.cdndef.name = "cdndef";
	this.cdndef.setTransform(44.65,-170.75);

	this.fdndmv = new lib.Symbol24copy2();
	this.fdndmv.name = "fdndmv";
	this.fdndmv.setTransform(56.25,68.55);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-39.3,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndxx},{t:this.fdndmv},{t:this.cdndef},{t:this.gdndgg},{t:this.ldndqx},{t:this.vdndvv},{t:this.adndqq},{t:this.fdndff},{t:this.edndeu},{t:this.odndoi},{t:this.ktrgef},{t:this.htrgeu},{t:this.ktrgqq},{t:this.ktrgeo},{t:this.ktrgff},{t:this.correctbtn},{t:this.replay},{t:this.atrgqx},{t:this.jtrggg},{t:this.ltrgmv},{t:this.xtrgxx},{t:this.ltrgvv},{t:this.xtrgoi},{t:this.odndeo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol90, new cjs.Rectangle(-72.3,-185.1,144.8,366.6), null);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Odndoo = new lib.Symbol129();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(45.4,91);

	this.NdndcN = new lib.Symbol128();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(-51.4,-128.8);

	this.xtrgFB = new lib.chafafdndcopy();
	this.xtrgFB.name = "xtrgFB";
	this.xtrgFB.setTransform(62.35,-96.75,0.7828,1.4602,0,0,0,0.3,0.1);

	this.kdndkk = new lib.Symbol124();
	this.kdndkk.name = "kdndkk";
	this.kdndkk.setTransform(26,-172.75);

	this.xtrgvv = new lib.chafafdndcopy();
	this.xtrgvv.name = "xtrgvv";
	this.xtrgvv.setTransform(-58.15,134.1,0.94,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(59.9,133.7,0.94,1.4602,0,0,0,0.2,0.1);

	this.ltrgOM = new lib.chafafdndcopy();
	this.ltrgOM.name = "ltrgOM";
	this.ltrgOM.setTransform(30.9,133.9,0.94,1.4602,0,0,0,0.2,0.1);

	this.jtrgBN = new lib.chafafdndcopy();
	this.jtrgBN.name = "jtrgBN";
	this.jtrgBN.setTransform(1.95,133.7,0.94,1.4602,0,0,0,0.3,0.1);

	this.atrgoo = new lib.chafafdndcopy();
	this.atrgoo.name = "atrgoo";
	this.atrgoo.setTransform(-28.05,133.9,0.94,1.4602,0,0,0,0.2,0.1);

	this.xtrgkk = new lib.chafafdndcopy();
	this.xtrgkk.name = "xtrgkk";
	this.xtrgkk.setTransform(-60.6,-96.1,0.7828,1.4602,0,0,0,0.1,0.1);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(37.7,-96.5,0.7828,1.4602,0,0,0,0.2,0.1);

	this.ltrgFB = new lib.chafafdndcopy();
	this.ltrgFB.name = "ltrgFB";
	this.ltrgFB.setTransform(13.55,-96.3,0.7828,1.4602,0,0,0,0.2,0.1);

	this.jtrggg = new lib.chafafdndcopy();
	this.jtrggg.name = "jtrggg";
	this.jtrggg.setTransform(-10.6,-96.5,0.7828,1.4602,0,0,0,0.2,0.1);

	this.atrgcN = new lib.chafafdndcopy();
	this.atrgcN.name = "atrgcN";
	this.atrgcN.setTransform(-35.5,-96.3,0.7828,1.4602,0,0,0,0.2,0.1);

	this.xtrguk = new lib.chafafdndcopy();
	this.xtrguk.name = "xtrguk";
	this.xtrguk.setTransform(52.6,19.85,1.085,1.4602,0,0,0,0.2,0.1);

	this.ltrgzn = new lib.chafafdndcopy();
	this.ltrgzn.name = "ltrgzn";
	this.ltrgzn.setTransform(19.15,20.05,1.085,1.4602,0,0,0,0.2,0.1);

	this.jtrgrl = new lib.chafafdndcopy();
	this.jtrgrl.name = "jtrgrl";
	this.jtrgrl.setTransform(-14.4,19.85,1.085,1.4602,0,0,0,0.2,0.1);

	this.atrgKM = new lib.chafafdndcopy();
	this.atrgKM.name = "atrgKM";
	this.atrgKM.setTransform(-48.95,20.05,1.085,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.45,171,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.5,172.05,0.5884,0.5549,0,0,0,0.1,0.4);

	this.hdndKM = new lib.Symbol44();
	this.hdndKM.name = "hdndKM";
	this.hdndKM.setTransform(-52.85,-21.8);

	this.UdndFB = new lib.Symbol42();
	this.UdndFB.name = "UdndFB";
	this.UdndFB.setTransform(56.75,-137.2);

	this.Ndndzn = new lib.Symbol43();
	this.Ndndzn.name = "Ndndzn";
	this.Ndndzn.setTransform(48.55,-50.1);

	this.FdndFB = new lib.Symbol42();
	this.FdndFB.name = "FdndFB";
	this.FdndFB.setTransform(-52.85,-175.1);

	this.gdndrl = new lib.Symbol25_1();
	this.gdndrl.name = "gdndrl";
	this.gdndrl.setTransform(-51.75,-50.15);

	this.jdndBN = new lib.Symbol23copy();
	this.jdndBN.name = "jdndBN";
	this.jdndBN.setTransform(39.3,65.65);

	this.gdndgg = new lib.Symbol38();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(59.9,-164.5);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-59.1,83.4);

	this.fdndOM = new lib.Symbol24copy2();
	this.fdndOM.name = "fdndOM";
	this.fdndOM.setTransform(-34.35,99.9);

	this.hdnduk = new lib.Symbol23copy();
	this.hdnduk.name = "hdnduk";
	this.hdnduk.setTransform(47,-22.6);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-53.75,-153.1);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-48.85,61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vdndvv},{t:this.fdndff},{t:this.hdnduk},{t:this.fdndOM},{t:this.xdndxx},{t:this.gdndgg},{t:this.jdndBN},{t:this.gdndrl},{t:this.FdndFB},{t:this.Ndndzn},{t:this.UdndFB},{t:this.hdndKM},{t:this.correctbtn},{t:this.replay},{t:this.atrgKM},{t:this.jtrgrl},{t:this.ltrgzn},{t:this.xtrguk},{t:this.atrgcN},{t:this.jtrggg},{t:this.ltrgFB},{t:this.xtrgff},{t:this.xtrgkk},{t:this.atrgoo},{t:this.jtrgBN},{t:this.ltrgOM},{t:this.xtrgxx},{t:this.xtrgvv},{t:this.kdndkk},{t:this.xtrgFB},{t:this.NdndcN},{t:this.Odndoo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol89, new cjs.Rectangle(-72.3,-189.3,145.1,374.3), null);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Odndoo = new lib.Symbol129();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(51.55,94.85);

	this.NdndcN = new lib.Symbol128();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(-51.9,-132.3);

	this.xtrgrr = new lib.chafafdndcopy();
	this.xtrgrr.name = "xtrgrr";
	this.xtrgrr.setTransform(-35.55,-95.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgdd = new lib.chafafdndcopy();
	this.ltrgdd.name = "ltrgdd";
	this.ltrgdd.setTransform(-60.6,-94.9,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgcN = new lib.chafafdndcopy();
	this.xtrgcN.name = "xtrgcN";
	this.xtrgcN.setTransform(62.05,-95.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgqq = new lib.chafafdndcopy();
	this.ltrgqq.name = "ltrgqq";
	this.ltrgqq.setTransform(38.1,-95.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgTB = new lib.chafafdndcopy();
	this.jtrgTB.name = "jtrgTB";
	this.jtrgTB.setTransform(14.1,-95.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgQW = new lib.chafafdndcopy();
	this.atrgQW.name = "atrgQW";
	this.atrgQW.setTransform(-10.65,-95.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgPN = new lib.chafafdndcopy();
	this.xtrgPN.name = "xtrgPN";
	this.xtrgPN.setTransform(50.4,20.6,1.085,1.4602,0,0,0,0.2,0.1);

	this.ltrgoj = new lib.chafafdndcopy();
	this.ltrgoj.name = "ltrgoj";
	this.ltrgoj.setTransform(16.95,20.8,1.085,1.4602,0,0,0,0.2,0.1);

	this.jtrgdb = new lib.chafafdndcopy();
	this.jtrgdb.name = "jtrgdb";
	this.jtrgdb.setTransform(-16.6,20.6,1.085,1.4602,0,0,0,0.2,0.1);

	this.atrgvv = new lib.chafafdndcopy();
	this.atrgvv.name = "atrgvv";
	this.atrgvv.setTransform(-51.15,20.8,1.085,1.4602,0,0,0,0.2,0.1);

	this.xtrgoo = new lib.chafafdndcopy();
	this.xtrgoo.name = "xtrgoo";
	this.xtrgoo.setTransform(52.55,134.7,1.085,1.4602,0,0,0,0.2,0.1);

	this.ltrgkl = new lib.chafafdndcopy();
	this.ltrgkl.name = "ltrgkl";
	this.ltrgkl.setTransform(19.1,134.9,1.085,1.4602,0,0,0,0.2,0.1);

	this.jtrgFB = new lib.chafafdndcopy();
	this.jtrgFB.name = "jtrgFB";
	this.jtrgFB.setTransform(-14.45,134.7,1.085,1.4602,0,0,0,0.2,0.1);

	this.atrgva = new lib.chafafdndcopy();
	this.atrgva.name = "atrgva";
	this.atrgva.setTransform(-49,134.9,1.085,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.25,171.95,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15.65,173,0.5884,0.5549,0,0,0,0.1,0.4);

	this.UdndFB = new lib.Symbol42();
	this.UdndFB.name = "UdndFB";
	this.UdndFB.setTransform(-55.05,55.8);

	this.gdnddb = new lib.Symbol44();
	this.gdnddb.name = "gdnddb";
	this.gdnddb.setTransform(42.25,-35);

	this.OdndPN = new lib.Symbol41();
	this.OdndPN.name = "OdndPN";
	this.OdndPN.setTransform(-52.9,-36);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(41.55,-135.3);

	this.vdndva = new lib.Symbol19_1();
	this.vdndva.name = "vdndva";
	this.vdndva.setTransform(53.6,60.55);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(48.2,-62.05);

	this.tdndoj = new lib.Symbol23copy();
	this.tdndoj.name = "tdndoj";
	this.tdndoj.setTransform(-52.3,-60.9);

	this.pdndkl = new lib.Symbol23copy();
	this.pdndkl.name = "pdndkl";
	this.pdndkl.setTransform(-63.25,89.55);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-26.7,-178.1);

	this.JdndTB = new lib.Symbol18_1();
	this.JdndTB.name = "JdndTB";
	this.JdndTB.setTransform(62.35,-155.7);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(-61.3,-168.4);

	this.SdndQW = new lib.Symbol20_1();
	this.SdndQW.name = "SdndQW";
	this.SdndQW.setTransform(41.05,-177.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAEIAAgIIABAAIAAAIg");
	this.shape.setTransform(-13.05,186.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.SdndQW},{t:this.ddnddd},{t:this.JdndTB},{t:this.adndqq},{t:this.pdndkl},{t:this.tdndoj},{t:this.vdndvv},{t:this.vdndva},{t:this.kdndrr},{t:this.OdndPN},{t:this.gdnddb},{t:this.UdndFB},{t:this.correctbtn},{t:this.replay},{t:this.atrgva},{t:this.jtrgFB},{t:this.ltrgkl},{t:this.xtrgoo},{t:this.atrgvv},{t:this.jtrgdb},{t:this.ltrgoj},{t:this.xtrgPN},{t:this.atrgQW},{t:this.jtrgTB},{t:this.ltrgqq},{t:this.xtrgcN},{t:this.ltrgdd},{t:this.xtrgrr},{t:this.NdndcN},{t:this.Odndoo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol88, new cjs.Rectangle(-72.3,-194,144.8,381.1), null);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Odndoo = new lib.Symbol129();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(51,64);

	this.NdndcN = new lib.Symbol128();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(-53.25,-125.6);

	this.xtrgcN = new lib.chafafdndcopy();
	this.xtrgcN.name = "xtrgcN";
	this.xtrgcN.setTransform(-35.55,-91.9,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgaa = new lib.chafafdndcopy();
	this.ltrgaa.name = "ltrgaa";
	this.ltrgaa.setTransform(-60.6,-91.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgqq = new lib.chafafdndcopy();
	this.xtrgqq.name = "xtrgqq";
	this.xtrgqq.setTransform(62.05,-92.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgjm = new lib.chafafdndcopy();
	this.ltrgjm.name = "ltrgjm";
	this.ltrgjm.setTransform(38.1,-92.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(14.1,-92.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgee = new lib.chafafdndcopy();
	this.atrgee.name = "atrgee";
	this.atrgee.setTransform(-10.65,-92.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(53.35,24.3,1.085,1.4602,0,0,0,0.2,0.1);

	this.ltrgzv = new lib.chafafdndcopy();
	this.ltrgzv.name = "ltrgzv";
	this.ltrgzv.setTransform(19.9,24.5,1.085,1.4602,0,0,0,0.2,0.1);

	this.jtrgrl = new lib.chafafdndcopy();
	this.jtrgrl.name = "jtrgrl";
	this.jtrgrl.setTransform(-13.65,24.3,1.085,1.4602,0,0,0,0.2,0.1);

	this.atrgzv = new lib.chafafdndcopy();
	this.atrgzv.name = "atrgzv";
	this.atrgzv.setTransform(-48.2,24.5,1.085,1.4602,0,0,0,0.2,0.1);

	this.xtrgoo = new lib.chafafdndcopy();
	this.xtrgoo.name = "xtrgoo";
	this.xtrgoo.setTransform(52.3,139.6,1.085,1.4602,0,0,0,0.2,0.1);

	this.ltrgfs = new lib.chafafdndcopy();
	this.ltrgfs.name = "ltrgfs";
	this.ltrgfs.setTransform(18.85,139.8,1.085,1.4602,0,0,0,0.2,0.1);

	this.jtrgyb = new lib.chafafdndcopy();
	this.jtrgyb.name = "jtrgyb";
	this.jtrgyb.setTransform(-14.7,139.6,1.085,1.4602,0,0,0,0.2,0.1);

	this.atrgxm = new lib.chafafdndcopy();
	this.atrgxm.name = "atrgxm";
	this.atrgxm.setTransform(-49.25,139.8,1.085,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.9,175.5,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15,176.4,0.5884,0.5549);

	this.tdndrl = new lib.Symbol44();
	this.tdndrl.name = "tdndrl";
	this.tdndrl.setTransform(52.65,-19.1);

	this.ddndjm = new lib.Symbol20_1();
	this.ddndjm.name = "ddndjm";
	this.ddndjm.setTransform(19.8,-168.15);

	this.xdndqq = new lib.Symbol27();
	this.xdndqq.name = "xdndqq";
	this.xdndqq.setTransform(-60.6,-173.9);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(50.45,-126.2);

	this.vdndyb = new lib.Symbol33copy();
	this.vdndyb.name = "vdndyb";
	this.vdndyb.setTransform(-56.4,63.45);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(-50.2,-151.6);

	this.sdndxm = new lib.Symbol30copy();
	this.sdndxm.name = "sdndxm";
	this.sdndxm.setTransform(-59.9,99.65);

	this.idndfs = new lib.Symbol18_1();
	this.idndfs.name = "idndfs";
	this.idndfs.setTransform(50.45,98.25);

	this.jdndzv = new lib.Symbol23copy();
	this.jdndzv.name = "jdndzv";
	this.jdndzv.setTransform(-58.2,-20.05);

	this.ndndzv = new lib.Symbol23copy();
	this.ndndzv.name = "ndndzv";
	this.ndndzv.setTransform(38.8,-53.9);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-58.2,-56.4);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(55.05,-172.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndee},{t:this.xdndxx},{t:this.ndndzv},{t:this.jdndzv},{t:this.idndfs},{t:this.sdndxm},{t:this.mdndaa},{t:this.vdndyb},{t:this.sdndss},{t:this.xdndqq},{t:this.ddndjm},{t:this.tdndrl},{t:this.correctbtn},{t:this.replay},{t:this.atrgxm},{t:this.jtrgyb},{t:this.ltrgfs},{t:this.xtrgoo},{t:this.atrgzv},{t:this.jtrgrl},{t:this.ltrgzv},{t:this.xtrgxx},{t:this.atrgee},{t:this.jtrgss},{t:this.ltrgjm},{t:this.xtrgqq},{t:this.ltrgaa},{t:this.xtrgcN},{t:this.NdndcN},{t:this.Odndoo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol87, new cjs.Rectangle(-72.3,-189,144.8,378.5), null);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Odndoo = new lib.Symbol129();
	this.Odndoo.name = "Odndoo";
	this.Odndoo.setTransform(49.95,98.15);

	this.NdndcN = new lib.Symbol128();
	this.NdndcN.name = "NdndcN";
	this.NdndcN.setTransform(-50.05,-135.25);

	this.xtrgzz = new lib.chafafdndcopy();
	this.xtrgzz.name = "xtrgzz";
	this.xtrgzz.setTransform(-27.05,-93.75,0.8781,1.4602,0,0,0,0.1,0.1);

	this.ltrgvv = new lib.chafafdndcopy();
	this.ltrgvv.name = "ltrgvv";
	this.ltrgvv.setTransform(-55.4,-93.55,0.8781,1.4602,0,0,0,0.1,0.1);

	this.ltrgcN = new lib.chafafdndcopy();
	this.ltrgcN.name = "ltrgcN";
	this.ltrgcN.setTransform(56.2,-93.95,0.8781,1.4602,0,0,0,0.3,0.1);

	this.jtrgqq = new lib.chafafdndcopy();
	this.jtrgqq.name = "jtrgqq";
	this.jtrgqq.setTransform(29.05,-94.15,0.8781,1.4602,0,0,0,0.2,0.1);

	this.atrgon = new lib.chafafdndcopy();
	this.atrgon.name = "atrgon";
	this.atrgon.setTransform(1.05,-93.95,0.8781,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(18.7,172.95,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-10.3,173.85,0.5884,0.5549);

	this.ktrgxw = new lib.chafafdndcopy();
	this.ktrgxw.name = "ktrgxw";
	this.ktrgxw.setTransform(39.35,21.45,1.1564,1.4602,0,0,0,0.1,0.1);

	this.ktrgpn = new lib.chafafdndcopy();
	this.ktrgpn.name = "ktrgpn";
	this.ktrgpn.setTransform(4.2,21.25,1.1564,1.4602,0,0,0,0.1,0.1);

	this.ktrgee = new lib.chafafdndcopy();
	this.ktrgee.name = "ktrgee";
	this.ktrgee.setTransform(-30.85,21.45,1.1564,1.4602,0,0,0,0.1,0.1);

	this.xtrgoo = new lib.chafafdndcopy();
	this.xtrgoo.name = "xtrgoo";
	this.xtrgoo.setTransform(53.85,136.6,1.085,1.4602,0,0,0,0.2,0.1);

	this.ltrggr = new lib.chafafdndcopy();
	this.ltrggr.name = "ltrggr";
	this.ltrggr.setTransform(20.4,136.8,1.085,1.4602,0,0,0,0.2,0.1);

	this.jtrgxa = new lib.chafafdndcopy();
	this.jtrgxa.name = "jtrgxa";
	this.jtrgxa.setTransform(-13.15,136.6,1.085,1.4602,0,0,0,0.2,0.1);

	this.atrgtb = new lib.chafafdndcopy();
	this.atrgtb.name = "atrgtb";
	this.atrgtb.setTransform(-47.7,136.8,1.085,1.4602,0,0,0,0.2,0.1);

	this.udndpn = new lib.Symbol44();
	this.udndpn.name = "udndpn";
	this.udndpn.setTransform(-54.15,-24.45);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(44.85,-173.15);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(46.95,-39.8);

	this.vdndtb = new lib.Symbol19_1();
	this.vdndtb.name = "vdndtb";
	this.vdndtb.setTransform(47.65,62);

	this.pdndgr = new lib.Symbol20_1();
	this.pdndgr.name = "pdndgr";
	this.pdndgr.setTransform(-62.65,94.8);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(46.95,-134.05);

	this.xdndxa = new lib.Symbol27();
	this.xdndxa.name = "xdndxa";
	this.xdndxa.setTransform(-62.15,60.6);

	this.hdndxw = new lib.Symbol23copy();
	this.hdndxw.name = "hdndxw";
	this.hdndxw.setTransform(-56.35,-53.2);

	this.fdndon = new lib.Symbol20_1();
	this.fdndon.name = "fdndon";
	this.fdndon.setTransform(-54.5,-167.25);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(63.35,-156.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.adndqq},{t:this.fdndon},{t:this.hdndxw},{t:this.xdndxa},{t:this.mdndzz},{t:this.pdndgr},{t:this.vdndtb},{t:this.fdndee},{t:this.vdndvv},{t:this.udndpn},{t:this.atrgtb},{t:this.jtrgxa},{t:this.ltrggr},{t:this.xtrgoo},{t:this.ktrgee},{t:this.ktrgpn},{t:this.ktrgxw},{t:this.correctbtn},{t:this.replay},{t:this.atrgon},{t:this.jtrgqq},{t:this.ltrgcN},{t:this.ltrgvv},{t:this.xtrgzz},{t:this.NdndcN},{t:this.Odndoo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol86, new cjs.Rectangle(-71.7,-186,143.8,373), null);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgdf = new lib.chafafdndcopy();
	this.xtrgdf.name = "xtrgdf";
	this.xtrgdf.setTransform(-34.45,24.25,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgxc = new lib.chafafdndcopy();
	this.ltrgxc.name = "ltrgxc";
	this.ltrgxc.setTransform(-59.5,24.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgzz = new lib.chafafdndcopy();
	this.xtrgzz.name = "xtrgzz";
	this.xtrgzz.setTransform(63.15,23.85,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrggn = new lib.chafafdndcopy();
	this.ltrggn.name = "ltrggn";
	this.ltrggn.setTransform(39.2,24.05,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgdf = new lib.chafafdndcopy();
	this.jtrgdf.name = "jtrgdf";
	this.jtrgdf.setTransform(15.2,23.85,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgvv = new lib.chafafdndcopy();
	this.atrgvv.name = "atrgvv";
	this.atrgvv.setTransform(-9.55,24.05,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgse = new lib.chafafdndcopy();
	this.xtrgse.name = "xtrgse";
	this.xtrgse.setTransform(-54.2,139.1,0.9001,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(58.8,138.7,0.9001,1.4602,0,0,0,0.1,0.1);

	this.ltrgff = new lib.chafafdndcopy();
	this.ltrgff.name = "ltrgff";
	this.ltrgff.setTransform(31.1,138.9,0.9001,1.4602,0,0,0,0.2,0.1);

	this.jtrgpm = new lib.chafafdndcopy();
	this.jtrgpm.name = "jtrgpm";
	this.jtrgpm.setTransform(3.3,138.7,0.9001,1.4602,0,0,0,0.2,0.1);

	this.atrgff = new lib.chafafdndcopy();
	this.atrgff.name = "atrgff";
	this.atrgff.setTransform(-25.35,138.9,0.9001,1.4602,0,0,0,0.2,0.1);

	this.ktrgat = new lib.chafafdndcopy();
	this.ktrgat.name = "ktrgat";
	this.ktrgat.setTransform(45.7,-92.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrguu = new lib.chafafdndcopy();
	this.ktrguu.name = "ktrguu";
	this.ktrguu.setTransform(15.5,-92.15,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-16.5,-92.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgbb = new lib.chafafdndcopy();
	this.ktrgbb.name = "ktrgbb";
	this.ktrgbb.setTransform(-47.6,-92.75,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(16.2,172.85,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-12.75,173.9,0.5884,0.5549,0,0,0,0.1,0.4);

	this.udnduu = new lib.Symbol39();
	this.udnduu.name = "udnduu";
	this.udnduu.setTransform(-51.6,-138.65);

	this.ldndpm = new lib.Symbol34copy();
	this.ldndpm.name = "ldndpm";
	this.ldndpm.setTransform(59.55,59.55);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(41.05,-177.1);

	this.mdndgn = new lib.Symbol34copy();
	this.mdndgn.name = "mdndgn";
	this.mdndgn.setTransform(51.15,-37.1);

	this.fdndxc = new lib.Symbol20_1();
	this.fdndxc.name = "fdndxc";
	this.fdndxc.setTransform(-48.9,-35.8);

	this.xdndat = new lib.Symbol27();
	this.xdndat.name = "xdndat";
	this.xdndat.setTransform(-49.1,-176.6);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(57.05,98.3);

	this.sdnddf = new lib.Symbol30copy();
	this.sdnddf.name = "sdnddf";
	this.sdnddf.setTransform(-57.25,-9.7);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(54.95,-134.75);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-51.7,55.3);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-54.9,-58.3);

	this.rdndse = new lib.Symbol30copy();
	this.rdndse.name = "rdndse";
	this.rdndse.setTransform(-59.35,77.35);

	this.kdndff = new lib.Symbol24copy2();
	this.kdndff.name = "kdndff";
	this.kdndff.setTransform(-48.4,101.55);

	this.ednddf = new lib.Symbol30copy();
	this.ednddf.name = "ednddf";
	this.ednddf.setTransform(44.15,-58.9);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(35.25,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mdndzz},{t:this.ednddf},{t:this.kdndff},{t:this.rdndse},{t:this.vdndvv},{t:this.fdndff},{t:this.sdndss},{t:this.sdnddf},{t:this.xdndxx},{t:this.xdndat},{t:this.fdndxc},{t:this.mdndgn},{t:this.bdndbb},{t:this.ldndpm},{t:this.udnduu},{t:this.correctbtn},{t:this.replay},{t:this.ktrgbb},{t:this.ktrgss},{t:this.ktrguu},{t:this.ktrgat},{t:this.atrgff},{t:this.jtrgpm},{t:this.ltrgff},{t:this.xtrgxx},{t:this.xtrgse},{t:this.atrgvv},{t:this.jtrgdf},{t:this.ltrggn},{t:this.xtrgzz},{t:this.ltrgxc},{t:this.xtrgdf}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol85, new cjs.Rectangle(-71.2,-193.6,144.8,380.5), null);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgzz = new lib.chafafdndcopy();
	this.xtrgzz.name = "xtrgzz";
	this.xtrgzz.setTransform(-34.1,25.95,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgtt = new lib.chafafdndcopy();
	this.ltrgtt.name = "ltrgtt";
	this.ltrgtt.setTransform(-59.15,26.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxn = new lib.chafafdndcopy();
	this.xtrgxn.name = "xtrgxn";
	this.xtrgxn.setTransform(63.5,25.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ptrgtt = new lib.chafafdndcopy();
	this.ptrgtt.name = "ptrgtt";
	this.ptrgtt.setTransform(39.55,25.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(15.55,25.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgvv = new lib.chafafdndcopy();
	this.atrgvv.name = "atrgvv";
	this.atrgvv.setTransform(-9.2,25.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(-34.75,-90.25,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgdd = new lib.chafafdndcopy();
	this.ltrgdd.name = "ltrgdd";
	this.ltrgdd.setTransform(-59.8,-90.05,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx_1 = new lib.chafafdndcopy();
	this.xtrgxx_1.name = "xtrgxx_1";
	this.xtrgxx_1.setTransform(62.85,-90.65,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgdd_1 = new lib.chafafdndcopy();
	this.ltrgdd_1.name = "ltrgdd_1";
	this.ltrgdd_1.setTransform(38.9,-90.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgss_1 = new lib.chafafdndcopy();
	this.jtrgss_1.name = "jtrgss_1";
	this.jtrgss_1.setTransform(14.9,-90.65,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgqq = new lib.chafafdndcopy();
	this.atrgqq.name = "atrgqq";
	this.atrgqq.setTransform(-9.85,-90.45,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgsu = new lib.chafafdndcopy();
	this.xtrgsu.name = "xtrgsu";
	this.xtrgsu.setTransform(-63.05,141.2,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgff = new lib.chafafdndcopy();
	this.xtrgff.name = "xtrgff";
	this.xtrgff.setTransform(-19.85,141,0.6742,1.4602,0,0,0,0.2,0.1);

	this.ltrgbb = new lib.chafafdndcopy();
	this.ltrgbb.name = "ltrgbb";
	this.ltrgbb.setTransform(-41.6,141.2,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgth = new lib.chafafdndcopy();
	this.xtrgth.name = "xtrgth";
	this.xtrgth.setTransform(64.85,140.6,0.6742,1.4602,0,0,0,0.3,0.1);

	this.ltrgza = new lib.chafafdndcopy();
	this.ltrgza.name = "ltrgza";
	this.ltrgza.setTransform(44.05,140.8,0.6742,1.4602,0,0,0,0.2,0.1);

	this.jtrgqq = new lib.chafafdndcopy();
	this.jtrgqq.name = "jtrgqq";
	this.jtrgqq.setTransform(23.2,140.6,0.6742,1.4602,0,0,0,0.2,0.1);

	this.atrgbn = new lib.chafafdndcopy();
	this.atrgbn.name = "atrgbn";
	this.atrgbn.setTransform(1.75,140.8,0.6742,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(15,174.8,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-13.9,175.85,0.5884,0.5549,0,0,0,0.1,0.4);

	this.gdndgg = new lib.Symbol38();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(-54.95,-126.95);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(-45.55,75.5);

	this.mdndza = new lib.Symbol16_1();
	this.mdndza.name = "mdndza";
	this.mdndza.setTransform(42.6,103.15);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-62.45,-179.05);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-62.45,-149.65);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(46.05,-30.8);

	this.sdndss_1 = new lib.Symbol30copy();
	this.sdndss_1.name = "sdndss_1";
	this.sdndss_1.setTransform(41,-142.3);

	this.QdndSS = new lib.Symbol18_1();
	this.QdndSS.name = "QdndSS";
	this.QdndSS.setTransform(42.6,-173.4);

	this.mdndsu = new lib.Symbol30copy();
	this.mdndsu.name = "mdndsu";
	this.mdndsu.setTransform(-53.55,99.9);

	this.ldndbn = new lib.Symbol18_1();
	this.ldndbn.name = "ldndbn";
	this.ldndbn.setTransform(36.6,78.95);

	this.gdndth = new lib.Symbol23copy();
	this.gdndth.name = "gdndth";
	this.gdndth.setTransform(58.4,76.9);

	this.jdndtt = new lib.Symbol23copy();
	this.jdndtt.name = "jdndtt";
	this.jdndtt.setTransform(39.9,-62.7);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(49.5,54.9);

	this.LdndLL = new lib.Symbol20_1();
	this.LdndLL.name = "LdndLL";
	this.LdndLL.setTransform(63.15,-130.65);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-54.05,-56.7);

	this.gdndtt = new lib.Symbol23copy();
	this.gdndtt.name = "gdndtt";
	this.gdndtt.setTransform(-62.45,-14.4);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-49.05,-33.4);

	this.adndqq_1 = new lib.Symbol17_1();
	this.adndqq_1.name = "adndqq_1";
	this.adndqq_1.setTransform(-62.45,52.65);

	this.adndxn = new lib.Symbol27();
	this.adndxn.name = "adndxn";
	this.adndxn.setTransform(48.1,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.adndxn},{t:this.adndqq_1},{t:this.mdndzz},{t:this.gdndtt},{t:this.vdndvv},{t:this.LdndLL},{t:this.fdndff},{t:this.jdndtt},{t:this.gdndth},{t:this.ldndbn},{t:this.mdndsu},{t:this.QdndSS},{t:this.sdndss_1},{t:this.sdndss},{t:this.xdndxx},{t:this.adndqq},{t:this.mdndza},{t:this.bdndbb},{t:this.gdndgg},{t:this.correctbtn},{t:this.replay},{t:this.atrgbn},{t:this.jtrgqq},{t:this.ltrgza},{t:this.xtrgth},{t:this.ltrgbb},{t:this.xtrgff},{t:this.xtrgsu},{t:this.atrgqq},{t:this.jtrgss_1},{t:this.ltrgdd_1},{t:this.xtrgxx_1},{t:this.ltrgdd},{t:this.xtrgxx},{t:this.atrgvv},{t:this.jtrgss},{t:this.ptrgtt},{t:this.xtrgxn},{t:this.ltrgtt},{t:this.xtrgzz}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(-73.2,-194,147.10000000000002,382.8), null);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgqq = new lib.chafafdndcopy();
	this.xtrgqq.name = "xtrgqq";
	this.xtrgqq.setTransform(-55.7,22.3,0.9001,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(57.3,21.9,0.9001,1.4602,0,0,0,0.1,0.1);

	this.ltrgbb = new lib.chafafdndcopy();
	this.ltrgbb.name = "ltrgbb";
	this.ltrgbb.setTransform(29.6,22.1,0.9001,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(1.8,21.9,0.9001,1.4602,0,0,0,0.2,0.1);

	this.atrgff = new lib.chafafdndcopy();
	this.atrgff.name = "atrgff";
	this.atrgff.setTransform(-26.85,22.1,0.9001,1.4602,0,0,0,0.2,0.1);

	this.ktrgio = new lib.chafafdndcopy();
	this.ktrgio.name = "ktrgio";
	this.ktrgio.setTransform(46.95,-94.65,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgko = new lib.chafafdndcopy();
	this.ktrgko.name = "ktrgko";
	this.ktrgko.setTransform(16.75,-94.45,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrggg = new lib.chafafdndcopy();
	this.ktrggg.name = "ktrggg";
	this.ktrggg.setTransform(-15.25,-94.65,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-46.35,-95.05,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ltrgat = new lib.chafafdndcopy();
	this.ltrgat.name = "ltrgat";
	this.ltrgat.setTransform(52.05,137.15,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgkl = new lib.chafafdndcopy();
	this.ktrgkl.name = "ktrgkl";
	this.ktrgkl.setTransform(21.85,137.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgsd = new lib.chafafdndcopy();
	this.ktrgsd.name = "ktrgsd";
	this.ktrgsd.setTransform(-10.15,137.15,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgdd = new lib.chafafdndcopy();
	this.ktrgdd.name = "ktrgdd";
	this.ktrgdd.setTransform(-41.25,136.75,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.3,171.35,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.6,172.25,0.5884,0.5549);

	this.gdndgg = new lib.Symbol38();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(43.85,-173.95);

	this.idndsd = new lib.Symbol40();
	this.idndsd.name = "idndsd";
	this.idndsd.setTransform(-54.55,56.55);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(-56.9,-57.7);

	this.mdndat = new lib.Symbol16_1();
	this.mdndat.name = "mdndat";
	this.mdndat.setTransform(-60.2,89.55);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-54.8,-150.05);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(30.95,-61.4);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(49.95,-37.4);

	this.xdndio = new lib.Symbol27();
	this.xdndio.name = "xdndio";
	this.xdndio.setTransform(28.65,-150.05);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(45.25,-10.6);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-60.2,-15.3);

	this.bdndkl = new lib.Symbol22_1();
	this.bdndkl.name = "bdndkl";
	this.bdndkl.setTransform(40.85,94.75);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(52.45,57.95);

	this.fdndko = new lib.Symbol24copy2();
	this.fdndko.name = "fdndko";
	this.fdndko.setTransform(-55.75,-176.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndko},{t:this.ddnddd},{t:this.bdndkl},{t:this.fdndff},{t:this.sdndss},{t:this.xdndio},{t:this.xdndxx},{t:this.adndqq},{t:this.mdndzz},{t:this.mdndat},{t:this.bdndbb},{t:this.idndsd},{t:this.gdndgg},{t:this.correctbtn},{t:this.replay},{t:this.ktrgdd},{t:this.ktrgsd},{t:this.ktrgkl},{t:this.ltrgat},{t:this.ktrgzz},{t:this.ktrggg},{t:this.ktrgko},{t:this.ktrgio},{t:this.atrgff},{t:this.jtrgss},{t:this.ltrgbb},{t:this.xtrgxx},{t:this.xtrgqq}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol83, new cjs.Rectangle(-69.7,-187.6,139.2,372.9), null);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgmn = new lib.chafafdndcopy();
	this.xtrgmn.name = "xtrgmn";
	this.xtrgmn.setTransform(-36.7,25.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgqs = new lib.chafafdndcopy();
	this.ltrgqs.name = "ltrgqs";
	this.ltrgqs.setTransform(-61.75,25.95,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgee = new lib.chafafdndcopy();
	this.xtrgee.name = "xtrgee";
	this.xtrgee.setTransform(60.9,25.35,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgqs = new lib.chafafdndcopy();
	this.atrgqs.name = "atrgqs";
	this.atrgqs.setTransform(36.95,25.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgsa = new lib.chafafdndcopy();
	this.jtrgsa.name = "jtrgsa";
	this.jtrgsa.setTransform(12.95,25.35,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgcv = new lib.chafafdndcopy();
	this.atrgcv.name = "atrgcv";
	this.atrgcv.setTransform(-11.8,25.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgyy = new lib.chafafdndcopy();
	this.xtrgyy.name = "xtrgyy";
	this.xtrgyy.setTransform(-36,-90.3,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrguu = new lib.chafafdndcopy();
	this.ltrguu.name = "ltrguu";
	this.ltrguu.setTransform(-61.05,-90.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(61.6,-90.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgtr = new lib.chafafdndcopy();
	this.ltrgtr.name = "ltrgtr";
	this.ltrgtr.setTransform(37.65,-90.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(13.65,-90.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgff = new lib.chafafdndcopy();
	this.atrgff.name = "atrgff";
	this.atrgff.setTransform(-11.1,-90.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgdd = new lib.chafafdndcopy();
	this.xtrgdd.name = "xtrgdd";
	this.xtrgdd.setTransform(-63.8,141.45,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgmm = new lib.chafafdndcopy();
	this.xtrgmm.name = "xtrgmm";
	this.xtrgmm.setTransform(-20.6,141.3,0.6742,1.4602,0,0,0,0.2,0.1);

	this.ltrgxw = new lib.chafafdndcopy();
	this.ltrgxw.name = "ltrgxw";
	this.ltrgxw.setTransform(-42.35,141.5,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgfg = new lib.chafafdndcopy();
	this.xtrgfg.name = "xtrgfg";
	this.xtrgfg.setTransform(64.1,140.9,0.6742,1.4602,0,0,0,0.3,0.1);

	this.ltrgzz = new lib.chafafdndcopy();
	this.ltrgzz.name = "ltrgzz";
	this.ltrgzz.setTransform(43.3,141.1,0.6742,1.4602,0,0,0,0.2,0.1);

	this.jtrgaa = new lib.chafafdndcopy();
	this.jtrgaa.name = "jtrgaa";
	this.jtrgaa.setTransform(22.45,140.9,0.6742,1.4602,0,0,0,0.2,0.1);

	this.atrgxw = new lib.chafafdndcopy();
	this.atrgxw.name = "atrgxw";
	this.atrgxw.setTransform(1,141.1,0.6742,1.4602,0,0,0,0.2,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(19,175.7,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-10,176.6,0.5884,0.5549);

	this.udnduu = new lib.Symbol39();
	this.udnduu.name = "udnduu";
	this.udnduu.setTransform(-55.45,-126);

	this.fdndqs = new lib.Symbol24copy2();
	this.fdndqs.name = "fdndqs";
	this.fdndqs.setTransform(-54.5,-29.95);

	this.fdndtr = new lib.Symbol24copy2();
	this.fdndtr.name = "fdndtr";
	this.fdndtr.setTransform(-3.6,-172.25);

	this.xdndmn = new lib.Symbol27();
	this.xdndmn.name = "xdndmn";
	this.xdndmn.setTransform(29.05,-59.25);

	this.ldndcv = new lib.Symbol22_1();
	this.ldndcv.name = "ldndcv";
	this.ldndcv.setTransform(-61.55,-55.55);

	this.ydndyy = new lib.Symbol18_1();
	this.ydndyy.name = "ydndyy";
	this.ydndyy.setTransform(53.5,-179.9);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(54.5,101.05);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-59.9,-172.25);

	this.tdndff = new lib.Symbol23copy();
	this.tdndff.name = "tdndff";
	this.tdndff.setTransform(53.5,-128.1);

	this.hdndqs = new lib.Symbol24copy2();
	this.hdndqs.name = "hdndqs";
	this.hdndqs.setTransform(57.45,-37.55);

	this.ldndfg = new lib.Symbol20_1();
	this.ldndfg.name = "ldndfg";
	this.ldndfg.setTransform(-41.65,60.9);

	this.mdndmm = new lib.Symbol24copy2();
	this.mdndmm.name = "mdndmm";
	this.mdndmm.setTransform(46.65,59.05);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(53.5,-153.25);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(53.5,80.1);

	this.sdndsa = new lib.Symbol30copy();
	this.sdndsa.name = "sdndsa";
	this.sdndsa.setTransform(-61.55,-7.85);

	this.odndxw = new lib.Symbol30copy();
	this.odndxw.name = "odndxw";
	this.odndxw.setTransform(-64.35,102.9);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(-41.4,93.9);

	this.sdndxw = new lib.Symbol30copy();
	this.sdndxw.name = "sdndxw";
	this.sdndxw.setTransform(-62.25,61.1);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(42.15,-20.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndee},{t:this.sdndxw},{t:this.ddnddd},{t:this.odndxw},{t:this.sdndsa},{t:this.mdndzz},{t:this.xdndxx},{t:this.mdndmm},{t:this.ldndfg},{t:this.hdndqs},{t:this.tdndff},{t:this.sdndss},{t:this.mdndaa},{t:this.ydndyy},{t:this.ldndcv},{t:this.xdndmn},{t:this.fdndtr},{t:this.fdndqs},{t:this.udnduu},{t:this.correctbtn},{t:this.replay},{t:this.atrgxw},{t:this.jtrgaa},{t:this.ltrgzz},{t:this.xtrgfg},{t:this.ltrgxw},{t:this.xtrgmm},{t:this.xtrgdd},{t:this.atrgff},{t:this.jtrgss},{t:this.ltrgtr},{t:this.xtrgxx},{t:this.ltrguu},{t:this.xtrgyy},{t:this.atrgcv},{t:this.jtrgsa},{t:this.atrgqs},{t:this.xtrgee},{t:this.ltrgqs},{t:this.xtrgmn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol82, new cjs.Rectangle(-74,-194.2,147.1,383.9), null);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgzp = new lib.chafafdndcopy();
	this.xtrgzp.name = "xtrgzp";
	this.xtrgzp.setTransform(-35.55,-92.7,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrghh = new lib.chafafdndcopy();
	this.ltrghh.name = "ltrghh";
	this.ltrghh.setTransform(-60.6,-92.5,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgee = new lib.chafafdndcopy();
	this.xtrgee.name = "xtrgee";
	this.xtrgee.setTransform(62.05,-93.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgfg = new lib.chafafdndcopy();
	this.ltrgfg.name = "ltrgfg";
	this.ltrgfg.setTransform(38.1,-92.9,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(14.1,-93.1,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgvv = new lib.chafafdndcopy();
	this.atrgvv.name = "atrgvv";
	this.atrgvv.setTransform(-10.65,-92.9,0.7769,1.4602,0,0,0,0.2,0.1);

	this.xtrgaa = new lib.chafafdndcopy();
	this.xtrgaa.name = "xtrgaa";
	this.xtrgaa.setTransform(-57.3,24.1,0.9001,1.4602,0,0,0,0.2,0.1);

	this.xtrgdd = new lib.chafafdndcopy();
	this.xtrgdd.name = "xtrgdd";
	this.xtrgdd.setTransform(55.7,23.7,0.9001,1.4602,0,0,0,0.1,0.1);

	this.ltrgzz = new lib.chafafdndcopy();
	this.ltrgzz.name = "ltrgzz";
	this.ltrgzz.setTransform(28,23.9,0.9001,1.4602,0,0,0,0.2,0.1);

	this.jtrgff = new lib.chafafdndcopy();
	this.jtrgff.name = "jtrgff";
	this.jtrgff.setTransform(0.2,23.7,0.9001,1.4602,0,0,0,0.2,0.1);

	this.atrgba = new lib.chafafdndcopy();
	this.atrgba.name = "atrgba";
	this.atrgba.setTransform(-28.45,23.9,0.9001,1.4602,0,0,0,0.2,0.1);

	this.ktrgzd = new lib.chafafdndcopy();
	this.ktrgzd.name = "ktrgzd";
	this.ktrgzd.setTransform(28,138.15,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgda = new lib.chafafdndcopy();
	this.ktrgda.name = "ktrgda";
	this.ktrgda.setTransform(-1.5,138.35,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgrr = new lib.chafafdndcopy();
	this.ktrgrr.name = "ktrgrr";
	this.ktrgrr.setTransform(-31.1,138.15,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.65,174.8,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.3,175.85,0.5884,0.5549,0,0,0,0.1,0.4);

	this.hdndhh = new lib.Symbol37();
	this.hdndhh.name = "hdndhh";
	this.hdndhh.setTransform(-57.65,-149.8);

	this.ydndda = new lib.Symbol29();
	this.ydndda.name = "ydndda";
	this.ydndda.setTransform(-49.95,75);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(-43.7,-19.4);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(54.1,-154.55);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-55,-179.05);

	this.ldndba = new lib.Symbol18_1();
	this.ldndba.name = "ldndba";
	this.ldndba.setTransform(-62.2,-31.05);

	this.kdndzd = new lib.Symbol18_1();
	this.kdndzd.name = "kdndzd";
	this.kdndzd.setTransform(46.2,55.15);

	this.fdndfg = new lib.Symbol24copy2();
	this.fdndfg.name = "fdndfg";
	this.fdndfg.setTransform(44.6,-176.25);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-55.7,-59.75);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(44.6,-35.85);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(44.6,-58.8);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(47.6,-125.9);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(44.6,90.75);

	this.mdndzp = new lib.Symbol16_1();
	this.mdndzp.name = "mdndzp";
	this.mdndzp.setTransform(-36.6,-126.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mdndzp},{t:this.kdndrr},{t:this.sdndss},{t:this.mdndzz},{t:this.ddnddd},{t:this.fdndff},{t:this.fdndfg},{t:this.kdndzd},{t:this.ldndba},{t:this.vdndvv},{t:this.fdndee},{t:this.mdndaa},{t:this.ydndda},{t:this.hdndhh},{t:this.correctbtn},{t:this.replay},{t:this.ktrgrr},{t:this.ktrgda},{t:this.ktrgzd},{t:this.atrgba},{t:this.jtrgff},{t:this.ltrgzz},{t:this.xtrgdd},{t:this.xtrgaa},{t:this.atrgvv},{t:this.jtrgss},{t:this.ltrgfg},{t:this.xtrgee},{t:this.ltrghh},{t:this.xtrgzp}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol81, new cjs.Rectangle(-72.3,-192.5,144.8,381.3), null);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgqq = new lib.chafafdndcopy();
	this.xtrgqq.name = "xtrgqq";
	this.xtrgqq.setTransform(-63.25,137.35,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgss = new lib.chafafdndcopy();
	this.xtrgss.name = "xtrgss";
	this.xtrgss.setTransform(-20.05,136.45,0.6742,1.4602,0,0,0,0.2,0.1);

	this.ltrgfa = new lib.chafafdndcopy();
	this.ltrgfa.name = "ltrgfa";
	this.ltrgfa.setTransform(-41.8,136.65,0.6742,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(64.65,136.05,0.6742,1.4602,0,0,0,0.3,0.1);

	this.ltrghm = new lib.chafafdndcopy();
	this.ltrghm.name = "ltrghm";
	this.ltrghm.setTransform(43.85,136.25,0.6742,1.4602,0,0,0,0.2,0.1);

	this.jtrgss = new lib.chafafdndcopy();
	this.jtrgss.name = "jtrgss";
	this.jtrgss.setTransform(23,136.05,0.6742,1.4602,0,0,0,0.2,0.1);

	this.atrgvv = new lib.chafafdndcopy();
	this.atrgvv.name = "atrgvv";
	this.atrgvv.setTransform(1.55,136.25,0.6742,1.4602,0,0,0,0.2,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(34.8,22,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgpk = new lib.chafafdndcopy();
	this.ktrgpk.name = "ktrgpk";
	this.ktrgpk.setTransform(5.2,21.8,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(-25.3,22,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgaa = new lib.chafafdndcopy();
	this.ktrgaa.name = "ktrgaa";
	this.ktrgaa.setTransform(32.7,-95,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrggg = new lib.chafafdndcopy();
	this.ktrggg.name = "ktrggg";
	this.ktrggg.setTransform(3.2,-94.8,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgjj = new lib.chafafdndcopy();
	this.ktrgjj.name = "ktrgjj";
	this.ktrgjj.setTransform(-27.4,-95,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(14.45,173.5,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-14.45,174.55,0.5884,0.5549,0,0,0,0.1,0.4);

	this.zdndzz = new lib.Symbol36_1();
	this.zdndzz.name = "zdndzz";
	this.zdndzz.setTransform(48.15,-54.25);

	this.jdndjj = new lib.Symbol35();
	this.jdndjj.name = "jdndjj";
	this.jdndjj.setTransform(39.15,-175.9);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-58.45,99.9);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-64.1,53.65);

	this.odndss = new lib.Symbol30copy();
	this.odndss.name = "odndss";
	this.odndss.setTransform(42.75,81.45);

	this.idndpk = new lib.Symbol18_1();
	this.idndpk.name = "idndpk";
	this.idndpk.setTransform(-59.9,-62.3);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(-54.5,-163.9);

	this.kdndfa = new lib.Symbol24copy2();
	this.kdndfa.name = "kdndfa";
	this.kdndfa.setTransform(49.05,54.5);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-57.35,-36.4);

	this.idndhm = new lib.Symbol23copy();
	this.idndhm.name = "idndhm";
	this.idndhm.setTransform(-38.7,98.6);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(59.1,105.95);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-45.6,71.25);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(52.35,-135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mdndaa},{t:this.xdndxx},{t:this.adndqq},{t:this.idndhm},{t:this.fdndff},{t:this.kdndfa},{t:this.gdndgg},{t:this.idndpk},{t:this.odndss},{t:this.sdndss},{t:this.vdndvv},{t:this.jdndjj},{t:this.zdndzz},{t:this.correctbtn},{t:this.replay},{t:this.ktrgjj},{t:this.ktrggg},{t:this.ktrgaa},{t:this.ktrgff},{t:this.ktrgpk},{t:this.ktrgzz},{t:this.atrgvv},{t:this.jtrgss},{t:this.ltrghm},{t:this.xtrgxx},{t:this.ltrgfa},{t:this.xtrgss},{t:this.xtrgqq}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(-73.4,-186.6,147,374.1), null);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgdd = new lib.chafafdndcopy();
	this.xtrgdd.name = "xtrgdd";
	this.xtrgdd.setTransform(-55.3,138.35,0.9001,1.4602,0,0,0,0.2,0.1);

	this.xtrgxx = new lib.chafafdndcopy();
	this.xtrgxx.name = "xtrgxx";
	this.xtrgxx.setTransform(57.7,137.95,0.9001,1.4602,0,0,0,0.1,0.1);

	this.ltrgvv = new lib.chafafdndcopy();
	this.ltrgvv.name = "ltrgvv";
	this.ltrgvv.setTransform(30,138.15,0.9001,1.4602,0,0,0,0.2,0.1);

	this.jtrggg = new lib.chafafdndcopy();
	this.jtrggg.name = "jtrggg";
	this.jtrggg.setTransform(2.2,137.95,0.9001,1.4602,0,0,0,0.2,0.1);

	this.atrgmp = new lib.chafafdndcopy();
	this.atrgmp.name = "atrgmp";
	this.atrgmp.setTransform(-26.45,138.15,0.9001,1.4602,0,0,0,0.2,0.1);

	this.ktrgcv = new lib.chafafdndcopy();
	this.ktrgcv.name = "ktrgcv";
	this.ktrgcv.setTransform(33.8,24,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(4.3,24.2,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(-25.3,24,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgee = new lib.chafafdndcopy();
	this.ktrgee.name = "ktrgee";
	this.ktrgee.setTransform(30.25,-92,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgsq = new lib.chafafdndcopy();
	this.ktrgsq.name = "ktrgsq";
	this.ktrgsq.setTransform(0.65,-92.2,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgyn = new lib.chafafdndcopy();
	this.ktrgyn.name = "ktrgyn";
	this.ktrgyn.setTransform(-28.85,-92,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(15.35,174.9,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-13.55,175.8,0.5884,0.5549);

	this.gdndyn = new lib.Symbol22_1();
	this.gdndyn.name = "gdndyn";
	this.gdndyn.setTransform(55.1,-143.25);

	this.udndsq = new lib.Symbol18_1();
	this.udndsq.name = "udndsq";
	this.udndsq.setTransform(49.55,-179.05);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(56.5,82.3);

	this.hdndcv = new lib.Symbol23copy();
	this.hdndcv.name = "hdndcv";
	this.hdndcv.setTransform(55.1,-34.55);

	this.jdndmp = new lib.Symbol20_1();
	this.jdndmp.name = "jdndmp";
	this.jdndmp.setTransform(-49.55,89.5);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(-57.7,56.25);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(45.4,53.35);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-58.7,-17.65);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(21.6,96.9);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-51.75,-57.75);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(-61.3,-146.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fdndee},{t:this.sdndss},{t:this.xdndxx},{t:this.fdndff},{t:this.vdndvv},{t:this.gdndgg},{t:this.jdndmp},{t:this.hdndcv},{t:this.ddnddd},{t:this.udndsq},{t:this.gdndyn},{t:this.correctbtn},{t:this.replay},{t:this.ktrgyn},{t:this.ktrgsq},{t:this.ktrgee},{t:this.ktrgff},{t:this.ktrgss},{t:this.ktrgcv},{t:this.atrgmp},{t:this.jtrggg},{t:this.ltrgvv},{t:this.xtrgxx},{t:this.xtrgdd}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol79, new cjs.Rectangle(-69.7,-193.4,139.60000000000002,382.3), null);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgsd = new lib.chafafdndcopy();
	this.xtrgsd.name = "xtrgsd";
	this.xtrgsd.setTransform(37.25,22.45,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ltrgzz = new lib.chafafdndcopy();
	this.ltrgzz.name = "ltrgzz";
	this.ltrgzz.setTransform(5.85,22.65,0.9736,1.4602,0,0,0,0.1,0.1);

	this.jtrgdd = new lib.chafafdndcopy();
	this.jtrgdd.name = "jtrgdd";
	this.jtrgdd.setTransform(-25.65,22.45,0.9736,1.4602,0,0,0,0.1,0.1);

	this.xtrgnn = new lib.chafafdndcopy();
	this.xtrgnn.name = "xtrgnn";
	this.xtrgnn.setTransform(-35.55,137.55,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ltrgss = new lib.chafafdndcopy();
	this.ltrgss.name = "ltrgss";
	this.ltrgss.setTransform(-60.6,137.75,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ktrgvb = new lib.chafafdndcopy();
	this.ktrgvb.name = "ktrgvb";
	this.ktrgvb.setTransform(33,-92.55,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgop = new lib.chafafdndcopy();
	this.ktrgop.name = "ktrgop";
	this.ktrgop.setTransform(3.4,-92.75,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgaq = new lib.chafafdndcopy();
	this.ktrgaq.name = "ktrgaq";
	this.ktrgaq.setTransform(-27.1,-92.55,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(19.8,174.05,0.5884,0.5549);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-9.15,175.05,0.5884,0.5549);

	this.xtrgaa = new lib.chafafdndcopy();
	this.xtrgaa.name = "xtrgaa";
	this.xtrgaa.setTransform(62.05,137.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.mtrgss = new lib.chafafdndcopy();
	this.mtrgss.name = "mtrgss";
	this.mtrgss.setTransform(38.1,137.35,0.7769,1.4602,0,0,0,0.2,0.1);

	this.jtrgnn = new lib.chafafdndcopy();
	this.jtrgnn.name = "jtrgnn";
	this.jtrgnn.setTransform(14.1,137.15,0.7769,1.4602,0,0,0,0.2,0.1);

	this.atrgss = new lib.chafafdndcopy();
	this.atrgss.name = "atrgss";
	this.atrgss.setTransform(-10.65,137.35,0.7769,1.4602,0,0,0,0.2,0.1);

	this.ndndnn = new lib.Symbol22_1();
	this.ndndnn.name = "ndndnn";
	this.ndndnn.setTransform(37.1,101.35);

	this.wdndnn = new lib.Symbol22_1();
	this.wdndnn.name = "wdndnn";
	this.wdndnn.setTransform(-62,55.4);

	this.xdndop = new lib.Symbol18_1();
	this.xdndop.name = "xdndop";
	this.xdndop.setTransform(-51.8,-178.4);

	this.mdndaa = new lib.Symbol15();
	this.mdndaa.name = "mdndaa";
	this.mdndaa.setTransform(-61.05,80.5);

	this.kdndss = new lib.Symbol30copy();
	this.kdndss.name = "kdndss";
	this.kdndss.setTransform(-43.5,99.5);

	this.fdndvb = new lib.Symbol23copy();
	this.fdndvb.name = "fdndvb";
	this.fdndvb.setTransform(49,-159.4);

	this.rdndsd = new lib.Symbol23copy();
	this.rdndsd.name = "rdndsd";
	this.rdndsd.setTransform(45.1,-27.4);

	this.cdndaq = new lib.Symbol20_1();
	this.cdndaq.name = "cdndaq";
	this.cdndaq.setTransform(-62,-142.65);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-57.65,-46.4);

	this.adndss = new lib.Symbol30copy();
	this.adndss.name = "adndss";
	this.adndss.setTransform(45.3,79.55);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(37.1,54.55);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(47.6,-59.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ddnddd},{t:this.sdndss},{t:this.adndss},{t:this.mdndzz},{t:this.cdndaq},{t:this.rdndsd},{t:this.fdndvb},{t:this.kdndss},{t:this.mdndaa},{t:this.xdndop},{t:this.wdndnn},{t:this.ndndnn},{t:this.atrgss},{t:this.jtrgnn},{t:this.mtrgss},{t:this.xtrgaa},{t:this.correctbtn},{t:this.replay},{t:this.ktrgaq},{t:this.ktrgop},{t:this.ktrgvb},{t:this.ltrgss},{t:this.xtrgnn},{t:this.jtrgdd},{t:this.ltrgzz},{t:this.xtrgsd}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol78, new cjs.Rectangle(-72.3,-192.7,144.8,380.9), null);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgaz = new lib.chafafdndcopy();
	this.xtrgaz.name = "xtrgaz";
	this.xtrgaz.setTransform(33.25,137.3,0.9222,1.4602,0,0,0,0.1,0.1);

	this.ltrgwx = new lib.chafafdndcopy();
	this.ltrgwx.name = "ltrgwx";
	this.ltrgwx.setTransform(3.5,137.5,0.9222,1.4602,0,0,0,0.1,0.1);

	this.jtrgsa = new lib.chafafdndcopy();
	this.jtrgsa.name = "jtrgsa";
	this.jtrgsa.setTransform(-26.3,137.3,0.9222,1.4602,0,0,0,0.1,0.1);

	this.atrgaz = new lib.chafafdndcopy();
	this.atrgaz.name = "atrgaz";
	this.atrgaz.setTransform(-56.3,137.5,0.9222,1.4602,0,0,0,0.1,0.1);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-38.6,-178.35);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(47.2,-22.9);

	this.ktrgxj = new lib.chafafdndcopy();
	this.ktrgxj.name = "ktrgxj";
	this.ktrgxj.setTransform(63.8,137.5,0.9222,1.4602,0,0,0,0.1,0.1);

	this.ktrgxx = new lib.chafafdndcopy();
	this.ktrgxx.name = "ktrgxx";
	this.ktrgxx.setTransform(48,21.45,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgbb = new lib.chafafdndcopy();
	this.ktrgbb.name = "ktrgbb";
	this.ktrgbb.setTransform(18.5,21.65,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(-11.1,21.45,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgfd = new lib.chafafdndcopy();
	this.ktrgfd.name = "ktrgfd";
	this.ktrgfd.setTransform(-41.6,21.65,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgqq = new lib.chafafdndcopy();
	this.ktrgqq.name = "ktrgqq";
	this.ktrgqq.setTransform(34.35,-95.1,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(4.85,-94.9,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-24.75,-95.1,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(17.9,174.15,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-11.05,175.2,0.5884,0.5549,0,0,0,0.1,0.4);

	this.udndaz = new lib.Symbol23copy();
	this.udndaz.name = "udndaz";
	this.udndaz.setTransform(-46.7,53.4);

	this.fdndwx = new lib.Symbol24copy2();
	this.fdndwx.name = "fdndwx";
	this.fdndwx.setTransform(-54.8,76.65);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(53.25,-154.35);

	this.fdndfd = new lib.Symbol24copy2();
	this.fdndfd.name = "fdndfd";
	this.fdndfd.setTransform(-47.8,-24.05);

	this.hdndaz = new lib.Symbol23copy();
	this.hdndaz.name = "hdndaz";
	this.hdndaz.setTransform(52.95,87.4);

	this.idndxj = new lib.Symbol27();
	this.idndxj.name = "idndxj";
	this.idndxj.setTransform(-45.1,100.6);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(-53.2,-140.85);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(46.9,-58.7);

	this.sdndsa = new lib.Symbol30copy();
	this.sdndsa.name = "sdndsa";
	this.sdndsa.setTransform(52.3,51.45);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-51.1,-58.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mdndzz},{t:this.sdndsa},{t:this.xdndxx},{t:this.adndqq},{t:this.idndxj},{t:this.hdndaz},{t:this.fdndfd},{t:this.fdndff},{t:this.fdndwx},{t:this.udndaz},{t:this.correctbtn},{t:this.replay},{t:this.ktrgss},{t:this.ktrgff},{t:this.ktrgqq},{t:this.ktrgfd},{t:this.ktrgzz},{t:this.ktrgbb},{t:this.ktrgxx},{t:this.ktrgxj},{t:this.bdndbb},{t:this.sdndss},{t:this.atrgaz},{t:this.jtrgsa},{t:this.ltrgwx},{t:this.xtrgaz}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(-70.1,-189,146.39999999999998,377.2), null);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgzp = new lib.chafafdndcopy();
	this.xtrgzp.name = "xtrgzp";
	this.xtrgzp.setTransform(49.35,136.2,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ltrgee = new lib.chafafdndcopy();
	this.ltrgee.name = "ltrgee";
	this.ltrgee.setTransform(17.95,136.4,0.9736,1.4602,0,0,0,0.1,0.1);

	this.jtrggg = new lib.chafafdndcopy();
	this.jtrggg.name = "jtrggg";
	this.jtrggg.setTransform(-13.55,136.2,0.9736,1.4602,0,0,0,0.1,0.1);

	this.atrgjj = new lib.chafafdndcopy();
	this.atrgjj.name = "atrgjj";
	this.atrgjj.setTransform(-45.25,136.4,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ddndml = new lib.Symbol18_1();
	this.ddndml.name = "ddndml";
	this.ddndml.setTransform(-46,-162.55);

	this.vdndvv = new lib.Symbol33copy();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(40.5,-178.55);

	this.jdndjj = new lib.Symbol35();
	this.jdndjj.name = "jdndjj";
	this.jdndjj.setTransform(-54.95,81.35);

	this.vdndva = new lib.Symbol33copy();
	this.vdndva.name = "vdndva";
	this.vdndva.setTransform(59,-59.95);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(44.15,21.95,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrguj = new lib.chafafdndcopy();
	this.ktrguj.name = "ktrguj";
	this.ktrguj.setTransform(14.65,22.15,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgrr = new lib.chafafdndcopy();
	this.ktrgrr.name = "ktrgrr";
	this.ktrgrr.setTransform(-14.95,21.95,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgva = new lib.chafafdndcopy();
	this.ktrgva.name = "ktrgva";
	this.ktrgva.setTransform(-45.45,22.15,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgan = new lib.chafafdndcopy();
	this.ktrgan.name = "ktrgan";
	this.ktrgan.setTransform(32.15,-94.2,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgml = new lib.chafafdndcopy();
	this.ktrgml.name = "ktrgml";
	this.ktrgml.setTransform(2.65,-94,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(-27.95,-94.2,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(13.9,174.3,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-15,175.35,0.5884,0.5549,0,0,0,0.1,0.4);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(-51.45,53.45);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(-54.95,-25.15);

	this.hdnduj = new lib.Symbol20_1();
	this.hdnduj.name = "hdnduj";
	this.hdnduj.setTransform(-63.9,-52.75);

	this.mdndzp = new lib.Symbol16_1();
	this.mdndzp.name = "mdndzp";
	this.mdndzp.setTransform(49.6,91.5);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(60.1,-30.2);

	this.fdndee = new lib.Symbol28_1();
	this.fdndee.name = "fdndee";
	this.fdndee.setTransform(48.5,61);

	this.mdndan = new lib.Symbol15();
	this.mdndan.name = "mdndan";
	this.mdndan.setTransform(47.15,-133.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mdndan},{t:this.fdndee},{t:this.mdndzz},{t:this.mdndzp},{t:this.hdnduj},{t:this.kdndrr},{t:this.gdndgg},{t:this.correctbtn},{t:this.replay},{t:this.ktrgvv},{t:this.ktrgml},{t:this.ktrgan},{t:this.ktrgva},{t:this.ktrgrr},{t:this.ktrguj},{t:this.ktrgzz},{t:this.vdndva},{t:this.jdndjj},{t:this.vdndvv},{t:this.ddndml},{t:this.atrgjj},{t:this.jtrggg},{t:this.ltrgee},{t:this.xtrgzp}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol76, new cjs.Rectangle(-72.9,-191.4,142,379.70000000000005), null);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xtrgrr = new lib.chafafdndcopy();
	this.xtrgrr.name = "xtrgrr";
	this.xtrgrr.setTransform(51.85,19.85,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ltrgbb = new lib.chafafdndcopy();
	this.ltrgbb.name = "ltrgbb";
	this.ltrgbb.setTransform(20.45,20.05,0.9736,1.4602,0,0,0,0.1,0.1);

	this.jtrgrr = new lib.chafafdndcopy();
	this.jtrgrr.name = "jtrgrr";
	this.jtrgrr.setTransform(-11.05,19.85,0.9736,1.4602,0,0,0,0.1,0.1);

	this.atrgbb = new lib.chafafdndcopy();
	this.atrgbb.name = "atrgbb";
	this.atrgbb.setTransform(-42.75,20.05,0.9736,1.4602,0,0,0,0.1,0.1);

	this.bdndbb = new lib.Symbol34copy();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(52.25,-165.2,1,1,0,0,0,0.8,10.1);

	this.mdndzz = new lib.Symbol16_1();
	this.mdndzz.name = "mdndzz";
	this.mdndzz.setTransform(-49.25,-175.3);

	this.adndbb = new lib.Symbol34copy();
	this.adndbb.name = "adndbb";
	this.adndbb.setTransform(53.3,-12.65,1,1,0,0,0,0.8,10.1);

	this.mdndbb = new lib.Symbol34copy();
	this.mdndbb.name = "mdndbb";
	this.mdndbb.setTransform(-48.95,-27.85);

	this.ktrgxx = new lib.chafafdndcopy();
	this.ktrgxx.name = "ktrgxx";
	this.ktrgxx.setTransform(53.85,133.5,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgvv = new lib.chafafdndcopy();
	this.ktrgvv.name = "ktrgvv";
	this.ktrgvv.setTransform(24.35,133.7,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgss = new lib.chafafdndcopy();
	this.ktrgss.name = "ktrgss";
	this.ktrgss.setTransform(-6.25,133.5,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgff = new lib.chafafdndcopy();
	this.ktrgff.name = "ktrgff";
	this.ktrgff.setTransform(-37.75,133.7,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrger = new lib.chafafdndcopy();
	this.ktrger.name = "ktrger";
	this.ktrger.setTransform(31,-97.7,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgzz = new lib.chafafdndcopy();
	this.ktrgzz.name = "ktrgzz";
	this.ktrgzz.setTransform(1.4,-97.9,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgbb = new lib.chafafdndcopy();
	this.ktrgbb.name = "ktrgbb";
	this.ktrgbb.setTransform(-28.1,-97.7,0.9736,1.4602,0,0,0,0.1,0.1);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(16.1,171.15,0.5884,0.5549,0,0,0,0.1,0.4);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-12.8,172.05,0.5884,0.5549);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(51.45,50.55);

	this.odndrr = new lib.Symbol31copy();
	this.odndrr.name = "odndrr";
	this.odndrr.setTransform(51.45,-61.8);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(-49.1,-62.5);

	this.zdnder = new lib.Symbol20_1();
	this.zdnder.name = "zdnder";
	this.zdnder.setTransform(49.3,-126.35,1,1,0,0,0,0.8,10.1);

	this.vdndvv = new lib.Symbol19_1();
	this.vdndvv.name = "vdndvv";
	this.vdndvv.setTransform(-55.3,106.3,1,1,0,0,0,0.7,10.1);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(51.45,101.6);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(-58.4,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sdndss},{t:this.xdndxx},{t:this.vdndvv},{t:this.zdnder},{t:this.kdndrr},{t:this.odndrr},{t:this.fdndff},{t:this.correctbtn},{t:this.replay},{t:this.ktrgbb},{t:this.ktrgzz},{t:this.ktrger},{t:this.ktrgff},{t:this.ktrgss},{t:this.ktrgvv},{t:this.ktrgxx},{t:this.mdndbb},{t:this.adndbb},{t:this.mdndzz},{t:this.bdndbb},{t:this.atrgbb},{t:this.jtrgrr},{t:this.ltrgbb},{t:this.xtrgrr}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol75, new cjs.Rectangle(-66.8,-191.8,133.8,376.9), null);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.htrggg = new lib.chafafdndcopy();
	this.htrggg.name = "htrggg";
	this.htrggg.setTransform(-14.35,21.45,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgjj = new lib.chafafdndcopy();
	this.ktrgjj.name = "ktrgjj";
	this.ktrgjj.setTransform(-46.25,21.5,0.9736,1.4602);

	this.htrgss = new lib.chafafdndcopy();
	this.htrgss.name = "htrgss";
	this.htrgss.setTransform(-14.5,-95.25,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ktrgqp = new lib.chafafdndcopy();
	this.ktrgqp.name = "ktrgqp";
	this.ktrgqp.setTransform(-47.1,-95.2,0.9736,1.4602);

	this.bdndgh = new lib.Symbol25_1();
	this.bdndgh.name = "bdndgh";
	this.bdndgh.setTransform(52.95,-177.4);

	this.adndqp = new lib.Symbol17_1();
	this.adndqp.name = "adndqp";
	this.adndqp.setTransform(-39.9,-178.4);

	this.jdndjj = new lib.Symbol35();
	this.jdndjj.name = "jdndjj";
	this.jdndjj.setTransform(-52.45,-24.8);

	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(23.45,174.2,0.5884,0.5549,0,0,0,0.1,0.2);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(-5.55,175.1,0.5884,0.5549);

	this.gdndgg = new lib.Symbol21_1();
	this.gdndgg.name = "gdndgg";
	this.gdndgg.setTransform(49.95,-24.1);

	this.fdndff = new lib.Symbol24copy2();
	this.fdndff.name = "fdndff";
	this.fdndff.setTransform(-62,53.35);

	this.ddnddd = new lib.Symbol29();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(51.55,-57.35);

	this.sdndsa = new lib.Symbol30copy();
	this.sdndsa.name = "sdndsa";
	this.sdndsa.setTransform(-55.45,100.55);

	this.xtrgqq = new lib.chafafdndcopy();
	this.xtrgqq.name = "xtrgqq";
	this.xtrgqq.setTransform(53.9,136.55,0.9736,1.4602,0,0,0,0.1,0.1);

	this.ltrgff = new lib.chafafdndcopy();
	this.ltrgff.name = "ltrgff";
	this.ltrgff.setTransform(22.5,136.75,0.9736,1.4602,0,0,0,0.1,0.1);

	this.jtrgsa = new lib.chafafdndcopy();
	this.jtrgsa.name = "jtrgsa";
	this.jtrgsa.setTransform(-9,136.55,0.9736,1.4602,0,0,0,0.1,0.1);

	this.atrgda = new lib.chafafdndcopy();
	this.atrgda.name = "atrgda";
	this.atrgda.setTransform(-40.7,136.75,0.9736,1.4602,0,0,0,0.1,0.1);

	this.etrgxx = new lib.chafafdndcopy();
	this.etrgxx.name = "etrgxx";
	this.etrgxx.setTransform(49,21.25,0.9736,1.4602,0,0,0,0.1,0.1);

	this.dtrgdd = new lib.chafafdndcopy();
	this.dtrgdd.name = "dtrgdd";
	this.dtrgdd.setTransform(17,21.45,0.9736,1.4602,0,0,0,0.1,0.1);

	this.htrgrr = new lib.chafafdndcopy();
	this.htrgrr.name = "htrgrr";
	this.htrgrr.setTransform(49.85,-95.2,0.9736,1.4602);

	this.ktrggh = new lib.chafafdndcopy();
	this.ktrggh.name = "ktrggh";
	this.ktrggh.setTransform(17.35,-95,0.9736,1.4602);

	this.kdndrr = new lib.Symbol31copy();
	this.kdndrr.name = "kdndrr";
	this.kdndrr.setTransform(-44.05,-140.9);

	this.ddndda = new lib.Symbol29();
	this.ddndda.name = "ddndda";
	this.ddndda.setTransform(54.95,57.6);

	this.adndqq = new lib.Symbol17_1();
	this.adndqq.name = "adndqq";
	this.adndqq.setTransform(52.95,100.55);

	this.sdndss = new lib.Symbol30copy();
	this.sdndss.name = "sdndss";
	this.sdndss.setTransform(45.3,-133.4);

	this.xdndxx = new lib.Symbol27();
	this.xdndxx.name = "xdndxx";
	this.xdndxx.setTransform(-55.45,-58.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xdndxx},{t:this.sdndss},{t:this.adndqq},{t:this.ddndda},{t:this.kdndrr},{t:this.ktrggh},{t:this.htrgrr},{t:this.dtrgdd},{t:this.etrgxx},{t:this.atrgda},{t:this.jtrgsa},{t:this.ltrgff},{t:this.xtrgqq},{t:this.sdndsa},{t:this.ddnddd},{t:this.fdndff},{t:this.gdndgg},{t:this.correctbtn},{t:this.replay},{t:this.jdndjj},{t:this.adndqp},{t:this.bdndgh},{t:this.ktrgqp},{t:this.htrgss},{t:this.ktrgjj},{t:this.htrggg}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(-66.4,-193.4,133.5,381.6), null);


(lib.Symbol32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var that = this;
		
		that.parent.stopReceivingOnTickSound;
		that.rate = 0;
		
		that.trk.addEventListener("pressup", onpressup);
		that.trk.addEventListener("pressmove", onpressmove.bind(this));
		that.trk.addEventListener("mousedown", onmousedown.bind(this));
		
		var trkWidth = that.trk.getBounds().width;
		var sldWidth = that.sld.getBounds().width;
		
		
		//set hitarea for slider to react to drag 
		
		var rect = new createjs.Shape();
		rect.graphics.beginFill("#ff0000"); //("#f00");
		rect.graphics.drawRect(-10, -10, 70,
			30); //rect.graphics.drawRect(0, 0, 660, 450);
		rect.graphics.endFill();
		
		that.trk.hitArea = rect;
		
		that.totalFrm ;
		
		function onmousedown(e) {
		
			
			var pt = this.globalToLocal(e.stageX, e.stageY);
			var posX = pt.x;
			var posY = pt.y;
		
			that.parent.stopReceivingOnTickSound = true;
		
		}
		
		
		function onpressmove(e) {
		
		
			var pt = this.globalToLocal(e.stageX, e.stageY);
		
		
		
			if (pt.x >= 0 && pt.x <= sldWidth) {
		
				var newX = pt.x;
		
		
				that.trk.x = newX;
		
		
				//	alert("that.parent.parent "+that.parent.parent.parent);
		
			}
		}
		
		
		//Mouse UP and SNAP====================
		function onpressup(evt) {
		
		
			trkRate(that.trk.x);
		
			that.parent.mov.gotoAndPlay(that.totalFrm * that.rate);
		
			that.parent.parent.resetSoundPosition(that.rate);
		
			//we change this variable after setting the new sound position 
			//to start updating the trk position on tick function from sound
		
			that.parent.stopReceivingOnTickSound = false;
		}
		
		
		function trkRate(currentPosition) {
		
			var cur = currentPosition < 0 ? 0 : currentPosition > sldWidth ? sldWidth : currentPosition;
			that.rate = cur / sldWidth;
			return that.rate;
		}
		
		that.resetTrk = function (rate ,totalFrm ) {
		
			that.totalFrm = totalFrm 
			if (!that.parent.stopReceivingOnTickSound) {
		
				that.trk.x = sldWidth * rate;
				that.rate = rate;
		        that.parent.mov.gotoAndStop(that.totalFrm * that.rate);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// trk
	this.trk = new lib.Symbol30();
	this.trk.name = "trk";
	this.trk.setTransform(-0.75,0);

	this.timeline.addTween(cjs.Tween.get(this.trk).wait(1));

	// sld
	this.sld = new lib.Symbol29_1();
	this.sld.name = "sld";
	this.sld.setTransform(-0.25,0);

	this.timeline.addTween(cjs.Tween.get(this.sld).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32_1, new cjs.Rectangle(-5.3,-12.3,230.10000000000002,25), null);


(lib.Symbol15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		var that = this;
		var qalamisclicked = false;
		that.firsTime;
		this.addEventListener("click", choose);
		
		function choose(evt) {
			if (evt.nativeEvent instanceof MouseEvent) {
		
		        if(that.parent.isdraged) return ;
				
				console.log('qalamisclicked' , qalamisclicked);
				qalamisclicked = !qalamisclicked;
				if (qalamisclicked) {
					 
					var frm = that.parent.parent.isLeft ? 7 : 8 ;
					 evt.currentTarget.gotoAndStop(frm);
				} else {
					evt.currentTarget.gotoAndStop(that.parent.currentcolor);
		
				} // that .removeEventListener("click" , choose);
		
			}
		
		
		}
		
		function reset(){
			
			qalamisclicked = false ;
			that.gotoAndStop(that.parent.currentcolor);
		
			
		}
		that.reset = reset ;
	}
	this.frame_7 = function() {
		this.stop();
		
		var that = this;
		var list_frame = {
			'aswad': {
				'frame': 1,
				'color': "#000000"
			},
			'ahmar': {
				'frame': 3,
				'color': "#ff0000"
			},
			'azrak': {
				'frame': 2,
				'color': "#0000ff"
			},
			'asfar': {
				'frame': 4,
				'color': "#ffff00"
			},
			'akhdar': {
				'frame': 5,
				'color': "#008000"
			},
			'purple': {
				'frame': 6,
				'color': "#8a2be2"
			},
		
		}
		
		if (!that.firsTime) {
		
			console.log("that.add firsTime the lstnr");
			that.aswad.addEventListener("click", qlm_loun);
			that.ahmar.addEventListener("click", qlm_loun);
			that.asfar.addEventListener("click", qlm_loun);
			that.akhdar.addEventListener("click", qlm_loun);
			that.azrak.addEventListener("click", qlm_loun);
			that.purple.addEventListener("click", qlm_loun);
		
			that.firsTime = true;
		}
		
		
		function qlm_loun(evt) {
		
			evt.stopImmediatePropagation();
			obj = list_frame[evt.currentTarget.name];
			
			evt.currentTarget.parent.gotoAndStop(obj['frame']);
		
			that.parent.color = obj['color'];
		
			that.parent.currentcolor = obj['frame'];
		
		}
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_1318();
	this.instance_1.setTransform(-13.2,-13.1,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_1311();
	this.instance_2.setTransform(-13.2,-13.1,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_1312();
	this.instance_3.setTransform(-13.2,-13.1,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_1313();
	this.instance_4.setTransform(-13.2,-13.1,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_1314();
	this.instance_5.setTransform(-13.2,-13.1,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_1315();
	this.instance_6.setTransform(-13.2,-13.1,0.3333,0.3333);

	this.instance_7 = new lib.CachedBmp_1316();
	this.instance_7.setTransform(-13.2,-13.1,0.3333,0.3333);

	this.azrak = new lib.Symbol21();
	this.azrak.name = "azrak";
	this.azrak.setTransform(56.3,-36);

	this.ahmar = new lib.Symbol20();
	this.ahmar.name = "ahmar";
	this.ahmar.setTransform(26.6,-36);

	this.aswad = new lib.Symbol19();
	this.aswad.name = "aswad";
	this.aswad.setTransform(-3.2,-36);
	this.aswad.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.aswad.cache(-14,-15,28,30);

	this.purple = new lib.Symbol18();
	this.purple.name = "purple";
	this.purple.setTransform(56.3,-67.55);

	this.asfar = new lib.Symbol17();
	this.asfar.name = "asfar";
	this.asfar.setTransform(26.6,-67.55);

	this.akhdar = new lib.Symbol16();
	this.akhdar.name = "akhdar";
	this.akhdar.setTransform(-3.2,-67.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_1},{t:this.akhdar,p:{skewX:0,y:-67.55}},{t:this.asfar,p:{skewX:0,y:-67.55}},{t:this.purple,p:{skewX:0,y:-67.55}},{t:this.aswad,p:{skewX:0,y:-36}},{t:this.ahmar,p:{skewX:0,y:-36}},{t:this.azrak,p:{skewX:0,y:-36}}]},1).to({state:[{t:this.instance_1},{t:this.akhdar,p:{skewX:180,y:63.55}},{t:this.asfar,p:{skewX:180,y:63.55}},{t:this.purple,p:{skewX:180,y:63.55}},{t:this.aswad,p:{skewX:180,y:32}},{t:this.ahmar,p:{skewX:180,y:32}},{t:this.azrak,p:{skewX:180,y:32}}]},1).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(1.35,0.05);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-80.5,83.5,157);


(lib.Symbol14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var that = this ;
		that.listeners_are_added = false;
		
		that.addEventListener("click", chosSomk);
		var somk_is_clicked = false ;
		
		function chosSomk(evt) {
		
			if (evt.nativeEvent instanceof MouseEvent) {
		
					 if(that.parent.isdraged) return ;
					
			somk_is_clicked = !somk_is_clicked;
			if (somk_is_clicked) {
				var frm = that.parent.parent.isLeft ? 4 : 5 ;
				
				
				that.gotoAndStop(frm);
				
		
			} else {
				that.gotoAndStop(that.parent.currentsomk);
			}
		}
		}
		function reset(){
			
			somk_is_clicked = false ;
			that.gotoAndStop(that.parent.currentsomk);
		
			
		}
		that.reset = reset ;
	}
	this.frame_4 = function() {
		var that = this ;
		
		if( ! that.listeners_are_added){
			
			that.mysaghir.addEventListener("click", tosaghir);
			that.myawsat.addEventListener("click", toawsat);
			that.mykabir.addEventListener("click", tokabir);
		
			 that.listeners_are_added = true;
		}
		
		
		function tosaghir(evt) {
		
			evt.stopImmediatePropagation();
			
			that.gotoAndStop(1);
			
			that.parent.somk =1;
			
			that.parent.currentsomk = 1 ;
		   
		
		}
		
		function toawsat(evt) {
		
			//alert("from somk frame 5 awsat");
			evt.stopImmediatePropagation();
			
			that.gotoAndStop(2);
			
			that.parent.somk =3;
		   
			that.parent.currentsomk = 2;
		  
		
		}
		
		
		function tokabir(evt) {
		
			evt.stopImmediatePropagation();
			
			that.gotoAndStop(3);
			
			that.parent.somk =6;
		   
		    that.parent.currentsomk = 3;
		}
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1308();
	this.instance.setTransform(-13.15,-8.15,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_1305();
	this.instance_1.setTransform(-13.15,-8.15,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_1306();
	this.instance_2.setTransform(-13.15,-8.15,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_1307();
	this.instance_3.setTransform(-13.15,-8.15,0.3333,0.3333);

	this.mysaghir = new lib.Symbol24();
	this.mysaghir.name = "mysaghir";
	this.mysaghir.setTransform(0.85,-27.65,1,1,-90);

	this.myawsat = new lib.Symbol23();
	this.myawsat.name = "myawsat";
	this.myawsat.setTransform(0.95,-55.1,1,1,-90);

	this.mykabir = new lib.Symbol22();
	this.mykabir.name = "mykabir";
	this.mykabir.setTransform(0.8,-84.95,1,1,-90);

	this.instance_4 = new lib.CachedBmp_1309();
	this.instance_4.setTransform(-13.5,-11.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance},{t:this.mykabir,p:{rotation:-90,y:-84.95}},{t:this.myawsat,p:{rotation:-90,x:0.95,y:-55.1}},{t:this.mysaghir,p:{rotation:-90,x:0.85,y:-27.65}}]},1).to({state:[{t:this.instance_4},{t:this.mykabir,p:{rotation:90,y:88.25}},{t:this.myawsat,p:{rotation:90,x:0.65,y:58.4}},{t:this.mysaghir,p:{rotation:90,x:0.75,y:30.95}}]},1).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(5).to({skewX:180,y:2.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-103.5,48.2,210.3);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var that = this;
		that.isadded ;
		var mimsaha_isclicked = false;
		//we double the somk value if we activate the erase function.so we have to divide it again.
		
		
		that.addEventListener("click", toMimsaha);
		
		function toMimsaha(evt) {
			if (evt.nativeEvent instanceof MouseEvent) {
		
		        	 if(that.parent.isdraged) return ;
					
				mimsaha_isclicked = !mimsaha_isclicked;
				if (mimsaha_isclicked) {
					var frm = that.parent.parent.isLeft ? 3 : 4 ;
					 that.gotoAndStop(frm);
					
				} else {
					that.gotoAndStop(1);
				}
			}
		}
		function reset(){
			
			mimsaha_isclicked = false ;
			that.gotoAndStop(1);
		
			
		}
		that.reset = reset ;
	}
	this.frame_3 = function() {
		var that = this;
		
		that.isadded;
		
		if (!that.isadded) {
		
			that.myerase.addEventListener("click", toerase);
			that.myAll.addEventListener("click", toAll);
		
			that.isadded = true;
		}
		
		
		
		function toerase(evt) {
		
			evt.stopImmediatePropagation();
		
			//that.myerase.removeEventListener("click", toerase);
		
			that.parent.isErase = true;
		
			that.gotoAndStop(1);
		
		
		}
		
		
		
		function toAll(evt) {
		
			evt.stopImmediatePropagation();
		
			var sbr_shape = that.parent.parent.getCont().getChildByName("sbr").getChildByName('shapeDraw');
		
			sbr_shape.graphics.clear();
			sbr_shape.updateCache();
		
			var f_sbr_shape = that.parent.parent.getCont().getChildByName("sbr").getChildByName('f_shapeDraw');
		
			f_sbr_shape.graphics.clear();
			f_sbr_shape.updateCache();
		
			that.parent.isErase = false;
		
			that.parent.parent.kom(evt);
		}
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_1303();
	this.instance_1.setTransform(-13.7,-9.2,0.3333,0.3333);

	this.myAll = new lib.Symbol26();
	this.myAll.name = "myAll";
	this.myAll.setTransform(14.35,-32.85);

	this.myerase = new lib.Symbol25();
	this.myerase.name = "myerase";
	this.myerase.setTransform(-16.35,-34.35,0.9333,0.9444,29.9991);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1},{t:this.myerase,p:{y:-34.35}},{t:this.myAll,p:{y:-32.85}}]},3).to({state:[{t:this.instance_1},{t:this.myerase,p:{y:31.65}},{t:this.myAll,p:{y:33.15}}]},1).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-2.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-63.9,75.4,120);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1300();
	this.instance.setTransform(-12.7,-13.6,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12_1, new cjs.Rectangle(-15.2,-14.7,31.3,29.5), null);


(lib.Symbol11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_1299();
	this.instance_1.setTransform(-11.85,-12.8,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(-16.2,-14.9,31.299999999999997,29.5), null);


(lib.Symbol7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470000").s().p("AgPBjIg5gKQgJgCgHgFQgJgEgGgHQgFgGgEgJQgDgIAAgJIAAhYIABgJQACgKAGgJQAGgJAIgFQAIgFAKgDQALgCALACIAgAGQAGABAFADQAFADAEADIAKgGQAFgDAGgBIAggGQAMgCALADQAMADAIAHQAKAHAFAKQAFAKAAAMIAABYQAAAJgDAIQgEAJgGAGQgGAHgIAEQgHAFgKACIg4AKQgHACgJAAQgHAAgIgCgAA6hIIggAGQgFABgDAEQgDAEgBAFIAAB7IA1gKQAIAAAHgHQAEgHAAgIIAAhYIAAgEQgBgKgIgFQgIgEgIAAIgDAAgAhOhCQgIAHAAAKIAABYQAAAIAFAHQAGAGAIABIA1AKIAAh7QAAgFgDgEQgDgEgFgBIghgGIgEgBQgKAAgGAHg");
	this.shape_1.setTransform(0,0.0179);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.3,0.8);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7_1, new cjs.Rectangle(-15.7,-14.1,31.299999999999997,29.5), null);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.re_set = new lib.Symbol28();
	this.re_set.name = "re_set";
	this.re_set.setTransform(-1.3,3.9,0.7405,0.6596,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.re_set).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy2();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-1.45,4.1,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6_1, new cjs.Rectangle(-17,-10.6,31.4,29.5), null);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470000").s().p("AhVBnQgJABgHgHQgGgGAAgJIAAhYQAAgHACgFQADgGAFgEIA/g8QAHgIAJgDQAJgDAJgBQAKABAIADQAKADAHAIIA/A8QAFAEACAGQADAFAAAHIAABYQAAAJgHAGQgGAHgJgBgAABARQAHAAAHADQAGACAFAEQAEAFADAHQADAFAAAHIAAAbIAtAAIAAhTQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIg/g9QgHgHgJABQgIgBgHAHIhAA9IgBADIAABTIAtAAIAAgbQAAgHACgFQADgHAFgFQAFgEAGgCQAGgDAHAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.2,0.8,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(-15.7,-13.9,31.299999999999997,29.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("ABRBkIgogoQgMAJgOAFQgNAEgOAAQgPAAgNgEQgOgFgMgJQgPgLgJgQQgJgQgCgRQgDgRAEgRQAFgSALgPQALgPAQgJQAPgJARgCQASgDAQAEQASAEAOAMQAPALAJAQQAJAPADASQACARgEARQgFASgLAPIAoAoQAEAEAAAFQAAAFgEAEQgDAEgGAAQgFAAgEgEgAgkhHQgMAFgJAIQgJAJgFAMQgFAMAAANQAAAMAFAMQAFAMAJAJQAJAJAMAFQALAFAOAAQAMAAALgFQAMgFAJgJQAIgJAGgMQAFgMAAgMQAAgNgFgMQgGgMgIgJQgJgIgMgFQgLgGgMAAQgOAAgLAGgAgmAAQgFAAgEgDQgEgEAAgFQAAgGAEgDQAEgEAFAAIAzAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEADgFAAg");
	this.shape.setTransform(0.0269,0.0269);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy3();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-1.3,-1,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-16.8,-15.7,31.3,29.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("ABKBkIgkgoQgLAJgNAEQgNAFgMAAQgNAAgNgFQgNgEgLgJQgNgLgIgQQgJgQgCgRQgCgRAEgRQAEgSAKgPQAKgPAOgJQAOgJAQgCQAQgDAPAEQAQAFAOALQANALAJAQQAIAPACASQACASgEAQQgEASgKAOIAlApQADAEAAAFQAAAFgDAEQgEAEgEAAQgFAAgEgEgAgihHQgKAEgIAJQgIAJgFAMQgEAMAAANQAAAMAEAMQAFAMAIAJQAIAJAKAFQALAFAMAAQALAAALgFQALgFAIgJQAIgJAFgMQAEgMAAgMQAAgNgEgMQgFgMgIgJQgIgJgLgEQgLgGgLAAQgMAAgLAGg");
	this.shape.setTransform(0.0019,-5.2481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470000").s().p("AgHAkQgEgEAAgGIAAgNIgMAAQgFAAgDgDQgDgFAAgFQAAgFADgDQADgEAFAAIAMAAIAAgNQAAgFAEgEQADgEAEAAQAFAAADAEQAEAEAAAFIAAANIAMAAQAFAAADAEQADADAAAFQAAAFgDAFQgDADgFAAIgMAAIAAANQAAAGgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(-1.175,-6.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy4();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-1,-5.05,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-16.5,-19.8,31.3,29.5), null);


(lib.settin_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AhRAPQgFAAgEgEQgDgFAAgGQAAgFADgFQAEgEAFAAICjAAQAFAAADAEQAEAFAAAFQAAAGgEAFQgDAEgFAAg");
	this.shape.setTransform(0.15,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470000").s().p("AhRAPQgFAAgEgFQgDgDAAgHQAAgFADgEQAEgFAFAAICjAAQAFAAADAFQAEAEAAAFQAAAHgEADQgDAFgFAAg");
	this.shape_1.setTransform(0.15,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#470000").s().p("AhRAPQgFAAgEgFQgDgEAAgGQAAgFADgFQAEgEAFAAICjAAQAFAAADAEQAEAFAAAFQAAAGgEAEQgDAFgFAAg");
	this.shape_2.setTransform(0.15,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy7();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.2,0.6,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.settin_btn, new cjs.Rectangle(-15.7,-14.1,31.299999999999997,29.5), null);


(lib.re_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AgsCEQgLAAgKgGQgKgEgIgIQgHgJgFgLQgEgLAAgMIAAiOQAAgMAEgLQAFgLAHgIQAIgJAKgEQAKgFALAAIBZAAQALAAAKAFQALAEAHAJQAIAIAEALQAEALAAAMIAACOQAAAMgEALQgEALgIAJQgHAIgLAEQgKAGgLAAgAg9haQgIAIAAALIAACJIA8AAIAAALQAAAEADADQADADADAAQAFAAACgDQADgDAAgEIAAgLIA8AAIAAiJQAAgLgHgIQgHgIgLAAIhZAAQgKAAgHAIg");
	this.shape.setTransform(4.7,-0.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470000").s().p("AgrCEQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHAAIAbAAIAAgWIg3AAQgMAAgLgFQgLgFgIgIQgJgIgFgLQgFgLABgMIAAhYQgBgMAFgLQAFgLAJgIQAIgIALgFQALgFAMAAICOAAQANAAALAFQALAFAIAIQAJAIAEALQAGALgBAMIAABYQABAMgGALQgEALgJAIQgIAIgLAFQgLAFgNAAIg3AAIAAAWIAcAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgGAFgGAAgAhahaQgJAIAAALIAABSIDGAAIAAhSQAAgLgIgIQgIgIgMAAIiOAAQgMAAgHAIg");
	this.shape_1.setTransform(4.5,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(4.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-14.5,31.3,29.5);


(lib.pageavant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AgmAuQgDgDAAgDIAAhQIABgCIACgDQADgCAFAAQAFAAADACIA8ApQAEACAAACQAAADgEACIg8ApIgEACIgEAAQgFAAgDgCg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy6();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.2,0.6,1,0.8305,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pageavant, new cjs.Rectangle(-15.7,-11.6,31.299999999999997,24.5), null);


(lib.pageapre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AgmAvQgDgDAAgDIAAhRIABgDIACgDQADgCAFAAQAFAAADACIA8AqQAEACAAACQAAADgEACIg8AqIgEACIgEAAQgFAAgDgCg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy5();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-0.2,0.55,1,0.8949,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pageapre, new cjs.Rectangle(-15.7,-12.6,31.299999999999997,26.4), null);


(lib.cswsoli33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(670.6,324.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(627.1,324.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKF = new lib.soline();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(36.05,129.15,10.1343,1,0,0,0,-31.7,-1.2);

	this.qKLKT = new lib.soline();
	this.qKLKT.name = "qKLKT";
	this.qKLKT.setTransform(38.25,78.35,9.8154,1,0,0,0,-31.5,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKT},{t:this.AKLKF}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(293.3,26);

	this.instance_1 = new lib.CP1();
	this.instance_1.setTransform(30,60,0.6195,0.6775);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["قالب القصص_atlas_7"],1);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.415,0,0,0.352,-687,-96)).s().p("AwLO1IAA9pMAgXAAAIAAdpg")
	}.bind(this);
	this.shape.setTransform(370.6,259.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli33, new cjs.Rectangle(30,8,664.1,346.5), null);


(lib.cswsoli32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(672.6,315.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(629.1,315.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKT = new lib.soline();
	this.AKLKT.name = "AKLKT";
	this.AKLKT.setTransform(50.35,80.35,9.7213,1,0,0,0,-31.2,-1.3);

	this.qKLKF = new lib.soline();
	this.qKLKF.name = "qKLKF";
	this.qKLKF.setTransform(44.95,121.05,9.415,1,0,0,0,-31.8,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKF},{t:this.AKLKT}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(288.05,27);

	this.instance_1 = new lib.CP2();
	this.instance_1.setTransform(30,61,0.764,0.5901);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["قالب القصص_atlas_5"],1);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.382,0,0,0.307,-588.8,-98)).s().p("A4lPJIAA+RMAxLAAAIAAeRg")
	}.bind(this);
	this.shape.setTransform(369.525,244.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli32, new cjs.Rectangle(30,9,699.1,332.2), null);


(lib.cswsoli31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(670.6,314.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(627.1,314.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKT = new lib.soline();
	this.AKLKT.name = "AKLKT";
	this.AKLKT.setTransform(46.5,206.05,7.0293,1,0,0,0,-31.5,-1.3);

	this.qKLKF = new lib.soline();
	this.qKLKF.name = "qKLKF";
	this.qKLKF.setTransform(48,163.05,6.4815,1,0,0,0,-31.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKF},{t:this.AKLKT}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(296.05,26);

	this.instance_1 = new lib.souligne9();
	this.instance_1.setTransform(30,98,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli31, new cjs.Rectangle(30,8,660.6,325.3), null);


(lib.cswsoli30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(669.6,314.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(626.1,314.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKF = new lib.soline();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(44.45,204.05,4.9108,1,0,0,0,-31.8,-1.3);

	this.qKLKT = new lib.soline();
	this.qKLKT.name = "qKLKT";
	this.qKLKT.setTransform(45.65,161.15,4.8703,1,0,0,0,-31.8,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKT},{t:this.AKLKF}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(295.05,26);

	this.instance_1 = new lib.souligne8();
	this.instance_1.setTransform(29,98,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli30, new cjs.Rectangle(29,8,660.6,325.3), null);


(lib.cswsoli29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(669.6,318.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(626.1,318.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKF = new lib.soline();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(45.65,216.05,4.575,1,0,0,0,-31.9,-1.3);

	this.qKLKT = new lib.soline();
	this.qKLKT.name = "qKLKT";
	this.qKLKT.setTransform(47.35,173.05,4.4314,1,0,0,0,-31.7,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKT},{t:this.AKLKF}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(295.05,30);

	this.instance_1 = new lib.souligne7();
	this.instance_1.setTransform(29,102,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli29, new cjs.Rectangle(29,12,660.6,325.3), null);


(lib.cswsoli28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(670.6,327.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(627.1,327.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKF = new lib.soline();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(42.7,259.05,4.9763,1,0,0,0,-31.7,-1.3);

	this.qKLKT = new lib.soline();
	this.qKLKT.name = "qKLKT";
	this.qKLKT.setTransform(42.85,212.05,5.0778,1,0,0,0,-32,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKT},{t:this.AKLKF}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(296.05,39);

	this.instance_1 = new lib.souligne6();
	this.instance_1.setTransform(30,111,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli28, new cjs.Rectangle(30,21,660.6,325.3), null);


(lib.cswsoli27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(670.6,319.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(627.1,319.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKT = new lib.soline();
	this.AKLKT.name = "AKLKT";
	this.AKLKT.setTransform(44.2,215.05,6.0516,1,0,0,0,-32,-1.3);

	this.qKLKF = new lib.soline();
	this.qKLKF.name = "qKLKF";
	this.qKLKF.setTransform(45.2,173.05,5.603,1,0,0,0,-31.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKF},{t:this.AKLKT}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(296.05,31);

	this.instance_1 = new lib.souligne5();
	this.instance_1.setTransform(30,103,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli27, new cjs.Rectangle(30,13,660.6,325.3), null);


(lib.cswsoli26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(670.6,318.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(627.1,318.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKT = new lib.soline();
	this.AKLKT.name = "AKLKT";
	this.AKLKT.setTransform(45.95,218.05,2.381,1,0,0,0,-31.7,-1.3);

	this.qKLKF = new lib.soline();
	this.qKLKF.name = "qKLKF";
	this.qKLKF.setTransform(46.95,173.05,3.0149,1,0,0,0,-31.8,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKF},{t:this.AKLKT}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(296.05,30);

	this.instance_1 = new lib.souligne4();
	this.instance_1.setTransform(30,102,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli26, new cjs.Rectangle(30,12,660.6,325.3), null);


(lib.cswsoli25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(663.6,312.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(620.1,312.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKF = new lib.soline();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(56.25,159.65,9.0361,1,0,0,0,-31.9,-1.3);

	this.qKLKT = new lib.soline();
	this.qKLKT.name = "qKLKT";
	this.qKLKT.setTransform(59.35,115.65,9.0304,1,0,0,0,-31.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKT},{t:this.AKLKF}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(289.05,24);

	this.instance_1 = new lib.HistoiresCPpngcopy();
	this.instance_1.setTransform(44,97,0.6158,0.6102);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["قالب القصص_atlas_4"],0);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.371,0,0,0.307,-616,-98.9)).s().p("Aw+PSIAA+jMAh9AAAIAAejg")
	}.bind(this);
	this.shape.setTransform(345.75,287.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli25, new cjs.Rectangle(31,6,654.1,379.6), null);


(lib.cswsoli24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(664.6,312.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(621.1,312.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKF = new lib.soline();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(35.45,188.05,2.6628,1,0,0,0,-31.9,-1.3);

	this.qKLKT = new lib.soline();
	this.qKLKT.name = "qKLKT";
	this.qKLKT.setTransform(37.25,143.05,4.6739,1,0,0,0,-31.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKT},{t:this.AKLKF}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(290.05,24);

	this.instance_1 = new lib.souligne2();
	this.instance_1.setTransform(24,96,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli24, new cjs.Rectangle(24,6,660.6,325.3), null);


(lib.cswsoli23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(664.6,322.05,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(621.1,322.1,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKF = new lib.soline();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(32.45,214.65,3.319,1,0,0,0,-31.9,-0.7);

	this.qKLKT = new lib.soline();
	this.qKLKT.name = "qKLKT";
	this.qKLKT.setTransform(131.15,169.05,2.9613,1,0,0,0,0.5,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKT},{t:this.AKLKF}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(290.05,34);

	this.instance_1 = new lib.souligne1();
	this.instance_1.setTransform(24,106,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli23, new cjs.Rectangle(24,16,660.6,325.3), null);


(lib.cswsoli22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(672.6,324,0.8528,0.8571,0,0,0,-0.4,3);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(629.1,324.05,0.8528,0.8571,0,0,0,-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// Layer_2
	this.AKLKT = new lib.soline();
	this.AKLKT.name = "AKLKT";
	this.AKLKT.setTransform(125.8,183,2.6321,1,0,0,0,0.5,-1.3);

	this.qKLKF = new lib.soline();
	this.qKLKF.name = "qKLKF";
	this.qKLKF.setTransform(213.85,138,5.1991,1,0,0,0,0.5,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qKLKF},{t:this.AKLKT}]}).wait(1));

	// image
	this.instance = new lib.Symbol119("synched",0);
	this.instance.setTransform(298.05,35.95);

	this.instance_1 = new lib.souligne0();
	this.instance_1.setTransform(32,108,0.3434,0.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswsoli22, new cjs.Rectangle(32,18,660.6,325.3), null);


(lib.cswmdnd33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol118();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587,237.15,1.0116,0.8545,0,0,0,0.1,0.6);

	this.dnd3 = new lib.Symbol117();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(426.05,237.2,1.0116,0.8545,0,0,0,0.1,0.4);

	this.dnd2 = new lib.Symbol116();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(266.35,236.3,1.0116,0.8545,0,0,0,0.1,0.5);

	this.dnd1 = new lib.Symbol115();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(103.15,238.35,1.0116,0.8545,0,0,0,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(595,116.85,1.7908,0.3865,0,0,0,7.2,-23.7);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(325.55,295.25,1.3195,0.3782,0,0,0,0.7,-24.2);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(54.15,115,0.9853,0.3262,0,0,0,0.6,-24.2);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(467.9,286.9,4.0791,0.396,0,0,0,0.8,-24);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(37.8,225.8,1.8271,0.9311,0,0,0,-6.9,24.7);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(650.85,278.2,2.5193,0.6465,0,0,0,7,-24.4);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(291.75,75.45,2.9855,0.843,0,0,0,-6.8,-24.2);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(152.65,83.2,1.3033,0.2538,0,0,0,0.1,-24.4);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(163.2,202.95,1.2715,0.933,0,0,0,7.1,0.1);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(206.25,74.2,1.6035,0.7532,0,0,0,0.2,-24.2);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(371.25,78.3,1.5317,0.7527,0,0,0,0.5,-24.1);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(317.65,176.1,1.9415,0.8959,0,0,0,0.8,-23.9);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(35.65,276.9,1.9988,1.1082,0,0,0,-6.8,-24.4);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(133.15,327.25,2.7221,0.9718,0,0,0.1834,-6.7,26.2);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(194.35,273.8,1.7546,0.8327,0,0,0,-6.5,-23.9);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(336.05,273.9,3.0156,0.3356,0,0,0,7.3,-24.2);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(196.75,177.4,1.8303,0.7774,0,0,0,-7,-24.4);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(518.65,276.1,2.6044,1.1382,0,0,0,-6.9,-23.9);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(357.35,285.75,1.4502,0.4198,0,0,0,-6.5,-24.3);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(495.2,76.55,3.1689,0.864,0,0,0,7.1,-24.2);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(636.1,185.5,3.1669,0.3486,0,0,0,0.1,-24.4);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(529.25,175.25,1.3616,1.0032,0,0,0,0.2,-24.1);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(449.6,186.2,3.0257,0.3577,0,0,0,-6.5,-24.1);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(359.2,179.35,1.1998,0.7978,0,-0.2049,-0.3745,-7,-24.4);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(520.75,78.75,1.0411,1.1145,0,0,0,-6.9,-24.3);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(652.4,78.5,1.7908,1.0585,0,0,0,7.2,-23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_26 = new lib.retit("synched",0);
	this.instance_26.setTransform(341.55,45.8,1.0116,0.8545);

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(587.4,241.5,0.9616,0.8545,0,0,0,0.1,0);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_27.cache(-84,-205,169,411);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(426.55,241.5,0.9616,0.8545,0,0,0,0.1,0);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.instance_29 = new lib.Symbol12("synched",0);
	this.instance_29.setTransform(264.7,241.5,0.9616,0.8545,0,0,0,0.1,0);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_29.cache(-84,-205,169,411);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(103.85,241.5,0.9616,0.8545,0,0,0,0.1,0);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	// image
	this.instance_31 = new lib.dnd11();
	this.instance_31.setTransform(29,71,0.3,0.2325);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd33, new cjs.Rectangle(24.6,20.2,642,395.3), null);


(lib.cswmdnd32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol114();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(588.1,236.2,1.0148,0.848,0,0,0,0.1,0.4);

	this.dnd3 = new lib.Symbol113();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(425.95,236.35,1.0148,0.848,0,0,0,0,0.4);

	this.dnd2 = new lib.Symbol112();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(263.3,235.9,1.0148,0.848,0,0,0,0.1,0.4);

	this.dnd1 = new lib.Symbol111();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(101.55,235.95,1.0148,0.848,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(132.85,79.45,0.9884,0.3237,0,0,0,0.6,-24.4);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(481.4,278.05,1.341,0.7236,0,0,0,0.8,-24.1);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(35.95,206.7,1.3214,0.4256,0,0,0,-6.9,24.7);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(75.1,98.1,2.9736,0.7603,0,0,0,7.7,0.2);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(635.8,277.65,1.4018,1.0135,0,0,0,-7,-24.2);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(298.7,77.4,2.3685,0.8366,0,0,0,-6.9,-24.3);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(165.25,98.35,1.664,0.6421,0,0,0,7.4,0.1);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(169.05,197.6,2.938,0.4077,0,0,0,7,0.1);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(205.55,79.6,1.6086,0.8783,0,0,0,0.2,-24.2);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(370.35,77.7,1.5366,0.747,0,0,0,0.5,-24.2);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(316.55,174.9,2.0988,0.7666,0,0,0,0.8,-23.9);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(33.65,274.9,2.8917,0.7312,0,0,0,-6.8,-24.4);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(131.3,324.85,2.7307,0.9644,0,0,0.1815,-6.8,26.2);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(192.8,271.7,2.3615,1.1144,0,0,0,-6.6,-24.1);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(334.8,271.85,3.0253,1.116,0,0,0,7.2,-24.3);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(195.3,176.1,1.8361,0.7715,0,0,0,-7,-24.4);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(518.4,274.1,1.7335,0.9281,0,0,0,-6.9,-23.9);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(356.35,276.85,1.713,0.6593,0,0,0,-6.6,-24.4);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(494.45,79.65,2.4883,0.8575,0,0,0,7,-24.2);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(635.95,177.85,1.6416,0.7697,0,0,0,0.1,-24.5);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(531.8,175.65,1.7294,0.8824,0,0,0,0.1,-24.2);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(454.65,176.3,2.0692,1.1399,0,0,0,-6.7,-24.2);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(360.75,180.9,1.422,0.8775,0,-0.2092,-0.3707,-7.1,-24.6);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(518.25,79.4,1.4791,0.7596,0,0,0,-7,-24.4);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(657.1,79.7,2.5241,0.7616,0,0,0,7,-23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_25 = new lib.retit("synched",0);
	this.instance_25.setTransform(340.6,45.5,1.0148,0.848);

	this.instance_26 = new lib.Symbol12("synched",0);
	this.instance_26.setTransform(587.15,239.7,0.9647,0.848);
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_26.cache(-84,-205,169,411);

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(425.8,239.7,0.9647,0.848);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_27.cache(-84,-205,169,411);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(263.4,239.7,0.9647,0.848);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.instance_29 = new lib.Symbol12("synched",0);
	this.instance_29.setTransform(102.05,239.7,0.9647,0.848);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_29.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(1));

	// image
	this.instance_30 = new lib.dnd10();
	this.instance_30.setTransform(27,71,0.301,0.2308);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd32, new cjs.Rectangle(22.6,20.1,644.1,392.29999999999995), null);


(lib.cswmdnd31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol110();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587.25,235.7,1.0132,0.8458,0,0,0,0,0.5);

	this.dnd3 = new lib.Symbol109();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(425.55,236.75,1.0132,0.8458,0,0,0,0.1,0.4);

	this.dnd2 = new lib.Symbol108();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(265.3,235.55,1.0132,0.8458,0,0,0,0,0.5);

	this.dnd1 = new lib.Symbol107();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(103.35,236.4,1.0132,0.8458,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(70.3,310.1,1.9468,0.3312,0,0,0,0.7,-24.2);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(373.95,312.65,2.0127,0.2968,0,0,0,0.7,-23.9);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(475.7,286.95,2.2314,0.3572,0,0,0,0.7,-24.2);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(54.6,173.1,2.3987,0.7779,0,0,0,0.4,-23.9);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(65.35,97.9,1.8337,0.7583,0,0,0,7.7,0.1);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(619.8,273.15,2.4804,1.0109,0,0,0,-7,-24.3);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(301.5,77.4,1.3465,0.7481,0,0,0,0.2,-24);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(164.45,93.9,1.8326,0.6404,0,0,0,7.4,0.1);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(169.75,198.4,3.1826,0.9581,0,0,0,7,0);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(206.3,79.45,1.6061,0.876,0,0,0,0.2,-24.2);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(370.85,77.65,1.5342,0.7451,0,0,0,0.5,-24.1);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(318.8,174.4,2.4253,0.5993,0,0,0,0.7,-24.1);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(34.55,274.25,1.7866,0.7293,0,0,0,-6.9,-24.4);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(132.15,324.05,2.7264,0.962,0,0,0.1812,-6.8,26.2);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(193.8,271.05,2.3578,1.1116,0,0,0,-6.5,-24.1);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(335.35,271.1,1.877,1.1131,0,0,0,7.2,-24.4);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(196.25,197.25,2.8517,1.0726,0,0,0,-7,0);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(524.05,273.6,1.7307,1.091,0,0,0,-6.9,-23.9);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(356.55,280.4,2.6039,0.3745,0,0,0,-6.7,-24.4);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(449.3,79.5,3.2813,0.8553,0,0,0,-6.8,-24.2);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(648,194.95,1.639,0.7072,0,0,0,7.4,0.2);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(530.5,175.25,1.7267,0.8802,0,0,0,0.1,-24.2);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(500.6,197.4,2.6233,0.748,0,0,0,7.8,0);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(356.45,195.05,2.1716,0.7061,0,0,-3.5583,-6.8,0.2);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(518.5,129.75,2.3765,1.0269,0,0,0,-7,24.7);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(649.55,79.45,2.1214,0.8741,0,0,0,7,-24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_26 = new lib.retit("synched",0);
	this.instance_26.setTransform(341.1,45.45,1.0132,0.8458);

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(587.3,239.15,0.9632,0.8458);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_27.cache(-84,-205,169,411);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(426.2,239.15,0.9632,0.8458);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.instance_29 = new lib.Symbol12("synched",0);
	this.instance_29.setTransform(264.05,239.15,0.9632,0.8458);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_29.cache(-84,-205,169,411);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(102.95,239.15,0.9632,0.8458);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	// image
	this.instance_31 = new lib.dnd9();
	this.instance_31.setTransform(28,71,0.3005,0.2302);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd31, new cjs.Rectangle(23.7,20.1,643,391.29999999999995), null);


(lib.cswmdnd30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol106();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587,234.8,1.01,0.848,0,0,0,0,0.5);

	this.dnd3 = new lib.Symbol105();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(427.6,234.9,1.01,0.848,0,0,0,0.1,0.4);

	this.dnd2 = new lib.Symbol104();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(265.6,234.95,1.01,0.848,0,0,0,0.1,0.5);

	this.dnd1 = new lib.Symbol103();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(103.75,237.25,1.01,0.848,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(146.3,275.25,1.3878,0.393,0,0,0,0.6,-24.3);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(374.85,313.4,2.0064,0.2975,0,0,0,0.7,-24.1);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(475.1,310.85,2.9658,0.3582,0,0,0,0.6,-24.2);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(56.5,173.55,1.9001,1.174,0,0,0,0.4,-23.9);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(329.05,209.7,1.2631,0.3459,0,0,0,0.1,-24.3);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(64.3,106.25,1.5455,0.9341,0,0,0,7.5,0);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(480.45,272.6,1.2396,0.3247,0,0,0,0.1,-24.4);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(631.3,273.85,2.6526,0.4537,0,0,0,0.6,-24.4);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(310.9,110.05,1.3422,0.2644,0,0,0,0.2,-24.2);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(165.95,116.8,1.511,0.4165,0,0,0,7.4,0);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(165.1,176,1.7344,0.9605,0,0,0,0.5,-23.8);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(217.55,90.75,2.2384,0.3589,0,0,0,0.1,-24.4);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(371.55,95.55,2.0667,0.6346,0,0,0,0.4,-24.2);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(319.9,174.9,2.4177,0.6008,0,0,0,0.7,-23.9);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(398.7,215.85,1.9081,0.3459,0,0,0,0.1,-24.3);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(36.85,300.6,1.9899,1.0411,0,0,0,-6.8,0.2);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(129.7,316.4,2.9075,0.2752,0,0,0.1825,-7,0.4);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(196.9,293.1,2.3504,0.8708,0,0,0,-6.9,0.4);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(317.6,312,2.6555,0.8217,0,0,0,0.1,24.6);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(197.7,197.7,2.8427,1.0753,0,0,0,-7,0);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(532.5,273.6,1.7253,0.8488,0,0,0,0.1,-24.4);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(358.5,283.1,1.9035,0.3754,0,0,0,-6.2,0.1);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(458.25,121.55,1.3453,0.3142,0,0,0,-6.8,0.5);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(650.05,200.4,1.6339,0.9865,0,0,0,7.4,0.1);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(537.45,213,1.7213,0.7615,0,0,0,0.1,24.9);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(501.1,205,2.615,1.1314,0,0,0,7.8,0);

	this.instance_26 = new lib.mask("synched",0);
	this.instance_26.setTransform(379.6,174.15,2.9522,0.8002,0,0,0,0.3,-24.1);

	this.instance_27 = new lib.mask("synched",0);
	this.instance_27.setTransform(538.35,117.65,1.5755,0.3115,0,0,0,7.2,0.1);

	this.instance_28 = new lib.mask("synched",0);
	this.instance_28.setTransform(630.25,101.8,1.7889,0.5452,0,0,0,0.1,-24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_29 = new lib.retit("synched",0);
	this.instance_29.setTransform(342.1,45.5,1.01,0.848);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(587.5,239.7,0.9601,0.848);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.instance_31 = new lib.Symbol12("synched",0);
	this.instance_31.setTransform(426.9,239.7,0.9601,0.848);
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_31.cache(-84,-205,169,411);

	this.instance_32 = new lib.Symbol12("synched",0);
	this.instance_32.setTransform(265.3,239.7,0.9601,0.848);
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_32.cache(-84,-205,169,411);

	this.instance_33 = new lib.Symbol12("synched",0);
	this.instance_33.setTransform(104.7,239.7,0.9601,0.848);
	this.instance_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_33.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29}]}).wait(1));

	// image
	this.instance_34 = new lib.dnd8();
	this.instance_34.setTransform(30,71,0.2996,0.2308);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd30, new cjs.Rectangle(25.7,20.1,640.9,392.29999999999995), null);


(lib.cswmdnd29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol102();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587.95,233.7,1.0116,0.8499,0,0,0,0.1,0.4);

	this.dnd3 = new lib.Symbol101();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(425.4,233.75,1.0116,0.8499,0,0,0,0.1,0.4);

	this.dnd2 = new lib.Symbol100();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(264.65,233.7,1.0116,0.8499,0,0,0,0.1,0.4);

	this.dnd1 = new lib.Symbol99();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(103.35,234.95,1.0116,0.8499,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(519.05,292.1,1.8028,0.8401,0,0,0,-7,0.2);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(54.45,173.1,2.256,1.1766,0,0,0,0.4,-23.9);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(319.45,209.7,1.2651,0.3467,0,0,0,0.1,-24.2);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(229,95.9,1.4309,0.2972,0,0,0,0.5,0.7);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(62.2,105.65,1.9689,0.3827,0,0,0,7.5,0.1);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(238.55,204.65,1.2244,0.3019,0,0,0,7.2,0);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(473.1,272.4,2.4656,0.8204,0,0,0,0.1,-24.4);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(628.2,273.6,2.6567,0.8807,0,0,0,0.6,-24.4);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(298.1,102.5,1.3444,0.265,0,0,0,0.1,-24.4);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(165.15,107.6,1.5134,0.4174,0,0,0,7.4,0.1);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(157.75,172.2,1.2626,0.8484,0,0,0,0.5,-23.8);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(204.15,97.4,1.45,0.3596,0,0,0,0.1,-24.4);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(371.25,105.2,2.0699,0.2972,0,0,0,0.5,0.7);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(319.3,174.35,2.4215,0.6021,0,0,0,0.7,-24);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(323.25,98.55,1.9111,0.3467,0,0,0,0.1,-24.2);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(35.9,294.45,1.0341,0.7442,0,0,0,-6.8,0.2);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(137.1,294.45,2.4066,0.8438,0,0,0.1827,-7,0.1);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(196.1,303,2.354,0.8202,0,0,0,-6.9,0.3);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(317.05,311.8,1.6638,0.8235,0,0,0,0.1,24.6);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(209,202.25,1.5874,1.0777,0,0,0,0.6,0.3);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(319.45,282.75,1.728,0.8507,0,0,0,0,-24.4);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(358,293.95,1.9065,0.8125,0,0,0,-6.2,0.2);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(468.7,107.85,1.7155,0.3148,0,0,0,-6.8,0.5);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(649.8,202.1,2.6129,0.9887,0,0,0,7.4,0.1);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(535.2,226.65,1.724,1.1082,0,0,0,0.1,24.9);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(477.3,202.15,3.1261,1.1339,0,0,0,0.3,0.5);

	this.instance_26 = new lib.mask("synched",0);
	this.instance_26.setTransform(357.9,200.4,1.6446,1.0742,0,0,0,-6.9,0.1);

	this.instance_27 = new lib.mask("synched",0);
	this.instance_27.setTransform(547.55,107.65,2.0078,0.3122,0,0,0,7.2,0.1);

	this.instance_28 = new lib.mask("synched",0);
	this.instance_28.setTransform(632.65,105.85,1.4601,0.3627,0,0,0,-6.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_29 = new lib.retit("synched",0);
	this.instance_29.setTransform(341.6,44.75,1.0116,0.8499);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(587.35,239.4,0.9616,0.8499);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.instance_31 = new lib.Symbol12("synched",0);
	this.instance_31.setTransform(426.5,239.4,0.9616,0.8499);
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_31.cache(-84,-205,169,411);

	this.instance_32 = new lib.Symbol12("synched",0);
	this.instance_32.setTransform(264.65,239.4,0.9616,0.8499);
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_32.cache(-84,-205,169,411);

	this.instance_33 = new lib.Symbol12("synched",0);
	this.instance_33.setTransform(103.8,239.4,0.9616,0.8499);
	this.instance_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_33.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29}]}).wait(1));

	// image
	this.instance_34 = new lib.dnd7();
	this.instance_34.setTransform(29,70,0.3,0.2313);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd29, new cjs.Rectangle(24.6,19.3,642,393.09999999999997), null);


(lib.cswmdnd28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol98();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587.7,237.1,1.0147,0.8514,0,0,0,0.1,0.4);

	this.dnd3 = new lib.Symbol97();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(426.25,236.6,1.0147,0.8514,0,0,0,0.1,0.4);

	this.dnd2 = new lib.Symbol96();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(264.05,235.15,1.0147,0.8514,0,0,0,0.1,0.4);

	this.dnd1 = new lib.Symbol95();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(101.75,236.95,1.0147,0.8514,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(43.65,177.2,1.3153,0.8539,0,0,0,0.2,-24);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(316,201.25,1.917,0.3473,0,0,0,0.1,-24.2);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(223.55,82.95,2.0763,0.2977,0,0,0,0.5,0.7);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(57.35,128.35,1.7296,0.2793,0,0,0,7.4,0);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(120.45,285.55,1.1158,0.2945,0,0,0,-6.9,0);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(376.25,86.4,1.2282,0.3024,0,0,0,7.2,0);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(323.9,89.3,1.5146,0.3024,0,0,0,7.2,0);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(477.6,275.1,2.4733,1.0992,0,0,0,0.1,-24.4);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(635.05,276.25,2.1121,0.8822,0,0,0,0.5,-24.3);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(45.35,79.05,1.3485,0.2655,0,0,0,0.1,-24.3);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(172.3,95.3,1.5181,0.4181,0,0,0,7.4,0);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(156.2,177.6,1.2665,1.1043,0,0,0,0.5,-23.9);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(202.75,96.8,1.4545,0.7258,0,0,0,0.1,-24.4);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(369.85,108.5,2.0763,0.2977,0,0,0,0.5,0.7);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(315.5,179.75,2.429,0.3499,0,0,0,0.6,-24.2);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(322.2,114.75,1.917,0.3473,0,0,0,0.1,-24.2);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(34.05,296.7,2.7204,0.7456,0,0,0,-6.9,0.2);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(148.8,314.95,1.7293,0.3495,0,0,0,0.4,24.8);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(206.1,299.3,1.281,0.9248,0,0,0,0.2,0.2);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(314.5,324.3,1.6689,0.9906,0,0,0,0.1,24.6);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(207.5,197.95,1.5923,0.9219,0,0,0,0.5,0.2);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(530.35,273.05,1.7333,1.1817,0,0,0,0.1,-24.4);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(357.6,297.9,1.9124,0.8139,0,0,0,-6.2,0.1);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(468.1,96.15,1.7208,0.7253,0,0,0,-6.8,0.5);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(656.5,201.7,2.621,0.9904,0,0,0,7.4,0.1);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(526.3,231.35,1.7293,0.8082,0,0,0,0.1,24.8);

	this.instance_26 = new lib.mask("synched",0);
	this.instance_26.setTransform(476.2,201.6,1.7937,0.8282,0,0,0,0.1,0.4);

	this.instance_27 = new lib.mask("synched",0);
	this.instance_27.setTransform(357,199,1.6497,0.7832,0,0,0,-6.9,0);

	this.instance_28 = new lib.mask("synched",0);
	this.instance_28.setTransform(554.95,98.15,2.6982,0.7826,0,0,0,7,0);

	this.instance_29 = new lib.mask("synched",0);
	this.instance_29.setTransform(624.7,100.45,1.4646,0.5363,0,0,0,-6.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_30 = new lib.retit("synched",0);
	this.instance_30.setTransform(340.6,44.05,1.0147,0.8514);

	this.instance_31 = new lib.Symbol12("synched",0);
	this.instance_31.setTransform(587.15,239,0.9646,0.8514);
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_31.cache(-84,-205,169,411);

	this.instance_32 = new lib.Symbol12("synched",0);
	this.instance_32.setTransform(425.8,239,0.9646,0.8514);
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_32.cache(-84,-205,169,411);

	this.instance_33 = new lib.Symbol12("synched",0);
	this.instance_33.setTransform(263.45,239,0.9646,0.8514);
	this.instance_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_33.cache(-84,-205,169,411);

	this.instance_34 = new lib.Symbol12("synched",0);
	this.instance_34.setTransform(102.1,239,0.9646,0.8514);
	this.instance_34.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_34.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30}]}).wait(1));

	// image
	this.instance_35 = new lib.dnd6();
	this.instance_35.setTransform(27,70,0.301,0.2317);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd28, new cjs.Rectangle(22.7,18.5,644,393.9), null);


(lib.cswmdnd27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol94();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587.3,236.1,1.0131,0.8501,0,0,0,0.1,0.5);

	this.dnd3 = new lib.Symbol93();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(425.75,235.15,1.0131,0.8501,0,0,0,0,0.6);

	this.dnd2 = new lib.Symbol91();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(265.5,235,1.0131,0.8501,0,0,0,0.1,0.6);

	this.dnd1 = new lib.Symbol90();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(103.4,241.1,1.0131,0.8501,0,0,0,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(135.95,280.5,1.114,0.2941,0,0,0,-6.9,0.4);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(376.7,107.75,1.2263,0.302,0,0,0,7.2,0.4);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(243.55,95.3,1.5122,0.302,0,0,0,7.2,0.1);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(477.85,275.25,2.4693,1.0976,0,0,0,0.1,-24.4);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(632,276.45,2.1087,0.881,0,0,0,0.5,-24.3);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(52.4,79.65,1.9416,1.0461,0,0,0,0.1,-24.4);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(172.95,105.1,2.0092,1.1119,0,0,0,7.4,0.1);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(150.3,190.45,2.4009,0.3752,0,0,0,0.5,-23.9);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(208,76.9,2.0389,1.1507,0,0,0,0.1,-24.4);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(394.1,96.7,1.46,0.7718,0,0,0,0.5,0.7);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(316,191.8,2.425,0.3494,0,0,0,0.6,-24.1);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(313.8,95.15,1.9139,0.3468,0,0,0,0.1,-24.1);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(51.75,285.65,1.4747,0.2941,0,0,0,-6.9,0.4);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(156.85,324.45,1.7265,0.7127,0,0,0,0.4,24.7);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(210.1,299.8,1.7265,1.0251,0,0,0,0.1,0.2);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(308.85,324.5,2.1801,1.0412,0,0,0,0,24.7);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(208,200.8,1.206,0.4732,0,0,0,0.4,0.3);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(536,312.65,1.3688,0.7816,0,0,0,0.6,24.8);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(358.15,292.1,2.8319,0.8127,0,0,0,-6.2,0.2);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(457.85,98.7,2.8225,0.8641,0,0,0,-6.8,0.5);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(651.05,202,2.4378,0.5037,0,0,0,7.3,0.2);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(532.55,217.55,1.7265,0.8071,0,0,0,0.1,24.9);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(476.45,197.6,1.7908,0.7072,0,0,0,0.1,0.4);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(357.4,201,2.3076,0.3649,0,0,0,-6.9,0.2);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(559.1,98.65,2.6939,0.7814,0,0,0,7,0.1);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(616.4,100.9,2.7834,0.877,0,0,0,-6.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_26 = new lib.retit("synched",0);
	this.instance_26.setTransform(341.1,44.55,1.0131,0.8501);

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(587.3,239.3,0.9631,0.8501,0,0,0,0.1,0.1);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_27.cache(-84,-205,169,411);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(426.15,239.3,0.9631,0.8501,0,0,0,0,0.1);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.instance_29 = new lib.Symbol12("synched",0);
	this.instance_29.setTransform(264.05,239.3,0.9631,0.8501,0,0,0,0,0.1);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_29.cache(-84,-205,169,411);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(103.05,239.3,0.9631,0.8501,0,0,0,0.1,0.1);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	// image
	this.instance_31 = new lib.dnd5();
	this.instance_31.setTransform(28,70,0.3005,0.2313);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd27, new cjs.Rectangle(23.7,19,642.9,393.3), null);


(lib.cswmdnd26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol89();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587.95,236.6,1.0115,0.8567,0,0,0,0.1,0.4);

	this.dnd3 = new lib.Symbol88();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(427.15,235.75,1.0115,0.8567);

	this.dnd2 = new lib.Symbol87();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(265.45,232.95,1.0115,0.8567,0,0,0,0.1,0.5);

	this.dnd1 = new lib.Symbol86();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(105.15,235.1,1.0115,0.8567,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(629.45,102.4,1.2243,0.3043,0,0,0,7.2,0);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(308.1,180.75,1.2243,0.3043,0,0,0,7.2,0);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(410.35,84.5,1.2243,0.3043,0,0,0,7.2,0);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(295.35,79.65,1.2243,0.3043,0,0,0,7.2,0.1);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(478.1,274.25,2.4654,1.106,0,0,0,0.1,-24.4);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(625.55,272.75,2.1054,1.1246,0,0,0,0.5,-24.4);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(53.35,77.15,1.9385,1.0541,0,0,0,0.1,-24.4);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(53.25,173,2.2323,1.1243,0,0,0,0,-24.2);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(173.75,102.85,2.0061,1.1205,0,0,0,7.4,0.1);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(158.7,182.75,2.0179,0.6508,0,0,0,0.3,-24.1);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(208.65,74.4,1.657,1.1595,0,0,0,0.1,-24.4);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(371.6,103.15,1.7238,1.2404,0,0,0,0.4,0.5);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(324.6,191.85,1.7238,0.792,0,0,0,0.5,-24.2);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(325.45,69.9,1.9109,1.2587,0,0,0,0.1,-24.2);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(37.5,301.8,1.4724,1.0837,0,0,0,-6.9,0);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(153.95,327.6,1.7238,1.1194,0,0,0,0.3,24.6);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(210.8,298.95,1.7238,1.033,0,0,0,0.1,0.1);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(316,328.5,2.1767,1.0492,0,0,0,0,24.6);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(208.7,199.2,1.2041,0.9983,0,0,0,0.4,0.2);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(543.3,328.55,2.7995,1.1009,0,0,0,0.7,24.7);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(361.65,298.9,2.3387,1.0664,0,0,0,-6.4,0.1);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(466.3,102.9,2.1989,1.1172,0,0,0,-6.8,0.2);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(650.8,203.85,2.434,1.1031,0,0,0,7.2,0.1);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(535.8,229.75,1.7238,1.1435,0,0,0,0.1,24.8);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(476.9,203.1,2.435,1.1201,0,0,0,0.2,0.2);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(359.95,199.5,2.087,1.2068,0,0,0,-6.9,0.1);

	this.instance_26 = new lib.mask("synched",0);
	this.instance_26.setTransform(549.4,100.1,2.1547,0.997,0,0,0,7.1,0);

	this.instance_27 = new lib.mask("synched",0);
	this.instance_27.setTransform(644.55,73.05,2.1674,1.1455,0,0,0,0.1,-24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_28 = new lib.retit("synched",0);
	this.instance_28.setTransform(341.65,41.8,1.0115,0.8567,0,0,0,0.1,0);

	this.instance_29 = new lib.Symbol12("synched",0);
	this.instance_29.setTransform(587.4,238.05,0.9615,0.8567,0,0,0,0.1,0.1);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_29.cache(-84,-205,169,411);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(426.5,237.95,0.9615,0.8567);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.instance_31 = new lib.Symbol12("synched",0);
	this.instance_31.setTransform(264.65,237.95,0.9615,0.8567);
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_31.cache(-84,-205,169,411);

	this.instance_32 = new lib.Symbol12("synched",0);
	this.instance_32.setTransform(103.9,238.05,0.9615,0.8567,0,0,0,0.1,0.1);
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_32.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]}).wait(1));

	// image
	this.instance_33 = new lib.dnd4();
	this.instance_33.setTransform(29,68,0.3,0.2331);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd26, new cjs.Rectangle(24.6,16.1,642,396.29999999999995), null);


(lib.cswmdnd25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol85();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(590.25,237.65,1.0205,0.8533,0,0,0,0.1,0.4);

	this.dnd3 = new lib.Symbol84();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(428,236.3,1.0205,0.8533,0,0,0,0,0.4);

	this.dnd2 = new lib.Symbol83();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(266.15,239.15,1.0205,0.8533,0,0,0,0,0.6);

	this.dnd1 = new lib.Symbol82();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(104.5,235.4,1.0205,0.8533,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(306.65,187.9,1.2353,0.3031,0,0,0,7.2,0.1);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(109.7,87.8,1.2353,0.3031,0,0,0,7.2,0.1);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(143.75,183.6,1.2353,0.3031,0,0,0,7.2,0);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(478.15,276.75,2.4874,1.1016,0,0,0,0.1,-24.4);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(649.85,275,1.7392,1.1202,0,0,0,0.5,-24.4);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(33.65,108.65,1.9558,1.1548,0,0,0,-7,0);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(46.95,181.45,1.7392,1.1198,0,0,0,0,-24.2);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(158.65,106.2,1.7392,1.2386,0,0,0,0.3,0.3);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(155.85,195.8,2.0359,0.6482,0,0,0,0.3,-24.2);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(218.15,100.45,1.2353,0.9283,0,0,0,7.2,0.1);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(370.5,106.35,1.7392,1.2355,0,0,0,0.3,0.5);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(318.15,196.95,1.7392,0.7889,0,0,0,0.5,-24.2);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(319.9,106,2.1697,1.2021,0,0,0,7.2,0);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(52.85,330.7,2.7547,1.0794,0,0,0,0,24.6);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(157.65,330.75,1.7392,1.115,0,0,0,0.3,24.6);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(208.45,301.4,1.7392,1.0289,0,0,0,0.1,0.2);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(314.55,330.75,2.1962,1.045,0,0,0,0,24.6);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(206,204.9,1.7392,0.9944,0,0,0,0.2,0.1);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(539.7,330.75,1.7392,1.0966,0,0,0,0.5,24.6);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(360.65,301.3,2.3596,1.0622,0,0,0,-6.4,0.1);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(462.35,105.9,2.5376,1.2021,0,0,0,-7,0.1);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(652.4,206.55,2.4557,1.2021,0,0,0,7.2,0.1);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(537.85,205.7,1.7392,1.2021,0,0,0,0.1,0.1);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(478.7,205.7,2.4568,1.2021,0,0,0,0.1,0.1);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(358.7,202.2,2.1057,1.2021,0,0,0,-7,0);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(537.85,103.35,1.7392,1.2021,0,0,0,0.1,0.1);

	this.instance_26 = new lib.mask("synched",0);
	this.instance_26.setTransform(641.9,76.4,2.1868,1.1846,0,0,0,0,-24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_27 = new lib.retit("synched",0);
	this.instance_27.setTransform(343.45,45.2,1.0205,0.8533);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(591.4,240.6,0.9701,0.8533);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.instance_29 = new lib.Symbol12("synched",0);
	this.instance_29.setTransform(429.1,240.6,0.9701,0.8533);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_29.cache(-84,-205,169,411);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(265.85,240.6,0.9701,0.8533);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.instance_31 = new lib.Symbol12("synched",0);
	this.instance_31.setTransform(103.55,240.6,0.9701,0.8533);
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_31.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27}]}).wait(1));

	// image
	this.instance_32 = new lib.dnd3();
	this.instance_32.setTransform(28,71,0.3027,0.2322);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd25, new cjs.Rectangle(23.7,19.6,647.6999999999999,394.7), null);


(lib.cswmdnd24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol81();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(587.6,235.45,1.0147,0.8565,0,0,0,0.1,0.5);

	this.dnd3 = new lib.Symbol80();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(425.35,236.9,1.0147,0.8565,0,0,0,0.1,0.6);

	this.dnd2 = new lib.Symbol79();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(262.7,235.45,1.0147,0.8565,0,0,0,0,0.5);

	this.dnd1 = new lib.Symbol78();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(102.25,236.1,1.0147,0.8565,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(296.95,317.85,1.2282,0.3042,0,0,0,7.2,0.1);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(560.3,126.3,1.2282,0.3042,0,0,0,7.2,0.4);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(474.55,276.25,2.4733,1.1057,0,0,0,0.1,-24.4);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(637.15,274.5,1.7293,1.1244,0,0,0,0.5,-24.4);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(32.8,99.95,1.9447,1.0553,0,0,0,-6.9,0.1);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(43.9,180.55,1.7293,0.5274,0,0,0,0.1,-24.2);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(156.9,105.2,1.7293,0.9613,0,0,0,0.3,0.4);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(154.3,174.55,2.0243,1.0031,0,0,0,0.4,-24.1);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(210.95,99.4,1.2282,0.9318,0,0,0,7.2,0.2);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(370.55,99.25,1.7293,0.6007,0,0,0,0.3,0.6);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(320.55,196.85,1.7293,0.529,0,0,0,0.5,-24.1);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(333.2,102.2,1.7304,1.2065,0,0,0,7.2,0.1);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(51.7,330.45,2.739,1.0834,0,0,0,0,24.6);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(132.05,303,2.3078,1.1191,0,0,0,-7,0.1);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(206.9,275.55,1.7293,0.7535,0,0,0,0.4,-24.4);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(314.95,325.35,2.1837,1.0489,0,0,0,0,24.6);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(207.05,204.25,1.7293,0.9981,0,0,0,0.2,0.2);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(535.75,330.45,1.7293,1.1007,0,0,0,0.5,24.6);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(357.6,301.75,2.8049,1.0662,0,0,0,-6.4,0.1);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(458.65,101.7,2.0906,1.0303,0,0,0,-7,0.4);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(651.95,195.6,2.0917,0.8216,0,0,0,7.2,0.2);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(522.25,200.65,2.1807,0.9628,0,0,0,-6.6,0.1);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(475.35,195.8,1.452,0.8201,0,0,0,0.2,0.4);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(355.8,201.5,2.0937,1.2065,0,0,0,-7,0.1);

	this.instance_24 = new lib.mask("synched",0);
	this.instance_24.setTransform(531.6,73.5,1.7293,0.9268,0,0,0,0.5,-24.4);

	this.instance_25 = new lib.mask("synched",0);
	this.instance_25.setTransform(637.4,75.15,2.1744,1.189,0,0,0,0,-24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_26 = new lib.retit("synched",0);
	this.instance_26.setTransform(340.6,43.85,1.0147,0.8565);

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(587.25,240.05,0.9646,0.8565,0,0,0,0.1,0.1);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_27.cache(-84,-205,169,411);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(425.9,240.05,0.9646,0.8565,0,0,0,0.1,0.1);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.instance_29 = new lib.Symbol12("synched",0);
	this.instance_29.setTransform(263.55,240.05,0.9646,0.8565,0,0,0,0.1,0.1);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_29.cache(-84,-205,169,411);

	this.instance_30 = new lib.Symbol12("synched",0);
	this.instance_30.setTransform(102.2,240.05,0.9646,0.8565,0,0,0,0.1,0.1);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_30.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	// image
	this.instance_31 = new lib.dnd2();
	this.instance_31.setTransform(27,70,0.301,0.2331);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd24, new cjs.Rectangle(22.7,18.2,644,396.1), null);


(lib.cswmdnd23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.Symbol77();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(584.55,235.9,1.01,0.8619,0,0,0,0,0.6);

	this.dnd3 = new lib.Symbol76();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(426.9,236.05,1.01,0.8619,0,0,0,0,0.5);

	this.dnd2 = new lib.Symbol75();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(263.8,238.55,1.01,0.8619,0,0,0,0,0.5);

	this.dnd1 = new lib.Symbol74();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(101.15,235.95,1.01,0.8619,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(469.1,298.75,1.7169,1.0071,0,0,0,-6.6,0.3);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(644.85,288.3,1.7212,0.6563,0,0,0,0.2,0.2);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(55.05,114.1,1.7212,0.6563,0,0,0,0.2,0.3);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(48.8,174.1,1.7212,1.0092,0,0,0,0.1,-24.3);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(150,114.1,1.7212,0.6563,0,0,0,0.2,0.3);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(152.85,178.25,1.7212,1.0097,0,0,0,0.1,-24.2);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(213.75,94.55,1.7212,0.3062,0,0,0,0.2,0.5);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(368.85,95.4,1.7212,0.3062,0,0,0,0.3,0.5);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(320,178.35,1.7212,1.0437,0,0,0,0.4,-24.4);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(324.6,100.35,1.6499,1.2142,0,0,0,7.1,0.1);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(45.8,301.35,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(154.85,301.35,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(208.5,301.35,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(316.45,301.35,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(212.4,202.2,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(535.6,301.35,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(383.5,301.2,1.2189,1.2142,0,0,0,7,0.1);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(467.95,104,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(635.6,202.2,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(534.5,202.2,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(487.1,202.2,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(366.45,201.3,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(534.5,101.4,1.7212,1.2142,0,0,0,0.1,0.2);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(639.5,102.15,1.01,0.4397,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_24 = new lib.retit("synched",0);
	this.instance_24.setTransform(342.2,42.55,1.01,0.8619,0,0,0,0.1,0.1);

	this.instance_25 = new lib.Symbol12("synched",0);
	this.instance_25.setTransform(587.55,239.95,0.9601,0.8619,0,0,0,0.1,0.1);
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_25.cache(-84,-205,169,411);

	this.instance_26 = new lib.Symbol12("synched",0);
	this.instance_26.setTransform(426.9,239.95,0.9601,0.8619,0,0,0,0,0.1);
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_26.cache(-84,-205,169,411);

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(265.3,239.95,0.9601,0.8619,0,0,0,0,0.1);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_27.cache(-84,-205,169,411);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(104.8,239.95,0.9601,0.8619,0,0,0,0.1,0.1);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(1));

	// image
	this.instance_29 = new lib.dnd1();
	this.instance_29.setTransform(30,68,0.2996,0.2345);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd23, new cjs.Rectangle(25.7,16.6,640.9,398.7), null);


(lib.cswmdnd22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mov
	this.dnd4 = new lib.DND4();
	this.dnd4.name = "dnd4";
	this.dnd4.setTransform(580.7,235.1,1,0.8514,0,0,0,0,0.5);

	this.dnd3 = new lib.DND3();
	this.dnd3.name = "dnd3";
	this.dnd3.setTransform(424.35,236.45,1,0.8514,0,0,0,0,0.5);

	this.dnd2 = new lib.DND2();
	this.dnd2.name = "dnd2";
	this.dnd2.setTransform(264,235.95,1,0.8514,0,0,0,0,0.5);

	this.dnd1 = new lib.DND1();
	this.dnd1.name = "dnd1";
	this.dnd1.setTransform(100.25,237.95,1,0.8514,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dnd1},{t:this.dnd2},{t:this.dnd3},{t:this.dnd4}]}).wait(1));

	// mask
	this.instance = new lib.mask("synched",0);
	this.instance.setTransform(480.55,302.05,0.8304,0.6482,0,0,0,-6.8,0.1);

	this.instance_1 = new lib.mask("synched",0);
	this.instance_1.setTransform(640.8,302.05,1.7042,0.6482,0,0,0,0.2,0.1);

	this.instance_2 = new lib.mask("synched",0);
	this.instance_2.setTransform(50.85,104.7,1.7042,0.6482,0,0,0,0.2,0.1);

	this.instance_3 = new lib.mask("synched",0);
	this.instance_3.setTransform(54.85,196.65,1.7042,0.6482,0,0,0,0.2,0.1);

	this.instance_4 = new lib.mask("synched",0);
	this.instance_4.setTransform(157.4,88.55,1.7042,0.6482,0,0,0,0.2,0.1);

	this.instance_5 = new lib.mask("synched",0);
	this.instance_5.setTransform(150.85,193.95,1.7042,0.3024,0,0,0,0.2,0.1);

	this.instance_6 = new lib.mask("synched",0);
	this.instance_6.setTransform(213.95,95.4,1.7042,0.3024,0,0,0,0.2,0.1);

	this.instance_7 = new lib.mask("synched",0);
	this.instance_7.setTransform(367.4,96.25,1.7042,0.3024,0,0,0,0.2,0.1);

	this.instance_8 = new lib.mask("synched",0);
	this.instance_8.setTransform(321.8,196.65,1.7042,0.6482,0,0,0,0.2,0.1);

	this.instance_9 = new lib.mask("synched",0);
	this.instance_9.setTransform(323.65,101.2,2.5594,1.1994,0,0,0,7.1,0.1);

	this.instance_10 = new lib.mask("synched",0);
	this.instance_10.setTransform(50.65,299.55,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_11 = new lib.mask("synched",0);
	this.instance_11.setTransform(150.65,299.55,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_12 = new lib.mask("synched",0);
	this.instance_12.setTransform(213.75,299.55,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_13 = new lib.mask("synched",0);
	this.instance_13.setTransform(311.65,299.55,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.setTransform(207.65,201.65,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_15 = new lib.mask("synched",0);
	this.instance_15.setTransform(524.65,299.55,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_16 = new lib.mask("synched",0);
	this.instance_16.setTransform(372,299.45,1.2069,1.1994,0,0,0,7,0);

	this.instance_17 = new lib.mask("synched",0);
	this.instance_17.setTransform(465.65,104.65,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_18 = new lib.mask("synched",0);
	this.instance_18.setTransform(635.65,201.65,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_19 = new lib.mask("synched",0);
	this.instance_19.setTransform(531.55,204.2,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_20 = new lib.mask("synched",0);
	this.instance_20.setTransform(481.6,204.2,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_21 = new lib.mask("synched",0);
	this.instance_21.setTransform(365.15,204.2,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_22 = new lib.mask("synched",0);
	this.instance_22.setTransform(531.55,102.1,1.7042,1.1994,0,0,0,0.1,0.1);

	this.instance_23 = new lib.mask("synched",0);
	this.instance_23.setTransform(623,85.8,1,0.4344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_24 = new lib.retit("synched",0);
	this.instance_24.setTransform(341.05,44.05,1,0.8514);

	this.instance_25 = new lib.Symbol12("synched",0);
	this.instance_25.setTransform(584,239,0.9506,0.8514);
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 232, 194, 83, 0)];
	this.instance_25.cache(-84,-205,169,411);

	this.instance_26 = new lib.Symbol12("synched",0);
	this.instance_26.setTransform(425,239,0.9506,0.8514);
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 102, 0)];
	this.instance_26.cache(-84,-205,169,411);

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(265,239,0.9506,0.8514);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 83, 94, 190, 0)];
	this.instance_27.cache(-84,-205,169,411);

	this.instance_28 = new lib.Symbol12("synched",0);
	this.instance_28.setTransform(106,239,0.9506,0.8514);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 165, 0, 0, 0)];
	this.instance_28.cache(-84,-205,169,411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(1));

	// image
	this.instance_29 = new lib.dnd0();
	this.instance_29.setTransform(32,70,0.2966,0.2317);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswmdnd22, new cjs.Rectangle(27.7,18.5,634.6999999999999,393.9), null);


(lib.cswcroc56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(608.3,392,0.7578,0.8095,0,0,0,-0.6,3.1);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(566.7,392,0.7578,0.8095,0,0,0,-0.9,1.1);

	this.JKLKT = new lib.croch();
	this.JKLKT.name = "JKLKT";
	this.JKLKT.setTransform(339.65,242.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.LKLKF = new lib.croch();
	this.LKLKF.name = "LKLKF";
	this.LKLKF.setTransform(340.15,300.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.KKLKT = new lib.croch();
	this.KKLKT.name = "KKLKT";
	this.KKLKT.setTransform(337.3,146.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.GKLKF = new lib.croch();
	this.GKLKF.name = "GKLKF";
	this.GKLKF.setTransform(336.65,124.9,0.3157,0.455,0,0,0,0.1,-1.3);

	this.FKLKF = new lib.croch();
	this.FKLKF.name = "FKLKF";
	this.FKLKF.setTransform(66.65,290.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.EKLKT = new lib.croch();
	this.EKLKT.name = "EKLKT";
	this.EKLKT.setTransform(66.65,269.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.BKLKT = new lib.croch();
	this.BKLKT.name = "BKLKT";
	this.BKLKT.setTransform(55.05,124.9,0.3157,0.455,0,0,0,0.1,-1.3);

	this.AKLKF = new lib.croch();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(55.05,103.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.AKLKF},{t:this.BKLKT},{t:this.EKLKT},{t:this.FKLKF},{t:this.GKLKF},{t:this.KKLKT},{t:this.LKLKF},{t:this.JKLKT},{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// image
	this.instance = new lib.Symbol120("synched",0);
	this.instance.setTransform(306.95,14.95);

	this.instance_1 = new lib.cro5();
	this.instance_1.setTransform(30,38,0.5471,0.5568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswcroc56, new cjs.Rectangle(30,0,596.2,410.1), null);


(lib.cswcroc52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(608.3,392,0.7578,0.8095,0,0,0,-0.6,3.1);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(566.7,392,0.7578,0.8095,0,0,0,-0.9,1.1);

	this.JKLKF = new lib.croch();
	this.JKLKF.name = "JKLKF";
	this.JKLKF.setTransform(340.3,259.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.LKLKT = new lib.croch();
	this.LKLKT.name = "LKLKT";
	this.LKLKT.setTransform(339.8,297.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.KKLKF = new lib.croch();
	this.KKLKF.name = "KKLKF";
	this.KKLKF.setTransform(336.15,129.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.GKLKT = new lib.croch();
	this.GKLKT.name = "GKLKT";
	this.GKLKT.setTransform(336.15,109.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.FKLKF = new lib.croch();
	this.FKLKF.name = "FKLKF";
	this.FKLKF.setTransform(72.15,300.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.EKLKT = new lib.croch();
	this.EKLKT.name = "EKLKT";
	this.EKLKT.setTransform(71.65,281.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.BKLKF = new lib.croch();
	this.BKLKF.name = "BKLKF";
	this.BKLKF.setTransform(65.55,117.9,0.3157,0.455,0,0,0,0.1,-1.3);

	this.AKLKT = new lib.croch();
	this.AKLKT.name = "AKLKT";
	this.AKLKT.setTransform(64.55,98.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.AKLKT},{t:this.BKLKF},{t:this.EKLKT},{t:this.FKLKF},{t:this.GKLKT},{t:this.KKLKF},{t:this.LKLKT},{t:this.JKLKF},{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// image
	this.instance = new lib.Symbol120("synched",0);
	this.instance.setTransform(308.95,14.95);

	this.instance_1 = new lib.cro4();
	this.instance_1.setTransform(31,38,0.5471,0.5568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswcroc52, new cjs.Rectangle(31,0,595.2,410.1), null);


(lib.cswcroc21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(608.3,392,0.7578,0.8095,0,0,0,-0.6,3.1);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(566.7,392,0.7578,0.8095,0,0,0,-0.9,1.1);

	this.JKLKF = new lib.croch();
	this.JKLKF.name = "JKLKF";
	this.JKLKF.setTransform(343.55,237.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.LKLKT = new lib.croch();
	this.LKLKT.name = "LKLKT";
	this.LKLKT.setTransform(343.55,295.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.KKLKF = new lib.croch();
	this.KKLKF.name = "KKLKF";
	this.KKLKF.setTransform(350.1,139.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.GKLKT = new lib.croch();
	this.GKLKT.name = "GKLKT";
	this.GKLKT.setTransform(350.1,100.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.FKLKF = new lib.croch();
	this.FKLKF.name = "FKLKF";
	this.FKLKF.setTransform(66.15,310.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.EKLKT = new lib.croch();
	this.EKLKT.name = "EKLKT";
	this.EKLKT.setTransform(66.15,252.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.BKLKF = new lib.croch();
	this.BKLKF.name = "BKLKF";
	this.BKLKF.setTransform(76.85,139.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.AKLKT = new lib.croch();
	this.AKLKT.name = "AKLKT";
	this.AKLKT.setTransform(75.85,83.5,0.3157,0.455,0,0,0,0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.AKLKT},{t:this.BKLKF},{t:this.EKLKT},{t:this.FKLKF},{t:this.GKLKT},{t:this.KKLKF},{t:this.LKLKT},{t:this.JKLKF},{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// image
	this.instance = new lib.Symbol120("synched",0);
	this.instance.setTransform(299.95,14.95);

	this.instance_1 = new lib.cro3();
	this.instance_1.setTransform(31,42,0.5471,0.5568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswcroc21, new cjs.Rectangle(31,0,595.2,410.1), null);


(lib.cswcroc16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(608.3,392,0.7578,0.8095,0,0,0,-0.6,3.1);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(566.7,392,0.7578,0.8095,0,0,0,-0.9,1.1);

	this.JKLKT = new lib.croch();
	this.JKLKT.name = "JKLKT";
	this.JKLKT.setTransform(325.1,247.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.LKLKF = new lib.croch();
	this.LKLKF.name = "LKLKF";
	this.LKLKF.setTransform(325.6,290.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.KKLKT = new lib.croch();
	this.KKLKT.name = "KKLKT";
	this.KKLKT.setTransform(334.15,138.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.GKLKF = new lib.croch();
	this.GKLKF.name = "GKLKF";
	this.GKLKF.setTransform(333.65,106.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.FKLKT = new lib.croch();
	this.FKLKT.name = "FKLKT";
	this.FKLKT.setTransform(62.15,292.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.EKLKF = new lib.croch();
	this.EKLKF.name = "EKLKF";
	this.EKLKF.setTransform(62.15,248.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.BKLKT = new lib.croch();
	this.BKLKT.name = "BKLKT";
	this.BKLKT.setTransform(64.55,134,0.3157,0.455,0,0,0,0.1,-1.3);

	this.AKLKF = new lib.croch();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(65.05,110.5,0.3157,0.455,0,0,0,0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.AKLKF},{t:this.BKLKT},{t:this.EKLKF},{t:this.FKLKT},{t:this.GKLKF},{t:this.KKLKT},{t:this.LKLKF},{t:this.JKLKT},{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// image
	this.instance = new lib.Symbol120("synched",0);
	this.instance.setTransform(308.95,14.95);

	this.instance_1 = new lib.cro2();
	this.instance_1.setTransform(30,45,0.5471,0.5568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswcroc16, new cjs.Rectangle(30,0,596.2,410.1), null);


(lib.cswcroc13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(608.3,392,0.7578,0.8095,0,0,0,-0.6,3.1);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(566.7,392,0.7578,0.8095,0,0,0,-0.9,1.1);

	this.JKLKF = new lib.croch();
	this.JKLKF.name = "JKLKF";
	this.JKLKF.setTransform(353.1,253.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.LKLKF = new lib.croch();
	this.LKLKF.name = "LKLKF";
	this.LKLKF.setTransform(353.6,312.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.KKLKF = new lib.croch();
	this.KKLKF.name = "KKLKF";
	this.KKLKF.setTransform(341.65,161.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.GKLKT = new lib.croch();
	this.GKLKT.name = "GKLKT";
	this.GKLKT.setTransform(342.15,95.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.FKLKF = new lib.croch();
	this.FKLKF.name = "FKLKF";
	this.FKLKF.setTransform(53.15,319.2,0.3157,0.455,0,0,0,0.1,-1.3);

	this.EKLKT = new lib.croch();
	this.EKLKT.name = "EKLKT";
	this.EKLKT.setTransform(53.15,253.7,0.3157,0.455,0,0,0,0.1,-1.3);

	this.DKLKF = new lib.croch();
	this.DKLKF.name = "DKLKF";
	this.DKLKF.setTransform(198.15,143,0.3157,0.455,0,0,0,0.1,-1.3);

	this.CKLKF = new lib.croch();
	this.CKLKF.name = "CKLKF";
	this.CKLKF.setTransform(198.15,115,0.3157,0.455,0,0,0,0.1,-1.3);

	this.BKLKT = new lib.croch();
	this.BKLKT.name = "BKLKT";
	this.BKLKT.setTransform(65.05,143,0.3157,0.455,0,0,0,0.1,-1.3);

	this.AKLKF = new lib.croch();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(64.55,114.5,0.3157,0.455,0,0,0,0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.AKLKF},{t:this.BKLKT},{t:this.CKLKF},{t:this.DKLKF},{t:this.EKLKT},{t:this.FKLKF},{t:this.GKLKT},{t:this.KKLKF},{t:this.LKLKF},{t:this.JKLKF},{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// image
	this.instance = new lib.Symbol120("synched",0);
	this.instance.setTransform(306.95,14.95);

	this.instance_1 = new lib.cro1();
	this.instance_1.setTransform(30,38,0.5471,0.5568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswcroc13, new cjs.Rectangle(30,0,596.2,410.1), null);


(lib.cswcroc9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.replay = new lib.Symbol14();
	this.replay.name = "replay";
	this.replay.setTransform(608.3,392,0.7578,0.8095,0,0,0,-0.6,3.1);

	this.correctbtn = new lib.Symbol13();
	this.correctbtn.name = "correctbtn";
	this.correctbtn.setTransform(566.7,392,0.7578,0.8095,0,0,0,-0.9,1.1);

	this.KKLKT = new lib.croch();
	this.KKLKT.name = "KKLKT";
	this.KKLKT.setTransform(330.15,305.15,0.3157,0.455,0,0,0,0.1,-1.3);

	this.GKLKF = new lib.croch();
	this.GKLKF.name = "GKLKF";
	this.GKLKF.setTransform(330.15,254.65,0.3157,0.455,0,0,0,0.1,-1.3);

	this.FKLKF = new lib.croch();
	this.FKLKF.name = "FKLKF";
	this.FKLKF.setTransform(51.65,307.15,0.3157,0.455,0,0,0,0.1,-1.3);

	this.EKLKT = new lib.croch();
	this.EKLKT.name = "EKLKT";
	this.EKLKT.setTransform(51.65,256.65,0.3157,0.455,0,0,0,0.1,-1.3);

	this.DKLKF = new lib.croch();
	this.DKLKF.name = "DKLKF";
	this.DKLKF.setTransform(338.15,145.75,0.3157,0.455,0,0,0,0.1,-1.3);

	this.CKLKT = new lib.croch();
	this.CKLKT.name = "CKLKT";
	this.CKLKT.setTransform(338.15,105.75,0.3157,0.455,0,0,0,0.1,-1.3);

	this.BKLKT = new lib.croch();
	this.BKLKT.name = "BKLKT";
	this.BKLKT.setTransform(62.05,132.75,0.3157,0.455,0,0,0,0.1,-1.3);

	this.AKLKF = new lib.croch();
	this.AKLKF.name = "AKLKF";
	this.AKLKF.setTransform(62,94.05,0.3157,0.455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.AKLKF},{t:this.BKLKT},{t:this.CKLKT},{t:this.DKLKF},{t:this.EKLKT},{t:this.FKLKF},{t:this.GKLKF},{t:this.KKLKT},{t:this.correctbtn},{t:this.replay}]}).wait(1));

	// image
	this.instance = new lib.Symbol120("synched",0);
	this.instance.setTransform(292.95,19.9);

	this.instance_1 = new lib.cro0();
	this.instance_1.setTransform(30,52,0.5471,0.5568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cswcroc9, new cjs.Rectangle(30,5,596.2,405.1), null);


(lib.hijabTmrn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var that = this;
		var clicked = false;
		
		
		that.hijab_alpha.alpha = 1;
		that.listeners_are_added ;
		
		if (!that.listeners_are_added) {
			that.add_alpha.addEventListener("click", addalfa);
			that.listeners_are_added = true;
			
		}
		
		
		
		function addalfa(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
		
				clicked = !clicked;
		
				if (clicked) {
		
					that.hijab_alpha.alpha = 0;
					that.add_alpha.gotoAndStop(1);
		
		
				} else {
					that.hijab_alpha.alpha = 1;
					that.add_alpha.gotoAndStop(0);
		
				}
			}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.add_alpha = new lib.Symbol33_1();
	this.add_alpha.name = "add_alpha";
	this.add_alpha.setTransform(778.05,25.05);

	this.timeline.addTween(cjs.Tween.get(this.add_alpha).wait(1));

	// Layer_1
	this.hijab_alpha = new lib.hijab_alpha();
	this.hijab_alpha.name = "hijab_alpha";
	this.hijab_alpha.setTransform(503.8,249.25,1.2601,1.1083,0,0,0,399.8,224.9);

	this.timeline.addTween(cjs.Tween.get(this.hijab_alpha).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hijabTmrn, new cjs.Rectangle(0,0,1006.7,498.7), null);


(lib.fullscr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("AAPAgQgEgEAAgFIAAgNQAAgIgHgGQgFgFgJAAIgNAAQgGAAgDgEQgEgDgBgGQABgFAEgEQADgDAGAAIANAAQAKAAAIADQAJADAGAHQAHAGADAIQAFAIAAAJIAAANQAAAFgFAEQgDADgGABQgFgBgEgDg");
	this.shape.setTransform(6.85,-6.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470000").s().p("AALAkQgKAAgIgEQgIgEgHgGQgHgGgDgJQgEgHAAgJIAAgNQAAgFAEgEQADgEAGAAQAFAAAEAEQAEAEAAAFIAAANQAAAIAHAFQAFAGAJAAIANAAQAGAAAEAEQADAEAAAFQAAAFgDAEQgEAEgGAAg");
	this.shape_1.setTransform(-6.775,6.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#470000").s().p("AggAgQgEgEAAgFIAAgNQAAgJAEgIQADgIAHgGQAHgHAIgDQAIgDAKAAIANAAQAGAAAEADQADAEAAAFQAAAGgDADQgEAEgGAAIgNAAQgJAAgFAFQgHAGAAAIIAAANQAAAFgEAEQgEADgFABQgGgBgDgDg");
	this.shape_2.setTransform(-6.775,-6.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#470000").s().p("AgXAkQgGAAgDgEQgEgEgBgFQABgFAEgEQADgEAGAAIANAAQAJAAAFgGQAHgFAAgIIAAgNQAAgFAEgEQAEgEAFAAQAGAAADAEQAFAEAAAFIAAANQAAAJgFAHQgDAJgHAGQgGAGgJAEQgIAEgKAAg");
	this.shape_3.setTransform(6.85,6.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#470000").s().p("AARApQgEgEAAgHIAAgKQAAgHgDgGQgCgHgEgEQgEgFgFgCQgFgDgHAAIgIAAQgGAAgDgFQgEgEAAgGQAAgHAEgEQADgFAGAAIAIAAQAMAAAKAGQAJAFAJAJQAHAJAFAMQAEALAAANIAAAKQAAAHgEAEQgEAFgFAAQgGAAgDgFg");
	this.shape_4.setTransform(-6.7,6.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#470000").s().p("AASAuQgMAAgKgGQgJgFgJgJQgHgJgFgMQgEgLAAgNIAAgLQAAgGAEgEQADgFAGAAQAGAAADAFQAEAEAAAGIAAALQAAAHADAGQACAGAEAFQADAFAGACQAFADAHAAIAIAAQAGAAADAFQAEAEAAAGQAAAHgEAEQgDAFgGAAg");
	this.shape_5.setTransform(6.25,-8.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#470000").s().p("AgiApQgEgEAAgHIAAgKQAAgNAEgLQAFgMAHgJQAJgJAJgFQAKgGAMAAIAIAAQAGAAADAFQAEAEAAAHQAAAGgEAEQgDAFgGAAIgIAAQgHAAgFADQgGACgDAFQgEAEgCAHQgDAGAAAHIAAAKQAAAHgEAEQgDAFgGAAQgGAAgDgFg");
	this.shape_6.setTransform(6.25,6.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#470000").s().p("AgZAuQgGAAgDgFQgEgEAAgHQAAgGAEgEQADgFAGAAIAIAAQAHAAAFgDQAFgCAEgFQAEgFACgGQADgGAAgHIAAgLQAAgGAEgEQADgFAGAAQAFAAAEAFQAEAEAAAGIAAALQAAANgEALQgFAMgHAJQgJAJgJAFQgKAGgMAAg");
	this.shape_7.setTransform(-6.7,-8.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy8();
	this.bkg.name = "bkg";
	this.bkg.setTransform(0.4,-0.45,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.2,31.299999999999997,29.5);


(lib.feutre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		var that = this;
		var feutreisclicked = false;
		that.firsTime;
		that.addEventListener("click", choose_ft);
		
		function choose_ft(evt) {
		
			if (evt.nativeEvent instanceof MouseEvent) {
		
					 if(that.parent.isdraged) return ;
				    
				feutreisclicked = !feutreisclicked;
				if (feutreisclicked) { 
					
					var frm = that.parent.parent.isLeft ? 7 : 8 ;
					
					 evt.currentTarget.gotoAndStop(frm);
					
					
				} else {
					evt.currentTarget.gotoAndStop(that.parent.current_f_color);
		
				} // that .removeEventListener("click" , choose);
			}
		}
		
		function reset() {
		
			feutreisclicked = false;
			that.gotoAndStop(that.parent.current_f_color);
		
		
		}
		that.reset = reset;
	}
	this.frame_7 = function() {
		this.stop();
		
		var that = this;
		
		if (!that.firsTime) {
		
			that.orange.addEventListener("click", feu_loun);
			that.ahmar.addEventListener("click", feu_loun);
			that.akhdar.addEventListener("click", feu_loun);
			that.azrak.addEventListener("click", feu_loun);
			that.asfar.addEventListener("click", feu_loun);
			that.purple.addEventListener("click", feu_loun);
			that.firsTime = true;
		}
		var list_frame = {
			'orange': {
				'frame': 2,
				'color': "#ff8c00"
			},
			'ahmar': {
				'frame': 3,
				'color': "#ff0000"
			},
			'azrak': {
				'frame': 1,
				'color': "#0000ff"
			},
			'asfar': {
				'frame': 4,
				'color': "#ffff00"
			},
			'akhdar': {
				'frame': 5,
				'color': "#008000"
			},
			'purple': {
				'frame': 6,
				'color': "#8a2be2"
			},
		
		}
		
			function feu_loun(evt) {
		
				evt.stopImmediatePropagation();
				obj = list_frame[evt.currentTarget.name];
				evt.currentTarget.parent.gotoAndStop(obj['frame']);
		
				that.parent.f_color = obj['color'];
		
				that.parent.current_f_color = obj['frame'];
		
			}
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1056();
	this.instance.setTransform(-17.95,-7.6,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_1049();
	this.instance_1.setTransform(-17.9,-7.55,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_1050();
	this.instance_2.setTransform(-17.9,-7.55,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_1051();
	this.instance_3.setTransform(-17.9,-7.55,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_1052();
	this.instance_4.setTransform(-17.9,-7.55,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_1053();
	this.instance_5.setTransform(-17.9,-7.55,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_1054();
	this.instance_6.setTransform(-17.9,-7.55,0.3333,0.3333);

	this.azrak = new lib.Symbol21();
	this.azrak.name = "azrak";
	this.azrak.setTransform(52.75,-30.5);

	this.ahmar = new lib.Symbol20();
	this.ahmar.name = "ahmar";
	this.ahmar.setTransform(23.05,-30.5);

	this.orange = new lib.Symbol19();
	this.orange.name = "orange";
	this.orange.setTransform(-6.75,-30.5);

	this.purple = new lib.Symbol18();
	this.purple.name = "purple";
	this.purple.setTransform(52.75,-62.05);

	this.asfar = new lib.Symbol17();
	this.asfar.name = "asfar";
	this.asfar.setTransform(23.05,-62.05);

	this.akhdar = new lib.Symbol16();
	this.akhdar.name = "akhdar";
	this.akhdar.setTransform(-6.75,-62.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-17.95,y:-7.6}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance,p:{x:-17.9,y:-7.55}},{t:this.akhdar,p:{skewX:0,x:-6.75,y:-62.05}},{t:this.asfar,p:{skewX:0,x:23.05,y:-62.05}},{t:this.purple,p:{skewX:0,x:52.75,y:-62.05}},{t:this.orange,p:{skewX:0,x:-6.75,y:-30.5}},{t:this.ahmar,p:{skewX:0,x:23.05,y:-30.5}},{t:this.azrak,p:{skewX:0,x:52.75,y:-30.5}}]},1).to({state:[{t:this.instance,p:{x:-18.45,y:-7.55}},{t:this.akhdar,p:{skewX:180,x:-9.2,y:69}},{t:this.asfar,p:{skewX:180,x:20.6,y:69}},{t:this.purple,p:{skewX:180,x:50.3,y:69}},{t:this.orange,p:{skewX:180,x:-9.2,y:37.45}},{t:this.ahmar,p:{skewX:180,x:20.6,y:37.45}},{t:this.azrak,p:{skewX:180,x:50.3,y:37.45}}]},1).wait(1));

	// Layer_2
	this.bkg = new lib.bkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-4.65,1.85);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-75,85.9,157);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#470000").s().p("Ah6B6QgEgFAAgHQAAgHAEgFIAggfQgSgOgNgTQgLgQAAgSQAAgSALgPQAVggAfgRQAhgSAkAAQAQAAARADQAPAEAPAHIAkgjQAFgFAGAAQAHAAAFAFQAFAEAAAHQAAAHgEAFIggAfQARAPAOATQAKAPABASQgBASgKAQQgUAfghARQggASglABQgPAAgRgEQgPgEgPgHIglAkQgEAFgHAAQgGAAgGgFgAglA9QATAHASgBQAdAAAZgOQAZgOAPgYQAFgHAAgIQAAgIgFgHQgLgQgPgMIgbAbQADAIAAAIQAAAJgDAIQgEAIgGAGQgHAGgHADQgJAEgIAAQgIAAgIgEgAAAhDQgcAAgZAOQgZAOgPAYQgGAHAAAIQAAAIAGAHQAKAQARANIAagbQgDgIgBgJQABgIADgIQAEgJAGgGQAHgGAHgDQAIgDAIAAQAJAAAIADIAVgUQgRgHgTAAIgCAAg");
	this.shape.setTransform(2.3,0.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#470000").s().p("AhLBXQgjgSgWghQgLgRAAgTQAAgTALgRQAWggAjgTQAkgTAnAAQAoAAAjATQAkATAWAgQALARAAATQAAAUgLAQQgWAhgkATQgjASgoABQgnAAgkgUgAg6g4QgbAPgRAaQgFAHAAAIQAAAJAFAHQARAaAbAPQAcAOAeABQAfgBAcgOQAbgPARgaQAFgHAAgJQAAgIgFgHQgRgagbgPQgcgPgfAAQgeAAgcAPgAgSArQgJgDgGgHQgHgGgEgJQgDgJAAgJQAAgJADgJQAEgIAHgGQAGgGAJgEQAJgEAJAAQAKAAAJAEQAIAEAHAGQAHAGADAIQAEAJAAAJQAAAJgEAJQgDAJgHAGQgHAHgIADQgJAEgKAAQgJAAgJgEg");
	this.shape_1.setTransform(2.625,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy9();
	this.bkg.name = "bkg";
	this.bkg.setTransform(2.8,0.35,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-14.4,31.3,29.5);


(lib.goToPgcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_987();
	this.instance.setTransform(-14.95,-6.35,0.2977,0.2977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.bkg = new lib.bkgcopy11();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-2.05,-1.25,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goToPgcopy, new cjs.Rectangle(-17.6,-16,31.400000000000002,29.5), null);


(lib.tool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible = false ;
	}
	this.frame_1 = function() {
		this.stop();
		this.visible=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// qalam
	this.qalam = new lib.Symbol15_1();
	this.qalam.name = "qalam";
	this.qalam.setTransform(56.1,14.85,1,0.9329);

	this.timeline.addTween(cjs.Tween.get(this.qalam).wait(1).to({scaleY:0.8322,x:53.1,y:14.6},0).wait(1));

	// somkmc
	this.somkmc = new lib.Symbol14_1();
	this.somkmc.name = "somkmc";
	this.somkmc.setTransform(99.2,14.9,1,0.9329);

	this.timeline.addTween(cjs.Tween.get(this.somkmc).wait(1).to({scaleY:0.8322,x:96.2,y:14.65},0).wait(1));

	// feutre
	this.feutre = new lib.feutre();
	this.feutre.name = "feutre";
	this.feutre.setTransform(146.35,13.15,1,0.9329);

	this.timeline.addTween(cjs.Tween.get(this.feutre).wait(1).to({scaleY:0.8322,x:143.35,y:13.1},0).wait(1));

	// mimsaha
	this.mimsaha = new lib.Symbol13_1();
	this.mimsaha.name = "mimsaha";
	this.mimsaha.setTransform(187.3,14.9,1,0.9329);

	this.timeline.addTween(cjs.Tween.get(this.mimsaha).wait(1).to({scaleY:0.8322,x:184.3,y:14.65},0).wait(1));

	// circle
	this.circle = new lib.Symbol12_1();
	this.circle.name = "circle";
	this.circle.setTransform(261.9,16.15,0.1438,0.1497);
	this.circle.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.circle).wait(1).to({scaleX:0.2157,x:267.25,y:15.65},0).wait(1));

	// square
	this.square = new lib.Symbol11_1();
	this.square.name = "square";
	this.square.setTransform(227.15,15.1,1,0.9329);

	this.timeline.addTween(cjs.Tween.get(this.square).wait(1).to({scaleY:0.8322,x:224.15,y:14.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39,0.9,231.7,27.900000000000002);


(lib.Symbol38_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ply_btn
	this.musicBtn = new lib.Symbol37_1();
	this.musicBtn.name = "musicBtn";
	this.musicBtn.setTransform(-114.55,2.5,0.8582,0.793);

	this.timeline.addTween(cjs.Tween.get(this.musicBtn).wait(1));

	// sldr
	this.cursor = new lib.Symbol32_1();
	this.cursor.name = "cursor";
	this.cursor.setTransform(-92.05,3.2,1,1,0,0,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.cursor).wait(1));

	// Layer_3
	this.instance = new lib.rectongle("synched",0);
	this.instance.setTransform(-131.2,1.4,1.9808,1.1063,0,0,0,-94.4,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38_1, new cjs.Rectangle(-134.3,-16.6,272.8,37.8), null);


(lib.settin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// full_eye
	this.full_eye = new lib.fullscr();
	this.full_eye.name = "full_eye";
	this.full_eye.setTransform(-52.75,-36.4);

	this.timeline.addTween(cjs.Tween.get(this.full_eye).to({scaleX:0.8126,x:-12.7},9).wait(1));

	// default_menu
	this.default_menu = new lib.re_menu();
	this.default_menu.name = "default_menu";
	this.default_menu.setTransform(-55.55,35.45);

	this.timeline.addTween(cjs.Tween.get(this.default_menu).to({x:-67.65},9).wait(1));

	// eye_tmrn
	this.eye_tmrn = new lib.eye();
	this.eye_tmrn.name = "eye_tmrn";
	this.eye_tmrn.setTransform(-54.4,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.eye_tmrn).to({scaleX:0.8126,x:-14.05},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-51.6,79.5,102);


// stage content:
(lib.قالبالقصص = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		/* Get value from any UI Control
		Use this snippet to query the current value of any Control.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		*/
		
		// Start your custom code
		console.log($("#list1").val());
		// End your custom code
		this.stop();
		
		
		var maxPage = 56;
		home_page = 2;
		
		var that = this;
		var currentPage = 0;
		var scaleFac = 0;
		var tmrnAdded = false;
		var is_tool_clicked;
		
		var firstwidth = 0;
		var firstheight = 0;
		
		var scalx;
		var scaly;
		
		that.isLeft = true ;
		var update_coord = false;
		var vid, source, removeBtn, parent, grand_father;
		var menu_list = [];
		
		document.body.style.overflow = 'hidden';
		
		stage.enableMouseOver(20);
		
		 //createjs.Ticker.timingMode = createjs.Ticker.RAF;
		
		createjs.Touch.enable(stage, true, true);
		
		
		
		var isTouch = true;
		
		
		
		setTimeout(function () {
		
			initTextStyle();
		
		
		}, 100);
		
		
		function initTextStyle() {
		
		
		
			document.addEventListener('keyup', function (e) {
				if (e.key === 'Enter') {
					if (document.activeElement === that.pageNum && that.goPage.alpha === 1)
						goPage();
				}
			});
		
		
		
			vid = document.getElementById('vi');
			source = document.createElement('source');
		
			vid.appendChild(source);
		
			removeBtn = document.getElementById("remove");
			removeBtn.addEventListener("click", Delete);
		
			dragElement(document.getElementById("mydiv"));
		
		
			parent = removeBtn.parentNode;
			grand_father = parent.parentNode;
		
			that.pageNum = document.getElementById("pageNum");
			that.pageNum.style.color = '#000000';
			that.pageNum.style.fontSize = font_size;
			that.pageNum.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
			that.pageNum.name = 'my pageNum';
			that.pageNum.maxLength = 3;
		
			that.goPage.addEventListener("click", goPage);
			that.goPage.addEventListener("rollover", overBtn);
			that.goPage.addEventListener("rollout", outBtn);
		
			that.book.addEventListener("click", toBook);
			that.book.addEventListener("rollover", overBtn);
			that.book.addEventListener("rollout", outBtn);
		
		
			that.home.addEventListener("click", toHome);
			that.home.addEventListener("rollover", overBtn);
			that.home.addEventListener("rollout", outBtn);
		
			that.re_set.addEventListener("click", toreset);
		
		
		
			that.plus.addEventListener("click", onPlus);
			that.plus.addEventListener("mouseover", overBtn);
			that.plus.addEventListener("mouseout", outBtn);
		
			that.minus.addEventListener("click", onMinus);
			that.minus.addEventListener("mouseover", overBtn);
			that.minus.addEventListener("mouseout", outBtn);
		
			that.grey_tool.addEventListener("click", blok);
		
			that.tool_btn.addEventListener("rollover", overBtn);
			that.tool_btn.addEventListener("rollout", outBtn);
			that.tool_btn.addEventListener("click", toTools);
		
			that.settin_btn.addEventListener("rollover", overBtn);
			that.settin_btn.addEventListener("rollout", outBtn);
			that.settin_btn.addEventListener("click", toSettin);
		
			that.re_set.addEventListener("rollover", overBtn);
			that.re_set.addEventListener("rollout", outBtn);
		
			that.prv.addEventListener("click", toPrv);
			that.prv.addEventListener("rollover", overBtn);
			that.prv.addEventListener("rollout", outBtn);
		
		
			that.next.addEventListener("click", toNx);
			that.next.addEventListener("rollover", overBtn);
			that.next.addEventListener("rollout", outBtn);
		
		
		
			menu_list = [that.next, that.prv, that.re_set, that.tool_btn,
				that.goPage, that.home, that.book, that.sound_sld,
		
			];
		
			get_origin_x();
		
		
			that.addChildAt(cont, 0);
		
			that.addChildAt(contmrn, 1);
		
		
		
			setSabora(currentPage);
		
		
			changePage(currentPage);
		}
		
		
		function get_origin_x() {
		
			for (var u = 0; u < menu_list.length; u++) {
				menu_list[u].origin_x = menu_list[u].x;
				menu_list[u].origin_scal_x = menu_list[u].scaleX;
		
				if (menu_list[u].bkg) {
					menu_list[u].bkg.origin_scal_x = menu_list[u].bkg.scaleX;
				}
			}
		
		
			that.tool.origin_y = that.tool.y;
			that.tool.origin_scal_x = that.tool.scaleX;
			that.tool.origin_scal_y = that.tool.scaleY;
		
		}
		
		
		
		function reset_menu() {
			for (var u = 0; u < menu_list.length; u++) {
				menu_list[u].x = menu_list[u].origin_x;
				menu_list[u].scaleX = menu_list[u].origin_scal_x;
		
				if (menu_list[u].bkg) {
					menu_list[u].bkg.scaleX = menu_list[u].bkg.origin_scal_x;
				}
		
		
			}
			that.tool.y = that.tool.origin_y;
			that.tool.scaleX = that.tool.origin_scal_x;
			that.tool.scaleY = that.tool.origin_scal_y;
		
		
			that.pageNum.style.left = '0px';
		
			that.next.visible = true;
			that.prv.visible = true;
			that.plus.visible = true;
			that.minus.visible = true;
			that.re_set.visible = true;
		
			that.book.bkg.scaleX = that.book.bkg.origin_scal_x;
			that.home.bkg.scaleX = that.home.bkg.origin_scal_x;
			that.tool_btn.bkg.scaleX = that.tool_btn.bkg.origin_scal_x;
		
		}
		function set_ui() {
		
			that.next.visible = false;
			that.prv.visible = false;
			that.plus.visible = false;
			that.minus.visible = false;
			that.re_set.visible = false;
		
			that.home.x = that.home.x - 240;
			that.book.x = that.book.x - 60;
			that.tool_btn.x = that.tool_btn.x + 80;
			that.goPage.x = that.goPage.x + 60;
		
		
		
			that.book.bkg.scaleX = 3.2 + (1 / that.book.bkg.origin_scal_x);
			that.home.bkg.scaleX = 3.2 + (1 / that.home.bkg.origin_scal_x);
			that.tool_btn.bkg.scaleX = 3.2 + (1 / that.tool_btn.bkg.origin_scal_x);
		
		
			that.pageNum.style.left = 10 + '%'; //((that.goPage.origin_x + that.goPage.x) * (scalx)) + 'px';
			that.sound_sld.scaleX = 1.4;
		
			that.tool.scaleX = 1.3;
			that.tool.scaleY = 1.3;
			that.tool.y = (lib.properties['height'] - that.tool.getTransformedBounds().height) - that.tool_btn.getTransformedBounds().height - 8;
		}
		
		
		
		function remove_settin() {
		
			is_settin_clicked = false;
			that.settin.gotoAndStop(0);
			child_array = that.settin.children;
			for (var i = 0; i < child_array.length; i++) {
		
				child_array[i].bkg.gotoAndStop(0);
		
			}
			console.log('child_array', child_array);
		}
		
		function overBtn(ev) {
		
		
		
			ev.currentTarget.bkg.gotoAndStop(1);
		
			if (ev.currentTarget !== that.settin_btn && ev.currentTarget.parent !== that.settin) {
				remove_settin();
			}
		
		}
		function outBtn(ev) {
		
		
			ev.currentTarget.bkg.gotoAndStop(0);
		}
		
		
		var chafaf = new lib.chafaf();
		
		
		
		function blok(e) {
		
		
			e.stopPropagation();
		
		
		
		}
		var cont = new createjs.Container();
		cont.name = "tttt";
		var awraq = new lib.waraq();
		var dill = new lib.addil();
		awraq.x = -10;
		
		awraq.scaleX = 1.075;
		
		awraq.scaleY = 1.078;
		
		dill.x = 320;
		
		dill.scaleY = 1.150;
		
		cont.isDragged = false;
		
		var offsetX = 0;
		var offsetY = 0;
		var chafaf_is_add = false;
		
		
		
		var queue = new createjs.LoadQueue(false);
		
		queue.on("complete", function (event) {
		
			that.page_loader.visible = false;
			that.page_loader.gotoAndStop(0);
		
		
		
			var image = queue.getResult("image");
			bmp = new createjs.Bitmap(image);
		
		
		
			bmp.cache(0, 0, image.width, image.height);
		
			if (firstwidth == 0) {
		
		
				var image_h = image.height;
		
				console.log(' image.width', image.width);
		
				scalx = (500 / (image_h + 100)); //100 
				scaly = (500 / (image_h + 150)); //250
		
				firstwidth = image.width * scalx;
				firstheight = image_h * scaly;
		
		
		
				cont.origin_regX = firstwidth / 2;
				cont.origin_regY = (firstheight / 2) //+ 10;
		
		
				cont.regX = cont.origin_regX;
				cont.regY = cont.origin_regY;
		
		
		
		
				offsetX = (1000 - firstwidth) / 2;
				offsetY = (500 - firstheight) / 2 + 10;
		
				console.log('scalx', scalx);
				console.log('scaly', scaly);
		
		
				cont.x = (firstwidth / 2) + offsetX;
				cont.y = (firstheight / 2) + offsetY;
		
		
		
				chafaf.scaleX = scalx;
				chafaf.scaleY = scaly; //- 0.01
		
				//chafaf.x = chafaf.x + 27;
				//chafaf.y = chafaf.y + 25;
		
		
			}
			bmp.scaleX = scalx;
			bmp.scaleY = scaly;
		
		
			cont.removeAllChildren();
		
		
		
			cont.addChild(awraq);
			cont.addChildAt(bmp, 1);
			cont.addChildAt(dill, 2);
			cont.addChildAt(sbr, 3);
			frameChafaf();
		
		});
		
		
		function frameChafaf() {
		
		
			if (!chafaf_is_add) {
		
				chafaf_is_add = true;
				chafaf.gotoAndStop(0);
			}
			cont.addChild(chafaf);
		
			chafaf.removeYad_by_frame();
		
			cs_removeListener(chafaf.listofcs);
		
			chafaf.listofcs = [];
		
			chafaf.gotoAndStop(currentPage / 2);
		
			cs_setListener(chafaf.listofcs);
		
			chafaf.addYad_by_frame(chafaf.listofcs)
		
		}
		
		function cs_removeListener(list_cs) {
			for (var i = 0; i < list_cs.length; i++) {
		
				if (list_cs[i].name.slice(0, 2) != 'zm') {
		
					list_cs[i].removeEventListener('click', handle);
		
				} else list_cs[i].removeEventListener('click', chafaf.zomhandle);
		
		
			}
		
		}
		
		function cs_setListener(list_cs) {
		
			for (var i = 0; i < list_cs.length; i++) {
		
				if (list_cs[i].name.slice(0, 2) != 'zm') {
		
					list_cs[i].addEventListener('click', handle);
		
				} else list_cs[i].addEventListener('click', chafaf.zomhandle);
			}
		
		}
		
		function get_csType(st) {
		
			var cstype = "";
			switch (st) {
		
		
				case "lect":
					cstype = "lecture_z";
		
					break;
				case "colo":
					cstype = "color";
		
					break;
				case "anyc":
					cstype = "anyColor";
		
					break;
				case "same":
					cstype = "sameColor";
		
					break;
				case "ssil":
					cstype = "sil";
		
					break;
		
				case "soun":
					cstype = "sound";
		
					break;
				case "souf":
					cstype = "sound_fixe";
		
					break;
				case "bbar" :
				case "ento": 
				case "croc" :
				case "soli" :
							
					cstype = "entour";
		
					break;
		
				case "text":
					cstype = "text";
		
					break;
				case "mdnd":
					cstype = "multi_dnd";
		
					break;
				case "ddnd":
					cstype = "dnd";
		
					break;
		
				case "vide":
					cstype = "video";
		
					break;
			}
		
			return cstype;
		
		}
		function handle(e) {
		
			if (cont.isDragged) return;
		
		
		
			var nameOfcs = e.currentTarget.name;
		
			var arr = nameOfcs.split("w");
		
		
			cont.mc_type = get_csType(arr[1].slice(0, 4));
		
		
			if (cont.mc_type == 'video') {
		
				videoManager(nameOfcs);
		
				return;
			}
			cont.mc = new lib[nameOfcs]();
			cont.mc.name = nameOfcs;
		
		
			cont.totam(null);
		
		
		
		}
		
		
		function changePage(file) {
		
			that.page_loader.gotoAndPlay(1);
			that.page_loader.visible = true;
		
		
		
			queue.loadFile({
				src: "pages/" + file + ".jpg",
				id: "image"
			});
		
		
		
		}
		
		function toPrv(ev, swap = false) {
		
			if (swap || ev.nativeEvent instanceof MouseEvent) {
		
				if (currentPage - 2 < 0) return;
				currentPage -= 2;
				that.pageNum.value = currentPage;
		
		
		
		
				preparChangePage(currentPage);
			}
		
		}
		
		
		function toNx(ev, swap = false) {
		
			if (swap || ev.nativeEvent instanceof MouseEvent) {
		
				if (currentPage + 2 > maxPage) return;
		
				currentPage += 2;
				that.pageNum.value = currentPage;
		
				preparChangePage(currentPage);
		
		
			}
		}
		
		function setSabora(currentPage) {
		
			if (store_sbr.hasOwnProperty("" + currentPage)) {
		
				sbr = store_sbr["" + currentPage];
				hjbArrays = store_hjb_shapeArray["" + currentPage];
		
			} else {
		
				sbr = createNew_sbr();
				hjbArrays = [];
		
				store_sbr["" + currentPage] = sbr;
				store_hjb_shapeArray["" + currentPage] = hjbArrays;
			}
		
		
		}
		
		function startDrag() {
		
			cont.addEventListener("pressup", onpressup);
			//cont.addEventListener("pressmove", onpressmove);
			cont.addEventListener("mousedown", onmousedown);
		
		
		}
		
		startDrag();
		cont.startDrag = startDrag;
		
		
		
		
		var previous_x_update = false;
		stage.preventSelection = false;
		function onmousedown(e) {
		
		
			cont.addEventListener("pressmove", onpressmove);
		
			cont.isDragged = false;
		
			
			previous_x_update = false;
		
			var pt = that.globalToLocal(e.stageX, e.stageY);
			var posX = pt.x;
			var posY = pt.y;
			e.currentTarget.offset = {
				x: posX - e.currentTarget.x,
				y: posY - e.currentTarget.y
			};
		
			e.currentTarget.down = {
				x: posX,
				y: posY
			};
		}
		
		
		function stopDrag() {
		
		
			cont.removeEventListener("pressup", onpressup);
			cont.removeEventListener("pressmove", onpressmove);
			cont.removeEventListener("mousedown", onmousedown);
		
		
		}
		
		
		cont.stopDrag = stopDrag;
		
		function swapToNext(newdist, evt) {
		
		
			if (newdist > 100) {
		
				toNx(evt, true);
			}
			if (newdist < -100) {
		
				toPrv(evt, true);
			}
		}
		
		
		function onpressmove(e) {
		
		
			cont.isDragged = true;
		
			var pt = that.globalToLocal(e.stageX, e.stageY);
		
			var newX = pt.x - e.currentTarget.offset.x;
			var newY = pt.y - e.currentTarget.offset.y;
		
		
			var mult = scaleFac * firstwidth;
		
			if (mult / 2 - ((firstwidth / 2 + offsetX) - newX) > firstwidth / 2 && mult / 2 - (newX - (firstwidth / 2 + offsetX)) > firstwidth / 2) {
		
				e.currentTarget.x = newX;
		
				update_coord = true;
				previous_x_update = true;
			}
		
			var mult2 = scaleFac * firstheight;
			if (mult2 / 2 - ((firstheight / 2 + offsetY) - newY) > firstheight / 2 && mult2 / 2 - (newY - (firstheight / 2 + offsetY)) > firstheight / 2) {
		
				e.currentTarget.y = newY;
				update_coord = true;
		
			}
		
			if (update_coord) { //   chech if stage update can be remplaced by the default tiker
		
				//stage.update();
				update_coord = false;
			}
		
		
		
		
		
		
		}
		
		
		function onpressup(evt) {
		
		
			cont.removeEventListener("pressmove", onpressmove);
		
			var pt = that.globalToLocal(evt.stageX, evt.stageY);
		
		
		
			if ((Math.abs(evt.currentTarget.down.x - pt.x) * scaleFac) > 100 && !previous_x_update || (cont.isDragged && scaleFac === 0)) {
				swapToNext(evt.currentTarget.down.x - pt.x, evt);
			}
			stage.update();
			cont.isDragged = false;
		
			remove_settin();
		
		}
		
		
		function toHome(e) {
		
			if (e.nativeEvent instanceof MouseEvent) {
		
		
				currentPage = home_page;
				that.pageNum.value = currentPage;
		
				preparChangePage(currentPage);
			}
		}
		
		
		
		function goPage(e) {
		
			var isCorrectInteger = Number.isInteger(parseInt(that.pageNum.value));
			if (!isCorrectInteger) return;
		
		
			var inputValue = parseInt(that.pageNum.value);
		
			if (inputValue > maxPage) {
		
				that.pageNum.value = maxPage;
				inputValue = maxPage;
			}
			if (inputValue < 0) {
		
				that.pageNum.value = 0;
				inputValue = 0;
			}
		
			currentPage = inputValue - inputValue % 2;
		
		
			preparChangePage(currentPage);
		
		}
		
		function preparChangePage(currentPage) {
		
		
			if (is_tool_clicked) {
				end_tool();
			}
		
			setSabora(currentPage);
		
			changePage(currentPage);
		
		}
		
		
		function toBook(e) {
		
			if (e.nativeEvent instanceof MouseEvent) {
		
		
		
				e.currentTarget.gotoAndPlay(1);
		
		
		
				chafaf.mouseEnabled = true;
		
				if (tmrnAdded) {
		
					sbr_tmrn.removeAllEventListeners();
				}
		
				clearTmrn();
		
				if (is_tool_clicked) {
		
					end_tool();
				}
			}
		
		}
		
		
		
		var contmrn = new createjs.Container();
		contmrn.x = 0;
		contmrn.y = 0;
		
		
		// stage.addChild(contmrn);
		
		
		function blockChafaf() {
		
			chafaf.mouseEnabled = false;
		
		}
		that.blockChafaf = blockChafaf;
		
		
		function unblockChafaf() {
		
			chafaf.mouseEnabled = true;
		
		}
		that.unblockChafaf = unblockChafaf;
		
		
		
		dragable(that.tool);
			function dragable(obj) {
				
					obj.addEventListener("mousedown", function (e) {
				
				        obj.isdraged = false ;
						var global = obj.parent.localToGlobal(obj.x, obj.y);
						obj.offset = {
							'x': global.x - e.stageX,
							'y': global.y - e.stageY
						};
				
						obj.addEventListener("pressmove", dragableMove)
						obj.addEventListener("pressup", dragableUp);
				
					});
				
					function dragableMove(e) {
				
						e.nativeEvent.preventDefault();
				
						obj.isdraged = true;
						var local = obj.parent.globalToLocal(e.stageX + obj.offset.x, e.stageY + obj.offset.y);
				
				
						var global = obj.parent.localToGlobal(obj.x, obj.y)
				
				
						if (local.y < 0 || local.y + obj.getTransformedBounds().height >
							lib.properties["height"] - that.tool_btn.getTransformedBounds().height || local.x < 0 || local.x + obj.getTransformedBounds().width >
							lib.properties["width"]) return;
						obj.x = local.x;
						obj.y = local.y;
						stage.update();
				
					}
				
				
					function dragableUp(e) {
						if(obj.isdraged ){
						var global = obj.parent.localToGlobal(obj.x, obj.y)
						that.isLeft = global.x < (lib.properties["width"] / 2);
						obj.isdraged = false;
				
						obj.removeEventListener("pressup", dragableUp);
						obj.removeEventListener("pressmove", dragableMove)
						}
					}
				
				
				}
		
		function add_remove(shap, type) {
		
		
			if (type === "circle") {
		
				shap.sq.visible = false;
		
			} else if (type === "square") {
		
				shap.ci.visible = false;
			}
			var rm_shape = new lib.rem_shape();
		
			rm_shape.scaleX = 1 / shap.scaleX;
			rm_shape.scaleY = 1 / shap.scaleY;
		
			shap.addChild(rm_shape);
		
			rm_shape.addEventListener("click", toRemove_shape);
		
			function toRemove_shape() {
		
		
				rm_shape.removeEventListener("click", toRemove_shape);
		
				shap.parent.removeChild(shap);
			}
		
		}
		
		function addShapeToKtb(sh) {
		
			if (Math.abs(sh.width) < 15 && Math.abs(sh.height) < 15) return;
		
			var scal_wid;
			var scal_hei;
		
		
		
			var c = new lib.shap_hjb();
			c.x = sh.x;
			c.y = sh.y;
		
		
			if (sh.typeofShape === "circle") {
		
				var radius = c.getBounds().width;
		
				scal_wid = Math.max(sh.width, sh.height) / radius * 2;
				scal_hei = Math.max(sh.width, sh.height) / radius * 2;
		
			} else if (sh.typeofShape === "square") {
		
				scal_wid = sh.width / c.getBounds().width;
				scal_hei = sh.height / c.getBounds().height;
		
		
			}
		
			c.scaleX = scal_wid * 1.5;
			c.scaleY = scal_hei * 1.5;
		
			//c.add_remove(c.scaleX, c.scaleY, sh.typeofShape);
		
			add_remove(c, sh.typeofShape);
			if (tmrnAdded) {
		
				return contmrn.addChild(c);
		
			} else {
		
				hjbArrays.push(sh);
		
				return sbr.addChild(c);
			}
		
		
		
		}
		that.addShapeToKtb = addShapeToKtb;
		
		
		function removeHjb(index) {
		
			if (tmrnAdded) {
		
				contmrn.removeChildAt(contmrn.children.length - 1 - index);
		
			} else {
		
				sbr.removeChildAt(sbr.children.length - 1 - index);
		
			}
		}
		
		that.removeHjb = removeHjb;
		
		
		
		function getCont() {
		
			if (tmrnAdded) {
		
				return contmrn;
		
			} else return cont;
		
		}
		that.getCont = getCont;
		
		
		var btn_enable = [that.home, that.re_set, that.prv, that.next, that.goPage, that.plus, that.minus];
		
		function tool_enable(bool, blockType) {
		
		
			if (cont.mc && cont.mc_type == "sound" && blockType == 'tmrn') return;
			var alph = bool ? 1 : .3;
		
			if (blockType == 'tmrn' || blockType == 'zoom') {
		
				for (var i = 0; i < btn_enable.length; i++) {
		
					btn_enable[i].alpha = alph;
					btn_enable[i].mouseEnabled = bool;
		
				}
		
		
			}
		
			if (blockType == 'zoom') {
		
				that.tool_btn.alpha = alph;
				that.tool_btn.mouseEnabled = bool;
		
				that.book.alpha = alph;
				that.book.mouseEnabled = bool;
		
			}
		}
		
		that.tool_enable = tool_enable;
		
		
		function totam(evt) {
		
		
			blockChafaf();
			remove_settin();
		
			if (cont.mc_type != "sound") {
		
				cont.mouseEnabled = false;
				cont.stopDrag();
			}
			that.tool_enable(false, 'tmrn');
		
			sbr_tmrn = createNew_sbr('tmrn');
		
		
			addTmrn();
		
		};
		
		
		cont.totam = totam;
		
		
		
		
		
		
		function clearTmrn() {
		
		
			tmrnAdded = false;
		
			contmrn.removeAllChildren();
		
			that.tool_enable(true, 'tmrn');
		
			cont.startDrag();
		
			cont.mouseEnabled = true;
		
		
		
		}
		
		var Hjb = new lib.hijabTmrn();
		function drawHjb() {
		
		
			Hjb.clicked = false;
			Hjb.hijab_alpha.alpha = 1;
			Hjb.add_alpha.gotoAndStop(0);
		
			contmrn.addChild(Hjb);
		
			if (cont.mc_type == "sound") {
		
				Hjb.add_alpha.visible = true;
		
			} else Hjb.add_alpha.visible = false;
		}
		
		function addTmrn() {
		
			drawHjb();
		
			tmrnAdded = true;
		
			cont.mc.x = lib.properties["width"] / 2 - (cont.mc.getBounds().width / 2);
			cont.mc.y = lib.properties["height"] / 2 - (cont.mc.getBounds().height / 2);
		
			contmrn.addChild(cont.mc);
		
		
			setTimeout(function () {
		
		
		
				switch (cont.mc_type) {
		
					case "dnd":
						dnd_Manager(cont.mc);
						break;
		
					case "multi_dnd":
						multi_dnd_Manager(cont.mc);
						break;
		
					case "sil":
						silManager(cont.mc);
						break;
		
					case "text":
						textManager(cont.mc);
		
		
						break;
		
					case "sameColor":
						sameColorManager(cont.mc);
						break;
		
					case "anyColor":
						anyColorManager(cont.mc);
						break;
		
					case "color":
						colorManager(cont.mc);
						break;
		
					case "sound":
						soundManager(cont.mc);
						that.sound_sld.visible = true;
						that.settin_btn.visible = false;
						break;
		
					case "sound_fixe":
						soundManager(cont.mc);
						that.sound_sld.visible = true;
						that.settin_btn.visible = false;
						break;
		
					case "entour":
						entourManager(cont.mc);
		
						break
					case "lecture_z":
						lecture_zManager(cont.mc);
						break;
		
				}
		
			}, 500);
		
		}
		
		
		
		
		function videoManager(video_name) {
		
			cont.addVideo(video_name);
		
		}
		
		
		
		
		function lecture_zManager(lectureMc) {
		
		
			var stat;
			var lzArray = [];
		
			setTimeout(function () {
		
				get_Lz_mc();
		
		
				setlisteners();
		
		
			}, 0);
		
		
		
			function get_Lz_mc() {
		
		
				var parent = lectureMc;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
		
					if (keys[len].slice(0, 2) == ("lz")) {
		
						parent[keys[len]].name = keys[len];
		
						lzArray.push(parent[keys[len]]);
		
		
					}
				}
			}
		
			function setlisteners() {
		
				for (var p = 0; p < lzArray.length; p++) {
		
		
		
					lzArray[p].addEventListener('click', extCommunicate);
				}
			}
		
			function extCommunicate(evt) {
		
				if (evt.nativeEvent instanceof MouseEvent) {
					lectureMc.addChildAt(evt.currentTarget, lectureMc.numChildren - 1);
		
					if (!stat) {
						evt.currentTarget.gotoAndPlay(2)
						stat = true;
					} else {
						evt.currentTarget.gotoAndPlay(26);
						stat = false;
					}
				}
			}
		
			lectureMc.addEventListener("removed", removeListeners);
		
			function removeListeners(e) {
		
		
				for (var p = 0; p < lzArray.length; p++) {
		
		
		
					lzArray[p].removeEventListener('click', extCommunicate);
				}
		
				lectureMc.removeEventListener("removed", removeListeners);
			}
		}
		
		
		
		
		
		that.sound_sld.visible = false;
		if (!createjs.Sound.isReady()) {
		
			createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
		}
		
		var currentevent;
		var isfirst;
		var soundIsReady;
		var soundEnd;
		var duration;
		var frame_start_sound = 0;
		var on;
		that.music_btn_add = false;
		
		function soundManager(soundMc) {
		
		
			that.sound_sld.mov = soundMc;
			sout = soundMc.name;
		
		   totalFrm = soundMc.totalFrames ;
		
			soundIsReady = false;
			on = false;
			isfirst = true;
			soundEnd = false;
		
			that.sound_sld.musicBtn.musicOn.visible = false;
			that.sound_sld.musicBtn.musicOff.visible = true;
			that.sound_sld.cursor.mouseEnabled = false;
		
			that.sound_sld.cursor.rate = 0;
		
		
		
			(function startSound() {
		
		
		
		
				createjs.Sound.alternateExtensions = ["ogg"];
				createjs.Sound.addEventListener("fileload", handleLoad);
		
				soundIsReady = createjs.Sound.registerSound("mysound/" + sout + ".mp3", "sound");
		
			})();
		
		
		
			function handleLoad(event) {
		
		
				soundIsReady = true;
		
			}
		
		
		
		
			if (!that.music_btn_add) {
				that.sound_sld.musicBtn.addEventListener("click", musicToggle);
				that.music_btn_add = true;
			}
		
			function musicToggle(eve) {
		
		
				if (eve.nativeEvent instanceof MouseEvent) {
		
					if (!on && soundIsReady === true) {
		
						that.sound_sld.musicBtn.musicOn.visible = true;
		
						that.sound_sld.musicBtn.musicOff.visible = false;
		
		
		
						if (isfirst) {
		
							that.music = createjs.Sound.play("sound");
		
		
		
							that.music.on("complete", handleComplete);
		
							duration = that.music.duration;
		
		
		
							isfirst = false;
		
		
						}
		
						that.sound_sld.mov.play();
		
						that.sound_sld.stopReceivingOnTickSound = false;
		
						if (soundEnd) {
		
							that.music.play();
		
							soundEnd = false;
						}
		
		
		
						resetSoundPosition(that.sound_sld.cursor.rate);
		
						that.music.paused = false;
		
						on = !on;
		
		
		
		
						that.sound_sld.cursor.mouseEnabled = true;
		
					} else if (on && soundIsReady === true) {
		
						that.sound_sld.musicBtn.musicOn.visible = false;
						that.sound_sld.musicBtn.musicOff.visible = true;
						that.music.paused = true;
						on = false;
		
						that.sound_sld.mov.stop();
		
						that.sound_sld.stopReceivingOnTickSound = true;
		
						that.sound_sld.cursor.mouseEnabled = false;
					}
				}
			}
		
		
			function resetSoundPosition(rate) {
		
				sound_position = duration * rate;
				if (isNaN(sound_position) || sound_position === Infinity) {
					sound_position = 0.1;
				}
		
				if (that.music !== null)
					that.music.position = sound_position;
		
			}
		
			that.resetSoundPosition = resetSoundPosition;
		
		
		
			createjs.Ticker.on("tick", updateTRK);
		
			function updateTRK() {
		
				if (!isfirst) {
		
					that.sound_sld.cursor.resetTrk(that.music.position / duration , totalFrm);
		
				}
			}
		
		
			function handleComplete() {
			soundEnd = true;
				       
						
						that.sound_sld.cursor.mouseEnabled = false;
						
				
				 
						that.sound_sld.musicBtn.musicOn.visible = false;
						that.sound_sld.musicBtn.musicOff.visible = true;
				
						on = false;
						resetSoundPosition(0) 
						that.sound_sld.cursor.resetTrk(0 , totalFrm);
				           that.sound_sld.stopReceivingOnTickSound = true;
				
				that.sound_sld.mov.gotoAndStop(frame_start_sound);
			}
		
			soundMc.addEventListener("removed", removeListeners);
		
			function removeListeners(e) {
				
		        that.sound_sld.cursor.resetTrk(0 , totalFrm);
				
				that.sound_sld.stopReceivingOnTickSound = true;
				
				that.sound_sld.mov = null;
				createjs.Sound.stop();
		
				createjs.Sound.removeEventListener("fileload", handleLoad);
		
				soundMc.removeEventListener("removed", removeListeners);
		
		        
				that.sound_sld.visible = false;
				that.settin_btn.visible = true;
		
			}
		
		
		
		
		}
		
		function colorManager(colorMc) {
		
			var allCorrect = true;
			var Complet = true;
		
			var lounArray = [];
			var forchatArray = [];
		
			var currentloun = 0;
		
			setTimeout(function () {
		
				getLounAndFourchat();
		
		
				setlisteners();
		
		
			}, 0);
		
		
		
			function getLounAndFourchat() {
		
		
				var parent = colorMc.correctbtn.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
		
					if (keys[len].slice(1, 5) == ("loun")) {
		
						parent[keys[len]].name = keys[len];
		
						lounArray.push(parent[keys[len]]);
		
		
		
		
					} else if (keys[len].slice(0, 7) == ("forchat")) {
		
						parent[keys[len]].name = keys[len];
		
						forchatArray.push(parent[keys[len]]);
					}
		
		
				}
		
			}
		
		
		
			function setlisteners() {
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].addEventListener("click", onloun);
		
				}
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].addEventListener("click", onforchat);
		
				}
		
			}
		
			function removelisteners() {
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].removeEventListener("click", onloun);
		
				}
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].removeEventListener("click", onforchat);
		
				}
		
		
		
		
			}
		
			function onloun(e) {
		
				if (e.nativeEvent instanceof MouseEvent) {
		
					if (e.currentTarget.currentFrame !== 0) {
						e.currentTarget.gotoAndStop(0);
					} else e.currentTarget.gotoAndStop(currentloun);
				}
		
			}
			function onforchat(e) {
		
		
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].gotoAndStop(0);
		
				}
				if (e != null) {
		
					currentloun = parseInt(e.currentTarget.name.slice(7));
					e.currentTarget.gotoAndPlay(1);
				}
			}
		
		
		
			colorMc.correctbtn.addEventListener("click", correct);
		
			function correct(ev) {
		
				colorMc.correctbtn.removeEventListener("click", correct);
				onforchat(null);
		
		
		
		
				allCorrect = true;
				Complet = true;
		
				for (var i = 0; i < lounArray.length; i++) {
		
					lounArray[i].removeEventListener("click", onloun);
		
					if (lounArray[i].name.slice(5, 6) != lounArray[i].currentFrame) {
		
						if (lounArray[i].currentFrame == 0) {
		
							Complet = false;
		
						} else {
		
							lounArray[i].gotoAndStop(lounArray[i].currentFrame + 20);
		
						}
						allCorrect = false;
					}
		
		
				}
		
				if (!Complet) {
		
					colorMc.correctbtn.gotoAndStop(2);
				}
				if (allCorrect) {
		
					colorMc.correctbtn.gotoAndStop(1);
		
		
				}
			}
		
		
		
			colorMc.replay.addEventListener("click", rply);
			function rply(ev) {
		
				colorMc.correctbtn.addEventListener("click", correct);
				colorMc.correctbtn.gotoAndStop(0);
				setlisteners();
		
				currentloun = 0;
				onforchat(null);
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].gotoAndStop(0);
		
				}
		
			}
		
			colorMc.addEventListener("removed", oncolorRemove);
			function oncolorRemove(ev) {
		
		
		
				colorMc.correctbtn.removeEventListener("click", correct);
				colorMc.replay.removeEventListener("click", rply);
				removelisteners();
				colorMc.removeEventListener("removed", oncolorRemove);
			}
		
		
		}
		
		
		
		
		
		function anyColorManager(anycolorMc) {
		
			var allCorrect = true;
			var Complet = true;
		
			var lounArray = [];
			var forchatArray = [];
		
			var currentloun = 0;
		
			setTimeout(function () {
		
				getLounAndFourchat();
		
		
				setlisteners();
		
		
			}, 0);
		
		
			function getLounAndFourchat() {
		
		
				var parent = anycolorMc.correctbtn.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
		
					if (keys[len].slice(1, 5) == ("loun")) {
		
						parent[keys[len]].name = keys[len];
		
						lounArray.push(parent[keys[len]]);
		
		
		
		
					} else if (keys[len].slice(0, 7) == ("forchat")) {
		
						parent[keys[len]].name = keys[len];
		
						forchatArray.push(parent[keys[len]]);
					}
		
		
				}
		
			}
		
		
		
			function setlisteners() {
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].addEventListener("click", onloun);
		
				}
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].addEventListener("click", onforchat);
		
				}
			}
		
			function removelisteners() {
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].removeEventListener("click", onloun);
		
				}
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].removeEventListener("click", onforchat);
		
				}
		
		
				anycolorMc.replay.removeEventListener("click", rply);
		
		
				anycolorMc.correctbtn.removeEventListener("click", correct);
		
			}
			setlisteners();
		
		
			function onloun(e) {
		
				if (e.nativeEvent instanceof MouseEvent) {
		
					if (e.currentTarget.currentFrame !== 0) {
						e.currentTarget.gotoAndStop(0);
					} else e.currentTarget.gotoAndStop(currentloun);
				}
		
			}
			function onforchat(e) {
		
		
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].gotoAndStop(0);
		
				}
				if (e != null) {
		
					currentloun = parseInt(e.currentTarget.name.slice(7));
					e.currentTarget.gotoAndPlay(1);
				}
			}
		
		
		
			anycolorMc.correctbtn.addEventListener("click", correct);
		
			function correct(ev) {
		
				anycolorMc.correctbtn.removeEventListener("click", correct);
				onforchat(null);
		
		
		
				allCorrect = true;
				Complet = true;
		
				for (var i = 0; i < lounArray.length; i++) {
		
					lounArray[i].removeEventListener("click", onloun);
		
					if (lounArray[i].currentFrame == 0 && lounArray[i].name.slice(5, 6) != "x") {
		
						Complet = false;
		
					}
					if (lounArray[i].currentFrame != 0 && lounArray[i].name.slice(5, 6) == "x") {
		
						lounArray[i].gotoAndStop(lounArray[i].currentFrame + 20);
		
						allCorrect = false;
					}
		
		
				}
		
				if (!Complet && allCorrect) {
		
					anycolorMc.correctbtn.gotoAndStop(2);
				} else if (allCorrect && Complet) {
		
					anycolorMc.correctbtn.gotoAndStop(1);
		
		
				}
			}
		
		
		
			anycolorMc.replay.addEventListener("click", rply);
			function rply(ev) {
		
				anycolorMc.correctbtn.addEventListener("click", correct);
				anycolorMc.correctbtn.gotoAndStop(0);
				setlisteners();
		
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].gotoAndStop(0);
		
				}
		
			}
		
			anycolorMc.addEventListener("removed", onAnyColorRemove);
			function onAnyColorRemove(ev) {
		
		
				removelisteners();
		
		
				anycolorMc.removeEventListener("removed", onAnyColorRemove);
		
			}
		
		
		
		}
		
		
		
		
		
		
		function sameColorManager(sameColorMc) {
		
		
			var allCorrect = true;
			var Complet = true;
		
			var lounArray = [];
			var forchatArray = [];
		
			var lawnCodeArray = [];
			var lawnIntArray = [];
		
			var currentloun = 0;
		
			setTimeout(function () {
		
				getLounAndFourchat();
		
		
				setlisteners();
		
		
			}, 0);
		
		
			function getLounAndFourchat() {
		
		
				var parent = sameColorMc.correctbtn.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
		
					if (keys[len].slice(1, 5) == ("LOUN")) {
		
						parent[keys[len]].name = keys[len];
		
						lounArray.push(parent[keys[len]]);
		
		
		
		
					} else if (keys[len].slice(0, 7) == ("forchat")) {
		
						parent[keys[len]].name = keys[len];
		
						forchatArray.push(parent[keys[len]]);
					}
		
		
				}
		
			}
		
		
		
			function setlisteners() {
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].addEventListener("click", onloun);
		
				}
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].addEventListener("click", onforchat);
		
				}
		
		
			}
		
			function removelisteners() {
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].removeEventListener("click", onloun);
		
				}
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].removeEventListener("click", onforchat);
		
				}
		
				sameColorMc.replay.removeEventListener("click", rply);
		
		
				sameColorMc.correctbtn.removeEventListener("click", correct);
		
			}
		
		
			setlisteners();
		
		
		
		
			function onloun(e) {
		
		
				if (e.nativeEvent instanceof MouseEvent) {
		
					if (e.currentTarget.currentFrame !== 0) {
						e.currentTarget.gotoAndStop(0);
					} else e.currentTarget.gotoAndStop(currentloun);
				}
		
		
			}
			function onforchat(e) {
		
		
		
				for (var u = 0; u < forchatArray.length; u++) {
		
		
					forchatArray[u].gotoAndStop(0);
		
				}
				if (e != null) {
		
					currentloun = parseInt(e.currentTarget.name.slice(7));
					e.currentTarget.gotoAndPlay(1);
		
				}
			}
		
		
		
		
			sameColorMc.correctbtn.addEventListener("click", correct);
		
			function correct(ev) {
		
				sameColorMc.correctbtn.removeEventListener("click", correct);
				onforchat(null);
		
		
				allCorrect = true;
				Complet = true;
		
				for (var i = 0; i < lounArray.length; i++) {
		
		
					lounArray[i].removeEventListener("click", onloun);
		
					var lawnCode = lounArray[i].name.slice(5, 6);
					var lawnInt = lounArray[i].currentFrame;
					var thisLawnCode = true;
		
					if (lawnCodeArray.indexOf(lawnCode) === -1) {
						lawnCodeArray.push(lawnCode);
		
		
						if (lounArray[i].currentFrame == 0 && lawnCode !== "x") {
							Complet = false;
		
							continue;
						}
		
		
		
		
		
						for (var j = 1 + i; j < lounArray.length; j++) {
		
		
							if (lounArray[j].name.slice(5, 6) == lawnCode) {
								if (lounArray[j].currentFrame == 0 && lawnCode != "x") {
		
									thisLawnCode = false;
									allCorrect = false;
									Complet = false;
									break;
								}
		
		
								if (lounArray[j].currentFrame !== lawnInt || lawnIntArray.indexOf(lawnInt) !== -1) {
		
		
									thisLawnCode = false;
									allCorrect = false;
		
		
		
									makeAsFalse(lawnCode);
									break;
		
		
								}
		
							}
		
						}
						if (thisLawnCode) {
							if (lawnInt != 0) {
								lawnIntArray.push(lawnInt);
							}
		
						}
					}
				}
				if (!Complet) {
		
					sameColorMc.correctbtn.gotoAndStop(2);
				}
				if (allCorrect && Complet) {
		
					sameColorMc.correctbtn.gotoAndStop(1);
		
		
		
				}
			}
		
		
		
			sameColorMc.replay.addEventListener("click", rply);
			function rply(ev) {
		
				sameColorMc.correctbtn.addEventListener("click", correct);
				sameColorMc.correctbtn.gotoAndStop(0);
		
				setlisteners();
		
				onforchat(null);
		
				for (var u1 = 0; u1 < lounArray.length; u1++) {
		
		
					lounArray[u1].gotoAndStop(0);
		
				}
		
				currentloun = 0;
				lawnIntArray.splice(0);
				lawnCodeArray.splice(0);
				allCorrect = true;
		
		
			}
		
		
			function makeAsFalse(wrongMC) {
		
				if (wrongMC === "x") {
		
					makeAsFalseForX();
		
					return;
				}
		
				for (var i = 0; i < lounArray.length; i++) {
					if (lounArray[i].name.slice(5, 6) === wrongMC) {
		
						lounArray[i].gotoAndStop(lounArray[i].currentFrame + 20);
					}
				}
		
		
			}
		
		
			function makeAsFalseForX() {
		
				for (var i = 0; i < lounArray.length; i++) {
					if (lounArray[i].name.slice(5, 6) === "x" && lounArray[i].currentFrame !== 0) {
						lounArray[i].gotoAndStop(lounArray[i].currentFrame + 20);
					}
				}
			}
		
			sameColorMc.addEventListener("removed", onColorRemove);
			function onColorRemove(ev) {
		
		
		
				removelisteners();
		
		
				sameColorMc.removeEventListener("removed", onColorRemove);
		
			}
		
		
		}
		
		
		that.active_input;
		function setChar(character) {
		
			if (!that.active_input) return;
		
			var st = that.active_input.value;
			that.active_input.value = st + character;
			that.active_input.focus();
		}
		that.setChar = setChar;
		
		function remove_Char() {
		
			if (!that.active_input) return;
		
			var st = that.active_input.value;
		
			var start = that.active_input.selectionStart;
			var distanc = start - 1;
		
			var selectionValue = st.slice(0, start - 1) + st.slice(start);
		
			if (start != that.active_input.selectionEnd) {
				selectionValue = st.slice(0, start) + st.slice(start + 1, that.active_input.selectionEnd);
				distanc = start;
			}
			that.active_input.value = selectionValue;
			that.active_input.focus();
		
			that.active_input.setSelectionRange(distanc, distanc);
		
		
		}
		that.remove_Char = remove_Char;
		
		
		function isFocus(ev) {
			that.active_input = ev.currentTarget;
		}
		
		function textManager(txtMc) {
		
			txtMc.isListener = false;
		
		
			var complet = true;
			var allTrue_txt = true;
			var txtArray = [];
		
			getTxt();
		
			setlisteners();
		
			initTextStyle();
		
		
		
			function getTxt() {
		
		
				var parent = txtMc.correctbtn.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
		
		
		
					if (keys[len].slice(1, 4) === ("TXT")) {
		
		
		
						document.getElementById(keys[len]).insName = keys[len];
		
		
		
						txtArray.push(document.getElementById(keys[len]));
		
		
					}
				}
		
		
			}
		
		
			function setlisteners() {
		
				if (!txtMc.isListener) {
		
					for (var y = 0; y < txtArray.length; y++) {
		
						txtArray[y].addEventListener("focus", isFocus);
					}
		
		
					txtMc.correctbtn.addEventListener("click", onTxtcorrect);
					txtMc.replay.addEventListener("click", txtreply);
		
		
		
		
					txtMc.isListener = true;
				}
		
		
			}
		
		
			function removeListeners() {
		
		
				txtMc.correctbtn.removeEventListener("click", onTxtcorrect);
				txtMc.replay.removeEventListener("click", txtreply);
		
				txtMc.isListener = false;
		
		
		
			}
		
		
			function initTextStyle() {
		
		
				for (var t = 0; t < txtArray.length; t++) {
		
					txtArray[t].style.color = '#000000';
					txtArray[t].style.fontSize = font_size;
					txtArray[t].style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		
		
				}
		
		
			}
		
		
			function onTxtcorrect() {
		
		
		
				txtMc.correctbtn.removeEventListener("click", onTxtcorrect);
		
				for (var u = 0; u < txtArray.length; u++) {
		
					var rr = txtArray[u].insName.slice(4).toLowerCase();
		
					rr = rr.replace(/__/g, "-");
		
					rr = rr.replace(/_a_/g, " ");
		
					rr = rr.replace(/bb/g, ",");
		
					rr = rr.replace(/cc/g, "<");
		
					rr = rr.replace(/dd/g, ">");
		
					rr = rr.replace(/pp/g, "+");
		
					rr = rr.replace(/_t_/g, "=");
		
					rr = rr.replace(/nn/g, "-");
		
					rr = rr.replace(/ff/g, "×");
		
					rr = rr.replace(/ss/g, "/");
		
					rr = rr.replace(/kk/g, ".");
		
					rr = rr.replace(/qq/g, "(");
		
					rr = rr.replace(/xx/g, ")");
		
					rr = rr.replace(/vv/g, "'");
		
		
					var correct_array = rr.split("ww");
		
		
					if (txtArray[u].value.toLowerCase() == '' && correct_array.indexOf('') < 0) {
						complet = false;
		
					}
		
					if (correct_array.indexOf(txtArray[u].value.toLowerCase()) < 0) {
		
						txtArray[u].style.color = '#ff0000';
						allTrue_txt = false;
		
					} else {
						txtArray[u].style.color = '#008000';
		
					}
				}
		
				if (!complet) {
		
					txtMc.correctbtn.gotoAndStop(2);
		
				}
				if (allTrue_txt && complet) {
		
		
					txtMc.correctbtn.gotoAndStop(1);
				}
		
			}
			function txtreply() {
		
		
				txtMc.correctbtn.addEventListener("click", onTxtcorrect);
				txtMc.correctbtn.gotoAndStop(0);
				allTrue_txt = true;
				complet = true;
		
				initTextStyle();
		
				for (var u = 0; u < txtArray.length; u++) {
		
					txtArray[u].value = "";
		
				}
			}
		
			txtMc.addEventListener("removed", onTxtRemove);
			function onTxtRemove(ev) {
		
		
		
				removeListeners();
		
		
		
				txtArray.splice(0);
				txtMc.removeEventListener("removed", onTxtRemove);
		
			}
		
		
		}
		
		
		
		function silManager(silMc) {
		
		
			var oldObject, pt, overObject, numOfLink = 0,
				strngOfLinkDown, strngCode1, strngCode2, RorL;
			var downOnAcceptedMc, isListener, lineToErase, currentUpMc, mmc, ismove;
		
			var allTrue = true;
			var complet = true;
			var linkArray = [];
			var TwomcArray = [];
			var mc1Array = [];
			var mc2Array = [];
			var that = silMc;
		
		
		
		
			setTimeout(function () {
		
				getLink();
		
		
				setlisteners();
		
		
			}, 0);
		
		
			that.shapeDraw = new createjs.Shape();
			that.shapeDraw0 = new createjs.Shape();
		
			that.shapeDraw.cache(0, 0, 1200, 950);
		
		
			function getLink() {
		
		
				var parent = silMc.correctbtn.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
		
					if (keys[len].slice(1, 6) == ("LINKT") || keys[len].slice(1, 6) == ("LINKL")) {
		
						numOfLink += Math.floor(keys[len].slice(6).length / 2);
		
		
					}
		
					if (keys[len].slice(1, 5) === ("LINK")) {
		
		
		
						parent[keys[len]].name = keys[len];
		
						linkArray.push(parent[keys[len]]);
					}
				}
		
		
			}
		
			function setlisteners() {
		
		
				if (!that.isListener) {
		
		
		
					for (var l = 0; l < linkArray.length; l++) {
		
						linkArray[l].addEventListener("mousedown", ondown);
		
		
		
					}
		
					that.addEventListener("pressup", onup);
		
		
					that.isListener = true;
				}
		
		
			}
		
			function removelisteners() {
		
		
				for (var l = 0; l < linkArray.length; l++) {
		
		
					linkArray[l].removeEventListener("mousedown", ondown);
		
		
		
				}
		
				that.removeEventListener("pressup", onup);
		
		
		
				that.isListener = false;
		
			}
		
		
		
			var sbr = new createjs.Container();
		
			sbr.x = 0;
			sbr.y = 0;
		
		
		
			sbr.mouseEnabled = false;
			that.addChildAt(sbr, 1);
		
		
			sbr.addChild(that.shapeDraw);
		
			sbr.addChild(that.shapeDraw0);
		
		
			function drawLine(oldObject, newObject, color) {
		
				var col = (typeof color === 'undefined') ? "#000000" : color;
		
				that.shapeDraw0.graphics.beginStroke(col)
		
				.setStrokeStyle(3, "round")
		
				.moveTo(oldObject.x + AddRorL(oldObject).x, oldObject.y + AddRorL(oldObject).y)
		
				.lineTo(newObject.x + AddRorL(newObject).x, newObject.y + AddRorL(newObject).y);
		
		
				stage.update();
		
			}
			function onpressmove_sil(evt) {
		
		
				ismove = true;
		
				pt = sbr.globalToLocal(evt.stageX, evt.stageY);
		
				that.shapeDraw.graphics.clear();
		
				that.shapeDraw.graphics.beginStroke("#000000")
		
				.setStrokeStyle(3, "round")
		
				.moveTo(mmc.x + AddRorL(mmc).x, mmc.y + AddRorL(mmc).y)
		
				.lineTo(pt.x, pt.y);
		
		
		
				that.shapeDraw.updateCache();
		
			}
		
			var currentHit_sil = null;
			function checkHit_sil(pt) {
		
				var rect = {
		
					x: pt.x,
					y: pt.y,
				}
		
		
				for (var u = 0; u < linkArray.length; u++) {
		
		
		
					var rect2 = linkArray[u];
		
					if ((Math.abs(rect.x - rect2.x) < rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect2.getTransformedBounds().height / 2)) {
		
		
		
						currentHit_sil = rect2;
						return true;
					}
				}
		
		
				return false;
			}
		
			function onup(ev) {
		
		
				that.removeEventListener("pressmove", onpressmove_sil);
		
				that.shapeDraw.graphics.clear();
				that.shapeDraw.updateCache();
		
		
				checkHit_sil(sbr.globalToLocal(ev.stageX, ev.stageY));
		
		
				if ((currentHit_sil) != null && downOnAcceptedMc && ismove) {
		
					ismove = false;
					overObject = currentHit_sil;
					mmc = overObject;
		
		
					var currentUpMc = mmc.name;
		
		
					var strngOfLinkUp = currentUpMc.slice(1, 6);
					strngCode2 = currentUpMc.slice(6, 8);
		
					TwomcArray[1] = mmc;
		
		
					if (strngOfLinkDown == strngOfLinkUp) {
		
						return;
					}
		
		
		
					if (strngCode1 == strngCode2) {
		
		
					}
		
					verifyAndStoreMc();
		
				}
		
				downOnAcceptedMc = false;
				currentHit_sil = null;
			}
		
		
		
		
		
			function ondown(ev) {
		
		
				downOnAcceptedMc = true;
		
				mmc = ev.currentTarget;
		
				that.addEventListener("pressmove", onpressmove_sil);
		
				currentDownMc = mmc.name;
		
		
				strngOfLinkDown = currentDownMc.slice(1, 6);
				strngCode1 = currentDownMc.slice(6, 8);
		
		
		
				RorL = currentDownMc.slice(5, 6);
		
		
		
				TwomcArray[0] = mmc;
		
		
		
		
			}
		
		
		
			function verifyAndStoreMc() {
		
		
		
				if (areLinked()) {
					eraseLine();
					return;
				}
		
		
		
		
				drawLine(TwomcArray[1], TwomcArray[0]);
		
				var s1 = TwomcArray[0].name.slice(1, 6);
				var s2 = TwomcArray[1].name.slice(1, 6);
		
				if (s1 == "LINKL" || s1 == "LINKT") {
					mc1Array.push(TwomcArray[0]);
				} else {
					mc2Array.push(TwomcArray[0]);
		
				}
		
				if (s2 == "LINKL" || s2 == "LINKT") {
					mc1Array.push(TwomcArray[1]);
				} else {
					mc2Array.push(TwomcArray[1]);
		
				}
			}
		
			function areLinked() {
		
				for (var d = 0; d < mc1Array.length; d++) {
		
					if (mc1Array[d].name == TwomcArray[1].name && TwomcArray[0].name == mc2Array[d].name || mc1Array[d].name == TwomcArray[0].name && TwomcArray[1].name == mc2Array[d].name) {
						lineToErase = d;
						return true;
					}
				}
				return false;
			}
		
		
			function eraseLine() {
		
		
				that.shapeDraw0.graphics.clear();
		
		
				for (var i = 0; i < mc1Array.length; i++) {
					if (lineToErase != i) {
		
						drawLine(mc1Array[i], mc2Array[i]);
					}
				}
				mc1Array.splice(lineToErase, 1);
				mc2Array.splice(lineToErase, 1);
		
			}
		
			silMc.correctbtn.addEventListener("click", oncorrect.bind(this));
		
		
			function oncorrect(ev) {
		
		
				silMc.correctbtn.removeEventListener("click", oncorrect);
		
				removelisteners();
		
		
				for (var i = 0; i < mc1Array.length; i++) {
		
					if (!(mc1Array[i].name.slice(6, 8) == mc2Array[i].name.slice(6, 8) || mc1Array[i].name.slice(8, 10) == mc2Array[i].name.slice(6, 8))) {
		
						drawLine(mc1Array[i], mc2Array[i], "#ff0000");
						allTrue = false;
		
					} else {
		
						drawLine(mc1Array[i], mc2Array[i], "#008000");
		
					}
				}
		
		
				if (mc1Array.length < numOfLink) {
		
					complet = false;
		
				}
		
				if (!complet) {
		
					silMc.correctbtn.gotoAndStop(2);
				}
				if (mc1Array.length == numOfLink && allTrue) {
		
		
					silMc.correctbtn.gotoAndStop(1);
		
				}
		
		
			}
		
		
			silMc.replay.addEventListener("click", rply.bind(this));
		
			function rply(ev) {
		
				that.shapeDraw.graphics.clear();
				that.shapeDraw0.graphics.clear();
		
				silMc.correctbtn.gotoAndStop(0);
		
		
				setlisteners();
		
		
				currentDownMc = null;
				mmc = null;
				allTrue = true;
				complet = true;
				mc1Array.splice(0);
				mc2Array.splice(0);
		
				TwomcArray.splice(0);
		
			}
			function AddRorL(MCC) {
		
				var dist = {};
		
				var ts = MCC.name.slice(5, 6);
		
				if (ts === "L") {
		
					dist.x = MCC.getTransformedBounds().width / 2;
					dist.y = 0;
		
				} else if (ts === "R") {
		
					dist.x = 0 - MCC.getTransformedBounds().width / 2;
					dist.y = 0;
				}
		
		
				if (ts === "T") {
		
					dist.x = 0;
					dist.y = MCC.getTransformedBounds().height / 2;
		
				} else if (ts === "B") {
		
					dist.x = 0;
					dist.y = 0 - MCC.getTransformedBounds().height / 2;
				}
		
				return dist;
			}
		
		
			that.addEventListener("removed", onRemove);
		
			function onRemove(ev) {
		
		
				that.correctbtn.removeEventListener("click", oncorrect);
				that.replay.removeEventListener("click", rply);
				removelisteners();
				that.removeEventListener("removed", onRemove);
			}
		
		
		}
		
		
		
		
		
		
		
		
		function entourManager(entourMc) {
		
			var allCorrect = true;
			var complet = true;
		
			var KlkArray = [];
		
		
			setTimeout(function () {
		
				getKLK();
		
		
				setlisteners();
		
		
			}, 0);
		
		
		
			function getKLK() {
		
		
				var parent = entourMc.correctbtn.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
					if (keys[len].slice(1, 4) == ("KLK")) {
		
						parent[keys[len]].name = keys[len];
		
						KlkArray.push(parent[keys[len]]);
		
		
		
		
					}
		
		
				}
		
			}
		
		
		
			function setlisteners() {
		
				for (var u1 = 0; u1 < KlkArray.length; u1++) {
		
					console.log('counter' ,u1)
		
					KlkArray[u1].addEventListener("click", onKLK);
		
				}
		
		
			}
		
			function removelisteners() {
		
				for (var u1 = 0; u1 < KlkArray.length; u1++) {
		
		
					KlkArray[u1].removeEventListener("click", onKLK);
		
				}
		
		
		
		
		
		
			}
		
		
			function onKLK(e) {
		
				
				if (e.nativeEvent instanceof MouseEvent) {
					
					e.currentTarget.gotoAndStop(e.currentTarget.currentFrame == 0 ? 1 : 0);
				}
		
			}
		
		
		
		
			entourMc.correctbtn.addEventListener("click", correct);
		
			function correct(ev) {
		
				entourMc.correctbtn.removeEventListener("click", correct);
		
		
		
				var true_mc = 0;
				var non_clicked = 0;
				complet = true;
				allCorrect = true;
		
		
				for (var c = 0; c < KlkArray.length; c++) {
					if (KlkArray[c].name.slice(4, 5) == 'T') {
		
						true_mc += 1;
					}
					if (KlkArray[c].currentFrame == 0) {
		
						non_clicked += 1;
					}
				}
		
				var mc_clicked = KlkArray.length - non_clicked;
				complet = (mc_clicked - true_mc >= 0);
		
		
				for (var i = 0; i < KlkArray.length; i++) {
		
					KlkArray[i].removeEventListener("click", onKLK);
		
					if (KlkArray[i].name.slice(4, 5) != 'T' && KlkArray[i].currentFrame == 1 || KlkArray[i].name.slice(4, 5) != 'F' && KlkArray[i].currentFrame == 0) {
		
		
						allCorrect = false;
		
						if (KlkArray[i].currentFrame == 0) continue;
		
						KlkArray[i].gotoAndStop(3);
		
					} else if (KlkArray[i].name.slice(4, 5) == 'T' && KlkArray[i].currentFrame == 1) {
		
						KlkArray[i].gotoAndStop(2);
					}
		
				}
		
				if (!complet) {
		
					entourMc.correctbtn.gotoAndStop(2);
				}
				if (allCorrect && complet) {
		
					entourMc.correctbtn.gotoAndStop(1);
		
		
		
				}
			}
		
		
		
			entourMc.replay.addEventListener("click", rply);
			function rply(ev) {
		
				entourMc.correctbtn.addEventListener("click", correct);
				entourMc.correctbtn.gotoAndStop(0);
				setlisteners();
		
		
				for (var u1 = 0; u1 < KlkArray.length; u1++) {
		
		
					KlkArray[u1].gotoAndStop(0);
		
				}
		
			}
		
			entourMc.addEventListener("removed", onEntourRemove);
			function onEntourRemove(ev) {
		
		
		
				entourMc.correctbtn.removeEventListener("click", correct);
				entourMc.replay.removeEventListener("click", rply);
				removelisteners();
				entourMc.removeEventListener("removed", onEntourRemove);
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		function multi_dnd_Manager(multi_dndMc) {
		
			setTimeout(function () {
		
				getdnd();
		
		
			}, 0);
		
			function getdnd() {
		
		
				var parent = multi_dndMc.dnd1.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
		
				while (--len) {
		
		
					if (keys[len].slice(0, 3) == ("dnd")) {
		
						dnd_Manager(parent[keys[len]]);
					}
				}
		
			}
		
		
		}
		
		
		
		
		
		
		
				
				function dnd_Manager(dndMc) {
				
					console.log('dndMc', dndMc)
				
					var draggedArray = [];
				
					var placeOfdraged = {};
					var currentHit;
					var currentHitString;
				
					var dropArray = [];
				
				
					var k = [];
				
					setTimeout(function () {
				
						getDrag();
				
				
						setlisteners();
				
				
					}, 0);
				
				
				
					function getDrag() {
				
						console.log('dnd', dndMc.correctbtn)
						var parent = dndMc.correctbtn.parent;
						var keys = Object.keys(parent);
						var len = keys.length;
				
						while (--len) {
				
				
							if (keys[len].slice(1, 4) == ("dnd")) {
				
				
				
								parent[keys[len]].name = keys[len];
				
								parent[keys[len]].regX = parent[keys[len]].width / 2;
								parent[keys[len]].regY = parent[keys[len]].height / 2;
				
								parent[keys[len]].startx = parent[keys[len]].x;
								parent[keys[len]].starty = parent[keys[len]].y;
				
								draggedArray.push(parent[keys[len]]);
				
				
								placeOfdraged[parent[keys[len]].name] = 'init';
				
							} else if (keys[len].slice(1, 4) == ("trg")) {
				
				
								parent[keys[len]].name = keys[len];
								parent[keys[len]].regX = parent[keys[len]].width / 2;
								parent[keys[len]].regY = parent[keys[len]].height / 2;
				
								dropArray.push(parent[keys[len]]);
							}
				
							k = Object.keys(placeOfdraged);
						}
				
					}
				
				
				
					function setlisteners() {
				
						for (var u1 = 0; u1 < draggedArray.length; u1++) {
				
				
				
							draggedArray[u1].addEventListener("mousedown", onmousedown);
							draggedArray[u1].addEventListener("pressup", onpressup);
							draggedArray[u1].addEventListener("pressmove", onpressmove);
				
						}
				
				
					}
				
				
				
					function removelisteners() {
				
						for (var u1 = 0; u1 < draggedArray.length; u1++) {
				
				
				
							draggedArray[u1].removeEventListener("mousedown", onmousedown);
							draggedArray[u1].removeEventListener("pressup", onpressup);
							draggedArray[u1].removeEventListener("pressmove", onpressmove);
				
						}
				
				
					}
				
				
					dndMc.correctbtn.addEventListener("click", oncorrect);
					function oncorrect(evt) {
				
						dndMc.correctbtn.removeEventListener("click", oncorrect);
				
						correct();
				
					}
				
				
					function init_placeOfdraged() {
				
				
						for (var j = 0; j < k.length; j++) {
				
							placeOfdraged[k[j]] = 'init';
						}
					}
				
					dndMc.replay.addEventListener("click", rply);
				
					function rply(ev) {
				
						setlisteners();
				
						for (var u1 = 0; u1 < draggedArray.length; u1++) {
				
							draggedArray[u1].gotoAndStop(0);
							draggedArray[u1].x = draggedArray[u1].startx;
							draggedArray[u1].y = draggedArray[u1].starty;
						}
				
						for (var g = 0; g < dropArray.length; g++) {
				
							dropArray[g].gotoAndStop(0);
				
						}
				
						init_placeOfdraged();
				
						dndMc.correctbtn.gotoAndStop(0);
						dndMc.correctbtn.addEventListener("click", oncorrect);
					}
				
				
				
				
				
					function onmousedown(e) {
				
				
				
						e.nativeEvent.preventDefault();
				
				
					}
				
				
				
					function onpressmove(evt) {
				
				
						evt.nativeEvent.preventDefault();
				
				
				
						evt.currentTarget.parent.setChildIndex(evt.currentTarget, evt.currentTarget.parent.numChildren - 1);
				
						var pt = dndMc.globalToLocal(evt.stageX, evt.stageY);
				
						evt.currentTarget.x = pt.x;
						evt.currentTarget.y = pt.y;
				
						stage.update();
				
				
					}
				
				
					function onpressup(evt) {
				
						var isHit = false;
				
						isHit = checkHit(evt.currentTarget);
				
						if (isHit) {
				
							evt.currentTarget.x = currentHit.x;
							evt.currentTarget.y = currentHit.y;
				
				
							placeOfdraged[evt.currentTarget.name] = currentHitString;
							currentHit.gotoAndStop(2);
				
				
				
						} else {
				
							returntoFirstplace(evt.currentTarget);
				
						}
				
					}
				
				
				
					function correct() {
				
						var iscompletd = true;
						var allCorrect = true;
				
						console.log(' Object.keys', k);
				
						for (var i = 0; i < k.length; i++) {
				
							console.log('placeOfdraged[ k[i] ]', k[i]);
				
							if (placeOfdraged[k[i]] === 'init') {
				
								iscompletd = false;
							}
				
							if (k[i].slice(4) !== placeOfdraged[k[i]].slice(4)) {
				
								allCorrect = false;
								for (var j = 0; j < dropArray.length; j++) {
									if (dropArray[j].name === placeOfdraged[k[i]]) {
										dropArray[j].gotoAndStop(1);
										dropArray[j].parent.setChildIndex(dropArray[j], dropArray[j].parent.numChildren - 1);
									}
								}
							}
				
						}
						if (iscompletd && allCorrect) {
				
				
							dndMc.correctbtn.gotoAndStop(1);
						} else if (!iscompletd) {
							dndMc.correctbtn.gotoAndStop(2);
				
						}
				
					}
					function checkHit(obj) {
				
						var rect = {
				
							x: obj.x,
							y: obj.y,
							width: obj.getBounds().width,
							height: obj.getBounds().height
						}
				
				
						for (var u = 0; u < dropArray.length; u++) {
				
				
				
							var rect2 = dropArray[u];
				
							if (Math.abs(rect.x - rect2.x) < (rect.width / 2 + rect2.getBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect.height / 2 + rect2.getBounds().height / 2)) {
				
								if (Object.values(placeOfdraged).includes(rect2.name)) {
									console.log('used target', placeOfdraged);
									return false;
								}
								currentHitString = rect2.name;
				
								currentHit = rect2;
								return true;
							}
						}
				
				
						return false;
					}
				
				
					function returntoFirstplace(mc) {
				
				
				
						mc.x = mc.startx;
						mc.y = mc.starty;
				
						placeOfdraged[mc.name] = 'init';
				
					}
				
					dndMc.addEventListener("removed", onDNDRemove);
					function onDNDRemove(ev) {
				
				
				
						dndMc.correctbtn.removeEventListener("click", oncorrect);
						dndMc.replay.removeEventListener("click", rply);
						removelisteners();
						dndMc.removeEventListener("removed", onDNDRemove);
					}
				
				}
				
				
				
				
				
		
		
		
		
		
		cont.addVideo = addVideo;
		cont.scr = "";
		
		function Delete() {
		
			parent.style.display = 'none';
			grand_father.style.display = 'none';
		
			vid.pause();
		}
		
		
		function addVideo(video_name) {
		
		
			source.setAttribute('src', 'video/' + video_name + '.mp4');
		
			vid.load();
		
			vid.play();
		
		
			parent.style.display = 'block';
			grand_father.style.display = 'block';
		
		
		
		
		}
		
		
		
		
		function dragElement(elmnt) {
			var pos1 = 0,
				pos2 = 0,
				pos3 = 0,
				pos4 = 0;
			if (document.getElementById(elmnt.id + "header")) {
		
				document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
			} else {
		
				elmnt.onmousedown = dragMouseDown;
			}
		
			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
		
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
		
				document.onmousemove = elementDrag;
			}
		
			function elementDrag(e) {
				e = e || window.event;
				e.preventDefault();
		
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
		
				elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
				elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
			}
		
			function closeDragElement(e) {
		
				document.onmouseup = null;
				document.onmousemove = null;
			}
		}
		
		
		
		
		
		var oldX, oldY, pts;
		
		var hjbArrays = [];
		var store_hjb_shapeArray = [];
		var isMove = false;
		var sbr;
		var store_sbr = {};
		var sbr_tmrn;
		
		that.isListenerAndVar;
		
		
		that.tool.isErase = false;
		that.tool.is_feutre = false;
		that.tool.color = "#000000";
		that.tool.f_color = "#008000";
		that.tool.current_f_color = 1;
		that.tool.currentcolor = 1;
		that.tool.currentsomk = 2;
		that.tool.somk = 3;
		
		
		
		that.tool.drawSquare;
		that.tool.drawCircle;
		
		
		function toTools(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
				if (is_tool_clicked) {
		
					end_tool();
		
				} else {
		
					that.blockChafaf();
					ev.currentTarget.gotoAndPlay(1);
					that.tool.gotoAndPlay(1);
		
					is_tool_clicked = true;
					startTool();
				}
			}
		
		}
		
		
		
		function createNew_sbr(type = 'ktb') {
		
		
			var drect = new createjs.Shape();
			drect.name = 'drect';
		
			drect.mouseEnabled = false;
		
		
			var dcir = new createjs.Shape();
			dcir.name = 'dcir';
		
			dcir.mouseEnabled = false;
		
		
			var shapeDraw = new createjs.Shape();
			shapeDraw.name = 'shapeDraw';
		
			shape_draw_x = type === 'ktb' ? 0 : 60;
			shape_draw_y = type === 'ktb' ? 0 : 30;
		
			shape_draw_w = type === 'ktb' ? 700 : 900;
			shape_draw_h = type === 'ktb' ? 500 : 500;
		
			shapeDraw.cache(shape_draw_x, shape_draw_y, shape_draw_w, shape_draw_h);
		
			var f_shapeDraw = new createjs.Shape();
			f_shapeDraw.name = 'f_shapeDraw';
		
			f_shapeDraw.cache(shape_draw_x, shape_draw_y, shape_draw_w, shape_draw_h);
		
		
		
		
			var n_sbr = new createjs.Container();
			n_sbr.name = 'sbr';
			n_sbr.addChild(drect);
		
		
			n_sbr.addChild(dcir);
		
		
			n_sbr.addChild(shapeDraw);
			n_sbr.addChild(f_shapeDraw);
			f_shapeDraw.alpha = 0.4;
		
			var rect = new createjs.Shape();
			rect.graphics.beginFill("#f00");
			rect.graphics.drawRect(shape_draw_x, shape_draw_y, firstwidth == 0 ? shape_draw_w : shape_draw_w,
				firstheight == 0 ? shape_draw_h : shape_draw_h);
			rect.graphics.endFill();
		
			n_sbr.hitArea = rect;
		
			return n_sbr;
		}
		
		
		function add_sbr_listener(new_sbr) {
		
			new_sbr.addEventListener("mousedown", sbr_on_mousedown);
			new_sbr.addEventListener("pressup", sbr_on_pressup);
			new_sbr.addEventListener("mouseout", sbr_on_mouseout);
		
		}
		
		
		
		
		
		
		
		
		
		
		(function setlisteners() {
		
			if (!that.isListenerAndVar) {
		
		
				oldX = 0, oldY = 0, pt = 0, cursor = 0;
		
				that.tool.qalam.addEventListener("click", kom);
				that.tool.feutre.addEventListener("click", f_kom);
				that.tool.mimsaha.addEventListener("click", kom1);
				that.tool.somkmc.addEventListener("click", kom2);
		
				that.tool.square.addEventListener("click", toSquare);
				that.tool.circle.addEventListener("click", toCircle);
		
		
		
				that.tool.qalam.addEventListener("mouseover", tool_overBtn);
				that.tool.qalam.addEventListener("rollout", tool_outBtn);
		
				that.tool.feutre.addEventListener("mouseover", tool_overBtn);
				that.tool.feutre.addEventListener("rollout", tool_outBtn);
		
		
		
				that.tool.mimsaha.addEventListener("mouseover", tool_overBtn);
				that.tool.mimsaha.addEventListener("rollout", tool_outBtn);
		
		
		
				that.tool.somkmc.addEventListener("mouseover", tool_overBtn);
				that.tool.somkmc.addEventListener("rollout", tool_outBtn);
		
				that.tool.square.addEventListener("mouseover", tool_overBtn);
				that.tool.square.addEventListener("rollout", tool_outBtn);
		
				that.tool.circle.addEventListener("mouseover", tool_overBtn);
				that.tool.circle.addEventListener("rollout", tool_outBtn);
		
		
				that.isListenerAndVar = true;
		
		
			}
		
		
		
		
		
		
		})();
		
		function tool_overBtn(ev) {
			ev.currentTarget.bkg.alpha = ev.currentTarget.bkg.alpha == 1 ? 1 : 0.2;
		}
		function tool_outBtn(ev) {
			ev.currentTarget.bkg.alpha = ev.currentTarget.bkg.alpha == 1 ? 1 : 0.6;
		}
		
		
		function startTool() {
		
			reset_tool_window();
		
			that.tool.circle.bkg.alpha = 0.6;
			that.tool.square.bkg.alpha = 0.6;
			that.tool.feutre.bkg.alpha = 0.6;
			that.tool.qalam.bkg.alpha = 1;
			that.tool.mimsaha.bkg.alpha = 0.6;
			that.tool.somkmc.bkg.alpha = 0.6;
		
			if (that.getCont() === cont) {
		
				add_sbr_listener(sbr);
			} else {
		
				contmrn.addChild(sbr_tmrn);
				add_sbr_listener(sbr_tmrn);
		
		
		
			}
		
		
		
			cont.stopDrag();
		}
		
		function makeCursor(px, py) {
		
		
			if (!sbr.contains(cursor)) {
		
				cursor = new createjs.Shape();
				cursor.graphics.beginFill("#ffffff");
				cursor.graphics.drawCircle(0, 0, that.tool.somk * 2);
				cursor.cursor = "pointer";
		
		
				sbr.addChild(cursor);
			}
		
		
		
			cursor.x = px;
			cursor.y = py;
		
		
		
		}
		
		
		
		function drawSq(evt) {
		
			var sbr = evt.currentTarget;
			pt = sbr.globalToLocal(evt.stageX, evt.stageY);
		
		
			if (Math.abs(oldX - pt.x) > 6 || Math.abs(oldY - pt.y) > 6) {
		
				isMove = true;
		
			}
		
			sbr.getChildByName('drect').graphics.clear();
		
		
			sbr.getChildByName('drect').graphics.beginFill("#525252");
			sbr.getChildByName('drect').graphics.drawRect(oldX, oldY, pt.x - oldX, pt.y - oldY);
			sbr.getChildByName('drect').graphics.endFill();
		
			stage.update();
		
		}
		function drawCi(evt) {
		
			var sbr = evt.currentTarget;
			pt = sbr.globalToLocal(evt.stageX, evt.stageY);
		
			if (Math.abs(oldX - pt.x) > 6 || Math.abs(oldY - pt.y) > 6) {
		
				isMove = true;
		
			}
		
			sbr.getChildByName('dcir').graphics.clear();
		
		
			sbr.getChildByName('dcir').graphics.beginFill("#525252");
			sbr.getChildByName('dcir').graphics.drawCircle(oldX, oldY, Math.max(Math.abs(pt.x - oldX), Math.abs(pt.y - oldY)));
			sbr.getChildByName('dcir').graphics.endFill();
		
			stage.update();
		
		}
		
		function sbr_onpressmove(evt) {
		
		
			var sbr = evt.currentTarget;
			if (that.tool.drawSquare) {
		
				drawSq(evt);
				return;
			}
		
		
			if (that.tool.drawCircle) {
		
				drawCi(evt);
				return;
			}
		
			isMove = true;
		
			pt = sbr.globalToLocal(evt.stageX, evt.stageY);
		
			if (oldX) {
		
		
				if (that.tool.isErase) {
					sbr.getChildByName('f_shapeDraw').graphics.beginStroke(that.tool.f_color)
		
					.setStrokeStyle(that.tool.somk * 3
		
						, "round")
		
					.moveTo(oldX, oldY)
		
					.lineTo(pt.x, pt.y);
		
					sbr.getChildByName('f_shapeDraw').updateCache("destination-out");
		
					sbr.getChildByName('f_shapeDraw').graphics.clear();
		
		
					sbr.getChildByName('shapeDraw').graphics.beginStroke(that.tool.color)
		
					.setStrokeStyle(that.tool.isErase ? that.tool.somk * 3 : that.tool.somk
		
						, "round")
		
					.moveTo(oldX, oldY)
		
					.lineTo(pt.x, pt.y);
		
					sbr.getChildByName('shapeDraw').updateCache("destination-out");
		
					sbr.getChildByName('shapeDraw').graphics.clear();
				} else {
		
					if (that.tool.is_feutre) {
						sbr.getChildByName('f_shapeDraw').graphics.beginStroke(that.tool.f_color)
		
						.setStrokeStyle(that.tool.somk * 3
		
							, "round")
		
						.moveTo(oldX, oldY)
		
						.lineTo(pt.x, pt.y);
		
						sbr.getChildByName('f_shapeDraw').updateCache("source-over");
		
						sbr.getChildByName('f_shapeDraw').graphics.clear();
					} else {
						sbr.getChildByName('shapeDraw').graphics.beginStroke(that.tool.color)
		
						.setStrokeStyle(that.tool.isErase ? that.tool.somk * 3 : that.tool.somk
		
							, "round")
		
						.moveTo(oldX, oldY)
		
						.lineTo(pt.x, pt.y);
		
						sbr.getChildByName('shapeDraw').updateCache("source-over");
		
						sbr.getChildByName('shapeDraw').graphics.clear();
					}
		
				}
		
			}
		
		
			if (that.tool.isErase) {
		
				makeCursor(pt.x, pt.y);
		
			}
		
			oldX = pt.x;
		
			oldY = pt.y;
		
			//stage.update(); is not necessary ,ticker is sifficient
		
		}
		
		function sbr_on_mouseout(evt) {
			var sbr = evt.currentTarget;
		
			isMove = false;
		
			sbr.removeEventListener("pressmove", sbr_onpressmove);
		
			sbr.removeChild(cursor);
		}
		
		
		cont.on("click", function (evt) {
		
		
			if (hjbArrays.length == 0 || isMove) return;
			var pt = that.getCont().globalToLocal(evt.stageX, evt.stageY);
			var ol = that.getCont().localToLocal(pt.x, pt.y, that.getCont());
		
		
		
			for (var r = 0; r < hjbArrays.length; r++) {
		
		
				if (Math.abs(hjbArrays[r].x - ol.x) < 10 && Math.abs(hjbArrays[r].y - ol.y) < 10) {
		
		
					that.removeHjb(hjbArrays.length - 1 - r);
		
					hjbArrays.splice(r, 1);
				}
			}
		});
		
		
		
		
		
		
		function sbr_on_pressup(evt) {
		
			var sbr = evt.currentTarget;
			isMove = false;
		
			sbr.removeEventListener("pressmove", sbr_onpressmove);
		
			sbr.removeChild(cursor);
			var pt = sbr.globalToLocal(evt.stageX, evt.stageY);
			var ptcir0 = sbr.localToLocal(pt.x, pt.y, that.getCont());
			var ol = sbr.localToLocal(oldX, oldY, that.getCont());
		
			if (that.tool.drawSquare) {
		
		
		
		
				sbr.getChildByName('drect').graphics.clear();
		
				var coor = {};
				coor.typeofShape = "square";
				coor.width = ptcir0.x - ol.x;
				coor.height = ptcir0.y - ol.y;
		
				coor.x = ol.x;
				coor.y = ol.y;
		
				if (Math.abs(coor.width) > 15) {
		
					addShape(coor);
		
				}
		
			}
		
		
		
			if (that.tool.drawCircle) {
		
				sbr.getChildByName('dcir').graphics.clear();
		
		
				var coor = {};
				coor.typeofShape = "circle";
				coor.x = ol.x;
				coor.y = ol.y;
				coor.width = Math.abs(ptcir0.x - ol.x);
				coor.height = Math.abs(ptcir0.y - ol.y);
		
				if (Math.abs(coor.width) > 15 || Math.abs(coor.height) > 15) {
		
		
					addShape(coor);
		
				}
		
			}
		
		
		}
		
		
		function addShape(shape) {
		
			that.addShapeToKtb(shape);
		
		
		
		}
		
		
		function sbr_on_mousedown(evt) {
		
			var sbr = evt.currentTarget;
			evt.nativeEvent.preventDefault();
		
		
		
			sbr.addEventListener("pressmove", sbr_onpressmove);
		
			reset_tool_window();
		
			pt = sbr.globalToLocal(evt.stageX, evt.stageY);
		
			oldX = pt.x;
		
			oldY = pt.y;
		
		
			if (!that.tool.drawCircle && !that.tool.drawSquare && !that.tool.is_feutre) {
		
				sbr.getChildByName('shapeDraw').graphics.beginStroke(that.tool.color)
		
				.setStrokeStyle(that.tool.somk, "round")
		
				.moveTo(oldX, oldY)
		
				.lineTo(oldX + 1, oldY + 1);
		
				sbr.getChildByName('shapeDraw').updateCache(that.tool.isErase ? "destination-out" : "source-over");
		
				sbr.getChildByName('shapeDraw').graphics.clear();
		
			} else if (!that.tool.drawCircle && !that.tool.drawSquare && that.tool.is_feutre) {
		
				sbr.getChildByName('f_shapeDraw').graphics.beginStroke(that.tool.f_color)
		
				.setStrokeStyle(that.tool.somk * 3, "round")
		
				.moveTo(oldX, oldY)
		
				.lineTo(oldX + 1, oldY + 1);
		
				sbr.getChildByName('f_shapeDraw').updateCache(that.tool.isErase ? "destination-out" : "source-over");
		
				sbr.getChildByName('f_shapeDraw').graphics.clear();
			}
		
		
			stage.update();
		}
		
		function reset_tool_window() {
			that.tool.qalam.reset();
			that.tool.feutre.reset();
		
		
			that.tool.somkmc.reset();
			that.tool.mimsaha.reset();
		
		
		
		}
		
		
		function f_kom(eve) {
		
		
			if (eve.nativeEvent instanceof MouseEvent) {
		
		
				that.tool.is_feutre = true;
				that.tool.isErase = false;
		
				that.tool.feutre.bkg.alpha = 1;
				that.tool.qalam.bkg.alpha = 0.6;
				that.tool.mimsaha.bkg.alpha = 0.6;
				that.tool.circle.bkg.alpha = 0.6;
				that.tool.square.bkg.alpha = 0.6;
		
				that.tool.qalam.gotoAndStop(that.tool.currentcolor);
				that.tool.mimsaha.gotoAndStop(1);
				that.tool.somkmc.gotoAndStop(that.tool.currentsomk);
		
				that.tool.drawCircle = false;
				that.tool.drawSquare = false;
		
		
			}
		}
		function kom(eve) {
		
		
			if (eve !== null && eve.nativeEvent instanceof MouseEvent) {
		
		
				that.tool.is_feutre = false;
				that.tool.isErase = false;
		
				that.tool.feutre.bkg.alpha = 0.6;
				that.tool.qalam.bkg.alpha = 1;
				that.tool.mimsaha.bkg.alpha = 0.6;
				that.tool.circle.bkg.alpha = 0.6;
				that.tool.square.bkg.alpha = 0.6;
		
				that.tool.feutre.gotoAndStop(that.tool.current_f_color);
				that.tool.mimsaha.gotoAndStop(1);
				that.tool.somkmc.gotoAndStop(that.tool.currentsomk);
		
				that.tool.drawCircle = false;
				that.tool.drawSquare = false;
			}
		
		}
		
		that.kom = kom;
		function kom1(eve) {
		
			if (eve.nativeEvent instanceof MouseEvent) {
		
		
				that.tool.isErase = true;
		
				that.tool.drawCircle = false;
				that.tool.drawSquare = false;
		
				that.tool.feutre.bkg.alpha = 0.6;
				eve.currentTarget.bkg.alpha = 1;
				that.tool.qalam.bkg.alpha = 0.6;
				that.tool.circle.bkg.alpha = 0.6;
				that.tool.square.bkg.alpha = 0.6;
		
				that.tool.feutre.gotoAndStop(that.tool.current_f_color);
				that.tool.qalam.gotoAndStop(that.tool.currentcolor);
				that.tool.somkmc.gotoAndStop(that.tool.currentsomk);
		
		
			}
		}
		
		
		function kom2(eve) {
		
			if (eve.nativeEvent instanceof MouseEvent) {
		
		
		
		
		
				that.tool.feutre.gotoAndStop(that.tool.current_f_color);
				that.tool.qalam.gotoAndStop(that.tool.currentcolor);
				that.tool.mimsaha.gotoAndStop(that.tool.mimsaha.currentFrame < 3 ? that.tool.mimsaha.currentFrame : 1);
		
		
			}
		}
		function toSquare(eve) {
		
			if (eve.nativeEvent instanceof MouseEvent) {
		
		
				that.tool.feutre.bkg.alpha = 0.6;
				eve.currentTarget.bkg.alpha = 1;
				that.tool.qalam.bkg.alpha = 0.6;
				that.tool.mimsaha.bkg.alpha = 0.6;
				that.tool.circle.bkg.alpha = 0.6;
		
		
		
				that.tool.feutre.gotoAndStop(that.tool.current_f_color);
				that.tool.qalam.gotoAndStop(that.tool.currentcolor);
				that.tool.mimsaha.gotoAndStop(1);
				that.tool.somkmc.gotoAndStop(that.tool.currentsomk);
		
				that.tool.drawSquare = !that.tool.drawSquare;
		
		
				that.tool.drawCircle = false;
		
		
			}
		}
		function toCircle(eve) {
		
			if (eve.nativeEvent instanceof MouseEvent) {
		
				that.tool.feutre.bkg.alpha = 0.6;
				eve.currentTarget.bkg.alpha = 1;
				that.tool.qalam.bkg.alpha = 0.6;
				that.tool.mimsaha.bkg.alpha = 0.6;
				that.tool.square.bkg.alpha = 0.6;
		
				that.tool.feutre.gotoAndStop(that.tool.current_f_color);
				that.tool.qalam.gotoAndStop(that.tool.currentcolor);
				that.tool.mimsaha.gotoAndStop(1);
				that.tool.somkmc.gotoAndStop(that.tool.currentsomk);
		
				that.tool.drawCircle = !that.tool.drawCircle;
		
				that.tool.drawSquare = false;
		
		
			}
		}
		
		function end_tool() {
		
			is_tool_clicked = false;
		
			cont.startDrag();
		
		
		
		
		
		
		
			that.tool.mimsaha.gotoAndStop(0);
			that.tool.somkmc.gotoAndStop(that.tool.currentsomk);
			that.tool.qalam.gotoAndStop(that.tool.currentcolor);
		
		
			that.tool.is_feutre = false;
			that.tool.isErase = false;
			that.tool.drawCircle = false;
			that.tool.drawSquare = false;
		
		
			sbr.removeAllEventListeners();
			if (tmrnAdded) sbr_tmrn.removeAllEventListeners();
		
		
		
		
			that.unblockChafaf();
		
			that.tool_btn.gotoAndStop(0);
			that.tool.gotoAndStop(0);
		}
		
		
		
		
		
		
		
		
		
		
		var is_settin_ListenerAndVar;
		
		(function set_settin_listeners() {
		
			if (!that.is_settin_ListenerAndVar) {
		
		
		
				that.settin.eye_tmrn.addEventListener("click", toeye);
				that.settin.default_menu.addEventListener("click", toDefault_menu);
		
				that.settin.full_eye.addEventListener("click", tofull);
		
		
		
				that.settin.eye_tmrn.addEventListener("mouseover", overBtn);
				that.settin.eye_tmrn.addEventListener("rollout", outBtn);
		
				that.settin.default_menu.addEventListener("mouseover", overBtn);
				that.settin.default_menu.addEventListener("rollout", outBtn);
		
		
				that.settin.full_eye.addEventListener("mouseover", overBtn);
				that.settin.full_eye.addEventListener("rollout", outBtn);
		
				that.is_settin_ListenerAndVar = true;
		
		
			}
		
		
		
		
		
		
		})();
		
		
		var is_settin_clicked = false;
		function toSettin(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
				if (is_settin_clicked) {
		
					remove_settin();
		
				} else {
		
					is_settin_clicked = true;
					that.settin.gotoAndPlay(1);
				}
			}
		
		}
		var is_eye_clicked = false;
		function toeye(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
				if (!is_eye_clicked) {
					that.blockChafaf();
					chafaf.visible = false;
					is_eye_clicked = true;
		
					that.settin.eye_tmrn.gotoAndStop(1);
		
				} else {
					that.unblockChafaf();
					chafaf.visible = true;
					is_eye_clicked = false;
		
					that.settin.eye_tmrn.gotoAndStop(0);
				}
			}
		
		}
		var isDefault_menu = false;
		function toDefault_menu(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
				if (isDefault_menu) {
					reset_menu();
					isDefault_menu = false;
					that.settin.default_menu.gotoAndStop(0);
		
				} else {
					set_ui();
					isDefault_menu = true;
					that.settin.default_menu.gotoAndStop(1);
				}
			}
		
		}
		
		
		
		
		var elem = document.documentElement;
		
		
		function openFullscreen() {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			}
		}
		
		
		function closeFullscreen() {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
		
		
		var is_full_clicked = false;
		function tofull(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
				if (!is_full_clicked) {
		
					is_full_clicked = true;
		
					openFullscreen();
		
					that.settin.full_eye.gotoAndStop(1);
		
				} else {
		
					is_full_clicked = false;
		
					closeFullscreen();
		
					that.settin.full_eye.gotoAndStop(0);
				}
			}
		
		}
		
		
		
		
		
		/////////////  zoomtamrin + mask cont ///////////////////////////////////////////
		
		
		
		
		
		function parentmask(ob, scale_used) {
		
		
		
		
			var pt = ob.parent.localToLocal(ob.x, ob.y, that);
		
			var dim0 = cont.localToLocal(0, 0, that);
		
			var dim = cont.localToLocal(ob.getTransformedBounds().width * scalx,
				ob.getTransformedBounds().height * scaly, that);
		
			var msk = new createjs.Shape();
		
		
			//var c = ob.x * xx * (used * plus) + diffX - (ob.getTransformedBounds().width * xx) * (used * plus) * 0.5;
			//var g = ob.y * yy * (used * plus) + diffY - (ob.getTransformedBounds().height * yy) * (used * plus) * 0.5;
		
			//msk.graphics.beginFill("#ff000050").drawRect(c, g, ob.getTransformedBounds().width*xx * used * plus, ob.getTransformedBounds().height *yy* used * plus);
			msk.graphics.beginFill("00ff0090").drawRect(pt.x - 2, pt.y - 2,
				dim.x - dim0.x, dim.y - dim0.y);
		
			// that.addChild(msk);   
			cont.mask = msk;
		
		}
		function parentScale(ob) {
		
			var xx = scalx;
			var yy = scaly;
		
		
			var shape = new createjs.Shape();
		
			var facWidth = cont.getBounds().width / (ob.getTransformedBounds().width * xx);
			var facHeight = cont.getBounds().height / (ob.getTransformedBounds().height * yy);
		
			var used = Math.min(facWidth, facHeight);
		
			console.log(" that.parent.getBounds().width  " + cont.getBounds().height);
			console.log(" ob.getTransformedBounds().width  " + ob.getTransformedBounds().height * xx);
			toslidrScal(used - 1);
		
		
			parentmask(ob, used - 1);
			stage.update();
		
		}
		that.parentScale = parentScale;
		
		
		///////////////////////   zoom tool ///////////////////////////////////
		
		
		var maxZoom = 28;
		var currentPosition = 0;
		var rate = 0;
		
		
		function onPlus(ev) {
		
			console.log('OnPlus');
		if ( ev.nativeEvent instanceof MouseEvent)
		{
			if (currentPosition < maxZoom) {
		
				scal_page(4);
			}
		}
		}
		function onMinus(ev) {
		if ( ev.nativeEvent instanceof MouseEvent)
		{
			if (currentPosition > 0) {
		
				scal_page(-4);
			}
		}
		}
		function scal_page(scalMainusAndPlus) {
			console.log('from scal_page scal ', scalMainusAndPlus);
		
			//To prevent quick drag of trk by the user ,we send "dispatchEvent("change")" for eadch mini change of trk.x 
			for (var i = 0; i < Math.abs(scalMainusAndPlus); i++) {
		
				var diff = scalMainusAndPlus > 0 ? 1 : -1;
		
				console.log('from trkRate rate = ', rate);
				if (currentPosition > -1 && currentPosition < maxZoom + 1) {
		
					currentPosition += diff;
		
					trkRate(currentPosition);
		
					toslidrScal(rate);
		
					//that.dispatchEvent("change");
		
		
				}
		
			}
		
		
		
		}
		
		cont.scal = scal_page;
		
		function trkRate(currentPos) {
		
			var cur = currentPos < 0 ? 0 : currentPos > maxZoom ? maxZoom : currentPos;
			rate = cur / maxZoom * 2;
			console.log('rate');
		}
		
		function resetTrk() {
		
		
			currentPosition = 0;
			rate = 0;
		
		
		}
		
		
		
		
		function toslidrScal(rate) {
		
			scalfactor = 1 + rate;
		
			cont.scaleX = scalfactor;
		
			cont.scaleY = scalfactor;
		
			if (scaleFac > scalfactor) {
		
				repositionContainer();
			}
		
			scaleFac = scalfactor;
		}
		
		
		
		
		function toreset(evt) {
		
		
			cont.regX = cont.origin_regX;
			cont.regY = cont.origin_regY;
		
			cont.scaleX = 1;
			cont.scaleY = 1;
		
		
			scaleFac = 0;
		
			cont.x = firstwidth / 2 + offsetX;
			cont.y = firstheight / 2 + offsetY;
		
			resetTrk();
		
		}
		
		cont.toreset = toreset;
		
		
		function repositionContainer() {
		
		
			var diff = (cont.x - (firstwidth / 2 + offsetX));
		
			cont.x = cont.x - diff * (1 / (currentPosition + 1));
		
		
		
			diff = (cont.y - (firstheight / 2 + offsetY));
		
			cont.y = cont.y - diff * (1 / (currentPosition + 1));
		
		
		}
		
		
		
		///////////////////////////  end zoom tool /////////////////////////////////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// titre
	this.instance = new lib.tito_optimized();
	this.instance.setTransform(433,7,0.0992,0.0766);

	this.instance_1 = new lib.image();
	this.instance_1.setTransform(404,6,0.1185,0.1247);

	this.instance_2 = new lib.image4();
	this.instance_2.setTransform(578,7,0.157,0.199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// page_load
	this.page_loader = new lib.PAGEloaDER();
	this.page_loader.name = "page_loader";
	this.page_loader.setTransform(459.9,239.65,1.2823,1.0721,0,0,0,-28.9,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.page_loader).wait(1));

	// goPage
	this.goPage = new lib.goToPgcopy();
	this.goPage.name = "goPage";
	this.goPage.setTransform(57.2,2.65,1.1197,0.7198,0,0,0,-2.5,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.goPage).wait(1));

	// pageNum
	this.pageNum = new lib.an_TextInput({'id': 'pageNum', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.pageNum.name = "pageNum";
	this.pageNum.setTransform(81.15,5.25,0.4191,1.1015,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.pageNum).wait(1));

	// sound_sld
	this.sound_sld = new lib.Symbol38_1();
	this.sound_sld.name = "sound_sld";
	this.sound_sld.setTransform(519.85,497.4,1,0.6588,0,0,0,1,21.4);

	this.timeline.addTween(cjs.Tween.get(this.sound_sld).wait(1));

	// book
	this.book = new lib.Symbol7_1();
	this.book.name = "book";
	this.book.setTransform(984.3,15.6,0.9153,0.887);

	this.timeline.addTween(cjs.Tween.get(this.book).wait(1));

	// zoomsBtn
	this.minus = new lib.Symbol3();
	this.minus.name = "minus";
	this.minus.setTransform(982.35,450.4,0.9367,1);

	this.plus = new lib.Symbol2();
	this.plus.name = "plus";
	this.plus.setTransform(982.35,488.35,0.9367,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plus},{t:this.minus}]}).wait(1));

	// next
	this.next = new lib.pageapre();
	this.next.name = "next";
	this.next.setTransform(998.3,241.85,0.9485,1.6154,0,0,0,17.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.next).wait(1));

	// prv
	this.prv = new lib.pageavant();
	this.prv.name = "prv";
	this.prv.setTransform(18.55,240.55,0.9538,1.6154,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.prv).wait(1));

	// re_set
	this.re_set = new lib.Symbol6_1();
	this.re_set.name = "re_set";
	this.re_set.setTransform(980.95,415.75,0.89,1,0,0,0,-1.4,4);

	this.timeline.addTween(cjs.Tween.get(this.re_set).wait(1));

	// home
	this.home = new lib.Symbol4_1();
	this.home.name = "home";
	this.home.setTransform(949.1,15.75,0.9153,0.8925);

	this.timeline.addTween(cjs.Tween.get(this.home).wait(1));

	// tool_btn
	this.tool_btn = new lib.tool_btn();
	this.tool_btn.name = "tool_btn";
	this.tool_btn.setTransform(17.3,481,0.8588,1);

	this.timeline.addTween(cjs.Tween.get(this.tool_btn).wait(1));

	// settin_btn
	this.settin_btn = new lib.settin_btn();
	this.settin_btn.name = "settin_btn";
	this.settin_btn.setTransform(18.3,16.05,1,0.887);

	this.timeline.addTween(cjs.Tween.get(this.settin_btn).wait(1));

	// tools
	this.tool = new lib.tool();
	this.tool.name = "tool";
	this.tool.setTransform(-3,280.8,0.7492,1,90,0,0,0.1,34.2);

	this.timeline.addTween(cjs.Tween.get(this.tool).wait(1));

	// settin
	this.settin = new lib.settin();
	this.settin.name = "settin";
	this.settin.setTransform(28.5,99.35);

	this.timeline.addTween(cjs.Tween.get(this.settin).wait(1));

	// greytool
	this.grey_tool = new lib.grey_tool();
	this.grey_tool.name = "grey_tool";
	this.grey_tool.setTransform(1002.3,249.6,1.0135,1,0,0,0,1000,249.5);

	this.timeline.addTween(cjs.Tween.get(this.grey_tool).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(460.6,249.9,541.6999999999999,249.20000000000002);
// library properties:
lib.properties = {
	id: '2034D714F5551F45A41B5E1BA58D4A37',
	width: 1000,
	height: 500,
	fps: 24,
	color: "#DBDBDB",
	opacity: 1.00,
	manifest: [
		{src:"images/boook.jpg?1635036968695", id:"boook"},
		{src:"images/dnd0.jpg?1635036968695", id:"dnd0"},
		{src:"images/dnd2.jpg?1635036968695", id:"dnd2"},
		{src:"images/dnd10.jpg?1635036968695", id:"dnd10"},
		{src:"images/dnd4.jpg?1635036968695", id:"dnd4"},
		{src:"images/dnd5.jpg?1635036968695", id:"dnd5"},
		{src:"images/dnd6.jpg?1635036968695", id:"dnd6"},
		{src:"images/dnd8.jpg?1635036968695", id:"dnd8"},
		{src:"images/dnd9.jpg?1635036968695", id:"dnd9"},
		{src:"images/text1.png?1635036968696", id:"text1"},
		{src:"images/text1pngcopy.png?1635036968696", id:"text1pngcopy"},
		{src:"images/text2.png?1635036968696", id:"text2"},
		{src:"images/titr1.png?1635036968696", id:"titr1"},
		{src:"images/titre1pngcopy.png?1635036968696", id:"titre1pngcopy"},
		{src:"images/dnd7.jpg?1635036968696", id:"dnd7"},
		{src:"images/dnd11.jpg?1635036968696", id:"dnd11"},
		{src:"images/dnd1.jpg?1635036968696", id:"dnd1"},
		{src:"images/dnd3.jpg?1635036968696", id:"dnd3"},
		{src:"images/CachedBmp_1065.png?1635036968696", id:"CachedBmp_1065"},
		{src:"images/قالب القصص_atlas_1.png?1635036967999", id:"قالب القصص_atlas_1"},
		{src:"images/قالب القصص_atlas_2.png?1635036968000", id:"قالب القصص_atlas_2"},
		{src:"images/قالب القصص_atlas_3.png?1635036968000", id:"قالب القصص_atlas_3"},
		{src:"images/قالب القصص_atlas_4.png?1635036968000", id:"قالب القصص_atlas_4"},
		{src:"images/قالب القصص_atlas_5.png?1635036968000", id:"قالب القصص_atlas_5"},
		{src:"images/قالب القصص_atlas_6.png?1635036968000", id:"قالب القصص_atlas_6"},
		{src:"images/قالب القصص_atlas_7.png?1635036968000", id:"قالب القصص_atlas_7"},
		{src:"images/قالب القصص_atlas_8.png?1635036968000", id:"قالب القصص_atlas_8"},
		{src:"images/قالب القصص_atlas_9.png?1635036968000", id:"قالب القصص_atlas_9"},
		{src:"images/قالب القصص_atlas_10.png?1635036968000", id:"قالب القصص_atlas_10"},
		{src:"images/قالب القصص_atlas_11.png?1635036968001", id:"قالب القصص_atlas_11"},
		{src:"images/قالب القصص_atlas_12.png?1635036968001", id:"قالب القصص_atlas_12"},
		{src:"images/قالب القصص_atlas_13.png?1635036968002", id:"قالب القصص_atlas_13"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1635036968696", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1635036968696", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1635036968696", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2034D714F5551F45A41B5E1BA58D4A37'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;