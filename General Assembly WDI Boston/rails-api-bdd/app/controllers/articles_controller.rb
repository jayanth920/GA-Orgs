# frozen_string_literal: true

class ArticlesController < ApplicationController
  before_action :set_article, only: %i[show update destroy]

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :content)
  end
end
