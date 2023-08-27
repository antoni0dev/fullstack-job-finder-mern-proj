import { FC } from 'react';
import { styled } from 'styled-components';

interface Props {
  variant?: 'info' | 'success' | 'error';
  message: string;
}

const bgColors = {
  info: '#a3a3a3',
  success: '#a3e635',
  error: '#f87171',
};

const Message: FC<Props> = ({ variant = 'info', message }) => {
  return <StyledMessage variant={variant}>{message}</StyledMessage>;
};

const StyledMessage = styled.p<{ variant: 'info' | 'success' | 'error' }>`
  text-align: left;
  color: white;
  margin-top: 2px;
  border-radius: 8px;
  font-size: 10px;
  padding: 3px 4px;
  background-color: ${(props) => bgColors[props.variant || 'info']};
`;

export default Message;
