import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <div className="font-display bg-background-light text-gray-900 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-brand-green">
                  CookIt! Screens
                </h1>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/submittochallenge"
                    className="text-primary hover:underline text-lg"
                  >
                    SubmitToChallenge Screen
                  </Link>
                  <Link
                    to="/challengeleaderboard"
                    className="text-primary hover:underline text-lg"
                  >
                    ChallengeLeaderboard Screen
                  </Link>
                  <Link
                    to="/weeklymealplanner"
                    className="text-primary hover:underline text-lg"
                  >
                    WeeklyMealPlanner Screen
                  </Link>
                  <Link
                    to="/homepagegreen"
                    className="text-primary hover:underline text-lg"
                  >
                    HomepageGreen Screen
                  </Link>
                  <Link
                    to="/importconfirmation"
                    className="text-primary hover:underline text-lg"
                  >
                    ImportConfirmation Screen
                  </Link>
                  <Link
                    to="/expirationtracking"
                    className="text-primary hover:underline text-lg"
                  >
                    ExpirationTracking Screen
                  </Link>
                  <Link
                    to="/recipedetail"
                    className="text-primary hover:underline text-lg"
                  >
                    RecipeDetail Screen
                  </Link>
                  <Link
                    to="/marketplace"
                    className="text-primary hover:underline text-lg"
                  >
                    Marketplace Screen
                  </Link>
                  <Link
                    to="/privatecookbook"
                    className="text-primary hover:underline text-lg"
                  >
                    PrivateCookbook Screen
                  </Link>
                  <Link
                    to="/searchfilter"
                    className="text-primary hover:underline text-lg"
                  >
                    SearchFilter Screen
                  </Link>
                  <Link
                    to="/creategroup"
                    className="text-primary hover:underline text-lg"
                  >
                    CreateGroup Screen
                  </Link>
                  <Link
                    to="/cookmode"
                    className="text-primary hover:underline text-lg"
                  >
                    CookMode Screen
                  </Link>
                  <Link
                    to="/mealplannercalendar"
                    className="text-primary hover:underline text-lg"
                  >
                    MealPlannerCalendar Screen
                  </Link>
                  <Link
                    to="/collectiondetail"
                    className="text-primary hover:underline text-lg"
                  >
                    CollectionDetail Screen
                  </Link>
                  <Link
                    to="/signup"
                    className="text-primary hover:underline text-lg"
                  >
                    SignUp Screen
                  </Link>
                  <Link
                    to="/groupactivityfeed"
                    className="text-primary hover:underline text-lg"
                  >
                    GroupActivityFeed Screen
                  </Link>
                  <Link
                    to="/login"
                    className="text-primary hover:underline text-lg"
                  >
                    Login Screen
                  </Link>
                  <Link
                    to="/magicimportscan"
                    className="text-primary hover:underline text-lg"
                  >
                    MagicImportScan Screen
                  </Link>
                  <Link
                    to="/shoppinglist"
                    className="text-primary hover:underline text-lg"
                  >
                    ShoppingList Screen
                  </Link>
                  <Link
                    to="/invitefriends"
                    className="text-primary hover:underline text-lg"
                  >
                    InviteFriends Screen
                  </Link>
                  <Link
                    to="/trendingcreators"
                    className="text-primary hover:underline text-lg"
                  >
                    TrendingCreators Screen
                  </Link>
                  <Link
                    to="/achievementsbadges"
                    className="text-primary hover:underline text-lg"
                  >
                    AchievementsBadges Screen
                  </Link>
                  <Link
                    to="/createchallenge"
                    className="text-primary hover:underline text-lg"
                  >
                    CreateChallenge Screen
                  </Link>
                  <Link
                    to="/pantryinventory"
                    className="text-primary hover:underline text-lg"
                  >
                    PantryInventory Screen
                  </Link>
                  <Link
                    to="/recipeimport"
                    className="text-primary hover:underline text-lg"
                  >
                    RecipeImport Screen
                  </Link>
                  <Link
                    to="/onboarding"
                    className="text-primary hover:underline text-lg"
                  >
                    Onboarding Screen
                  </Link>
                  <Link
                    to="/passwordreset"
                    className="text-primary hover:underline text-lg"
                  >
                    PasswordReset Screen
                  </Link>
                  <Link
                    to="/homepageorange"
                    className="text-primary hover:underline text-lg"
                  >
                    HomepageOrange Screen
                  </Link>
                  <Link
                    to="/invitemembers"
                    className="text-primary hover:underline text-lg"
                  >
                    InviteMembers Screen
                  </Link>
                  <Link
                    to="/reciperankings"
                    className="text-primary hover:underline text-lg"
                  >
                    RecipeRankings Screen
                  </Link>
                  <Link
                    to="/createrecipe"
                    className="text-primary hover:underline text-lg"
                  >
                    CreateRecipe Screen
                  </Link>
                  <Link
                    to="/profile"
                    className="text-primary hover:underline text-lg"
                  >
                    Profile Screen
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/submittochallenge" element={<SubmitToChallenge />} />
          <Route
            path="/challengeleaderboard"
            element={<ChallengeLeaderboard />}
          />
          <Route path="/weeklymealplanner" element={<WeeklyMealPlanner />} />
          <Route path="/homepagegreen" element={<HomepageGreen />} />
          <Route path="/importconfirmation" element={<ImportConfirmation />} />
          <Route path="/expirationtracking" element={<ExpirationTracking />} />
          <Route path="/recipedetail" element={<RecipeDetail />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/privatecookbook" element={<PrivateCookbook />} />
          <Route path="/searchfilter" element={<SearchFilter />} />
          <Route path="/creategroup" element={<CreateGroup />} />
          <Route path="/cookmode" element={<CookMode />} />
          <Route
            path="/mealplannercalendar"
            element={<MealPlannerCalendar />}
          />
          <Route path="/collectiondetail" element={<CollectionDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/groupactivityfeed" element={<GroupActivityFeed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/magicimportscan" element={<MagicImportScan />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
          <Route path="/invitefriends" element={<InviteFriends />} />
          <Route path="/trendingcreators" element={<TrendingCreators />} />
          <Route path="/achievementsbadges" element={<AchievementsBadges />} />
          <Route path="/createchallenge" element={<CreateChallenge />} />
          <Route path="/pantryinventory" element={<PantryInventory />} />
          <Route path="/recipeimport" element={<RecipeImport />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/homepageorange" element={<HomepageOrange />} />
          <Route path="/invitemembers" element={<InviteMembers />} />
          <Route path="/reciperankings" element={<RecipeRankings />} />
          <Route path="/createrecipe" element={<CreateRecipe />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
