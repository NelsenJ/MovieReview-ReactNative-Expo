import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ComedyPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  
  const comedyMovies = [
    {
      id: 2,
      title: "The Grand Budapest Hotel",
      year: 2014,
      director: "Wes Anderson",
      rating: 8.1,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      description: "A quirky comedy about a legendary concierge and his young protégé in a famous European hotel.",
      cast: ["Ralph Fiennes", "Tony Revolori", "F. Murray Abraham"],
      duration: "99 min",
      humor: "Witty & Quirky"
    },
    {
      id: 6,
      title: "Superbad",
      year: 2007,
      director: "Greg Mottola",
      rating: 7.6,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      description: "Two high school friends navigate the challenges of adolescence and party planning.",
      cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
      duration: "113 min",
      humor: "Teen Comedy"
    },
    {
      id: 7,
      title: "Bridesmaids",
      year: 2011,
      director: "Paul Feig",
      rating: 6.8,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
      description: "A comedy about a maid of honor who tries to keep her best friend's wedding from falling apart.",
      cast: ["Kristen Wiig", "Maya Rudolph", "Rose Byrne"],
      duration: "125 min",
      humor: "Romantic Comedy"
    },
    {
      id: 8,
      title: "Shaun of the Dead",
      year: 2004,
      director: "Edgar Wright",
      rating: 7.9,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      description: "A zombie comedy about a man who tries to get his life together during a zombie apocalypse.",
      cast: ["Simon Pegg", "Nick Frost", "Kate Ashfield"],
      duration: "99 min",
      humor: "Zombie Comedy"
    },
    {
      id: 9,
      title: "The Hangover",
      year: 2009,
      director: "Todd Phillips",
      rating: 7.7,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      description: "Three friends wake up from a bachelor party with no memory of the previous night.",
      cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
      duration: "100 min",
      humor: "Buddy Comedy"
    }
  ];

  const filteredMovies = comedyMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));

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
        <Text style={styles.pageTitle}>Comedy Movies</Text>
        <Text style={styles.pageSubtitle}>Laugh out loud with the funniest films</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={18} color="#9aa0b4" />
        <TextInput
          placeholder="Search comedy movies..."
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
              
              <View style={styles.humorBadge}>
                <Text style={styles.humorText}>{movie.humor}</Text>
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
                  <FontAwesome name="book" size={16} color="#000" />
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
        <Link href="/comedy" style={[styles.navItem, styles.activeNav]}>
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
    backgroundColor: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
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
    color: '#fdcb6e',
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
  humorBadge: {
    backgroundColor: '#fdcb6e',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  humorText: {
    color: '#000000',
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
    backgroundColor: '#fdcb6e',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
  },
  reviewButtonText: {
    color: '#000000',
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
    backgroundColor: '#fdcb6e',
  },
  navText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
