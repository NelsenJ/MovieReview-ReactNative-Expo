import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DramaPage() {
  const router = useRouter();
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  
  const dramaMovies = [
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      rating: 9.3,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      duration: "142 min",
      theme: "Redemption & Hope"
    },
    {
      id: 10,
      title: "Forrest Gump",
      year: 1994,
      director: "Robert Zemeckis",
      rating: 8.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.",
      cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      duration: "142 min",
      theme: "Life & Destiny"
    },
    {
      id: 11,
      title: "The Green Mile",
      year: 1999,
      director: "Frank Darabont",
      rating: 8.6,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
      description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape.",
      cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
      duration: "189 min",
      theme: "Justice & Humanity"
    },
    {
      id: 12,
      title: "Schindler's List",
      year: 1993,
      director: "Steven Spielberg",
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.",
      cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      duration: "195 min",
      theme: "Holocaust & Courage"
    },
    {
      id: 13,
      title: "12 Angry Men",
      year: 1957,
      director: "Sidney Lumet",
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      cast: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
      duration: "96 min",
      theme: "Justice & Reason"
    }
  ];

  const filteredMovies = dramaMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));

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
        <Text style={styles.pageTitle}>Drama Movies</Text>
        <Text style={styles.pageSubtitle}>Emotional stories that touch the heart</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={18} color="#9aa0b4" />
        <TextInput
          placeholder="Search drama movies..."
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
              source={failedImages[movie.id] ? require('../assets/images/image.jpeg') : { uri: movie.image }}
              style={styles.movieImage}
              onError={() => setFailedImages((prev) => ({ ...prev, [movie.id]: true }))}
            />
            <View style={styles.movieContent}>
              <View style={styles.movieHeader}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <View style={styles.ratingBadge}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="star" size={12} color="#000" />
                    <Text style={styles.ratingText}> {movie.rating}</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.movieMeta}>
                <Text style={styles.movieYear}>{movie.year}</Text>
                <Text style={styles.movieDuration}>{movie.duration}</Text>
                <Text style={styles.movieDirector}>Dir. {movie.director}</Text>
              </View>
              
              <View style={styles.themeBadge}>
                <Text style={styles.themeText}>{movie.theme}</Text>
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome name="book" size={16} color="#ffffff" />
                  <Text style={styles.reviewButtonText}> Read Full Review</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/action" style={styles.navItem}>
          <Text style={styles.navText}>Action</Text>
        </Link>
        <Link href="/comedy" style={styles.navItem}>
          <Text style={styles.navText}>Comedy</Text>
        </Link>
        <Link href="/drama" style={[styles.navItem, styles.activeNav]}>
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
    backgroundColor: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
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
    color: '#74b9ff',
    fontSize: 16,
    fontWeight: '600',
  },
  movieDuration: {
    color: '#a29bfe',
    fontSize: 16,
    fontWeight: '600',
  },
  movieDirector: {
    color: '#fd79a8',
    fontSize: 16,
    fontWeight: '600',
  },
  themeBadge: {
    backgroundColor: '#74b9ff',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  themeText: {
    color: '#ffffff',
    fontSize: 14,
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
    backgroundColor: '#74b9ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
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
    backgroundColor: '#74b9ff',
  },
  navText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
