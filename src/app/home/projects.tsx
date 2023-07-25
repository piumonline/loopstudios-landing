import React from "react";
import ProjectsCard from "../components/projectsCard";

function Projects() {
  return (
    <section className="flex flex-col mb-16 relative md:mx-20">
      <div className="flex justify-center md:justify-start">
        <h1 className="text-3xl my-8 font-thin tracking-wide uppercase md:pl-6">
          Our creations
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-6">
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-deep-earth.jpg"
          desktop_imageUri=" /images/desktop/image-deep-earth.jpg"
          title="Deep earth"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-soccer-team.jpg "
          desktop_imageUri=" /images/desktop/image-soccer-team.jpg"
          title="Soccer team VR"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-pocket-borealis.jpg"
          desktop_imageUri=" /images/desktop/image-pocket-borealis.jpg"
          title="Pocket borealis"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-night-arcade.jpg"
          desktop_imageUri=" /images/desktop/image-night-arcade.jpg"
          title="The night arcade"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-curiosity.jpg"
          desktop_imageUri=" /images/desktop/image-curiosity.jpg"
          title="The curiosity"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-fisheye.jpg"
          desktop_imageUri=" /images/desktop/image-fisheye.jpg"
          title="Make it fisheye"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-from-above.jpg"
          desktop_imageUri=" /images/desktop/image-from-above.jpg"
          title="From up above VR"
        />

        <ProjectsCard
          mobile_imageUri="/images/mobile/image-grid.jpg"
          desktop_imageUri=" /images/desktop/image-grid.jpg"
          title="The grid"
        />
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-black w-fit p-2 px-10 mt-4 md:mt-0 tracking-widest text-xs font-semibold md:absolute top-8 right-6 hover:bg-black hover:text-white">
          SEE ALL
        </button>
      </div>
    </section>
  );
}

export default Projects;
