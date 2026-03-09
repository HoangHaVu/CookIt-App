import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SubmitToChallenge from './app/SubmitToChallenge';
import ChallengeLeaderboard from './app/ChallengeLeaderboard';
import WeeklyMealPlanner from './app/WeeklyMealPlanner';
import HomepageGreen from './app/HomepageGreen';
import RecipeDetail from './app/RecipeDetail';
import CreateGroup from './app/CreateGroup';
import MealPlannerCalendar from './app/MealPlannerCalendar';
import GroupActivityFeed from './app/GroupActivityFeed';
import ShoppingList from './app/ShoppingList';
import CreateChallenge from './app/CreateChallenge';
import PantryInventory from './app/PantryInventory';
import Onboarding from './app/Onboarding';
import HomepageOrange from './app/HomepageOrange';
import InviteMembers from './app/InviteMembers';
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
                    to="/recipedetail"
                    className="text-primary hover:underline text-lg"
                  >
                    RecipeDetail Screen
                  </Link>
                  <Link
                    to="/creategroup"
                    className="text-primary hover:underline text-lg"
                  >
                    CreateGroup Screen
                  </Link>
                  <Link
                    to="/mealplannercalendar"
                    className="text-primary hover:underline text-lg"
                  >
                    MealPlannerCalendar Screen
                  </Link>
                  <Link
                    to="/groupactivityfeed"
                    className="text-primary hover:underline text-lg"
                  >
                    GroupActivityFeed Screen
                  </Link>
                  <Link
                    to="/shoppinglist"
                    className="text-primary hover:underline text-lg"
                  >
                    ShoppingList Screen
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
                    to="/onboarding"
                    className="text-primary hover:underline text-lg"
                  >
                    Onboarding Screen
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
          <Route path="/recipedetail" element={<RecipeDetail />} />
          <Route path="/creategroup" element={<CreateGroup />} />
          <Route
            path="/mealplannercalendar"
            element={<MealPlannerCalendar />}
          />
          <Route path="/groupactivityfeed" element={<GroupActivityFeed />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
          <Route path="/createchallenge" element={<CreateChallenge />} />
          <Route path="/pantryinventory" element={<PantryInventory />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/homepageorange" element={<HomepageOrange />} />
          <Route path="/invitemembers" element={<InviteMembers />} />
          <Route path="/createrecipe" element={<CreateRecipe />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
