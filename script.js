//Day-6


//Q1-https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
console.log("Q1-Movie")

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getPG(movies) {
      return movies.filter((movie) => {
        return movie.rating.startsWith("PG");
      });
    }
  }
  
  let movie1 = new Movie("Avatar", "20th Century Fox", "PG13");
  let movie2 = new Movie("The Dark Knight", "Warner Bros. Pictures", "PG13");
  let movie3 = new Movie("Joker", "Warner Bros. Pictures", "R");
  let movie4 = new Movie("The Martian", "Scott Free Productions", "PG13");
  let movie5 = new Movie("Catch Me If You Can", "Amblin Entertainment", "PG13");
  let movie6 = new Movie("IT", "New Line Cinema", "R");
  let movie7 = new Movie("Avatar", "20th Century Fox", "PG13");
  let movie8 = new Movie("Casino Royale", "Eon Productions", "PG13");
  
  console.log(
    movie1.getPG([movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8])
  );
  console.log(movie8);
  
 //################################################################################################################
  
 //Q2-"https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md"
 console.log("Q2-Circle")

 class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    get getRadius() {
      return this.radius;
    }
  
    set setRadius(radius) {
      this.radius = radius;
    }
  
    get getColor() {
      return this.color;
    }
  
    set setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.getRadius}, color=${this.getColor}]`;
    }
  
    get getArea() {
      return `Circle Are= ${Math.PI * Math.pow(this.getRadius, 2)}`;
    }
  
    get getCircumference() {
      return `Circumfrence= ${2 * Math.PI * this.getRadius}`;
    }
  }
  
  let circle1 = new Circle(4.2, "red");
  
  circle1.setRadius = 5.5;
  console.log(circle1.getRadius);
  
  circle1.setColor = "green";
  console.log(circle1.getColor);

  console.log(circle1.toString());
 
  console.log(circle1.getArea);
  
  console.log(circle1.getCircumference);

  
  
 //################################################################################################################ 
 
 
  // Q3-Write a “person” class to hold all the details.

console.log("Q3-Write a “person” class to hold all the details")

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    set setCollege(collegeName) {
      this.college = collegeName;
    }
  
    get getCollege() {
      return this.college;
    }
  
    set setOccupation(work) {
      this.occupation = work;
    }
  
    get getOccupation() {
      return this.occupation;
    }
  
    set setLocation(city) {
      this.location = city;
    }
  
    get getLocation() {
      return this.setLocation;
    }
  }
  
  const person1 = new Person("AMEER", "ABBAS", 25);
  person1.setCollege = "AMITY University";
  person1.setOccupation = "NOT YET WORKING";
  person1.setLocation = "KERALA";
  console.log(person1);
  
 //################################################################################################################ 


//Q4-write a class to calculate the uber price.
console.log("Q4-write a class to calculate the uber price")

  class UberPrice {
    constructor(fixCharge = 50, perKm, tollCharges = false) {
      this.fixCharge = fixCharge;
      this.perKm = perKm;
      this.tollCharges = tollCharges;
    }
  
    set setDistanceTravelled(distance) {
      this.distance = distance;
    }
  
    get getDistanceTravelled() {
      return this.distance;
    }
  
    totalBillGenerated() {
      return (
        this.getDistanceTravelled * this.perKm +
        this.fixCharge +
        (this.tollCharges === true ? 200 : 0)
      );
    }
  }

  let ur1 = new UberPrice(undefined, 12);
  let ur2 = new UberPrice(undefined, 14, true);
  
  ur1.setDistanceTravelled = 10;
  console.log(ur1.totalBillGenerated());

  
  ur2.setDistanceTravelled = 26;
  console.log(ur2.totalBillGenerated());
 