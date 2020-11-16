import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import Text from '../components/Text';

const LoadingScreen = () => {
  return (
    <LoadingScreenContainer>
      <Text title color="#fff">
        SocialApp
      </Text>

      <LottieView source={require('../../assets/loadingAnimation.json')} autoPlay loop style={{ width: '100%' }} />
    </LoadingScreenContainer>
  );
};
export default LoadingScreen;

// STYLES
const LoadingScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #222;
`;
