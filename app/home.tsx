import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Text, View } from '../components/Themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useState } from 'react';
import Features from '../components/Features';
import { dummyMessage, type dummyMessagesProps } from '../constants';
import * as Speech from 'expo-speech';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default function HomeScreen() {
  const [messages, setMessages] = useState<dummyMessagesProps[]>(dummyMessage);
  const [recording, setRecording] = useState<boolean>(false);
  const [speaking, setSpeaking] = useState<boolean>(false);

  const handleClearMessages = () => {
    setMessages([]);
  };

  const handleStopSpeaking = async () => {
    const isCurrentlySpeaking = await Speech.isSpeakingAsync();
    if (isCurrentlySpeaking) {
      Speech.stop();
      setSpeaking(false);
    }
  };

  const speak = () => {
    const thingToSay = "I'm fine, How may i help you today.";
    Speech.speak(thingToSay);
    setSpeaking(true);
  };

  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
        <View className='flex-row justify-center'>
          <Image
            source={require('../assets/images/bot.png')}
            style={{ width: hp(15), height: hp(15) }}
          />
        </View>
        {messages.length > 0 ? (
          <View className='space-y-2 flex-1'>
            <Text
              style={{ fontSize: wp(5) }}
              className='text-gray-700 font-semibold ml-1'
            >
              Assistant
            </Text>
            <View
              style={{ height: hp(58) }}
              className='bg-neutral-200 rounded-3xl p-4'
            >
              <ScrollView
                bounces={false}
                className='space-y-4'
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message: dummyMessagesProps, index: number) =>
                  message.role === 'assistant' ? (
                    message.content.includes('https') ? (
                      <View
                        key={index}
                        className='flex-row justify-start bg-transparent'
                      >
                        <View className='p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none'>
                          <Image
                            source={{ uri: message.content }}
                            className='rounded-2xl'
                            resizeMode='contain'
                            style={{ height: wp(60), width: wp(60) }}
                          />
                        </View>
                      </View>
                    ) : (
                      <View
                        key={index}
                        className='flex-row justify-start bg-transparent'
                      >
                        <View
                          style={{ width: wp(70) }}
                          className='bg-emerald-100 rounded-xl p-2 rounded-tl-none'
                        >
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    )
                  ) : (
                    <View
                      key={index}
                      className='flex-row justify-end bg-transparent'
                    >
                      <View
                        style={{ width: wp(70) }}
                        className='bg-white rounded-xl p-2 rounded-tr-none'
                      >
                        <Text>{message.content}</Text>
                      </View>
                    </View>
                  )
                )}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        <View className='flex justify-center items-center'>
          {recording ? (
            <TouchableOpacity>
              <Image
                source={require('../assets/images/voiceLoading.gif')}
                className='rounded-full'
                style={{ width: hp(10), height: hp(10) }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={require('../assets/images/recordingIcon.png')}
                className='rounded-full'
                style={{ width: hp(10), height: hp(10) }}
              />
            </TouchableOpacity>
          )}

          {messages.length > 0 && (
            <TouchableOpacity
              onPress={handleClearMessages}
              className='bg-neutral-400 rounded-3xl p-2 absolute right-10'
            >
              <Text className='text-white font-semibold'>Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              onPress={handleStopSpeaking}
              className='bg-red-400 rounded-3xl p-2 absolute left-10'
            >
              <Text className='text-white font-semibold'>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
