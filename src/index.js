const messages = [
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I used to play piano by ear, but now I use my hands.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why was the math book sad? Because it had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'd tell you a joke about UDP, but you probably wouldn't get it.",
    "Why did the programmer quit his job? Because he didn't get arrays!",
];
  
const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}
  
module.exports = {
    funnyCommit
};