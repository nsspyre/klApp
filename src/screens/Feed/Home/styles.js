import { StyleSheet } from 'react-native';
import { colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LAYOUT_GRAY,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 60,
    },
    hrContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    hrTitle: {
        fontSize: 18,
        color: 'gray',
        marginHorizontal: 15,
    },
    hr: {
        flex: 1,
        height: 0,
        borderTopColor: 'gray',
        borderTopWidth: 2,
    },
    cardContent: {
        flexDirection: 'row',
        position: 'relative',
        flex: 1,
    },
    orderCardImgHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    orderCardImg: {
        width: 60,
        height: 60,
    },
    cardInfo: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    cardInfoTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1,
        marginBottom: 8,
    },
    cardInfoAmount: {
        fontWeight: '700',
    },
    cardInfoOrderDate: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        fontSize: 12,
        color: 'gray',
        fontStyle: 'italic',
    },
    cardInfoText: {
        marginBottom: 5,
    }
});

export default styles;
