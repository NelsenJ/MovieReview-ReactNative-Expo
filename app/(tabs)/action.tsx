import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ActionPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  
  const actionMovies = [
    {
      id: 1,
      title: "Mad Max: Fury Road",
      year: 2015,
      director: "George Miller",
      rating: 8.1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      description: "A post-apocalyptic action film featuring intense car chases and stunning practical effects.",
      cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
      duration: "120 min"
    },
    {
      id: 18,
      title: "John Wick",
      year: 2014,
      director: "Chad Stahelski",
      rating: 7.4,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
      description: "A retired hitman seeks vengeance after the death of his beloved dog.",
      cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
      duration: "101 min"
    },
    {
      id: 19,
      title: "Mission: Impossible - Fallout",
      year: 2018,
      director: "Christopher McQuarrie",
      rating: 7.7,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      description: "Ethan Hunt and his team race against time to prevent a global catastrophe.",
      cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames"],
      duration: "147 min"
    }
  ];

  const filteredMovies = actionMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleReadReview = (movieId: number) => {
    router.push(('/review/' + movieId.toString()) as any);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href="/" style={styles.backButton}>
          <View style={styles.backRow}>
            <FontAwesome name="chevron-left" size={14} color="#ffffff" />
            <Text style={styles.backText}> Back to Home</Text>
          </View>
        </Link>
        <Text style={styles.pageTitle}>Action Movies</Text>
        <Text style={styles.pageSubtitle}>High-octane thrills and explosive entertainment</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={18} color="#9aa0b4" />
        <TextInput
          placeholder="Search action movies..."
          placeholderTextColor="#9aa0b4"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Movie List */}
      <View style={styles.movieList}>
        {filteredMovies.map((movie) => (
          <View key={movie.id} style={styles.movieCard}>
            <Image
              source={failedImages[movie.id] ? require('../../assets/images/image.jpeg') : { uri: movie.image }}
              style={styles.movieImage}
              onError={() => setFailedImages((prev) => ({ ...prev, [movie.id]: true }))}
            />
            <View style={styles.movieContent}>
              <View style={styles.movieHeader}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <View style={styles.ratingBadge}>
                  <FontAwesome name="star" size={12} color="#000" />
                  <Text style={styles.ratingText}> {movie.rating}</Text>
                </View>
              </View>
              
              <View style={styles.movieMeta}>
                <Text style={styles.movieYear}>{movie.year}</Text>
                <Text style={styles.movieDuration}>{movie.duration}</Text>
                <Text style={styles.movieDirector}>Dir. {movie.director}</Text>
              </View>
              
              <Text style={styles.movieDescription}>{movie.description}</Text>
              
              <View style={styles.castContainer}>
                <Text style={styles.castLabel}>Cast:</Text>
                <Text style={styles.castText}>{movie.cast.join(', ')}</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.reviewButton}
                onPress={() => handleReadReview(movie.id)}
              >
                <FontAwesome name="book" size={16} color="#ffffff" />
                <Text style={styles.reviewButtonText}> Read Full Review</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/action" style={[styles.navItem, styles.activeNav]}>
          <Text style={styles.navText}>Action</Text>
        </Link>
        <Link href="/comedy" style={styles.navItem}>
          <Text style={styles.navText}>Comedy</Text>
        </Link>
        <Link href="/drama" style={styles.navItem}>
          <Text style={styles.navText}>Drama</Text>
        </Link>
        <Link href="/documentary" style={styles.navItem}>
          <Text style={styles.navText}>Documentary</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  header: {
    padding: 32,
    alignItems: 'center',
    backgroundColor: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
  },
  backButton: {
    textDecorationLine: 'none',
    marginBottom: 12,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#ffffff',
    fontSize: 16,
    opacity: 0.9,
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 18,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
  },
  searchBar: {
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2d2d44',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  movieList: {
    padding: 24,
  },
  movieCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    marginBottom: 24,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  movieImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  movieContent: {
    padding: 20,
  },
  movieHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  ratingBadge: {
    backgroundColor: '#ffd700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  movieMeta: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 16,
  },
  movieYear: {
    color: '#ff6b6b',
    fontSize: 16,
    fontWeight: '600',
  },
  movieDuration: {
    color: '#74b9ff',
    fontSize: 16,
    fontWeight: '600',
  },
  movieDirector: {
    color: '#a29bfe',
    fontSize: 16,
    fontWeight: '600',
  },
  movieDescription: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  castContainer: {
    marginBottom: 20,
  },
  castLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  castText: {
    color: '#b2bec3',
    fontSize: 14,
  },
  reviewButton: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  reviewButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#1a1a2e',
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#2d2d44',
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    textDecorationLine: 'none',
  },
  activeNav: {
    backgroundColor: '#ff6b6b',
  },
  navText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
