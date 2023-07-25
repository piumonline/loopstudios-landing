import React from "react";

interface ProjectsCardProps {
  mobile_imageUri: string;
  desktop_imageUri: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  mobile_imageUri,
  desktop_imageUri,
}) => {
  return (
    <>
      <div className="relative">
        {/* <picture>
      <img src={mobile_imageUri} alt="Deep Earth" className="w-full" />
        <source media="(max-width: 767px)" src={mobile_imageUri} />
        <source media="(min-width: 768px)" srcSet={mobile_imageUri.replace('mobile', 'desktop')} />
      </picture> */}

        <picture>
          <source media="(min-width: 768px)" srcSet={desktop_imageUri} />
          <img src={mobile_imageUri} alt="Deep Earth" className="w-full" />
        </picture>

        <div className="absolute text-xl text-white bottom-4 left-6 whitespace-pre-line">
          DEEP EARTH
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
