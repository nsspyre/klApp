import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Formik } from 'formik';

import { Input, Button } from '@components';
import registerSchema from './schema';
import styles from './styles';
import { NavigationService } from '@services';
import { routesAuth as routes } from '@constants'

class Register extends PureComponent {
    onSubmit = values => {
        console.log('values', values);
    }

    goToLogin = () => NavigationService.navigate(routes.AUTH_LOGIN);

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button
                        onPress={this.goToLogin}
                        appearance='ghost'
                        text="Iniciar sesión"
                        size="large"
                    />
                </View>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={registerSchema}
                    onSubmit={this.onSubmit}
                >
                    {props => (
                        <View style={styles.form}>
                            <Text style={styles.textMargin} category="h3">Registrate</Text>
                            <Input
                                value={props.values.username}
                                onChangeText={props.handleChange('username')}
                                onBlur={props.handleBlur('username')}
                                autoCapitalize="none"
                                placeholder="Username"
                                label="Username"
                                autoCompleteType="username"
                            />
                            <Input
                                value={props.values.email}
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                autoCapitalize="none"
                                placeholder="e.g john@mail.com"
                                label="Email"
                                autoCompleteType="email"
                            />
                            <Input
                                value={props.values.password}
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                autoCapitalize="none"
                                placeholder="Password"
                                label="Password"
                                secureTextEntry
                                autoCompleteType="password"
                            />

                            <View style={styles.btnHolder}>
                                <Button
                                    onPress={props.handleSubmit}
                                    text="Registrarse"
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        )
    }
}

export default Register;
