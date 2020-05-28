import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { Formik } from 'formik';

import styles from './style';
import { Button, Input } from '@components'
import { userLogin } from '@state/actions/auth.action';
import { isPending, error as authError } from '@state/selectors/auth.selectors';
import loginSchema from './schema';
import { NavigationService } from '@services';
import { routesAuth as routes } from '@constants';

class Login extends PureComponent {
  onSubmit = values => {
    const { userLogin } = this.props;
    userLogin(values);
  }

  goToRegister = () => {
    NavigationService.navigate(routes.AUTH_REGISTER);
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
              email: '',
              password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={this.onSubmit}
          >
            {props => (
              <View style={styles.form}>
                <Input
                  value={props.values.username}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  autoCapitalize="none"
                  placeholder="Correo electrónico"
                  error={error && true}
                  caption={error ? error : null}
                  label="Correo electrónico"
                />
                <Input
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  secureTextEntry
                  placeholder="Contraseña"
                  error={error && true}
                  caption={error ? error : null}
                  label="Contraseña"
                />
                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                <View style={styles.btnHolder}>
                  <Button
                    onPress={props.handleSubmit}
                    text="Login"
                    disabled={props.dirty && !props.isValid ? true : false}
                  />
                </View>
                <View style={styles.btnHolder}>
                  <Button
                    status="basic"
                    text="Registrarse"
                    onPress={this.goToRegister}
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
        {this.renderInputs(loading, error)}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: isPending(state),
  error: authError(state),
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (values) => dispatch(userLogin(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
