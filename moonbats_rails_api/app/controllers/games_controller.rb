class GamesController < ApplicationController
  def index
    @team = Team.find(params[:team_id])
    @games = @team.games
    render json: @games

  end

  def show
    @team = Team.find(params[:team_id])
    @game = @team.games.find(params[:id])
    render json: @game
  end
  def futuregames
    @team = Team.find(params[:team_id])
    @games = @team.games.where("date > ?", DateTime.now)

    render json: @games
  end
end
