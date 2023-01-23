class HeadphonesController < ApplicationController
  before_action :set_headphone, only: [:show, :edit, :update, :destroy]

  # GET /headphones
  # GET /headphones.json
  def index
    @headphones = Headphone.all
  end

  # GET /headphones/1
  # GET /headphones/1.json
  def show
  end

  # GET /headphones/new
  def new
    @headphone = Headphone.new
  end

  # GET /headphones/1/edit
  def edit
  end

  # POST /headphones
  # POST /headphones.json
  def create
    @headphone = Headphone.new(headphone_params)

    respond_to do |format|
      if @headphone.save
        format.html { redirect_to @headphone, notice: 'Headphone was successfully created.' }
        format.json { render action: 'show', status: :created, location: @headphone }
      else
        format.html { render action: 'new' }
        format.json { render json: @headphone.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /headphones/1
  # PATCH/PUT /headphones/1.json
  def update
    respond_to do |format|
      if @headphone.update(headphone_params)
        format.html { redirect_to @headphone, notice: 'Headphone was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @headphone.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /headphones/1
  # DELETE /headphones/1.json
  def destroy
    @headphone.destroy
    respond_to do |format|
      format.html { redirect_to headphones_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_headphone
      @headphone = Headphone.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def headphone_params
      params.require(:headphone).permit(:make, :model, :description, :impedance, :price)
    end
end
