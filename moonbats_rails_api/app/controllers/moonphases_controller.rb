class MoonphasesController < ApplicationController

  def index
    if params[:date]
      @moonphase = Moonphase.where("date = ?", DateTime.parse(params[:date])).first
      @moonphases = Moonphase.where("phase = ?", @moonphase.phase)
    else
      @moonphases = Moonphase.all
    end
    render json: @moonphases
  end
end
