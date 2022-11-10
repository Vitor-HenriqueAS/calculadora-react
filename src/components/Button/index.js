
import { ButtonContainer } from './styles';

const Button = ({label, onClick, title}) => {
  return (
			<ButtonContainer onClick={onClick} type='button' title={title}>
				{label}
			</ButtonContainer>
  );
}

export default Button;
