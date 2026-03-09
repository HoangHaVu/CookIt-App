import fs from 'fs';
import * as cheerio from 'cheerio';
import prettier from 'prettier';

const TARGET_SCREENS = {
    "Profile - Orange Button Style": "Profile",
    "Create Challenge - New Style": "CreateChallenge",
    "Submit to Challenge - New Style": "SubmitToChallenge",
    "Invite Members - Refined Style": "InviteMembers",
    "Challenge Leaderboard - New Style": "ChallengeLeaderboard",
    "Weekly Meal Planner - New Style": "WeeklyMealPlanner",
    "Pantry Inventory - New Style": "PantryInventory",
    "Create Recipe - Updated Style": "CreateRecipe",
    "Recipe Detail - Updated Style": "RecipeDetail",
    "Shopping List - New Style": "ShoppingList",
    "Group Activity Feed - New Style": "GroupActivityFeed",
    "Onboarding - Refined Style": "Onboarding",
    "Meal Planner Calendar - New Style": "MealPlannerCalendar",
    "Homepage - Orange Button Style": "HomepageOrange",
    "Homepage - Refined Two-Tone Green Style": "HomepageGreen",
    "Create Group - New Style": "CreateGroup",
    "Private Cookbook - New Style": "PrivateCookbook",
    "Cook Mode - Updated Style": "CookMode",
    "Achievements & Badges - New Style": "AchievementsBadges",
    "Sign Up - New Style": "SignUp",
    "Login - New Style": "Login",
    "Trending Creators": "TrendingCreators",
    "Recipe Rankings": "RecipeRankings",
    "Recipe Import - Updated Style": "RecipeImport",
    "Import Confirmation": "ImportConfirmation",
    "Invite Friends": "InviteFriends",
    "Expiration Tracking - New Style": "ExpirationTracking",
    "Search & Filter - Updated Style": "SearchFilter",
    "Magic Import Scan": "MagicImportScan",
    "Collection Detail - New Style": "CollectionDetail",
    "Password Reset - New Style": "PasswordReset",
    "Marketplace - Updated Style": "Marketplace"
};

const main = async () => {
    const rawData = fs.readFileSync("/Users/hoanghavu/.gemini/antigravity/brain/a5b88289-1cc2-49d4-85bc-73c1ff307ada/.system_generated/steps/100/output.txt", "utf-8");
    const json = JSON.parse(rawData);

    let routeComponents = [];

    for (const screen of json.screens) {
        if (!TARGET_SCREENS[screen.title]) continue;

        const compName = TARGET_SCREENS[screen.title];
        console.log(`Downloading ${compName}...`);

        try {
            const res = await fetch(screen.htmlCode.downloadUrl);
            const html = await res.text();

            const $ = cheerio.load(html);
            let bodyHtml = $('body').html() || '';

            let jsx = bodyHtml;
            jsx = jsx.replace(/class="/g, 'className="');
            jsx = jsx.replace(/for="/g, 'htmlFor="');

            jsx = jsx.replace(/<\/(path|circle|img|input|br|hr|meta|link)>/g, '');
            const tagsToClose = ['img', 'input', 'br', 'hr', 'meta', 'link', 'path', 'circle'];
            for (const tag of tagsToClose) {
                const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
                jsx = jsx.replace(regex, `<${tag}$1 />`);
            }
            jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
                let unescapedStyles = styles.replace(/&quot;/g, "'");
                const rules = unescapedStyles.split(';').filter(s => s.trim().length > 0);
                const objStr = rules.map(rule => {
                    const colonIdx = rule.indexOf(':');
                    if (colonIdx === -1) return '';
                    let key = rule.slice(0, colonIdx).trim();
                    let val = rule.slice(colonIdx + 1).trim();
                    if (!key) return '';
                    let camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                    if (key.startsWith('--')) camelKey = `'${key}'`;
                    return `${camelKey}: ${JSON.stringify(val)}`;
                }).filter(Boolean).join(', ');
                return `style={{${objStr}}}`;
            });

            const svgAttrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'xmlns:xlink', 'stroke-miterlimit', 'stroke-opacity', 'fill-opacity'];
            for (const attr of svgAttrs) {
                const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase()).replace(/:([a-z])/g, g => g[1].toUpperCase());
                jsx = jsx.replace(new RegExp(attr + '=', 'g'), camel + '=');
            }

            jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
            jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
            jsx = jsx.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

            // Fix boolean attributes
            jsx = jsx.replace(/readonly=""/g, 'readOnly={true}');
            jsx = jsx.replace(/checked=""/g, 'checked={true}');
            jsx = jsx.replace(/disabled=""/g, 'disabled={true}');
            jsx = jsx.replace(/required=""/g, 'required={true}');
            jsx = jsx.replace(/selected=""/g, 'selected={true}');
            jsx = jsx.replace(/rows="(\d+)"/g, 'rows={$1}');

            let compString = `export default function ${compName}() {\n  return (\n    <>\n      ${jsx}\n    </>\n  );\n}\n`;

            try {
                compString = await prettier.format(compString, { parser: "typescript", singleQuote: true });
            } catch (e) {
                console.warn(`Format failed for ${compName}, application of JSX fallback format might be needed.`);
            }

            fs.writeFileSync(`./src/app/${compName}.tsx`, compString);
            routeComponents.push(compName);
            console.log(`Saved ${compName}.tsx`);
        } catch (err) {
            console.error(`Failed ${compName}:`, err);
        }
    }

    let appTsx = `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n`;
    appTsx += routeComponents.map(c => `import ${c} from './app/${c}';`).join('\n') + `\n\n`;
    appTsx += `function App() {\n  return (\n    <BrowserRouter>\n      <div className="font-display bg-background-light text-gray-900 min-h-screen">\n        <Routes>\n          <Route path="/" element={\n            <div className="p-8 max-w-4xl mx-auto">\n              <h1 className="text-3xl font-bold mb-6 text-brand-green">CookIt! Screens</h1>\n              <div className="flex flex-col gap-4">\n`;
    appTsx += routeComponents.map(c => `                <Link to="/${c.toLowerCase()}" className="text-primary hover:underline text-lg">${c} Screen</Link>`).join('\n') + `\n`;
    appTsx += `              </div>\n            </div>\n          } />\n`;
    appTsx += routeComponents.map(c => `          <Route path="/${c.toLowerCase()}" element={<${c} />} />`).join('\n') + `\n`;
    appTsx += `        </Routes>\n      </div>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n`;

    try {
        appTsx = await prettier.format(appTsx, { parser: "typescript", singleQuote: true });
    } catch (e) { }

    fs.writeFileSync('./src/App.tsx', appTsx);
    console.log("App.tsx updated successfully!");
};

main();
