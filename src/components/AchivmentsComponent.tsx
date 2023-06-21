import React from 'react';
import {Tooltip} from 'react-tooltip';
import "../styles/AchivmentsComponent.css";

type Achievement = {
  title: string;
  type: string;
  value: number;
  description: string;
};

type AchievementsListProps = {
  achievements: Achievement[];
};

const AchievementsList: React.FC<AchievementsListProps> = ({ achievements }) => {
  const getImagePath = (type: string) => {
    switch (type) {
        case 'eco':
            return 'src/img/beEco1lvl.png';
        case 'pro':
            return 'src/img/bePro5lvl.png';
        case 'friendly':
            return 'src/img/beFr1lvl.png';
        case 'fit':
            return 'src/img/beFit1lvl.png';
        case 'open':
            return 'src/img/beOpen1lvl.png';
        case 'health':
            return 'src/img/beHp1lvl.png'; 
      default:
        return 'src/img/beEco_ach.png';
    }
  };

  return (
    <div className='d-flex'>
      {achievements.map((achievement, index) => (
        <div key={index} className="mr-3 position-relative">
            <img
                className='ach_icon'
                src={getImagePath(achievement.type)}
                alt={achievement.title}
            />
            <Tooltip anchorSelect='.ach_icon' place="bottom">
                {achievement.title}<br/>
                {achievement.description}
            </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default AchievementsList;
