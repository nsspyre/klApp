import React, { PureComponent } from 'react';

import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { CardImage, Icon } from '@components';
import { images, icons } from '@constants';
import styles from './styles';

class Products extends PureComponent {
    goToOrder = () => {

    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <CardImage image={images.BOWL} overlay onPress={this.goToOrder}>
                            <Text style={styles.cardTitle}>Bowls</Text>
                        </CardImage>
                        <View style={styles.cardDescriptionSection}>
                            <Icon name={icons.CLOCK_OUTLINE} />
                            <Text style={styles.cardDescription}>20 - 25min</Text>
                            <Text> | </Text>
                            <Text>c3500</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = () => ({ });

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
