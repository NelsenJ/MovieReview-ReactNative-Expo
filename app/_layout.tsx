import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import './globals.css';

export default function RootLayout() {
  return (
    <>
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <View style={styles.navContainer}>
          <Link href="/" style={styles.logo}>
            <View style={styles.logoRow}>
              <FontAwesome name="film" size={20} color="#667eea" />
              <Text style={styles.logoText}> MovieReview</Text>
            </View>
          </Link>
          
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
          
          <View style={styles.navActions}>
            {/* Search button dihapus sesuai permintaan */}
            <TouchableOpacity style={styles.userButton}>
              <FontAwesome name="user" size={18} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0f0f23' }
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
  userButton: {
    backgroundColor: '#2d2d44',
    padding: 12,
    borderRadius: 25,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
