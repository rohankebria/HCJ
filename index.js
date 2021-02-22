







/*
const _radius = new WeakMap();

class Circle{
	constructor(radius){ // used to initialize object
	//this.radius = radius;
	// have to work with radius keyMap
		_radius.set(this, radius); 	
	}
}

const c = new Circle(313);


console.log(_radius.get(c));








/* // exercise STACK

const _items = new WeakMap();
	
	class Stack{
		constructor(){
			_items.set(this, []); // set PRIVATE array to an empty
		}
		push(obj){
			_items.get(this).push(obj);
		}
		pop(){
			
			//const item = _items.get(this);  // for refactoring
			
			if(_items.get(this).length === 0)
				throw new Error('Stack is empty');
			
			return _items.get(this).pop();	
		}
		peak(){
		const item = _items.get(this);
		
		if(item.length === 0)
			throw new Error('Stack is empty');
			
		return item[item.length-1];
		}
		
		get count(){ // only read value from outside
			return _items.get(this).length;
		}
		
	}

const stack = new Stack();






/*
class Shape{
    constructor(){
        this.shape_move = function(){
            console.log('Shape_move');
        }
    }

	move(){
		console.log('move Shape');
	}
}

class Circle extends Shape{
	move(){
          super.move();  
		console.log('move Circle');
	}
}

const c = new Circle();

const s = new Shape();




/*
class Shape{
	constructor(color){
		this.color = color;
	}
	move(){
		console.log('move');
	}
}

class Circle extends Shape{
	constructor(color, radius){
		super(color);		
        this.radius = radius;
	}
	draw(){
		console.log('Draw');
	}
}

const c = new Circle('red', 15);




/*
class Shape{
	move(){
		console.log('move');
	}
}

class Circle extends Shape{
	draw(){
		console.log('Draw');
	}
}

const c = new Circle();




/*
const _radius = new WeakMap();

class Circle{
	constructor(radius){ // used to initialize object
		_radius.set(this, radius); 
        
      /*  Object.defineProperty(this, 'radius', {
            get : function (){
                return _radius.get(this);              
            }
          });
*//*
	}    
    get radius(){
        return _radius.get(this);
        }
   
set radius(value){
	_radius.set(this, value); 
}
    
        
}

const c = new Circle(313);

/*
const _radius = new WeakMap();

const _move= new WeakMap();
const _moveThis= new WeakMap();

class Circle{
	constructor(radius){ // used to initialize object
		_radius.set(this, radius); 	
        _move.set(this, function(){ // this as key , function as value
            console.log('move...', this);
        });

        _moveThis.set(this, () =>  { // this as key , function as value
            console.log('moveThis...', this); // this is undefined, because of class
        });


	}
    draw(){
        console.log(_radius.get(this) + 'Draw'); //return value
        
        // call move here !
        
        _move.get(this)();	// a private method called here !
        _moveThis.get(this)();

    }
    
}

const c = new Circle(313);








	/*
    // to ask !


    const _radius = Symbol();
	const _draw = Symbol();
	
	class Circle{
		constructor(radius){ // used to initialize object
		//this.radius = radius;
		this[_radius] = radius; // private property			
	    }
        
        [_draw](){
        }
    }

const c1 = new Circle(2);



/*
class Circle{
	constructor(radius){ // used to initialize object
	this.radius = radius;
	}
	
	// Instance Method
	draw(){
		console.log ('Draw');
	}
	
	
	//  Static Method
	static parse(str){ 	// c.parse doesnot exist !
	const radius = JSON.parse(str).radius;		
	return new Circle(radius);
	}
	
} // ends body of class

const c = Circle.parse('{"radius":1}');
console.log(c);




/*
class Circle{
    constructor(radius){ // used to initialize object
        this.radius = radius;
        
        this.move = function(){
            console.log('move');
        }
        
    }
	// all method in the body of class and endup in prototype of ibject built from it

	draw(){
		console.log ('Draw');
	}
	
} // ends body of class




const c = new Circle(1);



/*
function HtmlElement(){    
    
    this.Click = function(){
      console.log('Clicked e');
   }  
}

HtmlElement.prototype.focus  = function (){
       console.log('Focused');
}

const e = new HtmlElement();

HtmlSelectElement.prototype =  new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlSelectElement(...arr){    
   this.addItem = function(item){ this.Items.push(item)};
   this.Items = [...arr];
   this.removeItem = function(item){
       for (let key in this.Items)
           if (this.Items[key] === item)
               this.Items.splice(key, 1);
               //console.log('item found'+ key);

    }
    this.render=function(){
        return `
        <select>${this.Items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
     }  
}




const s = new HtmlSelectElement([1,2,3]);


function HTMLImageElement(source){
    this.source = source;
    this.render  = function (){
        //console.log('Image render');
    
       // console.log('<img src="' + this.source + '" />');
       return `<img src="${this.source}" />`;
  
    }

}




HTMLImageElement.prototype =  new HtmlElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;

/*

HTMLImageElement.prototype.render  = function (){
    //console.log('Image render');

   // console.log('<img src="' + this.source + '" />');
   return `<img src="${this.source}" />`;


}  // not required overloading but the first one available will be picked up
*/

