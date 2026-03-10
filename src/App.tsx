import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from './lib/store';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import SubmitToChallenge from './app/SubmitToChallenge';
import ChallengeLeaderboard from './app/ChallengeLeaderboard';
import WeeklyMealPlanner from './app/WeeklyMealPlanner';
import HomepageGreen from './app/HomepageGreen';
import ImportConfirmation from './app/ImportConfirmation';
import ExpirationTracking from './app/ExpirationTracking';
import RecipeDetail from './app/RecipeDetail';
import Marketplace from './app/Marketplace';
import PrivateCookbook from './app/PrivateCookbook';
import SearchFilter from './app/SearchFilter';
import CreateGroup from './app/CreateGroup';
import CookMode from './app/CookMode';
import MealPlannerCalendar from './app/MealPlannerCalendar';
import CollectionDetail from './app/CollectionDetail';
import SignUp from './app/SignUp';
import GroupActivityFeed from './app/GroupActivityFeed';
import Login from './app/Login';
import MagicImportScan from './app/MagicImportScan';
import ShoppingList from './app/ShoppingList';
import InviteFriends from './app/InviteFriends';
import TrendingCreators from './app/TrendingCreators';
import AchievementsBadges from './app/AchievementsBadges';
import CreateChallenge from './app/CreateChallenge';
import PantryInventory from './app/PantryInventory';
import RecipeImport from './app/RecipeImport';
import Onboarding from './app/Onboarding';
import PasswordReset from './app/PasswordReset';
import HomepageOrange from './app/HomepageOrange';
import InviteMembers from './app/InviteMembers';
import RecipeRankings from './app/RecipeRankings';
import CreateRecipe from './app/CreateRecipe';
import Profile from './app/Profile';

function App() {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated); // used for root redirect

  return (
    <BrowserRouter>
      <div className="font-display bg-background-light text-gray-900 min-h-screen">
        <Routes>
          {/* Public routes */}
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/passwordreset" element={<PasswordReset />} />

          {/* Root redirect */}
          <Route
            path="/"
            element={isAuthenticated ? <HomepageGreen /> : <Navigate to="/onboarding" replace />}
          />

          {/* Protected app routes */}
          <Route path="/homepagegreen" element={<ProtectedRoute><HomepageGreen /></ProtectedRoute>} />
          <Route path="/homepageorange" element={<ProtectedRoute><HomepageOrange /></ProtectedRoute>} />
          <Route path="/recipedetail/:id" element={<ProtectedRoute><RecipeDetail /></ProtectedRoute>} />
          <Route path="/recipedetail" element={<ProtectedRoute><RecipeDetail /></ProtectedRoute>} />
          <Route path="/createrecipe" element={<ProtectedRoute><CreateRecipe /></ProtectedRoute>} />
          <Route path="/cookmode" element={<ProtectedRoute><CookMode /></ProtectedRoute>} />
          <Route path="/searchfilter" element={<ProtectedRoute><SearchFilter /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/privatecookbook" element={<ProtectedRoute><PrivateCookbook /></ProtectedRoute>} />
          <Route path="/collectiondetail" element={<ProtectedRoute><CollectionDetail /></ProtectedRoute>} />
          <Route path="/weeklymealplanner" element={<ProtectedRoute><WeeklyMealPlanner /></ProtectedRoute>} />
          <Route path="/mealplannercalendar" element={<ProtectedRoute><MealPlannerCalendar /></ProtectedRoute>} />
          <Route path="/shoppinglist" element={<ProtectedRoute><ShoppingList /></ProtectedRoute>} />
          <Route path="/pantryinventory" element={<ProtectedRoute><PantryInventory /></ProtectedRoute>} />
          <Route path="/expirationtracking" element={<ProtectedRoute><ExpirationTracking /></ProtectedRoute>} />
          <Route path="/magicimportscan" element={<ProtectedRoute><MagicImportScan /></ProtectedRoute>} />
          <Route path="/recipeimport" element={<ProtectedRoute><RecipeImport /></ProtectedRoute>} />
          <Route path="/importconfirmation" element={<ProtectedRoute><ImportConfirmation /></ProtectedRoute>} />
          <Route path="/groupactivityfeed" element={<ProtectedRoute><GroupActivityFeed /></ProtectedRoute>} />
          <Route path="/creategroup" element={<ProtectedRoute><CreateGroup /></ProtectedRoute>} />
          <Route path="/invitemembers" element={<ProtectedRoute><InviteMembers /></ProtectedRoute>} />
          <Route path="/invitefriends" element={<ProtectedRoute><InviteFriends /></ProtectedRoute>} />
          <Route path="/marketplace" element={<ProtectedRoute><Marketplace /></ProtectedRoute>} />
          <Route path="/reciperankings" element={<ProtectedRoute><RecipeRankings /></ProtectedRoute>} />
          <Route path="/trendingcreators" element={<ProtectedRoute><TrendingCreators /></ProtectedRoute>} />
          <Route path="/achievementsbadges" element={<ProtectedRoute><AchievementsBadges /></ProtectedRoute>} />
          <Route path="/createchallenge" element={<ProtectedRoute><CreateChallenge /></ProtectedRoute>} />
          <Route path="/challengeleaderboard" element={<ProtectedRoute><ChallengeLeaderboard /></ProtectedRoute>} />
          <Route path="/submittochallenge" element={<ProtectedRoute><SubmitToChallenge /></ProtectedRoute>} />

          {/* Catch-all — redirect unmatched URLs to root (auth-aware) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
