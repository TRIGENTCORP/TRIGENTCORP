import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Technear Social App</Text>

      <FormInput
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <View style={styles.rowButtonsHolder}>
        <TouchableOpacity style={styles.rememberButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <FormButton
        buttonTitle="Sign In"
        onPress={() => alert("Sign in pressed")}
      />

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => alert("fb button pressed")}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => alert("google button pressed")}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Spline Sans',
    fontSize: 28,
    marginBottom: 10,
    color: '#0C0D11',
  },
  navButton: {
    marginTop: 15,
  },
  rowButtonsHolder: {
    flexDirection: 'row',
    gap: 20,
  },
  rememberButton: {
    padding: 10,
    marginVertical: 35,
    borderColor: '#364D63',
    borderWidth: 1,
    borderRadius: 8,
  },
  forgotButton: {
    padding: 10,
    marginVertical: 35,
    borderColor: '#364D63',
    borderWidth: 1,
    borderRadius: 8,
  },
  createButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Spline Sans',
  },
});
