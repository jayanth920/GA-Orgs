class TweetsController < ApplicationController

  # Top 10 trending topics
  def trending
    @trends = TwitterClient.trends
    render json: @trends
  end

  # Show tweets from a user
  def show_user_tweets
    @user_tweets = TwitterClient.user_timeline(params[:name])
    render json: @user_tweets
  end

  # Show tweets from a search term
  def search
    @tweets = TwitterClient.search(params[:query], result_type: 'recent').take(20)
    render json: @tweets
  end

end
