import React from "react";
import ProjectsCard from "../components/projectsCard";

function Projects() {
  return (
    <section className="flex flex-col justify-center text-center mb-16">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <h1 className="text-3xl my-8 font-thin tracking-wide uppercase">Our creations</h1>
        {/* <button className="border-2 border-black px-8 mt-4 md:mt-0">
          See all
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-6">
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-deep-earth.jpg"
          desktop_imageUri=" /images/desktop/image-deep-earth.jpg"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-soccer-team.jpg "
          desktop_imageUri=" /images/desktop/image-soccer-team.jpg"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-pocket-borealis.jpg"
          desktop_imageUri=" /images/desktop/image-pocket-borealis.jpg"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-night-arcade.jpg"
          desktop_imageUri=" /images/desktop/image-night-arcade.jpg"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-curiosity.jpg"
          desktop_imageUri=" /images/desktop/image-curiosity.jpg"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-fisheye.jpg"
          desktop_imageUri=" /images/desktop/image-fisheye.jpg"
        />
        <ProjectsCard
          mobile_imageUri="/images/mobile/image-from-above.jpg"
          desktop_imageUri=" /images/desktop/image-from-above.jpg"
        />

        <ProjectsCard
          mobile_imageUri="/images/mobile/image-grid.jpg"
          desktop_imageUri=" /images/desktop/image-grid.jpg"
        />
        <div className="w-screen">
          <button className="border-2 border-black p-2 px-8 mt-4 md:mt-0 tracking-widest text-xs font-semibold">
            SEE ALL
          </button>
        </div>
      </div>
    </section>

    //   <section className="flex flex-col justify-center text-center">
    //       <div className="flex flex-col md:flex-row items-center justify-center">
    //   <h1 className="text-title text-4xl my-8 font-thin">Our creations</h1>
    //   <button className="border-2 border-black px-8 ml-0 md:ml-8 mt-4 md:mt-0">See all</button>
    // </div>
    //     <div className="grid md:grid-cols-4 gap-4 m-16">
    //     </div>
    //     {/* <div className="flex justify-center md:justify-end mt-8">
    //       <button className="border-2 border-black px-8">See all</button>
    //     </div> */}
    //   </section>
  );
}

export default Projects;
