import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect, router } from "expo-router"

const App = () => {


  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Posibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovations: embark on a journey of limitless exploration with Aora</Text>


        </View>
      </ScrollView>
      <StatusBar backgroundColor={"#161622"} style="light" />
    </SafeAreaView>
  )
}

export default App
