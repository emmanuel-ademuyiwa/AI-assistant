import { Image, SafeAreaView, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useState } from 'react';
import Features from '../components/Features';
import { dummyMessage, type dummyMessagesProps } from '../constants';

export default function HomeScreen() {
  const [messages, setMessages] = useState<dummyMessagesProps[]>(dummyMessage);

  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
        <View className='flex-row justify-center'>
          <Image
            source={require('../assets/images/bot.png')}
            style={{ width: hp(15), height: hp(15) }}
          />
        </View>
        <View>
          {messages.length > 0 ? (
            <View className='space-y-2'>
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
                        <View key={index} className='flex-row justify-start bg-transparent'>
                          <View className='p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none'>
                            <Image source={{uri: message.content}} className='rounded-2xl' resizeMode='contain' style={{height:wp(60), width:wp(60)}} />
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
        </View>
      </SafeAreaView>
    </View>
  );
}
