const players = [
{
    name:"Ruturaj Gaikwad",
    role:"Batsman (Captain)",
    dob:"31 Jan 1997",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team4playerImgNoBg_1742633286428.png"
},
{
    name:"MS Dhoni",
    role:"Wicket Keeper",
    dob:"7 Jul 1981",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team1playerImgNoBg_1742631281534.png"
},
{
    name:"Sanju Samson",
    role:"Wicket Keeper",
    dob:"11 Nov 1994",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team50playerImgNoBg_1769680538650.jpeg"
},
{
    name:"Akeal Hosein",
    role:"All Rounder",
    dob:"25 Apr 1993",
    style:"Left Hand Bat / Left Arm Orthodox",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team51playerImgNoBg_1766466383970.jpg"
},
{
    name:"Prashant Veer",
    role:"Bowler",
    dob:"24 Nov 2005",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team59playerImgNoBg_1766471716750.jpg"
},
{
    name:"Kartik Sharma",
    role:"Wicket Keeper",
    dob:"26 Apr 2006",
    style:"Right Arm Medium",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team53playerImgNoBg_1766470751606.jpg"
},
{
    name:"Matthew Short",
    role:"Batsman",
    dob:"08 Nov 1995",
    style:"Right Hand Bat / Off Spin",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team54playerImgNoBg_1766470970945.jpg"
},
{
    name:"Aman Khan",
    role:"All Rounder",
    dob:"23 Nov 1996",
    style:"Right Hand Bat / Right Arm Medium",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team52playerImgNoBg_1766466600907.jpg"
},
{
    name:"Sarfaraz Khan",
    role:"Batsman",
    dob:"22 Oct 1997",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team58playerImgNoBg_1766471578804.jpg"
},
{
    name:"Matt Henry",
    role:"Bowler",
    dob:"14 Dec 1991",
    style:"Right Arm Fast",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team55playerImgNoBg_1766471193586.jpg"
},
{
    name:"Rahul Chahar",
    role:"Bowler",
    dob:"04 Aug 1999",
    style:"Right Arm Leg Spin",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team56playerImgNoBg_1766471287781.jpg"
},
{
    name:"Zak Foulkes",
    role:"Bowler",
    dob:"21 Nov 2002",
    style:"Right Hand Bat / Right Arm Medium",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team57playerImgNoBg_1766471463524.jpg"
},
{
    name:"Anshul Kamboj",
    role:"All Rounder",
    dob:"06 Dec 2000",
    style:"Right Arm Medium Fast",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team43playerImgNoBg_1742633719452.png"
},
{
    name:"Ayush Mhatre",
    role:"Batsman",
    dob:"16 Jul 2007",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team45playerImgNoBg_1744959685807.png"
},
{
    name:"Dewald Brevis",
    role:"Batsman",
    dob:"29 Apr 2003",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team46playerImgNoBg_1745386143422.png"
},
{
    name:"Gurjapneet Singh",
    role:"Bowler",
    dob:"08 Nov 1998",
    style:"Left Arm Medium",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team15playerImgNoBg_1742633613385.png"
},
{
    name:"Jamie Overton",
    role:"Bowler",
    dob:"10 Apr 1994",
    style:"Right Hand Bat / Right Arm Fast",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team25playerImgNoBg_1742633495127.png"
},
{
    name:"Khaleel Ahmed",
    role:"Bowler",
    dob:"05 Dec 1997",
    style:"Left Arm Fast Medium",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team13playerImgNoBg_1742633434882.png"
},
{
    name:"Mukesh Choudhary",
    role:"Bowler",
    dob:"06 Jul 1996",
    style:"Left Arm Medium Fast",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team24playerImgNoBg_1742633527675.png"
},
{
    name:"Nathan Ellis",
    role:"Bowler",
    dob:"22 Sep 1994",
    style:"Right Arm Fast",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team23playerImgNoBg_1742633588891.png"
},
{
    name:"Noor Ahmad",
    role:"Bowler",
    dob:"03 Jan 2005",
    style:"Left Arm Wrist Spin",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team12playerImgNoBg_1742633410911.png"
},
{
    name:"Ramakrishna Ghosh",
    role:"All Rounder",
    dob:"28 Aug 1997",
    style:"Right Hand Bat / Right Arm Medium",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team41playerImgNoBg_1742633659366.png"
},
{
    name:"Shivam Dube",
    role:"All Rounder",
    dob:"26 Jun 1993",
    style:"Left Hand Bat / Right Arm Medium",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team9playerImgNoBg_1742633600133.png"
},
{
    name:"Shreyas Gopal",
    role:"Bowler",
    dob:"04 Sep 1993",
    style:"Right Hand Bat / Leg Spin",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team16playerImgNoBg_1742633576193.png"
},
{
    name:"Urvil Patel",
    role:"Wicket Keeper",
    dob:"17 Oct 1998",
    style:"Right Hand Bat",
    img:"https://gallery.chennaisuperkings.com/PROD/TEAM/Team49playerImgNoBg_1747902412853.png"
}
];

const wkContainer = document.getElementById("wicketkeepers");
const batContainer = document.getElementById("batsmen");
const arContainer = document.getElementById("allrounders");
const bowlContainer = document.getElementById("bowlers");

function createCard(p,i){
    return `
<div class="card">
<img src="${p.img}">
<div class="card-body">
<div class="player-info">
<div class="player-name">${p.name}</div>
<div class="role">${p.role}</div>
</div>
<div class="view" onclick="openProfile(${i})">VIEW PROFILE</div>
</div>
</div>`;
}

players.forEach((p,i)=>{
    if(p.role.includes("Wicket Keeper")){
        wkContainer.innerHTML += createCard(p,i);
    }
    else if(p.role.includes("Batsman")){
        batContainer.innerHTML += createCard(p,i);
    }
    else if(p.role.includes("All Rounder")){
        arContainer.innerHTML += createCard(p,i);
    }
    else if(p.role.includes("Bowler")){
        bowlContainer.innerHTML += createCard(p,i);
    }
});

function openProfile(i){
    let p = players[i];

    document.getElementById("popupImg").src = p.img;
    document.getElementById("popupName").innerText = p.name;
    document.getElementById("popupDOB").innerText = p.dob;
    document.getElementById("popupRole").innerText = p.role;

    if(p.role.includes("Bowler")){
        document.getElementById("styleLabel").innerText = "Bowling Style :";
    }
    else{
        document.getElementById("styleLabel").innerText = "Batting Style :";
    }

    document.getElementById("styleValue").innerText = p.style;
    document.getElementById("popup").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}