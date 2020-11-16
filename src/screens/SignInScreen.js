import React, { useState } from 'react';
import styled from 'styled-components/native';

import Text from '../components/Text';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Main>
        <Text title semi center>
          Welcome back
        </Text>
      </Main>

      <Auth>
        <AuthContainer>
          <AuthTitle>Email adress</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email.trim())}
            value={email}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Password</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password.trim())}
            value={password}
          />
        </AuthContainer>
      </Auth>

      <SignInContainer disabled={isLoading}>
        {isLoading ? (
          <Loading />
        ) : (
          <Text bold center color="#fff">
            Sign In
          </Text>
        )}
      </SignInContainer>

      <SignUp onPress={() => navigation.navigate('SignUp')}>
        <Text small center>
          New to SocialApp?{' '}
          <Text bold color="#8022d9">
            Sign Up!
          </Text>
        </Text>
      </SignUp>

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default SignInScreen;

// STYLES
const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 192px;
`;

const Auth = styled.View`
  margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 48px;
`;

const SignInContainer = styled.TouchableOpacity`
  height: 48px;
  margin: 0 32px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.disabled ? '#8e93a1' : '#8022d9')};
  border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: '#fff',
  size: 'small',
}))``;

const SignUp = styled.TouchableOpacity`
  margin-top: 16px;
`;

const HeaderGraphic = styled.View`
  width: 100%;
  position: absolute;
  top: -50px;
  z-index: -100;
`;

const RightCircle = styled.View`
  position: absolute;
  top: -200px;
  right: -100px;
  background-color: #8022d9;
  width: 400px;
  height: 400px;
  border-radius: 200px;
`;

const LeftCircle = styled.View`
  position: absolute;
  top: -50px;
  left: -50px;
  background-color: #23a6d5;
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

const StatusBar = styled.StatusBar``;
