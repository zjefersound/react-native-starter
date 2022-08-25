import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <View className='bg-slate-900 flex-1'>
      <Text className='text-white text-2xl'>{t("Welcome to React")}</Text>
    </View>
  )
}

export default HomeScreen