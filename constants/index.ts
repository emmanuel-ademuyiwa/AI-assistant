import { ImageSourcePropType } from 'react-native';

export const apiKey = 'place your openAI api key here';
// in some cases your api key maybe already expired
// try to use a new account to create an api key

export interface dummyMessagesProps {
  role: string;
  content: any;
}

export const dummyMessage: dummyMessagesProps[] = [
  {
    role: 'user',
    content: 'How are you?',
  },
  {
    role: 'assistant',
    content: "I'm fine, How may i help you today.",
  },
  {
    role: 'user',
    content: 'create an image of a dog playing with cat',
  },
  {
    role: 'assistant',
    content:
      'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg',
  },
];
