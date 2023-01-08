const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/ShahirZain/personal-website.git";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
