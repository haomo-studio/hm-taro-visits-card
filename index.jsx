'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import img from './images/img_24227_0_1.png'
import jiantouimg from './images/img_24227_0_2.png'
import shopLogo from './images/img_24227_0_0.png'

class HmVisitsCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      text: '日常访问',
      img,
      jiantouimg,
      num: '+3.49%',
      nums: '178080',
      unit: '个',
      shopLogo
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmVisitsCard}>
        <View style={styles.cardClass}>
          <View style={styles.titleClass}>
            <Text style={styles.text}>{this.state.text}</Text>
            <Image style={styles.img} src={this.state.img} />
          </View>
          <View style={styles.body}>
            <View style={styles.outer}>
              <View style={styles.wrap}>
                <Image style={styles.jiantouimg} src={this.state.jiantouimg} />
                <Text style={styles.num}>{this.state.num}</Text>
              </View>
              <View style={styles.block}>
                <Text style={styles.nums}>{this.state.nums}</Text>
                <Text style={styles.unit}>{this.state.unit}</Text>
              </View>
            </View>
            <Image style={styles.shopLogo} src={this.state.shopLogo} />
          </View>
        </View>
      </View>
    );
  }
}
export default HmVisitsCard;
