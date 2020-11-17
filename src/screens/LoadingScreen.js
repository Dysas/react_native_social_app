import React, { useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import { UserContext } from '../context/UserContext';
import { FirebaseContext } from '../context/FirebaseContext';

import Text from '../components/Text';

const LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = await firebase.getCurrentUser();
      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);
        setUser({
          isLoggedIn: true,
          email: userInfo.email,
          uid: user.uid,
          username: userInfo.username,
          profilePhotoUrl: userInfo.profilePhotoUrl,
        });
      } else {
        setUser((state) => ({
          ...state,
          isLoggedIn: false,
        }));
      }
    }, 500);
  }, []);

  return (
    <LoadingScreenContainer>
      <Title title color="#fff">
        SocialApp
      </Title>

      <LottieView source={require('../../assets/loadingAnimation.json')} autoPlay loop style={{ width: '60%' }} />
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

const Title = styled(Text)`
  letter-spacing: 5px;
  margin-bottom: 20px;
  color: #fff;
`;
