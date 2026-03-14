// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Hands-on engineering work — from composite vehicle structures to accessible device design.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Robotics and sensor research at the RoboTouch Lab, UIUC.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Conference papers and patents.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "Education, experience, and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "news-joined-the-robotouch-lab-working-on-spherical-tactile-sensor-under-prof-wenzhen-yuan",
          title: 'Joined the RoboTouch Lab, working on Spherical Tactile Sensor under Prof. Wenzhen Yuan....',
          description: "",
          section: "News",},{id: "news-arachnobot-won-1st-place-and-distinguished-robotics-at-asme-engineering-open-house-competing-against-200-exhibits",
          title: 'ArachnoBot won 1st Place and Distinguished Robotics at ASME Engineering Open House, competing...',
          description: "",
          section: "News",},{id: "news-joined-the-novel-mobile-robots-lab-working-on-self-actuated-climbing-robot-controls-under-prof-justin-yim",
          title: 'Joined the Novel Mobile Robots Lab, working on self-actuated climbing robot controls under...',
          description: "",
          section: "News",},{id: "news-conference-paper-on-the-spherical-gelsight-tactile-sensor-submitted-to-iros-2026",
          title: 'Conference paper on the spherical GelSight tactile sensor submitted to IROS 2026.',
          description: "",
          section: "News",},{id: "projects-assistive-technology-devices",
          title: 'Assistive Technology Devices',
          description: "Designed and prototyped single-hand-operable assistive devices under strict accessibility, safety, and manufacturing constraints.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/assistive_tech/";
            },},{id: "projects-self-actuated-climbing-amp-inspection-robot",
          title: 'Self-Actuated Climbing &amp;amp; Inspection Robot',
          description: "Designed contact mechanism and implemented closed-loop control for a surface inspection robot that tracks flat, curved, and inverted surfaces.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/climbing_robot/";
            },},{id: "projects-spherical-gelsight-tactile-sensor",
          title: 'Spherical GelSight Tactile Sensor',
          description: "Developed a vision-based tactile sensor for large-area robotic surface scanning, with custom PCB, multi-part molds, and photometric stereo reconstruction. IROS paper submitted.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gelsight_sensor/";
            },},{id: "projects-illini-solar-car-composite-structures-amp-vehicle-integration",
          title: 'Illini Solar Car: Composite Structures &amp;amp; Vehicle Integration',
          description: "Lead design and fabrication of composite fairing components for a formula-style solar race car, from 3D-printed tooling through final assembly.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/solar_car/";
            },},{id: "projects-arachnobot-terrain-adaptive-robot",
          title: 'ArachnoBot — Terrain-Adaptive Robot',
          description: "Built a terrain-adaptive robot with 4-bar linkage legs. 1st Place and Distinguished Robotics award at ASME Engineering Open House (200+ exhibits).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spider_robot/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/LeahLee_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%61%68%6C%65%65%32@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/seoyeon-lee123", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/leahsylee", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
