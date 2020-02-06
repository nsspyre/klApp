import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  ActivityIndicator
} from 'react-native';

import styles from './style';
import { PrimaryBtn } from '@components';
import { userLogin } from '@state/actions/auth.action';
import useForm from '../../../hooks/useForm';
import { isAuthLoading, error as authError } from '@state/selectors/auth.selectors';

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: ''
  }

  const isLoading = useSelector(state => isAuthLoading(state));
  const error = useSelector(state => authError(state));

  const onSubmit = values => {
    dispatch(userLogin(values))
  }

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  const renderInputs = () => {
    if (isLoading) {
      return (
        <View style={[styles.container, styles.activityHolder]}>
          <ActivityIndicator
            size="large"
            color="#F4A018"
          />
        </View>
      )
    } else {
      return (
        <View style={styles.form}>
          <TextInput
            value={inputs.username}
            onChangeText={subscribe('username')}
            style={styles.inputs}
            autoCapitalize="none"
            placeholder="Username"
          />
          <TextInput
            value={inputs.password}
            onChangeText={subscribe('password')}
            style={styles.inputs}
            secureTextEntry={true}
            placeholder="Password"
          />
          {error && (
            <View>
              <Text style={styles.errorText}>Oops! {error}</Text>
            </View>
          )}
          <View>
            <Text style={styles.passwordText}>forgot password?</Text>
          </View>
          <View style={styles.btnHolder}>
            <PrimaryBtn
              onPress={handleSubmit}
              text="Login"
            />
          </View>
          <View style={styles.btnHolder}>
            <PrimaryBtn
              style={styles.guestBtn}
              text="Continue as guest"
            />
          </View>
          <View style={styles.line} />
          <View style={styles.textHolder}>
            <Text style={styles.registerLabel}>
              Dont have an account yet?
            </Text>
            <Button
              title="Signup"
              onPress={() => { }}
            />
          </View>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../../assets/imgs/logo.jpeg')}
          style={styles.img}
        />
      </View>
      {renderInputs()}
    </View>
  )
}