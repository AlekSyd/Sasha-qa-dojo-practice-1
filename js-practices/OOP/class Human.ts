class Human {
   readonly eyesColor: string;
    readonly height: number;
    protected weight: number;
    protected age: number;

    constructor(eyesColor: string, height: number, weight: number, age: number){
        this.eyesColor = eyesColor;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }

    run(){
        console.log(`Man with ${this.eyesColor}, ${this.height}, ${this.weight} is running `)
    };

    take(){
        console.log(`Man of age ${this.age} took the apple`)
    }
}

const human = new Human('blue', 185, 90, 35);

human.run();
human.take()