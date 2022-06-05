module.exports = {
  mode:"jit",
  content: [
    "index.html",
    "./output/script.js"
  ],
  theme: {
    extend: {
      colors:{
        'guide-orange':"hsl(26, 100%, 55%)",
        'guide-pale-orange':"hsl(25, 100%, 94%)",
        'very-vary-blue':"hsl(220, 13%, 13%)",
        'dark-grayish-blue':"hsl(219, 9%, 45%)",
        'grayish-blue':"hsl(220, 14%, 75%)",
        'light-grayish-blue':'hsl(223, 64%, 98%)',
        'white':"hsl(0, 0%, 100%)",
        'black':"hsl(0, 0%, 0%)"
      },
      spacing:{
        twenty:"20%",
        sixty:"60%",
      },
      borderColor:{
        'orange':"hsl(26, 100%, 55%)",
      }
    },
  },
  plugins: [],
}
