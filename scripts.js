$(function() {
    //Contacts
    $('get-button').on('click',function() {
        $.ajax({
            url:'/product',
            contentType:'application/json',
            success:function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    tbodyEl.append('\
                    <tr>\
                    <td class="id">'+product.id+'</td>\
                    <td><input type="text" class="name and number" value="'+product.name_and_number+'"></td>\
                    <td>\
                    <button class="update-button">PUT</button>\
                    <button class="delete-button">Delete</button>\
                    <td>\
                    <\tr>\
                    ');
                });
            }
        });
    });
});