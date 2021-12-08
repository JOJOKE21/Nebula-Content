class movies{
    constructor(name,year,genres,creator){
        this.name = name;
        this.year = year;
        this.genres = genres;
        this.creator = creator;
    }
    beWatched(){
        console.log(`Hey im watching ${this.name}`)
    }
    beCrit(){
        console.log(`I give this movie a ${Math.ceil(Math.random()*10)} out of 10`)
    }
}

const movie = new movies("Scary Movie", 2000,"Comedy/Horror","Eric L. Gold; Lee R. Mayes")

console.log(movie)

class actors extends movies{
    constructor(name,year,genres,creator,age,networth,realname){
        super(name,year,genres,creator)
        this.name = name;
        this.age = age;
        this.networth = networth;
        this.realname = realname;
    }
    Act(){
        console.log(`Hello my name is ${this.name} but my real name is ${this.realname}`)
    }
}

const actor = new actors("The Rock","","","","49","320 million","Dwayne Johnson")

console.log(actor)

class jobs extends actors{
    constructor(name,year,genres,creator,age,networth,realname,title,perhour){
    super(name,year,genres,creator,age,networth,realname)
    this.title = title;
    this.perhour = perhour;
    }
    Work(){
        console.log()
    }
}


