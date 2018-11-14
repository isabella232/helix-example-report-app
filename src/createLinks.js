
module.exports = function createLinks(navChildren, logger) {
  
    if (navChildren && navChildren.length > 0) {      
        let nav = navChildren;

        nav = nav.map(element => element          
            .replace(new RegExp('.md"', 'g'), '.html"'));
            
  
        return nav;
    }
    return [];
  }
