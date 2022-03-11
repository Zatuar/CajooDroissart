import React from 'react';
import {
  StyleSheet,
  Text as TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';

const {width, height} = Dimensions.get('window');

class Phone extends React.Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  onPressFlag() {
    this.myCountryPicker.open();
  }
  selectCountry(country) {
    this.phone.selectCountry(country.iso2);
  }
  onFocus() {
    this.textInput.setNativeProps({
      style: {backgroundColor: 'red'},
    });
  }
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
          <TextInput style={styles.textButton}>Connexion</TextInput>
        </View>
        <View style={styles.container}>
          <PhoneInput
            ref={ref => {
              this.phone = ref;
            }}
            onPressFlag={this.onPressFlag}
            initialCountry={'fr'}
            style={styles.number}
            onFocus={this.onFocus}
          />
        </View>
        <View style={styles.bot}>
          <Text style={styles.descrip}>
            En cliquant sur 'CONTINUER' vous acceptez la{' '}
            <Text style={styles.red}>Politique de Confidentialité</Text>, les{' '}
            <Text style={styles.red}>CGU</Text> et les{' '}
            <Text style={styles.red}>CGV</Text> de Cajoo
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>CONTINUER</Text>
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
  textButton: {
    color: 'white',
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconS: {
    width: 20,
    height: 20,
  },
  number: {
    width: width * 0.8,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  bot: {
    position: 'absolute',
    bottom: 30,
    width: width * 0.9,
    alignItems: 'center',
  },
  descrip: {
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.95,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  red: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default Phone;
