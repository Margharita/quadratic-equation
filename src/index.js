module.exports = function solveEquation(equation) {
  // your implementation

    var newArr = [];
    var arr = equation.split(' ');
    var a = (arr[0]);
    var b = (arr[3]+ arr[4]);
    var c = (arr[7]+ arr[8]);
    var d = (b * b - 4 * a * c);    

    if (d>0)
    {
        var d = Math.round(Math.sqrt(d));
        newArr[0] = ((-b)+d)/(2*a);
        newArr[1] = ((-b)-d)/(2*a);
    }

    else
    {
        return null;
    }

    Math.round(newArr);
    newArr.sort(compareNumeric);
    return newArr;
}

function compareNumeric(x, y)
{
    return x - y;
}