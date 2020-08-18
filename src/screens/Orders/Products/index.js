import React, { PureComponent } from 'react';

import * as productSelectors from '@state/selectors/products.selectors';

import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { CardImage, Icon, Loading } from '@components';
import { icons, routesProducts as routes } from '@constants';
import { NavigationService } from '@services';
import { getProducts } from '@state/actions/product.action';
import { setCurrentOrder } from '@state/actions/order.action';

import styles from './styles';

class Products extends PureComponent {
    componentDidMount() {
        const { getProducts } = this.props;
        getProducts();
    }

    goToOrder = (item) => {
        const { setCurrentOrder } = this.props;
        const { name, img, description, options } = item;
        setCurrentOrder(item);
        NavigationService.navigate(routes.ORDER, { productOptions: options, product: { name, img, description } });
    }

    renderItem = ({ item }) => (
        <View style={styles.card}>
            <CardImage image={item.img} overlay onPress={() => this.goToOrder(item)}>
                <Text style={styles.cardTitle}>{item.name}</Text>
            </CardImage>
            <View style={styles.cardDescriptionSection}>
                <Icon name={icons.CLOCK_OUTLINE} />
                <Text style={styles.cardDescription}>20 - 25min</Text>
                <Text> | </Text>
                <Text>c{item.price}</Text>
            </View>
        </View>
    )

    render() {
        const { data, isPending } = this.props;

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    {data && data.length > 0 && (
                        <FlatList
                            data={data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item._id}
                        />
                    )}
                    <Loading show={isPending} control />
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({
    isPending: productSelectors.isPending(state),
    data: productSelectors.getProducts(state),
    hasError: productSelectors.hasError(state),
});

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    setCurrentOrder: (order) => dispatch(setCurrentOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
