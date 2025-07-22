import { useState,useEffect } from "react"

 const starBackground = () => {
    const [stars,setStars]=useState([]);
    const [meteors,setMeteors]=useState([]);
    useEffect(()=>{
        generateStars();
        generateMeteors();
    },[]);
    const generateMeteors=()=>{
        const numberOfMeteors=4;
        const newMeteors=[];
        for(let i=0;i<numberOfMeteors;i++){
            newMeteors.push({
                id:i,
                size:Math.random()*2+1,
                x:Math.random()*100,
                y:Math.random()*20,
                animationDuration:Math.random()*2+1, // Faster: 1s to 3s
                opacity:Math.random()*3+3,
            });
        }
        setMeteors(newMeteors);
    };
    const generateStars=()=>{
        const numberOfStars=Math.floor(window.innerWidth*window.innerHeight*0.0001);
        const newStars=[];
        for(let i=0;i<numberOfStars;i++){
            newStars.push({
                id: `${i}-${Math.random()}`,
                size:Math.random()*3+1,
                x:Math.random()*100,
                y:Math.random()*100,
                animationDuration:Math.random()*4+2,
                opacity:Math.random()*0.5+0.5,
            });
        }
        setStars(newStars);
    };
    return (
    <div className="fixed inset-0 pointer-events-none">
        {stars.map((star, i) => (
  <div
    key={i}
    className="star animate-pulse-subtle"
    style={{
      width: star.size + "px",
      height: star.size + "px",
      left: star.x + "%",
      top: star.y + "%",
      animationDuration: star.animationDuration + "s",
      opacity: star.opacity,
    }}
  />
))}

            {meteors.map((meteor, i) => (
  <div
    key={meteor.id ?? i}
    className="meteor animate-meteor"
    style={{
      width: meteor.size * 50 + "px",
      height: meteor.size + "px",
      left: meteor.x + "%",
      top: meteor.y + "%",
      animationDuration: meteor.animationDuration + "s",
      opacity: meteor.opacity,
    }}
  />
))}

    </div>
    );
};
export default starBackground;