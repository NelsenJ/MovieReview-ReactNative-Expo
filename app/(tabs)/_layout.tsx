import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import './globals.css';

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 800; // ubah ke drawer kalau < 800px

  if (isSmallScreen) {
    // === Drawer Mode ===
    return (
      <>
        {/* Logo tetap di atas */}
        <View style={styles.navbar}>
          <View style={styles.navContainer}>
            <Link href="/" style={styles.logo}>
              <View style={styles.logoRow}>
                <FontAwesome name="film" size={20} color="#667eea" />
                <Text style={styles.logoText}> MovieReview</Text>
              </View>
            </Link>
          </View>
        </View>

        {/* Drawer untuk menu */}
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerStyle: { backgroundColor: '#1a1a2e', width: 240 },
            drawerActiveTintColor: '#667eea',
            drawerInactiveTintColor: '#ffffff',
            drawerLabelStyle: { fontSize: 16 },
          }}
        >
          <Drawer.Screen name="index" options={{ drawerLabel: 'Home' }} />
          <Drawer.Screen name="action" options={{ drawerLabel: 'Action' }} />
          <Drawer.Screen name="comedy" options={{ drawerLabel: 'Comedy' }} />
          <Drawer.Screen name="drama" options={{ drawerLabel: 'Drama' }} />
          <Drawer.Screen name="documentary" options={{ drawerLabel: 'Documentary' }} />
        </Drawer>
      </>
    );
  }

  // === Navbar Mode === (>=800px)
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
            <FontAwesome name="user" size={18} color="#ffffff" style={styles.userIcon} />
          </View>
        </View>
      </View>

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0f0f23' },
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#1a1a2e',
    borderBottomWidth: 1,
    borderBottomColor: '#2d2d44',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logo: {
    textDecorationLine: 'none',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#667eea',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 32,
  },
  navLink: {
    textDecorationLine: 'none',
  },
  navLinkText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  navActions: {
    flexDirection: 'row',
    gap: 16,
  },
  userIcon: {
    backgroundColor: '#2d2d44',
    padding: 12,
    borderRadius: 25,
    width: 44,
    height: 44,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
