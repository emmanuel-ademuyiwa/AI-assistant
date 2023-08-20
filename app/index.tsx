import { router } from 'expo-router';
import type { FC } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <SafeAreaView className='flex-1 flex justify-around bg-white'>
      <View className='space-y-2 flex items-center justify-center'>
        <Text
          style={{ fontSize: wp(10) }}
          className='text-center font-bold text-gray-700'
        >
          Jexi
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className='text-center tracking-wider text-gray-600 font-semibold'
        >
          The Future is here, powered by AI
        </Text>
      </View>
      <View className='flex flex-row justify-center'>
        <Image
          source={require('../assets/images/welcome.png')}
          style={{ width: wp(75), height: wp(75) }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          router.canGoBack();
          router.push('/home');
        }}
        className='bg-emerald-600 mx-5 p-4 rounded-2xl'
      >
        <Text
          style={{ fontSize: wp(6) }}
          className='text-center font-bold text-white'
        >
          Get started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
