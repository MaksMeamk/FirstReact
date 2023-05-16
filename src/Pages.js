import { loremIpsum } from "lorem-ipsum";

const BuildPage = (index) => (
  <>
    <h2>Page {index} </h2>
    <div>
      Page {index} content: {loremIpsum({ count: 5 })}
    </div>
  </>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
