import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const NotificationScreen = () => {
  return (
    <NotificationScreenContainer>
      <Text>NotificationScreen</Text>
    </NotificationScreenContainer>
  );
};
export default NotificationScreen;

// STYLES
const NotificationScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
