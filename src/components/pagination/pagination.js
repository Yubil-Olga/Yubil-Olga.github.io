import '../../../node_modules/paginationjs/dist/pagination';
$('#pagination-container').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, ...  195],
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        $('#data-container').html(html);
    }
})
function simpleTemplating(data) {
    var html = '<ul>';
    $.each(data, function(index, item){
        html += '<li>'+ item +'</li>';
    });
    html += '</ul>';
    return html;
}