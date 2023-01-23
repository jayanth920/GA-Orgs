class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:google_oauth2, :youtube]

  def self.find_for_google_oauth2(access_token, signed_in_resource=nil)
    data = access_token.info
    user = User.where(email: data["email"]).first
    unless user
      user = User.create(name: data["name"],
    		   email: data["email"],
    		   password: Devise.friendly_token[0,20]
    		  )
    end
    user
	end

  def self.find_for_youtube(access_token, signed_in_resource=nil)
    data = access_token.info
    user = User.where(email: data["email"]).first
    if user
      #Update the user's token
      user.youtube_token = access_token["credentials"]["token"]
      user.youtube_token_expires = access_token["credentials"]["expires_at"]
      user.save
    else
      user = User.create(name: data["name"],
           email: data["email"],
           password: Devise.fraccess_tokeniendly_token[0,20],
           youtube_token: access_token["credentials"]["token"],
           youtube_token_expires: access_token["credentials"]["expires_at"]
          )
    end
    user
  end

end


# "credentials"=>
#   {"token"=>"ya29.AHES6ZR0WruPZPvFSNgkYxG9j6iJYEduXy5Ep3nTX6nRiafHnGGesu44",
#    "expires_at"=>1382559743,
#    "expires"=>true},
