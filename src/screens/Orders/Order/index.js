import React, { PureComponent } from 'react';

import * as orderSelectors from '@state/selectors/orders.selectors';

import { connect } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import { View, ScrollView, Image } from 'react-native';
import { Text, RadioGroup, Radio, CheckBox } from '@ui-kitten/components';

import { getDeviceDimensions } from '@utils';
import { setSelectedIndexOption, setSelectedOptions, clearSelectedOption, setSizeSelectedOption } from '@state/actions/order.action';
import { colors } from '@constants';

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
            this.setState({ activeSections: [...Array(productOptions.length + 1).keys()] });
        }, 0)
    }

    handleCheckboxPress = (checked, index, id) => {
        const { setSelectedOptions, clearSelectedOption } = this.props;

        if (checked) {
            setSelectedOptions({ index, id });
        } else {
            clearSelectedOption({ indexr: index, idr: id });
        }
    }

    exist = (arr, value) => {
        if (arr.indexOf(value) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    setRadioButtonOption = (nextSelected, index, isSize = false) => {
        const { setSelectedIndexOption, setSizeSelectedOption } = this.props;

        if (!isSize) {
            setSelectedIndexOption({ index, nextSelected })
        } else {
            setSizeSelectedOption(nextSelected);
        }
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

    renderSizeRadioButtons = (sizes) => (
        sizes.map(size => (
            <Radio
                key={size._id}
                style={styles.sizeRadioButton}
            >
                {evaProps => (
                    <View style={styles.sizeRadioButtonText}>
                        <Text {...evaProps} style={[evaProps.style]}>{size.size}</Text>
                        <Text {...evaProps} style={[evaProps.style]}>+c{size.price}</Text>
                    </View>
                )}
            </Radio>
        ))
    )

    renderRadioButtons = (ingredients) => (
        ingredients.map(ingredient => (
            <Radio
                key={ingredient._id}
                style={styles.radioButton}
            >
                {evaProps => <Text {...evaProps} style={[evaProps.style]}>{ingredient.name}</Text>}
            </Radio>
        ))
    )

    renderCheckBoxes = (ingredients, index, selected, maxQuantity) => (
        ingredients.map(ingredient => (
            <CheckBox
                style={styles.checkbox}
                key={ingredient._id}
                checked={selected && this.exist(selected, ingredient._id)}
                disabled={selected.length === maxQuantity && !this.exist(selected, ingredient._id)}
                onChange={(checked) => this.handleCheckboxPress(checked, index, ingredient._id)}
            >
                {evaProps => <Text {...evaProps} style={[evaProps.style]}>{ingredient.name}</Text>}
            </CheckBox>
        ))
    )

    renderContent = (section, index) => {
        const { isMultiple, selected, sizesSelected, isSize, maxQuantity } = section;

        if (isSize) {
            return (
                <View style={styles.collapseContent}>
                    <RadioGroup
                        style={styles.fullWidth}
                        selectedIndex={sizesSelected}
                        onChange={nextSelected => this.setRadioButtonOption(nextSelected, null, true)}
                    >
                        {this.renderSizeRadioButtons(section.sizes)}
                    </RadioGroup>
                </View>
            )
        }

        return (
            <View style={styles.collapseContent}>
                {isMultiple ? (
                    <View style={styles.fullWidth}>
                        {this.renderCheckBoxes(section.ingredients, index, selected, maxQuantity)}
                    </View>
                ) : (
                        <RadioGroup
                            style={styles.fullWidth}
                            selectedIndex={selected}
                            onChange={nextSelected => this.setRadioButtonOption(nextSelected, index)}
                        >
                            {this.renderRadioButtons(section.ingredients)}
                        </RadioGroup>
                    )}
            </View>
        );
    }

    updateSections = activeSections => this.setState({ activeSections });

    render() {
        const { productOptions, product: { img, description, name, sizes } } = this.props;
        const { height } = getDeviceDimensions(30);

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={[styles.topHeader, { height }]}>
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
                            sections={[...productOptions, ...[sizes]]}
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
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    isPending: orderSelectors.isPending(state),
    product: orderSelectors.getCurrentProduct(state),
    productOptions: orderSelectors.getCurrentProductOptions(state),
    hasError: orderSelectors.hasError(state),
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedIndexOption: (data) => dispatch(setSelectedIndexOption(data)),
    setSelectedOptions: (data) => dispatch(setSelectedOptions(data)),
    clearSelectedOption: (data) => dispatch(clearSelectedOption(data)),
    setSizeSelectedOption: (id) => dispatch(setSizeSelectedOption(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
