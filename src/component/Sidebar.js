import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from './image/AppsLogo.png';
import Profile from './image/profile.jpg'

const SidebarScreen = () => {

    return (
        <>
            <View style={styles.sidebarHeader}>

                {/* <Image
                    source={Logo}
                   
                    style={{

                        width: 200,
                        height: 150,
                        marginLeft: 30,
                       
                    }}
                /> */}
                <Image
                    source={Profile}
                    // resizeMode="contain"
                    style={{

                        width: 70,
                        height: 70,
                        borderRadius: 50,
                        marginVertical: 20,
                    }}
                />

                <Text style={styles.userName}>Tariqul Islam</Text>
            </View>
            <ScrollView style={styles.sidebarBody} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Icon style={styles.sideIcon} name="user-circle-o" />
                        <Text style={styles.sideText}>My Profile</Text>
                    </TouchableOpacity>
                    {/* <View style={styles.bottom} /> */}
                </View>
                <View>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Icon style={styles.sideIcon} name="globe" />
                        <Text style={styles.sideText}>My Activity</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Icon style={styles.sideIcon} name="universal-access" />
                        <Text style={styles.sideText}>Contact Us</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Icon style={styles.sideIcon} name="question-circle" />
                        <Text style={styles.sideText}>Help</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Icon style={styles.sideIcon} name="info-circle" />
                        <Text style={styles.sideText}>Terms &amp; Conditions</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.sidebarItem}>
                        <Icon style={styles.sideIcon} name="sign-out" />
                        <Text style={styles.sideText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default SidebarScreen

const styles = StyleSheet.create({
    sidebarHeader: {
        marginTop: 35,
        paddingTop: 30,
        // paddingLeft: 2,
        // paddingRight: 2,
        paddingBottom: 20,
        width: '100%',
        height: 190,
        backgroundColor: 'green',
        alignItems: 'center',
    },
    userImageBg: {

    },
    userImage: {
        borderRadius: 50,
        width: 120,
        height: 120,
    },
    userName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // marginLeft: 20,
    },
    sidebarBody: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    sidebarItem: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: 30,
    },
    sideIcon: {
        fontSize: 20,
        color: '#00FF0F',
        paddingRight: 20,
    },
    sideText: {
        fontSize: 16,
    },
    bottom: {
        backgroundColor: 'gray',
        width: '100%',
        height: 1,
    },
})