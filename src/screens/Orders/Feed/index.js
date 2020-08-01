import * as feedSelectors from '@state/selectors/feed.selectors';
import * as authSelectors from '@state/selectors/auth.selectors';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Text as TextUIK } from '@ui-kitten/components';
import {
  Text,
  View,
  Image,
  SectionList,
} from 'react-native';

import Header from './Header';
import { Card, Button } from '@components';
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
    console.log('this props', this.props);
    getUserFeed(user._id);
  }

  renderHRTitle = (text) => (
    <View style={styles.hrContainer}>
      <TextUIK style={styles.hrTitle} category="h5">{text}</TextUIK>
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

  renderItemHandler = (item, title) => {
    if (title === 'orders') {
      return this.renderOrderItem(item);
    } else {
      return this.renderRecommendedItem(item);
    }
  }

  renderNoContent = () => (
    <Card customStyle={styles.card}>
      <View style={styles.cardBody}>
        <Image style={styles.cardImage} source={images.BOWL} />
        <View style={styles.overlay} />
        <View style={styles.overlayInfo}>
          <Text style={styles.overlayInfoTopLabel}>Ordená ya!!</Text>
          <Text style={styles.overlayInfoBottomLabel}>Prepará tu primer pedido</Text>
        </View>
      </View>
      <Button text="Ordenar" onPress={() => { }} />
    </Card>
  );

  renderHeaderHandler = (section) => {
    if (section.data.length > 0) {
      if (section.title === 'orders') {
        return this.renderHRTitle('Últimos pedidos');
      } else {
        return this.renderHRTitle('Recomendados');
      }
    } else if (section.title === 'orders') {
      return this.renderNoContent();
    }
  }

  getOrderList = (feed) => {
    return [
      {
        title: 'orders',
        data: get(feed, 'orders', []),
      },
      {
        title: 'recommended',
        data: get(feed, 'recommended', []),
      }
    ]
  }

  render() {
    const { feed } = this.props;
    const feedList = this.getOrderList(feed);

    return (
      <View style={styles.container}>
        {feedList.length > 0 && (
          <SectionList
            sections={feedList}
            renderItem={({ item, section: { title } }) => this.renderItemHandler(item, title)}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            renderSectionHeader={({ section }) => this.renderHeaderHandler(section)}
            stickySectionHeadersEnabled={false}
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
