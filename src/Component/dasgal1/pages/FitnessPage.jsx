import React, { useState } from "react";
import Navbar from "../components/Topbar";
import Banner from "../components/Intro";
import CourseList from "../components/ProgramList";
import WhyChooseUs from "../components/TrainerSection";
import Footer from "../components/BottomFooter";
import ProgrammingTracksModal from "../components/ProgrammingTracksModal";
import AuthModal from "../components/AuthModal";
import MyPrograms from "../components/MyPrograms";
import TrainingPlansView from "../components/TrainingPlansView";
import TrainerAdviceView from "../components/TrainerAdviceView";

// Web2 is the main page controller for this website.
// It decides which screen is visible, stores temporary UI state, and passes
// event handlers down to smaller components such as Navbar, Banner, and modals.
const Web2 = () => {
  // Opens and closes the "Choose your fitness program" modal from Start Today.
  const [isTracksModalOpen, setIsTracksModalOpen] = useState(false);

  // authMode controls the login/register modal.
  // null means the modal is hidden, "signup" shows the register form,
  // and "login" shows the login form.
  const [authMode, setAuthMode] = useState(null);

  // authMessage is used for feedback such as login errors or signup success.
  const [authMessage, setAuthMessage] = useState("");

  // This demo stores only one registered account in React state.
  // For a real website, replace this with a backend or Firebase/Auth API.
  const [account, setAccount] = useState(null);

  // currentUser is set after a successful login.
  // Components use this to know whether the visitor can join a program.
  const [currentUser, setCurrentUser] = useState(null);

  // If a visitor tries to join a program before logging in, we remember that
  // program id here and add it automatically after a successful login.
  const [pendingProgramId, setPendingProgramId] = useState(null);

  // activeView works like simple page routing without React Router.
  // Possible values here are "home", "programs", "plans", and "trainer".
  const [activeView, setActiveView] = useState("home");

  // Stores the ids of programs the current user has added.
  // The ids match the programs array in ../data/data.jsx.
  const [activeProgramIds, setActiveProgramIds] = useState([]);

  // Stores which trainer was clicked before showing the trainer advice page.
  const [activeTrainerId, setActiveTrainerId] = useState(null);

  // Adds a program id only once, so clicking the same Add button cannot create
  // duplicate cards in "My Programs".
  const addProgram = (programId) => {
    setActiveProgramIds((currentIds) => {
      if (currentIds.includes(programId)) {
        return currentIds;
      }

      return [...currentIds, programId];
    });
  };

  // Main join-program guard.
  // If there is no logged-in user, open login first; otherwise add immediately.
  const requestAddProgram = (programId) => {
    if (!currentUser) {
      setPendingProgramId(programId);
      setAuthMessage("Please log in to join a program.");
      setAuthMode("login");
      return;
    }

    addProgram(programId);
  };

  // Removes one program from the active list by filtering out its id.
  const cancelProgram = (programId) => {
    setActiveProgramIds((currentIds) => currentIds.filter((id) => id !== programId));
  };

  // Opens either signup or login and clears old pending messages.
  const openAuthModal = (mode) => {
    setPendingProgramId(null);
    setAuthMessage("");
    setAuthMode(mode);
  };

  // Closes the auth modal and resets temporary auth state.
  const closeAuthModal = () => {
    setPendingProgramId(null);
    setAuthMode(null);
    setAuthMessage("");
  };

  // Used by the link inside AuthModal to switch between login and signup.
  const switchAuthMode = (mode) => {
    setAuthMode(mode);
    setAuthMessage("");
  };

  // Creates the demo account from form values.
  // This intentionally does not persist after refresh; replace this function
  // if the similar website needs real registration.
  const handleSignup = (formValues) => {
    const nextAccount = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      preferredProgram: formValues.preferredProgram.trim(),
      password: formValues.password,
    };

    setAccount(nextAccount);
    setAuthMode("login");
    setAuthMessage("Account created successfully. Please log in.");
  };

  // Checks the submitted login values against the demo account.
  // On success, it also adds any program that was waiting in pendingProgramId.
  const handleLogin = (formValues) => {
    const email = formValues.email.trim();

    if (!account) {
      setAuthMessage("No account found. Please register first.");
      return;
    }

    if (account.email !== email || account.password !== formValues.password) {
      setAuthMessage("Email or password is incorrect.");
      return;
    }

    setCurrentUser({
      fullName: account.fullName,
      email: account.email,
      preferredProgram: account.preferredProgram,
      phone: account.phone || "",
      city: account.city || "",
      fitnessGoal: account.fitnessGoal || "",
      password: account.password,
    });

    if (pendingProgramId) {
      addProgram(pendingProgramId);
      setPendingProgramId(null);
    }

    closeAuthModal();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setAuthMode(null);
    setAuthMessage("");
    setPendingProgramId(null);
    setActiveView("home");
    window.scrollTo(0, 0);
  };

  const handleProfileUpdate = (profileValues) => {
    const nextAccount = {
      ...account,
      fullName: profileValues.fullName.trim(),
      email: profileValues.email.trim(),
      phone: profileValues.phone.trim(),
      city: profileValues.city.trim(),
      preferredProgram: profileValues.preferredProgram.trim(),
      fitnessGoal: profileValues.fitnessGoal.trim(),
      password: profileValues.password,
    };

    setAccount(nextAccount);
    setCurrentUser(nextAccount);
  };

  // The next four functions switch between the simple page views.
  // Each function closes overlays first and scrolls to the top for a page-like feel.
  const showMyPrograms = () => {
    setIsTracksModalOpen(false);
    setAuthMode(null);
    setActiveView("programs");
    window.scrollTo(0, 0);
  };

  const showHome = () => {
    setActiveView("home");
    setActiveTrainerId(null);
    window.scrollTo(0, 0);
  };

  const showPlanDetails = () => {
    setIsTracksModalOpen(false);
    setAuthMode(null);
    setActiveView("plans");
    window.scrollTo(0, 0);
  };

  const showTrainerAdvice = (trainerId) => {
    setIsTracksModalOpen(false);
    setAuthMode(null);
    setActiveTrainerId(trainerId);
    setActiveView("trainer");
    window.scrollTo(0, 0);
  };

  // Build the auth modal once so every view can render the same login/signup UI.
  const authModal = (
    <AuthModal
      account={account}
      message={authMessage}
      mode={authMode}
      onClose={closeAuthModal}
      onLogin={handleLogin}
      onSignup={handleSignup}
      onSwitchMode={switchAuthMode}
    />
  );

  // When activeView changes, return a different full-page component.
  // This is a lightweight alternative to setting up separate route files.
  if (activeView === "programs") {
    return (
      <>
        <MyPrograms
          activeProgramIds={activeProgramIds}
          currentUser={currentUser}
          onAddProgram={requestAddProgram}
          onBackHome={showHome}
          onCancelProgram={cancelProgram}
          onUpdateProfile={handleProfileUpdate}
        />
        {authModal}
      </>
    );
  }

  if (activeView === "plans") {
    return <TrainingPlansView onBackHome={showHome} />;
  }

  if (activeView === "trainer") {
    return <TrainerAdviceView trainerId={activeTrainerId} onBackHome={showHome} />;
  }

  // Default view: the landing page sections plus the two possible modals.
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar
        currentUser={currentUser}
        onJoinNow={() => openAuthModal("signup")}
        onLogin={() => openAuthModal("login")}
        onLogout={handleLogout}
        onMyPrograms={showMyPrograms}
      />
      <Banner
        onStartToday={() => setIsTracksModalOpen(true)}
        onViewPlans={showPlanDetails}
      />
      <CourseList />
      <WhyChooseUs onSelectTrainer={showTrainerAdvice} />
      <Footer />
      <ProgrammingTracksModal
        activeProgramIds={activeProgramIds}
        open={isTracksModalOpen}
        onAddProgram={requestAddProgram}
        onClose={() => setIsTracksModalOpen(false)}
      />
      {authModal}
    </div>
  );
};

export default Web2;
