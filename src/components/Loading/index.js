import React, { FunctionComponent } from 'react';
import { Spinner } from '@ui-kitten/components';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import styles from './styles';

const Loading = ({
  show = false,
  fullwidth = false,
  showBackground = false,
  size = 'small'
}) => (
    <>
      {fullwidth ? (
        <Modal isVisible={show}>
          <View style={showBackground ? styles.container : {}}>
            <Spinner size={size} status={showBackground ? 'control' : 'warning'} />
          </View>
        </Modal>
      ) : (
          <View style={showBackground ? styles.container : {}}>
            <Spinner size={size} status={showBackground ? 'control' : 'warning'} />
          </View>
        )}
    </>
  )

export default Loading;
