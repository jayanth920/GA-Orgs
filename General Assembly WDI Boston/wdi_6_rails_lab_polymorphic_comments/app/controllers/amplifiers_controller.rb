class AmplifiersController < ApplicationController
  before_action :set_amplifier, only: [:show, :edit, :update, :destroy]

  # GET /amplifiers
  # GET /amplifiers.json
  def index
    @amplifiers = Amplifier.all
  end

  # GET /amplifiers/1
  # GET /amplifiers/1.json
  def show
  end

  # GET /amplifiers/new
  def new
    @amplifier = Amplifier.new
  end

  # GET /amplifiers/1/edit
  def edit
  end

  # POST /amplifiers
  # POST /amplifiers.json
  def create
    @amplifier = Amplifier.new(amplifier_params)

    respond_to do |format|
      if @amplifier.save
        format.html { redirect_to @amplifier, notice: 'Amplifier was successfully created.' }
        format.json { render action: 'show', status: :created, location: @amplifier }
      else
        format.html { render action: 'new' }
        format.json { render json: @amplifier.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /amplifiers/1
  # PATCH/PUT /amplifiers/1.json
  def update
    respond_to do |format|
      if @amplifier.update(amplifier_params)
        format.html { redirect_to @amplifier, notice: 'Amplifier was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @amplifier.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /amplifiers/1
  # DELETE /amplifiers/1.json
  def destroy
    @amplifier.destroy
    respond_to do |format|
      format.html { redirect_to amplifiers_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_amplifier
      @amplifier = Amplifier.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def amplifier_params
      params.require(:amplifier).permit(:make, :model, :price, :max_power, :impedance, :height, :weight)
    end
end
