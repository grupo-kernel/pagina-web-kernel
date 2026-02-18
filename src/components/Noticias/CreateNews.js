import { newsData } from "../../data/newsData.js";
import { newsHero } from "./NewsHero.js";
import { newsGrid } from "./NewsGrid.js";
import { newsCTA } from "./NewsCTA.js";

export function createNews() {
  const section = document.createElement('section');
  section.classList.add('w-full', 'tabletBig:w-7xl', 'xl:w-full');

  section.innerHTML = `
    ${newsHero()}
    ${newsGrid(newsData)}
    ${newsCTA()}
    
    `;
  return section;
}
