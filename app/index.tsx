import { Link } from 'expo-router';
import type { FC } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center justify-center'>
        <Text>index</Text>
      <Link href={'/home'} asChild>
        <Text>Go to the next page</Text>
      </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
