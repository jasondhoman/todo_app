function doMath(mathExpression) {
  // let exp_parts = mathExpression
  //   .replaceAll('*', 'x')
  //   .replaceAll(' ', '')
  //   .split('');
  // console.log(exp_parts);
  // let operators = ['x', '+', '/', '-'];
  // console.log(Parser.eval(mathExpression));
  // let value = 0;
  // let x = 0;
  // let y = 0;
  // let calc_values = [];
  // let operator = '';
  // for (let i = 0; i <= exp_parts.length; i++) {
  //   if (operator && operators.indexOf(exp_parts[i])) {
  //     calc_values.push(calculate);
  //   }
  //   if (operators.indexOf(exp_parts[i])) {
  //     x = typeof exp_parts[i - 1] == 'number' ?? 0;
  //     operator = exp_parts[i];
  //   }
  //   // let x = calculate(1, 2);
  // }

  let exp_parts = mathExpression.replaceAll(' ', '').split('');
  let exploded_parts = [];
  let numbers = ['0', '1', '2', '3'];
  let changed = true;
  let i = 0;
  let x = 0;
  let y = 0;
  let op = '';
  while (changed) {
    if (i >= exp_parts) {
      i = 0;
      changed = false;
    }
    if (!isNaN(exp_parts[i])) {
      console.log(exp_parts[i]);
    }

    i++;
  }
  for (let i = 0; i <= exp_parts.length; i++) {
    console.log(exp_parts[i]);
    // exploded_parts.push(exp_parts[i].split(')'));
  }

  return exp_parts;
  // ((3*3) + 1) / 5
  // function calculate(x, y, operator) {
  //   let operators = ['x', '+', '/', '-'];
  //   let value = 0;
  //   console.log(operator);
  //   if (!operators.indexOf(operator)) {
  //     return 0;
  //   }
  //   switch (operator) {
  //     case '+':
  //       value = x + y;
  //       break;
  //     case '-':
  //       value = x - y;
  //       break;
  //     case '/':
  //       value = x / y;
  //       break;
  //     case 'x':
  //       value = x * y;
  //   }
  //   return value;
  // }
}

console.log(doMath('(5+3) * (6/2)'));
