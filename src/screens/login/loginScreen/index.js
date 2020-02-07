import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  Button as NaviteButton,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { Formik } from 'formik';

import styles from './style';
import { Button, Input } from '@components'
import { userLogin } from '@state/actions/auth.action';
import { isAuthLoading, error as authError } from '@state/selectors/auth.selectors';
import loginSchema from './schema';

class Login extends Component {
  onSubmit = values => {
    dispatch(userLogin(values))
  }

  renderInputs = (loading, error) => {
    if (loading) {
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
        <>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={this.onSubmit}
          >
            {props => (
              <View style={styles.form}>
                <Input
                  value={props.values.username}
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  style={styles.inputs}
                  autoCapitalize="none"
                  placeholder="Username"
                />
                <Input
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
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
                  <Button
                    onPress={props.handleSubmit}
                    text="Login"
                  />
                </View>
                <View style={styles.btnHolder}>
                  <Button
                    style={styles.guestBtn}
                    text="Continue as guest"
                  />
                </View>
                <View style={styles.line} />
                <View style={styles.textHolder}>
                  <Text style={styles.registerLabel}>
                    Dont have an account yet?
                  </Text>
                  <NaviteButton
                    title="Signup"
                    onPress={() => { }}
                  />
                </View>
              </View>
            )}
          </Formik>
        </>
      )
    }
  }

  render() {
    const { loading, error } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../../assets/imgs/logo.jpeg')}
            style={styles.img}
          />
        </View>
        {renderInputs(loading, error)}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: isAuthLoading(state),
  error: authError(state),
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (values) => dispatch(userLogin(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
