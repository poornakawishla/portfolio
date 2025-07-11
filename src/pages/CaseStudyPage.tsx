import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Figma,
  Calendar,
  User,
  Target,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import Coverimage from "../assets/case-studies/Thumbnail.png";
import mainflow from "../assets/case-studies/flowmain.png";
import loginflow from "../assets/case-studies/flowlogin.png";
import Darkmodee from "../assets/case-studies/darkmod.svg";
import bookmark from "../assets/case-studies/bookmark.svg";
import emptywalletchange from "../assets/case-studies/empty-wallet-change.svg";
import home2 from "../assets/case-studies/home-2.svg";
import smsstar from "../assets/case-studies/sms-star.svg";
import usericon from "../assets/case-studies/user.svg";
import buttonexplain from "../assets/case-studies/buttonexplain.svg";
import hifiscreens from "../assets/case-studies/Hi-FI Screens.svg";

const CaseStudyPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBackToProjects = () => {
    navigate("/#");
  };

  const handleFigmaClick = () => {
    window.open(
      "https://www.figma.com/design/9n1RBa9jPmUYn9uKj8pdrI/My-Dialog-App-Case-Study?node-id=0-1&t=kNHcnlWvTPMbFJiv-1",
      "_blank"
    );
  };

  const handleLiveDemoClick = () => {
    window.open(
      "https://www.figma.com/proto/9n1RBa9jPmUYn9uKj8pdrI/My-Dialog-App-Case-Study?node-id=5-1308&t=kNHcnlWvTPMbFJiv-1",
      "_blank"
    );
  };

  const handleViewFigmaClick = () => {
    window.open(
      "https://www.figma.com/design/9n1RBa9jPmUYn9uKj8pdrI/My-Dialog-App-Case-Study?node-id=0-1&t=kNHcnlWvTPMbFJiv-1",
      "_blank"
    );
  };

  const handleSeeMoreProjectsClick = () => {
    navigate("/#projects");
  };

  return (
    <div className="case-study-page min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <ThemeToggle />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-md border-b border-gray-200/30 dark:border-text-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleBackToProjects}
              className="flex items-center space-x-2 text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-200 hover:scale-105"
            >
              <ArrowLeft
                size={20}
                className="transition-transform duration-200"
              />
              <span>Back to Home</span>
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleFigmaClick}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
              >
                <Figma
                  size={16}
                  className="transition-transform duration-200"
                />
                <span>View in Figma</span>
              </button>
              <button
                onClick={handleLiveDemoClick}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-200 hover:scale-105"
              >
                <ExternalLink
                  size={16}
                  className="transition-transform duration-200"
                />
                <span>Live Prototype</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["UI/UX Design", "Case Study", "User Research", "Mobile App"].map(
            (tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium hover:scale-110 hover:bg-brand-primary/20 transition-all duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-text-primary mb-6 leading-tight">
          My Dialog App – UX/UI Redesign for a Smoother Sri Lankan Telecom
        </h1>

        {/* Project Meta */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 p-6 bg-white dark:bg-bg-dark rounded-2xl border border-gray-200 dark:border-text-secondary/20 shadow-sm">
          {[
            { icon: Calendar, label: "Duration", value: "2 Weeks" },
            { icon: User, label: "Role", value: "UX/UI Designer" },
            { icon: Target, label: "Platform", value: "Mobile App (Android)" },
          ].map((item, index) => (
            <div key={item.label} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-text-secondary">
                  {item.label}
                </p>
                <p className="font-semibold text-gray-900 dark:text-text-primary">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cover Image */}
        <div className="mb-16">
          <img src={Coverimage} alt="Description" className=" rounded-2xl" />
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Project Overview
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 mb-8 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-6">
              MyDialog is the primary mobile app for Dialog Axiata, one of Sri
              Lanka's biggest telecom companies. This app has one of the worst
              user experiences I've ever seen in a major product. So I decided
              to do a UX case study to find what's wrong with this app.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  title: "What exactly is broken?",
                  desc: "Identifying core UX issues",
                },
                {
                  title: "How does it impact users?",
                  desc: "Understanding user frustrations",
                },
                {
                  title: "How can we redesign?",
                  desc: "Creating usable solutions",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="text-center p-4 bg-gray-50 dark:bg-text-secondary/10 rounded-xl"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">
                Through testing the app and reading hundreds of user reviews, I
                found serious UX & QA problems in this app
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-text-secondary">
                {[
                  'During registration, users must enter a recovery email/phone, but the "Skip" button doesn\'t work and crashes the app',
                  "Login and Signup are confusingly split, but follow the same flow, causing users to repeatedly enter OTPs",
                  "Too many unnecessary pages that affect app performance",
                ].map((issue, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">
              My Approach
            </h4>
            <p className="text-gray-600 dark:text-text-secondary mb-4">
              To solve this, I redesigned the User Flow and Information
              Architecture to simplify navigation, reduce steps, and remove
              unnecessary screens.
            </p>
            <p className="text-brand-primary font-semibold">
              My goal is a smoother, faster, and more easy experience.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Problem Statement & UX Goals
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-6">
              After analyzing hundreds of user reviews, it became clear that the
              issues with the MyDialog app are not visual or branding-related.
              They're rooted in deep UX failures that directly affect real-world
              tasks.
            </p>

            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-8">
              Most users described feeling frustrated, confused, or simply
              forced to tolerate the experience — not because they liked the
              app, but because they had no other choice.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">
                  Key Pain Points Identified
                </h4>
                <ul className="space-y-3">
                  {[
                    "Unreliable login and session handling",
                    "Crashes and bugs",
                    "Overcomplicated and repetitive user flow",
                    "Performance issues, especially on low-end devices",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-600 dark:text-text-secondary">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">
                  My Ideas to Fix These Problems
                </h4>
                <ul className="space-y-3">
                  {[
                    "Redesigning the entire user flow and information architecture",
                    "Remove unnecessary pages and simplify navigation",
                    "Encouraging a proper QA process before deployment",
                    "Welcome user's feedback",
                  ].map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-600 dark:text-text-secondary">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-text-primary text-center">
                In this case, my goal is to create a simple user flow and
                information architecture, and a user-friendly design.
              </p>
            </div>
          </div>
        </section>

        {/* User Research */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              User Research
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 mb-8 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-8">
              For the user research I checked hundreds of user feedback on the
              Google Play Store. These are just a few highlights that reflect
              common frustrations with the app's UX, performance, and
              reliability.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">
              Google Play Feedbacks
            </h4>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* User Reviews */}
              <div className="space-y-4">
                {[
                  {
                    name: "Isuru Prasad",
                    review:
                      "Very disappointed with this app. I've been using it for years and had all my connections saved, including one for my car's GPS system that I can't replace. A few days ago, I was suddenly logged out...",
                  },
                  {
                    name: "Lakkana Saputantri",
                    review:
                      "I have used this app for several years. Recently all my devices were automatically logged out and a message 'your session has been expired' was displayed...",
                  },
                  {
                    name: "SCAAASS",
                    review:
                      "Damn... I have been using this app for a long time. For me it's not yet improved. There are lots of bugs I have seen from these years...",
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 bg-gray-300 rounded-full"
                          ></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-text-secondary mb-2">
                      "{review.review}"
                    </p>
                    <p className="text-xs text-gray-500 dark:text-text-secondary font-medium">
                      {review.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Sathsarani Tharushika",
                    review:
                      "The worst app ever in the whole country. I've been using the app for years now and it hasn't improved even a bit. Performance was always slow for android phone users...",
                  },
                  {
                    name: "Sasaa Thisu",
                    review:
                      "Worst app ever. Can't even load details properly. Every time I switch accounts to view something else, it just keeps loading forever and never shows the details...",
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 bg-gray-300 rounded-full"
                          ></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-text-secondary mb-2">
                      "{review.review}"
                    </p>
                    <p className="text-xs text-gray-500 dark:text-text-secondary font-medium">
                      {review.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">
                User Feedback Breakdown Based on Emotional Tone and Focus
              </h4>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  {[
                    { label: "Frustrated but Forced", value: "60%" },
                    { label: "Bug/crash", value: "20%" },
                    { label: "Confused UX", value: "10%" },
                    { label: "Feature mismatch", value: "7%" },
                    { label: "Positive", value: "3%" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600 dark:text-text-secondary">
                        {item.label}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-text-primary">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <div className="w-48 h-48 mx-auto">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 to-blue-400 relative">
                      <div className="absolute inset-4 bg-white dark:bg-bg-dark rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 dark:text-text-primary">
                            97%
                          </div>
                          <div className="text-sm text-gray-600 dark:text-text-secondary">
                            Negative
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Flow */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              User Flow
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            {/* Images side-by-side flex container */}
            <div className="flex flex-wrap justify-center gap-6">
              <img
                src={mainflow}
                alt="Main User Flow Diagram"
                className="rounded-lg shadow-md max-w-full sm:max-w-[45%]"
              />
              <img
                src={loginflow}
                alt="Login Flow Diagram"
                className="rounded-lg shadow-md max-w-full sm:max-w-[45%]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h5 className="font-bold text-gray-900 dark:text-text-primary mb-4">
                  Key Improvements
                </h5>
                <ul className="space-y-3">
                  {[
                    "Simplified registration process",
                    "Unified login/signup flow",
                    "Reduced navigation complexity",
                    "Streamlined dashboard access",
                  ].map((improvement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-600 dark:text-text-secondary">
                        {improvement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-gray-900 dark:text-text-primary mb-4">
                  Flow Highlights
                </h5>
                <ul className="space-y-3">
                  {[
                    "Language selection at start",
                    "Smart connection type detection",
                    "Optional recovery setup",
                    "Direct dashboard access",
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-600 dark:text-text-secondary">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              5
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              Design Decisions
            </h2>
          </div>

          <div className="space-y-8">
            {/* Color System */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">
                Color System
              </h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I chose a bold magenta-red primary (#C40D47) from the Dialog
                logo. That's going to modernize the visual identity and give
                Dialog a more youthful, energetic vibe. The secondary colors
                were softened to improve contrast, especially in dark mode. The
                palette was tested for both accessibility and emotional impact.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    color: "from-pink-600 to-pink-500",
                    label: "Primary color surface",
                    code: "#C40D47",
                  },
                  {
                    color: "from-pink-400 to-pink-300",
                    label: "Secondary color surface",
                    code: "#E91E63",
                  },
                ].map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-lg`}
                      ></div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-text-primary">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-text-secondary">
                          {item.code}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">
                Typography
              </h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I used Satoshi as the primary typeface because of its modern,
                geometric structure and strong readability. It balances tech and
                trust without feeling too corporate or too playful. Satoshi is
                also versatile, which made it ideal for both dark and light
                modes.
              </p>

              <div className="space-y-4">
                {[
                  {
                    size: "text-4xl",
                    weight: "font-bold",
                    text: "The quick brown fox jumps over the lazy dog",
                  },
                  {
                    size: "text-2xl",
                    weight: "font-semibold",
                    text: "The quick brown fox jumps over the lazy dog",
                  },
                  {
                    size: "text-xl",
                    weight: "font-medium",
                    text: "The quick brown fox jumps over the lazy dog",
                  },
                  {
                    size: "text-lg",
                    weight: "",
                    text: "The quick brown fox jumps over the lazy dog",
                  },
                  {
                    size: "text-base",
                    weight: "",
                    text: "The quick brown fox jumps over the lazy dog",
                  },
                  {
                    size: "text-sm",
                    weight: "",
                    text: "The quick brown fox jumps over the lazy dog",
                  },
                  {
                    size: "text-xs",
                    weight: "",
                    text: "The quick brown fox jumps over the lazy dog",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.size} ${item.weight} text-gray-900 dark:text-text-primary`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Mode Support */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">
                Dark Mode Support
              </h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                A full dark mode was designed to enhance nighttime usability and
                reduce eye strain. This wasn't common in telecom apps, so it
                became a key feature to modernize the experience. Every
                component was tested on both themes for color contrast, visual
                hierarchy, and energy balance.
              </p>

              {/* Placeholder for Dark Mode Screens */}
              <div className=" rounded-xl p-8 text-center">
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 max-w-4xl w-full flex justify-center">
                  <img src={Darkmodee} alt="" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">
                Navigation
              </h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I simplified the bottom navigation to only 5 key tabs to reduce
                decision fatigue. Each screen was structured with a top-heavy
                action zone (balance, recharge, active offers) and a scrollable
                contextual zone (recent activity, deeper features). The layout
                follows mobile-first best practices: clarity, touch targets,
                visual rhythm.
              </p>

              {/* Navigation Preview */}
              <div className="flex justify-center">
                <div className="flex bg-white dark:bg-[#F9F9F9] p-4 rounded-2xl shadow-md space-x-6">
                  {/* Nav Item */}
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-xl mb-1 bg-[#e91e63]">
                      <img
                        src={home2}
                        alt="Home"
                        className="w-6 h-6 filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#e91e63]">
                      Home
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-xl mb-1">
                      <img
                        src={emptywalletchange}
                        alt="Offers"
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Offers
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-xl mb-1">
                      <img src={bookmark} alt="Packages" className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Packages
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-xl mb-1">
                      <img src={smsstar} alt="Services" className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Services
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-xl mb-1">
                      <img src={usericon} alt="Profile" className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Profile
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">
                Component
              </h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I created a custom primary button, and a few other components
                like input fields from my own design system.
              </p>

              {/* Component Examples */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Add your items here if needed */}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img src={buttonexplain} alt="Button Explanation" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hi-Fi Screens */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              6
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
              High-Fidelity Screens
            </h2>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 shadow-sm">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-8">
              The final high-fidelity screens showcase the complete redesign
              with improved user flows, modern visual design, and enhanced
              usability across all key features of the MyDialog app. Some
              quality drop is a technical issue, sorry for that.
            </p>

            {/* Placeholder for Hi-Fi Screens */}
            <img src={hifiscreens} alt="" />

            <div className="mt-8 text-center">
              <button
                onClick={handleViewFigmaClick}
                className="px-8 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                <Figma size={20} className="inline mr-2" />
                View All Screens in Figma for more details
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-200 dark:border-text-secondary/20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary">
              Thank you for reading!
            </h3>
            <p className="text-lg text-gray-600 dark:text-text-secondary max-w-2xl mx-auto">
              This case study demonstrates how user-centered design principles
              can transform a frustrating experience into an intuitive,
              efficient, and delightful one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4"></div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudyPage;
