/* Page model queries */
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");
/* media queries */
const FindAllMedia = require("../../../important/admin/adminModels/queries/media/FindAllMedia");
module.exports = {
  home(req, res, next) {
    const AllMedia = FindAllMedia();
    const HomePage = FindPageWithParam({ slug: "home" });
    Promise.all([AllMedia, HomePage]).then(result => {
      res.render(`${result[1][0].template.path}`, {
        title: result[1][0].title,
        content: result[1][0].content,
        keywords: result[1][0].keywords,
        description: result[1][0].description,
        author: result[1][0].author,
        media: result[0]
      });
    });
  } /* end of home function */,

  anyPage(req, res, next) {
    let slug = req.params.slug;
    const AllMedia = FindAllMedia();
    const AnyPage = FindPageWithParam({ slug: slug });
    Promise.all([AllMedia, AnyPage]).then(result => {
      if (result[1].length < 1) {
        res.redirect("/");
      } else {
        if (typeof result[1][0].template.path !== "undefined") {
          res.render(`${result[1][0].template}`, {
            title: result[1][0].title,
            content: result[1][0].content,
            keywords: result[1][0].keywords,
            description: result[1][0].description,
            author: result[1][0].author,
            media: result[0]
          });
        } else {
          res.render("index", {
            title: result[1][0].title,
            content: result[1][0].content,
            keywords: result[1][0].keywords,
            description: result[1][0].description,
            author: result[1][0].author,
            media: result[0]
          });
        }
      }
    });
  } /* end of any page function */
};
