import { StyleSheet } from 'react-native';
import { colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.ORANGE,
        borderRadius: 4,
        padding: 12
    },
    modalBackdrop: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;
