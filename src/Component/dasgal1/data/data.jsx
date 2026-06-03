import AlexMorgan from "../assets/AlexMorgan.avif";
import SophieLee from "../assets/SophieLee.avif";

// This file is the main content database for the FitZone page.
// To build a similar website for another business, start here:
// change the text, image imports, menu names, program lists, trainer lists,
// modal labels, and footer items before changing component layout code.

// Each menu item becomes one link in the desktop and mobile navigation bar.
// The href values point to section ids such as id="home" or id="programs".
export const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#programs" },
    { name: "Contact", href: "#contact" },
];

// These cards are shown in the "Our Programs" section and are reused by modals.
// Keep every id unique. Other arrays use the same ids to connect details,
// modal content, active program progress, and add/cancel behavior.
export const programs = [
    {
        id: 1,
        title: "Strength Training",
        description: "Build muscle and improve your full body strength.",
        icon: "🏋️",
    },
    {
        id: 2,
        title: "Yoga Class",
        description: "Increase flexibility and relax your mind and body.",
        icon: "🧘",
    },
    {
        id: 3,
        title: "Cardio Workout",
        description: "Boost endurance and improve heart health.",
        icon: "🏃",
    },
];

// These objects power the "View Plans" page.
// Add one object per plan, and keep the id/title aligned with programs above
// if you want the plan to describe one of the main program cards.
export const planDetails = [
    {
        id: 1,
        title: "Strength Training",
        duration: "6 weeks",
        schedule: "Mon, Wed, Fri",
        goal: "Improve strength, posture, and total-body control.",
        milestones: [
            "Week 1-2: Learn foundational lifting form",
            "Week 3-4: Increase resistance and consistency",
            "Week 5-6: Track measurable strength gains",
        ],
    },
    {
        id: 2,
        title: "Yoga Class",
        duration: "5 weeks",
        schedule: "Tue, Thu",
        goal: "Build flexibility, breath control, and recovery habits.",
        milestones: [
            "Week 1-2: Focus on mobility and breathing basics",
            "Week 3-4: Improve stability and balance routines",
            "Week 5: Create a calm personal recovery flow",
        ],
    },
    {
        id: 3,
        title: "Cardio Workout",
        duration: "4 weeks",
        schedule: "Sat, Sun",
        goal: "Boost endurance and create a sustainable cardio routine.",
        milestones: [
            "Week 1: Build a simple cardio habit",
            "Week 2-3: Increase pace and interval tolerance",
            "Week 4: Finish with stronger stamina and recovery",
        ],
    },
];

// Text for the large "Start Today" modal.
// The introductions object is keyed by program id, so introductions[1]
// describes the program whose id is 1 in the programs array.
export const programmingTracksModalContent = {
    eyebrow: "Start Today",
    title: "Choose your fitness program",
    description:
        "Pick a training plan that fits your weekly routine and add it to your active programs.",
    closeLabel: "Close",
    sessionsLabel: "Sessions",
    scheduleLabel: "Schedule",
    addLabel: "Add to My Programs",
    addedLabel: "Added",
    introductions: {
        1: {
            duration: "6 weeks",
            sessions: "12 sessions",
            schedule: "Mon, Wed, Fri",
            description: "Build muscle and improve your full body strength.",
            highlights: [
                "Learn safe lifting form",
                "Increase resistance gradually",
                "Track measurable strength gains",
            ],
        },
        2: {
            duration: "5 weeks",
            sessions: "10 sessions",
            schedule: "Tue, Thu",
            description: "Increase flexibility and relax your mind and body.",
            highlights: [
                "Improve mobility basics",
                "Practice breath control",
                "Build a recovery routine",
            ],
        },
        3: {
            duration: "4 weeks",
            sessions: "8 sessions",
            schedule: "Sat, Sun",
            description: "Boost endurance and improve heart health.",
            highlights: [
                "Create a steady cardio habit",
                "Improve interval tolerance",
                "Build stronger stamina",
            ],
        },
    },
};

