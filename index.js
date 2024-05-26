import express from "express";

const app = express();
const port = 3000;
app.get("/",(req,res) => {
const today  = new Date("June 20, 2023 11:13:00");
const day = today.getDay();
let week = "its weekday";
let adv ="you gotta work hard";
if(day == 0 || day == 6 ){
  week ="its weekend ";
  adv = "have fun";
}
res.render("index.ejs",{
weekday : week,
advice :adv,
});





})
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  