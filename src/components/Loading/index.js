import React, { FunctionComponent } from 'react';
import { Spinner } from '@ui-kitten/components';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import styles from './styles';

const Loading = ({
  show = false,
  fullwidth = false,
  control = false,
  size = 'small'
}) => (
    <>
      {fullwidth ? (
        <Modal isVisible={show}>
          <View style={control ? styles.container : {}}>
            <Spinner size={size} status={control ? 'control' : 'warning'} />
          </View>
        </Modal>
      ) : (
          <Modal isVisible={show} hasBackdrop={false} style={styles.modalBackdrop} animationIn="bounceIn" animationOut="bounceOut">
            <View style={control ? styles.container : {}}>
              <Spinner size={size} status={control ? 'control' : 'warning'} />
            </View>
          </Modal>
        )}
    </>
  )

export default Loading;
