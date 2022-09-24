import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  Pressable,
} from 'react-native';
import React from 'react';

// icons
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// data
import categoriesData from '../assets/data/CategoriesData';
import popularData from '../assets/data/PopularData';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const HomeHeader = () => {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={colors.yellow} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: colors.white,
            }}
          />
          {/* Icon */}
          <Feather name="menu" size={24} color={colors.dark} />
        </View>
      </SafeAreaView>
    );
  };
  
  const Title = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingTop: 30}}>
        <Text
          style={{
            fontSize: 16,
            color: colors.dark,
            fontFamily: 'Montserrat-Regular',
          }}>
          Food
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 32,
            fontFamily: 'Montserrat-Bold',
            color: colors.dark,
          }}>
          Delivery
        </Text>
      </View>
    );
  };

  const SearchField = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          paddingTop: 30,
          alignItems: 'center',
        }}>
        <Feather
          name="search"
          size={16}
          color={colors.dark}
          style={{marginRight: 12}}
        />
        <View
          style={{
            flex: 1,
            borderBottomWidth: 2,
            borderColor: colors.grey,
            paddingBottom: 5,
          }}>
          <Text style={{fontSize: 14, color: colors.grey}}>Search</Text>
        </View>
      </View>
    );
  };

  const CategoriesList = () => {
    return (
      <View style={{marginTop: 36}}>
        <Text
          style={{
            color: colors.dark,
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
            paddingHorizontal: 20,
          }}>
          Categories
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoriesData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View
                style={{
                  width: 105,
                  height: 177,
                  borderRadius: 20,
                  backgroundColor: item.selected ? colors.yellow : colors.white,
                  padding: 24,
                  marginTop: 15,
                  marginBottom: 20,
                  marginRight: 20,
                  marginLeft: index == 0 ? 20 : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <Image source={item.image} style={{width: 60, height: 60}} />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    textAlign: 'center',
                    color: colors.dark,
                    marginTop: 10,
                  }}>
                  {item.title}
                </Text>

                <View
                  style={{
                    width: 26,
                    height: 26,
                    backgroundColor: item.selected
                      ? colors.white
                      : colors.salmon,
                    marginTop: 20,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Feather
                    name="chevron-right"
                    color={item.selected ? colors.black : colors.white}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  };

  const PopularList = () => {
    return (
      <View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
            color: colors.dark,
          }}>
          Popular
        </Text>
        <View
          style={{
            marginTop: 11,
          }}>
          {popularData.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  backgroundColor: colors.white,
                  marginHorizontal: 20,
                  marginBottom: 20,
                  borderRadius: 25,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                  overflow: 'hidden',
                }}>
                <Pressable
                  key={item.id}
                  android_ripple={{color: colors.yellow}}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.navigate('Details', {item: item})}>
                  {/* left side */}
                  <View style={{marginRight: 40}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 22,
                        marginTop: 24,
                      }}>
                      <MaterialCommunityIcons
                        name="crown"
                        color={colors.yellow}
                        size={12}
                        style={{marginRight: 4}}
                      />
                      <Text
                        style={{
                          fontFamily: 'Montserrat-SemiBold',
                          fontSize: 14,
                          color: colors.black,
                        }}>
                        top of the week
                      </Text>
                    </View>
                    <View style={{marginTop: 20, marginLeft: 22}}>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-SemiBold',
                          fontSize: 14,
                          color: colors.black,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Medium',
                          fontSize: 12,
                          color: colors.grey,
                          marginTop: 5,
                        }}>
                        Weight {item.weight}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                      }}>
                      <View
                        style={{
                          backgroundColor: colors.yellow,
                          height: 53,
                          width: 90,
                          marginRight: 20,
                          borderTopRightRadius: 25,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Feather name="plus" size={16} color={colors.black} />
                      </View>
                      <MaterialCommunityIcons
                        name="star"
                        color={colors.black}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                          fontFamily: 'Montserrat-SemiBold',
                          fontSize: 12,
                          color: colors.black,
                        }}>
                        5.0
                      </Text>
                    </View>
                  </View>
                  {/* right side */}
                  <Image
                    source={item.image}
                    style={{width: 210, height: 125}}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Title />

        {/* Search */}
        <SearchField />

        {/* Categories */}
        <CategoriesList />

        {/* Popular */}
        <PopularList />
      </ScrollView>
    </View>
  );
}
