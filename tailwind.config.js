module.exports = {
  mode:"jit",
  content: [
    "index.html",
    "./output/script.js"
  ],
  theme: {
    extend: {
      screens:{
        "tablet":"600px",
      },
      colors:{
        'guide-orange':"hsl(26, 100%, 55%)",
        'guide-pale-orange':"hsl(25, 100%, 94%)",
        'very-vary-blue':"hsl(220, 13%, 13%)",
        'dark-grayish-blue':"hsl(219, 9%, 45%)",
        'grayish-blue':"hsl(220, 14%, 75%)",
        'light-grayish-blue':'hsl(223, 64%, 98%)',
        'white':"hsl(0, 0%, 100%)",
        'black':"hsl(0, 0%, 0%)",
        'halfBlack':'rgba(0, 0, 0, 0.7)',
      },
      spacing:{
        twenty:"20%",
        sixty:"60%",
        fullView:"100vh",
        fourH:"400px",
        ninety:"90%",
        thumbnailWidth:"50%",
        thumbnail:"20%",
        fitBorder:"85%",
        thumbailHeight:"70px",
        upperHeight:"500px",
        upperPer:"80%",
        sideCenter:"32%",
        center:"46%",
        bgRound:"40px",
        start:"155px",
        cartWidth:"300px",
      },
      borderColor:{
        'orange':"hsl(26, 100%, 55%)",
        'dark-grayish-blue':"hsl(219, 9%, 45%)",
      },
      outlineColor:{
        'orange':"hsl(26, 100%, 55%)",
      },
      backgroundColor:{
        'orange':"hsl(26, 100%, 55%)",
      },
      borderWidth:{
        '1':'1px',
      },
      fontSize:{
        '9px':'9px',
        'small':'12px',
        'normal':'17px',
      },
      margin:{
        'res':'5%',
        'big':'15%',
      },
    },
  },
  plugins: [],
}
