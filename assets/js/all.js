"use strict";

$(document).ready(function () {
  $('.expand').click(function () {
    if ($('.expand__less').is('.d-none')) {
      $('.expand__more').addClass('d-none');
      $('.expand__less').removeClass('d-none');
    } else {
      $('.expand__more').removeClass('d-none');
      $('.expand__less').addClass('d-none');
    }
  });
});
//# sourceMappingURL=all.js.map
