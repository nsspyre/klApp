import * as feedSelectors from '@state/selectors/feed.selectors';
import * as authSelectors from '@state/selectors/auth.selectors';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

import { Button } from '@components';
import { getUserFeed } from '@state/actions/feed.actions';

class Feed extends PureComponent {
  componentDidMount() {
    const { getUserFeed, user } = this.props;

    getUserFeed(user._id);
  }

  render() {
    return (
      <View><Text>This is the Feed</Text></View>
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