/*
const i = new HTMLImageElement('http://127.0.0.1:5500/index.html');


const elements = [
    new HTMLImageElement('https://mail.google.com/mail/u/0/#inbox'),
    new HtmlSelectElement([4,5,6]),

];


for( let key of elements)
    console.log(key.render());








/*

// exercise inheritance

function HtmlElement(){    
    
     this.Click = function(){
        console.log('Clicked e');
    }
   
}

HtmlElement.prototype.Focus  = function (){
        console.log('Focused');
}

const e = new HtmlElement();

//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
//	HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype =  new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlSelectElement(...arr){    
    this.addItem = function(item){ this.Items.push(item)};
	this.Items = [...arr];
	this.removeItem = function(item){
        for (let key in this.Items)
            if (this.Items[key] === item)
                this.Items.splice(key, 1);
                //console.log('item found'+ key);

     }
   
    }

/*HtmlSelectElement.prototype.Click = function(){
    console.log('Clicked Select');
}*/ 
// need not this now !
  



/*
const s = new HtmlSelectElement();




/*
//mixin

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('Eating...');
    }	
};

const canWalk = {
    walk: function(){
        this.distance--;
        console.log('Walking...');
    }	
};

const canSwim = {
    swim: function(){
        this.distance--;
        console.log('Swiming...');
    }	
};


function mixin(taget, ...sources){ // REST operator
	Object.assign(taget.prototype, ...sources ); // SPREAD Operator
}



function Person(){
    // can add methods and variable specific to person
}

//const person = Object.assign({}, canEat, canWalk);
//console.log(person);



mixin(Person, canEat, canWalk);

console.log(Person.prototype);

const p = new Person();
console.log(p);

// new object like goldfish

function GoldFish(){

}

mixin(GoldFish, canEat, canSwim);
console.log(GoldFish.prototype);

const g = new GoldFish();
console.log(g);







/*
const canEat = {
    eat: function(){
        this.hunger--;
        console.log('Eating...');
    }	
};

const canWalk = {
    walk: function(){
        this.distance--;
        console.log('Walking...');
    }	
};

const canSwim = {
    swim: function(){
        this.distance--;
        console.log('Swiming...');
    }	
};





function Person(){
    // can add methods and variable specific to person
}

//const person = Object.assign({}, canEat, canWalk);
//console.log(person);



Object.assign(Person.prototype, canEat, canWalk);
console.log(Person.prototype);

const p = new Person();
console.log(p);

// new object like goldfish

function GoldFish(){

}
Object.assign(GoldFish.prototype, canEat, canSwim);
console.log(GoldFish.prototype);

const g = new GoldFish();
console.log(g);







/*

function extend(Child, Parent){
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape(){
}

Shape.prototype.duplicate = function (){
	console.log('Duplicate Shape');
}

function Circle(){
}

extend(Circle, Shape);

Circle.prototype.duplicate = function (){
    //Shape.prototype.duplicate();
    Shape.prototype.duplicate.call(this);
	console.log('Duplicate Circle...');
}

function Square(){
   
}
extend(Square, Shape);

Square.prototype.duplicate = function (){
    //Shape.prototype.duplicate();
    Shape.prototype.duplicate.call(this);
	console.log('Duplicate Square...');
}



const shapes = [
    new Circle(), 
    new Square(),
];

for(let key of shapes )
    key.duplicate();



/*
function extend(Child, Parent){
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape(){
}

Shape.prototype.duplicate = function (){
	console.log('Duplicate Shape');
}

function Circle(){
}

extend(Circle, Shape);

Circle.prototype.duplicate = function (){
    //Shape.prototype.duplicate();
    Shape.prototype.duplicate.call(this);
	console.log('Duplicate Circle...');
}


Circle.prototype.draw = function (){
	console.log('Draw Circle');
}

const c = new Circle();










/*
function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function (){
	console.log('Duplicate Shape');
}

function extend(Child, Parent){
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Circle(radius, color){
    Shape.call(this, color);

	this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function (){
	console.log('Draw Circle');
}

function Square(size, color){
    Shape.call(this, color); 
    this.size=size;   
}


extend(Square, Shape);



const s = new Shape();
const c = new Circle(1, 'red');
const sq = new Square(5, 'blue');

		





/*
function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function (){
	console.log('Duplicate Shape');
}



function Circle(radius, color){
    Shape.call(this, color);

	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
    // should be here after Circle constructor

Circle.prototype.constructor = Circle;
    // reset circle constructor


Circle.prototype.draw = function (){
	console.log('Draw Circle');
}

function Square(size, color){
    Shape.call(this, color); 
    this.size=size;   
}

Square.prototype = Object.create(Shape.prototype);
    // Inheritance

Square.prototype.constructor = Square;
    // construtor reset





const s = new Shape();
const c = new Circle(1, 'red');
const sq = new Square(5, 'blue');

		





/* function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function (){
	console.log('Duplicate');
}

function Circle(radius, color){
    Shape.call(this, color);

	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
    // should be here after Circle constructor

Circle.prototype.constructor = Circle;
    // reset circle constructor


Circle.prototype.draw = function (){
	console.log('Draw');
}


const s = new Shape();
const c = new Circle(1, 'red');

		

















/*function Shape(){
}

Shape.prototype.duplicate = function (){
	console.log('Duplicate');
}

function Circle(radius){
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
    // should be here after Circle constructor

Circle.prototype.constructor = Circle;
    // reset circle constructor


Circle.prototype.draw = function (){
	console.log('Draw');
}


const s = new Shape();
const c = new Circle(1);

		





/*function Circle(radius)	{
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}
*/
/*
function Circle(radius)	{
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log('draw'); 
}


const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function (){

    return 'Circle radius is ' + this.radius;
    
    }


//console.log(Object.keys(c1));  



for (let key in c1)
 console.log(c1);


/*

const person = {name: 'MRK'};


Object.defineProperty(person, 'name',{
	writable: false,
    enumerable: false,
});


person.name ='RK';

console.log(person);



console.log(Object.keys(person));



/*
function StopWatch()
{
    let hasStarted = false;
    let durationTime= 0;
    let intervalIdMec= 0;
    let intervalIdSec = 0;
    let milli = 0;
    let sec = 0;
    
   
    let durationCalculate = function(){
        
        if(hasStarted === true) 
        {
            if (intervalIdMec) {
                clearInterval(intervalIdMec);
            }

            if (intervalIdSec) {
                clearInterval(intervalIdSec);
            }



          
            let t = [];

            intervalIdMec = setInterval(function(){  milli+=1;  }, 100);
            intervalIdSec = setInterval(function(){  sec+=1;  }, 1000);

   

        //console.log(milli+sec);

       t.push(sec);
       t.push(milli);

        durationTime = t.join('.');
       


        }
        return durationTime;

    };


    this.reset= function(){
        durationTime= 0;
        milli = 0;
         sec = 0;
    
       // console.log(hasStarted+durationTime );
  
              
    };
    this.start = function(){

        if(hasStarted === true)
            throw new Error('already started');

        hasStarted = true;
        durationCalculate();

        console.log(hasStarted);
        
    };
    
    this.stop = function(){
        if(hasStarted === false)
        throw new Error('already stopped');

        clearInterval(intervalIdMec);
        clearInterval(intervalIdSec);
        hasStarted = false;
        

    
    };	
    
    Object.defineProperty(this, 'duration',{
        get: function(){     //get is a key and function is value
        return durationCalculate(); 
        }
    })
					
    
}




const sw = new StopWatch();















/*
function Circle(radius){
    this.radius = radius; 
    let defaultLocation= {  // local object -> instead of 'this' we use 'let'
        x: 1,
        y: 1,
    };
    this.getDefaultLocation = function(){
        return defaultLocation;
    };
    this.draw = function(){
            console.log('Draw');
        };    
        
        Object.defineProperty(this, 'defaultLocation',{
            get: function(){     //get is a key and function is value
            return defaultLocation; 
            },
            set: function(value){
            if ( !value.x || !value.y)	
                throw new Error('Value is FALSY...')
            
                defaultLocation = value;
            },
        });    

}

const circle3 = new Circle(17);
circle3.getDefaultLocation = 12;
let cxy = circle3.getDefaultLocation;

console.log(cxy);




/*

function Circle(radius){
    this.radius = radius; 
    let defaultLocation= {  // local object -> instead of 'this' we use 'let'
        x: 1,
        y: 1,
    };
    this.getDefaultLocation = function(){
        return defaultLocation;
    };
    this.draw = function(){
            console.log('Draw');
        };    
        
        
Object.defineProperty(this, 'defaultLocation',{
	get: function(){     //get is a key and function is value
	return defaultLocation; 
	}
});



}

const circle3 = new Circle(17);
let cxy = circle3.getDefaultLocation;

console.log(cxy);










/*

function Circle(radius){
    this.radius = radius; // its ; here !
      this.draw = function(){
        console.log('Drawing...' );
        };       
  //  return this; // by default
}

const circle3 = new Circle(17);
circle3.draw();


circle3.location = {
    x: 1,
};


//console.log(circle3.location);


circle3['location'] = {y: 1,}; 

//console.log(circle3['location']);
//console.log(circle3.location);


const propertyAccess = 'location';
/*
console.log(circle3[propertyAccess]);

for (let key in circle3)
console.log(key);



for (let key in circle3)
		console.log(key + ':' + circle3[key] );

*/
	/*
for (let key in circle3)
if (typeof circle3[key] !== 'object' && typeof circle3[key] !== 'function' )
    console.log(key + ':' + circle3[key] );
	

    console.log(Object.keys(circle3));
    
    if ('radius' in circle3)
    console.log(circle3['radius']);
   
    */


