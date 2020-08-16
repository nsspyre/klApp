import React, { PureComponent } from 'react';

import Accordion from 'react-native-collapsible/Accordion';
import { View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '@constants';
import { Text } from '@ui-kitten/components';

import styles from './styles';

class Order extends PureComponent {
    state = {
        activeSections: [],
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ activeSections: [0, 1, 2] });
        }, 0)
    }

    _renderSectionTitle = section => {
        return (
            <View>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _renderHeader = section => {
        return (
            <View style={{ padding: 15, borderColor: 'red', borderWidth: 1 }}>
                <Text style={styles.headerText}>{section.name}</Text>
            </View>
        );
    };

    renderItem = ({ item }) => {
        return <View><Text style={{ paddingBottom: 8, color: 'black' }}>{item.name}</Text></View>
    }

    _renderContent = section => {
        return (
            <View style={{ paddingHorizontal: 5, paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={section.ingredients}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item._id}
                />
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        const { route } = this.props;

        const productOptions = route.params?.productOptions ?? [];

        return (
            <View style={{ flex: 1, paddingTop: 150 }}>
                <ScrollView style={{ borderColor: 'red', borderWidth: 1 }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                    {productOptions && productOptions.length > 0 && (
                        <Accordion
                            sections={productOptions}
                            activeSections={this.state.activeSections}
                            underlayColor={colors.ORANGE}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                            expandMultiple
                        />
                    )}
                </ScrollView>
            </View>
        );
    }
}

export default Order;
