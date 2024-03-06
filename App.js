import * as React from 'react';
import { View, StyleSheet,Button,Text,Image } from 'react-native';
import { Video } from 'expo-av';
import {AMBIENT_URL_128, AMBIENT_URL_320, TECHNO_URL} from "@env"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Button as MDButton}  from '@rneui/themed';

export default function App() {

  
  const [radioUrl, setRadioUrl] = React.useState('AMBIENT STREAM')
  const audio = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const urlChanger = () => {
    if (radioUrl == 'TECHNO STREAM') {
      setRadioUrl('AMBIENT STREAM')
      console.log(radioUrl)
    }
    if (radioUrl == 'AMBIENT STREAM') {
      setRadioUrl('TECHNO STREAM')
      console.log(radioUrl)
    }
      
  }


  if (radioUrl == 'TECHNO STREAM') {
      return (
        
    <SafeAreaProvider>
    <View style={styles.container}>
    <View style={styles.genreProvider}>
    <Button title={'Techno Channel'} 
    onPress={urlChanger}
          >

    </Button>

    </View>
  
      <Video
        ref={audio}
        source={{
          uri: TECHNO_URL,
        }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Stop' : 'Play'}
          onPress={() =>
            status.isPlaying ? audio.current.pauseAsync() : audio.current.playAsync()
          }
        />
      </View>
      
      <View style={styles.infoblock}>
      <Text style={styles.textinside}> techno RADIO CHANNEL </Text>

      </View>
    </View>
    </SafeAreaProvider>
  );
    }
    if (radioUrl == 'AMBIENT STREAM') {
      return (
    <SafeAreaProvider>
    <View style={styles.container}>
    <View style={styles.genreProvider}>
    <Button title={'Ambient Channel'} 
    onPress={urlChanger}
          >

    </Button>

    </View>
  
      <Video
        ref={audio}
        source={{
          uri: AMBIENT_URL_320,
        }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <Image source={require('./assets/logo.png')}
       style={{width: 60, height: 60}} />

      <View style={styles.buttons}>
        <MDButton
          title={status.isPlaying ? 'Stop' : 'Play'}
          onPress={() =>
            status.isPlaying ? audio.current.pauseAsync() : audio.current.playAsync()
          }
        />
      </View>
      
      <View style={styles.infoblock}>
      <Text style={styles.textinside}> Ambient RADIO CHANNEL </Text>

      </View>
    </View>
    </SafeAreaProvider>
  );
    }
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    paddingBottom: 25,
  },
  infoblock: {
    flex: 0.2,
    justifyContent: 'center',
    padding: 10
  },
  textinside:{
    padding: 45,
  }
});

