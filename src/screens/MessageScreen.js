import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const MessageScreen = () => {
  return (
    <MessageScreenContainer>
      <Text>MessageScreen</Text>
    </MessageScreenContainer>
  );
};
export default MessageScreen;

// STYLES
const MessageScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
