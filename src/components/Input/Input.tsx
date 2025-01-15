import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

type Props = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
  };
  
  export const Input: React.FC<Props> = (props) => {
    return <StyledInput {...props} />;
  };

