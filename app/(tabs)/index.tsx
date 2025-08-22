import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  
  const allMovies = [
    {
      id: 1,
      title: 'Mad Max: Fury Road',
      genre: 'Action',
      rating: 8.1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
      description: 'A post-apocalyptic action film featuring intense car chases.'
    },
    {
      id: 2,
      title: 'The Grand Budapest Hotel',
      genre: 'Comedy',
      rating: 8.1,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop',
      description: 'A quirky comedy about a legendary concierge and his protégé.'
    },
    {
      id: 3,
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      rating: 9.3,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop',
      description: 'Two imprisoned men bond over years and find redemption.'
    },
    {
      id: 4,
      title: 'Planet Earth II',
      genre: 'Documentary',
      rating: 9.5,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop',
      description: 'Stunning exploration of our planet’s landscapes.'
    },
  ];

  const filteredMovies = allMovies.filter((m) => {
    const q = searchQuery.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.genre.toLowerCase().includes(q)
    );
  });

  const handleReadReview = (movieId: number) => {
    router.push(('/review/' + movieId.toString()) as any);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>MovieReview</Text>
        <Text style={styles.heroSubtitle}>Discover the best films across all genres</Text>
        <View style={styles.heroButtons}>
          <Link href="/action" style={styles.heroButton}>Action</Link>
          <Link href="/comedy" style={styles.heroButton}>Comedy</Link>
          <Link href="/drama" style={styles.heroButton}>Drama</Link>
          <Link href="/documentary" style={styles.heroButton}>Documentary</Link>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={18} color="#9aa0b4" />
        <TextInput
          placeholder="Search by title or genre..."
          placeholderTextColor="#9aa0b4"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* All Movies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Movies</Text>
        <View style={styles.movieGrid}>
          {filteredMovies.map((movie) => (
            <View key={movie.id} style={styles.movieCard}>
              <Image
                source={failedImages[movie.id] ? require('../../assets/images/image.jpeg') : { uri: movie.image }}
                style={styles.movieImage}
                onError={() => setFailedImages((prev) => ({ ...prev, [movie.id]: true }))}
              />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text style={styles.movieGenre}>{movie.genre}</Text>
                <View style={styles.ratingRow}>
                  <FontAwesome name="star" size={16} color="#ffd700" />
                  <Text style={styles.ratingText}> {movie.rating}</Text>
                </View>
                <Text style={styles.movieDescription}>{movie.description}</Text>
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
      </View>

      {/* Genre Navigation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore Genres</Text>
        <View style={styles.genreGrid}>
          <Link href="/action" style={styles.genreCard}>
            <Text style={styles.genreCardTitle}>Action</Text>
            <Text style={styles.genreCardSubtitle}>Thrilling adventures</Text>
          </Link>
          <Link href="/comedy" style={styles.genreCard}>
            <Text style={styles.genreCardTitle}>Comedy</Text>
            <Text style={styles.genreCardSubtitle}>Laugh out loud</Text>
          </Link>
          <Link href="/drama" style={styles.genreCard}>
            <Text style={styles.genreCardTitle}>Drama</Text>
            <Text style={styles.genreCardSubtitle}>Emotional stories</Text>
          </Link>
          <Link href="/documentary" style={styles.genreCard}>
            <Text style={styles.genreCardTitle}>Documentary</Text>
            <Text style={styles.genreCardSubtitle}>Real life stories</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  hero: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: 300,
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 24,
    textAlign: 'center',
    opacity: 0.9,
  },
  heroButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  heroButton: {
    backgroundColor: '#ffffff',
    color: '#667eea',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'none',
    overflow: 'hidden',
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
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'left',
  },
  movieGrid: {
    gap: 16,
  },
  movieCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  movieImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  movieInfo: {
    padding: 16,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  movieGenre: {
    fontSize: 14,
    color: '#667eea',
    marginBottom: 8,
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 16,
    color: '#ffd700',
    fontWeight: 'bold',
  },
  movieDescription: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  reviewButton: {
    backgroundColor: '#667eea',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  reviewButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  genreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  genreCard: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    minWidth: 140,
    textDecorationLine: 'none',
  },
  genreCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  genreCardSubtitle: {
    fontSize: 12,
    color: '#cccccc',
    textAlign: 'center',
  },
});
