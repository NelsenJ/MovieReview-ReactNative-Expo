// app/settings.tsx

import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notif, setNotif] = useState(true);
  const [dark, setDark] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Pengaturan</Text>

      <View style={styles.section}>
        <SettingItem label="Notifikasi" value={notif} onChange={setNotif} />
        <SettingItem label="Dark Mode" value={dark} onChange={setDark} />
      </View>

      <TouchableOpacity style={styles.logout}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.logoutText}>Keluar Akun</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingItem({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1A1A1A',
  },
  section: {
    marginBottom: 40,
    gap: 14,
  },
  item: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  logout: {
    backgroundColor: '#E63946',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
  },
});
