export const PORTFOLIO_KNOWLEDGE = `
You are Kayden's portfolio assistant. Answer only from this portfolio knowledge and never invent details. If a question is outside projects, technical skills, education, professional experience, career focus, or public contact methods, say that the information is not in the portfolio and suggest the Contact Me form.

Name: Yikai “Kayden” Chiang.
Education: Master of Information Technology at Queensland University of Technology, completed December 2025.
Background: dental model technology, advertising design, customer service and hospitality. Languages: English and Chinese.
Career focus: Full-Stack Developer, Software Developer, and AI Application Engineer.
Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS. Mobile: React Native, Expo. Backend: Node.js, Express, REST APIs, C#, .NET 8. Database: MongoDB, PostgreSQL, SQL. Cloud/tools: AWS EC2, S3, Route 53, ACM, Cognito, Docker, Git, GitHub. AI: Python, LLM/API integration, AI-assisted applications.
Projects: GravityFit is a React Native and Expo motion-sensor fitness application. Pet Blog is a React Native and Expo mobile social blogging application. TransVideo is a full-stack video transcoding platform using Node.js, FFmpeg, Docker, AWS EC2, JWT, and REST API. C# Gomoku & Notakto is a modular .NET 8 board-game framework with OOP, PvP, and PvC. My SkinNova is an AI personal skincare platform using Next.js, TypeScript, PostgreSQL, Prisma, Supabase Storage, and Clerk.
Public contact methods: LinkedIn https://www.linkedin.com/in/yikai-chiang-ab8872208/ and GitHub https://github.com/kayden624. Prefer guiding visitors to the website's Contact Me section.
`;

const fallbackAnswers = {
  projects: "Kayden's projects include GravityFit (React Native/Expo motion-sensor fitness), Pet Blog (React Native/Expo social blogging), TransVideo (Node.js, FFmpeg, Docker and AWS video transcoding), C# Gomoku & Notakto (.NET 8 board-game framework), and My SkinNova (AI skincare platform with Next.js and PostgreSQL).",
  skills: "Kayden works with React, Next.js, TypeScript, JavaScript, Tailwind CSS, React Native, Expo, Node.js, Express, REST APIs, C#, .NET 8, MongoDB, PostgreSQL, SQL, AWS, Docker, Git, GitHub, Python, and LLM/API integration.",
  experience: "Kayden's background includes dental model technology, advertising design, customer service and hospitality, alongside full-stack web development, React Native and Expo mobile development, Docker and AWS deployment projects, and AI application development.",
  education: "Kayden completed a Master of Information Technology at Queensland University of Technology in December 2025. He also has backgrounds in dental model technology and advertising design.",
  contact: "You can connect with Kayden on LinkedIn (linkedin.com/in/yikai-chiang-ab8872208) or GitHub (github.com/kayden624). For opportunities and messages, please use the Contact Me section on this website.",
  focus: "Kayden is focused on roles as a Full-Stack Developer, Software Developer, or AI Application Engineer."
} as const;

export function getFallbackAnswer(message: string) {
  const text = message.toLowerCase();
  if (/project|portfolio|gravityfit|pet blog|transvideo|skinova|gomoku|notakto/.test(text)) return fallbackAnswers.projects;
  if (/skill|stack|technology|tech|react|node|database|cloud|language/.test(text)) return fallbackAnswers.skills;
  if (/experience|background|work|professional/.test(text)) return fallbackAnswers.experience;
  if (/education|degree|qut|master|study/.test(text)) return fallbackAnswers.education;
  if (/contact|email|linkedin|github|reach/.test(text)) return fallbackAnswers.contact;
  if (/career|focus|role|job/.test(text)) return fallbackAnswers.focus;
  return "That information is not in Kayden's portfolio. Please use the Contact Me form for anything outside his projects, technical skills, education, experience, career focus, or public contact methods.";
}
