class BlogpostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :mood
end
