module.exports = async (params) => {
    const { quickAddApi } = params;
    
    // Input prompt - get text from user
    const name = await quickAddApi.inputPrompt("Enter your name:");
    
    // Yes/No prompt
    const confirmed = await quickAddApi.yesNoPrompt("Are you sure?");
    
    // Suggester - let user choose from options
    const choice = await quickAddApi.suggester(
        ["Option 1", "Option 2", "Option 3"],  // Display values
        ["value1", "value2", "value3"]         // Actual values
    );
    
    // Wide input prompt - for longer text
    const longText = await quickAddApi.wideInputPrompt("Enter description:");
    
    // Checkbox prompt - multiple selections
    const selections = await quickAddApi.checkboxPrompt(
        ["Task 1", "Task 2", "Task 3"]
    );
};
