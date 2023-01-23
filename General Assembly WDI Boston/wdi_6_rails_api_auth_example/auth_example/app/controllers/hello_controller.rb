#
class HelloController < OpenReadController
  DATA = [{ hello: 'world' }, { hello: 'joe' }]

  def index
    render json: DATA
  end

  def show
    if (iid = params[:id].to_i) == 0
      email = current_user ? current_user.email : 'Anonymous'
      render json: { greeting: "Hello, #{email}" }
    elsif iid.between? 1, DATA.length
      render json: DATA[iid - 1]
    else
      head :no_content
    end
  end
end
