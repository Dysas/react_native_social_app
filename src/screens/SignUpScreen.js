import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { FirebaseContext } from '../context/FirebaseContext';
import { UserContext } from '../context/UserContext';

import Text from '../components/Text';

const SignUpScreen = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState();
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      return status;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    } catch (error) {
      console.log('Error @pickImage: ', error);
    }
  };

  const addProfilePhoto = async () => {
    const status = await getPermission();

    if (status !== 'granted') {
      alert('We need permission to access your camera roll.');
      return;
    }

    pickImage();
  };

  const signUp = async () => {
    setIsLoading(true);

    const user = { username, email, password, profilePhoto };

    try {
      const createdUser = await firebase.createUser(user);

      setUser({ ...createdUser, isLoggedIn: true });
    } catch (error) {
      console.log('Error @signUp: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Sign up to get started
        </Text>
      </Main>

      <ProfilePhotoContainer onPress={addProfilePhoto}>
        {profilePhoto ? (
          <ProfilePhoto source={{ uri: profilePhoto }} />
        ) : (
          <DefaultProfilePhoto>
            <AntDesign name="plus" size={24} color="#fff" />
          </DefaultProfilePhoto>
        )}
      </ProfilePhotoContainer>

      <Auth>
        <AuthContainer>
          <AuthTitle>Username</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(username) => setusername(username.trim())}
            value={username}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Email adress</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
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

      <SignUpContainer onPress={signUp} disabled={isLoading}>
        {isLoading ? (
          <Loading />
        ) : (
          <Text bold center color="#fff">
            Sign Up
          </Text>
        )}
      </SignUpContainer>

      <SignUp onPress={() => navigation.navigate('SignIn')}>
        <Text small center>
          Already have an account?{' '}
          <Text bold color="#8022d9">
            Sign In
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

export default SignUpScreen;

// STYLES
const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 160px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
  background-color: #e1e2e6;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-self: center;
  margin-top: 16px;
  overflow: hidden;
`;

const DefaultProfilePhoto = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ProfilePhoto = styled.Image`
  flex: 1;
`;

const Auth = styled.View`
  margin: 16px 32px 32px;
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

const SignUpContainer = styled.TouchableOpacity`
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
