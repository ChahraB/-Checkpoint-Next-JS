import { skills, profile } from "@/data/skills";
import { projects } from "@/data/projects";


export async function fetchHomePageData() {
  await delay(50);
  return {
    profile,
    skills: skills.slice(0, 4),
   
  };
}

export async function fetchProjectsPageData() {
  await delay(50);
  return {
    projects,
    totalCount: projects.length,
    
  };
}

export async function fetchAboutPageData() {
  await delay(30);
  return {
    profile,
    
  };
}

export async function fetchContactPageData() {
  await delay(30);
  return {
    profile,
    
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
