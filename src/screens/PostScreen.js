import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const PostScreen = () => {
  return (
    <PostScreenContainer>
      <Text>PostScreen</Text>
    </PostScreenContainer>
  );
};
export default PostScreen;

// STYLES
const PostScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
