import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import Input from '../../components/Input';

import { Container, Wrapper, KeyBoardAvoiding } from './styles';
import TouchableButton from '../../components/Button';
const { width, height } = Dimensions.get('window');

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Home: React.FC = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  const [notification, setNotification] = useState<Notifications.Notification>();
  const notificationListener = useRef<PushSubscription>();
  const responseListener = useRef<PushSubscription>();
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState("Empty")

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    // @ts-ignore
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    // @ts-ignore
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      // @ts-ignore
      Notifications.removeNotificationSubscription(notificationListener.current);
      // @ts-ignore
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatePicker = () => {
    setShow(true)
  }

  const handleDatePicker = (event: Event, selectedDate: Date) => {
    setDate(selectedDate)

    setShow(false)
  }

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body: message,
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }

  return (
    <Container>
      <KeyBoardAvoiding
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Wrapper style={{ width: width * 0.9, height: height * 0.7 }}>

          <Input
            placeholder='Título'
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <Input
            placeholder='Mensagem'
            value={message}
            onChangeText={(text) => setMessage(text)}
          />

          <TouchableButton color="#1a46d4" onPress={schedulePushNotification}>
            Testar
          </TouchableButton>

          <TouchableButton color="#1a46d4" onPress={showDatePicker}>
            Selecionar data
          </TouchableButton>

          {show &&
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              onChange={handleDatePicker}
              mode={"date"}
              is24Hour={true}
              display="default"
            />
          }
        </Wrapper>
      </KeyBoardAvoiding>
    </Container>
  );
}



async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default Home;
