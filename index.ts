import * as readline from "readline";

interface Person {
  name: string;
  favoriteLanguage: string;
}

console.log("About Me Program");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your favorite language: ", (favoriteLanguage) => {

    const person: Person = {
      name: name,
      favoriteLanguage: favoriteLanguage,
    };

    console.log(name);
    console.log(favoriteLanguage);

    rl.close();
  });
});