/*
$(document).ready(function() {
  let amenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    chkbx = $(this);
    if (chkbx.checked) {
      amenity_id = chkbx.data('id');
      amenity_name = chkbx.data('name');
      amenities['amenity_name'] = amenuty_id;
      console.log(amenities);
      console.log(amenity_id);
    } else {
      amenity_name = chkbx.data('name');
      delete amenities[amenity_name]
    };
    $('.amenities h4').text(Object.values(amenities).join(','));
  });
});
*/
$(document).ready(function () {
  let checkedAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }
    console.log(checkedAmenities);
    let lst = Object.values(checkedAmenities);
    if (lst.length > 0) {
      $('div.amenities h4').text(Object.values(checkedAmenities).join(', '));
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  });
});
