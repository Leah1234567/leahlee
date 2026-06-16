// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "Resume",
          description: "Education, experience, and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "projects-assistive-technology-devices",
          title: 'Assistive Technology Devices',
          description: "Designed and 3D-printed assistive devices (vegetable slicer, bag closer, iPad holder) under one-handed usability, single-print fabrication, and safety constraints. CAD, rapid prototyping, and iterative user testing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/assistive_tech/";
            },},{id: "projects-self-actuated-climbing-inspection-robot",
          title: 'Self-Actuated Climbing Inspection Robot',
          description: "Designed and built a self-actuated surface inspection robot from scratch — system integration, CAD, embedded control (Arduino), suction-based adhesion, suspension design, and tactile sensing integration. Built test fixtures and iterated hardware to improve repeatability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/climbing_robot/";
            },},{id: "projects-spherical-gelsight-tactile-sensor",
          title: 'Spherical GelSight Tactile Sensor',
          description: "Developed a spherical vision-based tactile sensor for omnidirectional robotic surface scanning — sensor fabrication, PCB/electronics integration (ESP32S3), Python/OpenCV reconstruction pipeline. Patent filed; paper submitted to IROS 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gelsight_sensor/";
            },},{id: "projects-smart-tool-wear-and-breakage-detection-via-servo-load-monitoring",
          title: 'Smart Tool Wear and Breakage Detection via Servo Load Monitoring',
          description: "Built an MLP in PyTorch to predict CNC tool flank wear from force, torque, vibration, and acoustic signals at 10 kHz. Designed feature engineering pipeline (88 features, NumPy/SciPy) and evaluated with k-fold cross-validation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart_tool_wear/";
            },},{id: "projects-somansa-ztna-research-and-rag-system-development",
          title: 'Somansa: ZTNA Research and RAG System Development',
          description: "Built Python automation tools for web crawling, PDF-to-Markdown and HTML-to-Markdown conversion, and data cleaning for AI ingestion. Developed a RAG pipeline with systematic LLM and embedding model evaluation across multiple configurations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/somansa/";
            },},{id: "projects-arachnobot-terrain-adaptive-robot",
          title: 'ArachnoBot — Terrain-Adaptive Robot',
          description: "Designed and built a terrain-adaptive walking robot with 4-bar linkage mechanism for stable locomotion over uneven surfaces. Rapid prototyping, mechanism design, and public demonstration to 1,000+ visitors. 1st Place, Distinguished Robotics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spider_robot/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Leah_Lee_Resume.pdf", "_blank");
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
