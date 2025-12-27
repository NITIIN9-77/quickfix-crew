import React, { useState, useRef } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
}

const StarIcon: React.FC<{ filled: boolean; className?: string; onClick?: () => void }> = ({ filled, className, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${filled ? 'text-yellow-400' : 'text-slate-600'} transition-colors duration-200 cursor-pointer`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Reviews: React.FC = () => {
  // Cleared initial mock reviews as requested
  const [reviews, setReviews] = useState<Review[]>([]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 0 });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRatingClick = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.rating === 0) {
      alert("Please select a star rating.");
      return;
    }

    const reviewToAdd: Review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      image: imagePreview || undefined
    };

    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ name: '', text: '', rating: 0 });
    handleRemoveImage();
    setIsFormOpen(false);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-surface border-t border-slate-700 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary">Customer Reviews</h2>
          <p className="mt-4 text-lg text-textSecondary max-w-2xl mx-auto">
            {reviews.length > 0 
              ? "See what our happy customers are saying about our services."
              : "Be the first to leave a review for our premium services!"}
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <button
            type="button"
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:brightness-110 transition-all flex items-center"
          >
            <span className="mr-2">{isFormOpen ? 'Cancel' : 'Write a Review'}</span>
            {!isFormOpen && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            )}
          </button>
        </div>

        {isFormOpen && (
          <div className="max-w-2xl mx-auto mb-16 bg-background p-6 rounded-lg border border-slate-600 animate-slide-in-up">
            <h3 className="text-xl font-bold text-textPrimary mb-4">Share your experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">Your Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      filled={star <= newReview.rating}
                      className="w-8 h-8 hover:scale-110"
                      onClick={() => handleRatingClick(star)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-3 py-2 bg-surface border border-slate-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-textPrimary placeholder:text-slate-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">Review</label>
                <textarea
                  required
                  rows={4}
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full px-3 py-2 bg-surface border border-slate-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-textPrimary placeholder:text-slate-500"
                  placeholder="Tell us about your experience..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">Add Photo (Optional)</label>
                <div className="flex items-center space-x-4">
                  <label className="cursor-pointer bg-slate-700 hover:bg-slate-600 text-textSecondary px-4 py-2 rounded-md transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Upload Photo
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={fileInputRef}
                      onChange={handleImageChange} 
                      className="hidden" 
                    />
                  </label>
                  {imagePreview && (
                    <div className="relative">
                      <img src={imagePreview} alt="Preview" className="h-16 w-16 object-cover rounded-md border border-slate-600" />
                      <button 
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 shadow-sm hover:bg-red-600"
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:brightness-110 transition-colors"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-background rounded-lg p-6 border border-slate-800 shadow-md hover:border-slate-600 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-textPrimary text-lg">{review.name}</h4>
                  <div className="flex items-center space-x-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= review.rating} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-textSecondary bg-slate-800 px-2 py-1 rounded-full">{review.date}</span>
              </div>
              
              <p className="text-textSecondary text-sm mb-4 leading-relaxed">{review.text}</p>
              
              {review.image && (
                <div className="mt-3 overflow-hidden rounded-md border border-slate-700">
                  <img src={review.image} alt={`Review by ${review.name}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;