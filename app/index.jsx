import { Text, View, StyleSheet } from "react-native";
import { createGlobalStyle } from 'styled-components';
import React from "react";
import NavBar  from "./components/navbar";

const styles = StyleSheet.create({
  page: {
    boxSizing: 'border-box',
    fontSize: 18,
    color: 'black',
  },
  body:{
    display:'flex',
    flexDirection: "row",
    flexWrap: "wrap", // Allow wrapping to next line
    justifyContent: "space-between",
  }, 
  mainOverview:{
    backgroundColor: "#dec1ffff",
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Align to right
    width:'85%',
    gridAutoRows: 'minmax(100,auto)',
    
  },
  mainSideview:{
    backgroundColor: "#7d70baff",
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Align to right
    width:'15%',
    gridAutoRows: 'minmax(100,auto)',
  },
  accountListview:{
    backgroundColor: "#93867fff",
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Align to right
    width:'100%',
    gridAutoRows: 'minmax(100,auto)',
  },
  foot:{
    backgroundColor: "#343633ff",
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Align to right
    width:'100%',
    gridAutoRows: 'minmax(100,auto)',
    color:'white',
  },
});

export default function Index() {
  return (
    <View style={styles.page}>
      <NavBar/>
      <View style={styles.body}>
        <View style={styles.mainOverview}>p</View>
        <View style={styles.mainSideview}>p</View>
        <View style={styles.accountListview}>p</View>
        <View style={styles.foot}>p</View>
      </View>
    </View>

  );
}
