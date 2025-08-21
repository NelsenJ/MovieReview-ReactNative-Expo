import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  rating: number;
  image: string;
  description: string;
  cast: string[];
  duration: string;
  genre: string;
  plot: string;
  review: string;
  userRating?: number;
  userReview?: string;
}

export default function ReviewPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  // Fake movie data - in real app this would come from API
  const movieData: Movie[] = [
    {
      id: 1,
      title: "Mad Max: Fury Road",
      year: 2015,
      director: "George Miller",
      rating: 8.1,
      image: "https://images.unsplash.com/photo-1489599830795-4d5b1a0b0b0b?w=800&h=600&fit=crop",
      description: "A post-apocalyptic action film featuring intense car chases and stunning practical effects.",
      cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
      duration: "120 min",
      genre: "Action",
      plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      review: "Mad Max: Fury Road is a masterpiece of action cinema. George Miller's vision is executed with precision, featuring some of the most spectacular practical effects ever put to film. The movie is essentially one long chase sequence, but it's so well-crafted that it never feels repetitive or boring. Tom Hardy and Charlize Theron deliver outstanding performances, and the world-building is incredibly detailed despite the minimal dialogue. This is action filmmaking at its finest."
    },
    {
      id: 2,
      title: "The Grand Budapest Hotel",
      year: 2014,
      director: "Wes Anderson",
      rating: 8.1,
      image: "https://images.unsplash.com/photo-1489599830795-4d5b1a0b0b0b?w=800&h=600&fit=crop",
      description: "A quirky comedy about a legendary concierge and his young protégé in a famous European hotel.",
      cast: ["Ralph Fiennes", "Tony Revolori", "F. Murray Abraham"],
      duration: "99 min",
      genre: "Comedy",
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      review: "Wes Anderson's The Grand Budapest Hotel is a delightful, whimsical journey through a bygone era of European luxury. The film's visual style is impeccable, with every frame carefully composed and every detail meticulously crafted. Ralph Fiennes gives a career-best performance as the charming and resourceful concierge M. Gustave. The story is both hilarious and touching, with Anderson's signature deadpan humor perfectly balanced with genuine emotion."
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      rating: 9.3,
      image: "https://images.unsplash.com/photo-1489599830795-4d5b1a0b0b0b?w=800&h=600&fit=crop",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      duration: "142 min",
      genre: "Drama",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      review: "The Shawshank Redemption is a powerful testament to the human spirit and the enduring power of hope. Frank Darabont's adaptation of Stephen King's novella is masterfully crafted, with outstanding performances from Tim Robbins and Morgan Freeman. The film explores themes of friendship, redemption, and the resilience of the human spirit in the face of overwhelming adversity. It's a story that resonates deeply with audiences and has earned its place as one of the greatest films ever made."
    },
    {
      id: 4,
      title: "Planet Earth II",
      year: 2016,
      director: "Various Directors",
      rating: 9.5,
      image: "https://images.unsplash.com/photo-1489599830795-4d5b1a0b0b0b?w=800&h=600&fit=crop",
      description: "A stunning exploration of our planet's most beautiful and diverse landscapes, filmed with cutting-edge technology.",
      cast: ["David Attenborough"],
      duration: "6 episodes",
      genre: "Documentary",
      plot: "A stunning exploration of our planet's most beautiful and diverse landscapes, filmed with cutting-edge technology.",
      review: "Planet Earth II is a breathtaking visual masterpiece that showcases the incredible diversity and beauty of our planet. The cinematography is nothing short of revolutionary, with cameras capturing wildlife behavior that has never been seen before. David Attenborough's narration is as compelling as ever, providing context and wonder to the stunning visuals. This series not only entertains but also educates, reminding us of the precious nature of our world and the importance of conservation."
    }
  ];

  useEffect(() => {
    const init = async () => {
      const numericId = Number(id);
      const foundMovie = movieData.find(m => m.id === numericId);
      if (foundMovie) {
        setMovie(foundMovie);
        setUserRating(foundMovie.userRating || 0);
        setUserReview(foundMovie.userReview || '');
      }

      try {
        const stored = await AsyncStorage.getItem(`userReview:${numericId}`);
        if (stored) {
          const parsed = JSON.parse(stored) as { userRating: number; userReview: string };
          setUserRating(parsed.userRating || 0);
          setUserReview(parsed.userReview || '');
        }
      } catch (e) {
        // ignore
      }
    };
    init();
  }, [id]);

  const handleSubmitReview = async () => {
    if (userRating === 0) {
      Alert.alert('Error', 'Please select a rating');
      return;
    }
    if (userReview.trim() === '') {
      Alert.alert('Error', 'Please write a review');
      return;
    }

    try {
      const numericId = Number(id);
      const data = JSON.stringify({ userRating, userReview });
      await AsyncStorage.setItem(`userReview:${numericId}`, data);
    } catch {}

    Alert.alert('Success', 'Your review has been submitted!');
    setIsEditing(false);

    if (movie) {
      setMovie({
        ...movie,
        userRating,
        userReview
      });
    }
  };

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Movie Header */}
      <View style={styles.movieHeader}>
        <Image
          source={imageFailed ? require('../../assets/images/image.jpeg') : { uri: movie.image }}
          style={styles.movieImage}
          onError={() => setImageFailed(true)}
        />
        <View style={styles.movieOverlay}>
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieYear}>{movie.year}</Text>
            <Text style={styles.movieDirector}>Directed by {movie.director}</Text>
            <View style={styles.ratingContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="star" size={16} color="#000" />
                <Text style={styles.ratingText}> {movie.rating}/10</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Movie Details */}
      <View style={styles.content}>
        <View style={styles.metaInfo}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Genre</Text>
            <Text style={styles.metaValue}>{movie.genre}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Duration</Text>
            <Text style={styles.metaValue}>{movie.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Cast</Text>
            <Text style={styles.metaValue}>{movie.cast.join(', ')}</Text>
          </View>
        </View>

        {/* Plot */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Plot Summary</Text>
          <Text style={styles.plotText}>{movie.plot}</Text>
        </View>

        {/* Professional Review */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Review</Text>
          <Text style={styles.reviewText}>{movie.review}</Text>
        </View>

        {/* User Review Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Review</Text>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => setIsEditing(!isEditing)}
            >
              <Text style={styles.editButtonText}>
                {isEditing ? 'Cancel' : 'Edit Review'}
              </Text>
            </TouchableOpacity>
          </View>

          {isEditing ? (
            <View style={styles.reviewForm}>
              <Text style={styles.formLabel}>Your Rating:</Text>
              <View style={styles.starRating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => setUserRating(star)}>
                    <FontAwesome
                      name={star <= userRating ? 'star' : 'star-o'}
                      size={24}
                      color={star <= userRating ? '#ffd700' : '#666'}
                      style={styles.starIcon}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              
              <Text style={styles.formLabel}>Your Review:</Text>
              <TextInput
                style={styles.reviewInput}
                multiline
                numberOfLines={6}
                placeholder="Write your review here..."
                placeholderTextColor="#666"
                value={userReview}
                onChangeText={setUserReview}
              />
              
              <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleSubmitReview}
              >
                <Text style={styles.submitButtonText}>Submit Review</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.userReviewDisplay}>
              {userRating > 0 ? (
                <>
                  <View style={styles.userRating}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.userRatingText}>Your Rating: </Text>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesome
                          key={star}
                          name={star <= userRating ? 'star' : 'star-o'}
                          size={16}
                          color={star <= userRating ? '#ffd700' : '#666'}
                          style={{ marginLeft: 4 }}
                        />
                      ))}
                    </View>
                  </View>
                  <Text style={styles.userReviewText}>{userReview}</Text>
                </>
              ) : (
                <Text style={styles.noReviewText}>No review yet. Click 'Edit Review' to add one!</Text>
              )}
            </View>
          )}
        </View>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="chevron-left" size={16} color="#ffffff" />
            <Text style={styles.backButtonText}> Back to Movies</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  movieHeader: {
    position: 'relative',
    height: 400,
  },
  movieImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  movieOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 24,
  },
  movieInfo: {
    alignItems: 'flex-start',
  },
  movieTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  movieYear: {
    fontSize: 18,
    color: '#cccccc',
    marginBottom: 4,
  },
  movieDirector: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 12,
  },
  ratingContainer: {
    backgroundColor: '#ffd700',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  ratingText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    padding: 24,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 16,
    marginBottom: 32,
  },
  metaItem: {
    alignItems: 'center',
  },
  metaLabel: {
    color: '#667eea',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  metaValue: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  plotText: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
  },
  reviewText: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
  },
  editButton: {
    backgroundColor: '#667eea',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  reviewForm: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 16,
  },
  formLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  starRating: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  starIcon: {
    marginRight: 2,
  },
  reviewInput: {
    backgroundColor: '#2d2d44',
    borderWidth: 1,
    borderColor: '#3d3d54',
    borderRadius: 8,
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#667eea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  userReviewDisplay: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 16,
  },
  userRating: {
    marginBottom: 12,
  },
  userRatingText: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: '600',
  },
  userReviewText: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
  },
  noReviewText: {
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#2d2d44',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 32,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
  },
});
