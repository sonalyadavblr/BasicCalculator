import Stack from './Stack';


function applyOperation(val1, val2, op)
{
    var answer = 0;
    switch ( op )
    {
        case '+':
            answer = val1 + val2;
            break;
        case '-':
            answer = val1 - val2;
            break;  
        case '*':
            answer = val1 * val2;
            break; 
        case '/':
            answer = val1 / val2;
            break; 
        case '%'://modulo operation
            answer = val1 % val2;
            break;
        default:
            break;            
    }
    return answer;
}

function precedence(op)
{
    if ( op === '+' || op === '-')
        return 1;
    else if ( op === '*' || op === '/'|| op === '%')
        return 2;
    return 0;
}

function IsOperator(op)
{
    if (op === '+' || op === '-' || op === '*' || op === '/' || op === '%')
    {
        return true;
    }
    return false;
}

function IsDigit(ch)
{
    if (ch >= '0' && ch <='9')
        return true;
    else
        return false;
}

class ExpressionParser
{
    constructor(expr)
    {
        this.expression = expr;
        this.exprLength = expr.length;
        this.currIndex = 0;
    }

    step()
    {
        var token = '';
        var counter = 0;
        for (; this.currIndex < this.exprLength; this.currIndex++)
        {
            if (IsDigit(this.expression[this.currIndex]))
            {
                token += this.expression[this.currIndex];
            }
            else if (IsOperator(this.expression[this.currIndex]))
            {
                if (counter === 0)
                {
                    token =  this.expression[this.currIndex];
                    this.currIndex++
                }
                break;
            }
            else
            {
                console.log("Something wrong");
            }
            counter++;
        }
        console.log(token);
        return token;
    }

    hasNext()
    {
        if (this.currIndex === this.exprLength)
            return false;
        return true;
    }
}

export function infixEvalution ( exp )
{
    let numStack = new Stack();
    let opStack  = new Stack();
    let parser   = new ExpressionParser(exp);

    while (parser.hasNext())
    {
        var token = parser.step();
        if (IsOperator(token))
        {
            while (!opStack.isEmpty() && precedence(opStack.top()) >= precedence(token))
            {
                var value2 = numStack.pop();
                var value1 = numStack.pop();
                var opr = opStack.pop();
                var result = applyOperation(value1, value2, opr);
                numStack.push(result);
            }
            opStack.push(token);
        }
        else
        {
            let val = parseFloat(token);
            numStack.push(val);
        }
    }

    while (!opStack.isEmpty())
    {
        let value2 = numStack.pop();
        let value1 = numStack.pop();
        let opr = opStack.pop();
        let result = applyOperation(value1, value2, opr);
        numStack.push(result);
    }

    return numStack.pop();
}