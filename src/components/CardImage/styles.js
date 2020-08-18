import { StyleSheet } from 'react-native';
import { colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        padding: 0,
        marginBottom: 5,
        borderRadius: 10,
        maxHeight: 150,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.5,
        backgroundColor: colors.BLACK,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});

export default styles;
