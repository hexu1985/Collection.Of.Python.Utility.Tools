(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_atlas_P_", frames: [[0,0,453,195],[93,197,68,51],[0,197,91,91]]},
		{name:"728x90_atlas_NP_", frames: [[0,0,1021,735],[0,737,1021,735]]}
];


// symbols:



(lib.back = function() {
	this.initialize(ss["728x90_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.initialize(ss["728x90_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.car_small = function() {
	this.initialize(ss["728x90_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dust = function() {
	this.initialize(ss["728x90_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wheel = function() {
	this.initialize(ss["728x90_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.wheel_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wheel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel_in, new cjs.Rectangle(0,0,91,91), null);


(lib.txt_add = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FA57FF").s().p("AheBQQgJgKgCgOQAAgQAKgXQAKgXAQgXQAQgYATgQQAUgQARgCQAIgBAGAFQAFAFABAIQAAAPgKAQQgKAQgOAOQgQAOgPAMQgPAMgMAHIgDADIgBAGQgBAIACADQADADAGgBQAPgBAXgNQAWgMAXgRIAqgfIAZgWIAEgCIADgBQAFAAADADQAEADAAAFIAAAEIgDAFQgPAPgXASQgWATgZARQgYARgXALQgXALgRABIgDAAQgNAAgJgIgAgXgoIgGAFIgJALIgJAMIATgUIAGgGIAEgGIgFAEg");
	this.shape.setTransform(313.4988,34.7027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA57FF").s().p("AhpBFQgJgKgBgPQAAgRAHgUQAHgTAMgRQARgWAVgOQAUgNARgCIADAAIACAAIADABQAJABAEAFQAFAFAAAFIAAAGIgCAEIgFAFQgDACgDAAIgBAAIgFAAIgFgDQgPACgQAPQgRANgLAUQgHANgDAKQgDAKAAAHQAAAFADADQADACAGAAIADAAQAIAAALgEQAWgIAXgPQAXgOAWgNIAlgbIAVgPQADgCAEAAQAFAAADAFQADAEAAAGIAAAEQgBABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgYAUQgSAMgZASQgZASgaAPQgbAOgYAGIgLACIgKABQgUAAgJgLg");
	this.shape_1.setTransform(297.3483,35.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FA57FF").s().p("AiFBTQgHgFAAgIQAAgCAFgQQAEgPAIgVIAPgpIANglIAIgTIAEgDIAFgBIABAAQAHgBAFAEQAFADABAFIAAACIgCADIgPAoIgQAoIAWgdQALgPAMgNQAMgMAJgGIAIgEIAHgCIACAAQAMAAAEAMQAFANAAARQABARACAMQACAMAIABIABAAIABAAQAMgDATgJQATgJASgLIAbgSIAEgBIADgBIABAAQAFAAADADQADACAAAGIAAAGIgDAFQgGAFgOAJIggASQgRALgQAHQgRAIgLAAIgCAAQgSABgIgLQgJgKgCgPQgDgOAAgMIgBgGIAAgJQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABgBIAAAAIAAAAIgBAAQgGACgLANQgMANgNATQgOATgMATIgRAdQgDAEgEACQgEADgEAAIgBAAIgCAAQgIAAgFgEg");
	this.shape_2.setTransform(276.5479,35.9997);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FA57FF").s().p("AheBQQgJgKgCgOQAAgQAKgXQAKgXAQgXQAQgYATgQQAUgQARgCQAIgBAGAFQAFAFABAIQAAAPgKAQQgKAQgOAOQgQAOgPAMQgPAMgMAHIgDADIgBAGQgBAIACADQADADAGgBQAPgBAXgNQAWgMAXgRIAqgfIAZgWIAEgCIADgBQAFAAADADQAEADAAAFIAAAEIgDAFQgPAPgXASQgWATgZARQgYARgXALQgXALgRABIgDAAQgNAAgJgIgAgXgoIgGAFIgJALIgJAMIATgUIAGgGIAEgGIgFAEg");
	this.shape_3.setTransform(257.4988,37.6527);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FA57FF").s().p("Ag7DyQgFgGgBgLQAAgbAJgjQAKgiAOgkIAahCQgJAIgPAPIgeAfIgcAdQgOANgFAEQgKAHgHABQgGAAgFgEQgEgEAAgJQgBgOAIgVQAHgWAPgYQAPgZAUgVQAUgVAZgOQAIgFAHgBQAGgCAFAAQAMgBAFAEIAGAEIAAAAIAAAAQgCgCAFgKIAOgbIAPgfQAIgOACgJIgBgEQgCgDACgGIASgfIAUghIAQgXQAIgJAIABQAHACADAHQACAGgEAIQgIAOgQAgIgkBMIgoBcQgUAvgRAtQgQAsgKAjQgKAiAAAQIABAEIAAACQAFABACACIACAGQAAAHgGAGQgHAGgJABQgHAAgFgFgAgDgVQgJAAgPAJQgPAJgSASQgRAUgQAgQgJAQgHAGQgHAHACAAIAMgKIAagaIAeghIAcgbIAOgRIADgEIgBAAIgBAAg");
	this.shape_4.setTransform(241.4425,34.02);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FA57FF").s().p("AhaBpQgKgKgBgQQgBgQAHgUQAHgUAKgTQAKgRAJgLIAFgDQACgCADAAQAHAAAFAFQAFAEAAAGQAAAEgCADIgEAGQgJAKgIAOQgGAOgFANQgEAOABALIABAHIAGABIACgBIAEgCQAWgHAZgPQAZgQAYgTQAZgUASgQIADgCIAEgBQAGAAADADQAEADAAAFIgBAEIgBACQgLANgTARQgTAQgXAQQgWARgVANQgVAMgOAGIgIACIgIAAIgDAAQgOAAgIgIgAgfg7QgDgCAAgEIAAgDQgBgGAGgKQAFgKAOgNQABgDADgBIAGgBQAGAAAGACQAHADACAGIAAACIgCAEQgCAFgHAIQgHAJgHAHQgJAIgJABIgCAAIgCAAQgDAAgCgCg");
	this.shape_5.setTransform(223.7483,36.8298);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FA57FF").s().p("AhnEBQgGgGgDgNIAAgFIgBgGIAAgGQgBgWAEgZQAEgaAGgaIALgvIgGgGQgEgEgBgGQgBgDACgFQACgEAFgFIALgJQAEgBACgEIAGgPQAXhDAfg/QAeg/Arg9QAHgKAHgFQAHgFAHgBQAGAAAEADQADADABAHQAAAIgDAJQgDAJgGAGQgGAHgJAAIABAAQgNAQgQAbQgQAbgRAgIgcA9QgNAdgGASIgEAKIAtgVQAYgNAXgOQAXgOATgOIAEgBIADgBQAFAAADADQADADABAGIgBAFQgBADgDACQgkAZgmAVIhLAqQgGACgEADQgDADgBAFIAAABQAAACAGAEQAGADAGAGQAIAIAEALQAFALABAMIAAAEQABAVgHAXQgGAXgLAWQgKAVgMAQQgGAJgGAFQgHAFgHABIgBAAQgIAAgFgGgAhEBmIgGAfIgGAiIgDAWIgCATIAAAOIABAEIAAABQADgCAIgPIAQgkQAGgQACgNQADgNgBgKIgBgCQgBgSgGgHQgGgHgEgBIgDAPg");
	this.shape_6.setTransform(207.565,42.5237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FA57FF").s().p("AiFBTQgHgFAAgHQAAgDAFgPQAEgQAIgVIAPgpIANglIAIgSIAEgEIAFgCIABAAQAHAAAFAEQAFADABAFIAAACIgCADIgPAoIgQAoIAWgcQALgQAMgNQAMgNAJgFIAIgEIAHgCIACAAQAMAAAEAMQAFANAAARQABARACAMQACAMAIAAIABAAIABABQAMgDATgJQATgJASgLIAbgSIAEgBIADgBIABAAQAFAAADADQADADAAAFIAAAFIgDAGQgGAEgOAKIggATQgRAKgQAHQgRAIgLAAIgCAAQgSABgIgLQgJgKgCgPQgDgOAAgMIgBgGIAAgJQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAAAAIAAAAIgBAAQgGABgLANQgMANgNATQgOATgMASIgRAeQgDAEgEACQgEADgEAAIgBAAIgCAAQgIAAgFgEg");
	this.shape_7.setTransform(191.3479,40.4497);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FA57FF").s().p("AhUBgIgFgBQgNgDgHgKQgGgJgBgOQgBgVAKgXQAKgWARgTQAQgUASgKQAGgDAEABQAEACADADIgBgFIAAgGQgBgKAEgJQAEgJAKgDQAJAAAEAEQAEAEACAHIACAMIAAAMIgBAKQACASAOAJQAOAJAVgCIAEAAQAKAAAJgEQAKgEAKgIQAGgBAFAEQAEAEABAHQAAAEgBACQgBADgDACQgMAGgNAEQgOAFgNABIgHAAQgOABgNgDQgNgDgLgIQgBAAgBAAQAAAAAAAAQgBgBAAABQAAAAgBAAIgEAIQgDALgHANQgHAPgJAOQgKANgMAKQgLAKgOACIgDAAIgCAAgAgbgiIgEAEQgVANgNAPQgMAQgFAPQgGAQABALQAAAHACADQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAQAJgBAKgLQAJgLAIgQQAJgQAFgPQAFgRACgNIgBgFIgCADg");
	this.shape_8.setTransform(171.2238,40.935);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FA57FF").s().p("AhpBGQgJgLgBgPQAAgRAHgUQAHgTAMgRQARgWAVgOQAUgOARgBIADAAIACAAIADABQAJABAEAFQAFAFAAAFIAAAGIgCAEIgFAFQgDACgDAAIgBAAIgFAAIgFgDQgPACgQAPQgRANgLAUQgHANgDAKQgDAKAAAHQAAAFADADQADACAGAAIADAAQAIAAALgFQAWgHAXgOQAXgOAWgOIAlgbIAVgPQADgDAEABQAFAAADAEQADAFAAAGIAAAEQgBABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgYATQgSANgZASQgZARgaAQQgbAOgYAGIgLACIgKABQgUAAgJgKg");
	this.shape_9.setTransform(153.2483,43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FA57FF").s().p("AiICyQgGgEAAgGIAAgEQAEgRALgbIAWg9IAbhAIAZg9IAUgtIANgbIAPgZQAEgIAEgEQAGgFAGgBQAFAAAEADQAFAEAAAIIAAAAIgCAKIgGAPIgEAKQgCAHgEAFQgDAFgIAAIgBAAIAAABIgBACIgpBcIglBeIAKgOIAKgNIALgNQAHgHAJgHQAJgGAHgBIABAAQALgBADAHQAEAHAAAJQgBALgBALIgBAUQAAAGACADQACADAHgBIAFAAIAGgBQAXgHAUgNQAVgOAPgNIAYgXIADgCIAEgCQAEAAAEAEQADADABAFIgBADIgBAEQgEAGgNAMQgMAOgRAOQgTAPgVALQgVALgVABIgEABQgWAAgJgKQgIgKgBgOIACgRIABgOQgHAFgLANQgLAOgMASQgMASgKASIgQAfQgCAGgFADQgFADgFAAQgIAAgEgEg");
	this.shape_10.setTransform(114.725,39.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FA57FF").s().p("AhlDsQgFgEAAgHQAAgNAHgbQAHgcALgjIAZhGIAWg+IARgpIACgIIABgBIgBABIgBAAIgkAKIgjANIgBABIgCAAQgFABgEgFQgEgFgBgHQAAgEACgDQACgDAEgCQASgHAVgGQAVgGATgEIANgEQADgCABgDIAJgWIAQgkQAJgVAKgTQAKgUAIgMQAJgNAGgBQAGAAAFAEQAEAEABAGIAAACIgEAMIgGAQIgGAOQgDAJgEADQgDADgDAAIgBAAIgSAjIgPAjIASgCIAUgBIAOgBQAHAAAHABQAEgBADAEQADADAAAFQABAGgDAEQgDAEgFABIAAAAIgRABIgQAAIgUABIgVADIgEADIgDAFQgZA+gWBCQgXBCgRBCIgBAFIgBAEIABACIABACIACAEIABAEQAAAHgGAFQgGAFgJABIgCABQgFAAgEgEg");
	this.shape_11.setTransform(102.302,41.9028);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FA57FF").s().p("AhaBpQgKgKgBgQQgBgQAHgUQAHgUAKgTQAKgRAJgLIAFgDQACgCADAAQAHAAAFAFQAFAEAAAGQAAAEgCADIgEAGQgJAKgIAOQgGAOgFANQgEAOABALIABAHIAGABIACgBIAEgCQAWgHAZgPQAZgQAYgTQAZgUASgQIADgCIAEgBQAGAAADADQAEADAAAFIgBAEIgBACQgLANgTARQgTAQgXAQQgWARgVANQgVAMgOAGIgIACIgIAAIgDAAQgOAAgIgIgAgfg7QgDgCAAgEIAAgDQgBgGAGgKQAFgKAOgNQABgDADgBIAGgBQAGAAAGACQAHADACAGIAAACIgCAEQgCAFgHAIQgHAJgHAHQgJAIgJABIgCAAIgCAAQgDAAgCgCg");
	this.shape_12.setTransform(90.1483,43.8298);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FA57FF").s().p("AibB0QgGgEgBgJIAAAAQgBgWAHgcQAHgcAMgcQALgdANgaIAXguQAFgJAFgDQAGgDAEgBQAIAAAFAFQAFAEAAAHIAAADIgCAEQgYAjgTAoQgSAngKApIgFASIANgRIAVgfIAWgeQAHgKAFgDQAFgEAEAAIACgBIACABQAJACAEAIQADAHADAOIADAKQAAAAABABQAAAAABAAQAAABABAAQAAAAABgBQAEAAAGgIQAHgIAGgMIAJgbIAAgCIAAgBIAAAAIAAAAIgCgDIgEgFQgDgFAAgKIAAgFQAAgIAGgGQAGgGAHAAQAIgBAFAHQAGAGABAPIAAAEQACAJAOAEQAPAFAVgCQAPAAAPgEQAOgEAKgFIADgCIADAAQAFgBAEAEQADADAAAGQAAAIgJAFQgJAGgNADQgNADgLACIgQABIgKAAIgIAAQgWgBgIgDIgKgFIAAABIgBAEQgDALgJAPQgIAQgMAMQgLAMgQACIAAAAQgLAAgGgFQgHgGgDgIIgFgMIgBACIgNATIgUAbQgKAPgKALQgJANgGAFIgIAFIgIACIgCAAQgGAAgEgFg");
	this.shape_13.setTransform(68.7438,49.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_add, new cjs.Rectangle(52.6,0.7,273.09999999999997,87.6), null);


(lib.txt_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBrQgHgGAAgLQAAgLAHgIQAHgGAKAAQALAAAHAGQAHAIAAALQAAALgHAGQgHAHgLAAQgKAAgHgHgAgPAmIgGiXIArAAIgGCXg");
	this.shape.setTransform(274.325,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBsIAZhCIhAiVIAqAAIApBlIAkhlIAoAAIhRDXg");
	this.shape_1.setTransform(260.625,21.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBJQgLgFgGgKQgHgKAAgOQAAgQAIgJQAIgJANgGQANgGARgDIAlgJQgDgLgHgFQgIgGgLAAQgMAAgJAGQgIAGgDAMIgkgHQAGgWARgNQASgNAbAAQAVAAAOAHQAPAHAIAOQAIAOABAVIAABZIgiAAIgDgVQgIAMgMAGQgMAGgQAAQgOAAgLgFgAgFANQgKACgGAEQgGAEAAAIQAAAIAFAEQAFAEAIAAQAJAAAKgEQAJgFAGgJQAGgJAAgNIAAgEg");
	this.shape_2.setTransform(243.875,18.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBoQgQgLgKgRQgKgRAAgYQAAgWAKgQQAKgTAQgKQARgJAVgBQANABALAFQAMAEAJAKIAAhbIAmAAIAADgIgiAAIgDgSQgJAKgMAFQgMAGgNAAQgVAAgRgKgAgbAEQgLAMAAATQAAAVALAMQALALARABQASgBALgLQALgMAAgVQAAgTgLgMQgLgKgSgBQgRABgLAKg");
	this.shape_3.setTransform(225.875,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBEQgSgKgKgSQgLgRAAgXQAAgWALgRQAKgSASgKQASgKAWAAQAYAAARAKQASAKAKASQALARAAAWQAAAXgLARQgKASgSAKQgRAKgYAAQgWAAgSgKgAgdgfQgLAMAAATQAAAUALAMQAMALARABQASgBAMgLQALgMgBgUQABgTgLgMQgMgLgSgBQgRABgMALg");
	this.shape_4.setTransform(207.9,18.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBxIAAi7IhBAAIAAglICrAAIAAAlIhBAAIAAC7g");
	this.shape_5.setTransform(189.35,14.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBEQgTgLgGgYIAngIQACAMAIAFQAHAGALAAQAMAAAGgFQAHgEAAgIQAAgGgFgDQgEgDgIgBIgQgDQgMgCgNgEQgLgEgJgIQgHgJgBgRQAAgOAIgLQAJgLAOgGQANgGASAAQAZAAAQAKQAPALAHAUIgmAIQgCgKgHgEQgGgFgKAAQgLAAgGAFQgGAEAAAHQAAAIAJADQAJADAMACQANACANAEQANADAIAIQAJAJAAASQAAAOgHALQgHALgOAHQgPAGgVAAQgYAAgSgKg");
	this.shape_6.setTransform(165.9,18.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBoQgQgLgKgRQgKgRAAgYQAAgWAKgQQAKgTAQgKQARgJAVgBQANABALAFQAMAEAJAKIAAhbIAmAAIAADgIgiAAIgDgSQgJAKgMAFQgMAGgNAAQgVAAgRgKgAgbAEQgLAMAAATQAAAVALAMQALALARABQASgBALgLQALgMAAgVQAAgTgLgMQgLgKgSgBQgRABgLAKg");
	this.shape_7.setTransform(148.575,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBNIAAhUQAAgRgIgIQgJgJgNAAQgHAAgIADQgIAEgFAHQgFAHAAANIAABUIgmAAIAAiWIAiAAIADAPQAJgJALgEQALgFAMAAQAQAAANAHQAOAHAIAOQAIAOAAAVIAABag");
	this.shape_8.setTransform(130.775,18.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBEQgSgKgKgRQgJgSAAgWQAAgWAKgSQAKgSARgKQARgKAWAAQAXAAAQAJQARAJAKAQQAJARAAAWIAAAHIgCAJIhvAAQAEARAKAIQALAJAPAAQAPAAAJgGQAJgGAEgKIAjAHQgHAXgTAMQgSAMgcAAQgYAAgRgKgAAkgQQgCgPgJgHQgJgIgPAAQgMAAgKAHQgKAHgEAQIBHAAIAAAAg");
	this.shape_9.setTransform(112.825,18.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBNIAAiWIAkAAIACASQAGgKAKgFQAKgFAOAAIAHAAIAIABIgEAlIgJgBIgHgBQgPABgLAJQgIAKgBATIAABNg");
	this.shape_10.setTransform(99.15,18.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBxIAAi7IhCAAIAAglICrAAIAAAlIhBAAIAAC7g");
	this.shape_11.setTransform(82.75,14.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRASQgHgHgBgKQABgLAHgHQAHgGAKAAQALAAAHAGQAHAHABALQgBAKgHAHQgHAGgLAAQgKAAgHgGg");
	this.shape_12.setTransform(69.25,23.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBRQgOgMAAgXIAAhIIgcAAIAAgLIA4g4IAJAAIAAAiIA0AAIAAAhIg0AAIAAA/QAAAMAGAFQAFAFAKAAIAKgBIALgEIAIAfQgIAEgKADQgJACgKAAQgXAAgNgNg");
	this.shape_13.setTransform(52.275,16.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmBEQgSgKgKgRQgJgSAAgWQAAgWAKgSQAKgSARgKQARgKAWAAQAXAAAQAJQARAJAKAQQAJARAAAWIAAAHIgCAJIhvAAQAEARAKAIQALAJAPAAQAPAAAJgGQAJgGAEgKIAjAHQgHAXgTAMQgSAMgcAAQgYAAgRgKgAAkgQQgCgPgJgHQgJgIgPAAQgMAAgKAHQgKAHgEAQIBHAAIAAAAg");
	this.shape_14.setTransform(37.425,18.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BlQgagQgOgaQgOgZgBgiQABghAOgaQAOgaAagPQAagOAfAAQAagBAUAJQAUAJAOAPQAOAPAFAUIgnAMQgHgUgPgLQgOgLgYABQgTAAgQAJQgRAKgIARQgJARAAAXQAAAXAIASQAJASAQAKQAQAJAUAAQASAAAOgGQAOgGAIgLQAIgLAAgOIhRAAIAAgjIB8AAIAAASQAAAfgOAXQgNAXgXANQgXANgggBQgfABgagPg");
	this.shape_15.setTransform(16.3,14.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_21, new cjs.Rectangle(1.9,0,280.20000000000005,37), null);


(lib.txt_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBEQgSgLgHgYIAngIQACAMAIAFQAHAGALAAQAMAAAGgFQAHgEAAgIQAAgGgFgDQgFgDgHgBIgQgDQgNgCgMgEQgLgEgJgIQgHgJgBgRQAAgOAIgLQAJgLAOgGQANgGASAAQAZAAAQAKQAPALAHAUIgmAIQgCgKgHgEQgGgFgKAAQgLAAgGAFQgGAEAAAHQAAAIAJADQAJADALACQAOACANAEQAMADAJAIQAJAJAAASQAAAOgHALQgHALgOAHQgOAGgWAAQgYAAgSgKg");
	this.shape.setTransform(293.35,18.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBxIAAjgIAlAAIAADgg");
	this.shape_1.setTransform(282,14.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBJQgLgFgGgKQgHgKAAgOQAAgQAIgJQAIgJANgGQANgGARgDIAlgJQgDgLgHgFQgIgGgLAAQgMAAgJAGQgIAGgDAMIgkgHQAGgWARgNQASgNAbAAQAVAAAOAHQAPAHAIAOQAIAOABAVIAABZIgiAAIgDgVQgIAMgMAGQgMAGgQAAQgOAAgLgFgAgFANQgKACgGAEQgGAEAAAIQAAAIAFAEQAFAEAIAAQAJAAAKgEQAJgFAGgJQAGgJAAgNIAAgEg");
	this.shape_2.setTransform(269.275,18.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBLIg5iVIAqAAIAkBoIAlhoIAoAAIg5CVg");
	this.shape_3.setTransform(253.475,18.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBuIAAiWIAlAAIAACWgAgQhGQgGgGAAgKQAAgKAGgGQAHgHAJAAQAKAAAHAHQAFAGABAKQgBAKgFAGQgHAGgKAAQgJAAgHgGg");
	this.shape_4.setTransform(241.5,15.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBNIAAiWIAjAAIADASQAGgKAKgFQAJgFAPAAIAHAAIAIABIgFAlIgHgBIgIgBQgPABgKAJQgKAKAAATIAABNg");
	this.shape_5.setTransform(232.4,18.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguBNIAAiWIAkAAIACASQAGgKAJgFQALgFAOAAIAHAAIAIABIgEAlIgJgBIgHgBQgPABgLAJQgIAKgBATIAABNg");
	this.shape_6.setTransform(213.9,18.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBGQgMgHgIgNQgIgNAAgUIAAhdIAmAAIAABZQAAAPAIAHQAHAHAOAAQAHAAAHgDQAHgDAFgHQAEgHAAgMIAAhWIAmAAIAACWIgiAAIgCgPQgHAJgKAEQgLAFgOAAQgQAAgNgHg");
	this.shape_7.setTransform(197.975,18.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBEQgSgKgLgSQgKgRAAgXQAAgWAKgRQALgSASgKQASgKAWAAQAYAAARAKQATAKAKASQAKARAAAWQAAAXgKARQgKASgTAKQgRAKgYAAQgWAAgSgKgAgcgfQgMAMAAATQAAAUAMAMQAKALASABQATgBAKgLQALgMAAgUQAAgTgLgMQgKgLgTgBQgSABgKALg");
	this.shape_8.setTransform(180.3,18.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoBsIAZhCIhAiVIAqAAIApBlIAkhlIAoAAIhRDXg");
	this.shape_9.setTransform(163.075,21.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBEQgSgKgKgRQgJgSAAgWQAAgWAKgSQAKgSARgKQARgKAWAAQAXAAAQAJQARAJAKAQQAJARAAAWIAAAHIgCAJIhvAAQAEARAKAIQALAJAPAAQAPAAAJgGQAJgGAEgKIAjAHQgHAXgTAMQgSAMgcAAQgYAAgRgKgAAkgQQgCgPgJgHQgJgIgPAAQgMAAgKAHQgKAHgEAQIBHAAIAAAAg");
	this.shape_10.setTransform(139.575,18.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiBpQgQgHgJgMQgJgLgDgPIAngHQACALAJAHQAJAGAOAAQASAAAKgJQAKgJAAgQIAAgTQgJAJgLAEQgMAFgMAAQgVAAgQgKQgRgKgJgRQgKgQAAgXQAAgWAKgRQAJgRARgKQAQgKAVAAQANAAAMAFQALAFAJAJIADgQIAiAAIAACTQAAAVgJAQQgJAQgRAJQgRAJgYAAQgVAAgPgGgAgahAQgLALAAATQAAAUALALQAKAKARABQASgBAKgKQALgLAAgUQAAgTgLgLQgKgLgSgBQgRABgKALg");
	this.shape_11.setTransform(120.925,21.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgBNIAAhUQAAgRgIgIQgJgJgNAAQgHAAgIADQgIAEgFAHQgFAHAAANIAABUIgmAAIAAiWIAiAAIADAPQAJgJALgEQALgFAMAAQAQAAANAHQAOAHAIAOQAIAOAAAVIAABag");
	this.shape_12.setTransform(103.225,18.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmBEQgSgKgKgRQgJgSAAgWQAAgWAKgSQAKgSARgKQARgKAWAAQAXAAAQAJQARAJAKAQQAJARAAAWIAAAHIgCAJIhvAAQAEARAKAIQALAJAPAAQAPAAAJgGQAJgGAEgKIAjAHQgHAXgTAMQgSAMgcAAQgYAAgRgKgAAkgQQgCgPgJgHQgJgIgPAAQgMAAgKAHQgKAHgEAQIBHAAIAAAAg");
	this.shape_13.setTransform(85.275,18.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSBxIAAjgIAlAAIAADgg");
	this.shape_14.setTransform(72.5,14.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBxIAAjgIAlAAIAADgg");
	this.shape_15.setTransform(64.3,14.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqBJQgLgFgGgKQgHgKAAgOQAAgQAIgJQAIgJANgGQANgGARgDIAlgJQgDgLgHgFQgIgGgLAAQgMAAgJAGQgIAGgDAMIgkgHQAGgWARgNQASgNAbAAQAVAAAOAHQAPAHAIAOQAIAOABAVIAABZIgiAAIgDgVQgIAMgMAGQgMAGgQAAQgOAAgLgFgAgFANQgKACgGAEQgGAEAAAIQAAAIAFAEQAFAEAIAAQAJAAAKgEQAJgFAGgJQAGgJAAgNIAAgEg");
	this.shape_16.setTransform(51.575,18.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgBxIAAhVQAAgRgIgIQgJgIgNAAQgHAAgIADQgIACgFAIQgFAHAAANIAABVIgmAAIAAjgIAmAAIAABYQAIgIALgFQALgEAMAAQAQAAANAHQAOAHAIAOQAIANAAAVIAABbg");
	this.shape_17.setTransform(34.775,14.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag3BkQgZgPgMgaQgNgagBghQABggANgZQAOgaAZgQQAZgPAhAAQAaAAAUAJQAVAIANARQAOAQAGAYIgqALQgFgWgPgNQgOgMgYAAQgVAAgPAKQgQALgIARQgIASAAAUQAAAVAIASQAIASAPAKQAPALAWAAQAYAAAQgNQAQgNAFgVIApAKQgLAlgbASQgaAUgmgBQgjAAgZgPg");
	this.shape_18.setTransform(14.2,14.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_11, new cjs.Rectangle(0,0,302.9,37), null);


(lib.sr_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF622D").s().p("AAAIYQiUgiidhDQjahch0hqQgPgOAAgMQAAgKAHgHQAHgGANAAIE3AAQAeAAABgXQABgRgZgMQi6hZiuhsQi0hxhaheQgNgNAAgRQAAgKAHgIQAIgIAOAAIKlAAQAgAAAAgYQAAgRgagLQhRgghHgjQhbgugvgkQgMgJAAgMQAAgMAIgGQAHgHANAAINUAAQEtAACoCzQCSCdAADkQAABjgkBiQgoBqhKBRQivDDksAAQimAAiigkgABjkiQh3B1AACmQAACnB3B4QB4B2CnAAQCqAAB2h2QB2h2AAipQAAinh2h0Qh2h1iqAAQinAAh4B1gAJFAZQgLgIgEgaQgHhIgtgwQgwg0hLgGQgYgCgIgLQgJgMAAgfQAAgfAHgLQAHgOAWAAQCDAABZBbQBVBWAABzQAAAZgPAJQgMAHgkAAQgjAAgMgJg");
	this.shape.setTransform(95.325,57.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkWEUQhvhoAAi/IAAljICvAAIAAFzQAABqA7A6QA5A4BiAAQBjAAA5g4QA7g6AAhoIAAl1ICvAAIAAFrQAAC8hwBmQhnBgisAAQiwAAhphjg");
	this.shape_1.setTransform(641.625,57.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjSFjQhigchCgsIAAioQBQAzBlAeQBqAfBmAAQDEAAAAhQQAAgdgVgPQgZgSg4gFQiLgLhigKQiAgOg+gzQg/g0AAhdQAAhsBig/QBfg+CdAAQDVAAChBNIAACiQiohQjEAAQhpAAgvAVQglASAAAgQAAAeAZAQQAXAPAxAEIDvAYQCDANBAA0QA9AzAABbQAABzhlBBQhjA/isAAQhwAAhsgeg");
	this.shape_2.setTransform(730.9,56.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlTFtIAArYIKnAAIAACUIn/AAIAACIIH2AAIAACTIn2AAIAACTIH/AAIAACWg");
	this.shape_3.setTransform(346.575,56.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjSFjQhigchCgsIAAioQBQAzBkAeQBqAfBoAAQDDAAABhQQgBgdgVgPQgYgSg5gFQiKgLhigKQiAgOg+gzQhAg0AAhdQAAhsBhg/QBgg+CeAAQDVAACfBNIAACiQimhQjFAAQhpAAguAVQgmASAAAgQAAAeAZAQQAYAPAvAEIDwAYQCEANA/A0QA9AzAABbQAABzhlBBQhjA/isAAQhwAAhsgeg");
	this.shape_4.setTransform(262.85,56.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFTFtIAApWIgLAAIjEJWIkNAAIjEpWIgKAAIAAJWIioAAIAArYIE5AAIDFJkIAKAAIDEpkIEzAAIAALYg");
	this.shape_5.setTransform(446.425,56.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADlFtIAAkfIm7AAIAAEfIiyAAIAArYICyAAIAAEUIG7AAIAAkUICkAAIAALYg");
	this.shape_6.setTransform(819.1,56.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADDFtIjLj5IjRAAIAAD5IivAAIAArYIIWAAQB4AABEBEQBABBgBBtQAABZg1A9Qg1BAhcATIDGDsIAAARgAjZgeIFTAAQAwgBAbgXQAcgXAAgsQAAgrgcgZQgbgYgwAAIlTAAg");
	this.shape_7.setTransform(553.3,56.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sr_logo, new cjs.Rectangle(0,0,858.4,114.4), null);


(lib.road = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,41,214,0.749)").ss(1,1,1).p("AEBAVI2ggUIhNgVIUnASIO0gQID+ATg");
	this.shape.setTransform(136.25,722.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(214,41,214,0.8)").ss(1,1,1).p("AFdAcI6jgZIhngdIX8AWIQSgXIFNAbg");
	this.shape_1.setTransform(169.025,726.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(214,41,214,0.698)").ss(1,1,1).p("ADFARIzigRIg6gQISEAQINkgMIDHAPg");
	this.shape_2.setTransform(111.2,719);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D629D6").ss(1,1,1).p("EhIVBB7Mgw7gOOMB88AD0IktokMBMzAGKMBmBAXwgEgZlhM2MhqBAq7IwMXXMA+igU8IM/PFMArigXlgEgp6Ax7Mhd9gCeItSj3MBD9ABhITLjDIfFCfgEiRXAOSI3LFUIiMDHIT9kVIMlA/IGajegEho+gQhMgxEAO+ImeJUMAkwgKAIPtFMISYp8gEijBAbpIs2CaIg0BLILyiKII8gGICdhVgEil+Ad5IrLCAIgpA6IKXh0IIIgOIB8hDgEiZlAUhIyTD2IhfCHIQOjRILIAYIEaiYgEifFAYrIvGC+IhFBjINpinIJ8AEIDOhvgEiIjAmSMggYgAgIiUgrIcmAcIR9giIHKAkgEhhNArKMg5kgBNImIhxMAunAA4IVFhgIQwBWgEh6FAoEMgpdgAvIjjhCMAjcAAmITtg3IKfA2gEiD9AD+I/iIHIjeFAIZ4mLIOSCNIKHleg");
	this.shape_3.setTransform(1137.875,491.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(214,41,214,0.4)").s().p("A/fewItTj3MBD9ABiITLjEIfFCgIq+FXgEg7KAWoIjjhCMAjcAAnITtg4IKdA2I0mBMgEhEHAUDIhngdIX9AWIQSgXIFOAbIxSAdgEhIgASzIg6gRISFAPINkgLIDHAQIuTAOgEhIxAPNILLiBIIngLIh8BEIoIANIqXB1gEhFzAK9IPFi/IKpAPIjOBwIp8gEItpCmgEhALAC5IXLlSINmBmImaDdIslg+Iz9EUgEgxqgSPMAxEgO/IPRJjIyXJ9IvslOMgkwAKBg");
	this.shape_4.setTransform(469.9,598.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.road, new cjs.Rectangle(-1,-1,2277.8,985.7), null);


(lib.line_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3B3D9D","rgba(255,255,255,0)"],[0,1],-126.2,0,126.2,0).s().p("AztAeIAAg7MAnbAAAIAAA7g");
	this.shape.setTransform(126.2,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_in, new cjs.Rectangle(0,0,252.4,6), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FECDFF","rgba(255,255,255,0)"],[0,0.125,1],-283,0,283.1,0).s().p("EgsOAXyMAAAgvjMBYcAAAMAAAAvjg");
	this.shape.setTransform(283.05,152.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,566.1,304.4), null);


(lib.dust_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dust();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dust_in, new cjs.Rectangle(0,0,1021,735), null);


(lib.car_small_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.car_small();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_small_1, new cjs.Rectangle(0,0,68,51), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-50.5,0,50.6,0).s().p("An5H6IAAvzIPzAAIAAPzg");
	this.shape.setTransform(50.575,50.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,101.2,101.2), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLxAHCIAAuDMCXjAAAIAAODg");
	this.shape.setTransform(364.0016,45.0007,0.7505,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,728,90), null);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,1021,735), null);


(lib.arrow_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C127B8").ss(2.5,0,0,4).p("AJrAOIoorhIqkAAIIeLhIoeLGIKkAAg");
	this.shape.setTransform(60.65,72.35,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_light, new cjs.Rectangle(-2.5,-1.2,127,147.2), null);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wheel_in();
	this.instance.parent = this;
	this.instance.setTransform(45.5,45.5,1,1,0,0,0,45.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-16.5,124.19999999999999,124.1);


(lib.txt_block_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt1
	this.instance = new lib.txt_21();
	this.instance.parent = this;
	this.instance.setTransform(83.2,31,1,1,0,0,0,83.2,18.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:18.5,alpha:1},24,cjs.Ease.cubicOut).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,282.1,119.5);


(lib.txt_block_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt_glow
	this.instance = new lib.txt_add();
	this.instance.parent = this;
	this.instance.setTransform(102.5,52.65,1,1,0,0,0,102,43.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},24,cjs.Ease.cubicOut).wait(162).to({_off:true},1).wait(124));

	// txt1
	this.instance_1 = new lib.txt_11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.2,31,1,1,0,0,0,83.2,18.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:18.5,alpha:1},24,cjs.Ease.cubicOut).wait(201).to({_off:true},1).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,326.2,207.5);


(lib.speed_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.line_in();
	this.instance.parent = this;
	this.instance.setTransform(360.65,10.8,1,1,0,0,0,126.2,3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.7792,scaleY:0.7792,x:197.5,y:9.7,alpha:0.543},0).wait(1).to({regY:3.1,scaleX:0.5933,scaleY:0.5933,x:60.25,y:8.8,alpha:1},0).wait(1).to({regY:3,scaleX:0.4458,scaleY:0.4459,x:-48.7,y:7.95},0).wait(1).to({scaleX:0.344,scaleY:0.3441,x:-123.95,y:7.45},0).wait(1).to({scaleX:0.2749,scaleY:0.2749,x:-175,y:7.05},0).wait(1).to({scaleX:0.2284,scaleY:0.2284,x:-209.4,y:6.9},0).wait(1).to({scaleX:0.198,scaleY:0.198,x:-231.8,y:6.7},0).wait(1).to({regX:126,regY:3.1,scaleX:0.1793,scaleY:0.1794,x:-245.65,y:6.65},0).wait(1).to({regX:126.2,regY:3,scaleX:0.1695,scaleY:0.1696,x:-252.85,y:6.55,alpha:0.2299},0).wait(1).to({regX:126,scaleX:0.1666,scaleY:0.1667,x:-255.1,alpha:0},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.1,6.1,763,7.700000000000001);


(lib.dust_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhL/A1AMAAAhp/MCX/AAAMAAABp/g");
	mask.setTransform(510.7,368.125);

	// Layer_1
	this.instance = new lib.dust_in();
	this.instance.parent = this;
	this.instance.setTransform(510.5,367.5,1,1,0,0,0,510.5,367.5);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.4492},50,cjs.Ease.cubicInOut).to({alpha:0.25},49,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.3,28.9,972.8000000000001,678.5);


(lib.car_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsZNMQgIgDgmgTIglgTIjPvyIgvh1Ig4gyIgiAHQgjAHgEAEQgFAFgbA0IgaAzIgTA7IglBJIgeA1QgdA2gCAEIgXB7IgHCzIAFBRQAJA/ADAEQADAEAOApInwgEQgfgvgDgMIgciAIgejkQgMhXgEgLIgZhOIgSgOIghgJIBMgwIBvg6IB2gmIA9gRQBOgnAHgHIBHhTIAwhAIAAgcIAggpIARgOQASgQAIgEQANgHA3gUIAXgOIAighIASgNIglAmIgTAPIBMgBIAkAPIAbAmIA+CTIAugJIBMiFIARhKIAEgiIADgkQAAgIgRgYIgRgXQgpgKgOACQgOADgvANQg0AQgGAHQgIAHgvAeIBfhGICIg+IBQgMIB+gJIFFgKIDyABIFNAfIENArICLAnIAnAWIhYgbIlfhBIkjgOIlEgFIlDAEIhMAeIAKCFIgGB/IgJBuICygiIDkgRIETAAQDUALALACIBPAHQBJAEASAAIGHADQALAAEiAaICgAPImxkjIBnA6IDGCFIBLA4IgDgpIAPgaIASgBQAUgBAKAEIBOAjQAKAFAPANQAMAMAGAHQARAXgHALIgKASIAKAHIB7AOQAKABBQARIA3gCQAygBAJABIBXAHIAdACIAMASIAuAaQAvAbAGAEQALAJApAlQAuAqAFAHIAsA6QApA0AEAIQAHANAlAPIAvgPIAXgVIgThCIgZguIgkggQgmgggFgDIgmgWIgfgVIgsgTIAoALQBjA5AIAFQAFAEAWAWQAVAWACAEIAxBXIAwCAIAQCVIgGB3IABAdIBBBMIhDAFIADA3QBOBPAGAFQAHAEgDAOIhaACIgSAFIgOCKIBRAnQAbAPADAEIAAAiQAAABABAAQAAAAABABQAAAAAAAAQAAABAAAAQgCACgUAAQiOgEgUAAIg4gBIgqgBIgjhbIwcAbIlGgCIhJADIgxBrIhPAEIokgBIknAJQiOgKgNgDgAJ0hYIh8AUIg8ARIgyAzIg1BMIhKCLIggBcIATA7IAgATQAiAUAMAHQBGAiAoAHQArAIBaALQAYAEEjgCIEegEIHJgCIBTgGIA/gtIAbhGQAFhSgCgNQgBgNglh4Ignh0QgSgqgPgFQgLgFgigIQgigIgTgDIjkgWQgYgDhygDIh4gDIkRAAIjWALgAsrmKIA7A0IAmAuQAoAxAJAQQAPAbAdAZIAcANQAfAPANAEQAKAEBXASQBVATAIADQAPAGCSAHIC2AQQAVACAWgHIAUgcIich/Ii4hWIjnhNIkogXgA3jmfIgiA4IB2gRIA1gRIhFgiIgrgNgAYTlcIAhACIAPAEg");
	mask.setTransform(224.5847,85.9);

	// Layer_9
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(695.25,-78.7,1,1.5087,-24.8061,0,0,283.1,152.1);
	this.instance.alpha = 0.3516;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-268.9,y:272.75},14,cjs.Ease.cubicOut).wait(20).to({x:695.25,y:-78.7},0).to({x:-268.9,y:272.75},14,cjs.Ease.cubicOut).wait(21).to({x:695.25,y:-78.7},0).to({x:-268.9,y:272.75},14,cjs.Ease.cubicOut).wait(20).to({x:695.25,y:-78.7},0).to({x:-268.9,y:272.75},14,cjs.Ease.cubicOut).wait(21).to({x:695.25,y:-78.7},0).to({x:-268.9,y:272.75},14,cjs.Ease.cubicOut).wait(20).to({x:695.25,y:-78.7},0).to({x:-268.9,y:272.75},14,cjs.Ease.cubicOut).wait(26).to({x:695.25,y:-78.7},0).to({x:-268.9,y:272.75},14,cjs.Ease.cubicOut).wait(19));

	// Layer_7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgvDJQgShTAAh2QAAh1AShUQAUhTAbAAQAcAAASBTQAVBUAAB1QAAB2gVBTQgSBUgcAAQgbAAgUhUg");
	mask_1.setTransform(16.45,115.275);

	// Layer_3
	this.instance_1 = new lib.wheel_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.2,116.6,0.1593,0.6252,0,0,0,45.9,45.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(245));

	// Layer_5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AicE5QhKiDgBi2QABi1BKiDQBMiCBpAAQAYAAATAMQAOAIAYAaIB+KMQgFALgBASQgBARgGALQgkA/g0AiQgyAhg4AAQhpAAhMiCg");
	mask_2.setTransform(106.35,111.575);

	// Layer_2
	this.instance_2 = new lib.wheel_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(110.35,111.8,0.5924,0.9582,0,0,0,45.6,45.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245));

	// Layer_1
	this.instance_3 = new lib.car();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,453,195);


(lib.arrow_fill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.black();
	this.instance.parent = this;
	this.instance.setTransform(66.95,82.05,1.2381,1.326,-90,0,0,50.6,50.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(193,39,184,0.6)").s().p("ApmLUIIerGIoerhIKkAAIIpLhIopLGg");
	this.shape.setTransform(67.4,72.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_fill, new cjs.Rectangle(0,0,134.2,144.7), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5_copy_copy
	this.instance = new lib.arrow_light();
	this.instance.parent = this;
	this.instance.setTransform(259.5,72.4,1,1,0,0,0,61,72.4);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(20));

	// Layer_5_copy
	this.instance_1 = new lib.arrow_light();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,72.4,1,1,0,0,0,61,72.4);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({_off:true},21).wait(20));

	// Layer_5
	this.instance_2 = new lib.arrow_light();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61,72.4,1,1,0,0,0,61,72.4);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},19).wait(41));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C127B8").ss(2.5,0,0,4).p("AZMAOIoprhIqkAAIIdLhIoeLGIKlAAgAJsAOIoprhIqjAAIIdLhIoeLGIKkAAgAl0AOIoorhIqlAAIIeLhIoeLGIKlAAg");
	this.shape.setTransform(159.85,72.35,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// arrow_2
	this.instance_3 = new lib.arrow_fill();
	this.instance_3.parent = this;
	this.instance_3.setTransform(159.55,72.4,1,1,0,0,0,67,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-1.2,325.5,147.2);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car_front
	this.instance = new lib.car_big();
	this.instance.parent = this;
	this.instance.setTransform(58.15,442.05,0.3,0.3,0,0,0,32.4,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:32.2,regY:123.4,scaleX:0.66,scaleY:0.66,x:98.1,y:442.1},34,cjs.Ease.cubicOut).to({regX:32.4,scaleX:0.6,scaleY:0.6,x:88.2},70).to({regX:32.2,scaleX:0.66,scaleY:0.66,x:98.1},70,cjs.Ease.quadInOut).to({regX:32.4,scaleX:0.6,scaleY:0.6,x:88.2},70).wait(1));

	// car_back
	this.instance_1 = new lib.car_small_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,446,0.3,0.3,0,0,0,34.1,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:34,regY:25.6,scaleX:0.66,scaleY:0.66,x:48.5},34,cjs.Ease.cubicOut).to({regX:34.1,regY:25.7,scaleX:0.5,scaleY:0.5,x:42.5},70,cjs.Ease.quadInOut).to({regX:34,regY:25.6,scaleX:0.66,scaleY:0.66,x:48.5},70,cjs.Ease.quadInOut).to({regX:34.1,regY:25.7,scaleX:0.5,scaleY:0.5,x:42.5},70,cjs.Ease.quadInOut).wait(1));

	// road
	this.instance_2 = new lib.road();
	this.instance_2.parent = this;
	this.instance_2.setTransform(588.4,327.8,0.5241,0.5241,0,0,0,1137.9,491.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245));

	// line_9
	this.instance_3 = new lib.speed_line();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.95,440.6,0.6594,0.6594,0,162.5136,-17.4864,-271.2,14.2);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(231));

	// line_8
	this.instance_4 = new lib.speed_line();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25.15,440.75,0.6969,0.6059,0,125.1876,-54.8094,-271.6,14);
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(236));

	// line_7
	this.instance_5 = new lib.speed_line();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.95,440.5,0.9999,0.9999,-57.9765,0,0,-271.4,14.4);
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(241));

	// line_6
	this.instance_6 = new lib.speed_line();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.95,440.55,0.6594,0.6594,0,158.7807,-21.2193,-271.2,14.2);
	this.instance_6.compositeOperation = "lighter";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(222));

	// line_5
	this.instance_7 = new lib.speed_line();
	this.instance_7.parent = this;
	this.instance_7.setTransform(24.9,440.6,0.6889,0.6889,0,146.1804,-33.8196,-271.5,14.2);
	this.instance_7.compositeOperation = "lighter";
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).wait(227));

	// line_4
	this.instance_8 = new lib.speed_line();
	this.instance_8.parent = this;
	this.instance_8.setTransform(24.9,440.45,0.7787,0.7787,-45.6574,0,0,-271.4,14.3);
	this.instance_8.compositeOperation = "lighter";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(231));

	// line_3
	this.instance_9 = new lib.speed_line();
	this.instance_9.parent = this;
	this.instance_9.setTransform(24.9,440.6,0.7393,0.7393,0,148.2057,-31.7943,-271.4,14.2);
	this.instance_9.compositeOperation = "lighter";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(236));

	// line_2
	this.instance_10 = new lib.speed_line();
	this.instance_10.parent = this;
	this.instance_10.setTransform(24.95,440.55,0.7393,0.7393,0,140.0135,-39.9865,-271.4,14.3);
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).wait(241));

	// line_1
	this.instance_11 = new lib.speed_line();
	this.instance_11.parent = this;
	this.instance_11.setTransform(24.95,440.45,0.9999,0.9999,-51.9756,0,0,-271.4,14.2);
	this.instance_11.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(245));

	// dust
	this.instance_12 = new lib.dust_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-52.3,374.55,0.6599,0.6599,0,0,0,510.5,367.6);
	this.instance_12.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:510.4,regY:367.7,x:-47.05},84).to({regX:510.5,regY:367.6,x:-41.25},90).wait(71));

	// msk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egy4Ak/MAAAhJ9MBlxAAAMAAABJ9g");
	mask.setTransform(72.775,393.675);

	// back
	this.instance_13 = new lib.back_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(65.45,395.55,0.66,0.66,0,0,0,510.4,367.5);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.2,-205.8,1574.3,836.2);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{f1:79});

	// logo
	this.instance = new lib.sr_logo();
	this.instance.parent = this;
	this.instance.setTransform(110.85,45.65,0.18,0.18,0,0,0,432.6,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(420));

	// hide
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.9,24.9,0.9999,1,0,0,0,24.9,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},19,cjs.Ease.cubicOut).wait(206).to({alpha:1},19,cjs.Ease.cubicIn).wait(1).to({alpha:0},19,cjs.Ease.cubicOut).wait(136).to({alpha:1},19,cjs.Ease.cubicIn).wait(1));

	// txt_2
	this.instance_2 = new lib.txt_block_2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(230.9,28.95,1.15,1.15,0,0,0,5.5,3.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245).to({_off:false},0).wait(175));

	// arrow
	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(630.05,44.95,0.4905,0.4907,0,0,0,160.6,73);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(245).to({_off:false},0).wait(175));

	// txt_1
	this.instance_4 = new lib.txt_block_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(226.65,17.2,0.8,0.8,0,0,0,3.2,3.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},226).wait(175));

	// animation
	this.instance_5 = new lib.animation();
	this.instance_5.parent = this;
	this.instance_5.setTransform(601.15,-10.3,0.52,0.52,0,0,0,150.4,299.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},245).wait(175));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.9,24.9,1,1,0,0,0,24.9,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(420));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-204.7,775.0999999999999,370.4);
// library properties:
lib.properties = {
	id: 'A08824BF2D83034E9342FC925EF9EA4C',
	width: 728,
	height: 90,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"728x90_atlas_P_.png", id:"728x90_atlas_P_"},
		{src:"728x90_atlas_NP_.jpg", id:"728x90_atlas_NP_"}
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
an.compositions['A08824BF2D83034E9342FC925EF9EA4C'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;