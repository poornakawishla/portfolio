import React from 'react';
import { ArrowLeft, ExternalLink, Figma, Calendar, User, Target, Users, Lightbulb, Smartphone, Eye } from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-text-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 dark:text-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-300">
                <Figma size={16} />
                <span>View in Figma</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-300">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">UI/UX Design</span>
          <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">Case Study</span>
          <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">User Research</span>
          <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">Mobile App</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-text-primary mb-6 leading-tight">
          My Dialog App – UX/UI Redesign for a Smoother Sri Lankan Telecom
        </h1>

        {/* Project Meta */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 p-6 bg-white dark:bg-bg-dark rounded-2xl border border-gray-200 dark:border-text-secondary/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-text-secondary">Duration</p>
              <p className="font-semibold text-gray-900 dark:text-text-primary">3 Months</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-text-secondary">Role</p>
              <p className="font-semibold text-gray-900 dark:text-text-primary">Lead UX/UI Designer</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white">
              <Target size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-text-secondary">Platform</p>
              <p className="font-semibold text-gray-900 dark:text-text-primary">Mobile App (iOS/Android)</p>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-2xl p-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12">
              <Smartphone size={80} className="mx-auto text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">MyDialog App Redesign</h3>
              <p className="text-white/80">Complete UX/UI transformation for Sri Lanka's leading telecom app</p>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-lg flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">Project Overview</h2>
          </div>
          
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 mb-8">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-6">
              MyDialog is the primary mobile app for Dialog Axiata, one of Sri Lanka's biggest telecom companies. This app has one of the worst user experiences I've ever seen in a major product. So I decided to do a UX case study to find what's wrong with this app.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-text-secondary/10 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-text-primary mb-2">What exactly is broken?</h4>
                <p className="text-sm text-gray-600 dark:text-text-secondary">Identifying core UX issues</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-text-secondary/10 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-text-primary mb-2">How does it impact users?</h4>
                <p className="text-sm text-gray-600 dark:text-text-secondary">Understanding user frustrations</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-text-secondary/10 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-text-primary mb-2">How can we redesign?</h4>
                <p className="text-sm text-gray-600 dark:text-text-secondary">Creating usable solutions</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">Through testing the app and reading hundreds of user reviews, I found serious UX & QA problems in this app</h4>
              <ul className="space-y-3 text-gray-600 dark:text-text-secondary">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>During registration, users must enter a recovery email/phone, but the "Skip" button doesn't work and crashes the app</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Login and Signup are confusingly split, but follow the same flow, causing users to repeatedly enter OTPs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Too many unnecessary pages that affect app performance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
            <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">My Approach</h4>
            <p className="text-gray-600 dark:text-text-secondary mb-4">
              To solve this, I redesigned the User Flow and Information Architecture to simplify navigation, reduce steps, and remove unnecessary screens.
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">Problem Statement & UX Goals</h2>
          </div>
          
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-6">
              After analyzing hundreds of user reviews, it became clear that the issues with the MyDialog app are not visual or branding-related. They're rooted in deep UX failures that directly affect real-world tasks.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-8">
              Most users described feeling frustrated, confused, or simply forced to tolerate the experience — not because they liked the app, but because they had no other choice.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">Key Pain Points Identified</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Unreliable login and session handling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Crashes and bugs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Overcomplicated and repetitive user flow</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Performance issues, especially on low-end devices</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">My Ideas to Fix These Problems</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Redesigning the entire user flow and information architecture</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Remove unnecessary pages and simplify navigation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Encouraging a proper QA process before deployment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Welcome user's feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-text-primary text-center">
                In this case, my goal is to create a simple user flow and information architecture, and a user-friendly design.
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">User Research</h2>
          </div>
          
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20 mb-8">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-8">
              For the user research I checked hundreds of user feedback on the Google Play Store. These are just a few highlights that reflect common frustrations with the app's UX, performance, and reliability.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">Google Play Feedbacks</h4>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* User Reviews */}
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-text-secondary mb-2">
                    "Very disappointed with this app. I've been using it for years and had all my connections saved, including one for my car's GPS system that I can't replace. A few days ago, I was suddenly logged out..."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-text-secondary font-medium">Isuru Prasad</p>
                </div>

                <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-text-secondary mb-2">
                    "I have used this app for several years. Recently all my devices were automatically logged out and a message 'your session has been expired' was displayed..."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-text-secondary font-medium">Lakkana Saputantri</p>
                </div>

                <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-text-secondary mb-2">
                    "Damn... I have been using this app for a long time. For me it's not yet improved. There are lots of bugs I have seen from these years..."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-text-secondary font-medium">SCAAASS</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-text-secondary mb-2">
                    "The worst app ever in the whole country. I've been using the app for years now and it hasn't improved even a bit. Performance was always slow for android phone users..."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-text-secondary font-medium">Sathsarani Tharushika</p>
                </div>

                <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-text-secondary mb-2">
                    "Worst app ever. Can't even load details properly. Every time I switch accounts to view something else, it just keeps loading forever and never shows the details..."
                  </p>
                  <p className="text-xs text-gray-500 dark:text-text-secondary font-medium">Sasaa Thisu</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-4">User Feedback Breakdown Based on Emotional Tone and Focus</h4>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-text-secondary">Frustrated but Forced</span>
                    <span className="font-bold text-gray-900 dark:text-text-primary">60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-text-secondary">Bug/crash</span>
                    <span className="font-bold text-gray-900 dark:text-text-primary">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-text-secondary">Confused UX</span>
                    <span className="font-bold text-gray-900 dark:text-text-primary">10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-text-secondary">Feature mismatch</span>
                    <span className="font-bold text-gray-900 dark:text-text-primary">7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-text-secondary">Positive</span>
                    <span className="font-bold text-gray-900 dark:text-text-primary">3%</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-48 h-48 mx-auto">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 to-blue-400 relative">
                      <div className="absolute inset-4 bg-white dark:bg-bg-dark rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 dark:text-text-primary">97%</div>
                          <div className="text-sm text-gray-600 dark:text-text-secondary">Negative</div>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">User Flow</h2>
          </div>
          
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
            <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">What I created User flow</h4>
            
            {/* Placeholder for User Flow Image */}
            <div className="bg-gradient-to-r from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-12 text-center mb-6">
              <div className="bg-white/50 dark:bg-bg-dark/50 backdrop-blur-sm rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-2">User Flow Diagram</h4>
                <p className="text-gray-600 dark:text-text-secondary">
                  Comprehensive user flow showing the redesigned navigation and simplified user journey
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-gray-900 dark:text-text-primary mb-4">Key Improvements</h5>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Simplified registration process</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Unified login/signup flow</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Reduced navigation complexity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Streamlined dashboard access</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold text-gray-900 dark:text-text-primary mb-4">Flow Highlights</h5>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Language selection at start</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Smart connection type detection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Optional recovery setup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-text-secondary">Direct dashboard access</span>
                  </li>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">Design Decisions</h2>
          </div>
          
          <div className="space-y-8">
            {/* Color System */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">Color System</h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I chose a bold magenta-red primary (#C40D47) from the Dialog logo. That's going to modernize the visual identity and give Dialog a more youthful, energetic vibe. The secondary colors were softened to improve contrast, especially in dark mode.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-500 rounded-lg"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-text-primary">Primary color surface</p>
                      <p className="text-sm text-gray-500 dark:text-text-secondary">#C40D47</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-300 rounded-lg"></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-text-primary">Secondary color surface</p>
                      <p className="text-sm text-gray-500 dark:text-text-secondary">#E91E63</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">Typography</h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I used Satoshi as the primary typeface because of its modern, geometric structure and strong readability. It balances tech and trust without feeling too corporate or too playful. Satoshi is also versatile, which made it ideal for both dark and light modes.
              </p>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gray-900 dark:text-text-primary">The quick brown fox jumps over the lazy dog</div>
                <div className="text-2xl font-semibold text-gray-900 dark:text-text-primary">The quick brown fox jumps over the lazy dog</div>
                <div className="text-xl font-medium text-gray-900 dark:text-text-primary">The quick brown fox jumps over the lazy dog</div>
                <div className="text-lg text-gray-600 dark:text-text-secondary">The quick brown fox jumps over the lazy dog</div>
                <div className="text-base text-gray-600 dark:text-text-secondary">The quick brown fox jumps over the lazy dog</div>
                <div className="text-sm text-gray-500 dark:text-text-secondary">The quick brown fox jumps over the lazy dog</div>
                <div className="text-xs text-gray-500 dark:text-text-secondary">The quick brown fox jumps over the lazy dog</div>
              </div>
            </div>

            {/* Dark Mode Support */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">Dark Mode Support</h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                A full dark mode was designed to enhance nighttime usability and reduce eye strain. This wasn't common in telecom apps, so it became a key feature to modernize the experience. Every component was tested on both themes for color contrast, visual hierarchy, and energy balance.
              </p>
              
              {/* Placeholder for Dark Mode Screens */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6">
                  <Smartphone size={48} className="mx-auto text-white mb-4" />
                  <h5 className="text-lg font-bold text-white mb-2">Dark Mode Interface</h5>
                  <p className="text-gray-300 text-sm">Enhanced nighttime usability with proper contrast ratios</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">Navigation</h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I simplified the bottom navigation to only 5 key tabs to reduce decision fatigue. Each screen was structured with a top-heavy action zone (balance, recharge, active offers) and a scrollable contextual zone (recent activity, deeper features). The layout follows mobile-first best practices: clarity, touch targets, visual rhythm.
              </p>
              
              {/* Navigation Preview */}
              <div className="bg-gray-50 dark:bg-text-secondary/10 rounded-xl p-6">
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-xl flex items-center justify-center text-white mb-2">
                      <Smartphone size={20} />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-text-secondary">Home</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-text-secondary/20 rounded-xl flex items-center justify-center text-gray-600 dark:text-text-secondary mb-2">
                      <Eye size={20} />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-text-secondary">Offers</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-text-secondary/20 rounded-xl flex items-center justify-center text-gray-600 dark:text-text-secondary mb-2">
                      <Target size={20} />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-text-secondary">Packages</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-text-secondary/20 rounded-xl flex items-center justify-center text-gray-600 dark:text-text-secondary mb-2">
                      <Users size={20} />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-text-secondary">Services</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-text-secondary/20 rounded-xl flex items-center justify-center text-gray-600 dark:text-text-secondary mb-2">
                      <User size={20} />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-text-secondary">Profile</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-6">Component</h4>
              <p className="text-gray-600 dark:text-text-secondary mb-6">
                I created a custom primary button, and a few other components like input fields from my own design system.
              </p>
              
              {/* Component Examples */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-medium">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium">
                    Ghost Button
                  </button>
                  <button className="px-6 py-3 bg-gray-200 dark:bg-text-secondary/20 text-gray-500 dark:text-text-secondary rounded-lg font-medium cursor-not-allowed">
                    Button Disable
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end rounded-full flex items-center justify-center text-white">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-500 rounded-full flex items-center justify-center text-white">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-text-secondary">Primary Icon Button</span>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-text-primary">High-Fidelity Screens</h2>
          </div>
          
          <div className="bg-white dark:bg-bg-dark rounded-2xl p-8 border border-gray-200 dark:border-text-secondary/20">
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed mb-8">
              The final high-fidelity screens showcase the complete redesign with improved user flows, modern visual design, and enhanced usability across all key features of the MyDialog app.
            </p>

            {/* Placeholder for Hi-Fi Screens */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Onboarding Flow',
                'Login/Signup',
                'Dashboard',
                'Account Management',
                'Recharge & Packages',
                'Settings & Profile'
              ].map((screen, index) => (
                <div key={index} className="bg-gradient-to-br from-brand-gradient-start/10 to-brand-gradient-end/10 rounded-xl p-6 text-center">
                  <div className="bg-white/50 dark:bg-bg-dark/50 backdrop-blur-sm rounded-xl p-6">
                    <div className="w-12 h-20 bg-gradient-to-b from-brand-gradient-start to-brand-gradient-end rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Smartphone size={24} className="text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-text-primary mb-2">{screen}</h5>
                    <p className="text-sm text-gray-600 dark:text-text-secondary">Redesigned interface with improved UX</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Screens in Figma
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
              This case study demonstrates how user-centered design principles can transform a frustrating experience into an intuitive, efficient, and delightful one.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white rounded-lg font-medium hover:from-brand-primary hover:to-brand-gradient-end transition-all duration-300">
                <Figma size={20} />
                <span>View Complete Design System</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-text-secondary/30 text-gray-700 dark:text-text-secondary rounded-lg font-medium hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-300">
                <ExternalLink size={20} />
                <span>See More Projects</span>
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudy;