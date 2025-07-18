import 'react-native-reanimated';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';

export default function UploadScreen() {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - start;
      const percent = Math.min((elapsed / 3000) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        navigation.navigate('review');
      }
    }, 30); 

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-white px-[29px]">
      <Text className="text-[14px] font-semibold text-[#565656] mb-6">
        Uploading...
      </Text>
      <View className="h-2 w-full bg-[#E4E4E4] overflow-hidden rounded-full">
        <MotiView
          from={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'timing', duration: 50 }}
          className="h-2 bg-[#00212C]"
        />
      </View>
    </View>
  );
}
