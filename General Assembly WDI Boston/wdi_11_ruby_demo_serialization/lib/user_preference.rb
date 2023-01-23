class UserPreference
  attr_accessor :paper_billing, :login_retries, :send_info, :text_alerts

  def initialize()
    @paper_billing = true
    @login_retries = 4
    @send_info = true
    @text_alerts = false
  end

  def to_s
    "User Preference: \n" << self.instance_variables.sort.map do |i|
       "\t#{i.to_s.gsub(/@/,'')}: #{self.instance_variable_get(i)}"
    end.join("\n")
  end
end
