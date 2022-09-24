import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export default function Details({route}) {
  const {item} = route.params;
  console.log(item);

  const navigation = useNavigation();

  const DetailsHeader = () => {
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
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: colors.grey,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather name="chevron-left" size={16} color={colors.dark} />
            </View>
          </TouchableOpacity>
          {/* Action Button */}
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: colors.yellow,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons
              name="star"
              size={16}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const DetailsTitle = () => {
    return (
      <View style={{marginLeft: 20, marginTop: 30, marginRight: 20}}>
        <Text
          style={{
            color: colors.black,
            fontSize: 32,
            fontFamily: 'Montserrat-Bold',
            textAlign: 'left',
          }}
          numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  const DetailsPrice = () => {
    return (
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text
          style={{
            color: colors.orange,
            fontFamily: 'Montserrat-Bold',
            fontSize: 32,
          }}>
          ${item.price}
        </Text>
      </View>
    );
  };

  const DetailsInfo = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}>
        {/* Left Side */}
        <View style={{flex: 1}}>
          {/* Size */}
          <View>
            <Text
              style={{
                color: colors.grey,
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
              }}>
              Size
            </Text>
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 16,
                marginTop: 5,
              }}>
              {item.sizeName}
            </Text>
          </View>
          {/* Crust */}
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                color: colors.grey,
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
              }}>
              Crust
            </Text>
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 16,
                marginTop: 5,
              }}>
              {item.crust}
            </Text>
          </View>
          {/* Delivery Time */}
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                color: colors.grey,
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
              }}>
              Delivery in
            </Text>
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 16,
                marginTop: 5,
              }}>
              {item.deliveryTime} min
            </Text>
          </View>
        </View>
        {/* Right Side */}
        <View style={{flex: 2}}>
          <Image
            source={item.image}
            style={{width: 296, height: 176}}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  const DetailsIngredients = () => {
    return (
      <View>
        <Text
          style={{
            marginTop: 60,
            marginLeft: 20,
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
            color: colors.dark,
          }}>
          Ingredients
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item.ingredients}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  marginRight: 20,
                  marginLeft: index == 0 ? 20 : 0,
                  marginBottom: 5,
                  width: 100,
                  height: 80,
                  borderRadius: 15,
                  backgroundColor: colors.white,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                }}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{width: 80, height: 80}}
                />
              </View>
            );
          }}
        />
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignSelf: 'stretch',
            marginHorizontal: 20,
            justifyContent: 'center',
            borderRadius: 50,
            margin: 10,
            overflow: 'hidden',
            backgroundColor: colors.yellow,
          }}>
          <Pressable onPress={() => {}} android_ripple={{color: colors.white}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 62,
                width: '100%',
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14,
                  marginRight: 10,
                  color: colors.black,
                }}>
                Place an order
              </Text>
              <Feather name="chevron-right" size={22} color={colors.black} />
            </View>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <DetailsHeader />

      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <DetailsTitle />
        {/* Price */}
        <DetailsPrice />
        {/* DetailsInfo */}
        <DetailsInfo />
        {/* Ingridients */}
        <DetailsIngredients />
      </ScrollView>
      {/* Footer */}
      <Footer />
    </View>
  );
}
