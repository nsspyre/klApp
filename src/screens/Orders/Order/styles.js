import { StyleSheet } from 'react-native';
import { colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '20%',
    },
    collapseHeader: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: colors.WHITE,
    },
    topHeader: {
        width: '100%',
        marginBottom: 20,
    },
    imgHolder: {
        flex: 3,
        position: 'relative',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.5,
        backgroundColor: colors.BLACK,
        width: '100%',
        height: '100%',
    },
    topHeaderDescription: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: -20,
        borderRadius: 8,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK_SHADOW,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    semibold: {
        fontWeight: '700',
    },
    sizeRadioButton: {
        borderBottomColor: colors.LIGHT_GRAY,
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    sizeRadioButtonText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    radioButton: {
        borderBottomColor: colors.LIGHT_GRAY,
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    checkbox: {
        paddingBottom: 15,
        borderBottomColor: colors.LIGHT_GRAY,
        borderBottomWidth: 0.5,
        paddingTop: 15,
    },
    checkboxTexts: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    collapseContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullWidth: {
        width: '100%',
    },
    collapseContainerStyle: {
        marginBottom: 5,
    },
    lightFontWeight: {
        fontWeight: '300',
    },
    paymentSection: {
        width: '100%',
        height: '18%',
        backgroundColor: colors.WHITE,
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingHorizontal: 20,
        borderTopColor: colors.LIGHT_GRAY,
        borderTopWidth: 1,
    },
    orderInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topOrderInfoMargin: {
        marginBottom: 15,
    },
    buttonTextHolder: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        position: 'relative',
    },
    buttonTextCenter: {
        fontSize: 20,
        color: colors.WHITE,
        fontWeight: 'bold',
    },
    buttonTextRight: {
        color: colors.WHITE,
        right: 0,
        position: 'absolute',
    }
})

export default styles;