// Default progress information used for the user's "My Programs" page.
// In a real website this would usually come from a database after login.
export const activePrograms = [
    {
        id: 1,
        coach: "Alex Morgan",
        schedule: "Mon, Wed, Fri",
        progress: "2 of 12 sessions completed",
    },
    {
        id: 2,
        coach: "Sophie Lee",
        schedule: "Tue, Thu",
        progress: "1 of 10 sessions completed",
    },
    {
        id: 3,
        coach: "Jordan Miles",
        schedule: "Sat, Sun",
        progress: "0 of 8 sessions completed",
    },
];

// This is extra course-style data. It is not currently used by the FitZone
// homepage, but it shows the same reusable data pattern for another website.
export const programmingCourses = [
    {
        id: 1,
        title: "HTML & CSS Foundations",
        duration: "4 weeks",
        lessons: "12 lessons",
        level: "Beginner",
        description:
            "Learn how websites are structured and styled by building clean page layouts, cards, buttons, and responsive sections.",
        highlights: [
            "Create real page sections with HTML",
            "Style layouts with modern CSS",
            "Practice responsive design basics",
        ],
    },
    {
        id: 2,
        title: "JavaScript Starter Lab",
        duration: "5 weeks",
        lessons: "15 lessons",
        level: "Beginner to Intermediate",
        description:
            "Understand variables, functions, arrays, and DOM events by making interactive mini features that feel like real apps.",
        highlights: [
            "Work with click events and forms",
            "Build small interactive widgets",
            "Strengthen problem-solving logic",
        ],
    },
    {
        id: 3,
        title: "React UI Builder",
        duration: "6 weeks",
        lessons: "18 lessons",
        level: "Intermediate",
        description:
            "Turn ideas into reusable components and connect them into a polished frontend experience with practical React workflows.",
        highlights: [
            "Build reusable components",
            "Pass props and manage simple state",
            "Create a demo portfolio-ready project",
        ],
    },
];

// Trainer data controls both the trainer cards and the detailed advice page.
// To add a trainer, import their image at the top and add another object here.
export const trainers = [
    {
        id: 1,
        name: "Alex Morgan",
        specialty: "Strength Coach",
        image: AlexMorgan,
        adviceTitle: "Train with consistency, not guesswork",
        advice:
            "Alex recommends keeping your workouts simple and trackable. Focus on clean form first, then increase intensity gradually over time.",
        tips: [
            "Start each week with one measurable strength goal",
            "Rest enough between sessions to recover properly",
            "Track reps, sets, and how strong you feel each workout",
        ],
    },
    {
        id: 2,
        name: "Sophie Lee",
        specialty: "Yoga Trainer",
        image: SophieLee,
        adviceTitle: "Progress feels better when your body feels supported",
        advice:
            "Sophie encourages students to combine movement with breath awareness. Her advice is to improve flexibility slowly and make recovery part of your routine.",
        tips: [
            "Use breathing to relax into each stretch",
            "Practice short mobility sessions on non-training days",
            "Focus on posture quality more than speed",
        ],
    },
];

// All signup/login modal wording and input definitions live here.
// To add a new form field, add an object to fields; AuthModal automatically
// renders the correct input using name, label, type, and placeholder.
export const authContent = {
    signup: {
        eyebrow: "Join FitZone",
        title: "Register for your program",
        description:
            "Create your membership profile to book classes, save your schedule, and join your favorite training programs.",
        fields: [
            {
                name: "fullName",
                label: "Full Name",
                type: "text",
                placeholder: "Enter your full name",
            },
            {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "Enter your email",
            },
            {
                name: "preferredProgram",
                label: "Preferred Program",
                type: "text",
                placeholder: "Strength Training",
            },
            {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "Create a password",
            },
        ],
        primaryLabel: "Join Program",
        secondaryText: "Already have an account?",
        secondaryAction: "Login",
    },
    login: {
        eyebrow: "Welcome Back",
        title: "Login to your fitness account",
        description:
            "Continue your workouts, check trainer updates, and manage your active membership plan.",
        fields: [
            {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "Enter your email",
            },
            {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "Enter your password",
            },
        ],
        primaryLabel: "Login",
        secondaryText: "Need to register first?",
        secondaryAction: "Join Now",
    },
};

// Footer link labels. They currently use placeholder href="#" links in Footer.
export const footerItems = ["About", "Classes", "Membership", "Support"];
