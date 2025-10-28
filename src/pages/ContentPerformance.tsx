import { useState, useEffect } from 'react';
import { Search, Filter, ExternalLink, ThumbsUp, MessageCircle, Share2, Eye } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import { generateContentPosts } from '../lib/mockData';
import type { ContentPost } from '../types';

const platformColors = {
  twitter: 'bg-blue-500',
  facebook: 'bg-blue-600',
  instagram: 'bg-pink-500',
  linkedin: 'bg-blue-700',
};

function ContentPerformance() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ContentPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setPosts(generateContentPosts(20));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || post.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <LoadingSpinner size="lg" text="Loading content..." />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Content Performance</h1>
        <p className="text-gray-600 mt-1">
          Track and analyze your content across all platforms
        </p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="input"
            >
              <option value="all">All Platforms</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium text-white rounded ${
                      platformColors[post.platform]
                    }`}
                  >
                    {post.platform}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Likes</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {post.likes.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Comments</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {post.comments.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Shares</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {post.shares.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Views</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {post.views.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-4 flex flex-col items-end gap-2">
                <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Engagement Rate</p>
                  <p className="text-xl font-bold text-primary-600">
                    {post.engagementRate.toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-gray-500">No posts found matching your criteria</p>
        </div>
      )}
    </div>
  );
}

export default ContentPerformance;