/*
delete circle3['location'];

console.log(circle3[propertyAccess]);
console.log(circle3);

*/



/*
let obj = { value:10 };

function increase(obj)
{
obj.value = 11;
}

increase(obj);
console.log(obj.value);





/*

let number = 10;

function increase(number)
{
increase++;
}

increase();
console.log(number);









/*
	 let x = {value:10};
	 let y = 20;
	 
	 y=x;
	 
	 x.value = 45;
	 
	 console.log(x +','+ y );
		// 25,20


		
      y.value = 0;
	
	
	


/*const aCircle = new Function ('radius',`
		this.radius = radius; // its ; here !
        this.location= {
            x: 1,
            y: 1,
        };
		this.draw = function(){
			console.log('Drawing...at '+ this.location.x +','+ this.location.y );
			};       
` );


const cAc =  new aCircle(10);




/*
	function Circle(radius){
		this.radius = radius;
        this.location= {
            x: 1,
            y: 1,
        };
		this.draw = function(){
			console.log('Drawing...at '+ this.location.x +','+ this.location.y );
			};       
        return this;
	}

    const circle3 = new Circle(17);
        circle3.draw();

	
  /*
	function createCircle(radius){
        return {
            radius, // key:value are same -> radius : radius,
            location: {
                x:1,
                y : 1,
            },
            draw: function(){
                console.log('Drawing...at '+ this.location.x +','+ this.location.y );
            },
        };
}

const circle2 = createCircle(12);
circle2.draw();






/*
const circle = {
    radius : 1,
    location: {
        x:1,
        y : 1,
    },
    draw: function(){
        console.log('Drawing...');
    },
};

circle.draw();









/*
let ARRAy1 = [11,1,2,3,4,5,6,7,8,9,11];

console.log(ARRAy1);

while(ARRAy1.length > 0) {
    ARRAy1.pop(); }

//for (let key of ARRAy1 )
    //console.log(key);
  //  ARRAy1.pop();

console.log(ARRAy1);	

/*
		for (let index in ARRAy1)
		console.log(index, ARRAy1[index]);
	
		for (let index of ARRAy1)
		console.log(index);
	
       	


/*
	let roohan ={
        name: 'MRK',
        age: 37,
        nationality: 'Pakistan',
        job: 'Taxi',
    };
  
    
    for (let key in roohan)		
      console.log(key, roohan[key]);

//    for(let key of Object.entries(roohan))
//			console.log(key);





/*const circle = {
    radi: 0,
    ar: 0,
    get radius(){
    return `${circle.radi}`;
    },
    set radius(n){
        this.radi = n;
        this.ar = Math.PI*this.radius*this.radius;
        },
    get area(){
        return `${circle.ar}`;
    },   



};


circle.radius = 10;
console.log(circle.radius);
console.log(circle.area);

circle.area = 20;


/*console.log(sum([1,2,3,5]));


	
function sum(...items){
if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
    
return items.reduce((a,b) => a+b);
}










/*function sum(arr){
     console.log(Array.isArray(arr));


    if(Array.isArray(arr) ){
        let sum = 0;
        for(let key of arr)
            sum += key;
         return sum;
    }
    else if (! Array.isArray(arr))
    {
        let sum = 0;
    for(let key of arguments)
        sum += key;
     return sum;
//return arguments.reduce((a,b) => a+b );

    }


  
    }
    
    console.log(sum(1,2,3,5));



    
    
    
	
    


	/*	const video4={
			title: 'a',
			tags: ['x','y','z'],
			showTags(){
				this.tags.forEach( tag => console.log(this.title, tag)); 
			}			
		};
		
		video4.showTags();




/*
const video3={
    title: 'a',
    tags: ['x','y','z'],
    showTags(){
        this.tags.forEach( function(tag){
        console.log(this.title, tag); 				
        }.bind(this));			
    }			
};

video3.showTags();
            
				
                
                /*	
					function playVideo(){
                        console.log(this)};

                        playVideo.call({ name: 'MRK'});
                        playVideo();
                        playVideo.apply({ name: 'MRK1'});
                    	playVideo.bind({ name: 'MRK2'}) () ;
		


/*
		const video2={
			title: 'a',
			tags: ['x','y','z'],
			showTags(){
				this.tags.forEach( function(tag){
				console.log(tag, this); // callback function => this refer to global object
				
				}, this.title);
				console.log(this);
			}			
		};
		
		video2.showTags();
		
    
    
    
    
    /*
    	const video={
			title: 'a',
			play(){
				console.log(this)
			}			
		};
		
		video.play();
    
        function playVideo(){
            console.log(this);
            }
            
            playVideo();

    
	function Video(title){
        this.title = title;	
        console.log(this);
        }
        
        const v = new Video('b'); // constructor function
        video.play();
        
            
            
            
                    
  
                



    
    /*
		let run = function (){
            console.log('Run');
            };        // semicolon here as we declare variables/objects
  
            	
		let run2 = function Runing(){
            console.log('Run');
            }; // semicolon here as we declare variables/objects
            
    
    
	function sum () //(a,b)
	{
		let total = 0;
			for(let value of arguments)
				total += value;
				
			return total;	
	}
	console.log(sum(1,2,3,4,5,6,7,8,9,10));
	
	
	
	function sum (a,b,...args) //(a,b)
	{
		console.log(args); //3,4,5,6,7,8,9,10
	}
	console.log(sum(1,2,3,4,5,6,7,8,9,10));
	
	

    
    
    /*
		const movies = [
			{ title: 'a' , year: 2018, rating: 4.5 },
			{ title: 'b' , year: 2018, rating: 4.7 },
			{ title: 'c' , year: 2018, rating: 3 },
			{ title: 'd' , year: 2017, rating: 4.5 },

		
		];
	
	// 2018 , rating > 4
//sort by ratings + decending
// pick title and display in console

console.log(mMix(movies));

function mMix(mov){
	const temp = [...mov]; // make a copy of original array
	
	const result = [];	
		for (let value of temp)
			//console.log(value.rating);
            if( value.year === 2018  && value.rating > 4) 
                result.push(value.title);
        
         console.log(result.reverse());
}
	
    
    
    
    
    
    
    
    
    
    
    
    /*
    
    const numbers = [-3,0,1,2,3,-1,11,4,5,66,7,8,9];
	
    const output = max(numbers)
    console.log(output);

        function max(numbers){
            let max = numbers[0];
            for(let i of numbers )
               max =  i > max ? i : max;
                return max;        
        }






















/*
const numbers = [0,1,2,3,4,5,6,7,8,9];
	
	const output = move(numbers, 5, 5)
	console.log(output);

    console.log(numbers); // unchanged
	
		function move(array, index, offset){
            const tempArr =[...array];
			const position = index+offset;

            if(
               position > tempArr.length || position < 0)
                {
                    console.error('Invalid Offset');
                    return;
                }


			const temp = tempArr.splice(index,1)[0];
			tempArr.splice(position,0, temp);
		
		return tempArr;		
		}
    











/*
const numbers = [1,2,3,4,5,6,7,9];
	
const output = except(numbers, [1,2,3,4,6,7])
console.log(output);

	
function except(array, excluded){
    
    for ( let i of excluded){
            for (let j =0; j < array.length; j++){
                if(i===array[j])
                    array.splice(j,1);		
            }
    }
    return array;
}











/*    
	const numbers = [1,2,3,4,5,6,7,9];
	
	rtn = 	includes(numbers, 8);
	console.log(rtn);
	
	
	
	
	function includes(array, serchElement)
	{
		//return array.indexOf(serchElement);	
		return ((array.indexOf(serchElement) != -1) ? true : false);
	
	}
	
	
	





/*
const numbers= arrayFromRange(10,-4);
console.log(numbers);

	
function arrayFromRange(min,max)
{
    const arr =[];
    
    for(let i = min; i <= max; i++)
        arr.push(i);
    return arr;	
}


































/*
const num = [{id:1}];
const sec = [1,2,3,4,5,6];

    const sum = num.concat(sec);

	console.log( sum.forEach(num => console.log(num)));

    const joined = sum.join('');
    console.log(joined);


	const msg1 ='My first message';
	const parts = msg1.split(' ' );
	console.log(parts);

    const oneSen =  parts.join(' ');
	console.log(oneSen);
	

    const seca = [1,7,3,9,5,6];
    seca.sort();
    seca.reverse();
    console.log(seca);


    const cources = [
        { id:1, name:'Node'},
        { id:2, name: 'JS'},
        
    ];



    cources.sort( function(a,b){
        // a < b => -1
        // a > b => 1
        // a===b => 0
        
    if (a.name < b.name)	 return -1;
    if (a.name > b.name)	 return 1;
    return 0;


});

console.log(cources);




const chk =[1, 3, 5, 6, -7, 9];

const allPositive= chk.every(
			function (element) {
			 return element>=0;	
			
			});
			
			console.log(allPositive);




            const chkc =[1, 3, 5, 6, -1,-3, 7, 9];
         const neg=    chkc.filter(function(value){
                return value < 0;
            });
  
            
    
console.log(neg);


const pos = chkc.filter(n => n > 0); // positive elements
	
const Item = pos.map(n => '<li>' + n + '</li>');
	
const html = '<ul>' + Item.join('') + '</ul>';
console.log(html);


const it = pos.map(n =>{
    return {id: n, }
    });

    console.log(it);



	const sumS = chkc.reduce( (acc, value) => { // value set to each element in array
        return acc+value;
}, 0  )	; // accumulator to Zero


console.log(sumS);



/*

	let priceRanges = [
		{label:$, tooltip: 'InExpensive', minPerPerson: 0, maxPerPerson: 10 },	
		{label:$$, tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
		{label:$$$, tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30 },
	];
	
	
	let resturant = [
	{ averagePerPerson: 5}
	];
		
		







/*
function Blog(){
    this.title= 'ABC';
    this.body= 'dfdfd..........dfdfdfd';
    this.author= 'MRK';
    this.views= 313;
    this.comments= [{
        author:'sk',
        body: 'dsds------sds-s',
    }],
    this.isLive= true;
}
console.log(Blog);
let c = new Blog();



























/*const blog ={
			title: '',
			body: '',
			author: '',
			views: '',
			comments: {
				author: '',
				body: '',
			},
			isLive: '',
        }		
		

        let b = blog;
















/*
function Address(str, city,Zcode){
    this.street= str;
    this.city=city;
    this.zipcode= Zcode;
}

let add1 = new Address('a','b','cf');

let add2 = new Address('a','b','c');


function areEqual(add1, add2){
    
   /* for (let key in add1){
            if (add1[key] != add2[key] )
               return 'Value are Different';
    }

*/
  /*
if (
add1.street !== add2.street ||
add1.city !== add2.city ||
add1.zipcode !== add2.zipcode
) 
return 'Value are Different';






return 'Value are SAME';



}

console.log(areEqual(add1, add2));




function areSame(add1, add2){

  return( (add1 == add2) ? true : false) ;

}   

console.log(areSame(add1, add2));




















	/*const address = {
		street: 'Norrbacka',
		city: 'Märsta',
		zipcode: '19545',
	};
	
	const showAddress = function(adrs)
	{
		for(let key in adrs)
			console.log(key +':' + adrs[key]);
	}
	

// factory function
function addressFactory (str, city,Zcode){
    return{
        street: str,
		city, // key and value are SAME
		zipcode: Zcode, 
    };
}

let cTest= addressFactory('norrbacka','marsta','19545');


/*
function addressFactory (){
    return{
        street: 'Norrbacka',
		city: 'Märsta',
		zipcode: '19545', 
    };
}
*/

// constructor function
/*
function Address(){
    this.street= 'Norrbacka';
    this.city= 'Märsta';
    this.zipcode= '19545';

}












/*
	const msg = 'This is my \n' +
                 '\'first\' message'	;

                 const msg1 = `This is my
                 first message..
                 'as you like it'`	;
           

*/













/*const CircleC = new Function('radius',`	
			this.radius = radius;
			this.draw = function(){
			console.log('Draw');
			}	
	`);
	
	const circleX= new CircleC(12);


*/









/*
console.log(countTruthy([1,2,3,null,undefined, 0, false, "",NaN, '', NaN ]));

function countTruthy(arr){
	let count = 0;
	
	for ( let value of arr)
		{
		if( value)
			count++;
        }		
	return count;	

}

console.log(checkSpeed(179));

function checkSpeed(speed)
{

    if (typeof(speed) != "number")
        return NaN;

    if (speed <= 74)
        return 'OK';

    if (speed >= 75 && speed < 180)
    {
          let point = 0;
        point = Math.floor(speed/5) - 14;
        return point;  

    }


    if (speed >= 130)
        return 'Licence Suspended';


}*/