let expression = '';

function append(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        const result = math.evaluate(expression);
        document.getElementById('display').value = result;
        document.getElementById('expression').value = expression;
        expression = '';
    } catch (e) {
        document.getElementById('display').value = 'Invalid Expression';
        document.getElementById('expression').value = expression;
        console.log(e);
        expression = '';
    }
}

function clearResult() {
    console.log('Clear')
    expression = '';
    document.getElementById('display').value = '0';
    document.getElementById('expression').value = '';
}