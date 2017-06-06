class MoonphasesController < ApplicationController

  def index
    @moonphases = Moonphase.all
    render json: @moonphases
  end

end
