import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class Login extends React.Component {
  goToPhone = () => {
    this.props.navigation.navigate('phone');
  };
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.banner}>
          <TouchableOpacity onPress={this.goBack} style={styles.back}>
            <Image
              source={require('../../assets/left_chevron.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.textButton}>Connexion</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Connectez-vous simplement !</Text>
          <TouchableOpacity style={styles.button1}>
            <Image
              source={require('../../assets/facebook.png')}
              style={styles.icon}
            />
            <Text style={styles.textButton}>Continuer avec Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Image
              source={require('../../assets/google.png')}
              style={styles.icon}
            />
            <Text style={styles.textButton2}>Continuer avec Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3} onPress={this.goToPhone}>
            <Image
              source={require('../../assets/phone.png')}
              style={styles.icon}
            />
            <Text style={styles.textButton}>Avec votre téléphone !</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    height,
    width,
  },
  banner: {
    width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  back: {
    position: 'absolute',
    left: 0,
    top: 9,
  },
  container: {
    marginTop: height * 0.3,
    alignItems: 'center',
  },
  title: {
    marginBottom: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.95,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#1877F2',
    marginBottom: 15,
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.95,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  textButton2: {
    color: 'black',
  },
  button3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.95,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  textButton: {
    color: 'white',
  },
});

export default Login;
