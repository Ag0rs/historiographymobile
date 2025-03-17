import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const historicalPlaces = [
  { id: "1", name: "Колізей", image: "https://atlanttour.com.ua/wp-content/uploads/2023/10/photo_2023-10-16_16-01-37.jpg" },
  { id: "2", name: "Велика Китайська стіна", image: "https://tse-tsikavo.com.ua/wp-content/uploads/2024/05/velyka-kytajska-stina-foto.jpg" },
  { id: "3", name: "Ейфелева вежа", image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg" },
  { id: "4", name: "Стоунхендж", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg" },
  { id: "5", name: "Тадж-Махал", image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" },
  { id: "6", name: "Мачу-Пікчу", image: "https://images.unian.net/photos/2020_12/1608126680-8618.jpg?0.4384594414666112" },
  { id: "7", name: "Піраміди Гізи", image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" },
  { id: "8", name: "Софійський собор", image: "https://24tv.ua/resources/photos/news/201812/1076010.jpg?v=1661276419000&w=768&h=432&fit=cover&output=webp&q=70" },
  { id: "9", name: "Ангкор-Ват", image: "https://www.zagorye.ua/wp-content/uploads/2019/08/siemreap-7-tmb-1200x628xfill.jpg" },
  { id: "10", name: "Чичен-Іца", image: "http://navkolosvitu.net.ua/wp-content/uploads/2014/05/chichen-itza-mexico-2009.jpg" }
];

const HistoricalList = () => (
  <FlatList
    data={historicalPlaces}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.listItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    )}
  />
);

const SettingsScreen = ({ toggleTheme }) => (
  <View style={styles.settingsContainer}>
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <Text style={styles.buttonText}>Змінити тему</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [screen, setScreen] = useState("list");
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <View style={[styles.container, darkTheme && styles.darkBackground]}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.navButton, screen === "list" && styles.activeButton]}
          onPress={() => setScreen("list")}
        >
          <Text style={styles.buttonText}>Список</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, screen === "settings" && styles.activeButton]}
          onPress={() => setScreen("settings")}
        >
          <Text style={styles.buttonText}>Налаштування</Text>
        </TouchableOpacity>
      </View>
      {screen === "list" ? <HistoricalList /> : <SettingsScreen toggleTheme={toggleTheme} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: "#f5e1c0" },
  darkBackground: { backgroundColor: "#8b6f47" },
  navbar: { flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "#d2b48c" },
  navButton: { padding: 10 },
  activeButton: { backgroundColor: "#a67b5b" },
  buttonText: { fontSize: 16 },
  listItem: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#b38b6d", backgroundColor: "#f8e5d0" },
  image: { width: 100, height: 100, marginRight: 10, borderRadius: 10 },
  text: { fontSize: 18, color: "#5a3e2b" },
  settingsContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: { padding: 10, backgroundColor: "#d2a679", borderRadius: 5 },
});

