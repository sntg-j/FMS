import { Text, View, StyleSheet } from "react-native";
import React from "react";
import NavBar from "./components/navbar";
import { BarChart } from "react-native-gifted-charts";

const styles = StyleSheet.create({
  page: {
    boxSizing: 'border-box',
    fontSize: 18,
    color: 'black',
  },
  body: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap", // Allow wrapping to next line
    justifyContent: "center",
  },
  contText: {
    fontFamily: "Arial",
    color: 'white',
  },
  mainOverview: {
    backgroundColor: "#dec1ffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: '85%',
    gridAutoRows: 'minmax(100,auto)',
  },
  graphView: {
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: "center",
    frontColor: '#5cc8ff',
  },
  mainSideview: {
    backgroundColor: "#7d70baff",
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Align to right
    width: '15%',
    gridAutoRows: 'minmax(100,auto)',
  },
  accountListview: {
    backgroundColor: "#93867fff",
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Align to right
    width: '100%',
    gridAutoRows: 'minmax(100,auto)',
  },
  foot: {
    backgroundColor: "#343633ff",
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Align to right
    width: '100%',
    gridAutoRows: 'minmax(100,auto)',
    color: 'white',
  },
});

const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

const TextScaffold = ({ part, divText }) => {
  return (
    <View style={part}>
      <Text style={styles.contText}>{divText}</Text>
    </View>
  );
};

const GraphScaffold = ({ part, comp }) => {
  return (
    <View style={part}>
      {comp}
    </View>
  );
};

export default function Index() {
  return (
    <View style={styles.page}>
      <NavBar />
      <View style={styles.body}>
        <GraphScaffold part={styles.mainOverview} comp={<BarChart style={styles.graphView} data={barData}/>} />
        <TextScaffold part={styles.mainSideview} divText={"sidepanel"} />
        <TextScaffold part={styles.accountListview} divText={"accounts"} />
        <TextScaffold part={styles.foot} divText={"footer"} />
      </View>
    </View>

  );
}
