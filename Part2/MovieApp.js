$(function() {
    $('#movieForm').on('submit', function(event) {
        event.preventDefault();
        let title = $('#title').val();
        let rating = $('#rating').val();
        let userInput = $('#title').val();


        //When the form is submitted, capture the values for each of the inputs 
        //and append them to the DOM along with a button to remove each title and rating from the DOM.

        $('#theList').append(`<div><strong>Title:</strong> ${title} - <strong>Rating:</strong> ${rating} <button class='deleteButton'>Delete</button></div>`);
        $('#theList div').addClass('movieList');

        $('#title').val('');
        $('#rating').val('');

        $(document).on('click', '.deleteButton', function() {
            // Remove the parent movieList div when the delete button is clicked
            $(this).parent('.movieList').remove();
        });

        //Ensures that user inputs title with at least 2 characters in it.
        if (userInput.length < 2) {
            alert('Please enter 2 or more characters.');
        };

        $('#sortButton').click(function() {
            let movies = $('.movieList').toArray();
              
            if ($(this).text() === 'Sort Alphabetically') {
                // Sort movies alphabetically by title
                movies.sort(function(a, b) {
                  let titleA = $(a).text().toLowerCase();
                  let titleB = $(b).text().toLowerCase();

                    if(titleA < titleB) {
                        return -1;
                    } else if (titleA > titleB) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                
                // Update button text and reorder movies
                $(this).text('Sort by Rating');
                $('#theList').html(movies);
            } else {
                // Sort movies from highest to lowest based on rating
                movies.sort(function(a, b) {
                    let ratingA = parseInt($(a).text().split('Rating: ')[1]);
                    let ratingB = parseInt($(b).text().split('Rating: ')[1]);
                    return ratingB - ratingA;
                });
                
                // Update button text and reorder movies
                $(this).text('Sort Alphabetically');
                $('#theList').html(movies);
            };
        });
    });
});
        
        


    
