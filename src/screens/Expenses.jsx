import React from 'react';
import moment from 'moment';

import {View, TouchableOpacity, Image, ScrollView, Animated, FlatList, Text, StyleSheet, Dimensions} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../../constants';

let ScreenHeight = Dimensions.get("window").height;

const Expenses = ({datas, navigation}) => {
    const renderNavBar = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => console.log('More')}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderHeader = () => {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Expenses Dates</Text>
                </View>
            </View>
        )
    }

    const renderExpenseList = () => {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Expense', {data: item})}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        margin: 5,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 5,
                        backgroundColor: COLORS.white,
                        ...styles.shadow
                    }}
                >
                    <View style={{
                        backgroundColor: COLORS.lightGray,
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.base, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.largeTitle }}>{moment(item.date).format('MMMM Do YYYY')}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: ScreenHeight }}>
                    <FlatList
                        data={datas}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={1}
                    />
                </Animated.View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2}}>
            {/* Nav bar section */}
            {renderNavBar()}
            {/* Heder section */}
            {renderHeader()}
            {/* Expense on data */}
            <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 60,  paddingVertical: SIZES.padding }}>
                <View>
                    {renderExpenseList()}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default Expenses;
