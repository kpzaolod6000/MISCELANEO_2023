

function validParentheses(parenStr) {
    
    if (parenStr.length === 0) return true;
    let stack = [];
    stack.push(parenStr[0]);
    for (let i = 1; i < parenStr.length; i++) {
        const element = parenStr[i];

        if (stack.length > 0 && element !== stack[stack.length-1] && stack[stack.length-1] + element === "()") stack.pop();
        else stack.push(element);
    }
    return stack.length === 0 ? true : false;
}

console.log(validParentheses(""));

