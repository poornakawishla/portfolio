import { Project } from '../types/project';
import Casestudycover from "../assets/case-studies/Thumbnail.png";
import Elara from "../assets/case-studies/elara.png";
import AURAYA from "../assets/case-studies/AURAYA.jpg";

export const allProjects: Project[] = [
  // Case Studies
  {
    id: 1,
    title: "My Dialog App – UX/UI Redesign Case study for a Smoother Sri Lankan Users",
    description: "UX/UI redesign of Dialog mobile app, focusing on improving user experience and streamlining telecom services for Sri Lankan users.",
    image: Casestudycover,
    tags: ["UI UX", "Case Study", "Research"],
    category: 'case-study',
    slug: 'mydialog-app-redesign',
    figmaUrl: "https://www.figma.com/team_invite/redeem/YjedF1SqGuPkDAcpQXIQb9",
    liveUrl: "https://www.figma.com/proto/9n1RBa9jPmUYn9uKj8pdrI/My-Dialog-App-Case-Study?node-id=5-1308&t=F8wqcfGI1A2PhKY4-1",
    duration: "2 Weeks",
    role: "UX/UI Designer",
    platform: "Mobile App (Android)",
    fullDescription: "This comprehensive redesign project tackled the major UX issues plaguing one of Sri Lanka's most important mobile applications. Through extensive user research and testing, I identified critical pain points and developed solutions that significantly improved the user experience.",
    features: [
      "Simplified user registration and login flow",
      "Redesigned information architecture",
      "Improved navigation and reduced complexity",
      "Enhanced visual design with better accessibility",
      "Streamlined telecom service management"
    ],
    isUIProject: true,
    hasCaseStudy: true
  },

  // Brand Identity
  {
    id: 2,
    title: "ELARA - Sleep & Wellness Brand Design Report",
    description: "Comprehensive brand identity design for ELARA, a sleep and wellness brand, incorporating AI-driven insights and modern design principles.",
    image: Elara,
    tags: ["AI", "Brand Identity"],
    category: 'brand-identity',
    slug: 'elara-sleep-wellness-brand',
    figmaUrl: "https://dribbble.com/shots/26195580-ELARA-Sleep-Wellness-brand-design-report",
    liveUrl: "https://dribbble.com/shots/26195580-ELARA-Sleep-Wellness-brand-design-report",
    duration: "3 Weeks",
    role: "Brand Designer",
    platform: "Brand Identity",
    fullDescription: "ELARA represents a modern approach to sleep and wellness branding, combining scientific research with intuitive design. The brand identity reflects tranquility, trust, and innovation in the wellness space.",
    features: [
      "Complete brand identity system",
      "Logo design and brand guidelines",
      "Color palette and typography selection",
      "Marketing material design",
      "Digital brand applications"
    ],
    isUIProject: false,
    hasCaseStudy: false
  },

  // Graphic Design
  {
    id: 3,
    title: "Introducing AURAYA – A Luxury Handbag Concept Brand",
    description: "Creative concept development and social media design for AURAYA, a luxury handbag brand, featuring sophisticated visual identity and marketing materials.",
    image: AURAYA,
    tags: ["Social Media Post", "Photoshop"],
    category: 'graphic-design',
    slug: 'auraya-luxury-handbag-concept',
    liveUrl: "https://dribbble.com/shots/26149802-Introducing-AURAYA-a-luxury-handbag-concept-brand",
    duration: "1 Week",
    role: "Creative Designer",
    platform: "Social Media",
    fullDescription: "AURAYA is a luxury handbag concept that embodies elegance and sophistication. The project focused on creating a premium brand experience through carefully crafted visual elements and social media presence.",
    features: [
      "Luxury brand concept development",
      "Social media visual strategy",
      "Product photography direction",
      "Brand storytelling through visuals",
      "Premium aesthetic design language"
    ],
    images: [
      "src/assets/AURAYA/AURAYA1.jpg",
      "src/assets/AURAYA/AURAYA2.jpg",
      "src/assets/AURAYA/AURAYA3.jpg",
      "src/assets/AURAYA/AURAYA4.jpg",
    ],
    isUIProject: false,
    hasCaseStudy: false
  },

  // AI Images
  {
    id: 4,
    title: "Futuristic UI Concepts",
    description: "AI-generated futuristic user interface concepts exploring next-generation design patterns and visual aesthetics.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["AI Art", "UI Concepts", "Future Design"],
    category: 'ai-images',
    slug: 'futuristic-ui-concepts',
    liveUrl: "#",
    duration: "Generated",
    role: "AI Art Director",
    platform: "Digital Art",
    fullDescription: "A collection of AI-generated user interface concepts that explore futuristic design patterns, holographic elements, and next-generation interaction paradigms.",
    features: [
      "Holographic interface elements",
      "Advanced data visualization",
      "Gesture-based interactions",
      "Immersive 3D components",
      "Adaptive AI-driven layouts"
    ],
    images: [
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    downloadUrl: "https://example.com/download/futuristic-ui-pack.zip",
    isUIProject: false,
    hasCaseStudy: false
  },

  {
    id: 5,
    title: "Abstract Digital Landscapes",
    description: "AI-created abstract digital landscapes combining organic forms with technological elements for modern design applications.",
    image: "https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["AI Art", "Abstract", "Digital Art"],
    category: 'ai-images',
    slug: 'abstract-digital-landscapes',
    liveUrl: "#",
    duration: "Generated",
    role: "AI Art Director",
    platform: "Digital Art",
    fullDescription: "A series of abstract digital landscapes that blend natural forms with technological aesthetics, perfect for modern web design, presentations, and creative projects.",
    features: [
      "High-resolution artwork",
      "Multiple color variations",
      "Seamless patterns available",
      "Commercial use license",
      "Various format options"
    ],
    images: [
      "https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386429/pexels-photo-8386429.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386431/pexels-photo-8386431.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    downloadUrl: "https://example.com/download/abstract-landscapes.zip",
    isUIProject: false,
    hasCaseStudy: false
  },

  // Additional projects for other categories
  {
    id: 6,
    title: "TechFlow Brand Identity System",
    description: "Complete brand identity design for a technology startup, including logo, guidelines, and digital applications.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Brand Identity", "Logo Design", "Guidelines"],
    category: 'brand-identity',
    slug: 'techflow-brand-identity',
    liveUrl: "https://dribbble.com/shots/techflow-brand",
    duration: "4 Weeks",
    role: "Brand Designer",
    platform: "Brand Identity",
    fullDescription: "A comprehensive brand identity system for TechFlow, a cutting-edge technology startup specializing in workflow automation solutions.",
    features: [
      "Logo design and variations",
      "Brand guidelines document",
      "Color system and typography",
      "Business card and stationery design",
      "Digital brand applications"
    ],
    isUIProject: false,
    hasCaseStudy: false
  },

  {
    id: 7,
    title: "Music Festival Poster Series",
    description: "Creative poster designs for an electronic music festival, featuring bold typography and vibrant visual elements.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Poster Design", "Typography", "Event Design"],
    category: 'graphic-design',
    slug: 'music-festival-posters',
    liveUrl: "https://dribbble.com/shots/music-festival-posters",
    duration: "2 Weeks",
    role: "Graphic Designer",
    platform: "Print Design",
    fullDescription: "A series of dynamic poster designs for the annual ElectroWave music festival, combining bold typography with energetic visual elements.",
    features: [
      "Series of 5 unique poster designs",
      "Custom typography treatment",
      "Vibrant color schemes",
      "Print-ready formats",
      "Social media adaptations"
    ],
    isUIProject: false,
    hasCaseStudy: false
  }
];

// Helper functions to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return allProjects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return allProjects.slice(0, 3);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};