# Tweet Sentiment Analyzer

Tweet Sentiment Analyzer is a web application designed to analyze the sentiment of tweets using machine learning technology. The project encompasses tweet data collection, data cleaning, machine learning model building, API creation, and user interface development.

## Technologies Used

- **Backend:**
  - Python
  - Flask
  - Scikit-learn
  - Tweepy
  - Pandas
  - Docker
  - Azure ML Studio

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Deployment:**
  - API: Azure
  - Website: Vercel

## Features

- Collects tweet data using the Twitter API
- Cleans and preprocesses tweet data
- Builds machine learning models using Bernoulli Naive Bayes and Logistic Regression
- Provides an API for tweet sentiment prediction
- User interface for inputting tweets and displaying sentiment analysis results in real-time

## Usage

Before using this application, you need to activate CORS Anywhere on Heroku.

1. Visit the CORS Anywhere website: [CORS Anywhere Heroku](https://cors-anywhere.herokuapp.com/)
2. Press the "Request temporary access" button.

After completing the above steps, you can use the application:

1. **Access the Web Application:**
   Open the deployed web application in your browser: [Tweet Sentiment Analyzer](https://sentiment-analyzer-tweet.vercel.app)

2. **Input Tweets:**
   Enter the tweet you want to analyze in the provided input field.

3. **View Sentiment Analysis:**
   Submit the tweet to receive and view the sentiment analysis results in real-time.

## Contribution

Contributions are welcome! Please fork this repository and submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
