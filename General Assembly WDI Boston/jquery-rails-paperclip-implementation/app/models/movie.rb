class Movie < ActiveRecord::Base

  has_attached_file :poster, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  validates_attachment_content_type :poster, :content_type => /\Aimage\/.*\Z/

  # by default, avatar will be named 'data', this renames the file to a timestamp. this will also fix browser caching issues for updates
  def rename_poster
    self.poster.instance_write :file_name, "#{Time.now.to_i.to_s}.png"
  end

  before_post_process :rename_poster
end
