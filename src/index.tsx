import { NativeModules } from 'react-native';

type LearnLibType = {
  multiply(a: number, b: number): Promise<number>;
};

const { LearnLib } = NativeModules;

export default LearnLib as LearnLibType;
