import { StyleSheet } from 'react-native';
import { colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    card: {
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 35,
        color: colors.WHITE,
        fontWeight: 'bold',
    },
    cardDescriptionSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardDescription: {
        fontWeight: '700',
    }
});

export default styles;
