import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { Input, Button } from '@components';
import registerSchema from './schema';
import styles from './styles';
import { NavigationService } from '@services';
import { routesAuth as routes } from '@constants'
import { postUserSignup } from '@state/actions/auth.action';
import { isPending } from '@state/selectors/auth.selectors';

class Register extends PureComponent {
    onSubmit = values => {
        const { onUserSignup } = this.props;
        onUserSignup(values);
    }

    goToLogin = () => NavigationService.navigate(routes.AUTH_LOGIN);

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
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
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    isPending: isPending(state),
})

const mapDispatchToProps = (dispatch) => ({
    onUserSignup: (values) => dispatch(postUserSignup(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
