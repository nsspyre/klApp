import { StyleSheet } from 'react-native';
import { colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LAYOUT_GRAY,
        paddingHorizontal: 20,
    },
    hrContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    hrTitle: {
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
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginTop: 20,
    },
    cardBody: {
        height: 180,
        marginBottom: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlayInfo: {
        zIndex: 10,
        position: 'absolute',
    },
    overlayInfoTopLabel: {
        zIndex: 12,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 2,
    },
    overlayInfoBottomLabel: {
        zIndex: 12,
        fontSize: 18,
        color: 'white'
    },
});

export default styles;
