import { StyleSheet } from 'react-native';
import { colors } from '@constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    imgContainer: {
        padding: 10,
        marginTop: 60,
    },
    img: {
        width: 300,
        height: 300,
        marginLeft: 10,
    },
    form: {
        alignSelf: 'stretch',
        padding: 35,
    },
    inputs: {
        borderWidth: 3,
        borderColor: '#bdb230',
        marginBottom: 20,
        padding: 15,
        borderRadius: 40,
        fontSize: 18
    },
    forgotPassword: {
        alignSelf: 'center',
        padding: 10,
    },
    forgotPasswordText: {
        color: colors.ORANGE,
        fontWeight: 'bold',
    },
    btnHolder: {
        marginVertical: 10
    },
    guestBtn: {
        backgroundColor: '#BDBDBD',
        borderColor: '#BDBDBD',
    },
    line: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginTop: 30,
        marginHorizontal: 25,
        marginBottom: 10
    },
    textHolder: {
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    registerLabel: {
        fontSize: 17,
        padding: 0,
        alignSelf: 'center',
    },
    activityHolder: {
        marginTop: 100
    },
    errorText: {
        alignSelf: 'center',
        color: 'red',
        marginTop: -10,
        marginBottom: 10
    },
    margin: {
        marginBottom: 20
    }
})