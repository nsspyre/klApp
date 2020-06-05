import * as feedSelectors from '@state/selectors/feed.selectors';
import * as authSelectors from '@state/selectors/auth.selectors';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

import Header from './Header';
import { Card } from '@components';
import { images } from '@constants';
import { formatDateTimestamp } from '../../../utils';
import { getUserFeed } from '@state/actions/feed.actions';
import styles from './styles';

class Feed extends PureComponent {
  static navigationOptions = {
    headerTitle: <Header />,
  }

  componentDidMount() {
    const { getUserFeed, user } = this.props;

    getUserFeed(user._id);
  }

  renderHRTitle = (text) => (
    <View style={styles.hrContainer}>
      <View style={styles.hr} />
      <Text style={styles.hrTitle}>{text}</Text>
      <View style={styles.hr} />
    </View>
  );

  renderOrderItem = (order) => (
    <Card>
      <View style={styles.cardContent}>
        <View style={styles.orderCardImgHolder}>
          <Image style={styles.orderCardImg} source={images.BOWL_EMOJI} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoTitle}>{order.products[0].name}, {order.products[0].size}</Text>
          <Text style={styles.cardInfoText}>{order.products[0].calories} cals</Text>
          <Text style={styles.cardInfoText}>{order.products[0].weight}g</Text>
          <Text style={styles.cardInfoAmount}>${order.total}</Text>
          <Text style={styles.cardInfoOrderDate}>Última vez fue {formatDateTimestamp(order.dateTimestamp)}</Text>
        </View>
      </View>
    </Card>
  )

  renderRecommendedItem = (order) => (
    <Card>
      <View style={styles.cardContent}>
        <View style={styles.orderCardImgHolder}>
          <Image style={styles.orderCardImg} source={images.BOWL_EMOJI} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoTitle}>{order.name}, {order.size}</Text>
          <Text style={styles.cardInfoText}>{order.calories} cals</Text>
          <Text style={styles.cardInfoText}>{order.weight}g</Text>
          <Text style={styles.cardInfoAmount}>${order.price}</Text>
        </View>
      </View>
    </Card>
  )

  render() {
    const { feed } = this.props;
    /**
     * TODO: change flatList for section list!
     */
    return (
      <View style={styles.container}>
        {this.renderHRTitle('Últimos pedidos')}
        {feed && feed.orders && feed.orders.length > 0 && (
          <FlatList
            data={feed.orders}
            renderItem={({ item }) => this.renderOrderItem(item)}
            keyExtractor={item => item._id}
          />
        )}
        {this.renderHRTitle('Recomendados')}
        {feed && feed.recommended && feed.recommended.length > 0 && (
          <FlatList
            data={feed.recommended}
            renderItem={({ item }) => this.renderRecommendedItem(item)}
            keyExtractor={item => item._id}
          />
        )}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isPending: feedSelectors.isPending(state),
  error: feedSelectors.error(state),
  hasError: feedSelectors.hasError(state),
  feed: feedSelectors.getFeed(state),
  user: authSelectors.user(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserFeed: (id) => dispatch(getUserFeed(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
