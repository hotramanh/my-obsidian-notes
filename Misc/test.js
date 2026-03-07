const name = await quickAddApi.inputPrompt(
    "What's your name?",
    "Enter your full name",
    "John Doe"
);

if (name) {
    console.log(`Hello, ${name}!`);
}