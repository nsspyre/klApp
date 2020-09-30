import React, { PureComponent } from 'react';

import * as orderSelectors from '@state/selectors/orders.selectors';

import { connect } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import { View, ScrollView, Image } from 'react-native';
import { Text, RadioGroup, Radio, CheckBox, Divider } from '@ui-kitten/components';

import { getHeightDeviceDimensions } from '@utils';
import { setSelectedIndexOption, setSelectedOptions, clearSelectedOption } from '@state/actions/order.action';
import { colors } from '@constants';
import { Button } from '@components';

import styles from './styles';

class Order extends PureComponent {
    state = {
        activeSections: [],
    };

    componentDidMount() {
        this.handleActiveSections();
    }

    handleActiveSections = async () => {
        const { productOptions } = this.props

        setTimeout(() => {
            this.setState({ activeSections: [...Array(productOptions.length).keys()] });
        }, 0)
    }

    handleCheckboxPress = (checked, index, id, option = {}) => {
        const { setSelectedOptions, clearSelectedOption } = this.props;

        if (checked) {
            setSelectedOptions({ index, id, option });
        } else {
            clearSelectedOption({ indexr: index, idr: id, optionr: option });
        }
    }

    exist = (arr, value) => {
        if (arr.indexOf(value) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    handleRadioButtonOption = (nextSelected, index, section) => {
        const { setSelectedIndexOption } = this.props;

        setSelectedIndexOption({ index, nextSelected, option: section.options[nextSelected] })
    }

    renderHeader = section => {
        const { name, maxQuantity, isMultiple } = section;

        const label = isMultiple ? `Escoge hasta ${maxQuantity} opciones` : 'Obligatorio';

        return (
            <View style={styles.collapseHeader}>
                <Text style={styles.semibold}>{name}</Text>
                <Text>{label}</Text>
            </View>
        );
    };

    renderRadioButtons = (options) => (
        options.map(option => (
            <Radio
                key={option._id}
                style={styles.radioButton}
            >
                {evaProps => <Text {...evaProps} style={[evaProps.style]}>{option.name}</Text>}
            </Radio>
        ))
    )

    renderCheckBoxes = (options, index, selected, maxQuantity) => (
        options.map(option => (
            <CheckBox
                style={styles.checkbox}
                key={option._id}
                checked={selected && this.exist(selected, option._id)}
                disabled={(selected.length === maxQuantity && !this.exist(selected, option._id) || !option.onStock)}
                onChange={(checked) => this.handleCheckboxPress(checked, index, option._id, option)}
            >
                {evaProps => (
                    <View style={styles.checkboxTexts}>
                        <Text {...evaProps} style={[evaProps.style]}>{option.name}</Text>
                        {option.isExtra && option.onStock && <Text {...evaProps} style={styles.lightFontWeight}>¢{option.price}</Text>}
                        {!option.onStock && <View style={styles.outOfStock}><Text {...evaProps} style={styles.lightFontWeight}>Agotado</Text></View>}
                    </View>
                )}
            </CheckBox>
        ))
    )

    renderContent = (section, index) => {
        const { isMultiple, selected, maxQuantity } = section;

        return (
            <View style={styles.collapseContent}>
                {isMultiple ? (
                    <View style={styles.fullWidth}>
                        {this.renderCheckBoxes(section.options, index, selected, maxQuantity)}
                    </View>
                ) : (
                        <RadioGroup
                            style={styles.fullWidth}
                            selectedIndex={selected}
                            onChange={nextSelected => this.handleRadioButtonOption(nextSelected, index, section)}
                        >
                            {this.renderRadioButtons(section.options)}
                        </RadioGroup>
                    )}
            </View>
        );
    }

    updateSections = activeSections => this.setState({ activeSections });

    render() {
        const { productOptions, product: { img, description, name }, totalPrice, totalCalories } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={[styles.topHeader, { height: getHeightDeviceDimensions(30) }]}>
                        <View style={styles.imgHolder}>
                            <Image style={styles.img} source={img} />
                            <View style={styles.overlay} />
                        </View>
                        <View style={styles.topHeaderDescription}>
                            <Text category="h5">{name || ''}</Text>
                            <Text>{description || ''}</Text>
                        </View>
                    </View>
                    {productOptions && productOptions.length > 0 && (
                        <Accordion
                            sections={productOptions}
                            activeSections={this.state.activeSections}
                            underlayColor={colors.ORANGE}
                            renderHeader={this.renderHeader}
                            renderContent={this.renderContent}
                            onChange={this.updateSections}
                            containerStyle={styles.fullWidth}
                            sectionContainerStyle={styles.collapseContainerStyle}
                            expandMultiple
                        />
                    )}
                </ScrollView>
                <View style={styles.paymentSection}>
                    <View style={styles.fullWidth}>
                        <View style={[styles.orderInfoRow, styles.topOrderInfoMargin]}>
                            <Text>Calorias</Text>
                            <Text>{totalCalories}</Text>
                        </View>
                        <View style={styles.orderInfoRow}>
                            <Text>Entrega</Text>
                            <Text>Gratis</Text>
                        </View>
                    </View>
                    <Divider />
                    <Button>
                        <View style={styles.buttonTextHolder}>
                            <Text style={styles.buttonTextCenter}>Pagar</Text>
                            <Text style={styles.buttonTextRight}>₡{totalPrice}</Text>
                        </View>
                    </Button>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    isPending: orderSelectors.isPending(state),
    product: orderSelectors.getCurrentOrder(state),
    productOptions: orderSelectors.getCurrentProductOptions(state),
    hasError: orderSelectors.hasError(state),
    totalPrice: orderSelectors.getTotalPrice(state),
    totalCalories: orderSelectors.getTotalCalories(state),
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedIndexOption: (data) => dispatch(setSelectedIndexOption(data)),
    setSelectedOptions: (data) => dispatch(setSelectedOptions(data)),
    clearSelectedOption: (data) => dispatch(clearSelectedOption(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
