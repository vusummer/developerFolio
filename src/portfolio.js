/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tuan Vu",
  title: "Hi all, I'm Tuan Vu",
  subTitle: emoji(
    "Một nhân viên IT Helpdesk & IT Support tận tâm 💻, có kinh nghiệm hỗ trợ người dùng, xử lý sự cố kỹ thuật, quản lý hệ thống văn phòng và đảm bảo hoạt động CNTT diễn ra ổn định. Thành thạo trong việc chẩn đoán lỗi phần cứng/phần mềm, cấu hình hệ điều hành Windows, quản lý mạng nội bộ, thiết bị văn phòng và hỗ trợ kỹ thuật nhanh chóng – chính xác."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vusummer",
  linkedin: "https://www.linkedin.com/in/tuanvu1703/",
  gmail: "vunguyen7980@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/tuanvu1703na",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "DEDICATED IT HELPDESK & SUPPORT SPECIALIST",
  skills: [
    emoji("⚡ Hỗ trợ người dùng và xử lý sự cố phần cứng / phần mềm nhanh chóng"),
    emoji("⚡ Quản lý và cấu hình hệ thống Windows, mạng nội bộ, router và switch"),
    emoji("⚡ Thiết lập, vận hành và khắc phục lỗi máy in, camera, thiết bị văn phòng"),
    emoji("⚡ Quản lý tài khoản, phân quyền, và hỗ trợ Active Directory / Microsoft 365"),
    emoji("⚡ Giám sát hệ thống, kiểm tra kết nối mạng và tối ưu hiệu suất làm việc"),
    emoji("⚡ Cài đặt, backup dữ liệu, và bảo trì thiết bị đảm bảo hoạt động ổn định")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Active Directory",
      fontAwesomeClassname: "fas fa-users-cog"
    },
    {
      skillName: "Microsoft 365",
      fontAwesomeClassname: "fas fa-envelope-open-text"
    },
    {
      skillName: "Hardware Troubleshooting",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "PowerShell / CLI",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "VMware / Hyper-V",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Customer Support",
      fontAwesomeClassname: "fas fa-headset"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hướng Nghiệp Á Âu",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Đào tạo nghề & Kỹ năng chuyên môn",
      duration: "Tháng 6/2025 - Tháng 11/2025",
      desc: "Hoàn thành chương trình đào tạo với kiến thức thực hành về hệ thống, mạng và thiết bị văn phòng.",
      descBullets: [
        "Học và thực hành kỹ năng IT cơ bản và IT Helpdesk",
        "Xử lý sự cố mạng, máy tính, máy in và camera",
        "Cấu hình hệ thống Windows, phần mềm văn phòng và thiết bị",
        "Hoàn thành các khóa học về TCP/IP, DHCP, DNS, VLAN",
        "Thực hành xử lý lỗi, giám sát hệ thống và hỗ trợ kỹ thuật"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Hỗ trợ kỹ thuật & Helpdesk",
      progressPercentage: "90%"
    },
    {
      Stack: "Quản trị hệ thống & Windows",
      progressPercentage: "80%"
    },
    {
      Stack: "Mạng máy tính (TCP/IP, DHCP, VLAN)",
      progressPercentage: "75%"
    },
    {
      Stack: "Phần cứng & Thiết bị văn phòng",
      progressPercentage: "85%"
    },
    {
      Stack: "Bảo trì & Giám sát hệ thống",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "THẢO LUẬN VỀ MỘT DỰ ÁN HAY CHỈ MUỐN CHÀO? HỘP THƯ CỦA TÔI ĐANG MỞ CHO TẤT CẢ.",
  number: "0941260607",
  email_address: "vunguyen7980@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
