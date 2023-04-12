
// prompt will work only in browser. But if one wants prompt, they have to use node modules
//const name = prompt("Enter your Name:")
//console.log("Hello", name)
import readLineAsync from "read_user_input"

const startApp = async() => {
    const userRes = await readLineAsync("How are you? ");
    readline.close();
    console.log("Your response was: " + userRes + " — Thanks!");
  }

startApp();