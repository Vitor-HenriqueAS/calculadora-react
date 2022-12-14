
import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
	const [currentNumber, setcurrentNumber] = useState('0');
	const [firstNumber, setFirstNumber] = useState('0');
	const [operation, setOperation] = useState('');

	const handleOnClear = () => {
		setcurrentNumber('0');
		setFirstNumber('0');
		setOperation('');
	}

	const handleAddNumber = (number) => {
		setcurrentNumber(prev => `${prev === '0'? '' : prev}${number}`)
	}

	const handleSumNumbers = () => {
		if(firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setcurrentNumber('0')
			setOperation('+')
		}	else {
			const sum = Number(firstNumber) + Number(currentNumber);
			setcurrentNumber(String(sum))
			setOperation('');
		}
	}

	const handleMinusNumbers = () => {
		if(firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setcurrentNumber('0')
			setOperation('-')
		}	else {
			const sum = Number(firstNumber) - Number(currentNumber);
			setcurrentNumber(String(sum))
			setOperation('');
		}
	}

	const handleMultNumbers = () => {
		if(firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setcurrentNumber('0')
			setOperation('*')
		}	else {
			const sum = Number(firstNumber) * Number(currentNumber);
			setcurrentNumber(String(sum))
			setOperation('');
		}
	}

	const handleDivNumbers = () => {
		if(firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setcurrentNumber('0')
			setOperation('/')
		}	else {
			const sum = Number(firstNumber) / Number(currentNumber);
			setcurrentNumber(String(sum))
			setOperation('');
		}
	}

	const handleRestOfDivNumbers = () => {
		if(firstNumber === '0') {
			setFirstNumber(String(currentNumber));
			setcurrentNumber('0')
			setOperation('%')
		}	else {
			const sum = Number(firstNumber) % Number(currentNumber);
			setcurrentNumber(String(sum))
			setOperation('');
		}
	}

	const handleEquals = () => {
		if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
			switch(operation) {
				case('+'):
					handleSumNumbers();
					break;
				case('-'):
					handleMinusNumbers();
					break;
				case('*'):
					handleMultNumbers();
					break;
				case('/'):
					handleDivNumbers();
					break;
				case('%'):
					handleRestOfDivNumbers();
					break;
				default:
					break;
			}
		}
	}

  return (
    <Container>
			<Content>
				<Input value={currentNumber}/>

					<Row>
						<Button label="C" onClick={handleOnClear} title="Limpa a Calculadora" />
						<Button label="/" onClick={handleDivNumbers}  title="Operador de Divis??o"/>
						<Button label="x" onClick={handleMultNumbers}  title="Operador de Multiplica????o"/>
						<Button label="%" onClick={handleRestOfDivNumbers}  title="Operador de Resto da Divis??o"/>
					</Row>

					<Row>
						<Button label="7" onClick={() => handleAddNumber('7')}  title=""/>
						<Button label="8" onClick={() => handleAddNumber('8')}  title=""/>
						<Button label="9" onClick={() => handleAddNumber('9')}  title=""/>
						<Button label="+" onClick={handleSumNumbers}  title="Operador de Adi????o"/>
					</Row>

					<Row>
						<Button label="4" onClick={() => handleAddNumber('4')}  title=""/>
						<Button label="5" onClick={() => handleAddNumber('5')}  title=""/>
						<Button label="6" onClick={() => handleAddNumber('6')}  title=""/>
						<Button label="-" onClick={handleMinusNumbers}  title="Operador de Subtra????o"/>
					</Row>

					<Row>
						<Button label="1" onClick={() => handleAddNumber('1')}  title=""/>
						<Button label="2" onClick={() => handleAddNumber('2')}  title=""/>
						<Button label="3" onClick={() => handleAddNumber('3')}  title=""/>
						<Button label="=" onClick={handleEquals} title="Realiza o Calculo"/>
					</Row>
			</Content>
    </Container>
  );
}

export default App;
