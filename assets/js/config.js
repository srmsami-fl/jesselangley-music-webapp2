/* =====================================================================
   JESSE LANGLEY — SITE CONFIG  (edit this file to change pictures & links)
   All pictures live in:  assets/images/
   To swap a picture: change the FILE NAME next to its key below. That's it.
   ===================================================================== */
window.SITE = {
  imgBase: "assets/images/",

  /* WHERE EACH PICTURE GOES  (key: "file name inside assets/images") */
  img: {
    /* logos */
    favicon:    "Jesse Langley-JL Abstract Favicon Logo.png",
    logoHeader: "Jesse Langley Musician Logo.png",
    logoFooter: "Jesse Langley JL Abstract Logo.png",
    /* transparent-background pictures */
    portrait:   "20 Transparent background.png",   /* hero cut-out portrait of Jesse */
    award:      "My Prestige Award.png",

    /* page-top background pictures (wide pictures work best) */
    heroHome: "1.jpg",  heroAbout: "2.jpg",  heroJourney: "3.jpg",
    heroVideos: "4.jpg", heroGallery: "5.jpg", heroContact: "6.jpg",
    bandQuote: "7.jpg",  bandMusic: "8.jpg",  bandContact: "9.jpg",

    /* story pictures */
    storyMain: "10.jpg",   /* Home: "My story" picture */
    aboutMain: "11.jpg",   /* About: opening picture */
    rootsHome: "12.jpg",   /* Home roots cards */
    rootsFamily: "13.jpg",
    rootsValues: "14.jpg",
    countryLife: "15.jpg", /* About: hunting, fishing, livestock */
    school: "16.jpg",      /* About: school years */
    writing: "17.jpg",     /* About: poetry & first song */
    service: "18.jpg",     /* Journey: NJROTC + Army National Guard */
    career: "19.jpg",      /* Journey: fast food */
    hvac: "21.jpg",        /* Journey: HVAC */
    today: "22.jpg"        /* Journey: today */
  },

  /* optional crop tuning, e.g.  heroHome: "center 20%"  */
  pos: { portrait: "center bottom" },

  /* CHILDHOOD PHOTOS (About page) — file names exactly as saved */
  childhood: [
    { file: "Childhood photo with a cat in hand.jpg",   cap: "A young Jesse with a cat in his arms" },
    { file: "Childhood photo wearing formal dress.jpg", cap: "Dressed up as a boy" },
    { file: "Photo of two brothers with parents.jpg",   cap: "With his brother and parents" },
    { file: "Another photo with parents.jpg",           cap: "With his parents" },
    { file: "Photo wearing clothes from that time when he was in defense.jpg", cap: "In clothes from his service years" }
  ],

  /* GALLERY PAGE — every picture, in this order */
  gallery: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg",
            "14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"],

  /* YOUTUBE SHORTS — paste links (or IDs). Edit titles freely. */
  shorts: [
    { url: "https://youtube.com/shorts/j7QWxxSAJ-w", title: "Featured Short 1" },
    { url: "https://youtube.com/shorts/Jd7sHzMCiZM", title: "Featured Short 2" },
    { url: "https://youtube.com/shorts/r_zUZVVeYyo", title: "Featured Short 3" },
    { url: "https://youtube.com/shorts/_VJ1WMo712k", title: "Featured Short 4" },
    { url: "https://youtube.com/shorts/YYW1CkeQ3AU", title: "Featured Short 5" },
    { url: "https://youtube.com/shorts/cxwubRWmIu4", title: "Featured Short 6" },
    { url: "https://youtube.com/shorts/FtL_gss1b0A", title: "Featured Short 7" },
    { url: "https://youtube.com/shorts/pBfKmeFpiJ8", title: "Featured Short 8" }
  ],

  /* PLATFORM LINKS — replace with Jesse's real profile URLs */
  platforms: {
    youtube:    { name: "YouTube",     url: "https://www.youtube.com/" },
    spotify:    { name: "Spotify",     url: "https://open.spotify.com/" },
    soundcloud: { name: "SoundCloud",  url: "https://soundcloud.com/" },
    apple:      { name: "Apple Music", url: "https://music.apple.com/" },
    tiktok:     { name: "TikTok",      url: "https://www.tiktok.com/" },
    instagram:  { name: "Instagram",   url: "https://www.instagram.com/" },
    facebook:   { name: "Facebook",    url: "https://www.facebook.com/" }
  },

  /* CONTACT FORM */
  formspree: "https://formspree.io/f/mdeejynv"
};
