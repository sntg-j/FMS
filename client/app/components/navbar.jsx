import React from "react";
import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    NavBg: {
        backgroundColor: "#5cc8ff",
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 30,
        fontStyle:'Garamond',
    },
    nav_container: {
        flexDirection: "row", // Horizontal layout
        alignItems: "center", // Vertical alignment
        justifyContent: "flex-end", // Align to right
    },
    spacing:{
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "flex-end", // Align to right
    },
});


const NavRoute = ({ path, name }) => {
    return (
        <Link style={styles.text} href={path}>{name}</Link>
    );
}

export default function navbar() {
    return (
        <View style={styles.NavBg}>
            <div style={styles.nav_container}>
                <NavRoute path={"/"} name={"Settings"} />
                <NavRoute path={"/"} name={"Home"} />
                <NavRoute path={"/"} name={"About"} />
            </div>
        </View>
    );
}