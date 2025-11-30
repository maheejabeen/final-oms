import { useState } from "react";

function HealthTips() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedTips, setLikedTips] = useState([]);

  const healthTips = [
    {
      id: 1,
      title: "Stay Hydrated",
      content: "Drink at least 8 glasses of water daily to maintain proper hydration and support bodily functions.",
      category: "General",
      icon: "💧",
      readTime: "2 min",
      likes: 45
    },
    {
      id: 2,
      title: "Regular Exercise",
      content: "Aim for 30 minutes of moderate exercise daily. Walking, jogging, or yoga can significantly improve your health.",
      category: "Fitness",
      icon: "🏃‍♂️",
      readTime: "3 min",
      likes: 67
    },
    {
      id: 3,
      title: "Balanced Diet",
      content: "Include fruits, vegetables, whole grains, and lean proteins in your daily meals for optimal nutrition.",
      category: "Nutrition",
      icon: "🥗",
      readTime: "4 min",
      likes: 89
    },
    {
      id: 4,
      title: "Quality Sleep",
      content: "Get 7-9 hours of quality sleep each night. Maintain a consistent sleep schedule for better health.",
      category: "Sleep",
      icon: "😴",
      readTime: "3 min",
      likes: 56
    },
    {
      id: 5,
      title: "Stress Management",
      content: "Practice meditation, deep breathing, or mindfulness to manage stress and improve mental well-being.",
      category: "Mental Health",
      icon: "🧘‍♀️",
      readTime: "5 min",
      likes: 78
    },
    {
      id: 6,
      title: "Regular Health Checkups",
      content: "Schedule annual health checkups and screenings to detect potential health issues early.",
      category: "Prevention",
      icon: "🩺",
      readTime: "3 min",
      likes: 34
    },
    {
      id: 7,
      title: "Hand Hygiene",
      content: "Wash your hands frequently with soap and water for at least 20 seconds to prevent infections.",
      category: "Hygiene",
      icon: "🧼",
      readTime: "2 min",
      likes: 92
    },
    {
      id: 8,
      title: "Limit Screen Time",
      content: "Take regular breaks from screens and practice the 20-20-20 rule to protect your eyes.",
      category: "General",
      icon: "📱",
      readTime: "3 min",
      likes: 41
    }
  ];

  const categories = ["all", "General", "Fitness", "Nutrition", "Sleep", "Mental Health", "Prevention", "Hygiene"];

  const filteredTips = healthTips.filter(tip => 
    selectedCategory === "all" || tip.category === selectedCategory
  );

  const toggleLike = (tipId) => {
    if (likedTips.includes(tipId)) {
      setLikedTips(likedTips.filter(id => id !== tipId));
    } else {
      setLikedTips([...likedTips, tipId]);
    }
  };

  const shareTip = (tip) => {
    alert(`Sharing: "${tip.title}" 📤\nGreat health tip shared!`);
  };

  return (
    <div className="health-tips-page">
      <h1>🌿 Health & Wellness Tips</h1>
      <p>Expert advice for a healthier lifestyle</p>

      <div className="tips-header">
        <div className="category-filter">
          <label>Filter by Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>

        <div className="tips-stats">
          <div className="stat">
            <span className="stat-number">{healthTips.length}</span>
            <span className="stat-label">Total Tips</span>
          </div>
          <div className="stat">
            <span className="stat-number">{filteredTips.length}</span>
            <span className="stat-label">Showing</span>
          </div>
        </div>
      </div>

      <div className="tips-grid">
        {filteredTips.map(tip => (
          <div key={tip.id} className="tip-card">
            <div className="tip-header">
              <div className="tip-icon">{tip.icon}</div>
              <div className="tip-meta">
                <span className="category-badge">{tip.category}</span>
                <span className="read-time">📖 {tip.readTime}</span>
              </div>
            </div>

            <h3>{tip.title}</h3>
            <p className="tip-content">{tip.content}</p>

            <div className="tip-actions">
              <button 
                className={`like-btn ${likedTips.includes(tip.id) ? 'liked' : ''}`}
                onClick={() => toggleLike(tip.id)}
              >
                {likedTips.includes(tip.id) ? '❤️' : '🤍'} {tip.likes + (likedTips.includes(tip.id) ? 1 : 0)}
              </button>
              
              <button 
                className="share-btn"
                onClick={() => shareTip(tip)}
              >
                📤 Share
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTips.length === 0 && (
        <div className="no-tips">
          <p>🔍 No tips found for the selected category.</p>
        </div>
      )}

      <div className="daily-tip">
        <h3>💡 Daily Health Tip</h3>
        <div className="daily-tip-content">
          <div className="tip-icon">🌟</div>
          <div>
            <h4>Take the Stairs</h4>
            <p>Choose stairs over elevators when possible. It's a simple way to add physical activity to your day and improve cardiovascular health.</p>
          </div>
        </div>
      </div>

      <div className="health-resources">
        <h3>📚 Additional Resources</h3>
        <div className="resources-grid">
          <div className="resource-card">
            <h4>🍎 Nutrition Guide</h4>
            <p>Complete guide to healthy eating and meal planning</p>
          </div>
          <div className="resource-card">
            <h4>🏋️‍♀️ Exercise Plans</h4>
            <p>Workout routines for different fitness levels</p>
          </div>
          <div className="resource-card">
            <h4>🧠 Mental Wellness</h4>
            <p>Strategies for maintaining good mental health</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthTips;