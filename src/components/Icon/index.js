import React from 'react';
import { Icon as IconUI } from '@ui-kitten/components';

import { colors } from '@constants';
import styles from './styles';

const Icon = (props) => {
    const { name, customStyle, color = null, fill = false, animation = 'zoom' } = props;

    return (
        <IconUI
            name={name}
            fill={fill ? color ? color : colors.BLACK : null}
            style={{ ...styles.icon, ...customStyle }}
            animation={animation}
        />
    )
}

export default Icon;
