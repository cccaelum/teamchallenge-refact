import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const Sum = () => setResult(parseFloat(num1) + parseFloat(num2));
  const Subtraction = () => setResult(parseFloat(num1) - parseFloat(num2));
  const Multiplication = () => setResult(parseFloat(num1) * parseFloat(num2));
  const Division = () => setResult(parseFloat(num1) / parseFloat(num2));

  return (
    <div className="calculator">
      <input 
        type="number" 
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)} 
      />
      <div className="calculator-buttons">
        <button onClick={Sum}>Sumar</button>
        <button onClick={Subtraction}>Restar</button>
        <button onClick={Multiplication}>Multiplicar</button>
        <button onClick={Division}>Dividir</button>
      </div>
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
}

export default Calculator;
