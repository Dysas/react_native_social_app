import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const ProfileScreen = () => {
  return (
    <ProfileScreenContainer>
      <Text>ProfileScreen</Text>
    </ProfileScreenContainer>
  );
};
export default ProfileScreen;

// STYLES
const ProfileScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
