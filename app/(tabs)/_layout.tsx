import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
  Easing,
  Platform,
} from "react-native";
import "./globals.css";

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 850;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerAnim = useRef(new Animated.Value(300)).current;

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: 300,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => setDrawerOpen(false));
  };

  const DrawerLink = ({ href, label, icon }: { href: string; label: string; icon: any }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <Link
        href={href}
        onPress={closeDrawer}
        style={[
          styles.drawerLink,
          hovered && Platform.OS === "web" && styles.drawerLinkHover,
        ]}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <View style={styles.drawerLinkContent}>
          <FontAwesome name={icon} size={18} color="#fff" />
          <Text style={styles.drawerLinkText}>{label}</Text>
        </View>
      </Link>
    );
  };

  if (isSmallScreen) {
    // === Drawer Mode (Mobile) ===
    return (
      <>
        {/* Navbar */}
        <View style={styles.navbar}>
          <View style={styles.navContainer}>
            {/* Logo */}
            <Link href="/" style={styles.logo}>
              <View style={styles.logoRow}>
                <FontAwesome name="film" size={20} color="#667eea" />
                <Text style={styles.logoText}> MovieReview</Text>
              </View>
            </Link>

            {/* Tombol Hamburger (tetap stay) */}
            <TouchableOpacity onPress={openDrawer} style={styles.hamburgerBtn}>
              <FontAwesome name="bars" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Overlay */}
        {drawerOpen && (
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={closeDrawer}
          />
        )}

        {/* Drawer */}
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [{ translateX: drawerAnim }],
            },
          ]}
        >
          {/* Tombol Close X di dalam drawer */}
          <TouchableOpacity onPress={closeDrawer} style={styles.closeBtn}>
            <FontAwesome name="close" size={26} color="#fff" />
          </TouchableOpacity>

          {/* Navigation Links */}
          <DrawerLink href="/" label="Home" icon="home" />
          <DrawerLink href="/action" label="Action" icon="bolt" />
          <DrawerLink href="/comedy" label="Comedy" icon="smile-o" />
          <DrawerLink href="/drama" label="Drama" icon="film" />
          <DrawerLink href="/documentary" label="Documentary" icon="book" />
        </Animated.View>

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#0f0f23" },
          }}
        />
      </>
    );
  }

  // === Navbar Mode (Desktop) ===
  return (
    <>
      <View style={styles.navbar}>
        <View style={styles.navContainer}>
          <Link href="/" style={styles.logo}>
            <View style={styles.logoRow}>
              <FontAwesome name="film" size={20} color="#667eea" />
              <Text style={styles.logoText}> MovieReview</Text>
            </View>
          </Link>

          {/* Nav Links */}
          <View style={styles.navLinks}>
            <Link href="/" style={styles.navLink}>
              <Text style={styles.navLinkText}>Home</Text>
            </Link>
            <Link href="/action" style={styles.navLink}>
              <Text style={styles.navLinkText}>Action</Text>
            </Link>
            <Link href="/comedy" style={styles.navLink}>
              <Text style={styles.navLinkText}>Comedy</Text>
            </Link>
            <Link href="/drama" style={styles.navLink}>
              <Text style={styles.navLinkText}>Drama</Text>
            </Link>
            <Link href="/documentary" style={styles.navLink}>
              <Text style={styles.navLinkText}>Documentary</Text>
            </Link>
          </View>

          {/* User Button */}
          <View style={styles.navActions}>
            <FontAwesome
              name="user"
              size={18}
              color="#ffffff"
              style={styles.userIcon}
            />
          </View>
        </View>
      </View>

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0f0f23" },
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#1a1a2e",
    borderBottomWidth: 1,
    borderBottomColor: "#2d2d44",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  logo: { textDecorationLine: "none" },
  logoRow: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 24, fontWeight: "bold", color: "#667eea" },
  navLinks: { flexDirection: "row", gap: 32 },
  navLink: { textDecorationLine: "none" },
  navLinkText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  navActions: { flexDirection: "row", gap: 16 },
  userIcon: {
    backgroundColor: "#2d2d44",
    padding: 12,
    borderRadius: 25,
    width: 44,
    height: 44,
    textAlign: "center",
    textAlignVertical: "center",
  },

  // Drawer Styles
  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 250,
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 20,
    paddingTop: 80,
    zIndex: 2000,
    borderLeftWidth: 1,
    borderLeftColor: "#2d2d44",
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 3000,
  },
  drawerLink: {
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    textDecorationLine: "none",
    backgroundColor: "#22223b",
    transitionDuration: "0.2s",
  },
  drawerLinkHover: {
    backgroundColor: "#2d2d44",
    transform: [{ scale: 1.05 }],
  },
  drawerLinkContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  drawerLinkText: { fontSize: 16, color: "#fff", fontWeight: "500" },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1500,
  },
  hamburgerBtn: {
    padding: 8,
    zIndex: 2500, // hamburger selalu di atas
  },
});
