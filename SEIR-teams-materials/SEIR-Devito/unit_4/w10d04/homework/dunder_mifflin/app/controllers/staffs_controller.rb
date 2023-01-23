class StaffController
  # index route
  def index
    render json: Staff.all
  end

  # show route
  def show
    render json: Staff.find(params["id"])
  end

  # create route
  def create
    render json: Staff.create(params["staff"])
  end

  # delete route
  def delete
    render json: Staff.delete
  end

  # update route
  def update
    render json: Staff.update(params["id"], params["staff"])
  end

end
