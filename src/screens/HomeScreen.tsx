import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  const [t, i18n] = useTranslation();
  const {changeLanguage} = i18n;
  return (
    <View className="bg-slate-900 flex-1 p-4">
      <Text className="text-white text-3xl font-bold">{t('Welcome to React')}</Text>
      <TouchableOpacity
        className="bg-green-700 rounded p-3 mt-4"
        onPress={() => changeLanguage('pt')}>
        <Text className="text-white text-lg">{t('Portuguese')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-700 rounded p-3 mt-4"
        onPress={() => changeLanguage('en')}>
        <Text className="text-white text-lg">{t('English')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
