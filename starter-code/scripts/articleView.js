// IN-CLASS TODO: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};


articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* TODO: If the slect box changes to an option that has a value, we should:
               1. Hide all of the articles
               2. Fade in only the articles that match based on on the author
                 that was aselected. Hint: use an attribute selector to find
                 those articles that match the value, and then fade them in.
             */

      $('article').hide(); //Hide all of the articles

      $('article').not('.template').each(function(){
        var author = $(this).find('address a').text();
        var selection = $('#author-filter').val();

        // console.log('author: ' + author);
        // console.log($('#author-filter').val());
        // console.log('selection: ' + selection);
        if( author === selection ){
          $(this).fadeIn(3000);
        };
      });
    }
    else {
      $('article').not('.template').fadeIn(3000);
    }
    $('#category-filter').val('');
  }
);
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide(); //Hide all of the articles

      $('article').not('.template').each(function(){
        var category = $(this).attr('data-category');
        var selection = $('#category-filter').val();

        // console.log('category: ' + category);
        // console.log($('#category-filter').val());
        // console.log('selection: ' + selection);
        if( category === selection ){
          $(this).fadeIn(3000);
        };
      });
    }
    else {
      $('article').not('.template').fadeIn(3000);
    }
    $('#author-filter').val('');
  }
);
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab').show();
    $(this).hide();
    var content = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + content).fadeIn(3000);
  });
  $('.main-nav .tab:first').click();
};
    // $('.tab').hide();
    /* TODO:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
    When a .read-on link is clicked, we can:
    1. Prevent the defaul actionof a link.
    2. Reveal everything in that particular article now.
    3. Hide that read-on link!

    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
};

// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
