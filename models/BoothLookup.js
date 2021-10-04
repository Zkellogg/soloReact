import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Header from "../components/Header";
import { connect } from "react-redux";
import colors from "../constants/colors";

const BoothLookup = ({ booths, passCloseBLU }) => {
  // const availableBooths = useSelector((state) => state.booths);

  return (
    <View>
      <Header />
      <Button title="Close" onPress={passCloseBLU} />
      <FlatList
        data={booths}
        renderItem={({ item }) => (
          <View style={styles.viewDiv}>
            <Text style={styles.name}>
              {item.boothName} Booth {item.boothNumber}
            </Text>

            <Text style={styles.info}> {item.info}</Text>
            <Text style={styles.contact}>Phone: {item.phone}</Text>
            <Text style={styles.contact}>Website: {item.website}</Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  const { booths } = state;
  return { booths };
};

const styles = StyleSheet.create({
  viewDiv: {
    backgroundColor: colors.liColor,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    textAlign: "center",
    fontSize: 20,
  },
  contact: {
    textAlign: "center",
  },
  info: {
    textAlign: "center",
  },
});

export default connect(mapStateToProps)(BoothLookup);
