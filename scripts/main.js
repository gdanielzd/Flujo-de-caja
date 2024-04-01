function calculateCashFlow() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const cashFlow = income - expenses;

    document.getElementById('result').innerHTML = `Flujo de Caja: $${cashFlow.toFixed(2)}`;
}
