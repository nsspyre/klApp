import { StyleSheet, Platform } from 'react-native';
import { colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: colors.WHITE,
    },
    header: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 40 : 10,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    form: {
        width: '90%',
        height: '50%',
        position: 'relative',
    },
    textMargin: {
        marginBottom: 20
    },
    btnHolder: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0
    }
});

export default styles;
