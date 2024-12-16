import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const CreateAccount = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Create your account</Text>

      <FormInput
        placeholderText="First name"
        iconType="user"
        keyboardType="text"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        placeholderText="Last name"
        iconType="user"
        keyboardType="text"
        autoCapitalize="none"
        autoCorrect={false}
      />

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

      <FormInput
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.colorTextPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.colorTextPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.colorTextPrivate}> and </Text>
        <Text style={[styles.colorTextPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <FormButton
        buttonTitle="Agree & join"
        onPress={() => alert("sign up pressed")}
      />

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Continue with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Continue with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FAFA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Spline Sans',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  colorTextPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Spline Sans',
    color: '#536880',
  },
});
