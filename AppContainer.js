'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  TabBarIOS,
} from 'react-native';

import htmlContent from './injectedHTML'
import injectedJS from './injectedJS'
import injectedImages from './injectedImages'


export default class AppContainer extends Component {
  constructor(props){
    super(props)

    // Images are stored in base64 
    let bgImg = injectedImages[0];
    let prizeImg = injectedImages[1];

    let script = injectedJS(bgImg);
    this._htmlContent = htmlContent(script, prizeImg);
  }

  _onNavigationChange(a) {
    var newUrl = a.url;
    console.log(newUrl);
    var scratched = newUrl.includes('#1scratched1');
    console.log(scratched);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerTxt}> ScratchCard Wrapper Example </Text>
        <WebView source={{ html: this._htmlContent }}
                 style={styles.webView}
                 onNavigationStateChange={this._onNavigationChange} />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
  },
  webView: {
    width: 350
  },
  containerTxt: {
    fontSize: 24,
    color: '#000'
  }
})
