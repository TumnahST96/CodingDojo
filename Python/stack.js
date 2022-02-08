let stack = []
var string = "[()({aaa7})]"
var t = false;


for (let i = 0; i < string.length; i++) {
    if (string[i] == ')' || string[i] == '}' || string[i] == ']') {
        if (stack.length == 0) {
            break;
        }
        var s = stack.pop()

        stack.push(s)
        if (string[i] == ')' && s == ('(')) {
            t = true;
            stack.pop()

        } else if (string[i] == '}' && s == '{') {
            t = true;
            stack.pop()
        } else if (string[i] == ']' && s == '[') {
            t = true;
            stack.pop()
        } else {
            t = false;
            break;
        }
    } else {

        if (string[i] == '(' || string[i] == '{' || string[i] == '[')
            stack.push(string[i])
    }
}
if (stack.length == 0)
    console.log(t)
else console.log(t)