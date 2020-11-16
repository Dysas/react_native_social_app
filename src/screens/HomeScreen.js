import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <Text>HomeScreen</Text>
    </HomeScreenContainer>
  );
};
export default HomeScreen;

// STYLES
const HomeScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
