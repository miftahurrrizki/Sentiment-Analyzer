function showOutput() {
    const inputText = $('#tweetInput').val();
    if (inputText.trim() === '') {
        alert('Please enter a tweet.');
        return;
    }

    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://57.155.22.50/predict/';

    $.ajax({
        url: corsProxy + apiUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            texts: [inputText],
            model_name: 'v1'
        }),
        beforeSend: function() {
            $('#showOutput').text('Processing...');
        },
        success: function(response) {
            const output = response.predictions ? response.predictions[0] : { sentiment: 'No result found' };

            // Determine sentiment text based on output.sentiment
            let sentimentText;
            if (output.sentiment === 'Positive') {
                sentimentText = 'Positive';
            } else if (output.sentiment === 'Negative') {
                sentimentText = 'Negative';
            } else {
                sentimentText = 'No result found';
            }

            $('#showOutput').text(`Tweet tersebut memiliki sentimen ${sentimentText}`);
        },
        error: function() {
            $('#showOutput').text('An error occurred while processing your request.');
        }
    });
}
